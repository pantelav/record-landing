<template>
  <button class="btn" @click="openDialog">Записаться <TheArrow class="arrow" /></button>
</template>

<script setup>
import TheArrow from './TheArrow.vue';
import { useQuasar } from 'quasar';
import { useDialog } from 'src/composables/dialog';

const $q = useQuasar()
function openDialog() {
  useDialog($q)
}
</script>

<style scoped lang="scss">
.btn {
  width: 152px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: $accent;
  color: white;
  border: 3px solid $accent;
  border-radius: 25px;
  font-size: 18px;
  transition: all 0.2s;
}

.btn:hover {
  background: $accent;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.308);
  transform: scale(1.1);
  .arrow {
    transform: translateX(5px);
  }
}

.arrow {
  transition: all 0.2s;
}
</style>
