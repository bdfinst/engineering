import { SignalCellularNoSimOutlined } from '@material-ui/icons'
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
      allMarkdownRemark(
        filter: {
          fields: { slug: { ne: "/", regex: "/^((?!404).)*$/" } }
          frontmatter: {}
        }
        sort: {
          order: [ASC, ASC, ASC]
          fields: [
            frontmatter___menus
            frontmatter___weight
            frontmatter___title
          ]
        }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            menus
            weight
          }
        }
      }
    }
  `)

  const { nodes } = Pages.allMarkdownRemark

  const menuItems = nodes.map(node => ({
    name: node.frontmatter.menuTitle || node.frontmatter.title,
    pathRaw: node.fields.slug,
    menus: node.frontmatter.menus,
    key: node.frontmatter.title,
  }))

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  const topLevelMenu = menuItems
    .map(node => (node.menus ? node.menus : []))
    .flat()
    .filter(onlyUnique)

  const getSubItems = menu =>
    menuItems
      .map(node => {
        if (node.menus && node.menus.length) {
          return node.menus.map(_menu => (_menu === menu ? node : undefined))
        }
      })
      .flat()
      .filter(item => item !== undefined)

  const topMenu = topLevelMenu.sort().map(menu => ({
    name: menu,
    pathRaw: '',
    key: menu,
    subItems: getSubItems(menu),
  }))

  return (
    <>
      <List component="nav" className={classes.appMenu} disablePadding>
        {topMenu.map(node => (
          <ContentMenuItem
            name={node.name}
            pathRaw={node.pathRaw}
            subItems={node.subItems}
            key={node.key}
          />
        ))}
      </List>
    </>
  )
}

export default ContentMenu
