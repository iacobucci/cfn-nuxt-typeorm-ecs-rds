<script setup lang="ts">
import { NuxtLayout } from '#components';

	// fetch /api/getinfo
	const {data} = await useFetch('/api/getinfo');
</script>

<template>
  <div>
	<p>Modalità di rilascio: {{ data?.env }}</p>
	<p>Url del database: {{ data?.url }}</p>
	<p>Provare le rotte /api/adduser?firstName=nome&lastName=cognome e /api/users</p>
	<p>Prova di aggiornamento</p>

	<p><NuxtLink to="/">Go to Home</NuxtLink></p>
	<p><NuxtLink to="/testpage">Go to testpage</NuxtLink></p>
	<p><NuxtLink to="/changecolor">Go to changecolor</NuxtLink></p>
	<NuxtLayout />
  </div>
  <NuxtPage />
</template>