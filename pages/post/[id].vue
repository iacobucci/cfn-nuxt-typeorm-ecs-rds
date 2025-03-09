<script setup lang="ts">

const params = useRoute().params;

const { getPostById } = useServerFunctions()

const post = await getPostById(parseInt(params.id as string));


</script>

<template>
	<div className="flex-grow text-center pt-4">
		id: {{ params.id }}
	</div>

	<div className="flex-grow text-center pt-4">
		content: {{ post?.content }}
	</div>

	<div className="flex-grow text-center pt-4">
		author:
		<RowsUser :id="post?.author.id || 0" :username="post?.author.username || ''" />
	</div>

	<div className="flex-grow text-center pt-4">
		liked by:
		<li v-for="user in post?.likedBy">
			<RowsUser :id="user.id" :username="user.username" />
		</li>
	</div>
</template>

<style scoped></style>
