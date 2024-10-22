---
title: The new site design
date: 2024-06-25
tags:
  - software
  - development
  - design
---
Welcome to the new Unfathoming. I've gone through three notable iterations of the site now, first on [quartz]() by Jacky Zhao, second entirely static, with me manually writing HTML for every single page (and dealing with the consequences of trying to keep 50+ pages looking consistent), and thirdly (hopefully finally) what you're looking at right now.

## User interface & user experience
I want my site design to be timeless, consistent, accessible, and work well on all types of content, from super serious topics like privacy to relaxed topics like how I found my cat. It doesn't need to be boring, but it does need to be a stable design.

My usual style has all the rounded corners, drop shadows, and fancy stuff you see on most modern sites, but within 10 years my usual design style will feel stale and outdated, which is fine because the products can evolve, but I want my personal website to stay the same, so it requires a design that will look good in 50 years.

## Architecture
The new site is written with the [Eleventy](https://11ty.dev) static site generator because it's super simple with few dependencies and it is something I could learn in a [morning before sunrise](/archive/2024/a-rainy-saturday-morning).

{% image "g2.png", "diagram showing the workflow from source code to website" %}

While most people use WordPress, I hate how long simple actions take. Even just loading a page can take a long time, and I didn't want to deal with the security nightmare of WordPress either. I've operated WP sites in the past, and every single one of them was compromised in some form or another, despite having what I thought was above average security. I guess that's just part of the PHP plague.

Something interesting about the site is that if I want to show the graph above, I type out the following:

```js
{.% image "g2.png" %.}
```

and it knows to pull the rendered and optimized image from `/assets/graphs/g2.png`. How? It looks for the first letter `g` and knows that's associated with a graph, then looks at the number to determine which numbered graph to use, and the file extension is there to tell it which to render the final output in. I could've just as easily made it say `png2` or something else, but I like how natural it feels. `g2.png` isn't actually the name of the file, its a way of locating and displaying the file.

## No JavaScript (almost)
The site has no javascript. Well, it does have one tracking thing from CloudFlare, but its not necessary and only helps me figure out how AI scrapers are getting around the firewall.

## Sidenotes
One of the key features of the new design is the use of sidenotes{% sidenote "Gwern did a [good article](https://gwern.net/sidenote) on sidenotes in web design." %}. These interactive notes provide additional context, commentary, a definition or clarification for a technical term, or to include a related fact or statistic that supports the main text without disrupting the flow or forcing the user to break their current context by scrolling to the bottom to read a footnote.

My implementation of sidenotes is purely CSS, in-line with the requirement of having no JS on the site. I've gone with the `<span>` method of sidenotes, which I believe to be superior due to the ease of reading by screen readers and archival software.

## Callouts
Callouts (also known as callout cards) are also added as a way to draw attention to something specific. Eleventy doesn't support sidenotes or callout cards by default but it was very simple to implement them.
{% callout "info", "I'm a callout card!" %}

## Inspiration
Inspiration for the design of this website comes from [Trilema](http://trilema.com), [Wesley’s Notebook](https://notebook.wesleyac.com/), [Jeff Huang](https://jeffhuang.com/), [Gwern](https://gwern.net), [were](http://werc.cat-v.org/), [The Gameshelf](http://gameshelf.jmac.org/), with thanks to [Corey Petty](https://x.com/corpetty) for the encouragement in starting and continuing the site.

## What else
I'm not sure yet, it's still in development, but this is what has been added on the third revision of the site. I'll update this post if more is added or changed.
