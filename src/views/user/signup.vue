<template>
  <div class="main">
    <h2>Sign Up Form</h2>
    <div class="box--alert" v-if="error">
      <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
    </div>
    <form @submit.prevent="onSignUp">
      <p class="errors">{{ comparePasswords }}</p>
      <div class="form-group">
        <input type="email" name="email" id="email" v-model="email" placeholder="Username or Email" required>
      </div>
      <div class="form-group">
        <input type="password" name="password" id="password" v-model="password" placeholder="Password" required>
      </div>
      <div class="form-group">
        <input type="password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm password" required>
      </div>
      <button type="submit" :disabled="loading" :loading="loading">
        <span v-if="loading">Waiting... Haha =)))</span>
        <span v-else>Sign Up</span>
      </button>
    </form>
    <router-link tag="a" :to="{ name: 'sign-in' }">Have u a account? Sign In here!</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Password do not match' : ''
      },
      user () {
        return this.$store.getters.user
      },
      loading () {
        return this.$store.getters.waitLoading
      },
      error () {
        return this.$store.getters.error
      }
    },
    methods: {
      onSignUp () {
        this.$store.dispatch('signUserUp', { email: this.email, password: this.password })
      },
      onDismissed () {
        console.log("hello")
        this.$store.dispatch('clearError')
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push({ name: 'quiz-manage' })
        }
      }
    }
  }
</script>

<style scoped>

</style>
