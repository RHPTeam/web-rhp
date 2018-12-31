<template>
  <div class="main">
    <h3>Chúc mừng bạn đã làm xong bài test dễ òm :))</h3>
    <p>
      Bây giờ thì hãy nhập thông tin để bọn mềnh biết bạn là ai và thêm quyền
      cho bạn :))
    </p>
    <form @submit.prevent="onSubmitWho">
      <div class="form-group">
        <label>Họ và tên:</label>
        <input
          type="text"
          placeholder="Nhập họ và tên..."
          v-model="nameReal"
          required
        />
      </div>
      <div class="form-group">
        <label>Tên Discord</label>
        <input
          type="text"
          placeholder="something#2367"
          v-model="nameDiscord"
          required
        />
      </div>
      <div class="form-group">
        <label>Tuổi của bạn</label>
        <input type="number" placeholder="21" v-model="ageReal" required />
      </div>
      <div class="form-group">
        <label>Bạn đang học:</label>
        <input
          type="text"
          placeholder="HTML, CSS,..."
          v-model="contentSkill"
          required
        />
      </div>
      <div class="form-group">
        <label>Cho bọn mềnh biết đôi chút về bạn nào?</label>
        <textarea
          rows="5"
          placeholder="Bọn mình rất muốn nhận được thông tin của bạn để giúp chúng ta lăn lóc tốt hơn vứi nhau =))"
          v-model="contentIdea"
          required
        ></textarea>
        <p style="text-align: right">
          Tối thiểu 100 từ: {{ numberWords > 0 ? numberWords : 0 }} / 100
        </p>
      </div>
      <button type="submit" :disabled="!formIsValid">Tiếp tục</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameReal: "",
      nameDiscord: "",
      ageReal: "",
      contentSkill: "",
      contentIdea: ""
    };
  },
  methods: {
    onSubmitWho() {
      const userInfo = {
        nameReal: this.nameReal,
        nameDiscord: this.nameDiscord,
        ageReal: this.ageReal,
        contentSkill: this.contentSkill,
        contentIdea: this.contentIdea
      };
      this.$store.dispatch("createUserInfo", userInfo);
      this.$router.push({ name: "quiz-result" });
    }
  },
  computed: {
    numberWords() {
      return this.contentIdea.split(" ").filter(function(n) {
        return n != "";
      }).length;
    },
    formIsValid() {
      if (this.numberWords < 5) {
        return;
      }
      return this.numberWords >= 5;
    }
  }
};
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
.form-group {
  margin-bottom: 1rem;
  text-align: left;
  display: flex;
  flex-direction: column;
}
.form-group:last-child {
  margin-bottom: 0;
}
.form-group label {
  font-weight: 600;
}
.form-group input,
textarea {
  margin-top: 0.375rem;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.main button {
  width: 100%;
  display: inline-block;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  color: #fff;
  background-color: #117a8b;
  border-color: #10707f;
}
button:not(:disabled) {
  cursor: pointer;
}
.main button:disabled, .main button:disabled:hover {
  color: #fff;
  background-color: #1d2124;
  border-color: #171a1d;
}
.main button:hover {
  color: #fff;
  background-color: #138496;
  border-color: #117a8b;
}
</style>
