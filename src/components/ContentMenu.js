import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import React from 'react'

import ContentMenuItem from './ContentMenuItem'

const useStyles = makeStyles({
  appMenu: {
    width: '100%',
  },
})

const ContentMenu = () => {
  const classes = useStyles()
  const Pages = useStaticQuery(graphql`
    query {
      allPageTree(
        sort: { fields: [name], order: ASC }
        filter: { name: { regex: "/^((?!404).)*$/" }, isRootPage: { eq: true } }
      ) {
        edges {
          node {
            id
            name
            pathRaw
            isRootPage
            children {
              id
              ... on PageTree {
                id
                name
                pathRaw
              }
            }
          }
        }
      }
    }
  `)
  const { edges } = Pages.allPageTree

  return (
    <>
      <List component="nav" className={classes.appMenu} disablePadding>
        {edges.map(edge => (
          <ContentMenuItem
            name={edge.node.name}
            pathRaw={edge.node.pathRaw}
            subItems={edge.node.children}
            key={edge.node.name}
          />
        ))}
      </List>
    </>
  )
}

export default ContentMenu
