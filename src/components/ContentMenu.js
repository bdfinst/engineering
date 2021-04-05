import { createStyles, makeStyles } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import List from '@material-ui/core/List'
import React from 'react'

import ContentMenuItem from './ContentMenuItem'

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  })
)

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
