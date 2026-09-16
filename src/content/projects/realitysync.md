---
title: "RealitySync Point Cloud Experiences"
order: 20
featured: false
tags: ["Digital Twin", "Geospatial", "Simulation"]
studio: "Preference Consulting"
platform: "PC"
image: "/images/card-realitysync-heritage.png"
summary: "Two UE5 experiences built on RealitySync point-cloud scans: a flying tour of a heritage site, and a live-CCTV digital twin of a school, with Cesium filling in the surroundings."
details: "Two implementations of RealitySync scans, both built in Unreal Engine 5 with Cesium tiles filling the world around the captured areas. The first turns a scanned heritage site into a flying mini-game, deployed on site at the location itself: you glide around as a bird, collecting markers while being told about each part of the site. The second is a security view of a school, where the point-cloud map is the backdrop for live CCTV feeds decoded through FFmpeg — jump between cameras or move freely around the map to see each location in context. Point-cloud maps are GPU hogs, so a big part of the work was optimizing the scenes to run smoothly."
role: "Unreal Engine 5 Developer"
stack: "Unreal Engine 5, Cesium for Unreal, FFmpeg"
links:
  - label: "RealitySync"
    href: "https://preferenceconsulting.com/realitysync/"
---

## Heritage site flyover

- Flying mini-game through the scanned site: glide around as a bird, collect markers, and learn about each part of the location as you reach it
- Guided-tour flow layered on top of the raw scan, so the space explains itself
- Deployed on site, running at the heritage location for visitors

## School CCTV digital twin

- Live camera feeds decoded with FFmpeg and placed inside the point-cloud map at each camera's real position
- Switch between cameras, or move freely around the map to see each feed in context

![Live CCTV feed placed inside the school's point-cloud map](/images/realitysync-cctv.png)

## Under the hood

- Cesium tiles fill in the surroundings beyond the scanned areas
- Heavy scene optimization to keep the point-cloud maps running smoothly on the GPU
- Scanning done by RealitySync; my work was the UE5 implementation
