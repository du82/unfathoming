---
title: My attempt to daily drive Qubes OS
date: 2024-05-01
tags:
  - privacy
  - security
  - learning
  - evergreen
---
As a cybersecurity researcher who has found myself in the crosshairs of various foreign state actors, I've recently made the switch to [Qubes OS](https://qubes-os.org). This operating system, built around the concept of security through isolation using virtual machines, aligns perfectly with my love for virtualization and my need for excellent security.

My work in cybersecurity often involves researching sensitive topics (like the complex politics in China) that can attract unwanted attention. Historically, my security measures haven't been as robust as they should be, given the nature of my research. Qubes OS presented itself as an ideal solution to my China problem, and offered practical usability and containerization.

One of the features that makes Qubes OS stand out is its seamless integration of VM windows within the host environment. Unlike traditional VMs where windows are confined to a single guest display, Qubes allows windows from different VMs to coexist side by side. This design choice has many practical applications for me, primarily being able to isolate each area of research into its own VM.

My requirements include:
* Signal messenger
* Monero GUI wallet
* VS Code or Lapce editor
* A variety of programming languages
* All of my scripts must run just fine
* Tor (service) and Tor Browser - both included

---
## Update #1 - 03 May
I've spent some time with Qubes now, and all of my requirements have been met. The only thing that doesn't quite work is voice calling on Signal. I'm writing this blog post on Qubes, and it's working great so far.

I like Qubes so much that I decided to buy dedicated hardware for it, since the 16gb of memory in my current laptop just doesn't quite cut it, and the performance of a laptop is significantly less than that of a desktop. The new system has 32gb of memory with the option to upgrade to 64 later on, as well as
