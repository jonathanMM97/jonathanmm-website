<template>
  <div
    class="bg-black text-white w-full h-screen relative z-0 justify-center items-center flex flex-col"
  >
    <Header class="absolute top-0 w-full z-9" />
    <div class="relative flex flex-col z-1 w-fit items-center bg-grey-500">
      <span class="text-3xl uppercase font-main max-w-[500px] text-center">{{
        t('home.first')
      }}</span>
      <div class="flex gap-4 py-4 border-y border-gray-300 my-4">
        <Maintenance class="w-40 h-40 text-white" />
      </div>
      <span class="text-3xl uppercase font-main max-w-[500px] text-center">{{
        t('home.second')
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from '~/components/image.vue'
import Maintenance from '~/components/icons/maintenance.vue'

const { t } = useI18n()

useHead({
  title: t('home.meta.title'),
})
</script>
