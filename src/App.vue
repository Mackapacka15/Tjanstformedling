<script setup lang="ts">
import TheHeader from "./components/VueHeader/TheHeader.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
