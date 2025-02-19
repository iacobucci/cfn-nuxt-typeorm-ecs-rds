<script setup lang="ts">

// render directly to the client

const { $client } = useNuxtApp()

let hello = await $client.clog.useQuery({ text: 'client' })

let l = ref<{ text: string }[]>([])

</script>

<template>
	<div>
		<p>{{ hello.data }}</p>
		<button @click="() => { hello.refresh(); l.push({ text: `${new Date().toISOString()}` }) }">Refetch</button>
		<li v-for="item in l">{{ item.text }}</li>
	</div>
</template>