<template>
  <div>
    <h4 class="entryDate">{{item.date}}</h4>
    <span>{{fluidSum}}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },

  computed: {
    fluidSum() {
      let sum = 0;

      if (this.item.feedings) {
        this.item.feedings.forEach(element => {
          sum += element.amount;
        });
      }

      return sum;
    }
  }
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


