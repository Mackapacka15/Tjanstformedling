<script setup lang="ts">
import { defineComponent } from "vue";
</script>
<template>
  <div>
    <h1>Sorry! Page not found</h1>
    <h2>You might need to log in to view this page</h2>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {};
  },
  methods: {},
  computed: {},
});
</script>

<style scoped>
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.4rem;
  padding-top: 3rem;
}
div {
  text-align: center;
  background-color: rgba(255, 128, 0, 0.478);
  padding-top: 2rem;
}
</style>
