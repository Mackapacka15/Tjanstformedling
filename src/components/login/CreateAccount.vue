<script lang="ts" setup>
import { defineComponent } from "vue";
import { store } from "../store";
import router from "@/router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
</script>

<template>
  <div>
    <h2>Skapa Konto</h2>
    <form @submit.prevent="submitForm" class="form">
      <div class="name-main inputs">
        <label for="name-input"
          ><p>Username</p>
          <input required v-model="username" type="text" id="name-input" />
        </label>
      </div>
      <div class="name-main inputs">
        <label for="mail-input"
          ><p>Mail</p>
          <input required v-model="email" type="mail" id="mail-input" />
        </label>
      </div>
      <div class="prof-main inputs">
        <label for="prof-input"
          ><p>Lösenord</p>
          <input required v-model="password" type="password" id="prof-main" />
        </label>
      </div>
      <div class="prof-main-confirm inputs">
        <label for="prof-input-confirm"
          ><p>Bekräfta Lösenord</p>
          <input
            required
            v-model="passwordconfirm"
            type="password"
            id="prof-main-confirm"
          />
        </label>
      </div>
      <button class="submit-button" type="submit">Skapa</button>
      <div>
        <button class="submit-button" type="button" @click="signInWidthGoogle">
          Skapa konto med google
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
      username: "",
      password: "",
      passwordconfirm: "",
      store,
    };
  },
  methods: {
    submitForm() {
      if (this.password === this.passwordconfirm) {
        createUserWithEmailAndPassword(getAuth(), this.email, this.password)
          .then((data) => {
            let auth = getAuth();
            updateProfile(auth.currentUser as any, {
              displayName: this.username,
            })
              .then(() => {})
              .catch((error) => {
                console.error(error.code);
              });
            console.log("success");
            router.push("/");
          })
          .catch((error) => {
            console.error(error.code);
            alert(error.message);
          });
      } else console.log("No Match");
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
  margin-top: 1rem;
}
</style>
