---
title: The Chinese keyboard problem
date: 2024-07-03
tags:
  - privacy
  - security
  - surveillance
  - china
draft: false
---
In the digital age, the keyboards on our phones serve as the primary interface between our thoughts and the online world. For Chinese speakers, this interface comes with a hidden cost. Every known proprietary Chinese input method monitors user behavior, and without reasonably useful open source offerings, users are forced to self-censor to avoid detection.

For those who don't know what makes a Chinese keyboard different from a regular QWERTY keyboard (they use the same layout), most Chinese keyboard software includes a PinYin input method editor that attempts to figure out the best glyph for the latin letters typed.

{% dropdown "How Pinyin input method editors work", "<ol>
  <li><strong>Input parsing:</strong> The system breaks down the Pinyin input into syllables.</li>
  <li><strong>Character matching:</strong> For each syllable, the system identifies all possible matching Chinese characters.</li>
  <li><strong>Contextual analysis:</strong> The interpreter examines the surrounding context, including previously entered characters and partial phrases.</li>
  <li><strong>Frequency analysis:</strong> Common words and phrases are given higher priority based on usage statistics.</li>
  <li><strong>User history:</strong> The system considers the user's past choices and typing patterns.</li>
  <li><strong>Predictive modeling:</strong> Machine learning algorithms predict the most likely character or word combinations based on all available data.</li>
  <li><strong>Ranking and display:</strong> The system presents a ranked list of potential character combinations, with the most likely options appearing first.</li>
  <li><strong>Dynamic updating:</strong> As the user continues typing or selects characters, the predictions are continuously refined.</li>
</ol>" %}

Chinese is a uniquely complex language. There are currently 8105 汉字 (hanzi) which I'll refer to as glyphs for simplicity sake. The ability to turn something like "nihao" into "你好" is surprisingly difficult to implement correctly and effiecently. This has led to a problem where only sufficiently resourced organizations have taken on the task of developing and implementing such algorithms.

The fundamental technology required to communicate effectively on Android devices is gate kept by three large organizations, namely, Alibaba, Tencent, and Huawei. Like every large technology company in the world, these three hand over all data about a user at the request of the government.

## One-sided surveillance
[Every word](https://citizenlab.ca/2023/08/vulnerabilities-in-sogou-keyboard-encryption/) that is typed or spoken into the keyboards developed by the three companies listed above is transmitted back to those companies for processing{% sidenote "This is not unique to Chinese apps. Gboard and SwiftKey also do the same thing." %} by opaque neural networks that look for patterns of potential banned phrases. If that wasn't bad enough, these keyboard apps have also been used to sidestep end-to-end encryption in apps like Signal and Element, allowing authorities to view conversations from one perspective and make life-changing decisions without having the whole story.

*Who is watching the watchers?*

## Self-censorship
This is a very real problem in China{% sidenote "Also in the West with netizens saying things like unalive instead of kill to keep advertising revenue." %} which is partially caused by the keyboard. If everything you ever type will be analyzed, and there's no easy open-source alternative, you will most certainly censor yourself to keep the machine happy and stay under the radar.

## Workarounds
Currently there's not many workarounds that are viable for long-term use. Trime on Android is the closest option, but the barrier to entry is still much higher than tapping install and having it immediately available. Currently Trime requires you to install LibRime on Linux and extract the dictionary files required to do the automatic suggestions.