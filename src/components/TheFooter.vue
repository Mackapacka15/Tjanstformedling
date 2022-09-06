<script lang="ts" setup>
import { defineComponent } from "vue";
</script>

<template>
  <footer>
    <div>
      <h3>Footer</h3>
    </div>
  </footer>
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
footer {
  position: absolute;
  bottom: 0;
  width: 98vw;
  background-color: rgba(196, 234, 3, 0.454);
  padding: 1rem;
}
</style>
