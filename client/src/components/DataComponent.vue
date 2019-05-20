<template>
  <div class="list">
    <ul>
      <li v-bind:key="item.date" v-for="item in itemList">
        <h4 class="entryDate">{{item.date}}</h4>
        <table>
          <tr class="entryRow" v-bind:key="feeding.hour" v-for="feeding in item.feedings">
            <td class="hourCell">{{feeding.hour}}</td>
            <td>{{feeding.description}}</td>
            <td>{{feeding.amount}}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <!-- <td class="daySummary">{{`Suma: `}}</td> -->
          </tr>
        </table>
      </li>
    </ul>
  </div>
</template>

<script>
// import fakeData from "../data/fakeData";

export default {
  props: {
    items: Array
  },

  methods: {},

  computed: {
    itemList() {
      return this.items.slice().reverse();
      // return this.items.sort((a, b) => {
      //   return new Date(b.date) - new Date(a.date);
      // });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0px;
  padding-left: 5px;
}

table {
  width: 100%;
  margin: 0;
  text-align: center;
  border-collapse: collapse;
}

.entryDate {
  color: #34495e;
  height: 25px;
  padding-top: 5px;
  padding-left: 5px;
  padding-left: 20px;
  margin-bottom: 5px;
  margin-right: 0;
}

.entryRow td {
  height: 30px;
  border-bottom: 1px solid #ccc;
}
.hourCell {
  text-align: left;
  padding-left: 20px;
}
.list ul {
  padding-left: 0px;
}
</style>

