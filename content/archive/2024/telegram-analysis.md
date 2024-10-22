---
title: "Telegram's Design: An In-Depth Analysis"
description: This analysis delves into the design philosophy behind Telegram, exploring how the messaging app elegantly balances simplicity with powerful features.
date: 2024-07-29
tags:
  - analysis
  - design
banner: telegram.png
draft: false
---
Telegram is a messsaging app that was founded in 2013 by Nikolai and Pavel Durov. It's become a phenomenon in most of the world, with 950 million monthly active users. What I think is most interesting about it is its simple and intutitive, yet powerful design.

## User interface
The user interface of Telegram is like that of most other messengers; a simple list of chats that can be opened to show a timeline of messages. What fascinates me about the design is how it elegantly conceals complex actions behind an ordinary chat interface. For example, the ability to send a message to yourself is hidden behind the "Saved Messages" chat, which you won't see until the first time you try to forward a message. This is a feature that I use often, but it's not something that I need to see all the time.

Another feature that's commonly overlooked is the ability to utilize bots to automate tasks. This isn't groundbreaking for a messaging app, almost all messaging apps have an SDK for automated interaction. The difference is that Telegram has a large community of developers that have created bots for almost every use case imaginable, and the company has made it easy to find and interact with these bots. The thing that makes Telegram bots even more special is their ability to display in-line UI elements such as buttons and images. This makes the bots feel more deeply integrated and more akin to a control panel of sorts rather than a pre-programmed set of `/commands` to be typed by the user, which reduces friction.

## Features and functionality
Telegram has evolved far beyond a simple messaging app, steadily transforming itself into what's known as a "superapp"{% sidenote "Most apps seem to be doing this nowadays, and Telegram has followed in WeChat's footsteps, with a focus on bots and more recently mini-programs." %} - a single application that houses a multitude of diverse functions. This strategic expansion has resulted in a rich ecosystem of features within Telegram's app, including:

* **Communication:** Traditional messaging capabilities such as voice and video calling, group chat, and public channels for broader content distribution.
* **Multimedia:** An array of deeply integrated tools including a photo editor, video and music players, voice recorder, and robust file management system.
* **Social Platform:** A diverse range of engagement features such as an extensive bot ecosystem, customizable sticker collections, GIF support, location sharing, and interactive polls.
* **Productivity and Entertainment Center:** A well thought out mixture of practical and leisure functionalities, from contact sharing and in-app games to an innovative payment processing system.

## Security and privacy
Telegram has a checkered history with security and privacy. The app has been rightfully criticized for its use of custom-built cryptography{% sidenote "Generally, it is better to use established cryptographic frameworks instead of rolling your own cryptography." %} and its cooperation with authoritarian regimes{% sidenote "See: [India](https://techcrunch.com/2022/11/29/telegram-shares-data-of-users-accused-of-copyright-violation-following-court-order/), [Russia](https://www.reuters.com/world/europe/navalny-allies-accuse-telegram-censorship-russian-election-2021-09-18/)" %}. Telegram has end-to-end encryption, but it is severely limited in scope and only available in secret chats. The app has also been criticized for its lack of transparency and accountability in handling user data.

The privacy benefits of Telegram over something like Discord are clear, but the app is not without its flaws. The app is not transparent with its data collection and storage policies{% sidenote "It's believed that Telegram does not ever delete user data, although this is unconfirmed." %}, but it is generally considered to be more private due to the fact that it does not use any of the existing cloud providers which are susceptible to government-issued subpoenas{% sidenote "I set up my platform in a similar manner for the same reasons." %}. Still, if you're looking for a truly private messaging app, you should look elsewhere.

{% dropdown "Personal experience", "My personal experience with Telegram has been less than ideal. I've had multiple accounts hacked, used for malicious activity (usually scamming), then deleted. I've even had users export messages for all chats and approve the request to export data despite not having access to my physical phone. Especially since Telegram has very limited end-to-end encryption, this is very concerning." %}

## Cross-platform experience
This is where Telegram truly excels, for the wrong reasons. Due to the lack of end-to-end encryption on most messages, there are no sync or encryption issues between devices. This is contrary to apps like [Signal](/archive/2024/signal-analysis) and [SimpleX Chat](/archive/2024/simplex-analysis), which have to deal with the complexities of end-to-end encryption. Telegram's lack of encryption is a double-edged sword, as it allows for a seamless cross-platform experience but also leaves users at the mercy of the Telegram company and their refusal to comply with government requests for user data.

## Customization
This is one of the more interesting aspects of Telegram. The app is highly customizable, with a wide range of themes, stickers{% sidenote "Many stickers are animated and double-width. This alone isn't a problem, but in public channels they are used excessively, which ruins the user experience." %}, and bots available to users. This level of customization is rare in messaging apps, and it's one of the more notable reasons why Telegram has such a dedicated user base. Other apps like [Discord](/archive/2024/the-tragedy-of-discord) have a set experience that can't be changed without custom clients, but Telegram allows users to change almost every aspect of the app. If you aren't happy with the default experience, you can even create your own client{% sidenote "The Telegram apps are all open-source under the GPLv3 license." %} using the Telegram API.

## Performance

## Comparison with competitors
Telegram generally has far more features than apps like Signal, WhatsApp, and SimpleX Chat. This is both a blessing and a curse, as it allows for a more feature-rich experience but also makes the app more complex for those who wish to take advantage of all of its features. Telegram tends to innovate faster, but many of its new features are behind the *Telegram Premium* paywall, which is a subscription service that unlocks additional features and removes advertising from public channels.

## User experience

## Paid features
Telegram has added paid features to help subsidize cost of operation, and according to Pavel Durov, the company is already profitible. This is interesting to me considering their subscription is $2.99 USD, far cheaper than the competition (Discord)'s offerings.

The Premium subscription feels like extortion. Lots of previously free features were put behind the paywall{% sidenote "The company also sneakily removed the mentions of the app being completely free in the marketing materials." %} and are nolonger accessible to free users, now taking them to a page advertising the benefits of Premium.

## Future design directions
Telegram is focusing heavily on becoming a superapp. This is clear from the company's recent moves, such as the introduction of mini-programs and the expansion of the bot ecosystem to integrate with mini-programs. The company is also working on integrating more features into the app, such as a payment processing system and a more robust file management system.

## Conclusion
