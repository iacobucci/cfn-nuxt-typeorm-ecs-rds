<script setup lang="ts">

defineProps<{
	username: string,
	id: number
}>();

</script>

<template>
	<div>
		<NuxtLink :to="'/user/' + username">
			<div>{{ username }}</div>
		</NuxtLink>
	</div>
</template>