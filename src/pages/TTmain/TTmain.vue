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
  <main>
    <div class="container">
      <RouterLink to="/todos">Список задач</RouterLink>
    </div>
  </main>
</template>
