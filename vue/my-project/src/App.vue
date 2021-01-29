<template>
    <Header></Header>
    <Step01></Step01>
</template>

<script>
import Header from './components/sample'
import 'normalize.css'
import Step01 from './components/step01'
export default {
  components:{
    Header,
    Step01
  },
  data:function(){
    return{
      currentnum:1
    }
  },
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
