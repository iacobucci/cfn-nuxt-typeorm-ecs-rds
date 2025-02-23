<script setup lang="ts">
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
