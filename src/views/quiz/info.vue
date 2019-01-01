<template>
    <div class="main">
        <h1>Info a quiz</h1>
        <div class="list-question">
            <h3>{{ quiz.question }}</h3>
            <ul>
                <li v-for="item in quiz.answers">{{ item }}</li>
            </ul>
        </div>
        <router-link tag="button" :to="{ name: 'show-quiz' }" type="submit">Come back</router-link>
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

<style scoped>
    .main {
        width: 1184px;
        max-width: 1184px;
        margin: 5em auto;
        background: #f5f5fa;
    }
    .main h1 {
        text-align: center;
        color: #8075b5;
        text-transform: uppercase;
        margin-bottom: 2em;
        padding-top: 1em;
    }
    .list-question {
        width: 1000px;
        margin: 0 auto;
        border-bottom: 1px solid #8075b5;
    }
    .list-question ul {
        margin: 0;
        padding-left: 50px;
        list-style: upper-alpha;
        padding-bottom: 1em;
    }
    .list-question ul li {
        padding: 8px;
        cursor: pointer;
    }
    .list-question ul li:hover {
        text-decoration: underline;
        color: #8075b5;
    }
    button {
        height: 40px;
        background: #8075b5;
        color: #fff;
        font-weight: 600;
        width: 15%;
        border: 0;
        outline: 0;
        margin-top: 2em;
        margin-left: 6.6em;
        margin-bottom: 2em;
        cursor: pointer;
    }
</style>
