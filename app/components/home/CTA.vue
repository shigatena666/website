<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('contact@shigatena.dev')
const toast = useToast()

const copyEmail = () => {
  navigator.clipboard.writeText(email.value)
  toast.add({ title: 'Mail copied in your clipboard!' })
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 sm:gap-2">
    <div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2">
      <SpotlightButton @click="copyEmail">
        <div class="white-gradient relative flex items-center justify-center gap-2 transition-all duration-200">
          {{$t('global.email')}}
        </div>
        <UIcon name="heroicons-envelope" class="ml-2 size-5 text-white/80" aria-hidden="true" />
      </SpotlightButton>
    </div>
  </div>
</template>

<style scoped></style>
