import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import PostTags from '../components/PostTags'
import PostWrapper from '../components/PostWrapper'

const StyledTag = styled.span`
  font-style: italic;
`

const BlogPosts = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <PostWrapper>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        {/* <p>
          <StyledTag>Tags</StyledTag>: <PostTags tags={post.frontmatter.tags} />
        </p> */}
      </PostWrapper>
    </Layout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         tags
//       }
//     }
//   }
// `
export default BlogPosts
