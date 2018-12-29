<template>
  <div class="main">
    <h1>Info a quiz</h1>
    <h3>{{ quiz.question }}</h3>
    <ul>
      <li v-for="item in quiz.answers">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['quizId'],
    computed: {
      quiz() {
        return this.$store.getters.loadQuiz(this.quizId)
      }
    }
  }
</script>

<style>

</style>
