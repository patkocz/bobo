<template>
  <table>
    <tr class="entryRow" v-bind:key="feeding._id" v-for="feeding in item.feedings">
      <td class="hourCell">
        <FontAwesomeIcon :icon="['far', 'clock']"/>
        {{feeding.hour}}
      </td>
      <td>{{feeding.description}}</td>
      <td>
        <FontAwesomeIcon icon="prescription-bottle"/>
        {{feeding.amount}}
      </td>
      <td>
        <button class="deleteBtn" @click="deleteFeeding(feeding._id)">
          <FontAwesomeIcon :icon="['far', 'trash-alt']"/>
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faClock } from "@fortawesome/free-regular-svg-icons";
import { faPrescriptionBottle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrashAlt, faPrescriptionBottle, faClock);

export default {
  props: {
    entry: Object,
    deleteFeeding: Function
  },

  components: {
    FontAwesomeIcon
  },

  data() {
    return {
      item: this.entry
    };
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
  height: 40px;
  border-bottom: 1px solid #ccc;
}
.hourCell {
  text-align: left;
  padding-left: 20px;
}

.deleteBtn {
  background: transparent;
  color: #e74c3c;
  display: inline-block;
  font-size: 14px;
  height: 20px;
  line-height: 2px;
  margin: 0 0 8px;
  padding: 0;
  text-align: center;
  width: 20px;
  border: none;
  cursor: pointer;
}
</style>


