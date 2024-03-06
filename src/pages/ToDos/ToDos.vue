<script lang="ts">
import Styles from './style.module.scss';
import FormTask from '@/components/common/FormTask/FormTask.vue';
import TaskList from '@/components/TaskList/TaskList.vue';

export default {
  data() {
    return {
      Styles
    };
  },
  components: {
    FormTask,
    TaskList
  }
};
</script>

<template>
  <main>
    <div :class="Styles.main">
      <FormTask />
      <TaskList />
    </div>
  </main>
</template>
