<template>
    <div class="main">
        <router-link tag="button" :to="{ name: 'show-quiz' }">
            Show all quiz
        </router-link>
        <h2>Thêm câu hỏi vào thư viện câu hỏi RHP Team</h2>
        <div class="form-group">
            <label>Nội dung câu hỏi</label>
            <textarea class="content--question" v-model="quiz.question"></textarea>
            <label for="text">
                <input type="checkbox" id="text" v-model="checked"/> 
                Câu hỏi này là tự luận
            </label>
            <div class="content--answer" v-if="!checked">
                <h3>List Of Answer:</h3>
                <ul class="content--answer-list">
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
        this.quiz.question = "";
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

<style scoped>
    .main {
        max-width: 1184px;
        height: calc(100vh);
        background: #f5f5fa;
        margin: 0 auto;
    }
    .main > button {
        margin-left: 6.6em;
        background: #8075b5;
        color: #fff;
        padding: 6px;
        width: 15%;
        border: 0;
        outline: 0;
        margin-top: 1em;
    }
    .main h2 {
        text-align: center;
        text-transform: uppercase;
        color: #8075b5;
    }
    .main div.form-group {
        max-width: 1000px;
        margin: 0 auto;
    }
    .main .form-group label {
        display: block;
        font-size: 16px;
        font-weight: 500;
    }
    .main .form-group textarea {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        height: 150px;
        margin-top: 1em !important;
        font-size: 15px;
        color: #666;
    }
    .content--answer {
        margin-bottom: 2em;
    }
    .content--answer .section {
        display: flex;
    }
    .section input {
        width: 80%;
        height: 40px;
        border-radius: 10px;
        outline: 0;
        border: 1px solid #8075b5;
        background: #fff;
        padding-left: 2em;
    }
    .section button {
        width: 20%;
        margin-left: 1em;
        background: #8075b5;
        border-radius: 10px;
        border: 0;
        outline: 0;
        color: #fff;
        cursor: pointer;
    }
    button {
        height: 40px;
        width: 20%;
        text-transform: uppercase;
        color: #fff;
        background: #8075b5;
        border: 0;
        outline: 0;
        margin-right: 1em;
        cursor: pointer;
    }
    .content--answer-list {
        width: 80%;
        margin: 1em auto;
        padding: 0;
        list-style: upper-alpha;
    }
    .content--answer-list li {
        padding: 6px;
        color: black;
        cursor: pointer;
    }
    label[for="text"] {
        margin-bottom: 1em;
    }
</style>
