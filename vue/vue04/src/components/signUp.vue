<template>
  <h2 v-show="userState">{{ signupText }}</h2>
  <h2 v-show="!userState">{{ loginText }}</h2>
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
  <button v-show="userState" class="signup__btn" @click="signUp">
    新規登録
  </button>
  <button v-show="userState" class="btn-change" @click="toggleSignup">
    {{ loginText }}
  </button>
  <button v-show="!userState" class="signup__btn" @click="logIn">
    ログイン
  </button>
  <button v-show="!userState" class="btn-change" @click="toggleSignup">
    {{ signupText }}
  </button>
</template>

<script>
export default {
  data: function () {
    return {
      userState: true,
      signupText: '新規登録',
      loginText: 'ログイン',
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    toggleSignup() {
      this.userState = !this.userState
    },
    signUp() {
      const signupInfomation = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signUp', signupInfomation)
    },
    logIn() {
      const loginInfomation = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('logIn', loginInfomation)
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
.login {
  &__btn {
    font-size: 20px;
  }
}
.btn-change {
  border: none;
  background-color: none;
  font-size: 16px;
  cursor: pointer;
}
.signup {
  width: 300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 5px;
  flex-wrap: wrap;
  &__btn {
    display: block;
    margin: 20px auto;
    font-size: 20px;
    background-color: none;
  }
  &__label {
    font-weight: bold;
  }
}
</style>
