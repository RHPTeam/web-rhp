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

<style>

</style>
