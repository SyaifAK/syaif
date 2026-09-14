<script setup lang="ts">
import type { Project } from "~/data/portfolio";
defineProps<{ projects: Project[] }>();
defineEmits<{ open: [project: Project] }>();
</script>
<template>
  <section class="section ai-section">
    <div class="shell">
      <div class="ai-heading">
        <p class="eyebrow">Beyond the set</p>
        <h2>AI-powered<br /><em>video creation.</em></h2>
        <p>
          I combine generative AI with professional post-production to create
          visuals that are flexible, fast and distinctly yours.
        </p>
      </div>
      <div class="ai-grid">
        <PortfolioCard
          v-for="project in projects"
          :key="project.videoUrl"
          :project="project"
          @open="$emit('open', $event)"
        />
      </div>
    </div>
  </section>
</template>
