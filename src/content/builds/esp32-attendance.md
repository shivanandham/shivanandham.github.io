---
title: "Biometric attendance terminal on ESP32"
summary: "A fingerprint attendance device with server-driven enrolment and rollback and per-company device keys, wired to a multi-tenant employee-management API."
period: "Mar – Apr 2025"
stack:
  - ESP32
  - C++ / PlatformIO
  - Ruby on Rails 8
order: 4
---

A fingerprint terminal built on an ESP32 in C++ with PlatformIO, talking to a multi-tenant employee-management API on Rails 8. Enrolment is driven from the server and can be rolled back, and each device authenticates with a per-company key.
