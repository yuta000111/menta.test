<template>
  <StepCompornent>
      <template #title>お客様の情報をご入力してください。</template>
      <template #stepnumber>STEP1</template>
      <template #question01>-性別-</template>
      <template #answer01>
        <input v-model="Gender" value="男性" type="radio" name="gender" id="gender01"><label for="gender01">男性</label>
        <input v-model="Gender" value="女性" type="radio" name="gender" id="gender02"><label for="gender02">女性</label>  
      </template>
      <template #question02>
          -生年月日-
      </template> 
      <template #answer02>
          <div class="answer02">
        <select class="answer02__year" v-model="birth" name="year" id="year">
                            <option value="1970">1970/昭和45</option>
                            <option value="1971">1971/昭和46</option>
                            <option value="1972">1972/昭和47</option>
                            <option value="1973">1973/昭和48</option>
                            <option value="1974">1974/昭和49</option>
                            <option value="1975">1975/昭和50</option>
                            <option value="1976">1976/昭和51</option>
                            <option value="1977">1977/昭和52</option>
                            <option value="1978">1978/昭和53</option>
                            <option value="1979">1979/昭和54</option>
                            <option value="1980">1980/昭和55</option>
                            <option value="1981">1981/昭和56</option>
                            <option value="1982">1982/昭和57</option>
                            <option value="1983">1983/昭和58</option>
                            <option value="1984">1984/昭和59</option>
                            <option value="1985">1985/昭和60</option>
                            <option value="1986">1986/昭和61</option>
                            <option value="1987">1987/昭和62</option>
                            <option value="1988">1988/昭和63</option>
                            <option value="1989">1989/平成元</option>
                            <option value="1990">1990/平成2</option>
                            <option value="1991">1991/平成3</option>
                            <option value="1992">1992/平成4</option>
                            <option value="1993">1993/平成5</option>
                            <option value="1994">1994/平成6</option>
                            <option value="1995">1995/平成7</option>
                            <option value="1996">1996/平成8</option>
                            <option value="1997">1997/平成9</option>
                            <option value="1998" selected>1998/平成10</option>
                            <option value="1999">1999/平成11</option>
                            <option value="2000">2000/平成12</option>
                            <option value="2001">2001/平成13</option>
                            <option value="2002">2002/平成14</option>
                            <option value="2003">2003/平成15</option>
                            <option value="2004">2004/平成16</option>
                            <option value="2005">2005/平成17</option>
                            <option value="2006">2006/平成18</option>
                            <option value="2007">2007/平成19</option>
                            <option value="2008">2008/平成20</option>
                            <option value="2009">2009/平成21</option>
                            <option value="2010">2010/平成22</option>
        </select>
        <label for="year">年</label>
         <select class="answer02__mounth" v-model="mounth" name="mounth" id="mounth">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
        </select>
        <label for="year">月</label>
        <select  class="answer02__day" v-model="day" name="day" id="day">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
      </select>
      <label for="year">日</label>
            </div>
      </template>
  </StepCompornent>
  <button class="button" type="button" @click="this.$router.push({path:'/step02'}); step">次に進む</button>
</template>

<script>
import StepCompornent from './step-compornent'

export default {
    props:{
        startnum:Number
    },
    emits:{
        updateStep:null
    },
    components:{
        StepCompornent
    },
    data:function(){
        return{
            Gender:'',
            birth:'',
            mounth:'',
            day:'',
            answer01:[]
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