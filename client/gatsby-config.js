module.exports = {
  siteMetadata: {
    title: "",
    author: "",
    description: "",
    social: [
      {
        name: "github",
        url: "",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/pdfthron/*`] },
    },
    ]
}
