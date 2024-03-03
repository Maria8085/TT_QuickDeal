<script lang="ts">
import Styles from './style.module.scss';
import useCartStore from '@/stores/cart';

export default {
  data() {
    return {
      Styles,
      cartStore: useCartStore()
    };
  }
};
</script>

<template>
  <header :class="Styles.header">
    <RouterLink to="/"></RouterLink>
    <RouterLink to="/"></RouterLink>
  </header>
</template>
