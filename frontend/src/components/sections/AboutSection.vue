<template>
  <section class="about__section section" id="about">
    <div class="section__warpper container">
      <h2>Команда RECORD</h2>
      <SectionDevider />
      <div class="about__team wrapper__item">
        <div class="team__images">
          <div>
            <img
              class="img-round"
              src="../../assets/img/about/team1.webp"
              alt="Команда 1"
            />
          </div>
          <div>
            <img
              class="img-round"
              src="../../assets/img/about/team2.webp"
              alt="Команда 2"
            />
          </div>
          <div>
            <img
              class="img-round"
              src="../../assets/img/about/team3.webp"
              alt="Команда 3"
            />
          </div>
        </div>
        <div class="team__description">
          <p style="text-align: justify">
            Клуб Чир спорта и чирлидинга в Санкт-Петербрге. Команда по чрлидингу
            Record является бронзовым призером чемпионата СПБ по чир спорту 2017
            , участником чемпионатов Росии 2017, 2018г. Призёром фестивалей СПБ
            и СЗФО 2021 г и 2022 г. Команда выступает в номинации «Чир
            фристайл».
          </p>
        </div>
      </div>

      <div class="about__coach wrapper__item">
        <h3 class="coach__title">Тренер команды</h3>
        <img
          src="../../assets/img/about/coach.webp"
          alt="Тренер"
          class="img-round"
        />
        <p class="coach__description" style="text-align: justify">
          <b>Пантела Светлана Валерьевна</b> закончила Национальный
          государственный Университет физической культуры, спорта и здоровья им.
          П.Ф. Лесгафта. <b>Чемпион Европы по чирлидингу</b>, многократный
          призёр чемпионатов России и Санкт-Петербурга. КМС по спортивной
          гимнастике. Опыт работы с 2015 года.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionDevider from '../SectionDevider.vue';
</script>

<style scoped lang="scss">
.about__section {
  padding: 40px 15px 0 15px;
}
.wrapper__item {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}
.team__images {
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1280px) {
    justify-content: space-around;
    & div:nth-child(1) {
      display: none;
    }
  }
  @media screen and (max-width: 1024px) {
    justify-content: center;
    text-align: center;
    & div:nth-child(3) {
      display: none;
    }
  }
}

.team__description {
  max-width: 950px;
  text-align: center;
  align-self: center;
  p {
    font-size: 18px;
  }
}

.about__coach {
  margin-top: 30px;
  align-items: center;
  text-align: center;
  .coach__title {
    font-size: 48px;
  }
  .coach__description {
    max-width: 950px;
    text-align: center;
    font-size: 18px;
  }
}
</style>
