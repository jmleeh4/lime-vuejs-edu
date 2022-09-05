<template>
  <div>
    <ul class="board">
      <li class="fl tc w70 title t_line">POINTS</li>
      <li class="fl tc w500 title t_line">TITLE</li>
      <li class="fl tc w120 title t_line">ID</li>
      <li class="fl tc w120 title t_line">USERNAME</li>
      <li class="fl tc w100 title t_line">TIME_AGO</li>
      <li class="fl tc w100 title">count</li>
    </ul>
    <ul class="board">
      <li class="fl tc w70 list t_line lt_line"></li>
      <li class="fl tc w500 list t_line lt_line"></li>
      <li class="fl tc w120 list t_line lt_line"></li>
      <li class="fl tc w120 list t_line lt_line"></li>
      <li class="fl tc w100 list t_line lt_line"></li>
      <li class="fl tc w100 list t_line lt_line"></li>
    </ul>
  </div>
</template>

<script>


export default {

  data() {
    return {
    }
  },
  computed() {
  },
  async created() {
    //데이터 호출영역--> 'this.$store.state.news' 를 호출하면 데이터호출이 가능하다.
    //호출된 데이터를 가지고 리스트를 완성시켜보세요.
    //단, 데이터선언, 라이프사이클, 메소드를 사용용도에 알맞게 사용하세요
    //제목은 클릭시 알맞은 사이트로 이동되도록 하세요
    await this.$store.dispatch('FETCH_NEWS');
  },
  methods: {

  }
}
</script>











<style scoped>
ul li {
  list-style: none;
}

.fl {
  float: left;
}

.tc {
  text-align: center;
}

/* 게시판 목록 */
.board {
  width: 1050px;
}

.w70 {
  width: 70px;
}

.w500 {
  width: 500px;
}

.w120 {
  width: 120px;
}

.w100 {
  width: 100px;
}

.title {
  height: 50px;
  line-height: 50px;
  background: #42b883;
  font-weight: bold;
}

.t_line {
  border-right: solid 1px gray;
}

.lt_line {
  border-bottom: solid 1px gray;
}

.list {
  height: 40px;
  line-height: 40px;
  background: #f3f3f3;
}

</style>

