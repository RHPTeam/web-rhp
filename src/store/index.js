import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { arrayRand } from "@/utils/random";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    quizLibrary: [],
    userResults: [],
    userResult: null,
    userInfo: null,
    user: null,
    waitLoading: false,
    error: null
  },
  getters: {
    loadQuizs(state) {
      if (state.quizLibrary.length < 2) {
        return state.quizLibrary;
      } else {
        return state.quizLibrary.sort((quizA, quizB) => {
          return quizA.createdAt > quizB.createdAt;
        });
      }
    },
    loadQuiz(state) {
      return quizId => {
        return state.quizLibrary.find(quiz => {
          return quiz.id === quizId;
        });
      };
    },
    // Getter all user's results from firebase
    loadUserResults(state) {
      return state.userResults.reverse()
    },
    loadInfoUserResult(state) {
      return userResultId => {
        return state.userResults.find(userResult => {
          return userResult.id === userResultId
        })
      }
    },
    loadUserResult(state) {
      return state.userResult;
    },
    loadUserInfo(state) {
      return state.userInfo;
    },
    user(state) {
      return state.user;
    },
    waitLoading(state) {
      return state.waitLoading;
    },
    error(state) {
      return state.error;
    }
  },
  mutations: {
    setLoadQuizs(state, payload) {
      state.quizLibrary = payload;
    },
    setLoadUserResults(state, payload) {
      state.userResults = payload
    },
    createQuiz(state, payload) {
      state.quizLibrary.push(payload);
    },
    createUserResult(state, payload) {
      state.userResult = payload;
    },
    createUserInfo(state, payload) {
      state.userInfo = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.waitLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    loadQuizsUnRand({ commit }) {
      commit("setLoading", true);
      firebase
        .database()
        .ref("quizs")
        .once("value")
        .then(data => {
          const quizs = [];
          const obj = data.val();
          for (let key in obj) {
            quizs.push({
              id: key,
              question: obj[key].question,
              answers: obj[key].answers,
              createdAt: obj[key].createdAt
            });
          }
          commit("setLoadQuizs", quizs);
          commit("setLoading", false);
        })
        .catch(error => {
          console.log(error);
          commit("setLoading", true);
        });
    },
    loadUserResults({ commit }) {
      commit("setLoading", true);
      firebase
        .database()
        .ref("results")
        .once("value")
        .then(data => {
          const userResults = [];
          const obj = data.val();
          console.log({obj})
          for (let key in obj) {
            userResults.push({
              id: key,
              results: obj[key].results,
              userInfo: obj[key].userInfo
            });
          }
          commit("setLoadUserResults", userResults)
          commit("setLoading", false);
        })
        .catch(error => {
          console.log(error);
          commit("setLoading", true);
        })
    },
    loadQuizs({ commit }) {
      commit("setLoading", true);
      firebase
        .database()
        .ref("quizs")
        .once("value")
        .then(data => {
          const quizs = [];
          const obj = data.val();
          for (let key in obj) {
            quizs.push({
              id: key,
              question: obj[key].question,
              answers: obj[key].answers,
              createdAt: obj[key].createdAt
            });
          }
          // Random 30 question
          const quizRand = arrayRand(quizs, 30);
          commit("setLoadQuizs", quizRand);
          commit("setLoading", false);
        })
        .catch(error => {
          console.log(error);
          commit("setLoading", true);
        });
    },
    createQuiz({ commit }, payload) {
      const quiz = {
        id: Math.random(),
        question: payload.question,
        answers: payload.answers,
        createdAt: payload.createdAt
      };
      // Add data to firebase
      firebase
        .database()
        .ref("quizs")
        .push(quiz)
        .then(data => {
          const key = data.key;
          commit("createQuiz", {
            ...quiz,
            id: key
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    createUserResult({ commit }, payload) {
      const userResult = {
        results: payload.results
      };
      commit("createUserResult", userResult);
    },
    createUserInfo({ commit }, payload) {
      const userInfo = {
        nameReal: payload.nameReal,
        nameDiscord: payload.nameDiscord,
        ageReal: payload.ageReal,
        contentSkill: payload.contentSkill,
        contentIdea: payload.contentIdea
      };
      commit("createUserInfo", userInfo);
    },
    createResult({ commit, getters }) {
      const userResult = {
        userInfo: getters.loadUserInfo,
        results: getters.loadUserResult.results
      };
      firebase
        .database()
        .ref("results")
        .push(userResult)
        .then(data => {
          const key = data.key;
          commit("createUserResult", {
            ...userResult,
            id: key
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    signUserUp({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setLoading", false);
          const newUser = {
            id: user.user.uid
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    },
    signUserIn({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setLoading", false);
          const newUser = {
            id: user.user.uid
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", { id: payload.uid });
    },
    clearError({ commit }) {
      commit("clearError");
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
    }
  }
});
