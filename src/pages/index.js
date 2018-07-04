import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
	console.log( data );
	return (
	  <div>
	    <h1>Hi people</h1>
	    <p>Welcome to your new Gatsby site.</p>
	    <p>Now go build something great.</p>
	    <Link to="/page-2/">Go to page 2</Link>
	  </div>
	);
}

export default IndexPage

export const contentQuery = graphql`
query getAllContent {
	allMarkdownRemark {
	  edges {
	    node {
	      id
        html
        frontmatter {
          title
          templateKey
          path
          draft
          date
          image
          description
        }
	    }
	  }
	}
}
`
