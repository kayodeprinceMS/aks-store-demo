<template>
  <div class="error-container">
    <div class="error-content">
      <div class="error-icon">⚠️</div>
      <h1>Oops! An Error Occurred</h1>
      <p class="error-message">{{ errorMessage }}</p>
      <p class="error-details">An exception was thrown in the order service while processing your request.</p>
      <div class="error-actions">
        <button @click="goHome" class="btn-primary">Return to Store</button>
        <button @click="goBack" class="btn-secondary">Go Back</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const errorMessage = ref('An error was thrown in the order service')

onMounted(() => {
  if (route.query.message) {
    errorMessage.value = route.query.message as string
  }
})

const goHome = () => {
  router.push('/')
}

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
  background: linear-gradient(135deg, #fef5f5 0%, #fff 100%);
}

.error-content {
  text-align: center;
  max-width: 600px;
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

h1 {
  color: #dc3545;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.error-message {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
}

.error-details {
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(108, 117, 125, 0.3);
}
</style>
