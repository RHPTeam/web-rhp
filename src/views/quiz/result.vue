<template>
  <div class="main">
    <h1>Show result of user: id random</h1>
    <p>{{ result }}</p>
    <button @click="onCreateResult">Hoàn thành</button>
  </div>
</template>

<script>
  export default {
    computed: {
      result() {
        return this.$store.getters.loadUserResult
      }
    },
    methods: {
      async onCreateResult () {
        await this.$store.dispatch('createResult')
        this.$router.push({ name: 'quiz-start' })
      }
    }
  }
</script>

<style>

</style>
