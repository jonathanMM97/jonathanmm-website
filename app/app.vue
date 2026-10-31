<template>
  <div
    class="bg-black text-white w-full h-full relative z-0 justify-center items-center flex flex-col"
  >
    <Header class="fixed top-0 w-full z-9" />
    <div
      class="relative max-w-300 flex flex-col z-1 w-fit h-full bg-grey-500 pt-40"
    >
      <Hero />
      <Experiencia />
    </div>
  </div>
</template>

<script setup lang="ts">
import Hero from './components/hero.vue'
import Experiencia from './components/experiencia.vue'

const { t } = useI18n()

useHead({
  title: t('home.meta.title'),
})
</script>
