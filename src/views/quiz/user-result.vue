<template>
  <div class="main">
    <app-loading v-if="loading"></app-loading>
    <div class="main--wrapper" v-else>
      <router-link tag="a" :to="{ name: 'quiz-manage' }">Quay lại</router-link>
      <h2 class="title">Danh sách kết quả làm bài test đầu vào</h2>
      <p>Kiểm tra theo danh sách từ mới nhất đến cũ nhất</p>
      <div class="box">
        <ul class="list">
          <li v-for="user in userResults"><router-link tag="a" :to="{ name: 'info-user-result', params: { userResultId: user.id }}">{{ user.userInfo.nameReal }}</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userResults() {
      return this.$store.getters.loadUserResults;
    },
    loading() {
      return this.$store.getters.waitLoading;
    }
  },
  async created() {
    await this.$store.dispatch("loadUserResults");
  }
};
</script>

<style scoped>
  .main {
    padding: 40px;
  }
  ul {
    padding: 0;
  }
  ul li {
    padding: 10px 15px;
    background: #8075b5;
    margin-bottom: 5px;
    cursor: pointer;
    list-style-type: decimal;
  }
  ul li a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
  }
  ul li:nth-child(2n+1) {
    background: #3f3472;
  }
  ul li:nth-child(2n) {
    background: #8075b5;
  }
</style>
