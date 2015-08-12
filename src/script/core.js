var AppRoot = require('./app/AppRoot.jsx');
var _ = require('./thirdparty/underscore.js');

window._ = _;

React.render(
  <AppRoot />,
  document.getElementById('example')
);
