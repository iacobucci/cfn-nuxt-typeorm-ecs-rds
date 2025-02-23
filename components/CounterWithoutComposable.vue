<script setup lang="ts">
import { ref } from 'vue';
let value = ref(0);
let increment = () => value.value++;
let decrement = () => value.value--;
</script>
<template>
	<div>
		<p>Count: {{ value }}</p>
		<button @click="increment">Increment</button>
		<button @click="decrement">Decrement</button>
	</div>
</template>