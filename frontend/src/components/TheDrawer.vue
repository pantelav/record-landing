<template>
  <div class="drawer">
    <q-icon name="close" class="icon" @click="$emit('closeDrawer')" />
    <div class="logo">
      <RecordLogo />
    </div>
    <nav class="nav">
      <a href="#main">Главная</a>
      <a href="#about">О нас</a>
      <a href="#groups">Группы</a>
      <a href="#contacts">Контакты </a>
      <FilledButton />
    </nav>
    <div class="contacts">
      <SocialBtns />
      <a href="tel:+79111554726">+7 (911) 155-47-26</a>
      <address>г. Сантк-Петербург, м.Парнас, ул. Николая рубцова, 6</address>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RecordLogo from './RecordLogo.vue';
import FilledButton from './FilledButton.vue';
import SocialBtns from './SocialBtns.vue';
</script>

<style scoped lang="scss">
.drawer {
  position: relative;
  width: 100%;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: $secondary;
}

.logo {
  padding-top: 50px;
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-self: center;
  a {
    font-size: 32px;
  }
}

.contacts {
  margin-top: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.icon {
  position: absolute;
  right: 20px;
  top: 15px;
  font-size: 30px;
}
</style>
