'use strict';

var MenuComponent = require('../components/MenuComponent.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      menuElements: null
    }
  },

  componentWillMount: function() {
    var alma = new Promise(function(resolve, reject) {
      $.get('../../static/mock-data/menu-element.json', function(data){
        resolve(data);
      });
    });
    alma.then(function(data){
        var menuElements = data.map(function(elem){
          return <MenuComponent elem={elem} />;
        });

        this.setState({
          menuElements: menuElements
        });
    }.bind(this));

  },

  render: function() {

    return (
      <div className="row menu-column-sub">
        {this.state.menuElements}
      </div>
    );
  }
});
