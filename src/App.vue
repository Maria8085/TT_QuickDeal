<script setup lang="ts">
import './App.module.scss';
import TTHeader from '@/components/TTheader/TTheader.vue';
import { useTaskStore } from './stores/task';

const taskStore = useTaskStore();
taskStore.$subscribe(
  (mutation, state) => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },
  { deep: true }
);
</script>

<template>
  <TTHeader />
  <router-view />
</template>
