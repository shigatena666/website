<template>
  <div>
    <div>
      <SettingsLanguageToggle class="fixed bottom-20 right-3 z-50 sm:bottom-4" />
      <LayoutNavbar class="fixed bottom-5 z-50 flex" />
      <div class="sm:mt-[50px]">
        <slot />
      </div>
    </div>
  </div>
</template>
