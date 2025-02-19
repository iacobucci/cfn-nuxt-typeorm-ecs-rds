<script setup lang="ts">
const { count, increment } = useCounter();
</script>


<template>
	<div>
		<p>Component: counterWithIncrement</p>
		<p>Count: {{ count }}</p>
		<Button @click="increment">Increment</Button>
	</div>
</template>

<style scoped></style>
