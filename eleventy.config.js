import clean from "eleventy-plugin-clean";

export default function (eleventyConfig) {
  // Remove previously-built `_site` files prior to a new build
  eleventyConfig.addPlugin(clean);
}
