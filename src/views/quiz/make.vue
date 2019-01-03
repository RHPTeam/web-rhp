<template>
  <div class="main">
    <app-loading v-if="loading"></app-loading>
    <div class="box" v-else>
      <h1>Question {{ showNumberQuestion }}:</h1>
      <p>
        {{ showNumberQuestion }}/{{
          questions.length < 10 ? "0" + questions.length : questions.length
        }}
      </p>
      <div class="content">
        <h3>{{ questions[currentQuestion - 1].question }}</h3>
        <ul>
          <li
            v-for="(item, index) in questions[currentQuestion - 1].answers"
            v-bind:key="index"
            @click="choice(index)"
            :class="{ active: index == clickedIndex }"
          >
            {{ item }}
          </li>
        </ul>
        <div class="explain" v-if="statusExplain">
          <textarea
            placeholder="Your explain..."
            v-model="result.contentExplain"
          ></textarea>
        </div>
      </div>
      <button @click="next" v-if="!showFinnish" :disabled="!formIsValid">
        Câu hỏi kế tiếp
      </button>

      <button @click="finnish" v-else>Finnish</button>
      <button @click="statusExplain = !statusExplain">
        Thêm giải thích của bạn
      </button>
      <hr />
      <div class="stats">
        <div class="bars">
          <div
            class="bar"
            :style="{
              width: ((currentQuestion - 1) / questions.length) * 100 + '%'
            }"
          ></div>
        </div>
        <h1>{{ ((currentQuestion - 1) / questions.length) * 100 }}%</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: {
        questionId: "",
        choice: "",
        contentExplain: ""
      },
      userResult: {
        results: []
      },
      statusExplain: false,
      statusButton: false,
      currentQuestion: 1,
      clickedIndex: null
    };
  },
  computed: {
    showNumberQuestion() {
      if (this.currentQuestion < 10) {
        return "0" + this.currentQuestion;
      } else {
        return this.currentQuestion;
      }
    },
    showFinnish() {
      if (this.currentQuestion == this.questions.length) {
        return (this.statusButton = true);
      }
    },
    loading() {
      return this.$store.getters.waitLoading;
    },
    questions() {
      return this.$store.getters.loadQuizs;
    },
    formIsValid() {
      return this.result.contentExplain !== "";
    }
  },
  methods: {
    next() {
      if (this.currentQuestion == this.questions.length) {
        return;
      }
      // Push data result of user to array data
      const result = {
        questionId: this.questions[this.currentQuestion - 1].id,
        questionName: this.questions[this.currentQuestion - 1].question,
        choice: this.clickedIndex,
        contentExplain: this.result.contentExplain
      };
      this.userResult.results.push(result);
      this.result.contentExplain = "";
      this.clickedIndex = "";
      // Next question
      return this.currentQuestion++;
    },
    finnish() {
      // Push data result of user to array data
      const result = {
        questionId: this.questions[this.currentQuestion - 1].id,
        questionName: this.questions[this.currentQuestion - 1].question,
        choice: this.clickedIndex,
        contentExplain: this.result.contentExplain
      };
      this.userResult.results.push(result);

      // Add Data to userResult
      this.$store.dispatch("createUserResult", this.userResult);

      this.$router.push({ name: "quiz-who" });
    },
    choice(value) {
      this.clickedIndex = value;
    }
  },
  async created() {
    await this.$store.dispatch("loadQuizs");
  }
};
</script>

<style scoped>
.box {
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 700px;
  margin: 7% auto 0 auto;
}
.box > h1 {
  margin: 0;
}
.box .content > ul {
  padding: 0;
  list-style-type: none;
}
.content > ul > li {
  padding: 20px 30px;
  background-color: #eee;
  border: 1px solid #ccc;
  cursor: pointer;
}
.content > ul > li:hover {
  background-color: #ccc;
}
.content > ul > li:not(:last-child) {
  border-bottom: 0;
}
.content .explain {
  margin-bottom: 14px;
}
.content .explain textarea {
  width: 100%;
  box-sizing: border-box;
  height: 65px;
  padding: 10px;
  resize: none;
  border-color: #ccc;
}
.box button {
  padding: 10px 15px;
  background: lightblue;
  border: 1px solid #ccc;
  cursor: pointer;
  font-weight: 600;
}
hr {
  margin: 20px 0;
  border-color: #dadada;
}
.stats {
  min-height: 10px;
}
.bars {
  width: 100%;
  height: 10px;
  background-color: red;
  border-radius: 10px;
}
.bar {
  height: 10px;
  background-color: aqua;
}
.stats h1 {
  margin-bottom: 0;
  text-align: center;
}
.active {
  background-color: red !important;
}
</style>
