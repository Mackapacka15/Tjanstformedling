<script lang="ts" setup>
import router from "@/router";
import { defineComponent } from "vue";
import { store } from "./store";
</script>

<template>
  <div>
    <div class="bar">
      <div></div>
      <div class="search-main">
        <form @submit.prevent="setFilters">
          <input
            class="search-input"
            type="text"
            v-model="filters"
            placeholder="Vad letar du efter?"
          />
          <button class="search-button" type="submit">
            <img
              src="../img/magnifying-glass-svgrepo-com.svg"
              alt="picture of a magnifying glas"
            />
          </button>
        </form>
      </div>

      <div class="sort-button" v-show="showFilters">
        <label for="Sort"> Sortera </label>
        <select @change="sortInput" name="Sort" id="Sort">
          <option></option>
          <option value="grade_desc">Betyg</option>
          <option value="grade_asc">Betyg (Lägst först)</option>
          <option value="name_desc">Namn</option>
          <option value="name_asc">Namn (Omvänd)</option>
        </select>
      </div>
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
      let newFilters = this.filters.split(",").map((a) => a.trim());
      store.filters = newFilters;
      this.$emit("applyFilters");
      router.push("/searchresult");
    },
    sortInput(event: any) {
      console.log("Sortinput");
      switch (event.target.value) {
        case "grade_asc":
          this.$emit("sortRating");
          break;
        case "grade_desc":
          this.$emit("sortRatingReverse");
          break;
        case "name_asc":
          this.$emit("sortName");
          break;
        case "name_desc":
          this.$emit("sortNameReverse");
        default:
          break;
      }
    },
  },
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
  margin-left: -2.2rem;
  padding: 0.3rem;
  position: absolute;
  background-color: inherit;
  border: none;
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
