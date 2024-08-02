const { DateTime } = require("luxon");
const markdownItAnchor = require("markdown-it-anchor");

// Official Eleventy plugins
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

// Custom plugins
const pluginDrafts = require("./eleventy.config.drafts.js");
const pluginImages = require("./eleventy.config.images.js");

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  // Passthrough file copy
  eleventyConfig.addPassthroughCopy({
    "./assets/": "/assets",
    "./public/": "/",
    "./node_modules/prismjs/themes/prism-okaidia.css": "/css/prism-okaidia.css",
    "./content/robots.txt": "/robots.txt",
    "./public/favicon.ico": "/favicon.ico",
  });

  // Watch targets
  eleventyConfig.addWatchTarget("assets/**/*.{svg,webp,png,jpeg}");

  // Plugins
  eleventyConfig.addPlugin(pluginDrafts);
  eleventyConfig.addPlugin(pluginImages);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight, { preAttributes: { tabindex: 0 } });
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(pluginBundle);

  // Filters
  addFilters(eleventyConfig);

  // Shortcodes
  addShortcodes(eleventyConfig);

  // Transforms
  addTransforms(eleventyConfig);

  // Markdown library customization
  customizeMarkdownLibrary(eleventyConfig);

  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
    pathPrefix: "/",
  };
};

/**
 * Add custom filters to Eleventy
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
function addFilters(eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
    return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    return n < 0 ? array.slice(n) : array.slice(0, n);
  });

  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  eleventyConfig.addFilter("getAllTags", (collection) => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    }
    return Array.from(tagSet);
  });

  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter((tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  });

  eleventyConfig.addFilter("footerNavigation", function (collection) {
    return collection
      .filter((item) => item.data.footerNavigation)
      .sort((a, b) => (a.data.footerNavigation.order || 0) - (b.data.footerNavigation.order || 0));
  });
}

/**
 * Add custom shortcodes to Eleventy
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
function addShortcodes(eleventyConfig) {
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addShortcode("dropdown", function (header, content) {
    return `
      <details class="dropdown">
        <summary>${header}</summary>
        <div class="dropdown-content">
          ${content}
        </div>
      </details>
    `;
  });

  eleventyConfig.addShortcode("callout", function (type, content) {
    return `<div class="callout ${type}">${content}</div>`;
  });

  const pageCounters = {};
  eleventyConfig.addShortcode("sidenote", function (content) {
    const pageId = this.page.inputPath;
    if (!pageCounters[pageId]) {
      pageCounters[pageId] = 0;
    }
    const counter = ++pageCounters[pageId];
    const id = `sn${counter}`;
    return `<a class="sidenote-anchor" href="#${id}">${counter}</a>` +
      `<span class="sidenote" aria-describedby="${id}"><a class="sidenote-number" id="${id}" href="#${id}">${counter}</a>${content}</span>`;
  });

  eleventyConfig.addShortcode("TOC", function(content) {
    const headingRegex = /<h([2-6])[^>]*>(.*?)<\/h\1>/g;
    const headings = [];
    let tocHtml = '<ul class="toc">';
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1]);
      const text = match[2].replace(/<[^>]+>/g, '');
      const slug = slugify(text);
      headings.push({ level, text, slug });
      tocHtml += `  <li class="toc-level-${level}"><a href="#${slug}">${text}</a></li>\n`;
    }
    tocHtml += '</ul>';
    return tocHtml;
  });

  eleventyConfig.addShortcode("box", function (content) {
    return `<div class="content-box">${content}</div>`;
  });

  eleventyConfig.addShortcode("currentBuildDate", () => {
    return new Date().toISOString();
  });
}

/**
 * Add custom transforms to Eleventy
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
function addTransforms(eleventyConfig) {
  eleventyConfig.addTransform("addHeadingIds", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const headingRegex = /<h([2-6])[^>]*>(.*?)<\/h\1>/g;
      return content.replace(headingRegex, (match, level, text) => {
        const slug = slugify(text.replace(/<[^>]+>/g, ''));
        return `<h${level} id="${slug}">${text}</h${level}>`;
      });
    }
    return content;
  });
}

/**
 * Customize Markdown library settings
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
function customizeMarkdownLibrary(eleventyConfig) {
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: "after",
        class: "header-anchor",
        symbol: "#",
        ariaHidden: false,
      }),
      level: [1, 2, 3, 4],
      slugify: eleventyConfig.getFilter("slugify"),
    });
  });
}

/**
 * Helper function to generate a slug from text
 * @param {string} text
 * @returns {string}
 */
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}