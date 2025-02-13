<script setup lang="ts">
	// fetch /api/getinfo
	const {data} = await useFetch('/api/getinfo');
</script>

<template>
  <div>
	<p>Modalità di rilascio: {{ data?.env }}</p>
	<p>Url del database: {{ data?.url }}</p>
	<p>Provare le rotte /api/adduser?firstName=nome&lastName=cognome e /api/users</p>
  </div>
</template>