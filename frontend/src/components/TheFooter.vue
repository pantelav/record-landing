<template>
  <q-footer elevated class="bg-secondary footer">
    <div class="container">
      <div class="footer__info">
        <div class="footer__contacts footer__aside" style="text-align: center">
          <address class="address">
            г. Сантк-Петербург, м.Парнас, ул. Меркурьева, 19В
            <span>(4-й Верхний пер., 19 В)</span>
          </address>
          <a href="tel:+79111554726">+7 (911) 155-47-26</a>
        </div>
        <div class="footer__logo">
          <img :src="cupLogo" alt="" />
        </div>
        <div class="footer__social footer__aside">
          <SocialBtns />
        </div>
      </div>
      <div class="copyright">
        RECORD © 2020 - {{ new Date().getFullYear() }}
      </div>
    </div>
  </q-footer>
</template>

<script setup>
import SocialBtns from './SocialBtns.vue';
import { cupLogo } from '../assets';
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: center;
}
.container {
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.footer__info {
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  div {
    flex-basis: 33.333%;
  }
  .footer__logo {
    text-align: center;
  }
}

.footer__aside {
  padding-top: 10px;
}

.copyright {
  font-size: 14px;
  font-weight: 400;
  text-align: center;
}
.footer__social {
  display: flex;
  justify-content: end;
}

.address {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
