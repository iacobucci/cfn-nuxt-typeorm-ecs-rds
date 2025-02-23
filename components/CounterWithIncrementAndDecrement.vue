<script setup lang="ts">
import { useCounter } from '@/composables/useCounter';
const { count, increment, decrement } = useCounter();
</script>

<template>
	<Card>
		<CardHeader>
			<CardTitle>Counter with increment and decrement</CardTitle>
		</CardHeader>
		<CardContent>
			<p>Count: {{ count }}</p>
		</CardContent>
		<CardFooter class="flex justify-center space-x-4">
			<Button @click="increment">Increment</Button>
			<Button @click="decrement">Decrement</Button>
		</CardFooter>
	</Card>
</template>

<style scoped></style>
