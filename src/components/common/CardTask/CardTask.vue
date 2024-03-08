<script lang="ts" setup>
import type { Task } from '@/types.ts';
import BaseCheckbox from '@/components/ui/Checkbox/BaseCheckbox.vue';
import Styles from './style.module.scss';
import { useTaskStore } from '@/stores/task';

const props = defineProps<{ task: Task }>();
const newTitle = defineModel('title', { type: String, default: '' });
const newDescription = defineModel('description', { type: String, default: '' });
const checked = defineModel('checked', { type: Boolean, default: false });
let isEdit: boolean = false;
const taskStore = useTaskStore();

newTitle.value = props.task.title;
newDescription.value = props.task.description;
checked.value = props.task.isDone;

function deleteTask() {
  taskStore.taskDelete(props.task.id);
}

function editTask() {
  taskStore.taskEdit({
    id: props.task.id,
    description: newDescription.value,
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
    <div :class="Styles.bodyTask">
      <BaseCheckbox v-model="checked" @on-change="taskMake" />
      <div :class="Styles.text">
        <label :class="Styles.label">
          Задача:
          <input class="qd-input" v-if="isEdit" type="text" v-model="newTitle" />
          <span v-else>{{ task.title }}</span>
        </label>
        <label :class="Styles.label">
          Описание:
          <input class="qd-input" v-if="isEdit" type="text" v-model="newDescription" />
          <span v-else>{{ task.description }}</span>
        </label>
      </div>
    </div>
    <div :class="Styles.buttons">
      <button type="button" class="qd-button" @click="editTask">
        <span v-if="isEdit">Изменить</span>
        <span v-else>Редактировать</span>
      </button>
      <button type="button" class="qd-button" @click="deleteTask">Удалить</button>
    </div>
  </div>
</template>
