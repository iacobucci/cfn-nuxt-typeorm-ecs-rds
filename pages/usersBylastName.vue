<script setup lang="ts">

import { User } from "~/entities/User";
import { plainToInstance } from "class-transformer";
import type { UsersByLastName } from "~/types/api";


const users = ref<User[]>([]);
const usersByLastName = reactive<UsersByLastName>({
	lastName: ""
});

async function fetchUsers() {
	const data = await $fetch('/api/usersByLastName', {
		lazy: true, method: 'POST', body: {
			lastName: usersByLastName.lastName
		}
	});
	console.log(data.body.users);
	users.value = data.body.users.map(user => plainToInstance(User, user));
}


</script>

<template>
	<div>
		<input type="text" v-model="usersByLastName.lastName" />
		<button @click="fetchUsers">Cerca</button>
	</div>

	<ul v-if="users.length > 0">
		<div>
			<li v-for="user in users" :key="user.id">
				{{ user.firstName }} {{ user.lastName }}
			</li>
		</div>
	</ul>
	<p v-else>Nessun utente trovato</p>
</template>

<style scoped></style>
