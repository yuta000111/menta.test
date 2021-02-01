<template>
<StepCompornent>
    <template #stepnumber>STEP02</template>
      <template #title>以下にご回答ください。</template>
      <template #question01>現在生命保険に加入されていますか？</template>
      <template #answer01>
          <label for="answer01">はい<input v-model="lifeAssurance" id="answer01" type="radio" name="life-assurance" value="true"></label>
          <label for="answer02">いいえ<input v-model="lifeAssurance" id="answer02" type="radio" name="life-assurance" value="false"></label>
      </template>
      <template #question02 v-if="lifeAssurance">現在入院中ですか。または、最近3ヶ月以内に医師の診断・検査の結果、入院・手術を進められたことはありますか？</template>
      <template #answer02 v-if="lifeAssurance">
          <label for="answer01">はい<input v-model="hospitalization" id="answer01" type="radio" name="hospitalization" value="true"></label>
          <label for="answer02">いいえ<input v-model="hospitalization" id="answer02" type="radio" name="hospitalization" value="false"></label>
      </template>
      <template #question03 v-if="lifeAssurance && hospitalization">過去5年以内に、病気や怪我で、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</template>
      <template #answer03 v-if="lifeAssurance && hospitalization">
          <label for="answer01">はい<input v-model="hospitalization" id="answer01" type="radio" name="hospitalization-ex" value="true"></label>
          <label for="answer02">いいえ<input v-model="hospitalization" id="answer02" type="radio" name="hospitalization-ex" value="false"></label>
      </template> 
</StepCompornent>
  <div class="button-area">
    <button class="button" type="button" @click="this.$router.push({path:'/'})">前に戻る</button>
    <button class="button" type="button" @click="this.$router.push({path:'/step03'})">次に進む</button>
  </div>
</template>

<script>
import StepCompornent from './step-compornent'
export default {
    name:'step02',
    emits:{
        updateStep:null
    },
    props:{
        startnum:Number
    },
    components:{
        StepCompornent
    },
    data:function(){
        return{
            lifeAssurance:'',
            hospitalization:'',
            hospitalizationex:'',
            step02:[]
        }
    }
}
</script>

<style lang="scss">
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