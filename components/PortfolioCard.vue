<script setup lang="ts">
import { Play } from "lucide-vue-next";
import type { Project } from "~/data/portfolio";
import { toYouTubeThumbnailUrl } from "~/utils/youtube";
const props = defineProps<{ project: Project; large?: boolean }>();
const emit = defineEmits<{ open: [project: Project] }>();
const thumbnailUrl = computed(() => toYouTubeThumbnailUrl(props.project.videoUrl));
</script>
<template>
  <article :class="{ large }">
    <a
      class="project"
      :href="project.videoUrl"
      :aria-label="`Watch ${project.title}`"
      @click.prevent="emit('open', project)"
      ><div class="project-art visual" :class="project.tone">
        <img
          v-if="thumbnailUrl"
          class="project-preview"
          :src="thumbnailUrl"
          :alt="`Preview ${project.title}`"
        />
        <div class="project-play"><Play :size="18" fill="currentColor" /></div>
        <span class="frame-label">{{ project.category }}</span>
      </div>
      <div class="project-info">
        <p>{{ project.category }}</p>
        <h3>{{ project.title }}</h3>
        <span>{{ project.description }}</span>
      </div></a
    >
  </article>
</template>
