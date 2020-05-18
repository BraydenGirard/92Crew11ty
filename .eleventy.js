module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("sitemap.xml");
    return {
        
        dir: {
            input: "./",
            output: "./_site",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
};
