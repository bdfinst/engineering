import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { v4 as uuid } from 'uuid'
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
          frontmatter: { published: { eq: true } }
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
            menuTitle
          }
        }
      }
    }
  `)

  const { nodes } = Pages.allMarkdownRemark

  const menuEntry = (name, path, menus, weight) => ({
    name,
    pathRaw: path,
    menus: menus || [],
    weight: weight || 99,
    key: `${path}-${uuid()}`,
  })

  const menuItems = nodes.map(node => {
    const name = node.frontmatter.menuTitle || node.frontmatter.title

    return menuEntry(
      name,
      node.fields.slug,
      node.frontmatter.menus,
      node.frontmatter.weight,
    )
  })

  const onlyUnique = (value, index, self) => self.indexOf(value) === index

  const parentMenuList = menuItems
    .map(node => (node.menus && node.menus.length ? node.menus : []))
    .flat()
    .filter(onlyUnique)
    .sort()

  const compareTitle = (a, b) => (a.name > b.name ? 1 : -1)
  const compareWeight = (a, b) => Number(a.weight) - Number(b.weight)

  const getMenuSubItems = menu =>
    menuItems
      .map(node => {
        if (node.menus && node.menus.length) {
          return node.menus.map(_menu => (_menu === menu ? node : undefined))
        }
        return []
      })
      .flat()
      .filter(item => item !== undefined)
      .sort(
        (obj1, obj2) =>
          // First sort by age.
          // If comparison by age returns 0 (they are the same age):
          // then compare by name.
          compareWeight(obj1, obj2) || compareTitle(obj1, obj2),
      )

  const parentMenu = parentMenuList.map(menu => ({
    name: menu,
    pathRaw: '',
    key: menu,
    subItems: getMenuSubItems(menu),
  }))

  const noChildren = menuItems.filter(
    item => !item.menus || item.menus.length === 0,
  )

  const staticMenu = [menuEntry('Home', '/')]
    .concat(parentMenu)
    .concat(noChildren)

  return (
    <>
      <List component="nav" className={classes.appMenu} disablePadding>
        {staticMenu.map(node => (
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
