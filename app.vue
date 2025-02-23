<script setup lang="ts">
useSeoMeta({
	title: 'Applicazione Nuxt',
	description: 'Applicazione di esempio',
	ogTitle: 'Applicazione Nuxt',
	ogDescription: 'Applicazione di esempio',
	ogImage: '/img/image.png'
});
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>