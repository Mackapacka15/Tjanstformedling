<script setup lang="ts">
import { defineComponent } from "vue";
import { getAuth, signOut } from "@firebase/auth";
import router from "@/router";
</script>
<template>
  <div @mouseover="stopHide" @mouseleave="startHide">
    <div class="acordion-main">
      <div class="acordion-title">
        <li>{{ auth.currentUser?.displayName }}</li>
      </div>
      <div v-show="shown" class="acordion-content">
        <ul class="subtitle">
          <li class="subtitle-item" @click="goto('createlisting')">
            Skapa Annons
          </li>
          <li class="subtitle-item">
            <button type="button" @click="goto('mypage')">Min Profil</button>
          </li>
          <li class="subtitle-item">
            <button type="button" @click="signOutHandle">Logga ut</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: ["subtitles"],
  data() {
    return {
      shown: false,
      timeout: -1,
      auth: getAuth(),
    };
  },
  methods: {
    startHide(): void {
      this.timeout = setTimeout(() => {
        this.shown = false;
      }, 100);
    },
    stopHide(): void {
      clearTimeout(this.timeout);
      this.shown = true;
    },
    signOutHandle(): void {
      router.push("/");
      signOut(this.auth);
    },
    goto(destination: string): void {
      router.push(destination);
    },
  },
});
</script>

<style scoped>
.acordion-title {
  font-size: 1.3rem;
  padding: 0.3rem;
  border: 2px solid rgba(112, 112, 112, 0.459);
  list-style: none;
  position: relative;
  background-color: rgb(234, 233, 233);
  border-radius: 2px;
  font-size: 1.3rem;
}
.subtitle {
  font-size: 1.1rem;
  min-width: 8rem;
  position: relative;
  list-style: none;
  position: absolute;
  background-color: rgb(234, 233, 233);
  border: 2px solid rgba(165, 165, 165, 0.459);
  box-shadow: 0px 4px 10px 0px black;
  padding: 0.4rem;
  margin-top: 0.2rem;
  border-radius: 5px;
  transition: 0.5s;
  z-index: 999;
}
.acordion-title:hover {
  background-color: rgb(196, 196, 196);
}
.subtitle-item:hover {
  background-color: rgb(196, 196, 196);
}
.subtitle-item {
  padding-top: 0.5rem;
  margin-top: 0.1rem;
  border-bottom: 1px solid grey;
}
button {
  text-decoration: none;
  background-color: inherit;
  border: none;
  width: 100%;
  height: 100%;
  text-align: left;
  font-size: inherit;
  font-family: inherit;
}
</style>
