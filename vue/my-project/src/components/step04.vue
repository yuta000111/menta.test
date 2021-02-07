<template>
  <answerComponents>
      <template #stepnumber>STEP04</template>
      <template #title>以下の内容をご確認ください</template>
      <template #confirm>
          <div v-for="answer in answers" :key=answer.key>
              <p class="qestioin">{{answer.question}}</p>
              <p class="answer">{{answer.answer}}</p>
          </div>
      </template>
  </answerComponents>
    <div class="button-area">
    <button class="button" type="button" @click="this.$router.push({path:'/step03'})">前に戻る</button>
    <button class="button" type="button" @click="this.$router.push({path:'/step'})">送信</button>
  </div>
</template>

<script>
import answerComponents from '@/components/answer'
export default {
  components:{
      answerComponents
  },props:{
      answers:Array
  }
}
</script>

<style>
.qestioin{
    color: #00CCFF;
    margin-top: 10px;
}
.answer{
    margin-top: 10px;
}
</style>