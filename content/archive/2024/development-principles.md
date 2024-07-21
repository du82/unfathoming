---
title: My software development principles
date: 2020-07-20
banner:
tags:
  - design
  - development
  - learning
draft: true
---
Since many people have asked about the unconventional ways in which I design software, I thought I'd share my list of software development principles and why I pick them.

## Minimal dependencies = decreased attack surface
- Reduces potential vulnerabilities introduced by third-party code
- Simplifies maintenance and updates
- Improves overall security posture
- Easier to audit and understand the entire codebase
- You're not completely screwed when someone stops maintaining something 5 layers deep.

## Zero JS or PHP. Fuckin ew!
- Avoids common security pitfalls associated with these languages
- Potentially improves performance, especially on low-end devices
- Forces focus on server-side rendering and progressive enhancement
- Consider alternative technologies like Rust, Go, or static site generators

## Analytics are only to be used to prevent bots. Open source analytics provider must be chosen if one is selected.
- Respects user privacy by limiting data collection
- Focuses on security rather than marketing or user tracking
- Open source options ensure transparency and auditability

## No connections to third party providers (except bot logger), especially social media sites
- Enhances user privacy by not sharing data with external entities
- Reduces potential for cross-site tracking
- Improves load times by eliminating external requests
- Maintains full control over the user experience

## MUST work on Tor's strictest settings with all cookies and scripts blocked
- Ensures maximum accessibility for privacy-conscious users
- Forces development of robust, JavaScript-free solutions
- Improves overall security by designing for the most restrictive environments
- Potentially improves performance on low-bandwidth connections