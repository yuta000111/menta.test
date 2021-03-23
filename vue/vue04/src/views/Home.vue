<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <signUp />
  </div>
</template>

<script>
// @ is an alias to /src
import signUp from '@/components/signUp.vue'

export default {
  name: 'Home',
  components: {
    signUp
  }
}
</script>
