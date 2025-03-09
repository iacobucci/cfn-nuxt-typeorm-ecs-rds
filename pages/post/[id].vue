<script setup lang="ts">

const params = useRoute().params;

const { getPostById } = useServerFunctions()

const post = await getPostById(parseInt(params.id as string));


</script>

<template>
	<div>
		post {{ params.id }}
	</div>
	<div>
		content: {{ post?.content }}
	</div>
	<div>
		author:
		<RowsUser :id="post?.author.id || 0" :username="post?.author.username || ''" />
	</div>

	<div>
		liked by:
		<li v-for="user in post?.likedBy">
			<RowsUser :id="user.id" :username="user.username" />
		</li>
	</div>


</template>

<style scoped></style>
