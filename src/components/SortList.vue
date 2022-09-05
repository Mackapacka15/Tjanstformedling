<script lang="ts" setup>
import SortListComponent from "./SortListComponent.vue";
import { defineComponent } from "vue";
import { store } from "./store";
import type { Person } from "./interface";
import FilterBar from "./FilterBar.vue";
</script>

<template>
  <FilterBar :showFilters="true" />
  <ul>
    <li v-for="people in store.peopleListFilterd">
      <SortListComponent
        :name="people.name"
        :occupations="people.occupation"
        :aboutMe="people.aboutMe"
        :rating="people.rating"
      />
    </li>
  </ul>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      store,
      sortedArray: [] as Array<Person>,
    };
  },
  methods: {
    addPerson(): void {},
  },
  computed: {},
});
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
}
li {
  margin: 1rem;
}
</style>
