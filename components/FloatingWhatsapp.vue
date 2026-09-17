<script setup lang="ts">
import { MessageCircleMore } from "lucide-vue-next";
</script>

<template>
  <a
    class="whatsapp-float"
    href="https://wa.me/6285647621528"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircleMore :size="22" aria-hidden="true" />
    <span>Chat on WhatsApp</span>
  </a>
</template>
