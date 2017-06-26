import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import Settings from 'material-ui/svg-icons/action/settings'
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import theme from '../../styles/Theme'
import { Theme } from '../../styles'
import colors from '../../styles/Colors'

const styles = {
  button: {
    width: 50,
    height: 27,
    marginTop: 7,
    padding: 7,
    background: colors.basicButton,
    borderRadius: 3
  },
  icon: {
    width: 14,
    height: 14,
    color: Theme.palette.alternateTextColor
  }
}

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
