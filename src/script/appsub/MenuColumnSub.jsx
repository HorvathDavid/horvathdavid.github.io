'use strict';

var MenuComponent = require('../components/MenuComponent.jsx');

module.exports = React.createClass({

  render: function() {

    var menuTexts = ['one', 'two', 'three'];

    var menuElements = menuTexts.map(function(menuText){
      return <MenuComponent text={menuText} />;
    });

    return (
      <div className="row menu-column-sub">
        {menuElements}
      </div>
    );
  }
});
