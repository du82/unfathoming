---
title: Embracing Monero as banks betray our privacy
date: 2024-07-02
tags:
  - privacy
  - surveillance
---
Many people have asked me why I use Monero and care so much about privacy, so here's my answer.

Most traditional banks are not just storing your money; they're harvesting some of the most sensitive data about you. Every transaction you make paints a picture of your life - your habits, your preferences, your politics, and more than you could ever imagine. Banks coordinate with insurance companies and advertising agencies to analyze our transaction data in search of ways to charge us more or manipulate our buying behavior.

The Fourth Amendment protects Americans from unreasonable searches by the government, yet most people roll over and give up when private entities essentially conduct invasive searches of their financial lives. They treat it as part of the cost of doing business in modern America, or they believe it is necessary for fraud prevention.

While proponents argue that financial surveillance *can* help prevent fraud, this benefit is vastly outweighed by what I call the "assumed consent" model, where agreements from decades ago are used to assume consent into new privacy-invading initiatives{% sidenote "You were okay with this one thing, you'll surely be okay with this other thing, so lets bury it on page 43 in a font so small you need a microscope to read it!" %}. The current banking system actively works to squeeze every bit of value from your personal data, sharing it with insurance companies, tech giants, and advertisers.

Monero offers an alternative to this invasive and exploitative assumed consent model. Its privacy-focused design ensures that financial transactions aren't shared with the highest bidders. It's not about having something to hide{% sidenote "The goal isn't to hide for fraudulant purposes, it's to maintain control over who can view what, while keeping advertisers, data brokers, and insurance companies out." %}; it's about maintaining the basic right to privacy in an increasingly invasive digital world. It's a way to voice disapproval of the surveillance capitalism model which most banks and financial institutions are engaged in.

## The tangibility of surveillance capitalism
Consider this scenario: you spot an interesting product advertisement online and decide to make a purchase{% sidenote "Apparently this is more common than I thought. I've always blocked ads, so I've never had this experience." %}. A day later, you become inundated with ads for similar items. This targeted approach isn't just about meeting your needs, it's a calculated effort to shape your consumer behavior, potentially leading you to make additional, unnecessary purchases.

{% dropdown "Personal experience", "<p>As another example that has directly impacted me, I often find myself in situations where I need to use mobile hotspot, typically while traveling. On top of unlimited data, Verizon tries to charge a $10 monthly subscription for mobile data. As a user of GrapheneOS, I have the ability to block the response to the ping that looks for hotspot usage, forcing the phone to report that the hotspot wasn't used, which prevents the additional charge on top of unlimited data.</p><p>While my situation isn't directly related to banking, it opened my eyes to the tangibility of surveillance capitalism and how it gets average people to spend extra on things that should be included in the cost of the basic service.</p>" %}

## What makes Monero great?
Monero correctly implements{% sidenote "Zcash does not correctly implement these in its current form." %} three key technologies: Perfect Forward Secrecy (PFS), Perfect Concurrent Secrecy (PCS), and ring signatures{% sidenote "PFS and PCS are technologies that make encrypted messaging apps like Signal secure against man in the middle attacks." %}. PFS ensures that even if a private key is compromised in the future, past transactions remain secure. PCS takes this a step further by protecting current and future transactions as well. Ring signatures allow a user to sign a transaction on behalf of a group, effectively hiding the true sender among a set of possible participants.

This creates a layer of plausible deniability, making it nearly impossible to trace transactions back to their origin. Unlike [surveillance coins](/archive/2024/the-bitcoiners-were-wrong), Monero obscures transaction amounts, sender and receiver addresses, and the transaction history, providing users with a level of financial privacy that closely mirrors cash transactions in the physical world.

| Feature    | Bitcoin        | Ethereum     | Monero      | Wire Transfer     |
| ---------- | -------------- | ------------ | ----------- | ----------------- |
| Speed      | 10-120 minutes | 6-10 minutes | 1-3 minutes | 1-5 business days |
| Cost       | $1-10          | $1-20        | $0.01-$0.16 | $25-50            |
| Efficiency | Moderate       | High         | Very High   | Low               |

## Challenges and considerations
Most governments aren't too pleased with the privacy that Monero offers, and as a result of that, it's become increasingly difficult to obtain the coin{% sidenote "Ever since the shutdown of LocalMonero, I've switched to peer-to-peer trades despite the risks." %}, as it's been delisted from all major exchanges. This difficulty in obtaining and trading has led to a situation where there's much demand and little supply.

Another thing to consider is that you may attract [unwanted attention](https://www.justice.gov/opa/pr/man-convicted-violent-home-invasion-robberies-steal-cryptocurrency) from a variety of adversaries despite using the coins lawfully. Consider storing Monero (or any other crypto) equivalent to storing the same value in cash, and protect yourself the way you would if it were cash. I recommend getting a hardware wallet.