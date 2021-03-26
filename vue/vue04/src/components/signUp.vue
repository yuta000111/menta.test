<template>
  <h2>新規登録画面</h2>
  <div class="signup">
    <label for="username" class="signup__label">ユーザー名</label>
    <input
      id="username"
      v-model="username"
      placeholder="username"
      class="signup__label--input"
      type="text"
    />
  </div>
  <div class="signup">
    <label for="email" class="signup__label">メールアドレス</label>
    <input
      id="email"
      v-model="email"
      placeholder="email"
      class="signup__label--input"
      type="text"
    />
  </div>
  <div class="signup">
    <label for="password" class="signup__label">パスワード</label>
    <input
      id="password"
      v-model="password"
      placeholder="password"
      class="signup__label--input"
      type="text"
    />
  </div>
  <button class="signup__btn" @click="signUp">新規登録</button>
</template>

<script>
export default {
  data: function () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    addInfomation: function () {
      const userInfomation = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$store.commit('addAccount', userInfomation)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  width: 300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 5px;
  &__btn {
    margin-top: 20px;
    font-size: 20px;
    background-color: none;
  }
  &__label {
    font-weight: bold;
  }
}
</style>
