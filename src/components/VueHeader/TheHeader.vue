<script lang="ts" setup>
import NavItem from "./NavItem.vue";
import NavLogIn from "./NavLogIn.vue";
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { store } from "../store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
</script>

<template>
  <header>
    <router-link to="/" class="router">
      <h1>Hemmafixarna</h1>
    </router-link>
    <div class="navbar">
      <NavItem
        title="Om Oss"
        :subtitles="[
          { goto: '/svejsan', show: 'Svejsan' },
          { goto: '/hejdå', show: 'Hejdå' },
          { goto: '/godnatt', show: 'GodNatt' },
        ]"
      />
      <NavItem
        v-show="!isLogedIn"
        title="Mitt konto"
        :subtitles="[
          { goto: '/login', show: 'Logga in' },
          { goto: '/createaccount', show: 'Skapa konto' },
        ]"
      />
      <NavLogIn
        v-show="isLogedIn"
        :subtitles="[
          { goto: '/Mitt Konto', show: 'Mitt Konto' },
          { goto: '/redigera-Anons', show: 'Redigera Anons' },
          { goto: '/createlisting', show: 'Lägg up anons' },
        ]"
      />
    </div>
  </header>
</template>
<script lang="ts">
export default defineComponent({
  data() {
    return { store, isLogedIn: false };
  },
  methods: {},
  computed: {},
  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) this.isLogedIn = true;
      else this.isLogedIn = false;
    });
  },
});
</script>
<style scoped>
.router {
  text-decoration: none;
  color: inherit;
}
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
  font-size: 2.2rem;
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
@media only screen and (max-width: 700px) {
  header {
    display: flex;
    flex-flow: row wrap;
  }
}
</style>
