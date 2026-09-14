---
title: "Never Board"
order: 2
period: "2021"
tags: ["VR", "Multiplayer"]
image: "/images/card-neverboard.png"
summary: "A social space to play tabletop board games with friends in VR, shipped on Oculus Quest."
details: "Never Board is a social VR space for playing a wide range of board games with friends and loved ones, released on Oculus Quest in fall 2021 with Evernever Games."
role: "VR technical game designer — prototyping, data-oriented programming, and VR-specific engine tooling."
stack: "Unreal Engine 4, Visual Scripting"
video: "https://www.youtube.com/embed/ufWb2RdMfzM?rel=0"
links:
  - label: "Official trailer"
    href: "https://www.youtube.com/watch?v=ufWb2RdMfzM"
  - label: "Studio site"
    href: "https://www.evernevergames.com/games"
---

Everything below this line is optional — write whatever you want here and it
shows up as a formatted "Technical notes" section in the project's detail
view. Delete this whole body if a project doesn't need it.

## Board prototyping pipeline

Boards were authored as simple data assets rather than hand-placed geometry,
so new game variants could be iterated on without touching Blueprint or C++.

- Data-oriented board/piece definitions
- Shared interaction layer across all board types
- VR-specific grab/place tuning per piece size
