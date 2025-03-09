<script setup lang="ts">

const params = useRoute().params;
const username = params.id;

const { userPage } = useServerFunctions()

const { user, posts } = await userPage(username as string);

</script>

<template>

	<div>
		id: {{ user.id }}
	</div>

	<div>
		username: {{ user.username }}
	</div>

	<div>
		<div>posts:</div>
		<li v-for="post in posts">
			<RowsPost :id="post.id" :content="post.content" />
		</li>
	</div>
</template>

<style scoped></style>
