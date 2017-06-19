import React from 'react';
import PropTypes from 'prop-types';
import MaterialRaisedButton from 'material-ui/RaisedButton';

import button from 'styles/components/button';
import ripple from 'styles/components/ripple';
import { white, grey500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import theme from 'styles/Theme'

const getStyles = props => ({
  button: Object.assign({}, button, props.buttonStyle),
  ripple: Object.assign({}, ripple, props.rippleStyle),
  backgroundColor: props.backgroundColor || grey500,
  labelColor: props.labelColor || white,
});

class RaisedButton extends React.Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  getChildContext () {
    return {muiTheme: getMuiTheme(theme)}
  };

  render() {
    const styles = getStyles(this.props)
    const { children, ...others } = this.props

    return (
      <MaterialRaisedButton
        {...others}
        buttonStyle={styles.button}
        rippleStyle={styles.ripple}
        backgroundColor={styles.backgroundColor}
        labelColor={styles.labelColor}
      >
        {children}
      </MaterialRaisedButton>
    );
  }
};

RaisedButton.propTypes = MaterialRaisedButton.propTypes;

export default RaisedButton;
