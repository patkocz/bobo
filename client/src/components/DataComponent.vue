<template>
  <div class="list">
    <ul>
      <li v-bind:key="item._id" v-for="item in itemList">
        <!-- <h4 class="entryDate">{{item.date}}</h4> -->
        <DateHeaderComponent :item="item"/>
        <table>
          <tr class="entryRow" v-bind:key="feeding._id" v-for="feeding in item.feedings">
            <td class="hourCell">{{feeding.hour}}</td>
            <td>{{feeding.description}}</td>
            <td>{{feeding.amount}}</td>
            <td>
              <button class="deleteBtn" @click="deleteFeeding(feeding._id)">-</button>
            </td>
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
import dataService from "../services/dataService";
import DateHeaderComponent from "./DateHeaderComponent";
// import fakeData from "../data/fakeData";

export default {
  props: {
    entries: Array
  },

  components: {
    DateHeaderComponent
  },

  data() {
    return {
      items: this.entries
    };
  },

  methods: {
    async deleteFeeding(feedingId) {
      console.log(feedingId);

      this.items.forEach(element => {
        element.feedings = element.feedings.filter(feeding => {
          return feeding._id != feedingId;
        });
      });

      this.items = this.items.filter(entry => {
        return entry.feedings.length > 0;
      });

      await dataService.deleteFeeding(feedingId);

      // con/sole.log(this.items[elementIndex]);
    }
  },

  computed: {
    itemList() {
      return this.items.slice().reverse();
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
  height: 40px;
  border-bottom: 1px solid #ccc;
}
.hourCell {
  text-align: left;
  padding-left: 20px;
}
.list ul {
  padding-left: 0px;
}

.deleteBtn {
  background: transparent;
  border: 1px solid crimson;
  border-radius: 2em;
  color: crimson;
  display: inline-block;
  font-size: 12px;
  height: 20px;
  line-height: 2px;
  margin: 0 0 8px;
  padding: 0;
  text-align: center;
  width: 20px;
}
</style>

