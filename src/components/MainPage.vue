<script lang="ts" setup>
import { defineComponent } from "vue";
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
    <div class="main-body">
      <div class="handyman-main">
        <div class="handyman-text">
          <p>Vill du lägga upp en annons?</p>
          <p>Logga in och gör det nu med det samma!</p>
        </div>
        <img
          class="handyman-img"
          src="../img/Handyman.jpg"
          alt="Picture of a man holding a electric screwdriver"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {};
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
  font-size: 1.2rem;
  text-align: center;
}
h2 {
  font-size: 1.5rem;
  text-align: center;
}
.main-body {
  max-width: 100vw;
  display: flex;
  flex-flow: row-reverse nowrap;
}
.handyman-main {
  display: grid;
  place-items: center;
  padding: 1rem;
}
.handyman-main * {
  grid-row: 1;
  grid-column: 1;
}

.handyman-text {
  text-align: right;
  max-height: 50vh;
  z-index: 999;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.309);
  margin-top: 1rem;
}
.handyman-text p {
  font-size: 1rem;
}

.handyman-img {
  max-height: 50vh;
  border-radius: 20px;
}
</style>
