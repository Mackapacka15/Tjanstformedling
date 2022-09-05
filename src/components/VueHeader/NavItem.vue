<template>
  <div @mouseover="shown = true" @mouseleave="shown = false">
    <ul class="acordion-main">
      <div class="acordion-title">
        <li>{{ title }}</li>
      </div>
      <div v-show="shown" class="acordion-content">
        <ul class="subtitle">
          <li class="subtitle-item" v-for="subtitle in subtitles">
            <router-link
              :to="subtitle.goto"
              style="text-decoration: none; color: inherit"
            >
              {{ subtitle.show }}</router-link
            >
          </li>
        </ul>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: ["title", "subtitles"],
  data() {
    return {
      shown: false,
    };
  },
};
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
</style>
