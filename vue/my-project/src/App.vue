<template>
    <Header></Header>
    <router-view @answer="pushAnswer" :answers="answers"></router-view>
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
      answers:[]
    }
  },
  methods:{
    pushAnswer:function(answer,...args){
      this.answers.push(answer,...args)   
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
.button-area{
    .button{
    margin-top: 20px;
    font-size: 18px;
    color: white;
    border: none;
    background-color: #00947e;
    padding: 0.6em 1em;
    &:last-child{
        margin-left: 10px;
    }
    }
}
</style>
