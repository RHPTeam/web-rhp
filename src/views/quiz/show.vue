<template>
  <div class="main">
    <app-loading v-if="loading"></app-loading>
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
      this.$store.dispatch('loadQuizs')
    }
  }
</script>

<style>

</style>
