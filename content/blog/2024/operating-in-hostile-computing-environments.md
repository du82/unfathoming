---
title: Operating in hostile computing environments
date: 2024-06-28
tags:
  - security
  - musing
---

{% callout "quote", "Given a restrictive computing environment, it is reasonable to assume that a bored end user will seek or create some semblance of freedom within." %}

Ever since graduating high school, I've thought a lot about what's possible within restrictive computing environments, and I've been the type to go as far as to discover new vulnerabilities in well known software so I can play video games on devices that I shouldn't be able to.

Let's assume the adversary is particularly litigious, making privilege escalation a risky maneuver. Let's also assume the device has access to most of the internet, besides a few NSFW sites What can be done within the boundaries? Quite a lot actually.

## WebViews
The first thing that probably comes to mind is web browsers, or more specifically WebViews. Everything from a printer to a Nintendo Switch has one, and the web is a very versatile tool.

This is usually my favorite course of action; get into a webview and from there I can connect to the web GUI of my Proxmox VE instance hosted at home to access a full Linux-based OS that is actually mine.
