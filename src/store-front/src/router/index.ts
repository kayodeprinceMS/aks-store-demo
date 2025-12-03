import { createRouter, createWebHistory } from 'vue-router'
import ProductListView from '@/views/ProductListView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import ShoppingCartView from '@/views/ShoppingCartView.vue'
import ErrorView from '@/views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: ProductListView },
    { path: '/product/:id', component: ProductDetailView, props: true },
    { path: '/cart', component: ShoppingCartView },
    { path: '/error', component: ErrorView },
  ],
})

export default router
