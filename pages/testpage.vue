<script setup lang="ts">
definePageMeta(
	{
		middleware: [
			"testmiddleware"
		],
		layout: "testlayout"
	}
);
</script>

<template>
	<NuxtLayout>
		<div>
			Page: testpage
		</div>
	</NuxtLayout>
</template>

<style scoped></style>
