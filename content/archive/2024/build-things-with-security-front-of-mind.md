---
title: Build things with security front of mind
description: Its time we build things with security in mind.
date: 2024-03-24
tags:
  - security
  - software
---

Its time we build things with security in mind.

This is a relatively new idea in the world of consumer software development; to build a product around security requirements, and to not back down when it gets challenging to work within the limitations that have been set.

Cybersecurity threats are everywhere. Unless you already do something programming / security / government / supply chain related or are an enthusiast in this space, you probably don’t give much thought into how the software you use is designed. You likely hear about data breaches and wonder if it impacts you.

The truth is, most consumer facing software is developed in what I believe is the completely wrong order. Currently the standard is to develop the software as cheaply as possible, then patch vulnerabilities when they inevitably come up. This is how I used to design my software, and it’s led to much personal headache and loss of user data.

## My personal experience
Years ago (2019) I released a gaming app for kids, as a safe way to download content for Minecraft. At the time, I was relatively new to developing software on a relatively large scale (500k downloads in the first two years), and had no clue about security, software supply chains, or anything related. The backend utilized a standard LAMP stack, and the frontend was written in Android’s dialect of Java.

This project was a perfect example of the sad state of consumer software design. It was released quickly to be able to capture market share from the upcoming COVID pandemic, and it was written with a standard tech stack that is still very popular today.

Eventually (it took a year) it was hacked due to a SQL injection vulnerability (of course!) and it was a particularly bad hack, because every user was sent a notification with a link to an adult porn website. Due to this, Google pulled the app from the play store and while I did re-release it later, I gave up for a while.

This was my first real adventure into the world of cybersecurity, and a constant reminder of what can go wrong if I follow current industry standards.

## Battle-tested software
Just like those who design military vehicles, software developers must also battle test our software as we’re building to ensure that when it ends up in the hands of end users (and adversaries) the virtual armor is not going to be destroyed before it even has a chance to do its job.

One way to do this is by releasing development builds to communities eager to break whatever you’ve made. With my project where I’m Building a programmatic search engine, I released it as a Tor hidden service (on the dark web) and shared it around{% sidenote "This is a fairly unique approach to securing consumer software, but it’s already proven successful where I’ve implemented it" %}. I had no idea what to expect, but within minutes the project started getting attacked, and I was able to take note of what worked, what didn’t, and what needed fixing. A week later I did another security release, analyzed the attacks, and and am in the process of fixing the issues that came up during the 12 hour test window.

As part of My programming journey I’m learning the Rust programming language, and this is the second part of my approach to building things with security front of mind. Rust enforces relatively safe programming practices (beyond just memory safety) at the compiler level, which forces the developer to consider their actions.

