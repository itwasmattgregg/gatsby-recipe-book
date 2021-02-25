/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Nerdery Recipe Book",
    shortTitle: "Recipes",
    description: "Recipes from the Nerdery Kitchen",
    url: "https://nerdery-recipe-book.netlify.com",
    image: "/images/og-image.jpg",
    author: "",
    intro: "Recipes from the Nerdery Kitchen.",
    menuLinks: [
      {
        name: "About",
        slug: "/about/"
      }
    ],
    footerLinks: [
      {
        name: "Nerdery",
        href:
          "https://nerdery.com"
      }
    ]
  },
  plugins: [
    {
      resolve: "@marinda/gatsby-theme-recipes",
      options: {
        title: "Classic Recipes",
        shortTitle: "Recipes",
        contentPath: "./src/recipes"
      }
    }
  ]
};
