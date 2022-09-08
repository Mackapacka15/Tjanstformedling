<script setup lang="ts">
import TheHeader from "./components/VueHeader/TheHeader.vue";
import { RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <main>
    <TheHeader />
    <RouterView />
    <TheFooter />
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
