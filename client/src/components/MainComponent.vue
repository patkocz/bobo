<template>
  <div class="container">
    <div v-if="dataLoaded">
      <HeroComponent :sum="today.sum"/>
      <FormComponent :items="today"/>
      <DataComponent :entries="items"/>
    </div>
  </div>
</template>

<script>
import HeroComponent from "./HeroComponent";
import FormComponent from "./FormComponent";
import DataComponent from "./DataComponent";

//import dataService from "../services/dataService";
import sqlService from '../services/sqlService';
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
      todayId: null,
      today: {},
      // currentDate: new Date().toLocaleDateString(),
      dataLoaded: false
    };
  },

  computed: {
  },

  mounted() {
    sqlService.addFeedDate()
      .then(response => {
        this.todayId = response.id;
        this.today = response;
        return sqlService.getWeekFeedDates();
      })
      .then(response => {
          this.items = response;
          const today = this.items.find(feedDate => {
            const tdId = this.todayId;
            return feedDate.id === tdId;
          });

          if (today) {
            this.today = today;
          } else {
            this.today.sum = 0;
            this.today.Feedings = [];
            this.items.push(this.today);
          }

          

          this.dataLoaded = true;
          console.log(this.today);
          // this.sum = 
      })
      .catch(err => {
        console.log(err);
      })
    
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
  background-color: #f5f5f5;
  height: 100vh;
}
</style>
