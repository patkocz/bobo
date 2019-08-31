<template>
  <table>
    <tr
      v-touch:swipe.right="editEntrySwipe(feeding)"
      v-touch:swipe.left="deleteEntrySwipe(feeding)"
      v-touch-class="'active'"
      class="entryRow"
      v-bind:key="feeding.id"
      v-for="feeding in feedDate.Feedings"
    >
      <td class="hourCell">
        <FontAwesomeIcon :icon="['far', 'clock']" />
        {{feeding.hour}}
      </td>
      <td>{{feeding.description}}</td>
      <td class="amount-cell">
        <FontAwesomeIcon @click="log" icon="prescription-bottle" />
        <div>{{feeding.amount}}</div>
      </td>
      <td class="btn-cell">
        <button class="btn editBtn" @click="editEntryClick(feeding)">
          <FontAwesomeIcon :icon="['far', 'edit']" />
        </button>
      </td>
      <td class="btn-cell">
        <button class="btn deleteBtn" @click="deleteEntryClick(feeding)">
          <FontAwesomeIcon :icon="['far', 'trash-alt']" />
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
      editAmount: false,
      item: this.entry
    };
  },

  components: {
    FontAwesomeIcon
  },

  computed: {
    feedDate() {
      this.item.Feedings.sort((a,b) => b.dts - a.dts);
      return this.item;
    }
  },
  methods: {
    log() {
      console.log("click");
    },

    editEntrySwipe(feeding) {
      return (direction, e, s) => {
        this.$router.push({
          name: "edit",
          params: { id: feeding.id, feeding: feeding }
        });
      };
    },

    editEntryClick(feeding) {
      this.$router.push({
        name: "edit",
        params: { id: feeding.id, feeding: feeding }
      });
    },

    deleteEntrySwipe(feeding) {
      return (direction, e, s) => {
        console.log("delete");
        this.$router.push({
          name: "delete",
          params: { id: feeding.id, feeding: feeding }
        });
      };
    },

    deleteEntryClick(feeding) {
      this.$router.push({
        name: "delete",
        params: { id: feeding.id, feeding: feeding }
      });
    }
  }
};
</script>

<style scoped>
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


