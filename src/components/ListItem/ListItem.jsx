import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import colors from 'styleguide/Colors';

const propTypes = {
  children: PropTypes.node,
  props: PropTypes.array,
};

const styles = {
  color: `${colors.linkColor}`,
  borderBottom: `1px solid ${colors.borderColor}`,
};

const SHSPListItem = ({ children, ...props }) => (
  <ListItem
    {...props}
    disableTouchRipple
    style={styles}
  >
    {children}
  </ListItem>
);

SHSPListItem.propTypes = propTypes;

export default SHSPListItem;
