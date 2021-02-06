<template>
  <StepCompornent>
      <template #title>お客様の情報をご入力してください。</template>
      <template #stepnumber>STEP1</template>
      <template #question01>{{question01}}</template>
      <template #answer01>
        <input v-model="Gender" value="男性" type="radio" name="gender" id="gender01"><label for="gender01">男性</label>
        <input v-model="Gender" value="女性" type="radio" name="gender" id="gender02"><label for="gender02">女性</label>  
      </template>
      <template #question02>
          {{question02}}
      </template> 
      <template #answer02>
          <div class="answer02">
        <select class="answer02__year" v-model="birth" name="year" id="year">
            <option v-for="year in years" :key="year" :value="year">{{year}}</option>
        </select>
        <label for="year">年</label>
         <select class="answer02__mounth" v-model="mounth" name="mounth" id="mounth">
            <option v-for="mounths in mounths" :key="mounths" :value="mounths">{{mounths}}</option>
        </select>
        <label for="year">月</label>
        <select  class="answer02__day" v-model="day" name="day" id="day">
            <option v-for="dayValue in days" :key="dayValue" :value="dayValue">{{dayValue}}</option>
      </select>
      <label for="year">日</label>
            </div>
      </template>
  </StepCompornent>
  <button class="button" type="button" @click="this.$router.push({path:'/step02'}); answerPush()">次に進む</button>
</template>

<script>
import StepCompornent from './step-compornent'
import yearList from './helpers/definition-year'
import mounthrList from './helpers/definition-mounth'
import dayList from './helpers/definition-day'
export default {
    components:{
        StepCompornent
    },
    data:function(){
        return{
            question01:'-性別-',
            question02:'-生年月日-',
            Gender:'',
            birth:'',
            mounth:'',
            day:'',
            years:yearList(),
            mounths:mounthrList(),
            days:dayList()
        }
    },
    methods:{
        answerPush:function(){
            const answer01 = {
                question:this.question01,
                answer:this.Gender
                            }
            const answer02 = { 
                question:this.question02,
                answer:this.birth + '年' + this.mounth + '月' + this.day + '日'
                }
            this.$emit('answer',answer01,answer02)
        }
    }
}
</script>

<style lang="scss">
.next{
    text-decoration: none;
    font-size: 20px;
    position: relative;
    border-radius: 5px;
    line-height: 40px;
    width: 100%;
    border:none;
    background-color: #00d2b4;
    color: white;
    padding-right: 15px;
    &::after{
        content: '';
        width: 10px;
        height: 10px;
        border-top: solid 2px white;
        border-right: solid 2px white;
        transform: rotate(45deg);
        position: absolute;
        top: 35%;
            }
            }
    .answer02{
        &__year{
            padding-right: 1em;
            
            border: none;
            outline: 1px solid lightgrey;
        }
        &__mounth{
            padding-right: 1em;
            
            border: none;
            outline: 1px solid lightgrey;
            
        }
        &__day{
            padding-right: 1em;
            
            border: none;
            outline: 1px solid lightgrey;            
        }
        
    }
.button{
    margin-top: 20px;
    font-size: 18px;
    color: white;
    border: none;
    background-color: #00947e;
    padding: 0.6em 1em;
}
</style>