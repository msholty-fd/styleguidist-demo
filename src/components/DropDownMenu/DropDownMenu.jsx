import React from 'react';
import PropTypes from 'prop-types';
import MaterialDropDownMenu from 'material-ui/DropDownMenu';

import list from 'styles/components/list';
import dropDownStyles from 'styles/components/dropDownMenu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from 'styles/Theme';

const getStyles = props => ({
  list: Object.assign({}, list, props.listStyle),
  root: Object.assign({}, dropDownStyles.root, props.style),
  underline: Object.assign({}, dropDownStyles.underline, props.underlineStyle),
  label: Object.assign({}, dropDownStyles.label, props.labelStyle),
  icon: Object.assign({}, dropDownStyles.icon, props.iconStyle),
});

/**
 * @see http://www.material-ui.com/#/components/dropdown-menu
 */
class DropDownMenu extends React.Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  getChildContext() {
    return {muiTheme: getMuiTheme(theme)};
  };

  render() {
    const styles = getStyles(this.props);
    const { children, ...others } = this.props;

    return (
      <MaterialDropDownMenu
        {...others}
        style={styles.root}
        listStyle={styles.list}
        underlineStyle={styles.underline}
        labelStyle={styles.label}
        iconStyle={styles.icon}
      >
        {children}
      </MaterialDropDownMenu>
    );
  };
}

DropDownMenu.propTypes = MaterialDropDownMenu.propTypes;

export default DropDownMenu;
