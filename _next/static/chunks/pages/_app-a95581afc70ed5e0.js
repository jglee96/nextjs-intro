(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"===typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4116)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,r){"use strict";var n=r(4941).Z;r(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},s=r(6273),u=r(2725),a=r(3462),l=r(1018),c=r(7190),f=r(1210),d=r(8684);var p="undefined"!==typeof i.default.useTransition,h={};function v(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;h[t+"%"+r+(o?"%"+o:"")]=!0}}var y=i.default.forwardRef((function(e,t){var r,o=e.href,y=e.as,m=e.children,_=e.prefetch,g=e.passHref,x=e.replace,b=e.shallow,S=e.scroll,w=e.locale,j=e.onClick,R=e.onMouseEnter,C=e.legacyBehavior,O=void 0===C?!0!==Boolean(!1):C,k=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);r=m,!O||"string"!==typeof r&&"number"!==typeof r||(r=i.default.createElement("a",null,r));var M=!1!==_,T=n(p?i.default.useTransition():[],2)[1],z=i.default.useContext(a.RouterContext),F=i.default.useContext(l.AppRouterContext);F&&(z=F);var E,P=i.default.useMemo((function(){var e=n(s.resolveHref(z,o,!0),2),t=e[0],r=e[1];return{href:t,as:y?s.resolveHref(z,y):r||t}}),[z,o,y]),A=P.href,I=P.as,L=i.default.useRef(A),B=i.default.useRef(I);O&&(E=i.default.Children.only(r));var N=O?E&&"object"===typeof E&&E.ref:t,D=n(c.useIntersection({rootMargin:"200px"}),3),H=D[0],q=D[1],U=D[2],K=i.default.useCallback((function(e){B.current===I&&L.current===A||(U(),B.current=I,L.current=A),H(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[I,N,A,U,H]);i.default.useEffect((function(){var e=q&&M&&s.isLocalURL(A),t="undefined"!==typeof w?w:z&&z.locale,r=h[A+"%"+I+(t?"%"+t:"")];e&&!r&&v(z,A,I,{locale:t})}),[I,A,q,w,M,z]);var W={ref:K,onClick:function(e){O||"function"!==typeof j||j(e),O&&E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,u,a,l){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r)){e.preventDefault();var c=function(){t[o?"replace":"push"](r,n,{shallow:i,locale:a,scroll:u})};l?l(c):c()}}(e,z,A,I,x,b,S,w,F?T:void 0)},onMouseEnter:function(e){O||"function"!==typeof R||R(e),O&&E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),s.isLocalURL(A)&&v(z,A,I,{priority:!0})}};if(!O||g||"a"===E.type&&!("href"in E.props)){var X="undefined"!==typeof w?w:z&&z.locale,Z=z&&z.isLocaleDomain&&f.getDomainLocale(I,X,z.locales,z.domainLocales);W.href=Z||d.addBasePath(u.addLocale(I,X,z&&z.defaultLocale))}return O?i.default.cloneElement(E,W):i.default.createElement("a",Object.assign({},k,W),r)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,r){"use strict";var n=r(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,l=e.disabled||!s,c=o.useRef(),f=n(o.useState(!1),2),d=f[0],p=f[1],h=n(o.useState(null),2),v=h[0],y=h[1];o.useEffect((function(){if(s){if(c.current&&(c.current(),c.current=void 0),l||d)return;return v&&v.tagName&&(c.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=a.find((function(e){return e.root===r.root&&e.margin===r.margin}));if(n&&(t=u.get(n)))return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return t={id:r,observer:i,elements:o},a.push(r),u.set(r,t),t}(r),o=n.id,i=n.observer,s=n.elements;return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),u.delete(o);var t=a.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&a.splice(t,1)}}}(v,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:r})),function(){null==c.current||c.current(),c.current=void 0}}if(!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[v,l,r,t,d]);var m=o.useCallback((function(){p(!1)}),[]);return[y,d,m]};var o=r(7294),i=r(9311),s="function"===typeof IntersectionObserver;var u=new Map,a=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AppRouterContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.AppRouterContext=o},6089:function(e,t,r){"use strict";e.exports=r(5988)},4116:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}r.r(t),r.d(t,{default:function(){return p}});var i=r(5893),s=r(6089),u=r.n(s),a=r(1664),l=r.n(a),c=r(1163);function f(){var e=(0,c.useRouter)();return(0,i.jsxs)("nav",{className:"jsx-788837601a257030",children:[(0,i.jsx)("img",{src:"/vercel.svg",className:"jsx-788837601a257030"}),(0,i.jsxs)("div",{className:"jsx-788837601a257030",children:[(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)("a",{className:"jsx-788837601a257030 "+(("/"===e.pathname?"active":"")||""),children:"Home"})}),(0,i.jsx)(l(),{href:"/about",children:(0,i.jsx)("a",{className:"jsx-788837601a257030 "+(("/about"===e.pathname?"active":"")||""),children:"About"})})]}),(0,i.jsx)(u(),{id:"788837601a257030",children:"nav.jsx-788837601a257030{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding-top:20px;padding-bottom:10px;-webkit-box-shadow:rgba(50,50,93,.25)0px 50px 100px -20px,rgba(0,0,0,.3)0px 30px 60px -30px;-moz-box-shadow:rgba(50,50,93,.25)0px 50px 100px -20px,rgba(0,0,0,.3)0px 30px 60px -30px;box-shadow:rgba(50,50,93,.25)0px 50px 100px -20px,rgba(0,0,0,.3)0px 30px 60px -30px}img.jsx-788837601a257030{max-width:100px;margin-bottom:5px}nav.jsx-788837601a257030 a.jsx-788837601a257030{font-weight:600;font-size:18px}.active.jsx-788837601a257030{color:tomato}nav.jsx-788837601a257030 div.jsx-788837601a257030{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px}"})]})}function d(e){var t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{}),(0,i.jsx)("div",{children:t})]})}r(906);function p(e){var t=e.Component,r=e.pageProps;return(0,i.jsx)(d,{children:(0,i.jsx)(t,o({},r))})}},906:function(){},7663:function(e){!function(){var t={308:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,a=[],l=!1,c=-1;function f(){l&&u&&(l=!1,u.length?a=u.concat(a):c=-1,a.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=a.length;t;){for(u=a,a=[];++c<t;)u&&u[c].run();c=-1,t=a.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new p(e,t)),1!==a.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},s=!0;try{t[e](i,i.exports,n),s=!1}finally{s&&delete r[e]}return i.exports}n.ab="//";var o=n(308);e.exports=o}()},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)},4207:function(e,t,r){var n=r(3454);!function(){"use strict";var t={583:function(e){e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},590:function(e,t,r){t.__esModule=!0,t.computeId=function(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;i[n]||(i[n]="jsx-"+(0,o.default)(e+"-"+r));return i[n]},t.computeSelector=function(e,t){"undefined"===typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var r=e+t;i[r]||(i[r]=t.replace(/__jsx-style-dynamic-selector/g,e));return i[r]};var n,o=(n=r(583))&&n.__esModule?n:{default:n};var i={}},503:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var o="undefined"!==typeof n&&n.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,a=void 0===s?o:s,l=t.isBrowser,c=void 0===l?"undefined"!==typeof window:l;u(i(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",u("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,n,s,a=e.prototype;return a.setOptimizeForSpeed=function(e){u("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(u(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(s){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];u(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,r){t&&u(i(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,n),s&&r(t,s),e}();function u(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s},449:function(e,t,r){t.__esModule=!0,t.default=l;var n,o=(n=r(522))&&n.__esModule?n:{default:n},i=r(147),s=r(590);var u=o.default.useInsertionEffect||o.default.useLayoutEffect,a="undefined"!==typeof window?(0,i.createStyleRegistry)():void 0;function l(e){var t=a||(0,i.useStyleRegistry)();return t?"undefined"===typeof window?(t.add(e),null):(u((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}l.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return(0,s.computeId)(t,r)})).join(" ")}},147:function(e,t,r){t.__esModule=!0,t.createStyleRegistry=c,t.StyleRegistry=function(e){var t=e.registry,r=e.children,n=(0,o.useContext)(l),i=(0,o.useState)((function(){return n||t||c()}))[0];return o.default.createElement(l.Provider,{value:i},r)},t.useStyleRegistry=function(){return(0,o.useContext)(l)},t.StyleSheetContext=t.StyleSheetRegistry=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(522)),i=(n=r(503))&&n.__esModule?n:{default:n},s=r(590);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var a=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,s=void 0!==o&&o,u=t.isBrowser,a=void 0===u?"undefined"!==typeof window:u;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var r=e[0],n=e[1];return o.default.createElement("style",{id:"__"+r,key:"__"+r,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var o=(0,s.computeId)(n,r);return{styleId:o,rules:Array.isArray(t)?t.map((function(e){return(0,s.computeSelector)(o,e)})):[(0,s.computeSelector)(o,t)]}}return{styleId:(0,s.computeId)(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.StyleSheetRegistry=a;var l=(0,o.createContext)(null);function c(){return new a}t.StyleSheetContext=l},522:function(e){e.exports=r(7294)}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={exports:{}},s=!0;try{t[e](n,n.exports,i),s=!1}finally{s&&delete o[e]}return n.exports}i.ab="//";var s={};!function(){var e=s;e.__esModule=!0,e.style=e.useStyleRegistry=e.createStyleRegistry=e.StyleRegistry=void 0;var t=i(147);e.StyleRegistry=t.StyleRegistry,e.createStyleRegistry=t.createStyleRegistry,e.useStyleRegistry=t.useStyleRegistry;var r,n=(r=i(449))&&r.__esModule?r:{default:r};e.style=n.default}(),e.exports=s}()},5988:function(e,t,r){e.exports=r(4207).style}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var r=e.O();_N_E=r}]);