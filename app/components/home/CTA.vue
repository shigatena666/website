<script setup lang="ts">
import { ref } from 'vue'

const email = ref('contact@shigatena.dev')

const copyEmail = () => {
  navigator.clipboard.writeText(email.value)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 sm:gap-2">
    <div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2">
      <UTooltip
        :text="$t('global.email')"
        :shortcuts="['⌘', 'O']"
      >
        <SpotlightButton @click="copyEmail">
          <NuxtLink
            class="white-gradient relative flex items-center justify-center gap-2 transition-all duration-200"
            to="/"
            @click.prevent="copyEmail"
          >
            {{ $t("global.contact") }}
            <UIcon
              name="heroicons-envelope"
              class="size-5 text-white/80"
              aria-hidden="true"
            />
          </NuxtLink>
        </SpotlightButton>
      </UTooltip>
    </div>
  </div>
</template>

<style scoped></style>
