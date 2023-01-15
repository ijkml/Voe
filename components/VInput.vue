<script setup lang="ts">
interface Props {
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'date';
  class?: string;
  id?: string;
  name?: string;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Input',
  placeholder: undefined,
  type: 'text',
  class: undefined,
  id: undefined,
  name: undefined,
  required: false,
});

const {
  type,
  placeholder,
  label,
  class: elemClass,
  id,
  name,
  required,
} = toRefs(props);

const inputPlaceholder = placeholder.value ?? label.value;

const inputValue = ref('');
const isFocused = ref(false);
const hasError = ref(false);

function setFocus(on: boolean) {
  if (on || inputValue.value) {
    setTimeout(() => {
      isFocused.value = true;
    });

    return;
  }

  setTimeout(() => {
    isFocused.value = false;
  });
}
</script>

<template>
  <div class="input-container" :class="elemClass">
    <div class="input-box" :class="{ focus: isFocused, error: hasError }">
      <label class="input-label" v-text="label" />
      <input
        :id="id"
        v-model="inputValue"
        :type="type"
        class="input-1"
        :name="name"
        :aria-label="label"
        :required="required"
        v-bind="$attrs"
        :placeholder="inputPlaceholder"
        @focus="setFocus(true)"
        @blur="setFocus(false)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.input-container {
  @apply mx-2px;

  --input-bg-color: hsl(0, 0%, 100%);
  --input-tx-color: hsl(210, 29%, 24%);
  --input-active-color: hsl(265, 60%, 40%);

  .dark & {
    --input-bg-color: hsl(0, 0%, 10%); // hsl(0, 0%, 7%);
    --input-tx-color: hsla(0, 0%, 92%, 0.7);
    --input-active-color: hsl(275, 75%, 80%);
  }
}

.input-box {
  @apply relative z-auto;

  &.focus {
    .input-label {
      background: var(--input-bg-color);
      font-size: 11px;
      transform: translateY(0%);
      color: var(--input-active-color);

      @apply top--8px h-auto min-w-auto;
    }
  }
}

.input-label {
  @apply absolute text-16px font-normal overflow-hidden text-ellipsis
    whitespace-nowrap pointer-events-none select-none z-1 left-2
      py-0 px-2 top-1/2 h-4/5 min-w-4/5 items-center flex rounded-full;

  contain: layout paint;
  max-width: calc(100% - 16px);
  transform: translateY(-50%);
  transition: 250ms;
  color: var(--input-text-color);
  background-color: var(--input-bg-color);
}

.input-1 {
  @apply box-border w-full rounded px-4 py-10px border-none
    outline outline-1 outline-zinc-4 dark:(outline-zinc-7);

  transition: 250ms;
  letter-spacing: 0.009375em;
  background: var(--input-bg-color);
  color: var(--input-text-color);

  &:focus {
    outline: solid 2px var(--input-active-color);
  }

  &::placeholder,
  &::-webkit-input-placeholder {
    @apply transition-all duration-180 delay-80 color-inherit opacity-75;
  }

  .input-box:not(.focus) &,
  &:not(:focus) {
    &::placeholder {
      @apply opacity-0;
    }
  }
}
</style>
