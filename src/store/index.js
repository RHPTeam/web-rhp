import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    quizLibrary: [
      {
        id: "1",
        question: "What the hell A?",
        answers: ["Hello", "Bye", "Goodbye", "Huh"],
        createdAt: "10/10/2018"
      },
      {
        id: "2",
        question: "What the hell B?",
        answers: ["Hello", "Bye", "Goodbye", "Huh"],
        createdAt: "11/10/2018"
      },
      {
        id: "2",
        question: "What the hell C?",
        answers: ["Hello", "Bye", "Goodbye", "Huh"],
        createdAt: "11/10/2018"
      },
      {
        id: "2",
        question: "What the hell D?",
        answers: ["Hello", "Bye", "Goodbye", "Huh"],
        createdAt: "11/10/2018"
      },
      {
        id: "2",
        question: "What the hell E?",
        answers: ["Hello", "Bye", "Goodbye", "Huh"],
        createdAt: "11/10/2018"
      }
    ],
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
    }
  },
  getters: {
    loadQuizs(state) {
      return state.quizLibrary.sort((quizA, quizB) => {
        return quizA.createdAt > quizB.createdAt;
      });
    },
    loadQuiz(state) {
      return quizId => {
        return state.quizLibrary.find(quiz => {
          return quiz.id === quizId;
        });
      };
    },
    loadUserResult(state) {
      return state.userResult
    }
  },
  mutations: {
    createQuiz(state, payload) {
      state.quizLibrary.push(payload);
    },
    createUserResult(state, payload) {
      state.userResult = payload
    }
  },
  actions: {
    createQuiz({ commit }, payload) {
      const quiz = {
        id: Math.random(),
        question: payload.question,
        answers: payload.answers,
        createdAt: payload.createdAt
      }
      // Reach out to firebase or store it
      commit("createQuiz", quiz)
    },
    createUserResult({ commit }, payload) {
      const userResult = {
        id: Math.random(),
        userId: Math.random(),
        results: payload.results
      }
      commit("createUserResult", userResult)
    }
  }
});
