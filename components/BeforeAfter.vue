<script setup lang="ts">
import { beforeAfterVideos } from "~/data/portfolio";
import { toYouTubeEmbedUrl } from "~/utils/youtube";
const beforeEmbedUrl = toYouTubeEmbedUrl(beforeAfterVideos.beforeVideoUrl);
const afterEmbedUrl = toYouTubeEmbedUrl(beforeAfterVideos.afterVideoUrl);
</script>
<template>
  <section class="section shell comparison-section">
    <div class="comparison-copy">
      <p class="eyebrow">The difference</p>
      <h2>From raw to<br /><em>refined.</em></h2>
      <p>
        Color, pacing, captions, sound and motion turn usable footage into a
        finished story.
      </p>
    </div>
    <div class="comparison">
      <div class="compare-before">
        <iframe
          :src="beforeEmbedUrl"
          title="Before editing preview"
          allow="encrypted-media; picture-in-picture"
        ></iframe>
        <span>BEFORE / 01</span>
      </div>
      <div class="compare-after">
        <iframe
          :src="afterEmbedUrl"
          title="After editing preview"
          allow="encrypted-media; picture-in-picture"
        ></iframe>
        <span>AFTER / 01</span>
      </div>
    </div>
  </section>
</template>
