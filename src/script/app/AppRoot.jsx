var HeaderSub = require('../appsub/HeaderSub.jsx');
var MenuColumnSub = require('../appsub/MenuColumnSub.jsx');
var FooterSub = require('../appsub/FooterSub.jsx');

module.exports = React.createClass({
  render: function() {

    return (
      <div className="container">
        <HeaderSub />
        <MenuColumnSub />
        <FooterSub />
      </div>
    );
  }
});
