<script lang="ts" setup>
import NavItem from "./NavItem.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <router-link to="/" style="text-decoration: none; color: inherit">
      <h1>Hemmafixarna</h1>
    </router-link>
    <div class="navbar">
      <NavItem
        title="Om Oss"
        :subtitles="[
          { goto: '/Svejsan', show: 'Svejsan' },
          { goto: '/Hejdå', show: 'Hejdå' },
          { goto: '/GodNatt', show: 'GodNatt' },
        ]"
      />
      <NavItem
        title="Mitt konto"
        :subtitles="[
          { goto: '/Logga-in', show: 'Logga in' },
          { goto: '/Redigera-Anons', show: 'Redigera Anons' },
          { goto: '/CreateListing', show: 'Lägg up anons' },
        ]"
      />
    </div>
  </header>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: rgb(255, 149, 97);
  border-bottom: 2px solid black;
  align-items: center;
  width: 100vw;
  color: black;
  text-decoration: none;
}
header h1 {
  grid-column: 1/2;
  padding: 0.5rem;
  padding-left: 1rem;
}
.navbar {
  grid-column: 2/3;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 1.5rem;
}
.navbar * {
  margin-left: 0.5rem;
}
</style>
