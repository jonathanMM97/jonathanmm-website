<template>
  <div v-if="isLoading" class="text-white">
    <Spinner class="w-40 h-40 animate-spin" />
  </div>
  <div v-else-if="error">Failed</div>
  <img v-else class="size-90" :src="imageUrl" alt="Copas" />
</template>

<script setup lang="ts">
import { useImage } from '@vueuse/core'
import Spinner from './icons/spinner.vue'

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
})

const { isLoading, error } = useImage({
  src: props.imageUrl,
})
</script>
