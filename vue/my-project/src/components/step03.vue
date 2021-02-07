<template>
  <StepCompornent>
      <template #stepnumber>STEP03</template>
      <template #title>お相談内容をご記入ください</template>
      <template #question01>-ご相談内容-</template>
      <template #answer01>
          <textarea class="consultation" v-model="consultation" name="consultation" cols="90" rows="20"></textarea>
      </template>         
  </StepCompornent>
  <div class="button-area">
    <button class="button" type="button" @click="this.$router.push({path:'/step03'})">前に戻る</button>
    <button class="button" type="button" @click="this.$router.push({path:'/step04'}); answerPush()">次に進む</button>
  </div>
</template>

<script>
import StepCompornent from './step-compornent'
export default {
    name:'step03',
    props:{
        startnum:Number
    },
    components:{
        StepCompornent
    },
    data:function(){
        return{
            question06:'-ご相談内容-',
            consultation:'',
            answer03:[]
        }
    },
    methods:{
        answerPush:function(){
        const answer06 = {
            question:this.question06,
            answer:this.consultation
        }
        this.$emit('answer',answer06)
        }
    }
}
</script>

<style lang="scss">
.consultation{
    border:1px solid gray;
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