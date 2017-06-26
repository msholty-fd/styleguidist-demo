import colors from '../styles/Colors'

export default {
  base: {
    color: 'white',
    border: `1px solid ${colors.basicButtonBorder}`,
    outline: 'none',
    padding: '0 10px',
    height: 33,
    textAlign: 'center',
    lineHeight: '32px',
    fontSize: 13,
    display: 'inline-block',
    background: `${colors.basicButton}`
  },
  icon: {
    color: `${colors.basicButtonText}`,
    lineHeight: 2.1,
    fontSize: 16
  }
}
