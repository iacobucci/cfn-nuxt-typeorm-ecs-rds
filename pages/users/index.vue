<script setup lang="ts">

import { plainToInstance } from "class-transformer"
const { data } = await useFetch('/api/users', { lazy: true });
</script>

<template>
	<div>
		<li v-for="user in data?.body.users">
			{{ user.username }}
		</li>
	</div>
</template>

<style scoped></style>
