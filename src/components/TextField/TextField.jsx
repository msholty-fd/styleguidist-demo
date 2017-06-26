import React from 'react'
import PropTypes from 'prop-types'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MaterialTextField from 'material-ui/TextField'

import input from '../../styles/components/input'
import hint from '../../styles/components/hint'
import textFieldStyles from '../../styles/components/textField'
import theme from '../../styles/Theme'

const getStyles = props => ({
  hint: Object.assign({}, hint, props.hintStyle),
  input: Object.assign({}, input, props.inputStyle),
  underlineFocus: Object.assign({}, textFieldStyles.underlineFocus, props.underlineFocusStyle),
  underline: Object.assign({}, textFieldStyles.underline, props.underlineStyle),
  base: Object.assign({}, textFieldStyles.base, props.base)
})

export default class TextField extends React.Component {
  static propTypes = MaterialTextField.propTypes

  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  getChildContext () {
    return {muiTheme: getMuiTheme(theme)}
  };

  render () {
    const styles = getStyles(this.props)
    const { children, ...others } = this.props

    return (
      <MaterialTextField
        {...others}
        inputStyle={styles.input}
        hintStyle={styles.hint}
        underlineStyle={styles.underline}
        underlineFocusStyle={styles.underlineFocus}
        style={styles.base}
      >
        {children}
      </MaterialTextField>
    )
  }
}
