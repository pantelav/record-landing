<template>
  <section class="section-main" id="main">
    <div class="info-wrapper container">
      <div class="block-info">
        <h1 class="text-center">Клуб чир спорта и&nbsp;чирлидинга RECORD</h1>
        <p style="text-align: justify">
          Чирлидинг — молодой и быстроразвивающийся вид спорта. Сочетает в себе
          хореографию, акробатику, элементы гимнастики и танца.
        </p>
        <div class="block-buttons">
          <EmptyButton />
          <SocialBtns />
        </div>
      </div>
    </div>
    <div class="block-img"></div>
  </section>
</template>

<script setup lang="ts">
import EmptyButton from '../EmptyButton.vue';
import SocialBtns from '../SocialBtns.vue';
</script>

<style scoped lang="scss">
.section-main {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 710px;
  background-color: $primary;
}
.info-wrapper {
  height: 100%;
}
.block-info {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  padding-right: 90px;
  padding-left: 20px;
  p {
    color: $font;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 40px;
  }
}

.block-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.block-img {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-image: url('src/assets/img/cheer-main.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media screen and (max-width: 768px) {
  .block-img {
    display: none;
  }

  .info-wrapper {
    width: 100%;
    background-image: url('src/assets/img/cheer-main.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .block-info {
    background: $primary-half;
    text-align: center;
    align-items: center;
  }
}
</style>
