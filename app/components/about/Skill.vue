<script setup lang="ts">
import skills from '~/data/about'
</script>

<template>
  <div class="flex flex-col gap-3">
    <h3 class="text-lg text-muted">
      {{ $t("about.experience") }}
    </h3>
    <div class="flex flex-col gap-4 text-main">
      <div
        v-for="skill in skills[$i18n.locale as 'en' | 'fr']"
        :key="skill.title"
      >
        <h4 class="font-semibold text-main">
          {{ skill.title }}
        </h4>
        <div class="flex gap-1 text-muted"
          v-for="sub_skill in skill.sub_skills"
          :key="skill.title"
        >
          <p>
            {{ skill.sub_skills }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
