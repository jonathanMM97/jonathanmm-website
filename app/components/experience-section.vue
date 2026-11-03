<template>
  <div
    class="flex font-main gap-20 relative rounded-3xl py-6"
    :class="{
      [`after:absolute after:left-1 after:top-20 after:h-[85%] after:content-[''] after:border-l-2 after:border-light`]:
        hasMore,
    }"
  >
    <SectionName class="self-start pt-6" />
    <div
      class="absolute after:absolute after:top-7 after:left-6 after:w-13 after:border-b-2 after:border-light after:content-['']"
    />
    <article
      class="w-full flex flex-col border-black-extra-light shadow-sm hover:shadow-lg transition shadow-secondary border-2 rounded-2xl text-white"
    >
      <div
        class="flex text-[12px] justify-between items-center bg-gray p-4 rounded-t-2xl"
      >
        <div class="flex items-center gap-2">
          <Code class="text-secondary" />
          <span>{{ t('home.experience.file-name') }}</span>
          <span>/</span>
          <span class="flex gap-[0.5]">
            <span v-if="number < 10">0</span>
            <span>{{ number }}</span>
          </span>
        </div>
        <span class="uppercase text-light font-secondary text-[12px]">{{
          rt(experience.type)
        }}</span>
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
                rt(experience.range)
              }}</span>
              <Label v-if="rt(experience.years)" :name="rt(experience.years)" />
            </div>
            <div class="flex flex-col">
              <span class="text-[24px]">{{ rt(experience.title) }}</span>
              <div class="flex gap-1">
                <span v-if="rt(experience.company)" class="text-secondary">{{
                  rt(experience.company)
                }}</span>
                <span class="text-light font-secondary">{{
                  rt(experience.mode)
                }}</span>
              </div>
            </div>
            <span class="text-light font-secondary">{{
              rt(experience.description)
            }}</span>
          </div>
          <ul
            class="guide font-secondary text-[18px] flex flex-col gap-2 text-light ml-2 pl-2"
          >
            <li v-for="goal in experience.goals">{{ rt(goal.name) }}</li>
          </ul>
        </div>
        <div
          class="flex lg:flex-row flex-col justify-between gap-2 py-4 text-[14px]"
        >
          <span>{{ t('home.experience.technology') }}</span>
          <div class="flex gap-2">
            <div v-for="technology in experience.technologies">
              <Label :name="rt(technology.name)" has-hover />
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import Code from '@/../public/media/code.svg'
import type { Experience } from '~/utils'

const { t, rt } = useI18n()

defineProps({
  hasMore: {
    type: Boolean,
    required: true,
  },
  experience: {
    type: Object as PropType<Experience>,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
})
</script>
