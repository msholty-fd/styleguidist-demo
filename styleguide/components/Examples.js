import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'rsg-components/Styled'
import injectTapEventPlugin from 'react-tap-event-plugin'

const styles = () => ({
  root: {
    fontFamily: 'Roboto, sans-serif'
  }
})

injectTapEventPlugin()

export function ExamplesRenderer ({ classes, children }) {
  return (
    <article className={classes.root}>
      {children}
    </article>
  )
}

ExamplesRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default Styled(styles)(ExamplesRenderer)
