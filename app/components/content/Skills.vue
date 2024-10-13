<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  skills: {
    type: Object as PropType<{ title: string, sub_skills: string }[]>,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-4 text-main">
      <div
        v-for="skill in skills"
        :key="skill.title"
      >
        <h4 class="font-semibold text-main">
          {{ skill.title }}
        </h4>
        <div class="flex gap-1 text-muted">
          <p>
            {{ skill.sub_skills }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
