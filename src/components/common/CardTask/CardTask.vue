<script lang="ts" setup>
import type { Task } from '@/types.ts';
import Styles from './style.module.scss';
import { useTaskStore } from '@/stores/task';

const props = defineProps<{ task: Task }>();
const newTitle = defineModel('title', { type: String, default: '' });
const newDescr = defineModel('description', { type: String, default: '' });
const checked = defineModel('checked', { type: Boolean, default: false });
let isEdit: boolean = false;
const taskStore = useTaskStore();

newTitle.value = props.task.title;
newDescr.value = props.task.description;
checked.value = props.task.isDone;

function deleteTask() {
  taskStore.taskDelete(props.task.id);
}
function editTask() {
  taskStore.taskEdit({
    id: props.task.id,
    description: newDescr.value,
    title: newTitle.value,
    isDone: checked.value
  });
  isEdit = !isEdit;
}
function taskMake() {
  taskStore.taskMake(props.task.id, checked.value);
}
</script>

<template>
  <div :class="[Styles.task, 'qd-shadow']">
    <label
      ><input
        type="checkbox"
        @click="taskMake"
        v-model="checked"
        :class="[Styles.checkbox, 'qd-input']"
    /></label>
    <label :class="Styles.label">
      Задача:
      <input class="qd-input" v-if="isEdit" type="text" v-model="newTitle" />
      <span v-else>{{ task.title }}</span>
    </label>
    <label :class="Styles.label">
      Описание:
      <input class="qd-input" v-if="isEdit" type="text" v-model="newDescr" />
      <span v-else>{{ task.description }}</span>
    </label>
    <div :style="{ display: 'flex', gap: '16px' }">
      <button type="button" class="qd-button" @click="deleteTask">Удалить</button>
      <button type="button" class="qd-button" @click="editTask">
        <span v-if="isEdit">Изменить</span>
        <span v-else>Редактировать</span>
      </button>
    </div>
  </div>
</template>
