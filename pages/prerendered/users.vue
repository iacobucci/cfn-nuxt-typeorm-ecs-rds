<script setup lang="ts">

import { User } from "~/entities/User";

definePageMeta({
	prerender: true,
})

// query diretta nel lato ssr
const { data: users } = await useAsyncData('users', async () => {
	// questa chiamata a useAsyncData non è risolvibile a build time
	console.log("Server side only");
	try {
		let users = await User.find(); // undefined
		// le funzioni di active record per typeorm sono tree-shaked e non vengono incluse nel bundle
		return users
	} catch (error) {
		console.error(error);
	}
	return [];
}, {
	// Impedisce la ri-esecuzione lato client
	server: true,
});
</script>

<template>
	<div>
		<li v-for="user in users">
			{{ user.fullName() }}
		</li>
	</div>
</template>

<style scoped></style>
