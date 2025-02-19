<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
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
