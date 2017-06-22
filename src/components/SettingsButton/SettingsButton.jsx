import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import Settings from 'material-ui/svg-icons/action/settings'
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import theme from 'styles/Theme'

import styles from './SettingsButton.style'

export default class SettingsButton extends React.Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired
  }

  getChildContext () {
    return {muiTheme: getMuiTheme(theme)}
  }

  render () {
    return (
      <IconButton
        iconStyle={styles.icon}
        style={styles.button}
        disableTouchRipple
      >
        <Settings />
        <ArrowDropDown />
      </IconButton>
    )
  }
}
