---
title: The tragedy of Discord
description: Discord is possibly one of the internet's largest tragedies. Here's why.
date: 2024-01-05
tags:
  - privacy
  - sovereignty
---

Recently I’ve seen more and more communities utilizing Discord (the social chat app) as a means of organization and communication. It’s not just the big names either, it seems to be every community that isn’t privacy focused, as well as most “Web3” communities.

> Note: To help migrate users away from IRC, Discord chose to name their communities “servers”. Servers in this context are nothing more than folders where text files (which they call channels) are stored. It is impossible to host a Discord server on your own hardware.

## Discord is bad for the open web
You’ve probably heard someone complain about the LinkedIn authentication popups that require you to sign in to view content. The frustration you feel when you go to check on someones profile, only to be hit with a “sign up to LinkedIn” prompt is the same frustration I and others feel towards communities on Discord.

Instead of the answer to your problem existing on a forum that’s indexed by the major search engines, you spend hours digging around just to realize that the solution is buried deep inside of a community on Discord, and the only way to view it is to let them collect your data so you can join what should’ve been a public forum.

## Centralization
We put a huge emphasis on privacy and do not track the user or attempt to associate their queries with any identifiers like an IP or cookie. Both our clearnet and Tor mirrors run all logic on the backend, meaning no JavaScript or WASM on the frontend. The entire search engine has been designed with the idea that someday we may get a subpoena, and we want to confidently tell the lawyers that we collect only the absolute minimum required to operate and we don’t even store it on disk (memory-only).

We see no reason for Google, Bing, or others to store every search you make over the entire history of your account, unless they’re selling it to the CIA or something. Spooky!

## Absolutely proprietary
Despite the claims by the company that “Discord loves open-source” they in fact do not. Nothing about Discord is open source beyond some of the GPL licensed projects that they rely on for their own code. This doesn’t sound like a company that loves open source and wants to contribute back. This sounds like a company that loves open source because it makes their own development cheaper.

Those that have attempted to reverse engineer and re-implement the Discord technology stack in an open-source way have been hit with legal notices. Just look at what they did to Fosscord and other projects that are re-implementations of their specification.

## Server operators are powerless
As a server operator, you are powerless against the platform. You have no say in what features they decide to add or remove, and what other things they do. There have been instances where Discord have purposely made the platform worse for some users as an April Fools joke. Is that the kind of platform you want to rely on?

## Moderators have no say
When the company introduces new features, they are typically Nitro (their 10 dollar monthly subscription) exclusive, or severely limited unless you pay. To access some of these features, your community must be paying for Nitro in order to get “Boosts” which can be used to make your server significantly more useful to everyone. The main problem? This collectively costs 140 dollars per month for the highest tier, and it is on a per-server basis. Every server that wants a decent experience must expect their members to collectively cough up $140 a month.

## Moderators have no power
Unlike hosting your own community forum or Matrix server, you cannot ban a block of IPs that are used by adversaries to evade bans on Discord. Why? You do not own your server, the company does. The only one with power over your community is Discord themselves. This is a problem for server operators since Discord has very weak alt detection and ban evasion is trivial, as the checks happen client side.

Discord lulls you into a false sense of ownership and control, when in reality you own nothing beyond the branding of the server and the messages you send. Put bluntly, if Discord decides you don't make them enough money, or you mention alternative platforms, they can delete a community you've built over years and you can do nothing about it.

## Moderators have no privacy
Neither do their communities. For the communities that are intentionally private (meaning they have no public invite links), they also have no privacy. All it takes is one data breach or a misconfiguring of permissions, and your entire chat history including deleted messages is open to the world.

## End users are powerless as well
As an end user, you have no power or control over the platform. Just like server operators, you have no say in what features the company chooses to add or remove, and without using a custom client, you have no way to fix the intentionally bad design unless you pay for the Nitro monthly or yearly subscription.

## Users have no say
As a user of Discord, you have absolutely zero say in how the platform is run. In fact, the platform is designed to push users towards its Nitro subscription by restricting users who don’t pay, and imposing artificial limitations upon them.

A good example of this is themes. Users have been using tools like BetterDiscord to customize the look and feel of the platform. Some users do this for accessibility, although most do it because the default experience is just plain awful. What does Discord do in this case? They add themes for 10 dollars a month and start banning users who openly talk about their use of client modifications.

## Users have no power
You have no power or control over Discord, your data, or your account. You can’t even have the option to sue them unless you let them know and tell them your legal name and other personal information within a month of creating your account, regardless of if you actually plan to sue them, which is not something you should want to give a company that works with the Chinese government.

## Users have no privacy
You have no control or insight into how Discord uses your data. This should scare you, especially considering their investment and data sharing agreements with Tencent; a company with an awful track record regarding privacy.

Your DMs on Discord are not end-to-end encrypted, which means employ ees can read your messages. Their “trust and safety” employees are untrustworthy, and have been known to read the direct messages of their friends, as well as ban users entire accounts as a joke. Privacy and anonymity do not exist on Discord at all.

## The platform is a disaster
Discord compels users to follow their Terms Of Service by threatening to delete their accounts, but then never does anything about the outsiders who abuse the platform. This leads to a situation where consequences only apply to legitimate users who want to keep their accounts. Bots, spammers, and loggers can do whatever they want.
Funny how that works, isn't it.

## What makes this a tragedy?
People have willingly given up the freedoms and privacy that they had on IRC and Matrix to move towards a centralized platform that is hostile towards them, does not care about them, and actively exploits them for monetary benefit.

Instead of decentralized communities that are truly owned by their leaders / moderators, millions of people moved away from IRC and other decentralized offerings towards the flashy marketing and gamer aesthetic™. People have willingly given up freedoms and privacy for convenience and in the process they’ve also lost what made the early internet communities special; their sovereignty.

Discord does not care about you, despite the flashy marketing. Discord does not care about people with disabilities, despite their modern UI. Your privacy is an obstacle to their success. If you’re thinking about starting a Discord server, please consider an alternative such as self hosting Element, or if you must have the Discord UI and don't mind a strong liberal bias, Revolt is an open-source option that might work for you.