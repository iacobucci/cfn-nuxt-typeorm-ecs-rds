<script setup lang="ts">

import { plainToInstance } from "class-transformer"
// import { User } from "~/entities/User";

const { data } = await useFetch('/api/users', { lazy: true });
</script>

<template>
	<div>
		<li v-for="user in data?.body.users">
			{{ user.firstName }} {{ user.lastName }}
		</li>
	</div>
</template>

<style scoped></style>
