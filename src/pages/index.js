import Divider from '@material-ui/core/Divider'
import React from 'react'

import Layout from '../components/NavLayout'
import PostWrapper from '../components/PostWrapper'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostWrapper>
      <h1>Recommended Practices for Daily Value Delivery</h1>

      <Divider />
    </PostWrapper>
  </Layout>
)

export default IndexPage
