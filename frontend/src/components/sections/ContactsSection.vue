<template>
  <section class="contacts__section section" id="contacts">
    <div class="section__wrapper container">
      <h2>Контакты</h2>
      <SectionDevider />
      <div class="contacts">
        <div class="contacts__info">
          <div class="info__adress info__item">
            <p>📍 Адрес:</p>
            <address>
              г. Сантк-Петербург, м.Парнас, ул. Николая рубцова, 6
            </address>
            <img
              src="../../assets/img/parnas.webp"
              alt="Парнас"
              class="img-parnas"
            />
          </div>
          <div class="info__phone info__item">
            <p>📱 Телефон:</p>
            <a href="tel:+79111554726">+7 (911) 155-47-26</a>
          </div>
          <div class="info__social info__item">
            <p>📢 Соцсети:</p>
            <SocialBtns style="margin-top: 10px" />
          </div>
        </div>
        <div>
          <p
            style="
              padding-bottom: 15px;
              font-size: 20px;
              font-weight: 600;
              text-align: center;
            "
          >
            Запишитьесь на пробное занятие
          </p>
          <EnrollForm class="contacts__form" />
        </div>
      </div>
      <div class="map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ade4cf12493f94b43942539329976d3225989a77af067b3760b1a31f67920eba9&amp;source=constructor"
          width="563"
          height="474"
          frameborder="0"
          title="Карта"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import SectionDevider from '../SectionDevider.vue';
import SocialBtns from '../SocialBtns.vue';
import EnrollForm from '../EnrollForm.vue';
</script>

<style scoped lang="scss">
.contacts {
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
  * {
    color: $font-dark;
    margin: 0;
    font-size: 18px;
  }
}

.info__item {
  margin-bottom: 20px;
  p {
    font-weight: 600;
    font-size: 24px;
  }
}
.contacts__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.map {
  margin-bottom: 15px;
  iframe {
    width: 100%;
  }
}

.img-parnas {
  border-radius: 10px;
}
@media screen and (max-width: 500px) {
  .img-parnas {
    width: 70%;
    height: auto;
  }
}
</style>
