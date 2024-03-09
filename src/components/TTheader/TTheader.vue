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
  <header :class="Styles.header">
    <nav :class="Styles.nav">
      <RouterLink :class="Styles.link" :active-class="Styles.active" to="/TT_QuickDeal/"
        >Главная</RouterLink
      >
      <RouterLink :class="Styles.link" :active-class="Styles.active" to="/TT_QuickDeal/todos"
        >Список</RouterLink
      >
    </nav>
    <BaseSeparator />
  </header>
</template>
