<template>
  <q-page class="flex flex-center">
    <q-card style="min-width: 350px; max-width: 400px">
      <q-card-section>
        <div class="text-h6">Sign In</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="signIn">
          <q-input v-model="email" label="Email" type="email" required />
          <q-input v-model="password" label="Password" type="password" required />
          <q-btn type="submit" label="Sign In" color="primary" />
        </q-form>
      </q-card-section>

      <q-card-section>
        <q-btn flat label="Create Account" @click="goToCreateAccount" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { auth } from 'src/firebase/firebase.js';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async signIn() {
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password);
        this.$router.push('/');
      } catch (error) {
        console.error("Error signing in:", error);
        // Handle error (e.g., show a notification)
      }
    },
    goToCreateAccount() {
      this.$router.push('/create-account');
    }
  }
};
</script>

<style scoped>
</style>
