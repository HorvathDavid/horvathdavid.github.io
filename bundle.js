/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var AppRoot = __webpack_require__(1);

	React.render(React.createElement(AppRoot, null), document.getElementById('example'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CommentBox = __webpack_require__(2);
	var HeaderComponent = __webpack_require__(3);
	var ContentComponent = __webpack_require__(4);
	var FooterComponent = __webpack_require__(5);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {

	    return React.createElement(
	      'div',
	      null,
	      React.createElement(HeaderComponent, null),
	      React.createElement(ContentComponent, null),
	      React.createElement(CommentBox, null),
	      React.createElement(FooterComponent, null)
	    );
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "exports",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "commentBox" },
	      "Hello, world! I am a CommentBox."
	    );
	  }
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "exports",

	  render: function render() {
	    return React.createElement(
	      "h1",
	      null,
	      "Such a header"
	    );
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "exports",

	  render: function render() {
	    return React.createElement(
	      "section",
	      null,
	      React.createElement(
	        "div",
	        null,
	        "Such a content"
	      )
	    );
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "exports",

	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      "Such a footer"
	    );
	  }
	});

/***/ }
/******/ ]);