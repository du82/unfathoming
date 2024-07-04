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

Chinese is a uniquely complex language. There are currently 8105 汉字 (hanzi) which I'll refer to as glyphs for simplicity sake.