<template>
  <div>
    <h4 class="entryDate">{{new Date(item.dts).toLocaleDateString() }}</h4>
    <span>{{item.sum}}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
};
</script>

<style scoped>
.entryDate {
  color: #34495e;
  height: 25px;
  padding-top: 5px;
  padding-left: 5px;
  padding-left: 20px;
  margin-bottom: 5px;
  margin-right: 0;
  display: inline-block;
}

span {
  display: inline-block;
  margin-left: 20px;
  color: #27ae60;
  font-weight: bold;
  border: 3px solid #34495e;
  width: 40px;
  height: 30px;
  padding-top: 10px;
  text-align: center;
  border-radius: 50%;
  background-color: #fff;
}
</style>


