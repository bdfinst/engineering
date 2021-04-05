/* eslint-disable react/jsx-props-no-spreading */
import { Link, graphql, useStaticQuery } from 'gatsby'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import IconDashboard from '@material-ui/icons/Dashboard'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
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
      allPageTree(sort: { fields: [name] }) {
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
          <ContentMenuItem {...edge.node} key={edge.node.name} />
        ))}
      </List>
    </>
  )
}

export default ContentMenu
