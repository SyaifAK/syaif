<script setup lang="ts">
import { X } from "lucide-vue-next";
import type { Project } from "~/data/portfolio";
import { toYouTubeEmbedUrl } from "~/utils/youtube";
const props = defineProps<{ project: Project | null }>();
const emit = defineEmits<{ close: [] }>();
const videoEmbedUrl = computed(() =>
  props.project ? toYouTubeEmbedUrl(props.project.videoUrl, true) : "",
);
function close() {
  emit("close");
}
onMounted(() => {
  const esc = (e: KeyboardEvent) =>
    e.key === "Escape" && props.project && close();
  window.addEventListener("keydown", esc);
  onBeforeUnmount(() => window.removeEventListener("keydown", esc));
});
</script>
<template>
  <Teleport to="body"
    ><div v-if="project" class="modal-backdrop" @click.self="close">
      <section
        class="modal"
        role="dialog"
        aria-modal="true"
        :aria-label="project.title"
      >
        <button class="modal-close" aria-label="Close video" @click="close">
          <X />
        </button>
        <div class="modal-art">
          <iframe
            :src="videoEmbedUrl"
            :title="project.title"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
          />
        </div>
      </section></div
  ></Teleport>
</template>
