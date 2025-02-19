<script setup lang="ts">
const { count, increment, decrement } = useCounter();
</script>


<template>
	<div>
		<p>Component: counterWithIncrement</p>
		<p>Count: {{ count }}</p>
		<button @click="increment">Increment</button>
		<button @click="decrement">Decrement</button>
	</div>
</template>

<style scoped></style>
