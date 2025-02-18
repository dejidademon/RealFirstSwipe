<template>
  <q-page class="flex flex-center">
    <q-card style="min-width: 350px; max-width: 400px">
      <q-card-section>
        <div class="text-h6">Create Account</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="createAccount">
          <q-input v-model="email" label="Email" type="email" required />
          <q-input v-model="password" label="Password" type="password" required />
          <q-input v-model="confirmPassword" label="Confirm Password" type="password" required />

          <q-btn type="submit" label="Create Account" color="primary" class="full-width" />
        </q-form>
      </q-card-section>

      <q-card-section>
        <q-btn flat label="Already have an account? Sign In" @click="goToSignIn" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from 'src/firebase/firebase.js';
import { Notify } from 'quasar';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async createAccount() {
      if (this.password !== this.confirmPassword) {
        Notify.create({
          message: 'Passwords do not match',
          color: 'negative'
        });
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        Notify.create({
          message: 'Account created successfully!',
          color: 'positive'
        });
        this.router.push('/main'); // Redirect to Sign In page after successful account creation
      } catch (error) {
        Notify.create({
          message: error.message,
          color: 'negative'
        });
      }
    },
    goToSignIn() {
      this.router.push('/signin');
    }
  }
};
</script>

<style scoped>
.q-card {
  padding: 20px;
}
</style>
