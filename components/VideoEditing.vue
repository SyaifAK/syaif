<script setup lang="ts">
import type { Project } from "~/data/portfolio";
const props = defineProps<{ projects: Project[] }>();
defineEmits<{ open: [project: Project] }>();

const editingProjects = computed(() =>
  props.projects.filter((project) => project.type === "editing"),
);
</script>
<template>
  <section id="editing" class="section editing">
    <div class="shell">
      <div class="section-top">
        <div>
          <p class="eyebrow">The edit</p>
          <h2>Raw footage to<br /><em>real momentum.</em></h2>
        </div>
        <p>
          From talking-head stories to rapid social cuts, every frame has a
          reason to stay.
        </p>
      </div>
      <div class="editing-grid">
        <PortfolioCard
          v-for="project in editingProjects"
          :key="project.videoUrl"
          :project="project"
          @open="$emit('open', $event)"
        />
      </div>
    </div>
  </section>
</template>
