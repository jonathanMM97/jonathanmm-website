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
    <span class="font-main">{{ t('home.hero.comment-1')}}</span>
  </div>
  <div class="flex font-main">
    <div class="max-w-150 flex flex-col">
      <div class="text-[50px] text-lg font-semibold"
        v-html="t('home.hero.title')"
      />
      <span class="text-lg"
        >Soy Jonathan, ingeniero informático con mas de 3 años de experiencia
        como Frontend Developer, además de tener varios proyectos como freeland
        trabajando en la parte de frontend y backend.</span
      >
    </div>
    <div class="w-85 h-105 p-2 ml-auto z-0 relative">
      <Image
        class="w-81.25 z-2 top-2 right-0 absolute drop-shadow-2xl mask-[linear-gradient(to_bottom,black_70%,transparent_100%)] ml-auto"
        image-url="/media/profile.png"
        size="size-full"
      />
      <div
        class="absolute rounded-2xl z-1! bottom-2 right-0 w-[95%] h-[90%] bg-secondary"
      />
      <div class="w-full z-3 h-[95%] bottom-0 absolute border" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from './image.vue'

const { t } = useI18n()
</script>