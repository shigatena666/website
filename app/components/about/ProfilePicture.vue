<script setup lang="ts">
const { profilePicture } = useAppConfig()
</script>

<template>
  <div class="flex justify-center">
    <SpotlightCard
      mode="after"
      from="rgba(255,255,255,0.1)"
      :size="350"
      class="group hidden w-64 rounded-2xl border border-white/10 bg-white/5 p-2 sm:flex"
    >
      <div class="relative">
        <NuxtImg
          width="256"
          :src="profilePicture"
          class="relative size-64 rounded-xl object-cover"
          alt="shigatena's Picture"
          aria-label="shigatena's Picture"
        />
      </div>
    </SpotlightCard>
  </div>
</template>

<style scoped></style>
