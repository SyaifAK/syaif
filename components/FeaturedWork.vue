<script setup lang="ts">
import type { Project } from "~/data/portfolio";
defineProps<{ projects: Project[] }>();
defineEmits<{ open: [project: Project] }>();
</script>
<template>
  <section id="work" class="section shell">
    <div class="section-top">
      <div>
        <p class="eyebrow">Selected work</p>
        <h2>Designed to make<br />people <em>watch.</em></h2>
      </div>
      <p>A selection of recent video editing and AI-generated projects.</p>
    </div>
    <div class="work-grid">
      <PortfolioCard
        v-for="project in projects"
        :key="project.videoUrl"
        :project="project"
        @open="$emit('open', $event)"
      />
    </div>
    <a
      class="all-work"
      href="https://drive.google.com/drive/folders/1avQoZzJrDUYi-GpB2eDX3Ghub5Nw2x30?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      >View full portfolio on Google Drive <span>↗</span></a
    >
  </section>
</template>
