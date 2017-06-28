import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import buttonStyles from './button.styles'
import iconStyles from './icon.styles'

@Radium
export default class Button extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'secondary', 'warning']),
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    iconPosition: PropTypes.oneOf(['left', 'right'])
  };

  static defaultProps = {
    type: 'default',
    disabled: false,
    icon: '',
    iconPosition: 'left',
  }

  render() {
    const buttonStyle = [
      buttonStyles.base,
      buttonStyles[this.props.type]
    ];

    let iconPosition = this.props.iconPosition;
    if (!this.props.children || !this.props.children.length) {
      iconPosition = 'base';
    }

    const iconStyle = [
      iconStyles[iconPosition],
    ];

    return (
      <button
        style={buttonStyle}
        disabled={this.props.disabled}
        >
        {this.props.icon && this.props.iconPosition === 'left' &&
          <i className={this.props.icon} style={iconStyle} />
        }

        {this.props.children}

        {this.props.icon && this.props.iconPosition === 'right' &&
          <i className={this.props.icon} style={iconStyle} />
        }
      </button>
    );
  }
}
