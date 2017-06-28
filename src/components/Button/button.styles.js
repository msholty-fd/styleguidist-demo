import color from 'color'
import colors from 'styles/Colors'

export default {
  base: {
    color: colors.basicButtonText,
    border: 0,
    outline: 0,
    borderRadius: 2,
    fontSize: '1rem',
    fontWeight: 500,
    padding: '0.5em 1.5em 0.5em',
    margin: '0 0.25em 0 0',
    cursor: 'pointer',
    position: 'relative',

    ':disabled': {
      background: '#d6d6d6',
      cursor: 'default',
    }
  },

  icon: {
    padding: '.5em 0.75em',
  },

  default: {
    background: '#a8b0b0',
    ':hover': {
      background: color('#a8b0b0').darken(0.1).hexString()
    },
    ':active': {
      background: color('#a8b0b0').darken(0.2).hexString()
    }
  },

  primary: {
    background: colors.brandColor,
    ':hover': {
      background: color(colors.brandColor).darken(0.1).hexString()
    },
    ':active': {
      background: color(colors.brandColor).darken(0.2).hexString()
    }
  },

  secondary: {
    background: colors.brandSecondary,
    ':hover': {
      background: color(colors.brandSecondary).darken(0.1).hexString()
    },
    ':active': {
      background: color(colors.brandSecondary).darken(0.2).hexString()
    }
  },

  warning: {
    background: '#d55039',
    ':hover': {
      background: color('#d55039').darken(0.1).hexString()
    },
    ':active': {
      background: color('#d55039').darken(0.2).hexString()
    }
  }
};
