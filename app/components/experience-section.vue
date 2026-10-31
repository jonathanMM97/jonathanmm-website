<template>
  <div
    class="flex font-main gap-20 relative rounded-3xl py-6"
    :class="{
      [`after:absolute after:left-7 after:top-20 after:h-[85%] after:rounded-bl-[40px] after:content-[''] after:border-b-2 after:border-l-2 after:border-dashed after:border-light`]:
        hasMore,
    }"
  >
    <SectionName class="self-start pt-6" />
    <div
      class="absolute after:absolute after:top-7 after:left-6 after:w-13 after:rounded-bl-[40px] after:border-b-2 after:border-l-2 after:border-dashed after:border-light after:content-['']"
    />
    <article
      class="w-full flex flex-col border-black-extra-light shadow-sm shadow-secondary border-2 rounded-2xl text-white"
    >
      <div class="flex text-[12px] justify-between items-center bg-gray p-4 rounded-t-2xl">
        <div class="flex items-center gap-2">
          <Code class="text-secondary" />
          <span>carrer.log</span>
          <span>/</span>
          <span>01</span>
        </div>
        <span class="uppercase text-light font-secondary text-[12px]"
          >clientes y colaboraciones</span
        >
      </div>
      <div
        class="flex flex-col bg-black-light rounded-b-2xl divide-light/30 divide-y pt-4 px-4"
      >
        <div
          class="grid grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.2fr)] justify-between gap-2 divide-light/30 divide-x pb-4"
        >
          <div class="flex flex-col gap-2 pr-4">
            <div class="flex gap-4 items-center">
              <span class="text-[14px] text-secondary">{{
                t('home.hero.experience.experience-1.range')
              }}</span>
              <span class="p-1 border text-[12px] border-light text-light">{{
                t('home.hero.experience.experience-1.years')
              }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[24px]">{{
                t('home.hero.experience.experience-1.title')
              }}</span>
              <div class="flex gap-1">
                <span>{{
                  t('home.hero.experience.experience-1.company')
                }}</span>
                <span class="text-light font-secondary">{{
                  t('home.hero.experience.experience-1.mode')
                }}</span>
              </div>
            </div>
            <span class="text-light font-secondary">{{
              t('home.hero.experience.experience-1.description')
            }}</span>
          </div>
          <ul
            class="guide font-secondary text-[18px] flex flex-col gap-2 text-light ml-2 pl-2"
          >
            <li>{{ t('home.hero.experience.experience-1.goal-1') }}</li>
            <li>{{ t('home.hero.experience.experience-1.goal-2') }}</li>
          </ul>
        </div>
        <div
          class="flex lg:flex-row flex-col justify-between gap-2 py-4 text-[14px]"
        >
          <span>{{ t('home.hero.experience.technology') }}</span>
          <!-- Todas las tecnologias -->
          <div class="flex gap-2">
            <div v-for="technology in technologies">
              <span class="p-1 border text-[12px] border-light text-light">{{
                rt(technology.name)
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import Code from '@/../public/media/code.svg'
import Image from '~/components/image.vue'
const { t, tm, rt } = useI18n()

interface Technology {
  name: string
}

const technologies = tm(
  'home.hero.experience.experience-1.technologies',
) as Technology[]

defineProps({
  hasMore: {
    type: Boolean,
    required: true,
  },
})
</script>
