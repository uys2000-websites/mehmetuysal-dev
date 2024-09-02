<template>
  <div class="h-screen bg-base-300 overflow-hidden">
    <TheHeader />
    <router-view v-slot="{ Component, route }">
      <transition name="page">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import TheHeader from '@/components/shared/TheHeader.vue';
import { RouterView } from 'vue-router'
export default {
  components: {
    TheHeader,
    RouterView
  }
}
</script>


<style>
.page-enter-active,
.page-leave-active {
  position: fixed;
  transition: 0.5s ease;
}

.page-enter-from {
  transform: translateY(100vh);
  opacity: 0;
}

.page-leave-to {
  transform: translateY(-100vh);
  opacity: 0;
}
</style>