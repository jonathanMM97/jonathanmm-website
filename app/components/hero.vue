<template>
  <SectionName :comment="t('home.hero.comment-1')" />
  <div class="flex font-main pt-6 pb-20">
    <div class="max-w-150 gap-2 flex flex-col">
      <div
        class="text-[50px] tracking-tight leading-[1.08] text-lg font-semibold"
        v-html="t('home.hero.title')"
      />
      <span class="text-lg">{{ t('home.hero.description') }}</span>
      <div class="flex items-center gap-5 mt-auto">
        <div v-for="button in tm('home.hero.buttons') as objecti18n[]">
          <a
            v-if="socialMedia.includes(rt(button.name))"
            :href="rt(button.link!)"
            target="_blank"
          >
            <Component class="size-9" :is="dicIcon[rt(button.name) as keyof typeof dicIcon]" />
          </a>
          <Button v-else :text="rt(button.name)" :link="rt(button.link!)" :IfDownload="rt(button.name) === 'CV'" />
        </div>
      </div>
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
import SectionName from '~/components/section-name.vue'
import type { objecti18n } from '~/utils'
import Button from '~/components/Button.vue'
import Linkedin from '~/assets/icons/linkedin.svg'
import Github from '~/assets/icons/github.svg'

const { t, tm, rt } = useI18n()

const socialMedia = ['LinkedIn', 'Github']
const dicIcon = {
  LinkedIn: Linkedin,
  Github: Github,
}
</script>
