<template>

    <div align="center">
        <h1>회원정보</h1>
        <ul>
            <li><button class="btn" >이름입력</button></li>
            <li><input type="text" class="inputList" placeholder="이름을 입력해주세요."><button class="btn1">숨기기</button></li>

            <li><button class="btn">사번입력</button></li>
            <li><input type="text" class="inputList" placeholder="사번을 입력해주세요."><button class="btn1">숨기기</button></li>

            <li><button class="btn">회사입력</button></li>
            <li><input type="text" class="inputList" placeholder="회사을 입력해주세요."><button class="btn1">숨기기</button></li>

            <li><button class="btn">직급입력</button></li>
            <li><input type="text" class="inputList" placeholder="직급을 입력해주세요." ><button class="btn1">숨기기</button></li>

            <li><button class="btn" >주소입력</button></li>
            <li><input type="text" class="inputList" placeholder="주소을 입력해주세요."><button class="btn1" >숨기기</button></li>

            <li><button class="btn">성별선택</button></li>
            <li>
                남 : <input type="radio" name="radio1" value="남">
                여 : <input type="radio" name="radio1" value="여">
                <button class="btn1">숨기기</button>
            </li>

            <li><button class="btn">학력선택</button></li>
            <li>
                <select>
                    <option value="고졸">고졸</option>
                    <option value="초대졸">초대졸</option>
                    <option value="대졸">대졸</option>
                </select>
                <button class="btn1" >숨기기</button>
            </li>

            <li><button class="btn">취미선택</button></li>
            <li>
                운동 :      <input type="checkbox" name="check1" value="운동"> |
                음악듣기 :  <input type="checkbox" name="check1" value="음악듣기"> |
                영화보기 :  <input type="checkbox" name="check1" value="영화보기"> |
                게임 :      <input type="checkbox" name="check1" value="게임"> |
                코딩 :      <input type="checkbox" name="check1" value="코딩">
                <button class="btn1">숨기기</button>
            </li>
        </ul>
        <button class="btn2" @click="save" v-if="showDiv == '0'">저장</button>

        <div class="userInfo">
            <div>
                <ul>
                    <li class="info"><h3>이름 : <input class="inputList1" type="text" disabled></h3></li>
                    <li class="info"><h3>사번 : <input class="inputList1" type="text" disabled></h3></li>
                    <li class="info"><h3>회사 : <input class="inputList1" type="text" disabled></h3></li>
                    <li class="info"><h3>직급 : <input class="inputList1" type="text" disabled></h3></li>
                    <li class="info"><h3>주소 : <input class="inputList1" type="text" disabled></h3></li>
                    <li class="info"><h3>성별 : <input class="inputList1" type="text" disabled></h3></li>
                    <li class="info"><h3>학력 : <input class="inputList1" type="text" disabled></h3></li>
                    <li class="info"><h3>취미 : <input class="inputList1" type="text" disabled></h3></li>
                </ul>
            </div>
        </div>
        <button class="btn2">수정</button>
    </div>
</template>
<script>
export default {
     created() {

     },

     data() {
        return {
           
        };
    },
    methods : {
        
    }
}
</script>

<style scoped>
    .inputList {
        margin: 10px;
        width: 500px;
        height: 42px;
        font-size: 15px;
        border: 3px solid black;
        border-radius: 15px;
        outline: none;
        padding-left: 10px;
        background-color: white;
    }

    .inputList1 {
        margin: 10px;
        width: 300px;
        height: 36px;
        font-size: 15px;
        border: 0;
        outline: none;
        padding-left: 10px;
        background-color: white;
    }

    .btn {
        width : 120px;
        height : 40px;
        margin: 10px;
        color : #fff;
        background: #004fff;
        font-size: 16px;
        border: none;
        border-radius: 20px;
        box-shadow: 0 4px 16px rgba(0,79,255,0.3);
        transition: 0.3s;
    }
    .btn:focus {
        outline : 0;
    }
   .btn:hover {
        background: rgba(0,79,255,0.9);
        cursor : pointer;
        box-shadow: 0 2px 4px rgba(34, 35, 35, 0.6);
    }

    .btn1 {
        width : 80px;
        height : 30px;
        margin: 10px;
        color : #fff;
        background: #004fff;
        font-size: 16px;
        border: none;
        border-radius: 20px;
        box-shadow: 0 4px 16px rgba(0,79,255,0.3);
        transition: 0.3s;
    }
    .btn1:focus {
        outline : 0;
    }
   .btn1:hover {
        background: rgba(0,79,255,0.9);
        cursor : pointer;
        box-shadow: 0 2px 4px rgba(34, 35, 35, 0.6);
    }

    .btn2 {
        width : 80px;
        height : 30px;
        margin: 10px;
        color : #fff;
        background: #42b883;
        font-size: 16px;
        border: none;
        border-radius: 20px;
        box-shadow: 0 4px 16px rgba(0,79,255,0.3);
        transition: 0.3s;
    }
    .btn2:focus {
        outline : 0;
    }
   .btn2:hover {
        background: rgba(0,79,255,0.9);
        cursor : pointer;
        box-shadow: 0 2px 4px rgba(34, 35, 35, 0.6);
    }

    div h1 {
        margin: 16px;
    }

    .userInfo {
        border-top: 2px solid black;
        padding: 30px;
        background-color: #42b883;
    }

    .info {
        border: 2px solid white;
        border-radius: 10px;
        margin: 10px;
        text-align: left;
        padding: 14px;
        background-color: white;
        color: #42b883;
    }
    ul {
    	list-style : none;
    }

</style>
