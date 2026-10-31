<template>
  <SectionName :comment="t('home.hero.experience.comment-1')" />
  <ExperienceSection :has-more="false" />
</template>

<script setup lang="ts">
import SectionName from '~/components/section-name.vue'

const logos = [
  'vue-logo',
  'nuxt-logo',
  'jekyll-logo',
  'tailwind-logo',
  'javascript-logo',
  'typescript-logo',
  'cloudflare-logo',
  'aws-logo',
]

const { t } = useI18n()
</script>
