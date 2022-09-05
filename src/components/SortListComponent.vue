<script lang="ts" setup></script>

<template>
  <div class="person-container">
    <div class="person-header">
      <h2 class="name">{{ name }}</h2>
      <div class="star-rating">
        <star-rating
          v-model:rating="rating"
          v-bind:increment="0.5"
          v-bind:max-rating="5"
          v-bind:show-rating="false"
          v-bind:read-only="true"
          v-bind:star-size="30"
        />
      </div>
    </div>
    <ul class="occupations">
      <li v-for="occupation in occupations">{{ occupation }}</li>
    </ul>
    <div class="about-me">
      <h4 class="about-me-header">Om mig:</h4>
      <p class="about-me-text">{{ aboutMe }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import StarRating from "vue-star-rating";
export default {
  props: ["name", "occupations", "aboutMe", "rating"],
  components: {
    StarRating,
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  body {
    font-size: 10px;
  }
}
.person-container {
  border: 1px solid black;
  border-radius: 5px;
  max-width: 30vw;
  padding: 0.2rem;
  background-color: rgba(230, 226, 226, 0.111);
  box-shadow: 0px 2px 10px rgb(0, 0, 0);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40% 1fr;
}
.person-header {
  margin-bottom: 1rem;
}
.occupations {
  text-align: right;
}
.person-container * {
  padding: 0.2rem;
}
.about-me {
  grid-area: 2/1/4/3;
}
.about-me-text {
  text-align: center;
}
ul {
  list-style: none;
}
p {
  overflow: hidden;
  max-height: 3.4em;
}
</style>
