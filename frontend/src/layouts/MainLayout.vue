<template>
  <q-layout
    view="hHh lpR fff"
    @scroll="getScroll"
    id="mainLayout"
    class="relative-position"
  >
    <TheHeader :scrolled="currentScroll" @toggle-drawer="toggleRightDrawer" />

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="mobile"
      elevated
      no-swipe-open
      class="drawer"
    >
      <TheDrawer @close-drawer="rightDrawerOpen = false" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <TheFooter />
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { DomOffset } from 'quasar';
import { dom } from 'quasar';
import TheHeader from 'src/components/TheHeader.vue';
import TheFooter from 'src/components/TheFooter.vue';
import TheDrawer from 'src/components/TheDrawer.vue';

const { offset } = dom;
const rightDrawerOpen = ref(false);
const currentScroll = ref<DomOffset>();
function toggleRightDrawer(): void {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

function getScroll(): void {
  currentScroll.value = offset(mainLayout);
}

onMounted(() => {
  getScroll();
});
</script>

<style scoped lang="scss">
.page {
  height: 3000px;
}
</style>
