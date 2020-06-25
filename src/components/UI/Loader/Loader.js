import React from 'react'
import classes from './Loader.scss'

const Loader = props => {
  return (
    <div className={classes.center}>
      <div className={classes.Loader}></div>
    </div>
  )
}

export default Loader