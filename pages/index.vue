<script setup lang="ts">

import { User } from '~/entities/User';
const { data } = await useFetch('/api/users', { lazy: true });

</script>

<template>
	<div>
		Page: test
	</div>
</template>

<style scoped></style>
