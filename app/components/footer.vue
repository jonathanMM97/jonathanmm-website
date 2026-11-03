<template>
  <div class="flex w-full bg-black-light border-t border-light justify-center">
    <div class="flex justify-between items-center max-w-300 w-full py-6">
      <span class="text-[12px] text-light">{{ $t('footer.rights') }}</span>
      <div class="flex gap-2">
        <div v-for="social in $tm('footer.links')">
          <a :href="$rt(social.link)" target="_blank">
            <Component
              :is="dicIcon[$rt(social.name) as keyof typeof dicIcon]"
              class="size-6 text-light hover:text-secondary"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Linedin from '~/assets/icons/linkedin.svg'
import Github from '~/assets/icons/github.svg'

const dicIcon = {
  LinkedIn: Linedin,
  Github: Github,
}
</script>
