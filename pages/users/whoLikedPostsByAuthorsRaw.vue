<script setup lang="ts">
import type { UsersWhoLikedPostsByAuthors } from "~/types/api";

const parameters = useRoute().query;

const authors = reactive<UsersWhoLikedPostsByAuthors>(
	parameters.authors
		? { usernames: (parameters.authors as string).split(",") }
		: { usernames: [] },
);

const { data, error } = await useFetch(
	"/api/users/whoLikedPostsByAuthorsRaw",
	{
		lazy: true,
		method: "POST",
		body: authors,
	},
);

const users = (data.value?.body as { users: { id: number, username: string }[] }).users || [];

</script>

<template>
	<div className="flex-grow text-center pt-4">
		<div>
			users who liked posts by authors {{ authors.usernames.join(", ") }}
		</div>
		<li v-for="liker in users">
			<RowsUser :id="liker.id" :username="liker.username" />
		</li>
	</div>
</template>

<style scoped></style>
