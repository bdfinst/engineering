import { StaticQuery, graphql } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const Image = () => (
  <StaticQuery
    query={graphql`
      {
        placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
          childImageSharp {
            gatsbyImageData(width: 300, layout: CONSTRAINED)
          }
        }
      }
    `}
    render={data => (
      <GatsbyImage
        fluid={data.placeholderImage.childImageSharp.gatsbyImageData}
      />
    )}
  />
)
export default Image
