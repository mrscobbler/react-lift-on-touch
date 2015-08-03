var React = require('react'),
    CustomButton = require('./custom-button');
  
var MaterialExample = React.createClass({


  render: function() {
    return (
      <div>
        <CustomButton label="Button 1" />
        <CustomButton label="Button 2" />
        <CustomButton label="Button 3" />
      </div>
    );
  }

});

module.exports = MaterialExample;