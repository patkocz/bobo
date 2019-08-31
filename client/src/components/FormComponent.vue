<template>
  <div class="form">
    <div class="inputs">
      <select v-model="newFeeding.description">
        <option>HIPP</option>
        <option>SŁOICZEK</option>
        <option>HIPP + ESP 10K</option>
        <option>WODA</option>
      </select>
      <input @keyup.enter="addEntry" v-model.number="newFeeding.amount" type="number" />
    </div>
    <button :disabled="disableSend || disableBtn" @click.prevent="addEntry" type="submit">+</button>
  </div>
</template>

<script>
import dataService from "../services/dataService";
import sqlService from "../services/sqlService";

export default {
  props: {
    items: Object
  },
  data() {
    return {
      newFeeding: {
        description: "",
        amount: null
      },
      disableSend: false
    };
  },

  methods: {
    addEntry() {
      if (
        this.newFeeding.description === "" ||
        !this.newFeeding.amount
      ) {
        return;
      }

      let d = new Date();
      const time = `${this.formatTime(d.getHours())}:${this.formatTime(
        d.getMinutes()
      )}`;

      const feeding = {
        hour: time,
        description: this.newFeeding.description,
        amount: this.newFeeding.amount
      };

      this.disableSend = true;

      sqlService
        .addFeeding(feeding)
        .then(response => {
          this.items.Feedings.push(response);
          this.items.sum += response.amount;

          this.newFeeding.description = "";
          this.newFeeding.amount = null;
          this.disableSend = false;
        })
        .catch(err => {
          console.log(err);
        });

      //   today.feedings.push(result.data);

      //   this.currentFeeding.description = "";
      //   this.currentFeeding.amount = null;
      //   this.disableSend = false;
    },
    // async addEntry() {
    //   const currentDate = new Date();
    //   // console.log(this.currentFeeding);

    //   let today = this.items.find(item => {
    //     return item.date === currentDate.toLocaleDateString();
    //   });

    //   if (!today) {
    //     today = {
    //       date: currentDate.toLocaleDateString(),
    //       feedings: []
    //     };

    //     this.items.push(today);
    //   }

    //   let d = new Date();
    //   const time = `${this.formatTime(d.getHours())}:${this.formatTime(
    //     d.getMinutes()
    //   )}`;

    //   const feeding = {
    //     date: currentDate.toLocaleDateString(),
    //     hour: time,
    //     description: this.currentFeeding.description,
    //     amount: this.currentFeeding.amount
    //   };

    //   this.disableSend = true;

    //   let result = await dataService.addFeeding(feeding);

    //   today.feedings.push(result.data);

    //   this.currentFeeding.description = "";
    //   this.currentFeeding.amount = null;
    //   this.disableSend = false;
    // },

    formatTime(value) {
      return value < 10 ? `0${value}` : `${value}`;
    }
  },

  computed: {
    disableBtn() {
      if (this.newFeeding.description === "" || !this.newFeeding.amount)
        return true;
      return false;
    }
  }
};
</script>

<style scoped>
.form {
  margin-top: 70px;
  width: 100%;
}

input {
  height: 35px;
  color: #555;
  font-size: 16px;
  /* font-weight: 300; */
}

select {
  height: 39px;
  color: #555;
  font-size: 16px;
  width: 60%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: none;
  border: 1px solid #ccc;
  border-right: none;
}

input:first-of-type {
  width: 60%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: none;
  border: 1px solid #ccc;
  border-right: none;
}

input:last-of-type {
  width: 20%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border: 1px solid #ccc;
  text-align: center;
}

.inputs {
  width: 100%;
  text-align: center;
}

button {
  margin: 0 auto;
  display: block;
  margin-top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #34495e;
  color: #fff;
  /* line-height: 40x; */
  font-size: 30px;
  box-shadow: 0px 1px 3px 3px #c8d2dd;
}

button:disabled,
button[disabled] {
  background-color: #687077;
}
</style>

