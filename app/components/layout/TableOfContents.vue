<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

// Utilisation du composable useRoute pour accéder aux informations de route
const route = useRoute()

// Référence réactive pour stocker les en-têtes
const headings = ref([])

// Fonction pour extraire les en-têtes de l'article
const getHeadings = () => {
  const article = document.querySelector('article')
  if (article) {
    const elements = article.querySelectorAll('h2, h3')
    headings.value = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent?.trim() ?? '',
      level: parseInt(element.tagName.charAt(1)),
    }))
  }
}

// Exécuter getHeadings une fois que le composant est monté
onMounted(getHeadings)

// Observer les changements de route et mettre à jour les en-têtes
watch(() => route.path, () => {
  // Utilisation de nextTick pour s'assurer que le DOM est mis à jour
  nextTick(getHeadings)
})

// Fonction pour faire défiler jusqu'à l'en-tête sélectionné
const scrollToHeading = (event: Event, id: string) => {
  event.preventDefault()
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav 
    class="table-of-contents"
    v-if="headings.length"
  >
    <h2 class="text-lg font-semibold mb-4 text-zinc-100">Table of contents</h2>
    <div
      v-for="heading in headings" 
      :key="heading.id"
    >
      <ULink
        :to="`#${heading.id}`"
        @click="(event) => scrollToHeading(event, heading.id)"
        class="block py-1 px-2 rounded transition-colors duration-200 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
      >
      <div class="white-gradient relative transition-all duration-200 text-md">
        > {{ heading.text }}
      </div>
      </ULink>
    </div>
  </nav>
</template>

<style scoped>
.table-of-contents :deep(a) {
  @apply text-current no-underline;
}
</style>
