import colors from 'styles/Colors'

export default {
  underlineFocus: {
    boxSizing: 'border-box',
    height: '40px',
    top: 0,
    border: `2px solid ${colors.linkColor}`,
    zIndex: '4',
    borderRadius: '3px'
  },
  underline: {
    border: 'none'
  },
  base: {
    boxSizing: 'border-box',
    height: '40px'
  }
}
