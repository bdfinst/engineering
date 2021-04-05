/* eslint-disable react/jsx-props-no-spreading */
import { createStyles, makeStyles } from '@material-ui/core/styles'

import ContentMenuItem from './ContentMenuItem'
import IconBarChart from '@material-ui/icons/BarChart'
import IconDashboard from '@material-ui/icons/Dashboard'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import IconPeople from '@material-ui/icons/People'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import List from '@material-ui/core/List'
import React from 'react'

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

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
  },
  {
    name: 'Nested Pages',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Level 2',
      },
      {
        name: 'Level 2',
        items: [
          {
            name: 'Level 3',
          },
          {
            name: 'Level 3',
          },
        ],
      },
    ],
  },
]

const ContentMenu = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {appMenuItems.map(item => (
        <ContentMenuItem {...item} key={item.name} />
      ))}
    </List>
  )
}

export default ContentMenu
