<!-- components/TableOfContents.vue -->
<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const headings = ref([])

const getHeadings = () => {
  const article = document.querySelector('article')
  if (article) {
    const elements = article.querySelectorAll('h2, h3')
    headings.value = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent,
      level: parseInt(element.tagName.charAt(1)),
    }))
  }
}

onMounted(() => {
  getHeadings()
})

watch(() => route.path, () => {
  setTimeout(getHeadings, 100)
})

const isActive = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const rect = element.getBoundingClientRect()
    return rect.top >= 0 && rect.top <= window.innerHeight / 2
  }
  return false
}
</script>

<template>
  <nav class="table-of-contents fixed left-8 top-[200px] xl:block">
    <h2 class="text-lg font-semibold mb-4">Table of Contents</h2>
    <ul class="space-y-2">
      <li v-for="heading in headings" :key="heading.id">
        <a
          :href="`#${heading.id}`"
          :class="{
            'text-zinc-400 hover:text-zinc-200': !isActive(heading.id),
            'text-white font-medium': isActive(heading.id),
            'pl-4': heading.level === 3
          }"
          class="block transition-colors duration-200"
        >
          {{ heading.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
</style>
