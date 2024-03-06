<script lang="ts">
import Styles from './style.module.scss';

export default {
  data() {
    return {
      Styles
    };
  }
};
</script>

<template>
  <header :class="Styles.header">
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/todos">Список</RouterLink>
  </header>
</template>
