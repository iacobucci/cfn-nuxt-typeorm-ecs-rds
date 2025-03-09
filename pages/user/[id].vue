<script setup lang="ts">

const params = useRoute().params;
const username = params.id;

const { userPage } = useServerFunctions()

const { user, posts } = await userPage(username as string);

</script>

<template>

	<div className="flex-grow text-center pt-4">
		id: {{ user.id }}
	</div>

	<div className="flex-grow text-center pt-4">
		username: {{ user.username }}
	</div>

	<div className="flex-grow text-center pt-4">
		<div>posts:</div>
		<li v-for="post in posts">
			<RowsPost :id="post.id" :content="post.content" />
		</li>
	</div>
</template>

<style scoped></style>
