import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import button from 'styleguide/components/button';
import ripple from 'styleguide/components/ripple';
import { white, grey500 } from 'material-ui/styles/colors';

const propTypes = {
  ...RaisedButton.propTypes,
  children: React.PropTypes.array,
};

const getStyles = props => ({
  button: Object.assign({}, button, props.buttonStyle),
  ripple: Object.assign({}, ripple, props.rippleStyle),
  backgroundColor: props.backgroundColor || grey500,
  labelColor: props.labelColor || white,
});

const SharpspringRaisedButton = (props) => {
  const styles = getStyles(props);

  return (
    <RaisedButton
      {...props}
      buttonStyle={styles.button}
      rippleStyle={styles.ripple}
      backgroundColor={styles.backgroundColor}
      labelColor={styles.labelColor}
    >
      {props.children}
    </RaisedButton>
  );
};

SharpspringRaisedButton.propTypes = propTypes;

export default SharpspringRaisedButton;
