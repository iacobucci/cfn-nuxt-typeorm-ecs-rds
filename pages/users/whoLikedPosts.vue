<script setup lang="ts">
const parameters = useRoute().query;

const authors = reactive<UsersThatLikedPostsByAuthors>(
	parameters.authors ? { usernames: parameters.authors.split(',') } : { usernames: [] })

const { data } = await useFetch('/api/users/whoLikedPostsByAuthors', {
	lazy: true,
	body: authors
});

console.log(data)
</script>

<template>

	users/whoLikedPosts

	<div v-for="author in authors">
		{{ author }}
	</div>

	<div v-for="user in data?.body.users">
		{{ user.username }}
	</div>

</template>

<style scoped></style>