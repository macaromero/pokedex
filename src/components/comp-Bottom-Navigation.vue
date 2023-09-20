<script setup>

// Imports
import { redirect } from '../helpers/router';

// Methods
const handleButtonClick = (button) => {
	const route = button === 'favorites' ? '/favorites' : '/pokemon';
	redirect(route);
}

</script>

<template>
	<div class="d-flex bottom-nav-container py-8" v-if="$router.currentRoute.value.path !== '/'">

		<v-btn class="bottom-nav-container__all" rounded :ripple="false" @click="handleButtonClick('all')">
			<v-icon>mdi-format-list-bulleted-square</v-icon>

			<span class="text-capitalize">All</span>
		</v-btn>

		<v-btn class="bottom-nav-container__favorites" rounded :ripple="false" @click="handleButtonClick('favorites')">
			<v-icon>mdi-star</v-icon>

			<span class="text-capitalize">Favorites</span>
		</v-btn>
	</div>
</template>

<style scoped lang="scss">
.bottom-nav-container {
	position: sticky;
	bottom: 0;
	width: 100%;
	justify-content: center;
	column-gap: 50px;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px -5px 4px 0px rgba(0, 0, 0, 0.05);
	height: 100px;

	&__favorites, &__all {
		width: 275px;
		color: white;
	}

	&__favorites {
		background: rgba(191, 191, 191, 1);
	}

	&__all {
		background: rgba(242, 37, 57, 1);
	}

	&__favorites:hover {
		background: rgb(182, 182, 182);

	}

	&__all:hover {
		background: rgb(231, 35, 55);

	}
}

@media (max-width: 900px) {
	.bottom-nav-container {
		&__favorites, &__all {
			width: 125px;
		}
	}
}
</style>
