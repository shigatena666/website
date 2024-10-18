<script setup lang="ts">

const appConfig = useAppConfig()

useHead({
  title: () => appConfig.appName,
  titleTemplate: () => appConfig.appName,
})

const { data: stack } = await useAsyncData('stack', () => queryContent('/stack').findOne())
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center">
    <div class="relative mx-auto flex max-w-7xl flex-col justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
      
      <!-- spotlight -->
      <div
        class="absolute -top-8 left-1/2 size-72 -translate-x-1/2 rounded-full bg-white/25 blur-[150px] lg:-top-8 lg:size-[15rem] lg:blur-[200px]"
      />

      <!-- profile picture -->
      <HomeProfilePicture />

      <div class="z-20 flex flex-col items-center justify-center">
        <!-- title -->
        <div
          class="font-geist"
          style="--stagger: 1; --delay: 10ms"
          data-animate
        >
          <h1 class="mx-auto text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-center text-3xl leading-tight text-transparent lg:max-w-3xl lg:text-4xl">
            <ContentSlot :use="$slots.hero_title" />
          </h1>

          <!-- subtitle -->
          <h2 class="mx-auto mt-4 max-w-xl text-center text-lg antialiased text-white/60">
            <ContentSlot :use="$slots.hero_subtitle" />
          </h2>
        </div>

        <SettingsAvailability
          background
          class="mt-8"
          style="--stagger: 2"
          data-animate
        />

        <Divider class="my-8" />
        
        <!-- cta -->
        <HomeCTA
          style="--stagger: 4"
          data-animate
        />

        <!-- social -->
        <HomeSocial
          style="--stagger: 5"
          data-animate
        />   
        
      </div>
    </div>
  </section>
</template>
