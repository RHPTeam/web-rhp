<template>
  <div class="main">
    <h1>Show result of user: id random</h1>
    <p>{{ result }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      result() {
        return this.$store.getters.loadUserResult
      }
    }
  }
</script>

<style>

</style>
