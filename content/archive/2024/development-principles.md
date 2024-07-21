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

First, I think it's important to share *why* I design software in the first place. Unlike most people who are motivated by money, I design software because I think better alternatives to the status quo *can* exist. This is fundamentally different from the doomer mentality in that I try to go beyond worrying and create something the way I see fit.

## Minimal dependencies = decreased attack surface
This is a fairly straightforward concept; the more third-party code inside of your project, greater the chance of a vulnerability. It also comes with other benefits, like the reduction of dependency hell, and increased longevity. I've found that the more code I write myself, the longer the project I'm working on will last and the more stable it will be.

## Zero JS or PHP. Fuckin' ew!
If there's something so important that it needs to run on *my* machine, why don't you run it on your server and give me its results when you're done processing whatever it is? I get that some fun effects rely on JavaScript, but are they really necessary?

As for PHP, we're not in 1995, its currently {{ year }}, you can do better, I know you can. Give Rust or Go a try please. They'll save you a security headache.

## Analytics can be good if done right
This is somewhat of a controversial one, but analytics *can* be a good thing if implemented correctly, being careful to select a provider that is both open-source **and** privacy respecting. Analytics can offer useful insight, especially when dealing with bots.

## No connections to third party providers (except bot logger), especially social media sites
You don't need Google Fonts. Please re-host the fonts on your own server or find a free CDN, there's a dozen out there that are more private than Google services. This is mainly an issue of tracking, but it can also improve load time consistency since there'll only be one server to make requests to, not a dozen or so servers.

This also allows you to maintain full control over the user experience and reduce dependance on third-party providers that may change or remove things without your knowledge or consent. 

## MUST work on Tor's strictest settings with all cookies and scripts blocked
As someone who regulary uses Tor, I try to design my sites to last