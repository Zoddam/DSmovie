(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=l.length;c<u;c++){var d=l[c];if(o.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?a=!1:n.add(d);else{var f=o.props[d],p=r[d]||new Set;"name"===d&&i||!p.has(f)?(p.add(f),r[d]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},Dam2:function(e,t,n){e.exports={dsFooter:"dsfooter_dsFooter__zy5M3",dsFooterContainer:"dsfooter_dsFooterContainer__3XMHu",dsFooterCompanyContainer:"dsfooter_dsFooterCompanyContainer__1ecD5",dsSocialContainer:"dsfooter_dsSocialContainer__28My7",dsFooterLinksContainer:"dsfooter_dsFooterLinksContainer__1ATw2",dsFooterImage:"dsfooter_dsFooterImage__1KwJL"}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JHD6:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("nKUr"),o=n("YFqc"),a=n.n(o),i=n("WS6Y"),s=n("Dam2"),c=n.n(s);function u(){return Object(r.jsx)("div",{className:c.a.dsFooter,children:Object(r.jsxs)("div",{className:c.a.dsFooterContainer,children:[Object(r.jsxs)("div",{className:c.a.dsFooterCompanyContainer,children:[Object(r.jsx)(a.a,{href:"/",children:Object(r.jsx)("img",{src:n("bSXz"),alt:"DevSuperior",className:c.a.dsFooterImage})}),Object(r.jsx)("p",{children:"Educandoweb Cursos Ltda."}),Object(r.jsx)("p",{children:"CNPJ 29.016.230/0001-20"})]}),Object(r.jsxs)("div",{className:c.a.dsFooterLinksContainer,children:[Object(r.jsx)(a.a,{href:"/termos-de-uso",children:"Termos de Uso"}),Object(r.jsx)(a.a,{href:"/politica-privacidade",children:"Pol\xedtica de Privacidade"})]}),Object(r.jsx)("div",{className:c.a.dsSocialContainer,children:i.d.map((function(e){return Object(r.jsx)(a.a,{href:e.path,children:Object(r.jsx)("a",{target:"_blank",children:Object(r.jsx)("img",{alt:e.name,src:e.icon,width:32,height:32})})},e.name)}))})]})})}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},bSXz:function(e,t){e.exports="/_next/static/images/logo-white-10059e26f600604a7b5bd7782ed7550c.svg"},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},w10p:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("nKUr"),o=n("g4pe"),a=n.n(o);function i(e){var t=e.title,n=e.youtube?" gtag('event', 'conversion', {'send_to': 'AW-733119716/TdDFCKHF9fsCEOSJyt0C'}); ":"";return Object(r.jsxs)(a.a,{children:[Object(r.jsx)("meta",{property:"og:title",content:"DevSuperior - Escola de Programa\xe7\xe3o"},"ogtitle"),Object(r.jsx)("meta",{property:"og:description",content:"Ajudamos programadores a ingressar ou se recolocar na carreira"},"ogdesc"),Object(r.jsx)("meta",{property:"og:image",content:"https://s3.sa-east-1.amazonaws.com/educandoweb.com.br/images/home-1080.png"},"ogimage"),Object(r.jsx)("title",{children:t}),Object(r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=AW-733119716"}),Object(r.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n\t\t\twindow.dataLayer = window.dataLayer || [];\n\t\t\tfunction gtag(){dataLayer.push(arguments);}\n\t\t\tgtag('js', new Date());\n\t   \n      gtag('config', 'AW-733119716');\n\t  \t\t"}}),Object(r.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n      ".concat(n,"\n\t  \t\t")}}),Object(r.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n\t\t\t!function(f,b,e,v,n,t,s)\n\t\t\t{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n\t\t\tn.callMethod.apply(n,arguments):n.queue.push(arguments)};\n\t\t\tif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n\t\t\tn.queue=[];t=b.createElement(e);t.async=!0;\n\t\t\tt.src=v;s=b.getElementsByTagName(e)[0];\n\t\t\ts.parentNode.insertBefore(t,s)}(window, document,'script',\n\t\t\t'https://connect.facebook.net/en_US/fbevents.js');\n\t\t\tfbq('init', '297522551433418');\n\t\t\tfbq('track', 'PageView');\n\t\t\t"}}),Object(r.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n\t\t\t(function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement(\"script\");r.src=o;r.async=true;i=t.getElementsByTagName(\"script\")[0];i.parentNode.insertBefore(r,i)})(window,document,\"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js\",\"vgo\");\n      vgo('setAccount', '650538035');\n      vgo('setTrackByDefault', true);\n\n      vgo('process');\n\t\t\t"}}),Object(r.jsx)("noscript",{children:Object(r.jsx)("img",{height:"1",width:"1",style:{display:"none"},src:"https://www.facebook.com/tr?id=297522551433418&ev=PageView&noscript=1"})})]})}}}]);