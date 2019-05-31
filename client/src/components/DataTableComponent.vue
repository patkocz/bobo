<template>
  <table>
    <tr
      v-touch:swipe.right="editEntry(feeding)"
      v-touch:swipe.left="deleteEntry(feeding)"
      v-touch-class="'active'"
      class="entryRow"
      v-bind:key="feeding._id"
      v-for="feeding in item.feedings"
    >
      <td class="hourCell">
        <FontAwesomeIcon :icon="['far', 'clock']"/>
        {{feeding.hour}}
      </td>
      <td>{{feeding.description}}</td>
      <td class="amount-cell">
        <FontAwesomeIcon @click="log" icon="prescription-bottle"/>
        <div>{{feeding.amount}}</div>
      </td>
      <td class="btn-cell">
        <button class="btn editBtn">
          <FontAwesomeIcon :icon="['far', 'edit']"/>
        </button>
      </td>
      <td class="btn-cell">
        <button class="btn deleteBtn" @click="deleteFeeding(feeding._id)">
          <FontAwesomeIcon :icon="['far', 'trash-alt']"/>
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faClock,
  faEdit
} from "@fortawesome/free-regular-svg-icons";
import { faPrescriptionBottle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEdit, faTrashAlt, faPrescriptionBottle, faClock);

export default {
  props: {
    entry: Object,
    deleteFeeding: Function
  },

  data() {
    return {
      editAmount: false
    };
  },

  components: {
    FontAwesomeIcon
  },

  data() {
    return {
      item: this.entry
    };
  },
  methods: {
    log() {
      console.log("click");
    },
    editEntry(feeding) {
      return (direction, e, s) => {
        console.log(`swipe event: ${direction}, `, e);
        console.log(`swipe event: ${direction}, `, e);

        console.log("edit");
        this.$router.push({
          name: "edit",
          params: { id: feeding._id, feeding: feeding }
        });
      };
    },
    deleteEntry(feeding) {
      return (direction, e, s) => {
        // console.log(`swipe event: ${direction}, `, recId);
        // console.log(e);
        console.log("delete");
        this.$router.push({
          name: "delete",
          params: { id: feeding._id, feeding: feeding }
        });
      };
    }
  }
};
</script>

<style scoped>
tr.active {
  /* background-color: skyblue; */
}

table {
  width: 100%;
  margin: 0;
  text-align: center;
  border-collapse: collapse;
}

.entryRow td {
  height: 50px;
  border-bottom: 1px solid #ccc;
}
.hourCell {
  text-align: left;
  padding-left: 20px;
}

.amountInput {
  display: inline-block;
  width: 40px;
  border: none;
  margin-left: 5px;
  padding: 3px;
}

.btn {
  background: transparent;
  display: inline-block;
  font-size: 18px;
  height: 20px;
  line-height: 2px;
  margin: 0 0 8px;
  padding: 0;
  text-align: center;
  width: 20px;
  border: none;
  cursor: pointer;
}
.deleteBtn {
  color: #e74c3c;
}

.editBtn {
  color: #1abc9c;
}

.btn-cell {
  width: 40px;
}
.amount-cell {
  width: 70px;
}

.amount-cell div {
  display: inline-block;
  margin-left: 5px;
}

@media (max-width: 600px) {
  .btn {
    display: none;
  }

  .btn-cell {
    width: 0;
  }
}
</style>


