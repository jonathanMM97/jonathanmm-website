<template>
  <a
    v-if="IfDownload"
    :href="link"
    :download="link"
    class="border-2 border-white text-white rounded-xl p-2"
    >{{ text }}</a
  >
  <NuxtLink
    v-else
    class="border-2 border-white text-white rounded-xl p-2"
    :href="link"
  >
    {{ text }}
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  IfDownload: {
    type: Boolean,
    default: false,
  },
})
</script>
