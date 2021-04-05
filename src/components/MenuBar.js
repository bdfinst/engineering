import React, { useState } from 'react'

import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = theme =>
  makeStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      background: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
  })
function getItems() {
  const json = {
    list: [
      {
        id: 1,
        title: 'Google',
        items: [
          {
            id: 1,
            name: 'Android',
            subitems: [
              {
                id: 1,
                name: 'Nougat',
              },
              {
                id: 2,
                name: 'Lollipop',
              },
            ],
          },
          {
            id: 2,
            name: 'Chrome',
          },
        ],
      },
      {
        id: 2,
        title: 'Apple',
        items: [
          {
            id: 1,
            name: 'Mac',
          },
          {
            id: 2,
            name: 'Iphone',
            subitems: [
              {
                id: 1,
                name: 'Iphone 6',
              },
              {
                id: 2,
                name: 'Iphone 10',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Uber',
        items: [
          {
            id: 1,
            name: 'Eats',
          },
          {
            id: 2,
            name: 'Freight',
          },
        ],
      },
    ],
  }
  return json
}
const MenuBar = () => {
  const [state, setState] = useState({})

  const handleClick = e => {
    setState({ [e]: !state[e] })
  }

  const items = getItems()
  const classes = useStyles()

  return (
    <div>
      {items.list.map(list => (
        <List
          className={classes.root}
          key={list.id}
          subheader={<ListSubheader>{list.title}</ListSubheader>}
        >
          {list.items.map(item => (
            <div key={item.id}>
              {item.subitems != null ? (
                <div key={item.id}>
                  <ListItem
                    button
                    key={item.id}
                    onClick={handleClick(item.name)}
                  >
                    <ListItemText primary={item.name} />
                    {state[item.name] ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse
                    key={list.items.id}
                    component="li"
                    in={state[item.name]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List disablePadding>
                      {item.subitems.map(i => (
                        <ListItem button key={i.id} className={classes.nested}>
                          <ListItemText key={i.id} primary={i.name} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </div>
              ) : (
                <ListItem button onClick={handleClick(item.name)} key={item.id}>
                  <ListItemText primary={item.name} />
                </ListItem>
              )}
            </div>
          ))}
          <Divider key={list.id} absolute />
        </List>
      ))}
    </div>
  )
}

export default MenuBar
