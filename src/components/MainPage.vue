<script lang="ts" setup>
import { defineComponent } from "vue";
import { store } from "./store";
import FilterBar from "./FilterBar.vue";
</script>

<template>
  <div>
    <div>
      <FilterBar :showFilters="false" />
    </div>
    <div class="main-text">
      <h2>Välkommen till Hemmafixarna!</h2>
      <p>
        Här kan du leta efter personer med olika kompetenser för att hjälpa dig
        med allt du behöver hjälp med hemma. Använd sökfältet ovan för att hitta
        personer med de kompetenser du behöver.
      </p>
    </div>
  </div>
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
  padding: 0.5rem;
  background-color: rgba(165, 255, 97, 0.534);
}
p {
  font-size: 1rem;
  text-align: center;
}
h2 {
  font-size: 1.5rem;
  text-align: center;
}
</style>
