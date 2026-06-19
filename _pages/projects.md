---
layout: page
title: projects
permalink: /projects/
description: Selected project.
nav: true
nav_order: 3
---

<div class="boat-project">
  <div class="boat-card">
    <div class="boat-card-header">
      <h2 class="boat-title">Physical Embodiment in Embodied AI</h2>
    </div>

    <div class="boat-meta">
      <span class="boat-date">2022</span>
    </div>

    <div class="boat-desc">
      <p>
        <strong>Physical Prototyping &amp; Sim-to-Real Design:</strong> Led the end-to-end hardware-software co-design of a Remotely Operated
        Vehicle (ROV), achieving 100% 3D-printed fabrication and comprehensive hull structure simulation to effectively bridge the sim-to-real
        gap for embodied robotic systems.
      </p>
      <p>
        <strong>Edge Perception:</strong> Deployed real-time YOLO on Raspberry Pi, enabling low-latency visual awareness for autonomous
        interaction.
      </p>
    </div>

    <video
      class="boat-video"
      controls
      muted
      loop
      playsinline
      preload="metadata"
      poster="{{ '/assets/img/xzb.jpg' | relative_url }}"
    >
      <source src="{{ '/assets/video/xzb.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="boat-gallery">
      <img src="{{ '/assets/img/xzb.jpg' | relative_url }}" alt="Boat photo 1" loading="lazy" />
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
    margin-bottom: 0.4rem;
  }

  .boat-title {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
  }

  .boat-meta {
    border-top: 1px solid var(--global-divider-color, #e0e0e0);
    text-align: right;
    padding-top: 0.3rem;
    margin: 0 0 1rem;
  }

  .boat-date {
    font-family: monospace;
    font-size: 0.85rem;
    font-weight: 700;
    color: #1772d0;
  }

  .boat-desc {
    margin-bottom: 1rem;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .boat-desc p {
    margin: 0 0 0.6rem;
  }

  .boat-desc p:last-child {
    margin-bottom: 0;
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
