<script setup>
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
		<p>Sidebar</p>
		<div>
			<slot />
		</div>
	</div>
</template>