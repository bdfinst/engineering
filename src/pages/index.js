import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import Done from '@material-ui/icons/Done'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'
import InfoIcon from '@material-ui/icons/Info'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import ListSubheader from '@material-ui/core/ListSubheader'
import React from 'react'
import StarIcon from '@material-ui/icons/Star'

import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const [features, setFeatures] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  function handleClick(id) {
    switch (id) {
      case 'features':
        setFeatures(!features)
        break
      case 'info':
        setInfo(!info)
        break
      default:
        setInfo(!info)
        break
    }
  }

  return (
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
}

export default IndexPage
