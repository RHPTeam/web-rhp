<template>
  <div class="main">
    <img src="@/assets/images/rhp-official-logo.svg" alt="Logo RHP Team">
    <h1>🍀 Hiện tại trang chủ của team đang xây dựng và nâng cấp 🍀</h1>
    <p>Bạn có thể sử dụng chức năng test đầu vào ngay bây giờ</p>
    <router-link tag="button" :to="{ name: 'quiz-home' }">Đi đến hệ thống test</router-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.main {
  text-align: center;
  margin: 10% auto 0 auto;
}
  .main img {
    width: 300px;
  }
button {
  display: inline-block;
  font-weight: 600;
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
