---
title: Some interesting Matrix data
date: 2024-07-03
draft: false
---
I was recently analyzing network traffic on my communications network to see if a campaign against attacks was beneficial in the first part of March. From that, I realized that out of 15,497 servers, the campaign made a noticeable impact on the frequency and type of attack.

I thought that some of you might be interested to visually see what attacks from state actors look like on an encrypted communications network, so I have compiled a variety of graphs from various data sources within my network and what follows is a series of graphs along with explanations as to why this data is important, what I've learned from it. Here's some interesting data I thought I'd share.

## Cyberattacks rendered based on peer-to-peer disconnections
{% image "g4.png", "Matrix disconnections based on TLD" %}
{% dropdown "Total failures for top 5 TLDs", "<pre>
com    1616.0
de     1126.0
net    1007.0
org     826.0
xyz     635.0</pre>" %}
{% dropdown "Percentage change in failures (last 4 weeks vs previous 4 weeks)", "<pre>
com   -100.000000
de     -75.000000
net    -81.818182
org    -50.000000
xyz    -57.142857</pre>" %}

## TLD distribution (censorship resistance)
The chart below shows *why* Matrix is the best protocol for censorship resistant communication. The ability to shut down over 15000 domains from different regions of the world under different governments is an impossible task.

{% image "g6.png", "Top 20 TLDs: Count and Percentage" %}
