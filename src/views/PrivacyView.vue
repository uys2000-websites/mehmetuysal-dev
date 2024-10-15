<template>
  <div class="w-full h-app-page flex justify-center p-4 overflow-hidden">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
export default {
  components: {
    RouterView
  }
}
</script>