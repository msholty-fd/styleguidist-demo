import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const theme = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <WrappedComponent {...this.props} {...this.state} />
        </MuiThemeProvider>
      );
    }
  }
};

export default theme;
