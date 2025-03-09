<script setup lang="ts">

defineProps<{
	id: number,
	content: string
}>();

</script>

<template>
	<div>
		<NuxtLink :to="'/post/' + id">
			<div>Post: {{ id }}</div>
		</NuxtLink>
	</div>
</template>