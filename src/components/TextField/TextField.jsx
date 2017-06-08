import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

import input from 'styleguide/components/input';
import hint from 'styleguide/components/hint';
import textFieldStyles from 'styleguide/components/textField';

const propTypes = {
  ...TextField.propTypes,
  children: PropTypes.array,
};

const getStyles = props => ({
  hint: Object.assign({}, hint, props.hintStyle),
  input: Object.assign({}, input, props.inputStyle),
  underlineFocus: Object.assign({}, textFieldStyles.underlineFocus, props.underlineFocusStyle),
  underline: Object.assign({}, textFieldStyles.underline, props.underlineStyle),
  base: Object.assign({}, textFieldStyles.base, props.base),
});

const SharpspringTextField = (props) => {
  const styles = getStyles(props);

  return (
    <TextField
      {...props}
      inputStyle={styles.input}
      hintStyle={styles.hint}
      underlineStyle={styles.underline}
      underlineFocusStyle={styles.underlineFocus}
      style={styles.base}
    >
      {props.children}
    </TextField>
  );
};

SharpspringTextField.propTypes = propTypes;

export default SharpspringTextField;
