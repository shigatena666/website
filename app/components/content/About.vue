<script setup lang="ts">
const { data: stack } = await useAsyncData('stack', () => queryContent('/stack').findOne())
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <HomeProfilePicture />
    
    <h1 class="font-newsreader text-white-shadow text-center text-4xl">
      <ContentSlot :use="$slots.title" />
    </h1>
    <h2 class="text-center text-lg font-extralight  text-muted">
      <ContentSlot :use="$slots.subtitle" />
    </h2>

    <Divider class="my-8" />

    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div class="relative flex flex-col gap-3 sm:ml-4">
        <h3 class="text-lg text-muted">
          <ContentSlot :use="$slots.intro_title" />
        </h3>
        <div class="flex flex-col gap-4 text-main">
          <ContentSlot :use="$slots.intro" />
        </div>

        <Divider class="my-8" />

        <h3 class="text-lg text-muted">
          <ContentSlot :use="$slots.experiences_title" />
        </h3>
        <div class="flex flex-col gap-4 text-main">
          <ContentSlot :use="$slots.experiences" />
        </div>

        <Divider class="my-8" />

        <h3 class="text-lg text-muted">
          <ContentSlot :use="$slots.education_title" />
        </h3>
        <div class="flex flex-col gap-4 text-main">
          <ContentSlot :use="$slots.education" />
        </div>

        <Divider class="my-8" />

        <h3 class="text-lg text-muted">
          <ContentSlot :use="$slots.skills_title" />
        </h3>
        <div class="flex flex-col gap-4 text-main">
          <ContentSlot :use="$slots.skills" />
        </div>

        <Divider class="my-8" />

        <h3 class="text-lg text-muted">
          <ContentSlot :use="$slots.stack_title" />
        </h3>
        <div class="flex flex-col gap-4 text-main">
          <div class="z-20 flex flex-col items-center justify-center">
            <div class="flex flex-wrap max-w-xl gap-4 items-center justify-center">
              <AboutStackItem
                v-for="item in stack!.items"
                :key="item.name"
                :item 
              />
            </div>
          </div>
        </div>

        <Divider class="my-8" />

      </div>
    </div>
    
  </section>
</template>
