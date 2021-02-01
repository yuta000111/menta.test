<template>
  <StepCompornent>
      <template #stepnumber>STEP03</template>
      <template #title>ごお相談内容をご記入ください</template>
      <template #question01>--ご相談内容--</template>
      <template #answer01>
          <textarea class="consultation" v-model="consultation" name="consultation" cols="90" rows="20"></textarea>
      </template>         
  </StepCompornent>
  <div class="button-area">
    <button class="button" type="button" @click="this.$router.push({path:'/step02'})">前に戻る</button>
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
            consultation:''
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