<script setup lang="ts">
const { count, increment, decrement } = useCounter();
</script>


<template>
	<div>
		<p>Component: counterWithIncrement</p>
		<p>Count: {{ count }}</p>
		<Button @click="increment">Increment</Button>
		<Button @click="decrement">Decrement</Button>
	</div>
</template>

<style scoped></style>
