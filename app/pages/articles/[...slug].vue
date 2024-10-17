<script lang="ts" setup>

const toast = useToast()
const { t, locale } = useI18n()

const route = useRoute()
const { data: page } = await useAsyncData(`${route.path}`, () => queryContent(route.path).findOne())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useContentHead(page.value)

const runtimeConfig = useRuntimeConfig()
const articleLink = ref(`${runtimeConfig.public.siteUrl}${page.value._path}`)

const { copy } = useClipboard({
  source: articleLink.value,
})

function copyArticleLink() {
  copy()
  toast.add({ title: 'Article link copied in your clipboard!' })
}

defineOgImage({
  url: page.value.image,
  width: 1200,
  height: 600,
})
</script>


<template>
  <div>
    <Html
      :lang="$i18n.locale"
      class="bg-zinc-950 text-main font-geist transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"
    >
      <Body>
        <LayoutScrollToTop />
        <NuxtLayout>
          <article class="writing prose mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl py-[100px]">
            <h1>
              {{ page?.title }}
            </h1>
            <div class="info-section mt-1 flex flex-col gap-2 sm:flex-row sm:gap-4">
              <p>{{ page?.date }}</p>
              <p class="hidden sm:block">
                |
              </p>
              <p>{{ page?.readingTime }} {{ $t("writing.readingTime") }}</p>
              <p class="hidden sm:block">
                |
              </p>
              <p
                class="flex cursor-pointer select-none items-center gap-1 transition-colors duration-200 hover:text-main"
                @click="copyArticleLink"
              >
                {{ $t("writing.share") }}
              </p>
            </div>
            <ContentQuery
              v-slot="{ data }"
              :path="$route.path"
              :locale="locale"
              find="one"
            >
              <ContentRenderer :value="data" />
            </ContentQuery>
          </article>
          <TableOfContents />
        </NuxtLayout>
        <DotPattern class="absolute inset-0 -z-10 size-full fill-white/5" />
      </Body>
    </Html>
  </div>
</template>

<style scoped>
.info-section {
  font-weight: 200;
  color: #7d8084;
  text-decoration: none;
  text-align: left;
}
</style>
