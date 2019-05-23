<template>
  <div id="app">
    <MainComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MainComponent from "./components/MainComponent.vue";

export default {
  name: "app",
  components: {
    MainComponent
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: #555;
  background-color: #fbfbfb;
}
</style>
