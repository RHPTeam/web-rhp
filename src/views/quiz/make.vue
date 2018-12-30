<template>
  <div class="main">
    <app-loading v-if="loading"></app-loading>
    <div class="box" v-else>
      <h1>Question {{ showNumberQuestion }}:</h1>
      <p>{{ showNumberQuestion }}/{{ questions.length < 10 ? '0' + questions.length : questions.length  }}</p>
      <div class="content">
        <p>This is content question</p>
        <h3>{{ questions[currentQuestion - 1].questions }}</h3>
        <ul>
          <li
            v-for="(item, index) in questions[currentQuestion - 1].answers" v-bind:key="index"
            @click="choice(index)"
            :class="{ 'active': index == clickedIndex }">{{ item }}</li>
        </ul>
        <div class="explain" v-if="statusExplain">
          <textarea placeholder="Your explain..." v-model="result.contentExplain"></textarea>
        </div>
      </div>
      <button @click="next" v-if="!showFinnish">Next Question</button>

      <button @click="finnish" v-else>Finnish</button>
      <button @click="statusExplain = !statusExplain">Add Explain</button>
      <router-link tag="button" :to="{ name: 'quiz-result' }">View result</router-link>
      <div class="stats">
        <div class="bars" style="width: 300px">
          <div class="bar" :style="{ width: ((currentQuestion - 1) / questions.length) * 100 + '%' }"></div>
          <h1>{{ ((currentQuestion - 1) / questions.length) * 100 }}%</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        result: {
          questionId: '',
          choice: '',
          contentExplain: ''
        },
        userResult: {
          results: []
        },
        statusExplain: false,
        statusButton: false,
        currentQuestion: 1,
        clickedIndex: null
      }
    },
    computed: {
      showNumberQuestion() {
        if (this.currentQuestion < 10 ) {
          return '0'+ this.currentQuestion
        } else {
          return this.currentQuestion
        }
      },
      showFinnish() {
        if (this.currentQuestion == this.questions.length) {
          return this.statusButton = true
        }
      },
      loading() {
        return this.$store.getters.waitLoading
      },
      questions() {
        return this.$store.getters.loadQuizs
      }
    },
    methods: {
      next() {
        if (this.currentQuestion == this.questions.length) {
          return
        }
        // Push data result of user to array data
        const result = {
          questionId: this.questions[this.currentQuestion - 1].id,
          choice: this.clickedIndex,
          contentExplain: this.result.contentExplain
        }
        const temp = this.userResult.results.push(result)
        console.log(temp)
        console.log(this.userResult.results)

        // Next question
        return this.currentQuestion++
      },
      finnish() {
        // Push data result of user to array data
        const result = {
          questionId: this.questions[this.currentQuestion - 1].id,
          choice: this.clickedIndex,
          contentExplain: this.result.contentExplain
        }
        const temp = this.userResult.results.push(result)
        console.log(temp)
        console.log(this.userResult.results)

        // Add Data to userResult
        this.$store.dispatch("createUserResult", this.userResult)

        // this.$router.push({ name: 'quiz-start' })
      },
      choice (value) {
        console.log(value + ' value person choiced :))')
        this.clickedIndex = value
      }
    },
    async created () {
      await this.$store.dispatch('loadQuizs')
    }
  }
</script>

<style scoped>
.stats {
  margin-top: 10px;
  min-height: 10px;
}
.bars {
  height: 10px;
  background-color: red;
}
.bar {
  height: 10px;
  background-color: aqua;
}
.active {
  background-color: red;
}
</style>
