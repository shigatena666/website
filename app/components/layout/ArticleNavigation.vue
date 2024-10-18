<script setup lang="ts">
const { path } = useRoute()
const { data: currentArticle } = await useAsyncData(`current-${path}`, () => queryContent(path).findOne())

const { data: allArticles } = await useAsyncData('all-articles', () => queryContent('/articles').sort({ date: -1 }).find())

const currentIndex = computed(() => allArticles.value?.findIndex(article => article._path === currentArticle.value?._path) ?? -1)

const previousArticle = computed(() => currentIndex.value > 0 ? allArticles.value?.[currentIndex.value - 1] : null)
const nextArticle = computed(() => currentIndex.value < (allArticles.value?.length ?? 0) - 1 ? allArticles.value?.[currentIndex.value + 1] : null)
</script>

<template>
  <div class="flex justify-between mt-8 space-x-4">

    <div v-if="previousArticle">
      <SpotlightButton 
        transparent
        class="border border-white/10 flex size-10 items-center justify-center p-1 text-muted transition-all duration-200 hover:text-main">
          <NuxtLink
            :to="previousArticle._path"
            class="flex"
          >
          <UIcon
            name="heroicons-arrow-left"
            class="size-6 text-white/80"
          />
          </NuxtLink>
      </SpotlightButton>
    </div>
    <div v-else class="flex-1"></div>

    <div v-if="nextArticle">
      <SpotlightButton 
        transparent
        class="border border-white/10 flex size-10 items-center justify-center p-1 text-muted transition-all duration-200 hover:text-main">
          <NuxtLink
            :to="nextArticle._path"
            class="flex"
          >
          <UIcon
            name="heroicons-arrow-right"
            class="size-6 text-white/80"
          />
          </NuxtLink>
      </SpotlightButton>
    </div>
    <div v-else class="flex-1"></div>

  </div>
</template>

