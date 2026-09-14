export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/styles/main.css', '~/assets/styles/lanyard.css'],
  app: {
    head: {
      title: 'Syaif - Video Editor & AI Video Creator',
      meta: [
        { name: 'description', content: 'Freelance video editor and AI video creator specializing in short-form content, social media videos, AI-generated visuals, and modern video production.' },
        { property: 'og:title', content: 'Syaif - Video Editor & AI Video Creator' },
        { property: 'og:description', content: 'Modern video creation, built with editing and AI.' }
      ]
    }
  },
  typescript: { strict: true }
})
