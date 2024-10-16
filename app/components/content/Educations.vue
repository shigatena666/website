<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { PropType } from 'vue'

interface Education {
  title: string
  date: string
  school: string
  icon?: string
}

const props = defineProps({
  educations: {
    type: Array as PropType<Education[]>,
    required: true,
  },
})

const iconComponents = ref<{ [key: string]: any }>({})

const loadIcon = async (education: Education) => {
  if (education && education.icon && !iconComponents.value[education.icon]) {
    try {
      const module = await import(`@/assets/logo/${education.icon}.svg`)
      iconComponents.value[education.icon] = module.default
    } catch (error) {
      console.error(`Failed to load icon: ${education.icon}`, error)
    }
  }
}

onMounted(() => {
  props.educations.forEach(loadIcon)
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <div
      v-for="education in educations"
      :key="education.title"
      class="flex items-center gap-2"
    >

    <component
      :is="education.icon ? iconComponents[education.icon] : null"
      v-if="education.icon && iconComponents[education.icon]"
      class="size-10 text-main flex-shrink-0"
      :class="education.icon.includes('color') ? '' : 'text-main'"
      :filled="education.icon.includes('color')"
      :font-controlled="false"
    />

    <div class="pl-2 flex-1">
      <h4 class="font-semibold text-main">
        {{ education.title }}
      </h4>
        <div class="flex gap-1 text-muted">
          <p>
            {{ education.date }}
          </p>
          <span class="mx-1"> / </span>
          <p>
            {{ education.school }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
