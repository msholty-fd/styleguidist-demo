import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';

import list from 'styleguide/components/list';
import dropDownStyles from 'styleguide/components/dropDownMenu';

const propTypes = {
  ...DropDownMenu.propTypes,
  children: React.PropTypes.array,
};

const getStyles = props => ({
  list: Object.assign({}, list, props.listStyle),
  root: Object.assign({}, dropDownStyles.root, props.style),
  underline: Object.assign({}, dropDownStyles.underline, props.underlineStyle),
  label: Object.assign({}, dropDownStyles.label, props.labelStyle),
  icon: Object.assign({}, dropDownStyles.icon, props.iconStyle),
});

const SharpspringDropDown = (props) => {
  const styles = getStyles(props);

  return (
    <DropDownMenu
      {...props}
      style={styles.root}
      listStyle={styles.list}
      underlineStyle={styles.underline}
      labelStyle={styles.label}
      iconStyle={styles.icon}
    >
      {props.children}
    </DropDownMenu>
  );
};

SharpspringDropDown.propTypes = propTypes;

export default SharpspringDropDown;
