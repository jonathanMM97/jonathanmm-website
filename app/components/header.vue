<template>
  <header class="flex gap-2 mt-4 justify-between items-center">
    <Image class="size-[100px]" image-url="/media/logo.png" />
    <div class="flex flex-col mr-4 text-black relative">
      <div
        class="flex gap-1 justify-between bg-main px-4 py-2 rounded-2xl w-[71px] cursor-pointer"
        :class="{ 'items-center': !isOpen }"
        @click="isOpen = !isOpen"
      >
        <span class="font-bold">{{ locale }}</span>
        <Chevron class="w-4 h-4" :class="{ 'mt-1': isOpen }" />
      </div>
      <div
        class="flex absolute top-12 flex-col gap-2 bg-main px-4 py-2 rounded-2xl text-center w-[71px] transition-all duration-200 ease-out origin-top"
        :class="
          isOpen
            ? 'opacity-100 translate-y-0 scale-100 cursor-pointer'
            : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
        "
      >
        <span
          v-for="lang in locales"
          :key="lang.code"
          :class="{ 'font-bold': lang.code === locale }"
          @click="handleLocaleChange(lang.code)"
        >
          {{ lang.code }}
        </span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Chevron from '~/components/icons/chevron.vue'
import Image from '~/components/image.vue'

const { locale, locales, setLocale } = useI18n()
const isOpen = ref(false)

const handleLocaleChange = (lang: 'es' | 'en') => {
  setLocale(lang)
  isOpen.value = false
}
</script>
