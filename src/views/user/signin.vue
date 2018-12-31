<template>
  <div class="main">
    <h2>Sign In Form</h2>
    <div class="box--alert" v-if="error">
      <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
    </div>
    <form @submit.prevent="onSignIn">
      <div class="form-group">
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="Username or Email"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" :disabled="loading" :loading="loading">
        <span v-if="loading">Waiting... Haha =)))</span>
        <span v-else>Sign In</span>
      </button>
    </form>
    <router-link tag="a" :to="{ name: 'quiz-start' }"
      >Không! Tôi muốn bắt đầu test</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    loading() {
      return this.$store.getters.waitLoading;
    },
    error() {
      return this.$store.getters.error;
    }
  },
  methods: {
    onSignIn() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password
      });
    },
    onDismissed() {
      console.log("hello");
      this.$store.dispatch("clearError");
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push({ name: "quiz-manage" });
      }
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
  margin: 10% auto 0 auto;
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
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  margin-bottom: 1rem;
}
button:not(:disabled) {
  cursor: pointer;
}
button:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}
  .main > a {
    margin-top: 1rem
  }
</style>
