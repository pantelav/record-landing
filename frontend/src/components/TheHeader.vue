<template>
  <header
    class="header text-white flex justify-center"
    :class="{ 'header-scrolled': checkScroll }"
  >
    <q-toolbar class="container flex justify-between items-center">
      <a href="#main">
        <img
          src="../assets/LOGO.svg"
          alt="Рекорд"
          :class="{ logo: true, 'logo-small': checkScroll }"
        />
      </a>

      <nav class="nav">
        <a href="#main">Главная</a>
        <a href="#about">О нас</a>
        <a href="#groups">Группы</a>
        <a href="#contacts">Контакты </a>
        <FilledButton />
      </nav>
      <q-btn
        class="menu"
        dense
        flat
        round
        icon="menu"
        aria-label="Меню"
        title="Меню"
        @click="$emit('toggleDrawer')"
      />
    </q-toolbar>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import FilledButton from './FilledButton.vue';
const props = defineProps(['scrolled']);
const checkScroll = computed((): boolean => {
  if (!props.scrolled) return false;
  if (props.scrolled.top < 0) return true;
  return false;
});
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background: rgba(0, 0, 0, 0);
  transition: all 0.2s;
  z-index: 1000;
}
.header-scrolled {
  height: 55px;
  background: $secondary-half;
  box-shadow: 0 5px 10px 2px rgba(15, 15, 15, 0.323);
}
.logo {
  transition: all 0.2s;
  cursor: pointer;
}
.logo-small {
  transform-origin: left center;
  transform: scale(80%, 80%);
}
.nav {
  display: flex;
  align-items: center;
  gap: 40px;
  transition: all 0.2s;
  a {
    transition: color 0.2s;
  }
  a:hover {
    color: $primary;
  }
}

.menu {
  display: none;
}

@media screen and (max-width: 1024px) {
  .nav {
    display: none;
  }
  .menu {
    display: flex;
    align-items: center;
  }
}
</style>
