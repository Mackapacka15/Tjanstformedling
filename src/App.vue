<script setup lang="ts">
import TheHeader from "./components/VueHeader/TheHeader.vue";
import { RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
import { getFirestore, collection, getDocs } from "@firebase/firestore";
import { Person } from "./components/interface";
import { store } from "./components/store";
</script>

<template>
  <main>
    <TheHeader />
    <RouterView />
    <TheFooter />
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
  mounted() {
    const db = getFirestore();
    const colref = collection(db, "listings");

    getDocs(colref)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          store.peopleList.push(
            new Person(
              doc.data().name,
              doc.data().occupations,
              doc.data().aboutMe,
              doc.data().rating
            )
          );
          console.log(doc.data());
        });
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped></style>
