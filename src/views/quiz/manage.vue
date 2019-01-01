<template>
    <div class="main">
        <h1>Chào mừng bạn tới với trang quản trị của RHP Team =))</h1>
        <router-link tag="button" :to="{ name: 'create-quiz' }">Tạo câu hỏi</router-link>
        <router-link tag="button" :to="{ name: 'show-quiz' }">Danh sách câu hỏi</router-link>
        <button @click="onLogout">Đăng xuất</button>
    </div>
</template>

<script>
  export default {
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
        this.$router.push({ name: 'sign-in' })
      }
    }
  }
</script>

<style scoped>
    .main {
        width: 1184px;
        max-width: 1184px;
        margin: 0 auto;
        text-align: center;
    }
    .main h1 {
        text-align: center;
        margin-bottom: 2em;
    }
    button {
        padding: 8px;
        width: 20%;
        height: 40px;
        background: #8075b5;
        color: #fff;
        font-weight: 600;
        border: 0;
        outline: 0;
        margin-right: 1em;
        cursor: pointer;
    }
</style>
