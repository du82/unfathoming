---
title: My review of the private messaging ecosystem
description: Here's what I think about the current state of encrypted messaging.
date: 2024-05-15
tags:
  - privacy
  - security
  - software
---

> Commentary: I have considered lots of factors, including reviewing the latest data from the privacy spredsheet, but the content in this post is opinion, not fact.

I've been watching the state of private messaging for years, and have seen new companies enter with fresh ideas, which makes me excited to try out their products. I've used just about every private messenger out there, and here's my review of them.

## Element
I like Element, but their encryption has me wary of using it for anything sensitive because they've had a few critical vulnerabilities in their rust crypto implementation.

Other than that, it's a great discord-like platform, especially since you can self-host the whole thing and run your own community without having to follow any terms of service. They recently did a rewrite of their mobile apps and they look amazing. The web/desktop app is still a bloated JavaScript mess that feels disjointed. They could really use a native rewrite of the desktop app using something like QT.

## Signal
I'm a longtime user of Signal, and I've seen it get worse over the years with bugs, calls dropping, and messages never sending. With the update that brought usernames, they seemed to fix a lot of that, and it works well for my needs. The Mobilecoin rugpull was disappointing, especially considering they allow you to disable stories but not crypto features{% sidenote "Please Signal, if you're reading this, allow us to get rid of the crypto features like you did for stories.", "note1" %}. They should've gone with Monero.

## SimpleX Chat
This is the one I'm most hopeful for, due to its innovative lack of identifiers for users. I've reviewed some of the code, as well as the designs, and while the app UI is quite ugly, the rest of it is excellent. It also has a 1GB per file upload limit, and it's quite fast to transfer files as well. I think this one will succeed, since it's also got mostly-functional large group support (it breaks around 600 members).

I like the fact that it doesn't rely on DNS for user identifiers, which boosts resiliency against censorship. This also removes the problem of bots picking up the best usernames and reselling them for 500x their listing price.

## Status
I waited years for Status. I don't like how crypto is forced on users. Couldn't we have gotten a standalone messenger and been fine without the crypto integrations? It's not even Monero, it's a surveillance coin (ethereum). Their UI framework is top notch, but the way they executed on the mobile app is... questionable... and not the easiest to use.

Status touts "true ownership and self sovereignty" above all else. That's great, until you realize that you cannot export your account data for a backup which would be real ownership. The whole app also relies on the Waku network, which has limitations so severe that I can't use the app for anything useful. Seriously, 1MB per file, and only horribly compressed images allowed?

The metadata protection is great, until you use wireshark to analyze the app and you find out that it's connecting to about a dozen crypto providers, bittorrent.com (which is an advertiser nowadays), and a bunch of the company's own servers.

Back on the topic of true ownership, if I can't self-host it on an airgapped network, I don't consider it true ownership. Showing off that I have some stupid .eth name or a picture of a poorly drawn monkey does not prove ownership, but being able to run the app myself on my LAN, as well as modify the code does.

## Telegram
I feel gross calling this a private messenger, but it has optional, off-by-default, poorly implemented end-to-end encryption that only works on one-to-one chats, so I'll include it.

Ever since they introduced Telegram Premium, the app has become awful to use. Half of the features are paid, and many free features are now behind the paywall. It feels desperate and it's sad to see a decent (but bloated) messenger with useful features become an advertisement for their premium stuff.

They've also gotten in on the crypto hype with TON coin, their crypto which (like most crypto projects) is a solution in search of a problem. You can buy usernames with it and that's about it. Just more bloat in an already bloated messenger.

## WhatsApp
This is the one I've used least out of them all. They recently overhauled it with AI integrations in places that are quite odd and very inappropriate for a messenger that advertises itself as private, but what can you expect from Facebook?
