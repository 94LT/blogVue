import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import TestView from '@/views/TestView.vue'


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'base',
			component: HomeView,
		},
        {
			path: '/home',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/test',
			name: 'test',
			component: TestView,
		},
	],
})


export default router