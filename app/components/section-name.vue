<template>
  <div class="flex gap-2 items-center">
    <span class="relative flex size-3">
      <span
        class="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"
      ></span>
      <span
        class="relative inline-flex size-3 rounded-full bg-secondary"
      ></span>
    </span>
    <span
      v-if="comment"
      class="font-terciary tracking-widest text-[14px] text-secondary"
      >{{ comment }}</span
    >
  </div>
</template>

<script setup lang="ts">
defineProps({
  comment: {
    type: String,
    required: false,
  },
})
</script>
