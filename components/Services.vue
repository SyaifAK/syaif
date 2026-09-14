<script setup lang="ts">
import { services } from "~/data/services";
</script>
<template>
  <section id="services" class="section shell">
    <div class="section-top">
      <div>
        <p class="eyebrow">Capabilities</p>
        <h2>What I can<br /><em>create.</em></h2>
      </div>
      <p>
        A modern production partner for the content your audience is already
        watching.
      </p>
    </div>
    <div class="services-grid">
      <article v-for="service in services" :key="service[0]" class="service">
        <span>{{ service[0] }}</span>
        <h3>{{ service[1] }}</h3>
        <p>{{ service[2] }}</p>
        <b>↗</b>
      </article>
    </div>
  </section>
</template>
