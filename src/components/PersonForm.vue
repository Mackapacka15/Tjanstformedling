<script lang="ts" setup>
import { defineComponent } from "vue";
import { Person } from "./interface";
import { store } from "./store";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h2>Svara på frågorna nedan så skapar vi en annons till dig</h2>
  <form @submit.prevent="submitForm" class="form">
    <div class="name-main inputs">
      <label for="name-input"
        ><p>Namn:</p>
        <input
          required
          placeholder="Albert Einstein"
          v-model="nameInput"
          type="text"
          id="name-input"
        />
      </label>
    </div>
    <div class="prof-main inputs">
      <label for="prof-input"
        ><p>Yrke:</p>
        <input
          required
          placeholder="Snickare, Rörmokare"
          v-model="occupations"
          type="text"
          id="prof-main"
        />
      </label>
    </div>
    <div class="about-me-main inputs">
      <label for="about-me-input"
        ><p>Skriv en kort text om dig själv:</p>
        <textarea
          required
          placeholder="Jag är bra på att installera diskmaskiner"
          v-model="aboutMe"
          id="about-me-input"
          cols="30"
          rows="4"
        ></textarea>
      </label>
    </div>
    <router-link to="/">
      <button class="submit-button" type="submit" @click="submitForm">
        Lägg upp annons
      </button>
    </router-link>
  </form>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      nameInput: "",
      occupations: "",
      aboutMe: "",
      store,
    };
  },
  methods: {
    submitForm() {
      let newPerson = new Person(
        this.nameInput,
        this.occupations.split(",").map((a) => a.trim()),
        this.aboutMe
      );
      store.peopleList.push(newPerson), console.log("Submitted");
    },
  },
  computed: {},
});
</script>

<style scoped>
h2 {
  text-align: center;
  padding: 1rem;
  background-color: rgba(204, 255, 0, 0.462);
  margin-top: 0.2rem;
}
textarea {
  resize: none;
}
.form {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 1rem;
}
.submit-button {
  max-width: 30vw;
  margin: auto;
  padding: 0.3rem;
}
</style>
