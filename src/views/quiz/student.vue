<template>
  <div class="main">
    <h3>Chúc mừng bạn đã làm xong bài test dễ òm :))</h3>
    <p>Bây giờ thì hãy nhập thông tin để bọn mềnh biết bạn là ai và thêm quyền cho bạn :))</p>
    <form @submit.prevent="onSubmitWho">
      <div class="form-group">
        <label>Họ và tên:</label>
        <input type="text" placeholder="Nhập họ và tên..." v-model="nameReal" required>
      </div>
      <div class="form-group">
        <label>Tên Discord</label>
        <input type="text" placeholder="something#2367" v-model="nameDiscord" required>
      </div>
      <div class="form-group">
        <label>Bạn đang học:</label>
        <input type="text" placeholder="HTML, CSS,..." v-model="contentSkill" required>
      </div>
      <div class="form-group">
        <label>Cho chúng tôi thêm ý kiến từ bạn về mọi thứ?</label>
        <textarea cols="30" rows="10" placeholder="Bọn mình rất muốn nhận được ý kiến từ bạn..." v-model="contentIdea" required></textarea>
        <p>=)) Number words: {{ numberWords > 0 ? numberWords : 0 }}</p>
      </div>
      <button type="submit" :disabled="!formIsValid">Hoàn thành</button>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        nameReal: '',
        nameDiscord: '',
        contentSkill: '',
        contentIdea: ''
      }
    },
    methods: {
      onSubmitWho () {
        console.log({
          nameReal: this.nameReal,
          nameDiscord: this.nameDiscord,
          contentSkill: this.contentSkill,
          contentIdea: this.contentIdea
        })
        this.$router.push({ name: 'quiz-result' })
      }
    },
    computed: {
      numberWords () {
        return this.contentIdea.split(' ')
          .filter(function(n) { return n != '' })
          .length;
      },
      formIsValid() {
        if (this.numberWords < 5) {
          return
        }
        return this.numberWords >= 5
      }
    }
  }
</script>

<style>

</style>
