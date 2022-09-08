<script lang="ts" setup>
import { defineComponent } from "vue";
</script>

<template>
  <footer>
    <div>
      <ul>
        <li>
          <ul class="footer-item">
            <li><h4>Kontakt:</h4></li>
            <li>Tel: +46 782 999 374</li>
            <li>Mail: hemmafixarna@support.se</li>
          </ul>
        </li>
        <li>
          <ul class="footer-item">
            <li><h4>Hemmafixarna Nacka AB</h4></li>
            <li>Älta centrums väg 13</li>
            <li>13834 Nacka</li>
            <li>Org nummer: 553942-8394</li>
          </ul>
        </li>
        <li class="footer-item">
          <h4>SSL-certifikat</h4>
          <p>
            Hemfixarna.se är säkrat med ett SSL certifikat som ser till att all
            data som skickas mellan vår webbserver och din webbläsare förblir
            privat och krypterad.
          </p>
        </li>
      </ul>
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
  width: 100vw;
  margin-top: 1rem;
  background-color: rgba(196, 234, 3, 0.454);
  padding: 1rem;
}
ul {
  display: flex;
  flex-flow: row wrap;
  list-style: none;
}
.footer-item {
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  font-size: 1.1rem;
}
.footer-item p {
  width: auto;
}
h4 {
  color: rgb(255, 132, 0);
}
</style>
