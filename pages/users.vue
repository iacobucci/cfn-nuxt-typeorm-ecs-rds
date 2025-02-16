<script setup lang="ts">

import { plainToInstance } from "class-transformer"
import { User } from "~/entities/User";
const { data } = await useFetch('/api/users', { lazy: true });

// rende reattivi gli oggetti user, deserializzati con class-transformer
let users = ref<User[]>(data.value?.body.users.map(user => plainToInstance(User, user)) || []);

function addMockUser() {
	let u = new User();
	u.firstName = "luigi";
	u.lastName = "rossi";
	users.value.push(u);
}

</script>

<template>
	<div>
		<li v-for="user in users">
			{{ user.fullName() }}
		</li>
		<button @click="addMockUser">Add mock</button>
	</div>
</template>

<style scoped></style>
