import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import React from 'react'

import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={3} justify="center">
      <Grid item xs={2}>
        <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </Grid>
      <Grid item xs={12}>
        <h1>Recommended Practices for Daily Value Delivery</h1>
      </Grid>
    </Grid>
    <Divider />
  </Layout>
)

export default IndexPage
