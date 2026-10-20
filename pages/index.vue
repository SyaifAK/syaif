<script setup lang="ts">
import { portfolio } from '~/data/portfolio'
const selected = ref<typeof portfolio[number] | null>(null)
const showBeforeAfter = false
const selectedWorkProjects = [
  ...portfolio.filter(project => [1, 2, 14].includes(project.id)),
  ...portfolio.filter(project => project.type === 'editing').slice(1, 4),
]
const selectedWorkVideoUrls = new Set(selectedWorkProjects.map(project => project.videoUrl))
const editingProjects = portfolio.filter(
  project => project.type === 'editing' && !selectedWorkVideoUrls.has(project.videoUrl),
)
const aiProjects = portfolio.filter(
  project => project.type === 'ai' && !project.featured && !selectedWorkVideoUrls.has(project.videoUrl),
)
</script>

<template>
  <main>
    <Navbar />
    <Hero />
    <FeaturedWork :projects="selectedWorkProjects" @open="selected = $event" />
    <VideoEditing :projects="editingProjects" @open="selected = $event" />
    <BeforeAfter v-if="showBeforeAfter" />
    <AiVideo :projects="aiProjects" @open="selected = $event" />
    <Services />
    <About />
    <Workflow />
    <Cta />
    <Contact />
    <SiteFooter />
    <VideoModal :project="selected" @close="selected = null" />
  </main>
</template>
