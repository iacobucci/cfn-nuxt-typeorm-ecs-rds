<script setup lang="ts">
definePageMeta({
	layout: "empty"
})

const route = useRoute()

console.log(route.params.num)

</script>

<template>
	<div class="min-h-screen flex flex-col items-center justify-center">
		<p>{{ $route.params.num }}</p>
	</div>
</template>