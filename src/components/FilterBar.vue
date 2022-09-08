<script lang="ts" setup>
import { defineComponent } from "vue";
import { store } from "./store";
</script>

<template>
  <div class="bar">
    <div></div>
    <div class="search-main">
      <input
        class="search-input"
        type="text"
        v-model="filters"
        placeholder="Vad letar du efter?"
      />
      <RouterLink to="/SearchResult">
        <button class="search-button" type="button" @click="setFilters">
          <img
            src="../img/magnifying-glass-svgrepo-com.svg"
            alt="picture of a magnifying glas"
          />
        </button>
      </RouterLink>
    </div>

    <div class="sort-button" v-show="showFilters">
      <label for="Sort"> Sortera </label>
      <select @change="sortInput" name="Sort" id="Sort">
        <option></option>
        <option value="grade_desc">Betyg</option>
        <option value="grade_asc">Betyg (Lägst först)</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: ["showFilters"],
  data() {
    return { store, filters: "" };
  },
  methods: {
    setFilters() {
      store.newFilters(this.filters.split(",").map((a) => a.trim()));
      store.applyFilters();
    },
    sortInput(event: any) {
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
.bar {
  display: flex;
  background-color: rgba(0, 106, 255, 0.358);
  padding: 1rem;
  margin-top: 0.2rem;
  width: 100vw;
}
.sort-button {
  margin: auto;
}
.search-button {
  padding: 0.3rem;
  position: absolute;
}
.search-input {
  font-size: 0.8rem;
  padding: 0.3rem;
  border-radius: 10px;
  border: 1px solid black;
  margin-right: 0.4rem;
}
img {
  height: 1rem;
}
</style>
