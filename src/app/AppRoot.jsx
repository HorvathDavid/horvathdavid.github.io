var CommentBox = require('../component/CommentBox.jsx');
var HeaderComponent = require('../component/HeaderComponent.jsx');
var ContentComponent = require('../component/ContentComponent.jsx');
var FooterComponent = require('../component/FooterComponent.jsx');

module.exports = React.createClass({
  render: function() {

    return (
      <div>
        <HeaderComponent />
        <ContentComponent />
        <CommentBox />
        <FooterComponent />
      </div>
    );
  }
});
