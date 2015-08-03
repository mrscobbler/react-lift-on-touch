var React = require('react'),
  mui = require('material-ui'),
  ThemeManager = new mui.Styles.ThemeManager(),
  RaisedButton = mui.RaisedButton;

var CustomButton = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <div style={{ marginTop:'10px',marginBottom:'10px' }}>
        <RaisedButton label={this.props.label} />
      </div>
    );
  }

});

module.exports = CustomButton;