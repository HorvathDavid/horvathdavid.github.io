'use strict';

module.exports = React.createClass({

  render: function() {

    var text = this.props.text;

    return (
      <div className="col-xs-12 col-sm-6 col-md-4 text-center">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">{text}</h3>
          </div>
          <div class="panel-body">
            Panel content
          </div>
        </div>
      </div>
    );
  }
});
