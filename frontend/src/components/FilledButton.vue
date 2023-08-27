<template>
  <button class="btn-filled" @click="openDialog">Записаться</button>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { useDialog } from 'src/composables/dialog';

const $q = useQuasar();
function openDialog() {
  useDialog($q);
}
</script>

<style scoped lang="scss">
.btn-filled {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 45px;
  border-radius: 5px;
  background: $accent;
  color: $font;
  transition: background 0.2s;
}
.btn-filled:hover {
  background: $accent-dark;
}
</style>
