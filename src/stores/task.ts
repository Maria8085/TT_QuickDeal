import type { Task } from '@/types';
import { defineStore } from 'pinia';

function getTasksFromLocalStorage(): Task[] {
  const tasks = localStorage.getItem('tasks');
  if (tasks) {
    return JSON.parse(tasks) as Task[];
  }
  return [];
}

export const useTaskStore = defineStore('taskStore', {
  state: () => {
    return {
      tasks: getTasksFromLocalStorage()
    };
  },
  actions: {
    taskAdd(task: Omit<Task, 'date' | 'id' | 'make'>) {
      const newTask: Task = {
        ...task,
        date: new Date(),
        id: new Date().getTime(),
        isDone: false
      };
      this.tasks = [...this.tasks, newTask];
    },
    taskEdit(task: Omit<Task, 'date'>) {
      const newTask: Task = {
        ...task,
        date: new Date()
      };
      const index = this.tasks.findIndex((t) => t.id === task.id);
      if (index >= 0) {
        this.tasks = this.tasks.toSpliced(index, 1, newTask);
      }
    },
    taskDelete(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    taskMake(id: number, isDone: boolean) {
      const index = this.tasks.findIndex((t) => t.id === id);
      if (id < 0) return;
      const task = this.tasks[index];
      const newTask: Task = {
        ...task,
        isDone: !task.isDone
      };
      this.tasks = this.tasks.toSpliced(index, 1, newTask);
    }
  }
});
