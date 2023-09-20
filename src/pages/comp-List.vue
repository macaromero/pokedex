<script setup>

// Imports
import { computed } from 'vue';
import { redirect, checkRoute } from '../helpers/router';

import LoadMoreButton from '../components/comp-Load-More-Button.vue'
import ListItem from '../components/comp-List-Item.vue'
import TextTemplate from '../components/comp-Text-Template.vue'
import PokemonCard from '../components/comp-Pokemon-Card.vue'

import { usePokemonStore } from '../stores/pokemons';
import { useFavoriteStore } from '../stores/favorites';


// Instancing stores
const pokemonStore = usePokemonStore();
const favoriteStore = useFavoriteStore();


// Variables
let showLoadMoreButton = false
const textTemplateProps = {
	containerClass: 'justify-center my-10',
	titleClass: 'mb-5',
}


// Computed
const displayedList = computed(() => {
	if (checkRoute().includes('pokemon')) {
		if (checkRoute(true)) {
			showLoadMoreButton = false
			return pokemonStore.searchResult
		}
		else {
			showLoadMoreButton = true
			return pokemonStore.state.pokemons
		}
	} else {
		showLoadMoreButton = false
		return favoriteStore.favorites
	}
});

</script>

<template>
  	<div class="h100">
		<div class="d-flex flex-column align-center overflow-hidden list-container" v-if="displayedList.length">
			<div class="list-bg">
				<ListItem v-for="(el, index) of displayedList" :key="index" :pokemon="el"/>
			</div>

			<LoadMoreButton v-if="showLoadMoreButton"/>

			<v-dialog v-model="pokemonStore.pokemonCard" width="auto">
				<PokemonCard/>
			</v-dialog>
		</div>

		<TextTemplate v-bind="textTemplateProps">
			<template v-slot:btn>
				<button class="mt-10 btn-navigation" @click="redirect('/')">Go back home</button>
			</template>
		</TextTemplate>
  	</div>
</template>


<style scoped lang="scss">
.list-container {
  height: 70%;
}

.list-bg {
  width: 30%;
  overflow-y: scroll;
}

@media (max-width: 900px) {
  .list-bg {
	width: 90%;
  }
}
</style>