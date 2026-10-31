---
title: "DreamersKit: AR video memories (proof of concept)"
summary: "Point a phone at a printed photo and its linked video plays on top, in the browser. SIFT + RANSAC recognition, MindAR tracking."
period: "Oct 2026"
stack:
  - FastAPI
  - OpenCV (SIFT + RANSAC)
  - React + Vite
  - MindAR
  - three.js
order: 3
---

Customers open one common `/scan` link and point the camera at any photo in their printed book. Every ~0.4 s the player posts a camera frame to the backend, which matches SIFT features with a ratio test and a RANSAC homography against every stored memory; a memory only counts if at least 25 matched points agree on one flat-photo perspective, which keeps random matches out. The player then loads only that memory's MindAR target, tracks the photo, and plays the video as a three.js texture on a plane sized and cropped to the photo. It plays when the photo is found and pauses when it is lost.

The admin app creates a memory from a video and a photo, compiles the MindAR target in the browser, rejects photos with too little detail (fewer than 150 features) or that already match an existing memory, and prints the photo with the scan QR code. Written up with its PoC limits: recognition is linear in the number of memories (about 1 ms each), so production would shortlist with an image-embedding index before the geometric check and scope recognition per book.
