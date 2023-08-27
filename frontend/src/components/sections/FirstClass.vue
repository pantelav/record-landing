<template>
  <section class="suggest__section">
    <q-parallax :height="800" :speed="0.3">
      <template #media>
        <img
          class="parallax-img"
          src="../../assets/img/demo.webp"
          alt="Чирлидер"
        />
      </template>
      <template #content>
        <div class="parallax-content">
          <h2 class="content-title">Бесплатное пробное занятие</h2>
          <p class="content-text">
            Познакомься с нашим видом спорта и командой
          </p>
          <empty-button></empty-button>
        </div>
      </template>
    </q-parallax>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import EmptyButton from '../EmptyButton.vue';
</script>

<style scoped lang="scss">
.suggest__section {
  width: 100%;
}
.parallax-img {
  width: 1500px;
  @media screen and (max-width: 1650px) {
    width: 2000px;
  }
}
.parallax-content {
  height: 100%;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  * {
    color: $font;
    margin: 0;
  }
}
.content-title {
  font-size: 40px;
  font-weight: 700;
}
.content-text {
  font-size: 20px;
  font-weight: 500;
}
</style>
