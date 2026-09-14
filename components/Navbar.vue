<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";
const open = ref(false);
const scrolled = ref(false);
const links = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Contact", "#contact"],
];
onMounted(() => {
  const update = () => (scrolled.value = window.scrollY > 24);
  update();
  window.addEventListener("scroll", update);
  onBeforeUnmount(() => window.removeEventListener("scroll", update));
});
</script>
<template>
  <header class="nav" :class="{ scrolled }">
    <nav class="shell">
      <a class="brand" href="#top">SYAIF CREATIVE<span>.</span></a>
      <div class="nav-links">
        <a v-for="link in links" :key="link[0]" :href="link[1]">{{
          link[0]
        }}</a>
      </div>
      <a
        class="button small nav-cta"
        href="https://wa.me/6285647621528"
        target="_blank"
        rel="noopener noreferrer"
        >Let's work together</a
      ><button
        class="menu"
        aria-label="Toggle navigation"
        @click="open = !open"
      >
        <X v-if="open" /><Menu v-else />
      </button>
    </nav>
    <div v-if="open" class="mobile-links">
      <a
        v-for="link in links"
        :key="link[0]"
        :href="link[1]"
        @click="open = false"
        >{{ link[0] }}</a
        ><a
          href="https://wa.me/6285647621528"
          target="_blank"
          rel="noopener noreferrer"
          @click="open = false"
          >Let's work together</a>
    </div>
  </header>
</template>
