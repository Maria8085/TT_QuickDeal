<script lang="ts">
import Styles from './style.module.scss';
import BaseSeparator from '@/components/ui/Separator/BaseSeparator.vue';

export default {
  components: { BaseSeparator },
  data() {
    return {
      Styles
    };
  }
};
</script>

<template>
  <div :class="Styles.developers">
    <h2>Команда разработки</h2>
    <div :class="Styles.info">
      <div :class="[Styles.image, 'qd-shadow']"><img src="/public/Мария.jpg" alt="" /></div>
      <div :class="Styles.mainDeveloper">
        <p>Терёхина Мария</p>
        <p>Ведущий разработчик</p>
        <div :class="Styles.develsoperSocial">
          <a href="https://vk.com/id73243622" rel="nofollow" target="_blank">Вконтакте</a>
          <a href="https://t.me/MariaTerehina" rel="nofollow" target="_blank">Телеграмм</a>
          <a href="https://github.com/Maria8085" rel="nofollow" target="_blank">Git</a>
          <a
            href="https://samara.hh.ru/resume/8c36a287ff081df7aa0039ed1f364d6c677868"
            rel="nofollow"
            target="_blank"
            >HH
          </a>
        </div>
      </div>
    </div>
    <BaseSeparator />
    <div :class="Styles.team">
      <div :class="Styles.developer">
        <div :class="[Styles.image, 'qd-shadow']"><img src="/public/Мисти.jpg" alt="" /></div>
        <p>Мисти</p>
        <p>Дизайнер</p>
      </div>
      <div :class="Styles.developer">
        <div :class="[Styles.image, 'qd-shadow']"><img src="/public/Арти.jpg" alt="" /></div>
        <p>Арти</p>
        <p>Маладший фронтенд разработчик</p>
      </div>
      <div :class="Styles.developer">
        <div :class="[Styles.image, 'qd-shadow']"><img src="/public/Санни.jpg" alt="" /></div>
        <p>Санни</p>
        <p>Маладший фронтенд разработчик</p>
      </div>
      <div :class="Styles.developer">
        <div :class="[Styles.image, 'qd-shadow']"><img src="/public/Лекса.jpg" alt="" /></div>
        <p>Лекса</p>
        <p>Тестировщик</p>
      </div>
    </div>
  </div>
</template>
