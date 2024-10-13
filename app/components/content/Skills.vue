<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  skills: {
    type: Object as PropType<{ title: string, sub_skills: object }[]>,
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
        <div class="flex flex-col gap-1 text-muted">
          <p v-for="(sub_skill, index) in skill.sub_skills" :key="index">
            > {{Object.keys(sub_skill)[0] }}: {{ Object.values(sub_skill)[0] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
