<script lang="ts" setup>
import { defineComponent } from "vue";
import { store } from "../store";
import router from "@/router";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
</script>

<template>
  <div>
    <h2>LogIn</h2>
    <form @submit.prevent="submitForm" class="form">
      <div class="name-main inputs">
        <label for="name-input"
          ><p>Mail</p>
          <input required v-model="email" type="text" id="name-input" />
        </label>
      </div>
      <div class="prof-main inputs">
        <label for="prof-input"
          ><p>Lösenord</p>
          <input required v-model="password" type="password" id="prof-main" />
        </label>
      </div>
      <p v-if="errorMsg">{{ errorMsg }}</p>
      <button class="submit-button" type="submit">LogIn</button>
      <div>
        <button class="submit-button" type="button" @click="createAccount">
          Skapa Konto
        </button>
      </div>
      <div>
        <button class="submit-button" type="button" @click="signInWidthGoogle">
          Logga in med google
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      errorMsg: "",
      store,
    };
  },
  methods: {
    submitForm(): void {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log("success");
          router.push("/");
        })
        .catch((error) => {
          console.error(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              this.errorMsg = "Ogiltig Mail";
              break;
            case "auth/user-not-found":
              this.errorMsg = "Det finns inget kont kopplat till denna mail";
              break;
            case "auth/wrong-password":
              this.errorMsg = "Fel lösenord";
              break;
            default:
              this.errorMsg = "Mail eller lösenord är fel";
              break;
          }
        });
    },
    signInWidthGoogle(): void {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log("LoginGoogle sucess");
          router.push("/");
        })
        .catch((error) => {
          console.error(error.code);
        });
    },
    createAccount(): void {
      router.push("/createaccount");
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
  font-size: 1.5rem;
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
