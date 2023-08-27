<template>
  <section class="section-main flex" id="main">
    <div class="section__block info-wrapper">
      <div class="block-info">
        <h1>Клуб чир спорта и&nbsp;чирлидинга RECORD</h1>
        <p style="text-align: justify">
          Чирлидинг — молодой и быстроразвивающийся вид спорта. Сочетает в себе
          хореографию, акробатику, элементы гимнастики и танца.
        </p>
        <EmptyButton />
        <SocialBtns />
      </div>
    </div>
    <div class="section__block block-img"></div>
  </section>
</template>

<script setup lang="ts">
import EmptyButton from '../EmptyButton.vue';
import SocialBtns from '../SocialBtns.vue';
</script>

<style scoped lang="scss">
.section-main {
  width: 100%;
  height: 710px;
  background: $primary;
}
.section__block {
  width: 50%;
  height: 100%;
}
.block-info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  padding: 0 90px;
  p {
    color: $font;
  }
  @media screen and (max-width: 1240px) {
    padding: 0 40px;
  }
}
.block-img {
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
    background-image: url('src/assets/img/cheer-main.jpg');
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
