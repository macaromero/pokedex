<script setup>

// Imports
import { redirect } from '../helpers/router';
import TextTemplate from '../components/comp-Text-Template.vue';

// Variables
const textTemplateProps = {
	containerClass: 'mt-10 h100',
	titleClass: 'mb-5',
}

</script>

<template>
	<TextTemplate v-bind="textTemplateProps">
			<template v-slot:btn>
				<button class="mt-10 btn-navigation" @click="redirect('/')">Go back home</button>
			</template>
		</TextTemplate>
</template>

