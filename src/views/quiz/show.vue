<template>
  <div class="main">
        <app-loading v-if="loading"></app-loading>
        <div class="box box--list" v-else>
            <router-link tag="button" :to="{ name: 'quiz-manage' }">Quay lại</router-link>
            <ul>
                <li v-for="item in quizs">
                    <router-link
                        tag="a"
                        :to="{ name: 'info-quiz', params: { quizId: item.id } }">
                        {{ item.question }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    computed: {
      quizs() {
        return this.$store.getters.loadQuizs
      },
      loading() {
        return this.$store.getters.waitLoading
      }
    },
    created () {
      this.$store.dispatch('loadQuizsUnRand')
    }
  }
</script>

<style scoped>
    .main {
    width: 1184px;
    max-width: 1184px;
    height: calc(100vh);
    margin: 0 auto;
    background: #f5f5fa;
    }
    .box.box--list {
        padding: 2em;
    }
    .box--list > button {
        padding: 6px;
        background: #8075b5;
        color: #fff;
        width: 10%;
        border: 0;
        outline: 0;
        height: 40px;
        margin-bottom: 2em;
        font-weight: 600;     
        cursor: pointer;   
    }
    .box--list ul {
        padding: 0;
        margin: 0;
        list-style: decimal;
    }
    .box--list ul li {
        padding: 6px;
        background: #8075b5;
        margin-bottom: 5px;
        cursor: pointer;
    }
    .box--list ul li:nth-child(2n+1) {
        background: #3f3472;
    }
    .box--list ul li:nth-child(2n) {
        background: #8075b5;
    }
    .box--list ul li a {
        color: #fff;
        text-decoration: none;
    }

</style>
