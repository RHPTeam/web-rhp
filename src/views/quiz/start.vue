<template>
  <div class="main">
    <h1>Chào mừng bạn đã đến với bài test đầu vào của team!</h1>
    <p>Nếu bạn đã sẵn sàng bạn có thể bắt đầu ngay bây giờ</p>
    <button @click="start">Start now</button>
  </div>
</template>

<script>
  export default {
    methods: {
      start() {
        this.$router.push({ name: 'quiz-make' })
      }
    }
  }
</script>

<style>

</style>
