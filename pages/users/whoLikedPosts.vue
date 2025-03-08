<script setup lang="ts">

const parameters = useRoute().query;

const authors = parameters.authors ? parameters.authors.split(',') : [];

</script>

<template>

	users/whoLikedPosts
	<div v-for="author in authors">
		{{ author }}
	</div>

</template>

<style scoped></style>