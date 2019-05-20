<template>
  <div class="container">
    <div class="jumbotron">
      <h1>{{currentDate}}</h1>
      <div class="numberCircle">{{dailySum}}</div>
    </div>

    <div class="form">
      <div class="inputs">
        <input v-model="currentFeeding.description" type="text">
        <input v-model.number="currentFeeding.amount" type="number">
      </div>
      <button @click.prevent="addEntry" type="submit">+</button>
    </div>

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
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      currentDate: new Date().toLocaleDateString(),
      currentFeeding: {
        description: "",
        amount: 0
      },
      items: [
        {
          date: "17.05.2019",
          feedings: [
            {
              hour: "10:30",
              description: "Hipp + ESP 10k",
              amount: 130
            },
            {
              hour: "13:30",
              description: "Hipp + ESP 10k",
              amount: 130
            },
            {
              hour: "16:30",
              description: "Hipp + ESP 10k",
              amount: 130
            }
          ]
        },
        {
          date: "18.05.2019",
          feedings: [
            {
              hour: "10:30",
              description: "Hipp + ESP 10k",
              amount: 130
            },
            {
              hour: "13:30",
              description: "Hipp + ESP 10k",
              amount: 130
            },
            {
              hour: "16:30",
              description: "Hipp + ESP 10k",
              amount: 130
            }
          ]
        }
      ]
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
      this.currentFeeding.amount = 0;
    }
  },
  computed: {
    itemList() {
      return this.items.slice().reverse();
      // return this.items.sort((a, b) => {
      //   return new Date(b.date) - new Date(a.date);
      // });
    },
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

.jumbotron {
  padding-top: 15px;
  width: 100%;
  height: 90px;
  margin: 0;
  background-color: #34495e;
  color: #ecf0f1;
  text-align: center;
}

.numberCircle {
  width: 80px;
  line-height: 80px;
  border-radius: 50%;
  text-align: center;
  font-size: 32px;
  border: 5px solid #34495e;
  background-color: #fff;
  margin: 0 auto;
  color: #27ae60;
}

h1 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
}

.form {
  margin-top: 60px;
}

ul {
  list-style: none;
  padding: 0px;
  padding-left: 5px;
}

table {
  width: 100%;
  margin: 0;
  text-align: center;
}
.form {
  width: 100%;
}

input {
  height: 30px;
}

input:last-of-type {
  width: 20%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 1px solid #ccc;
}
input:first-of-type {
  width: 60%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: none;
  border: 1px solid #ccc;
  border-right: none;
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
  background-color: #ff7979;
  color: #eb4d4b;
  /* line-height: 40x; */
  font-size: 30px;
}
.entryDate {
  color: #c7ecee;
  height: 25px;
  padding-top: 5px;
  padding-left: 5px;
  padding-left: 20px;
  margin-bottom: 5px;
  margin-right: 0;
  background-color: #22a6b3;
}

table {
  border-collapse: collapse;
}
.entryRow td {
  height: 25px;
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
