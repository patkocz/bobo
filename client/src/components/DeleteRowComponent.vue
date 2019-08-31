<template>
  <div class="container">
    <div class="jumbotron">
      <h1>Usuń</h1>
      <div class="numberCircle">
        <FontAwesomeIcon :icon="['far', 'trash-alt']"/>
      </div>
    </div>
    <h3>Czy napewno chcesz usunąć ten wpis?</h3>

    <div class="data">
      <div class="input-field">
        <FontAwesomeIcon :icon="['far', 'clipboard']"/>
        <h4>{{entry.description}}</h4>
      </div>
      <div class="input-field">
        <FontAwesomeIcon :icon="['far', 'clock']"/>
        <h4>{{entry.hour}}</h4>
      </div>
      <div class="input-field">
        <FontAwesomeIcon icon="prescription-bottle"/>
        <h4>{{entry.amount}}</h4>
      </div>
      <button class="btn btn-back" type="submit" @click.prevent="goBack">Wróć</button>
      <button class="btn btn-delete" type="submit" @click.prevent="deleteFeeding">Usuń</button>
    </div>
  </div>
</template>

<script>
import dataService from "../services/sqlService";
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

    async deleteFeeding() {
      await dataService.deleteFeeding(this.$route.params.id);
      this.$router.push("/");
    }
    
  }
};
</script>

<style scoped>
h1 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
  color: #fff;
}

h3 {
  margin-top: 80px;
  text-align: center;
  font-weight: 300;
}
.jumbotron {
  padding-top: 15px;
  width: 100%;
  height: 90px;
  margin: 0;
  background-color: #e74c3c; /*  #34495e; */
  color: #fff;
  text-align: center;
}

.numberCircle {
  width: 80px;
  line-height: 80px;
  border-radius: 50%;
  text-align: center;
  font-size: 32px;
  border: 5px solid #e74c3c;
  background-color: #fff;
  margin: 0 auto;
  color: #e74c3c;
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
  cursor: pointer;
}

.btn-back {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #34495e;
}

.btn-delete {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left: 1px solid #b63b2d;
  background-color: #e74c3c;
}

.data {
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
}

.input-field {
  text-align: center;
  margin-bottom: 5px;
  font-size: 20px;
}

.input-field h4 {
  display: inline-block;
  margin: 5px;
  font-weight: 300;
}

.container {
  background-color: #f5f5f5;
  height: 100vh;
}
</style>
