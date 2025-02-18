<template>
  <q-page class="flex flex-center">
    <q-card
      v-touch-swipe.mouse.left="onSwipeLeft"
      v-touch-swipe.mouse.right="onSwipeRight"
      class="card"
      :style="cardStyle"
    >
    <div class="card-background"></div>


    </q-card>
    <div class="button-container">
        <q-btn
          color="red"
          icon="close"
          @click="onSwipeLeft"
          class="swipe-button"
        />
        <q-btn
          color="green"
          icon="check"
          @click="onSwipeRight"
          class="swipe-button"
        />
      </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const cardStyle = ref({
  width: '300px',
  height: '400px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease',
});

const onSwipeLeft = () => {
  console.log('Swiped left');
  cardStyle.value.transform = 'translateX(-100%)';
  setTimeout(() => {
    cardStyle.value.transform = 'translateX(0)';
  }, 300);
};

const onSwipeRight = () => {
  console.log('Swiped right');
  cardStyle.value.transform = 'translateX(100%)';
  setTimeout(() => {
    cardStyle.value.transform = 'translateX(0)';
  }, 300);
};
</script>

<style scoped>

.card-background {
  width: 100%;
  height: 100%;
  background-image: url('assets/quasar-logo-vertical.svg');
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  background-repeat: no-repeat;
}

.card {
  transition: transform 0.3s ease;
}

.button-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
}
.swipe-button {
  width: 50px;
  height: 50px;
}
</style>

