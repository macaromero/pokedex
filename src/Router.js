// Imports
import Home from './pages/comp-Home.vue'
import List from './pages/comp-List.vue'
import NotFound from './pages/comp-Not-Found.vue'
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
	{
		path: '/', component: Home,
	},
	{
		path: '/pokemon',
		component: List,
		props: (route) => ({ searchQuery: route.query.search || '' }),
	},
	{
		path: '/pokemon/:name',
		component: List
	},
	{
		path: '/favorites',
		component: List,
	},
	{
		path: '/:notFound', component: NotFound
	}
]

const router = new createRouter( {
	history: createWebHistory(),
	routes
})

export default router