<template>
	<div v-if="imageData">
		<img :src="imageData" alt="Identicon" />
	</div>
</template>

<script>
import Identicon from 'identicon.js';

export default {
	props: {
		userIdentifier: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			imageData: null,
		};
	},
	mounted() {
		this.generateIdenticon();
	},
	methods: {
		generateIdenticon() {
			const hash = this.userIdentifier;
			const identicon = new Identicon(hash, 200).toString(); // puoi modificare 420 per ottenere un'immagine più grande o più piccola
			this.imageData = `data:image/png;base64,${identicon}`;
		},
	},
};
</script>

<style scoped>
/* Puoi stilizzare l'identicon come preferisci */
img {
	border-radius: 50%;
}
</style>
