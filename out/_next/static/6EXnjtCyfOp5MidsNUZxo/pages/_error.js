(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{471:function(e,t,r){__NEXT_REGISTER_PAGE("/_error",function(){return e.exports=r(472),{page:e.exports.default}})},472:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=r(77),a=r.n(u);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,d,y,b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,c(t).apply(this,arguments))}var r,u,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,n["PureComponent"]),r=t,l=[{key:"getInitialProps",value:function(e){var t=e.res,r=e.xhr;return{errorCode:t?t.statusCode:r.status}}}],(u=[{key:"render",value:function(){var e=this.props.errorCode;return o.a.createElement(a.a,null,o.a.createElement("h1",null,"Sorry but this time... It threw an error..."),o.a.createElement("code",null,"Error code: ",e||"--"))}}])&&s(r.prototype,u),l&&s(r,l),t}();y={errorCode:null},(d="defaultProps")in(p=b)?Object.defineProperty(p,d,{value:y,enumerable:!0,configurable:!0,writable:!0}):p[d]=y,t.default=b},77:function(e,t,r){"use strict";t.__esModule=!0;var n=p(r(7)),o=p(r(13)),u=p(r(8)),a=p(r(9)),l=p(r(10)),s=p(r(0)),i=p(r(16)),c=p(r(36)),f=r(19);function p(e){return e&&e.__esModule?e:{default:e}}var d={componentClass:c.default},y=function(e){function t(){return(0,u.default)(this,t),(0,a.default)(this,e.apply(this,arguments))}return(0,l.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,r=e.className,u=(0,o.default)(e,["componentClass","className"]),a=(0,f.splitBsProps)(u),l=a[0],c=a[1],p=(0,f.getClassSet)(l);return s.default.createElement(t,(0,n.default)({},c,{className:(0,i.default)(r,p)}))},t}(s.default.Component);y.propTypes=d,y.defaultProps={componentClass:"div"},t.default=(0,f.bsClass)("jumbotron",y),e.exports=t.default}},[[471,1,0]]]);