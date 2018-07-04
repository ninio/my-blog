module.exports = {
  siteMetadata: {
    title: `Ninio's learning notes`,
    description: `Mostly technical notes on learning new stuff`,
    keywords: `JS, React, Gatsby, ML, Technology`,
  },
  plugins: [ 'gatsby-plugin-react-helmet', 'gatsby-plugin-sass', 'gatsby-transformer-remark', {
  	resolve: 'gatsby-source-filesystem',
  	options: {
	  	name: 'myMarkdown',
	  	path: `${__dirname}/content`
  	}
  } ],
}
