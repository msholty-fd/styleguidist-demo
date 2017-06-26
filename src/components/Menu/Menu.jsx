import React from 'react'
import PropTypes from 'prop-types'
import MaterialMenu from 'material-ui/Menu'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import list from '../../styles/components/list'
import menu from '../../styles/components/menu'
import theme from '../../styles/Theme'

const getStyles = props => ({
  root: Object.assign({}, menu, props.style),
  list: Object.assign({}, list, props.listStyle)
})

export default class Menu extends React.Component {
  static propTypes = MaterialMenu.propTypes;

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
      <MaterialMenu
        {...others}
        style={styles.root}
        listStyle={styles.list}
      >
        {children}
      </MaterialMenu>
    )
  }
}
