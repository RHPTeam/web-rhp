<template>
  <div class="main">
    <app-loading v-if="loading"></app-loading>
   <iv class="box box--list" v-else>
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
   </iv>
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

<style>

</style>
