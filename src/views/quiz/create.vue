<template>
  <div class="main">
    <router-link :to="{ name: 'show-quiz' }">
      Show all quiz
    </router-link>
    <h1>Thêm câu hỏi vào thư viện câu hỏi RHP Team</h1>
    <div class="form-group">
      <label>Nội dung câu hỏi</label>
      <textarea class="content--question" v-model="quiz.question"></textarea>
      <label for="text"><input type="checkbox" id="text" v-model="checked"> Câu hỏi này là tự luận</label>
      <div class="content--answer" v-if="!checked">
        <h3>List Of Answer:</h3>
        <ul>
          <li v-for="item in quiz.answers" v-bind:key="item">{{ item }}</li>
        </ul>
        <div class="section">
          <input type="text" class="Nhập đáp án..." v-model="anwser">
          <button @click="addAnswer" :disabled="!isValid">Add Answer</button>
        </div>
      </div>
      <button @click="addQuiz" :disabled="!formIsValid">Add Quiz</button>
      <router-link tag="button" :to="{ name: 'quiz-manage' }">Quay lại</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        quiz: {
          question: '',
          answers: [],
          createdAt: Date.now()
        },
        checked: false,
        anwser: '',
        quizs: []
      }
    },
    methods: {
      addAnswer() {
        this.quiz.answers.push(this.anwser)
      },
      addQuiz() {
        if (!this.formIsValid) {
          return
        }
        const quizData = {
          question: this.quiz.question,
          answers: this.quiz.answers,
          createdAt: this.quiz.createdAt
        }
        this.$store.dispatch('createQuiz', quizData)
      }
    },
    computed: {
      formIsValid() {
        return this.quiz.question !== ''
      },
      isValid() {
        return this.anwser !== ''
      }
    }
  }
</script>

<style>

</style>
