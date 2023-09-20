<script setup>

// Imports
import { usePokemonStore } from '../stores/pokemons';


// Instancing stores
const pokemonStore = usePokemonStore();


// Methods
const loadMorePokemons = () => {
	const offset = pokemonStore.state.pokemons.length
	pokemonStore.getPokemons(offset)
}
</script>


<template>
	<v-btn @click="loadMorePokemons" class="my-8 px-8" rounded :disabled="pokemonStore.loading">
		Cargar más
	</v-btn>
</template>