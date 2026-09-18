---
title: "I-nstein Geospatial Flight Simulator"
order: 30
tags: ["VR", "Geospatial", "Aviation", "Simulation"]
studio: "I-nstein"
platform: "PC / PCVR"
image: "/images/card-instein-flight.webp"
summary: "A custom UE5 flight simulator for the I-nstein geospatial platform: plan a flight path anywhere in the world in the web app, then fly it over Cesium terrain on PC or in PCVR."
details: "Built for I-nstein's geospatial intelligence platform. Flights are planned in the I-nstein web app, anywhere on Earth, and the UE5 system pulls them in through the API and flies the route over real-world Cesium terrain with a live HUD showing speed, heading, altitude above sea level and above ground, and the next waypoint. It runs on PC or in PCVR, with multiple points of view (cockpit seat, under the helicopter, aerial eye view) and extra objects placed along the route, all configured from the API side. The whole system was custom built in Unreal Engine 5."
role: "Unreal Engine 5 Developer"
stack: "Unreal Engine 5, C++, Cesium for Unreal, I-nstein API"
video: "https://www.youtube.com/embed/Y3ZkkJLdagU?list=PLqxzRIkyj17scuqjRUMaARfaSWZH7mpeU&rel=0"
links:
  - label: "Demo playlist"
    href: "https://www.youtube.com/watch?v=Y3ZkkJLdagU&list=PLqxzRIkyj17scuqjRUMaARfaSWZH7mpeU"
  - label: "I-nstein"
    href: "https://www.i-nstein.app/"
---

## What it does

- Reads flight plans from the I-nstein web app API: waypoints, points of view, and objects to place along the route are all set up on the web side, nothing hand-authored in the engine
- Flies the route over Cesium world terrain, so any location on Earth works without custom environment work
- Live flight HUD: speed, heading, altitude ASL and AGL, target waypoint coordinates
- Multiple points of view: cockpit seat, under the helicopter, aerial eye view
- PC and PCVR from the same build

## Under the hood

- Entire system custom built in Unreal Engine 5, with Cesium for Unreal providing the world scale and terrain
- API integration layer between the I-nstein web app and the simulation, so a flight defined in the browser is flyable in the engine
