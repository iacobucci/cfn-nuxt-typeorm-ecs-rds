<script setup lang="ts">

// validate the page number

const page = parseInt(useRoute().params.page as string);

if (isNaN(page) || page < 1) {
	useRouter().push('/users/1');
}

const { getAllUsers } = useServerFunctions();

const users = await getAllUsers(page);

</script>

<template>
	<div className="flex-grow text-center pt-4">
		<NuxtLink :to="`/users/${page - 1}`">
			<div>prev</div>
		</NuxtLink>
		<NuxtLink :to="`/users/${page + 1}`">
			<div>next</div>
		</NuxtLink>
	</div>
	<div className="flex-grow text-center pt-4">
		<li v-for="user in users">
			<RowsUser :id="user.id" :username="user.username" />
		</li>
	</div>
</template>

<style scoped></style>