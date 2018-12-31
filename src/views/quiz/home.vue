<template>
 <div class="main">
   <div class="main--wrapper">
     <div class="box">
       <h1>Chào mừng bạn đã đến với hệ thống test đầu vào của RHP Team Discord</h1>
       <p>Bạn có thể bắt đầu ngay bây giờ bằng cách nút bên dưới :))</p>
       <div class="actions">
         <router-link tag="button" :to="{ name: 'sign-in' }" class="btn-red">Quản trị viên</router-link>
         <router-link tag="button" :to="{ name: 'quiz-start' }">Bắt đầu nào</router-link>
       </div>
     </div>
   </div>
 </div>
</template>

<script>

</script>

<style scoped>
.box {
  text-align: center;
  margin: 10% auto 0 auto;
}
button {
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
  button.btn-red {
    color: #dc3545;
    background-color: transparent;
    background-image: none;
    border-color: #dc3545;
  }
  button.btn-red:hover {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
</style>
