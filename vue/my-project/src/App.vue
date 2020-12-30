<template>
  <Header></Header>
  <step01 :startnumber="currentnum"></step01>
</template>

<script>
import Header from './components/sample'
import step01 from './components/step01'
import 'normalize.css'
export default {
  components:{
    Header,
    step01
  },
  data:function(){
    return{
      currentnum:1
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
