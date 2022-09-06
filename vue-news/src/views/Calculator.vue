<template>
  <div class="calculator">
    <div>
      <h2>
        <span>계산기 예제</span>
      </h2>
    </div>
    <table border="1px">
      <tr>
        <td colspan="4">
          <input type="text" id="display">
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <input type="text" id="result">
        </td>
      </tr>
      <tr>
        <td colspan="3">AC</td>
        <td>/</td>
      </tr>
      <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>*</td>
      </tr>
      <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>-</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>+</td>
      </tr>
      <tr>
        <td colspan="2">0</td>
        <td>.</td>
        <td>=</td>
      </tr>
    </table>
    <div>
      <br>
      <h3>계산하기</h3>
      <p>1. 29 + 51 + 67 + 911 <button>정답확인</button></p>
      답 : <input class="answer" type="text">
      <p>2. 51 * 80 * 2 + 324 <button>정답확인</button></p>
      답 : <input class="answer" type="text">
      <p>2. 50 / 2 + 44 - 25 <button>정답확인</button></p>
      답 : <input class="answer" type="text">
      <p>2. 1 * 2 * 3 * 4 * 5 * 6 * 7 <button>정답확인</button></p>
      답 : <input class="answer" type="text">

    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data(){
    return{
    }
  },
  computed : {

  },
  methods : {

  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border: 1px #35495e;
}

td {
  padding: 5px 10px;
  text-align: center;
}

input {
  text-align: right;
  /*border: none;*/
}

input:focus {
  outline: none;
}
.calculator {
  margin: 30px;
}


</style>