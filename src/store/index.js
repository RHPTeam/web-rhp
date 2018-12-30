import Vue from "vue"
import Vuex from "vuex"
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    quizLibrary: [],
    userResult: {
      id: '',
      userId: '',
      results: [
        {
          questionId: '',
          choice: '',
          contentExplain: ''
        }
      ]
    },
    user: null,
    waitLoading: false,
    error: null
  },
  getters: {
    loadQuizs (state) {
      return state.quizLibrary.sort((quizA, quizB) => {
        return quizA.createdAt > quizB.createdAt;
      });
    },
    loadQuiz (state) {
      return quizId => {
        return state.quizLibrary.find(quiz => {
          return quiz.id === quizId;
        });
      };
    },
    loadUserResult (state) {
      return state.userResult
    },
    user (state) {
      return state.user
    },
    waitLoading (state) {
      return state.waitLoading
    },
    error (state) {
      return state.error
    }
  },
  mutations: {
    setLoadQuizs (state, payload) {
      state.quizLibrary = payload
    },
    createQuiz (state, payload) {
      state.quizLibrary.push(payload);
    },
    createUserResult (state, payload) {
      state.userResult = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.waitLoading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadQuizs ({ commit }) {
      commit('setLoading', true)
      firebase.database().ref('quizs').once('value')
      .then(data => {
        const quizs = []
        const obj = data.val()
        for (let key in obj) {
          quizs.push({
            id: key,
            question: obj[key].question,
            answers: obj[key].answers,
            createdAt: obj[key].createdAt
          })
        }
        commit('setLoadQuizs', quizs)
        commit('setLoading', false)
      })
      .catch(error => {
        console.log(error);
        commit('setLoading', true)
      })
    },
    createQuiz ({ commit }, payload) {
      const quiz = {
        id: Math.random(),
        question: payload.question,
        answers: payload.answers,
        createdAt: payload.createdAt
      }
      // Add data to firebase
      firebase.database().ref('quizs').push(quiz)
        .then(data => {
          const key = data.key
          commit("createQuiz", {
            ...quiz,
            id: key
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    createUserResult ({ commit }, payload) {
      const userResult = {
        id: Math.random(),
        userId: Math.random(),
        results: payload.results
      }
      commit("createUserResult", userResult)
    },
    signUserUp ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setLoading', false)
        const newUser = {
          id: user.user.uid
        }
        commit('setUser', newUser)
      }).catch(error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      })
    },
    signUserIn ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setLoading', false)
        const newUser = {
          id: user.user.uid
        }
        commit('setUser', newUser)
      }).catch(error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      })
    },
    autoSignIn ({ commit }, payload) {
      commit('setUser', { id: payload.uid })
    },
    clearError ({ commit }) {
      commit('clearError')
    },
    logout ({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  }
});
