<script setup lang="ts">
import { CounterWithIncrement } from '#components';
import { CounterWithIncrementAndDecrement } from '#components';
</script>

<template>
	<div class="min-h-screen flex flex-col items-center justify-center">
		<p>Page: index</p>
		<CounterWithIncrement />
		<CounterWithIncrementAndDecrement />
	</div>
</template>

<style scoped></style>
