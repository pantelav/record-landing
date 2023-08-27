<template>
  <section class="groups__section section" id="groups">
    <div class="section__wrapper container">
      <h2>Группы</h2>
      <SectionDevider />
      <div class="groups">
        <div class="group">
          <img
            src="../../assets/img/groups/baby.webp"
            alt="Бэби"
            class="img-round"
          />
          <div class="group__text">
            <p class="group__title">Бэби</p>
            <p class="group__description">
              5-6 лет <br />Вт, Чт <br />18:30-19:30
            </p>
          </div>
        </div>

        <div class="group">
          <img
            src="../../assets/img/groups/children.webp"
            alt="Дети"
            class="img-round"
          />
          <div class="group__text">
            <p class="group__title">Дети</p>
            <p class="group__description">
              7-11 лет <br />Вт, Чт, Пт <br />16:00-17:00
            </p>
          </div>
        </div>
        <div class="group">
          <img
            src="../../assets/img/groups/girls.webp"
            alt="Девушки"
            class="img-round"
          />
          <div class="group__text">
            <p class="group__title">Девушки</p>
            <p class="group__description">
              12-14 лет <br />Вт, Чт, Пт <br />17:00-18:30
            </p>
          </div>
        </div>
        <div class="group">
          <img
            src="../../assets/img/groups/junior.webp"
            alt="Юниоры"
            class="img-round"
          />
          <div class="group__text">
            <p class="group__title">Юниоры</p>
            <p class="group__description">
              от 15 лет <br />Вт, Чт, Пт <br />19:30-21:00
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionDevider from '../SectionDevider.vue';
</script>

<style scoped lang="scss">
.groups {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 25px;
}

.group {
  text-align: center;
}

.img-round {
  height: 250px;
  width: 250px;
}
.group__title {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}
</style>
