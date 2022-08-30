<script lang="ts" setup>
import NavItem from "./NavItem.vue";
</script>

<template>
  <header>
    <h1>Hemmafixarna</h1>
    <div class="navbar">
      <NavItem title="Om Oss" :subtitles="['Svejsan', 'Hejdå', 'GodNatt']" />
      <NavItem
        title="Mitt konto"
        :subtitles="['Logga in', 'Redigera Anons', 'Lägga up anons']"
      />
    </div>
  </header>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: rgb(255, 149, 97);
  border-bottom: 1px solid black;
  align-items: center;
  width: 100vw;
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
