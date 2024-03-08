<script setup>
import { computed } from 'vue';
import Styles from './style.module.scss';

const checked = defineModel({ type: Boolean });

const emit = defineEmits({
  onChange: {
    type: 'change',
    default: () => {}
  }
});

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const handleClick = () => {
  checked.value = !checked.value;
  emit('onChange', checked.value);
};
</script>

<template>
  <label :class="Styles.label">
    <span v-if="props.label" :id="`label-${props.id}`">
      {{ props.label }}
    </span>
    <input type="checkbox" v-model="checked" :class="Styles.input" tabindex="-1" />
    <button
      type="button"
      :class="[Styles.checkBox]"
      tabindex="0"
      role="checkbox"
      :aria-checked="props.checked"
      @click="handleClick"
    >
      <span :class="[Styles.checkBoxIcon, checked && Styles.checked]" />
    </button>
  </label>
</template>
