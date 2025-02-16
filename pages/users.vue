<script setup lang="ts">

import { plainToInstance } from "class-transformer"
import { User } from "~/entities/User";
const { data } = await useFetch('/api/users', { lazy: true });

let users = data.value?.body.users.map(user => plainToInstance(User, user))

</script>

<template>
	<div>
		<li v-for="user in users">
			{{ user.fullName() }}
		</li>
	</div>
</template>

<style scoped></style>
