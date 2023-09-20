<script setup>

// Imports
import BottomNav from './comp-Bottom-Navigation.vue';
import SearchField from './comp-Search-Field.vue'

</script>


<template>
	<div>
		<SearchField />
		<router-view></router-view>
		<BottomNav />
	</div>
</template>
