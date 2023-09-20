<script setup>

// Imports
import TextTemplate from '../components/comp-Text-Template.vue'
import {usePokemonStore} from '../stores/pokemons'


// Instancing stores
const pokemonStore = usePokemonStore()


// Variables
const textTemplateProps = {
	containerClass: 'h100 justify-space-evenly',
	rowClass: 'mx-4',
	title: 'Welcome to Pokédex',
	titleClass: 'mb-10',
	subtitle: 'The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.',
}

</script>

<template>
	<div class="d-flex justify-center align-center h100">
		<img src="../assets/pokebola.png" alt="Pokebola" height="100" width="100" v-if="pokemonStore.loading" class="pokebola"/>

		<TextTemplate v-else v-bind="textTemplateProps">
			<template v-slot:img>
				<img src="../assets/pikachu.png" alt="Pikachu" class="pikachu" style="height: 250px;"/>
			</template>
			<template v-slot:btn>
				<button class="mb-10 btn-navigation" @click="pokemonStore.getPokemons">Get started</button>
			</template>
		</TextTemplate>
	</div>
</template>

<style scoped>
.pokebola {
	animation: loading 2s infinite ease-in-out;
}

@keyframes loading {
	0% {
		opacity: .5;
		scale: .8;
	}
	25% {
		opacity: 1;
		scale: 1;
	}
	50% {
		opacity: .5;
		scale: .8;
	}
	100% {
		opacity: 1;
		scale: 1;
	}
}

</style>
