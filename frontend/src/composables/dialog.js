import DialogForm from '../components/DialogForm.vue';

export function useDialog($q) {
  $q.dialog({
    component: DialogForm,
  }).onOk(() => {
    console.log('OK');
  });
}
