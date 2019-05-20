<template>
  <div class="jumbotron">
    <h1>{{date}}</h1>
    <div class="numberCircle">{{sum}}</div>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    sum: Number
  },
  data() {
    return {
      currentDate: "20.05.2019",
      dailySum: 600
    };
  }
};
</script>

<style scoped>
.jumbotron {
  padding-top: 15px;
  width: 100%;
  height: 90px;
  margin: 0;
  background-color: #34495e;
  color: #fff;
  text-align: center;
}

.numberCircle {
  width: 80px;
  line-height: 80px;
  border-radius: 50%;
  text-align: center;
  font-size: 32px;
  border: 5px solid #34495e;
  background-color: #fff;
  margin: 0 auto;
  color: #27ae60;
}

h1 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
}
</style>

