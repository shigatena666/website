<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  size: { type: Number, default: 16 },
  radius: { type: Number, default: 2 },
  offsetX: { type: Number, default: 0 },
  offsetY: { type: Number, default: 0 },
})

const svgWidth = ref(0)
const svgHeight = ref(0)

onMounted(() => {
  const updateSize = () => {
    svgWidth.value = window.innerWidth
    svgHeight.value = window.innerHeight
  }
  updateSize()
  window.addEventListener('resize', updateSize)
})
</script>

<template>
  <svg :width="svgWidth" :height="svgHeight" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern
        id="dot-pattern"
        :width="size"
        :height="size"
        patternUnits="userSpaceOnUse"
        :x="offsetX"
        :y="offsetY"
      >
        <circle
          :cx="size / 2"
          :cy="size / 2"
          :r="radius"
        />
      </pattern>
    </defs>

    <rect
      :width="svgWidth"
      :height="svgHeight"
      stroke-width="0"
      fill="url(#dot-pattern)"
    />
  </svg>
</template>

<style scoped>
svg {
  position: fixed;
  top: 0;
  left: 0;
  will-change: transform;
}
</style>
