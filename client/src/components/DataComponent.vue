<template>
  <div class="list">
    <ul>
      <li v-bind:key="item._id" v-for="item in itemList">
        <DateHeaderComponent :item="item"/>
        <DataTableComponent :entry="item" :deleteFeeding="deleteFeeding"/>
      </li>
    </ul>
  </div>
</template>

<script>
import dataService from "../services/dataService";
import DateHeaderComponent from "./DateHeaderComponent";
import DataTableComponent from "./DataTableComponent";

export default {
  props: {
    entries: Array
  },

  components: {
    DateHeaderComponent,
    DataTableComponent
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
      return this.items.sort((a,b) => b.dts - a.dts)
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

.list ul {
  padding-left: 0px;
}
</style>

