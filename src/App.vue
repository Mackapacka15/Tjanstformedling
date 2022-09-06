<script setup lang="ts">
import TheHeader from "./components/VueHeader/TheHeader.vue";
import { RouterLink, RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
