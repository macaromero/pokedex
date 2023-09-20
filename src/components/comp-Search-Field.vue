<script setup>

// Imports
import { ref, watch } from 'vue'
import { redirect, checkRoute } from '../helpers/router';
import { usePokemonStore } from '../stores/pokemons'


// Instancing stores
const pokemonStore = usePokemonStore()


// States
const searchQuery = ref('');
const searching = ref(false);


// Methods
const search = () => {
	if (searchQuery.value) {
		searching.value = true;
		pokemonStore.search(searchQuery.value)
		redirect({path: '/pokemon', query: {search: searchQuery.value}})
		searching.value = false
	}
};


// Watch
watch(searchQuery, (newVal, oldVal) => {
	if (newVal !== oldVal) {
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(search, 300);
	}
	if (!newVal) redirect('/pokemon')
});

let searchTimeout = null;
</script>

<template>
	<div>
		<v-text-field
			v-model="searchQuery"
			:disabled="searching"
			variant="solo"
			label="Search"
			density="compact"
			prepend-inner-icon="mdi-magnify"
			single-line
			hide-details
			flat
			clearable
			@click:prepend-inner="search"
			class="search-input py-6"
			v-if="checkRoute() !== '/'"
		></v-text-field>
	</div>
</template>


<style scoped lang="scss">
.search-input {
	position: relative;
	transform: translateX(-50%);
	left: 50%;
	top: 0;
	width: 30%;
}

@media (max-width: 900px) {
	.search-input {
		width: 80%;
	}
}
</style>
