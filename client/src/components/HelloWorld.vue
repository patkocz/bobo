<template>
  <div class="container">
    <HeroComponent :date="currentDate" :sum="dailySum"/>
    <FormComponent :items="items" :currentDate="currentDate"/>
    <DataComponent :items="items"/>
  </div>
</template>

<script>
import HeroComponent from "./HeroComponent";
import FormComponent from "./FormComponent";
import DataComponent from "./DataComponent";

import fakeData from "../data/fakeData";

export default {
  components: {
    HeroComponent,
    FormComponent,
    DataComponent
  },

  data() {
    return {
      items: fakeData,
      sum: 300,
      currentDate: new Date().toLocaleDateString()
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
