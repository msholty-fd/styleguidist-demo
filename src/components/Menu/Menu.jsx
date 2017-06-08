import React from 'react';
import Menu from 'material-ui/Menu';

import list from 'styleguide/components/list';
import menu from 'styleguide/components/menu';

const propTypes = {
  ...Menu.propTypes,
  children: React.PropTypes.array,
};

const getStyles = props => ({
  root: Object.assign({}, menu, props.style),
  list: Object.assign({}, list, props.listStyle),
});

const SharpspringMenu = (props) => {
  const styles = getStyles(props);

  return (
    <Menu
      {...props}
      style={styles.root}
      listStyle={styles.list}
    >
      {props.children}
    </Menu>
  );
};

SharpspringMenu.propTypes = propTypes;

export default SharpspringMenu;
