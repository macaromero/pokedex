<script setup>
// Imports
import { defineProps } from 'vue'

// Prop definition
const props = defineProps({
	containerClass: String,
	rowClass: String,
	titleClass: String,
	title: {
		type: String,
		default() {
			return 'Uh-oh!'
		}
	},
	subtitle: {
		type: String,
		default() {
			return 'You look lost on your journey!'
		}
	},
})

</script>


<template>
    <div class="d-flex flex-column align-center" :class="props.containerClass">
		<slot name="img"></slot>

		<div class="text-center" :class="props.rowClass">
			<h1 class="font-weight-bold title" :class="props.titleClass">{{ props.title}}</h1>
			<span class="subtitle">{{ props.subtitle }}</span>
		</div>
	
		<slot name="btn"></slot>
    </div>
</template>