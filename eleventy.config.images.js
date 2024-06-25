const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

function relativeToInputPath(relativeFilePath) {
    // Define the base path for your images
    const basePath = "assets";
    
    // Combine the base path with the relative file path
    return path.join(process.cwd(), basePath, relativeFilePath);
}

function isFullUrl(url) {
    try {
        new URL(url);
        return true;
    } catch(e) {
        return false;
    }
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths, sizes) {
        let formats = ["avif", "webp", "auto"];
        let input;
        
        if(isFullUrl(src)) {
            input = src;
        } else {
            input = relativeToInputPath(src);
        }
        
        let metadata = await eleventyImage(input, {
            widths: widths || ["auto"],
            formats,
            outputDir: path.join(eleventyConfig.dir.output, "img"),
        });
        
        let imageAttributes = {
            alt,
            sizes,
            loading: "lazy",
            decoding: "async",
        };
        
        return eleventyImage.generateHTML(metadata, imageAttributes);
    });
};
