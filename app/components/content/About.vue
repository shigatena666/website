<script setup lang="ts">
const { data: stack } = await useAsyncData('stack', () => queryContent('/stack').findOne())
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader  text-white-shadow text-center text-4xl">
      <ContentSlot :use="$slots.title" />
    </h1>
    <h2 class="text-center text-lg font-extralight  text-muted">
      <ContentSlot :use="$slots.subtitle" />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <AboutProfilePicture />
      <div class="relative flex flex-col gap-3 sm:ml-4">
        <h3 class="text-lg text-muted">
          Intro
        </h3>
        <div class="flex flex-col gap-4 text-main">
          <ContentSlot :use="$slots.intro" />
        </div>
      </div>
    </div>
    <Divider class="my-8" />
    <ContentSlot :use="$slots.experiences" />
    <Divider class="my-8" />
    <div class="flex flex-col gap-3">
      <div class="mb-6 flex flex-col gap-1">
        <h3 class="text-white-shadow font-newsreader  text-3xl">
          <ContentSlot :use="$slots.stack_title" />
        </h3>
        <p class="text-sm text-muted">
          <ContentSlot :use="$slots.stack_description" />
        </p>
      </div>
      <div class="flex flex-wrap gap-4">
        <AboutStackItem
          v-for="item in stack!.items"
          :key="item.name"
          :item
        />
      </div>
    </div>
  </section>
</template>
