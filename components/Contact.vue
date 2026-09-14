<script setup lang="ts">
import { ArrowUpRight, Mail } from "lucide-vue-next";
</script>
<template>
  <section id="contact" class="section shell contact">
    <div>
      <p class="eyebrow">Let's make it happen</p>
      <h2>Let's work<br /><em>together.</em></h2>
    </div>
    <div class="contact-list">
      <a href="mailto:alkhalimsyaif@gmail.com"
        ><Mail :size="19" /><span
          ><small>Email</small>alkhalimsyaif@gmail.com</span
        ><ArrowUpRight
      /></a>
      <a
        href="https://wa.me/6285647621528"
        target="_blank"
        rel="noopener noreferrer"
        ><span><small>WhatsApp</small>Start a conversation</span
        ><ArrowUpRight /></a
      ><a
        href="https://www.upwork.com/freelancers/~01d9d96500c0a092a8?mp_source=share"
        target="_blank"
        rel="noopener noreferrer"
        ><span><small>Upwork</small>View my profile</span><ArrowUpRight
      /></a>
    </div>
  </section>
</template>
