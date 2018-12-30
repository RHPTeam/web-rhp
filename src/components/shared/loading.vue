<template>
  <div class="main">
    <h1 class="t_c">Đang nạp dữ liệu chờ tí nhé, các bạn nhỏ...</h1>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .main {
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .t_c {
    color: #fff;
    text-align: center;
  }
</style>
