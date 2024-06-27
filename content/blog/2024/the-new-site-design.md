---
title: The new site design
date: 2024-06-25
tags:
  - software
  - development
  - design
---
Welcome to the new Unfathoming. I've gone through three notable iterations of the site now, first on [quartz]() by Jacky Zhao, second entirely static, with me manually writing HTML for every single page (and dealing with the consequences of trying to keep 50+ pages looking consistent), and thirdly (hopefully finally) what you're looking at right now.

The new site is written with the [Eleventy](https://11ty.dev) static site generator because it's super simple with few dependencies and it is something I could learn in a [morning before sunrise](/blog/2024/a-rainy-saturday-morning).

{% image "g2.png", "diagram showing the workflow from source code to website" %}

While most people use WordPress, I hate how long simple actions take. Even just loading a page can take a long time, and I didn't want to deal with the security nightmare of WordPress either. I've operated WP sites in the past, and every single one of them was compromised in some form or another, despite having what I thought was above average security. I guess that's just part of the PHP plague.

Something interesting about the site is that if I want to show the graph above, I type out the following:

```js
{.% image "g2.png" %.}
```

and it knows to pull the rendered and optimized image from `/assets/graphs/g2.png`. How? It looks for the first letter `g` and knows that's associated with a graph, then looks at the number to determine which numbered graph to use, and the file extension is there to tell it which to render the final output in. I could've just as easily made it say `png2` or something else, but I like how natural it feels. `g2.png` isn't actually the name of the file, its a way of locating and displaying the file.
