<template>
  <div class="main">
    <h1>Cảnh báo</h1>
    <p>Mọi thông tin bài làm của bạn đều được bọn mềnh private, vì vậy bạn hoàn toàn yên tâm về vấn đề thông tin. Thông tin bài làm của bạn hiện tại chưa được gửi đến bọn mềnh. Nút <b>Hoàn thành</b> giúp bạn vấn đề đó đó. Bạn có thể reload và làm lại bài một cách bình thường nếu cảm thấy kết quả không mong muốn.</p>
    <p>Sau khi bạn ấn <b>Hoàn thành</b>, hãy liên hệ với admin hoặc mod để được thêm quyền :))</p>
    <button @click="onCreateResult" :disabled="!isValid">Hoàn thành</button>
  </div>
</template>

<script>
  export default {
    methods: {
      async onCreateResult () {
        await this.$store.dispatch('createResult')
        this.$router.push({ name: 'quiz-start' })
      }
    },
    computed: {
      isValid () {
        return this.$store.getters.loadUserInfo !== null && this.$store.getters.loadUserResult !== null
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
  .main h1 {
    text-align: center;
    text-transform: uppercase;
    color: red;
  }
  .main p {
    font-weight: 400;
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
    color: #28a745;
    background-color: transparent;
    background-image: none;
    border-color: #28a745;
  }
  button:hover {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }
  button:not(:disabled) {
    cursor: pointer;
  }
  .main button:disabled, .main button:disabled:hover {
    color: #fff;
    background-color: #1d2124;
    border-color: #171a1d;
  }
</style>
