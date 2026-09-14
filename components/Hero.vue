<script setup lang="ts">
import { ArrowDownRight } from "lucide-vue-next";
import { tools } from "~/data/tools";
</script>
<template>
  <section id="top" class="hero shell">
    <div class="hero-copy">
      <p class="eyebrow">Video editor <i /> AI video creator</p>
      <h1>I turn ideas into <em>videos</em> that get attention.</h1>
      <p class="lede">
        I create engaging short-form content, social videos, and AI-powered
        visual experiences for brands, businesses, and creators.
      </p>
      <div class="actions">
        <a class="button" href="#work"
          >View my work <ArrowDownRight :size="17" /></a
        ><a
          class="text-link"
          href="https://wa.me/6285647621528"
          target="_blank"
          rel="noopener noreferrer"
          >Let's work together <span>→</span></a
        >
      </div>
    </div>
    <div class="hero-visual lanyard-stage" aria-label="Kartu profil Syaif">
      <div class="lanyard-shadow" />
      <div class="lanyard-swing">
        <svg class="lanyard-strap" viewBox="0 0 320 250" aria-hidden="true">
          <path d="M72 0 C74 122 94 130 160 190 C226 130 246 122 248 0" />
          <path d="M86 0 C88 110 106 122 160 174 C214 122 232 110 234 0" />
        </svg>
        <div class="lanyard-clip"><span /></div>
        <article class="profile-card">
          <div class="profile-card-top">
            <span>CREATIVE ID</span><span>2026</span>
          </div>
          <img
            src="/images/images.png"
            alt="Foto profil Syaif"
            class="profile-photo"
          />
          <div class="profile-details">
            <p>SYAIF</p>
            <span>VIDEO EDITOR &amp; AI CREATOR</span>
          </div>
          <div class="profile-card-bottom">
            <span>SYAIF CREATIVE</span><b>RC</b>
          </div>
        </article>
      </div>
      <p class="lanyard-caption">AVAILABLE FOR SELECT PROJECTS <i /></p>
    </div>
    <div class="scroll-note">Scroll to explore <span /></div>
  </section>
  <section class="tools-marquee" aria-label="Tools used">
    <div class="marquee-track">
      <div
        v-for="copy in 4"
        :key="copy"
        class="marquee-group"
        :aria-hidden="copy > 1"
      >
        <div
          v-for="tool in tools"
          :key="`${copy}-${tool.name}`"
          class="marquee-item"
        >
          <span>{{ tool.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
