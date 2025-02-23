<script setup lang="ts">
import { MyCalendar } from '@/components/ui/calendar'

// listen to emitted events
</script>

<template>
	<div class="min-h-screen flex flex-col items-center justify-center">
		<p>Page: index</p>
		<SelectFruit />
		<MyCalendar />
		<CounterWithIncrement />
		<CounterWithIncrementAndDecrement />
	</div>
</template>

<style scoped></style>
