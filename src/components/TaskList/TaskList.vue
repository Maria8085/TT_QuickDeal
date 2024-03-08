<script lang="ts">
import Styles from './style.module.scss';
import { useTaskStore } from '../../stores/task';
import CardTask from '@/components/common/CardTask/CardTask.vue';

export default {
  data() {
    return {
      Styles,
      taskStore: useTaskStore()
    };
  },
  components: {
    CardTask
  }
};
</script>

<template>
  <div :class="Styles.taskList">
    <h2>Список задач</h2>
    <div v-if="taskStore.tasks.length > 0">
      <CardTask v-for="item in taskStore.tasks" :task="item" />
    </div>
    <span v-else>Нет задач</span>
  </div>
</template>
