<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { PropType } from 'vue'

interface Experience {
  title: string
  date: string
  company: string
  icon?: string
}

const props = defineProps({
  experiences: {
    type: Array as PropType<Experience[]>,
    required: true,
  },
})

const iconComponents = ref<{ [key: string]: any }>({})

const loadIcon = async (experience: Experience) => {
  if (experience && experience.icon && !iconComponents.value[experience.icon]) {
    try {
      const module = await import(`@/assets/logo/${experience.icon}.svg`)
      iconComponents.value[experience.icon] = module.default
    } catch (error) {
      console.error(`Failed to load icon: ${experience.icon}`, error)
    }
  }
}

onMounted(() => {
  props.experiences.forEach(loadIcon)
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <div
      v-for="experience in experiences"
      :key="experience.title"
      class="flex items-center gap-2"
    >
      <component
        :is="experience.icon ? iconComponents[experience.icon] : null"
        v-if="experience.icon && iconComponents[experience.icon]"
        class="size-10 text-main flex-shrink-0"
        :class="experience.icon.includes('color') ? '' : 'text-main'"
        :filled="experience.icon.includes('color')"
        :font-controlled="false"
      />
      
      <div class="pl-2 flex-1">
        <h4 class="font-semibold text-main">
          {{ experience.title }}
        </h4>
        <div class="flex gap-1 text-muted">
          <p>{{ experience.date }}</p>
          <span class="mx-1">/</span>
          <p>{{ experience.company }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
