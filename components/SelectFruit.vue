<!-- components/SelectFruit.vue -->
<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'

const emit = defineEmits<{
  'update:selected': [value: AcceptableValue]
}>()

const props = withDefaults(defineProps<{
  modelValue?: AcceptableValue
}>(), {
  modelValue: null
})

const handleFruitChange = (value: AcceptableValue) => {
  emit('update:selected', value)
}
</script>

<template>
  <Select :value="modelValue" @update:modelValue="handleFruitChange">
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>