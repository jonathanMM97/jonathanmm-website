<template>
  <span
    class="p-1 border text-[12px] border-light text-light transition cursor-default"
    :class="{'hover:border-secondary hover:text-secondary' : hasHover}"
  >
    {{ name }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  hasHover: {
    type: Boolean,
    default: false,
  },
})
</script>
