<template>
  <header class="px-4 pt-4 sticky top-0 z-10">
    <div class="bg-neutral text-neutral-content flex justify-between items-center p-4 rounded-box">
      <RouterLink class="btn btn-sm btn-ghost" :to="{ name: 'HomeView' }">
        Mehmet Uysal
      </RouterLink>
      <div class="flex gap-2">
        <RouterLink class="btn btn-sm btn-ghost" :to="{ name: 'LinksView' }">
          Links
        </RouterLink>
        <RouterLink class="btn btn-sm btn-ghost" :to="{ name: 'AppsView' }">
          Apps
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
import Dropdown from '../daisy/Dropdown.vue';
import DropdownContent from '../daisy/DropdownContent.vue';

export default {
  components: { Dropdown, DropdownContent, RouterLink }
}
</script>