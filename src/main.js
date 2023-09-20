// Imports
import './styles/main.scss'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import router from './Router'
import App from './App.vue'


// Instancing vuetify
const vuetify = createVuetify({
	components,
	directives,
})


// Creating app
createApp(App)
	.use(vuetify)
	.use(createPinia())
	.use(router).mount('#app')
