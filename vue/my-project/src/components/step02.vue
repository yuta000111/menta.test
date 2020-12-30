<template>
  <StepCompornent>
      <template #title>ボタンをクリックすればこれが表示されるはず。</template>
  </StepCompornent>
</template>

<script>
import StepCompornent from './step-compornent'
export default {
    name:'step02',
    components:{
        StepCompornent
    },
    data:function(){
        return{
            
        }
    }
}
</script>

<style>

</style>