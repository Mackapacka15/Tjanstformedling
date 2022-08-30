<script lang="ts" setup>
import { defineComponent } from "vue";
import { store } from "./store";
</script>

<template>
  <div class="main-text">
    <h2>Välkommen till Hemmafixarna!</h2>
    <p>
      Här kan du leta efter personer med olika kompetenser för att hjälpa dig
      med allt du behöver hjälp med hemma.
    </p>
  </div>
  <input type="text" v-model="filters" />
  <button type="button" @click="setFilters">Sök</button>

  <div class="sort-button" v-show="hasFilterd">
    <label for="Sort"> Sortera </label>
    <select @change="sortInput" name="Sort" id="Sort">
      <option></option>
      <option value="grade_desc">Betyg</option>
      <option value="grade_asc">Betyg (Lägst först)</option>
    </select>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return { store, filters: "", hasFilterd: false };
  },
  methods: {
    setFilters() {
      this.hasFilterd = true;
      store.filters[0] = this.filters;
      store.applyFilters();
    },
    sortInput(event: any) {
      this.hasFilterd = true;
      switch (event.target.value) {
        case "grade_asc":
          this.store.sortRating();
          break;
        case "grade_desc":
          this.store.sortRatingReverse();
          break;
        default:
          break;
      }
    },
  },
  computed: {},
});
</script>

<style scoped>
.sort-button {
  text-align: right;
}
.main-text {
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: rgba(165, 255, 97, 0.534);
}
</style>
