---
layout: page
title: projects
permalink: /projects/
description: Selected project.
nav: false
nav_order: 3
---

<div class="boat-project">
  <div class="boat-card">
    <div class="boat-card-header">
      <h2 class="boat-title">Physical Embodiment in Embodied AI</h2>
      <span class="boat-date">2022</span>
    </div>

    <video
      class="boat-video"
      controls
      muted
      loop
      playsinline
      preload="metadata"
      poster="{{ '/assets/img/xzb.png' | relative_url }}"
    >
      <source src="{{ '/assets/video/xzb.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="boat-gallery">
      <img src="{{ '/assets/img/xzb.png' | relative_url }}" alt="Boat photo 1" loading="lazy" />
      <img src="{{ '/assets/img/xzb2.png' | relative_url }}" alt="Boat photo 2" loading="lazy" />
      <img src="{{ '/assets/img/xzb3.png' | relative_url }}" alt="Boat photo 3" loading="lazy" />
    </div>
  </div>
</div>

<style>
  .boat-project {
    display: flex;
    justify-content: center;
  }

  .boat-card {
    width: 100%;
    max-width: 760px;
    margin: 1.5rem auto;
    padding: 1.25rem 1.25rem 1.5rem;
    border: 1px solid var(--global-divider-color, #e0e0e0);
    border-radius: 14px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    background: var(--global-card-bg-color, #fff);
  }

  .boat-card-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 0.9rem;
  }

  .boat-title {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
  }

  .boat-date {
    display: inline-block;
    padding: 0.14em 0.7em;
    border-radius: 999px;
    background-color: rgba(23, 114, 208, 0.12);
    color: #1772d0;
    font-family: monospace;
    font-size: 0.8rem;
    font-weight: 700;
  }

  .boat-video {
    width: 100%;
    border-radius: 10px;
    display: block;
    background: #000;
  }

  .boat-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
    margin-top: 0.9rem;
  }

  .boat-gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 576px) {
    .boat-gallery {
      grid-template-columns: 1fr;
    }
  }
</style>
