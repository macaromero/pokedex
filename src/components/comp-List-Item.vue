<script setup>

// Imports
import { defineProps } from 'vue';
import { usePokemonStore } from '../stores/pokemons';
import { useFavoriteStore } from '../stores/favorites';


// Instancing stores
const pokemonStore = usePokemonStore();
const favoriteStore = useFavoriteStore();


// Prop definition
const props = defineProps(['pokemon'])


// Methods
const toggleFavorite = (pokemon) => {
	favoriteStore.toggleFavorite(pokemon)
};

const isFavorite = (pokemon) => {
	return favoriteStore.favorites.find(i => i.name == pokemon.name)

}
const getSinglePokemon = (name) => {
	pokemonStore.getSinglePokemon(name)
}
</script>

<template>
	<div class="d-flex align-center justify-space-between my-2 py-2 list-row">
		<v-btn class="px-9 text-capitalize" text flat @click="getSinglePokemon(props.pokemon.name)">{{ props.pokemon.name }}</v-btn>

		<v-btn color="rgba(245, 245, 245, 1)" icon class="mx-9" flat @click="toggleFavorite(props.pokemon)">
			<v-icon
			size="large"
			:color="isFavorite(props.pokemon) ? 'rgba(236, 165, 57, 1)' : 'rgba(191, 191, 191, 1)'"
			icon="mdi-star"
			></v-icon>
		</v-btn>
	</div>
</template>


<style scoped lang="scss">
.list-row {
  background: white;
  border-radius: 5px;
}
</style>