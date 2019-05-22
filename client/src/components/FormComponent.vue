<template>
  <div class="form">
    <div class="inputs">
      <!-- <input v-model="currentFeeding.description" type="text"> -->
      <select v-model="currentFeeding.description">
        <option>HIPP</option>
        <option>HIPP + ESP 10K</option>
      </select>
      <input v-model.number="currentFeeding.amount" type="number">
    </div>
    <button @click.prevent="addEntry" type="submit">+</button>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    currentDate: String
  },
  data() {
    return {
      currentFeeding: {
        description: "",
        amount: null
      }
    };
  },

  methods: {
    addEntry() {
      let today = this.items.find(item => {
        return item.date === this.currentDate;
      });

      if (!today) {
        today = {
          date: this.currentDate,
          feedings: []
        };

        this.items.push(today);
      }

      let d = new Date();
      const time = `${d.getHours()}:${d.getMinutes()}`;

      today.feedings.push({
        hour: time,
        description: this.currentFeeding.description,
        amount: this.currentFeeding.amount
      });

      this.currentFeeding.description = "";
      this.currentFeeding.amount = null;
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #34495e;
  color: #fff;
  /* line-height: 40x; */
  font-size: 30px;
  box-shadow: 0px 1px 3px 3px #c8d2dd;
}
</style>

