<script setup lang="ts">
import TheHeader from "./components/VueHeader/TheHeader.vue";
import SortList from "./components/SortList.vue";
import MainPage from "./components/MainPage.vue";
</script>

<template>
  <TheHeader />
  <MainPage />
  <SortList />
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
