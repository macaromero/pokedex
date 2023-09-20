// Imports
import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { redirect } from '../helpers/router'


export const usePokemonStore = defineStore('pokemon', () => {

	const state = reactive({
		pokemons: [],
		pokemon: {}
	})

	let loading = ref(false)
	let searchResult = ref([])
	let pokemonCard = ref(false)

	const getPokemons = async (offset = 0) => {
		loading.value = true;
		try {
			setTimeout(async() => {
				const res = await axios.get('https://pokeapi.co/api/v2/pokemon', { params: { offset, limit: 20 } });
				state.pokemons.push(...res.data.results);
				loading.value = false;
				redirect('/pokemon');
			}, 2000)
			
		} catch (error) {
			redirect('/not-found');
		}
	};

	const getSinglePokemon = async (name) => {
		loading.value = true;
		try {
			const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
			state.pokemon = res.data;
			loading.value = false;
			redirect(`/pokemon/${name}`);
			pokemonCard.value = true
			
		} catch (error) {
			redirect('/not-found');
		}
	};

	const search = (query) => {
		if (query) {
			const res = state.pokemons.filter((pokemon) => pokemon.name.includes(query.toLowerCase()));
			searchResult.value = res.length ? res : [];
		}
	}


	return { state, loading, getPokemons, search, searchResult, getSinglePokemon, pokemonCard }
})
