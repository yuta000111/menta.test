<template>
    <div class="container">
      <div class="stepbox">
          <div class="stepbox__head">
              <div class="stepbox__head--step">
                <span class="stepbox__step"><slot name="stepnumber"></slot></span>
              </div>
                <h2 class="stepbox__title"><slot name="title"></slot></h2>
          </div>
          <div class="stepbox__textarea">
              <div class="stepbox__inner--textarea">
              <div class="stepbox__textarea--question">
                  <div class="stepbox__textarea--inner">
                    <p class="question"><slot name="question01"></slot></p>
                    <div class="answer">
                        <slot name="answer01"></slot>
                    </div>
                </div>
              </div>
              <div class="stepbox__textarea--question">
                  <div class="stepbox__textarea--inner">
                    <p class="question"><slot name="question02"></slot></p>
                    <div class="answer">
                        <slot name="answer02"></slot>
                    </div>
                </div>
              </div>
              <div class="stepbox__textarea--question">
                  <div class="stepbox__textarea--inner">
                    <p class="question"><slot name="question03"></slot></p>
                    <div class="answer">
                        <slot name="answer03"></slot>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    data:function(){
        return{
            stepNum:1
        }            
    }
}
</script>

<style lang="scss" scoped>
.container{
    max-width: 960px;
    margin:0 auto;
}

.stepbox{
    border: 1px solid #87CEFA;
    margin-top:50px;
    &__inner--textarea{
        padding:50px 0;
    }
    &__textarea{
        display: flex;
        flex-wrap: wrap;
        justify-content:flex-start ;
        &--question{            
            margin-top: 30px;
            flex-basis: 100%;
        }
        &--inner{
            text-align: left;
            margin-left: 30px;
            padding-bottom: 20px;
            .question{
                color: #00CCFF;
            }
            .answer{
                font-size: 18px;
            }
        }
    }
    &__head{
        background-color: #F0FFFF;
        position: relative;
        height: 40px;
        border-bottom: 1px solid #87CEFA;
        &--step{
            padding: 8px;
            font-size: 12px;
            color: white;
            background-color:#87CEEB;
            border-radius:10px;
            position: absolute;
            top:0;
            left: 0;
    }
    }
    &__title{
        font-size: 20px;
        line-height: 40px;
        margin:0;
        color:gray;

    }
}
</style>