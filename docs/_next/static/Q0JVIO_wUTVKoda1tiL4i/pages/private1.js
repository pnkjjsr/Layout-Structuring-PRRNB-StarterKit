(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{512:function(e,t,n){__NEXT_REGISTER_PAGE("/private1",function(){return e.exports=n(515),{page:e.exports.default}})},515:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(22),i=n(4),c=n(28),a=n.n(c),f=n(6),l=n.n(f),p=n(21),s=n(59),y=n(29),b=n.n(y),h=n(11);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g,P,j,E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,d(t).apply(this,arguments))}var n,u,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,r["PureComponent"]),n=t,(u=[{key:"componentDidMount",value:function(){var e=this.props.fromPath,t=this.isAuthenticated(),n=this.isExpired(),r={pathname:"/login",query:{from:e}};return t&&!n||l.a.replace(r)}},{key:"render",value:function(){var e=this.props.children;return o.a.createElement("div",null,e)}},{key:"isAuthenticated",value:function(){var e=h.a.getUserInfo()?h.a.getUserInfo():null,t=!(!h.a.getToken()||!function(e){return e&&e.id}(e));return t}},{key:"isExpired",value:function(){return h.a.isExpiredToken(h.a.getToken())}}])&&v(n.prototype,u),i&&v(n,i),t}();j={fromPath:"/"},(P="defaultProps")in(g=E)?Object.defineProperty(g,P,{value:j,enumerable:!0,configurable:!0,writable:!0}):g[P]=j;var _=E;function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){R(e,t,n[t])})}return e}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"Private1",function(){return D});var D=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,i=new Array(u),c=0;c<u;c++)i[c]=arguments[c];return r=this,n=!(o=(e=x(t)).call.apply(e,[this].concat(i)))||"object"!==k(o)&&"function"!=typeof o?C(r):o,R(C(C(n)),"goBackHome",function(e){e&&e.preventDefault(),l.a.push("/")}),n}var n,u,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,r["PureComponent"]),n=t,(u=[{key:"render",value:function(){var e=this.props.router.pathname;return o.a.createElement(_,{fromPath:e},o.a.createElement("div",null,o.a.createElement(s.a,null),o.a.createElement("h2",null,"Private1 here"),o.a.createElement(b.a,{bsStyle:"primary",onClick:this.goBackHome},"go back home")))}}])&&T(n.prototype,u),i&&T(n,i),t}();t.default=a()(Object(u.b)(function(e){return{isAuthenticated:e.userAuth.isAuthenticated}},function(e){return S({},Object(i.b)(S({},p),e))}),f.withRouter)(D)}},[[512,1,0]]]);