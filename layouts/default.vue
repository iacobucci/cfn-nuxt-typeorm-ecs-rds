<script setup>
import Sidebar from '~/components/sidebar.vue';

useHead({
	script: [
		{
			children: 'document.documentElement.classList.add("dark")',
			type: 'text/javascript'
		}
	]
})
</script>

<template>
	<div class="flex items-start gap-5">
		<Sidebar />
		<div>
			<slot />
		</div>
	</div>
</template>