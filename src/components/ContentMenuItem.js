import { Link } from 'gatsby'
/* eslint-disable react/jsx-props-no-spreading */
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    menuItem: {},
    menuItemIcon: {
      color: '#97c05c',
    },
  })
)

const ContentMenuItem = props => {
  const { name, pathRaw, children = [] } = props
  const classes = useStyles()
  const isExpandable = children && children.length > 0
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  const MenuItemRoot = (
    <ListItem button className={classes.menuItem} onClick={handleClick}>
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
      {isExpandable ? (
        <ListItemText primary={name} />
      ) : (
        <Link to={pathRaw}>
          <ListItemText primary={name} />
        </Link>
      )}
    </ListItem>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {children.map(item => (
          <ContentMenuItem {...item} key={item.name} />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}

export default ContentMenuItem
