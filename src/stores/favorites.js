// Imports
import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useFavoriteStore = defineStore('favorite', () => {
	let favorites = ref([])


	const addToFavorites = (pokemon) => {
		favorites.value.push(pokemon)
	}

	const removeFavorite = (pokemon) => {
		const index = favorites.value.indexOf(pokemon);
		index !== -1 && favorites.value.splice(index, 1)

	}

	const toggleFavorite = (pokemon) => {
		if (favorites.value.includes(pokemon)) removeFavorite(pokemon)
		else addToFavorites(pokemon)
	}


	return { toggleFavorite, favorites }
})
