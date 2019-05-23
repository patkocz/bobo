<template>
  <div class="container">
    <div v-if="dataLoaded">
      <HeroComponent :date="currentDate" :sum="dailySum"/>
      <FormComponent :items="items" :currentDate="currentDate"/>
      <DataComponent :items="items"/>
    </div>
  </div>
</template>

<script>
import HeroComponent from "./HeroComponent";
import FormComponent from "./FormComponent";
import DataComponent from "./DataComponent";

import dataService from "../services/dataService";
import isAsyncAvailable from "../helpers/isAsyncAvailable";

export default {
  components: {
    HeroComponent,
    FormComponent,
    DataComponent
  },

  data() {
    return {
      items: [],
      sum: 300,
      currentDate: new Date().toLocaleDateString(),
      dataLoaded: false
    };
  },

  computed: {
    dailySum() {
      let ret = 0;
      this.items.forEach(element => {
        if (this.currentDate === element.date) {
          element.feedings.forEach(feeding => {
            ret += feeding.amount;
          });
        }
      });

      return ret;
    }
  },

  async created() {
    if (isAsyncAvailable()) {
      console.log("async request");
      const response = await dataService.getDataAsync();

      console.log(response);
      if (response && response.data) {
        this.items = response.data;
        this.dataLoaded = true;
      }
    } else {
      console.log("promise request");
      dataService.getDataPromise().then(response => {
        this.items = response.data;
        this.dataLoaded = true;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
}
</style>
