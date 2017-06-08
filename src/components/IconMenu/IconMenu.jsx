import React from 'react';
import IconMenu from 'material-ui/IconMenu';

import list from 'styleguide/components/list';
import menu from 'styleguide/components/menu';

const propTypes = {
  ...IconMenu.propTypes,
};

const getStyles = props => ({
  menu: Object.assign({}, menu, props.menuStyle),
  list: Object.assign({}, list, props.listStyle),
});

const SharpspringIconMenu = (props) => {
  const styles = getStyles(props);

  return (
    <IconMenu
      {...props}
      menuStyle={styles.menu}
      listStyle={styles.list}
    >
      {props.children}
    </IconMenu>
  );
};

SharpspringIconMenu.propTypes = propTypes;

export default SharpspringIconMenu;
