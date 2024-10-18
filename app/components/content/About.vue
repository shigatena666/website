<script setup lang="ts">
const { data: stack } = await useAsyncData('stack', () => queryContent('/stack').findOne())
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20 pb-[150px]">

    <div
      style="--stagger: 1; --delay: 10ms"
      data-animate>
      <HomeProfilePicture />
      
      <h1 class="font-newsreader text-white-shadow text-center text-4xl">
        <ContentSlot :use="$slots.title" />
      </h1>
      <h2 class="text-center text-lg font-extralight  text-muted">
        <ContentSlot :use="$slots.subtitle" />
      </h2>
    </div>

    <Divider class="my-8" />

    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div class="relative flex flex-col gap-3 sm:ml-4">
        <div 
          style="--stagger: 2"
          data-animate>
          <h3 class="text-lg text-muted">
            <ContentSlot :use="$slots.intro_title" />
          </h3>
          <div class="flex flex-col gap-4 text-main">
            <ContentSlot :use="$slots.intro" />
          </div>
        </div>

        <Divider class="my-8" />

        <div
          style="--stagger: 3"
          data-animate>
          <h3 class="text-lg text-muted">
            <ContentSlot :use="$slots.experiences_title" />
          </h3>
          <div class="flex flex-col gap-4 text-main">
            <ContentSlot :use="$slots.experiences" />
          </div>
        </div>

        <Divider class="my-8" />

        <div
          style="--stagger: 4"
          data-animate>
          <h3 class="text-lg text-muted">
            <ContentSlot :use="$slots.education_title" />
          </h3>
          <div class="flex flex-col gap-4 text-main">
            <ContentSlot :use="$slots.education" />
          </div>
        </div>

      </div>
    </div>
    
  </section>
</template>
