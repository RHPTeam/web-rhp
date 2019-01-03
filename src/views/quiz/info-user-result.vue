<template>
  <div class="main">
    <router-link tag="a" :to="{ name: 'user-result' }">Quay lại</router-link>
    <h2>Thông tin bài làm của: {{ infoUserResult.userInfo.nameReal }}</h2>
    <div class="card card--user">
      <p><b>Họ và tên: </b>{{ infoUserResult.userInfo.nameReal }}</p>
      <p><b>Tên discord: </b>{{ infoUserResult.userInfo.nameDiscord }}</p>
      <p><b>Tuổi: </b>{{ infoUserResult.userInfo.ageReal }}</p>
      <p><b>Kỹ năng: </b>{{ infoUserResult.userInfo.contentSkill }}</p>
      <p><b>Giới thiệu: </b>{{ infoUserResult.userInfo.contentIdea }}</p>
    </div>
    <hr>
    <div class="card card--result">
      <ul>
        <li v-for="item in infoUserResult.results">
          <p><b>Tên câu hỏi: </b>{{ item.questionName }}</p>
          <p><b>Trả lời: </b>{{ item.contentExplain }} </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['userResultId'],
    computed: {
      infoUserResult () {
        return this.$store.getters.loadInfoUserResult(this.userResultId)
      }
    }
  }
</script>

<style scoped>
  .main {
    padding: 40px;
  }
ul {
  list-style-type: decimal;
}
</style>
