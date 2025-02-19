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
const { count, increment} = useCounter();
</script>


<template>
	<Card>
		<CardHeader>
			<CardTitle>Counter with increment</CardTitle>
		</CardHeader>
		<CardContent>
			<p>Count: {{ count }}</p>
		</CardContent>
		<CardFooter class="flex justify-center">
			<Button @click="increment">Increment</Button>
		</CardFooter>
	</Card>
</template>

<style scoped></style>
