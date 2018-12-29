<template>
  <div class="main">
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
      }
    }
  }
</script>

<style>

</style>
