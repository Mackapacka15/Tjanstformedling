<script setup lang="ts">
import { defineComponent } from "vue";
import { getAuth, signOut } from "@firebase/auth";
import router from "@/router";
</script>
<template>
  <div>
    <p>Username/Användarnamn: {{ auth.currentUser?.displayName }}</p>
    <p>Mail: {{ auth.currentUser?.email }}</p>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      auth: getAuth(),
    };
  },
  methods: {},
  computed: {},
});
</script>

<style scoped></style>
