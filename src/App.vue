<script setup lang="ts">
import TheHeader from "./components/VueHeader/TheHeader.vue";
import { RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
import {
  CollectionReference,
  getDocs,
  type DocumentData,
} from "@firebase/firestore";
import { Listing } from "./components/interface";
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
  inject: ["g_colRef"],
  data() {
    return {
      g_colRef: this.g_colRef,
    };
  },
  mounted() {
    console.log("mounted");
    store.peopleList = [];
    getDocs(this.g_colRef as unknown as CollectionReference<DocumentData>)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          store.peopleList.push(
            new Listing(
              doc.data().name,
              doc.data().occupation,
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
