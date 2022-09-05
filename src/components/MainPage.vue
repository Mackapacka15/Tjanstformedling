<script lang="ts" setup>
import { defineComponent } from "vue";
import { store } from "./store";
import FilterBar from "./FilterBar.vue";
</script>

<template>
  <div class="main-text">
    <h2>Välkommen till Hemmafixarna!</h2>
    <p>
      Här kan du leta efter personer med olika kompetenser för att hjälpa dig
      med allt du behöver hjälp med hemma.
    </p>
  </div>
  <FilterBar :showFilters="false" />
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return { store };
  },
  methods: {},
  computed: {},
});
</script>

<style scoped>
.main-text {
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: rgba(165, 255, 97, 0.534);
}
</style>
