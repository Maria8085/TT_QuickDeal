<script lang="ts">
import { useTaskStore } from '../../../stores/task';
import Styles from './style.module.scss';

export default {
  data() {
    return {
      Styles,
      taskStore: useTaskStore(),
      title: '',
      description: ''
    };
  },
  methods: {
    submitTask(e: Event) {
      e.preventDefault();
      if (this.title.length > 0 && this.description.length > 0) {
        this.taskStore.taskAdd({
          title: this.title,
          description: this.description
        });
      }
      this.title = '';
      this.description = '';
    }
  }
};
</script>

<template>
  <form :class="Styles.form" @submit="submitTask">
    <label>Название задачи <input type="text" v-model="title" /></label>
    <label>Описание задачи <textarea v-model="description" /></label>
    <button type="submit" @click="submitTask">Создать</button>
  </form>
</template>
