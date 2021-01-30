<template>
    <Header></Header>
    <router-view></router-view>
</template>

<script>
import Header from './components/sample'
import 'normalize.css'
export default {
  components:{
    Header
  },
  data:function(){
    return{
      currentnum:1,
      answers:[]
    }
  }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
