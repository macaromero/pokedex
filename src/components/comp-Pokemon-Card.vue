<script setup>

// Imports
import {computed, ref} from 'vue'
import { redirect } from '../helpers/router';

import { usePokemonStore } from '../stores/pokemons';
import { useFavoriteStore } from '../stores/favorites';


// Instancing stores
const pokemonStore = usePokemonStore()
const favoritesStore = useFavoriteStore()


// Variables
let clipboardEvent = {
	show: false,
	text: '',
}


// States
let toggleClipboardModal = ref(false)


// Computed
const pokemon = computed(() => {
	return pokemonStore.state.pokemon
})

const pokemonImg = computed(() => {
	return pokemon.value.sprites.other.dream_world.front_default || pokemon.value.sprites.front_default
})

const getTypes = computed(() => {
	return pokemon.value.types.map(i => i.type.name).join(', ')
})

const cardText = computed(() => {
	return [
		{Name: pokemon.value.name},
		{Weight: pokemon.value.weight},
		{Height: pokemon.value.height},
		{Types: getTypes.value},

	]
})


// Methods
const closeCard = () => {
	if (pokemonStore.pokemonCard) {
		pokemonStore.pokemonCard = false
		redirect('/pokemon')
	}
}

const toggleFavorite = (pokemon) => {
	favoritesStore.toggleFavorite(pokemon)
}

const isFavorite = (pokemon) => {
	return favoritesStore.favorites.find(i => i.name == pokemon.name)
}

const copyToClipboard = () => {
	const {name, ...attrs} = pokemon.value
	const attributes = Object.keys(attrs).join(', ')

	pokemon.value.toString = () => `name: ${name}, ${attributes}`

	navigator.clipboard.writeText(pokemon.value)
		.then(() => {
			toggleClipboardModal.value = true
			clipboardEvent = {
				show: true,
				text: 'Your Pokémon info has been copied to your clipboard!',
			}
		})
		.catch(() => {
			toggleClipboardModal.value = true
			clipboardEvent = {
				show: true,
				text: 'There was a problem, try it again!',
			}
		})
}

</script>

<template>
	<v-card
		class="mx-auto"
		max-width="600"
	>
		<v-icon icon="mdi-close-circle" @click="closeCard" class="btn-close" color="white" height="26px"></v-icon>

		<div class="img-container">
			<img
				src="../assets/bg.png" class="img-bg" alt="Fondo"
			/>
			<img class="img-pokemon"
				:src="pokemonImg" :alt="pokemon.name"
			/>
		</div>

		<v-card-text v-for="(el, index) in cardText" :key="index" class="mx-7 px-0 card-text">
			<span class="font-weight-medium">
				{{ Object.keys(el).toString()  }}:
			</span>

			<span class="text-capitalize">
				{{ Object.values(el).toString()  }}
			</span>
		</v-card-text>
		

		<v-card-actions class="justify-space-around my-3">
			<v-btn class="btn-back" rounded @click="copyToClipboard">
				Share to my friends
			</v-btn>

			<v-btn style="background: rgba(245, 245, 245, 1);" icon class="mx-9" flat @click="toggleFavorite(pokemon)">
				<v-icon
					size="large"
					:color="isFavorite(pokemon) ? 'rgba(236, 165, 57, 1)' : 'rgba(191, 191, 191, 1)'"
					icon="mdi-star"
				></v-icon>
			</v-btn>
		</v-card-actions>

		<v-dialog v-model="toggleClipboardModal" width="auto">
			<div class="clipboard-event-dialog pa-10">
				<v-icon icon="mdi-close-circle" @click="toggleClipboardModal = false" class="btn-close" height="26px"></v-icon>
				
				<span>{{ clipboardEvent.text }}</span>
			</div>
		</v-dialog>
	</v-card>
</template>


<style scoped>

.btn-close {
	z-index: 1;
	position: absolute;
	top: 10px;
	right: 10px;
}

.img-container, .img-bg {
	position: relative;
	top: 0;
	bottom: 0;
}

.img-pokemon {
	position: absolute;
	max-height: 150px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.card-text {
	border-bottom: thin solid rgb(232, 232, 232);
	color: rgba(94, 94, 94, 1);
}

@media (max-width: 900px) {
	.img-bg {
		height: 200px;
	}
}

.clipboard-event-dialog {
	background: white;
}
</style>



