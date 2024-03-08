<script lang="ts">
import Styles from './style.module.scss';
import Developers from '@/components/Developers/Developers.vue';

export default {
  data() {
    return {
      Styles
    };
  },
  components: {
    Developers
  }
};
</script>

<template>
  <main :class="Styles.main">
    <div :class="[Styles.container, 'container']">
      <RouterLink to="/todos" :class="[Styles.buttonToList, 'qd-button']"
        >Перейти к списку задач</RouterLink
      >
      <Developers />
    </div>
  </main>
</template>
