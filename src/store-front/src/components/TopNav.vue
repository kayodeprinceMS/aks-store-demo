<template>
  <nav>
    <div class="logo">
      <router-link to="/">
        <img src="/contoso-pet-store-logo.png" alt="Contoso Pet Store Logo" />
      </router-link>
    </div>
    <button class="hamburger" @click="toggleNav">
      <span class="hamburger-icon"></span>
    </button>
    <ul class="nav-links" :class="{ 'nav-links--open': isNavOpen }">
      <li><router-link to="/" @click="closeNav">Products</router-link></li>
      <li>
        <router-link to="/cart" @click="closeNav">Cart ({{ cartItemCount }})</router-link>
      </li>
      <li>
        <button class="throw-error-btn" @click="triggerOrderServiceError">Throw Error</button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores'

const router = useRouter()
const cartStore = useCartStore()
const isNavOpen = ref(false)

const cartItemCount = computed(() => cartStore.count)

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}

const closeNav = () => {
  isNavOpen.value = false
}

const triggerOrderServiceError = async () => {
  try {
    const response = await fetch('/api/order/throw-error')
    if (!response.ok) {
      console.error('Order service error triggered:', response.status)
    }
  } catch (error) {
    console.error('Failed to trigger order service error:', error)
  }
  // Navigate to error page
  router.push({ path: '/getnewrabbitmqconnection', query: { message: 'Exception thrown in order service!' } })
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.25rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

nav img {
  width: 100px;
  height: auto;
}

.nav-links {
  display: flex;
  list-style: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  margin-top: -40px;
}

.hamburger-icon {
  display: block;
  width: 20px;
  height: 2px;
  background-color: #fff;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: '';
  display: block;
  width: 20px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  left: 0;
}

.hamburger-icon::before {
  top: -6px;
}

.hamburger-icon::after {
  bottom: -6px;
}

.throw-error-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.2s;
}

.throw-error-btn:hover {
  background-color: #c82333;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #333;
    padding: 1rem;
  }

  .nav-links--open {
    display: block;
  }

  .nav-links--open li {
    padding: 0.5rem 0;
  }

  .hamburger {
    display: block;
  }
}
</style>
