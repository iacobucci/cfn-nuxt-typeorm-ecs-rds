<script setup lang="ts">

// render directly to the client

const { $client } = useNuxtApp()

let hello = await $client.clog.useLazyQuery({ text: 'client' }) // query non bloccante al caricamento della pagina da un NuxtLink

let l = ref<{ text: string }[]>([])

</script>

<template>
	<div>
		<p>{{ hello.data.value?.greeting }}</p>
		<button @click="() => { hello.refresh(); l.push({ text: `${new Date().toISOString()}` }) }">Refetch</button>
		<!-- refresh sempre non bloccante -->
		<li v-for="item in l">{{ item.text }}</li>
	</div>
</template>