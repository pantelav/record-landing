<template>
  <q-dialog ref="dialogRef">
    <q-card class="card">
      <q-icon name="close" class="icon" @click="onDialogCancel" />
      <EnrollForm @close-dialog="onDialogCancel"/>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogPluginComponent } from 'quasar';
import EnrollForm from './EnrollForm.vue';
defineEmits([...useDialogPluginComponent.emits]);
const { dialogRef, onDialogHide, onDialogOk, onDialogCancel } =
  useDialogPluginComponent();
</script>

<style scoped lang="scss">
.card {
  position: relative;
  width: 500px;
  padding: 40px 30px 15px 30px;
}

.icon {
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 30px;
  color: $font-dark;
  border-radius: 8px;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    background-color: rgba(120, 119, 119, 0.254);
  }
}

</style>
