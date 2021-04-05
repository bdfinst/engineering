import { CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(() => ({
  root: {},
}))

export default ({ children }) => {
  const classes = useStyles()

  return <CardContent className={classes.root}>{children}</CardContent>
}
