<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Signup />
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/signUp.vue'

export default {
  name: 'Home',
  components: {
    Signup
  }
}
</script>
