<template>
  <div class="main">
    <h1>Chào mừng bạn đã đến với bài test đầu vào của team!</h1>
    <p>Nếu bạn đã sẵn sàng bạn có thể bắt đầu ngay bây giờ</p>
    <button @click="start">Bắt đầu ngay</button>
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

<style scoped>
  .main {
    width: 500px;
    padding: 40px;
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    margin: 3% auto 0 auto;
    text-align: center;
  }
  button {
    width: 100%;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }
  button:not(:disabled) {
    cursor: pointer;
  }
  button:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
  }
</style>
