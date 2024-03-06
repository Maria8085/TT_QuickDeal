<script lang="ts" setup>
import type { Task } from '@/types.ts';
import Styles from './style.module.scss';
import { useTaskStore } from '@/stores/task';

const props = defineProps<{ task: Task }>();
const newTitle = defineModel('title', { type: String, default: '' });
const newDescr = defineModel('description', { type: String, default: '' });
let isEdit: boolean = false;
const taskStore = useTaskStore();

newTitle.value = props.task.title;
newDescr.value = props.task.description;

function deleteTask() {
  taskStore.taskDelete(props.task.id);
}
function editTask() {
  taskStore.taskEdit({
    id: props.task.id,
    description: newDescr,
    title: newTitle.value
  });
  isEdit = !isEdit;
}
</script>

<template>
  <div :class="Styles.task">
    <label>
      title:
      <input v-if="isEdit" type="text" v-model="newTitle" />
      <span v-else>{{ task.title }}</span>
    </label>
    <label>
      description:
      <input v-if="isEdit" type="text" v-model="newDescr" />
      <span v-else>{{ task.description }}</span>
    </label>
    <button type="button" @click="deleteTask">Удалить</button>
    <button type="button" @click="editTask">
      <span v-if="isEdit">Изменить</span>
      <span v-else>Редактировать</span>
    </button>
  </div>
</template>
