<template>
  <div class="flex flex-col gap-1 py-30 my-30 border-y border-light">
    <SectionName :comment="t('home.experience.comment-1')" />
    <ExperienceSection
      v-for="(experience, index) in tm('home.experience.all') as Experience[]"
      :experience="experience"
      :number="index + 1"
      :has-more="
        Array.isArray(tm('home.experience.all'))
          ? (tm('home.experience.all') as Experience[]).length - 1 !== index
          : false
      "
    />
  </div>
</template>

<script setup lang="ts">
import SectionName from '~/components/section-name.vue'
import type { Experience } from '~/utils'

const { t, tm } = useI18n()
</script>
