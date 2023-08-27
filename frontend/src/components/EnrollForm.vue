<template>
  <q-form class="form" ref="enrollForm" @submit.prevent="createOrder">
    <q-input
      outlined
      label="Ваше имя *"
      v-model="formData.name"
      lazy-rules
      :rules="[
        (val) => (val && val.length > 0) || 'Это поле не должо быть пустым',
      ]"
    />
    <q-input
      outlined
      label="Номер телефона *"
      v-model="formData.phone"
      lazy-rules
      :rules="[(val) => (val && val.length > 9) || 'Введите корректный номер']"
    />
    <q-input
      outlined
      label="Дата рождения"
      mask="##.##.####"
      placeholder="29/01/2010"
      v-model="formData.date"
    >
      <template #append>
        <q-icon name="event" class="cursor-pointer icon">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="formData.date" class="date" mask="DD.MM.YYYY">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Закрыть" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-input
      outlined
      label="Дополнения/Вопросы"
      type="textarea"
      v-model="formData.notes"
    />
    <q-btn
      type="submit"
      color="primary"
      label="Записаться"
      class="enroll-btn"
      :loading="isLoading"
    />
  </q-form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { api } from 'src/boot/axios';
import { useQuasar } from 'quasar';

const isLoading = ref(false);
const enrollForm = ref(null);
const emit = defineEmits(['closeDialog']);
const formData = reactive({
  name: '',
  phone: '',
  date: '',
  notes: '',
});
const $q = useQuasar();

async function createOrder() {
  try {
    isLoading.value = true;
    await api.post('/order', formData);
    for (let key in formData) {
      formData[key] = '';
    }
    enrollForm.value.resetValidation();
    $q.notify({
      message: 'Мы скоро свяжемся с Вами! 🎉',
      color: 'green',
      position: 'top-right',
      timeout: 2500,
      classes: 'notifier',
    });
    emit('closeDialog');
  } catch (error) {
    const status = error.response.status;
    if (status == 400) {
      $q.notify({
        message: 'Обязательные поля должны быть заполнены 🤓',
        color: 'red',
        position: 'top-right',
        timeout: 2500,
        classes: 'notifier',
      });
    }
    if (status == 500) {
      $q.notify({
        message: 'Ошибка сервера 😥',
        color: 'red',
        position: 'top-right',
        timeout: 3000,
        classes: 'notifier',
      });
    }
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped lang="scss">
.form {
  * {
    margin-bottom: 20px;
  }
}
.date {
  color: $font-dark;
}
.icon {
  margin-top: 20px;
}
.enroll-btn {
  width: 100%;
  height: 45px;
}
</style>
