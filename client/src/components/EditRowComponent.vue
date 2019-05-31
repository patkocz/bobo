<template>
  <div class="container">
    <div class="jumbotron">
      <h1>Edytuj</h1>
      <div class="numberCircle">
        <FontAwesomeIcon :icon="['far', 'edit']"/>
      </div>
    </div>

    <div class="data">
      <div class="input-field">
        <FontAwesomeIcon :icon="['far', 'clipboard']"/>
        <select v-model="entry.description">
          <option>HIPP</option>
          <option>HIPP + ESP 10K</option>
          <option>WODA</option>
        </select>
      </div>
      <div class="input-field">
        <FontAwesomeIcon :icon="['far', 'clock']"/>
        <input v-model="entry.hour" type="time" name id>
      </div>
      <div class="input-field">
        <FontAwesomeIcon icon="prescription-bottle"/>
        <input v-model.number="entry.amount" type="number" name id>
      </div>
      <button class="btn btn-back" type="submit" @click.prevent="goBack">Wróć</button>
      <button class="btn btn-save" type="submit" @click.prevent="update">Zapisz</button>
    </div>
  </div>
</template>

<script>
import dataService from "../services/dataService";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faClock,
  faEdit,
  faClipboard
} from "@fortawesome/free-regular-svg-icons";
import {
  faPrescriptionBottle,
  faAlignJustify,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCaretDown,
  faTrashAlt,
  faPrescriptionBottle,
  faClock,
  faEdit,
  faAlignJustify,
  faClipboard
);

export default {
  props: {
    feeding: Object
  },
  data() {
    return {
      entry: this.feeding
    };
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    async update() {
      await dataService.updateFeeding(this.entry);
      this.goBack();
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
  background-color: #f5f5f5;
  height: 100vh;
}

.jumbotron {
  padding-top: 15px;
  width: 100%;
  height: 90px;
  margin: 0;
  background-color: #1abc9c; /*  #34495e; */
  color: #fff;
  text-align: center;
}

.data {
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  text-align: center;
}

.input-field {
  text-align: center;
  margin-bottom: 15px;
  font-size: 20px;
}

select,
input[type="time"],
input[type="number"] {
  width: 80%;
  margin-left: 10px;
  height: 40px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  text-align: left;
  border: 1px solid #ccc;
  box-shadow: none;
  font-size: 20px;
}

.numberCircle {
  width: 80px;
  line-height: 80px;
  border-radius: 50%;
  text-align: center;
  font-size: 32px;
  border: 5px solid #1abc9c;
  background-color: #fff;
  margin: 0 auto;
  /* color: #27ae60; */
  color: #1abc9c;
}

h1 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
}

.btn {
  height: 40px;
  padding: 10px 30px;
  margin-top: 30px;
  box-shadow: none;
  border: none;
  width: 120px;
  color: #fff;
  font-size: 20px;
}

.btn-back {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #34495e;
}

.btn-save {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left: 1px solid #0ea88a;
  background-color: #1abc9c;
}
</style>
