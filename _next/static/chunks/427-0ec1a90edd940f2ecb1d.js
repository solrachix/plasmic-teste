(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{14:function(e,t,n){"use strict";n.d(t,{L:function(){return le},Kq:function(){return V},AK:function(){return me},eh:function(){return Y},Hf:function(){return ye},xf:function(){return ie},LK:function(){return ue},zK:function(){return q},nR:function(){return se}});var r=n(178),o=n.n(r),a=n(7294),i=n.t(a,2),c=n(3935);"undefined"!==typeof window&&a.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let u=new Map,l=new Set;function s(){if("undefined"===typeof window)return;let e=t=>{let n=u.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),u.delete(t.target)),0===u.size)){for(let e of l)e();l.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=u.get(t.target);n||(n=new Set,u.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?s():document.addEventListener("DOMContentLoaded",s));"undefined"!==typeof window&&window.visualViewport;new Map;function f(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function p(){return f(/^Mac/)}function d(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const h=a.createContext(null);h.displayName="PressResponderContext";let v=null,y=new Set,m=!1,b=!1;function w(e,t){for(let n of y)n(e,t)}function g(e){b=!0,function(e){return!(e.metaKey||!p()&&e.altKey||e.ctrlKey)}(e)&&(v="keyboard",w("keyboard",e))}function T(e){v="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(b=!0,w("pointer",e))}function A(e){d(e)&&(b=!0,v="virtual")}function z(e){e.target!==window&&e.target!==document&&(b||(v="virtual",w("virtual",e)),b=!1)}function k(){b=!1}function I(){if("undefined"===typeof window||m)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){b=!0,e.apply(this,arguments)},document.addEventListener("keydown",g,!0),document.addEventListener("keyup",g,!0),document.addEventListener("click",A,!0),window.addEventListener("focus",z,!0),window.addEventListener("blur",k,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",T,!0),document.addEventListener("pointermove",T,!0),document.addEventListener("pointerup",T,!0)):(document.addEventListener("mousedown",T,!0),document.addEventListener("mousemove",T,!0),document.addEventListener("mouseup",T,!0)),m=!0}"undefined"!==typeof document&&("loading"!==document.readyState?I():document.addEventListener("DOMContentLoaded",I));new Set;const Z=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];Z.join(":not([hidden]),");Z.push('[tabindex]:not([tabindex="-1"]):not([disabled])');Z.join(':not([hidden]):not([tabindex="-1"]),');function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function F(e){return null!=e}function S(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++){var c=i[a];c in e&&(t[c]=e[c])}return t}function C(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=Object.keys(e);a<i.length;a++){var c=i[a];r.includes(c)||(t[c]=e[c])}return t}function K(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length)return function(e){for(var n,r=e,o=j(t);!(n=o()).done;){r=(0,n.value)(r)}return r}}var L="undefined"!==typeof window,M=Symbol("NONE"),Q=L?a.useLayoutEffect:a.useEffect;function X(e,t,n){return Array.isArray(n)?a.createElement.apply(a,[e,t].concat(n)):n||"children"in t?a.createElement(e,t,n):a.createElement(e,t)}function x(e){return Array.isArray(e)?1===e.length?e[0]:a.createElement.apply(a,[a.Fragment,{}].concat(e)):e}function _(e){for(var t=P({},e),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++)for(var c=i[a],u=0,l=Object.keys(c);u<l.length;u++){var s=l[u];t[s]=D(s,t[s],c[s])}return t}function H(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n,r=j(t);!(n=r()).done;){H(n.value,e)}}}function D(e,t,n){return t===M||n===M?null:null==t?n:null==n?t:"className"===e?o()(t,n):"style"===e?P({},t,n):"ref"===e?R(t,n):typeof t!==typeof n?n:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof n&&(e=n.apply(void 0,arguments)),e}:n}function N(e,t,n,r){var o=t.children,a=E(t,["children"]),i=W(o,null!=n&&n);return X(e,P({ref:r},a),i)}function $(e,t){var n=e.as,r=e.hasGap;return N(null!=n?n:"div",E(e,["as","hasGap"]),r,t)}var B=(0,a.forwardRef)($),U=function(e){return(0,a.forwardRef)((function(t,n){var r=t.hasGap,o=E(t,["hasGap"]);return N(e,o,r,n)}))},V=Object.assign(B,{div:U("div"),a:U("a"),button:U("button"),h1:U("h1"),h2:U("h2"),h3:U("h3"),h4:U("h4"),h5:U("h5"),h6:U("h6"),label:U("label"),form:U("form"),section:U("section"),head:U("head"),main:U("main"),nav:U("nav")});function q(e,t,n){if(null==e)return!1;var r=e[t];return null!=r&&(!0===r?n===t:!1!==r&&(Array.isArray(r)?r.includes(n):"string"===typeof r?r===n:void 0!==r[n]&&!1!==r[n]))}function W(e,t){var n=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?a.createElement.apply(i,["div",{className:n}].concat(e)):(0,a.createElement)("div",{className:n},e):null}function G(e,t,n,r){var o=re(e),a=ne(n,o.props);if("render"===o.type)return o.render(a,t);var i=t;"as"===o.type&&o.as&&(t===V?a.as=o.as:i=o.as);var c=a.children;o.wrapChildren&&(c=o.wrapChildren(x(c))),r&&(c=W(c,!0));var u=X(i,a,c);return o.wrap&&(u=o.wrap(u)),u}var J=new Map;function Y(e,t){null==t&&(t={});var n=t["data-plasmic-name"],r=t["data-plasmic-root"],o=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var a=arguments.length,i=new Array(a>2?a-2:0),c=2;c<a;c++)i[c-2]=arguments[c];var u=ee.apply(void 0,[e,t].concat(i));if(n&&J.set(n,u),r){var l,s=o?null!=(l=J.get(o))?l:null:u;return J.clear(),s}return u}function ee(e,t){var n,r=t["data-plasmic-override"],o=t["data-plasmic-wrap-flex-child"],a=null!=(n=t["data-plasmic-trigger-props"])?n:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,c=new Array(i>2?i-2:0),u=2;u<i;u++)c[u-2]=arguments[u];return G(r,e,_.apply(void 0,[t,0===c.length?{}:{children:x(c)}].concat(a)),o)}var te=Symbol("UNSET");function ne(e,t){if(!t)return e;for(var n=P({},e),r=0,o=Object.keys(t);r<o.length;r++){var a=o[r],i=e[a],c=t[a];c===te?delete n[a]:(null!=c||"className"===a||"style"===a||a.startsWith("on")&&"function"===typeof i||(c=M),n[a]=D(a,i,c))}return n}function re(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||a.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?P({},e,{props:e.props||{},type:"as"}):"render"in e?P({},e,{type:"render"}):"props"in e?P({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),n=["wrap","wrapChildren"],t.every((function(e){return n.includes(e)}))?P({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,n;throw new Error("Unexpected override: "+e)}function oe(e,t){for(var n={},r=0,o=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));r<o.length;r++){var a=o[r];n[a]=ae(e[a],t[a])}return n}function ae(e,t){var n,r;if(!e)return t;if(!t)return e;var o=re(e),a=re(t),i=K.apply(void 0,[o.wrap,a.wrap].filter(F)),c=K.apply(void 0,[o.wrapChildren,a.wrapChildren].filter(F)),u=ne(null!=(n=o.props)?n:{},a.props);if("render"===a.type)return{render:a.render,props:u,wrap:i,wrapChildren:c};if("render"===o.type)return{render:o.render,props:u,wrap:i,wrapChildren:c};var l=null!=(r="as"===a.type?a.as:void 0)?r:"as"===o.type?o.as:void 0;return P({props:u,wrap:i,wrapChildren:c},l?{as:l}:{})}function ie(e,t){var n,r,o,a,i,c,u,l,s=t.name,f=t.descendantNames,p=t.internalVariantPropNames,d=t.internalArgPropNames,h=["variants","args","overrides"],v=(a=C.apply(void 0,[S.apply(void 0,[e].concat(p))].concat(h)),i=null!=(n=e.variants)?n:{},P({},a,i)),y=(c=C.apply(void 0,[S.apply(void 0,[e].concat(d))].concat(h)),u=null!=(r=e.args)?r:{},P({},c,u)),m=oe(C.apply(void 0,[S.apply(void 0,[e].concat(f))].concat(d,p,h)),null!=(o=e.overrides)?o:{}),b=C.apply(void 0,[e,"variants","args","overrides"].concat(f,p,d));Object.keys(b).length>0&&(m=oe(m,((l={})[s]={props:b},l)));return{variants:v,args:y,overrides:m}}var ce={};function ue(e){return Object.entries(e).filter((function(e){var t=e[1];return"PLEASE_RENDER_INSIDE_PROVIDER"===t})).forEach((function(t){var n=t[0];e[n]=void 0,ce[n]})),e}function le(e){if("nextjs"===e.platform&&e.href){var t=["href","replace","scroll","shallow","passHref","prefetch","locale"];return a.createElement(e.component,S.apply(void 0,[e].concat(t)),a.createElement("a",Object.assign({},C.apply(void 0,[e,"component","platform"].concat(t)))))}return"gatsby"===e.platform&&(n=e.href,/^\/(?!\/)/.test(n))?a.createElement(e.component,P({},C(e,"component","platform","href"),{to:e.href})):a.createElement("a",Object.assign({},C(e,"component","platform")));var n}function se(e){var t=e.as,n=e.defaultContents,r=e.value,o=E(e,["as","defaultContents","value"]),i=void 0===r?n:r;if(!i||Array.isArray(i)&&0===i.length)return null;var c=fe(i);return c&&(i=(0,a.createElement)("div",{className:"__wab_slot-string-wrapper"},c)),0===Object.keys(o).filter((function(e){return!!o[e]})).length?(0,a.createElement)(a.Fragment,null,i):(0,a.createElement)(t||"div",_({className:"__wab_slot"},o),i)}function fe(e){return(0,a.isValidElement)(e)&&e.type===a.Fragment?fe(e.props.children):"string"===typeof e?e:Array.isArray(e)&&1===e.length&&"string"===typeof e[0]?e[0]:void 0}var pe=[],de={};function he(){return L?Object.entries(de).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var ve=void 0;function ye(e,t){return Object.assign(de,t),function(){var t=(0,a.useState)()[1],n=(0,a.useRef)(ve||[]);return Q((function(){var e=function(){ve&&n.current.join("")!==ve.join("")&&(n.current=ve,t({}))};return pe.push(e),void 0===ve&&(ve=he()),e(),function(){pe.splice(pe.indexOf(e),1)}}),[]),e?ve||[]:ve?ve[ve.length-1]:void 0}}L&&window.addEventListener("resize",(function(){var e=he();ve&&e.join("")===ve.join("")||(ve=e,c.unstable_batchedUpdates((function(){return pe.forEach((function(e){return e()}))})))}));var me=o()},178:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},110:function(e,t,n){"use strict";n.d(t,{ih:function(){return ee},ZP:function(){return ne}});var r=n(7294),o=n(139),a=n(4981),i=n(7976),c=n(1758),u=n(5560),l=n(9443),s=n(2303),f=n(7098),p=n(5348),d=n(6600),h=n(1073),v=n(8975),y=n(586),m=n(7211),b=n(3477),w=n(292),g=n(8785),T=n(9815),A=n(7068),z=n(1224),k=n(6938),I=n(9116),Z=n(8251),P=n(5907),E=n(2918),O=n(534),j=n(2147),F=n(235),S=n(1949),C=n(3749),K=n(2179),L=n(5232),M=n(2429),Q=n(6073),X=n(6314),x=n(9800),_=n(4364),H=n(7640),R=n(5938),D=n(7435),N=n(8504),$=n(4997),B=n(8487),U=n(3659),V=n(8146);const q={Home:o.ZP,Header:a.ZP,Footer:i.ZP,Section:c.ZP,FeatureCard:u.ZP,TopSection:l.ZP,HomeCta:s.ZP,IconLink:f.ZP,LinkButton:p.ZP,Testimonial:d.ZP,Avatar:h.ZP,Pricing:v.ZP,BaseCard:y.ZP,Plan:m.ZP,Bullet:b.ZP,Faq:w.ZP,Features:g.ZP,Teste:T.ZP,TwitterIconIcon:A.Z,GithubIconIcon:z.Z,FacebookIconIcon:k.Z,FacebookLogoIcon:I.Z,LogoIcon:Z.Z,SphereIcon:P.Z,QuoteDashesIcon:E.Z,TinderLogoIcon:O.Z,AirbnbLogoIcon:j.Z,HubspotLogoIcon:F.Z,AmazonLogoIcon:S.Z,SwapIcon:C.Z,SlotIcon:K.Z,CycleIcon:L.Z,HammerIcon:M.Z,PencilIcon:Q.Z,LightningIcon:X.Z,RightArrowIcon:x.Z,Done24Pxsvg2Icon:_.Z,Ellipse15Icon:H.Z,SearchIcon:R.Z,BgIcon:D.C,Vector5Icon:N.Z,Forma1Icon:$.Z,CombinedShape16072Icon:B.Z,Vector6Icon:U.Z},W={Screen:{component:V.wd,isContext:!Boolean("ScreenVariantProvider")}},G={Home:{eKphkzzQhvabh5aATFwXTr:o.ZP},Header:{eKphkzzQhvabh5aATFwXTr:a.ZP},Footer:{eKphkzzQhvabh5aATFwXTr:i.ZP},Section:{eKphkzzQhvabh5aATFwXTr:c.ZP},FeatureCard:{eKphkzzQhvabh5aATFwXTr:u.ZP},TopSection:{eKphkzzQhvabh5aATFwXTr:l.ZP},HomeCta:{eKphkzzQhvabh5aATFwXTr:s.ZP},IconLink:{eKphkzzQhvabh5aATFwXTr:f.ZP},LinkButton:{eKphkzzQhvabh5aATFwXTr:p.ZP},Testimonial:{eKphkzzQhvabh5aATFwXTr:d.ZP},Avatar:{eKphkzzQhvabh5aATFwXTr:h.ZP},Pricing:{eKphkzzQhvabh5aATFwXTr:v.ZP},BaseCard:{eKphkzzQhvabh5aATFwXTr:y.ZP},Plan:{eKphkzzQhvabh5aATFwXTr:m.ZP},Bullet:{eKphkzzQhvabh5aATFwXTr:b.ZP},Faq:{eKphkzzQhvabh5aATFwXTr:w.ZP},Features:{eKphkzzQhvabh5aATFwXTr:g.ZP},Teste:{eKphkzzQhvabh5aATFwXTr:T.ZP},TwitterIconIcon:{eKphkzzQhvabh5aATFwXTr:A.Z},GithubIconIcon:{eKphkzzQhvabh5aATFwXTr:z.Z},FacebookIconIcon:{eKphkzzQhvabh5aATFwXTr:k.Z},FacebookLogoIcon:{eKphkzzQhvabh5aATFwXTr:I.Z},LogoIcon:{eKphkzzQhvabh5aATFwXTr:Z.Z},SphereIcon:{eKphkzzQhvabh5aATFwXTr:P.Z},QuoteDashesIcon:{eKphkzzQhvabh5aATFwXTr:E.Z},TinderLogoIcon:{eKphkzzQhvabh5aATFwXTr:O.Z},AirbnbLogoIcon:{eKphkzzQhvabh5aATFwXTr:j.Z},HubspotLogoIcon:{eKphkzzQhvabh5aATFwXTr:F.Z},AmazonLogoIcon:{eKphkzzQhvabh5aATFwXTr:S.Z},SwapIcon:{eKphkzzQhvabh5aATFwXTr:C.Z},SlotIcon:{eKphkzzQhvabh5aATFwXTr:K.Z},CycleIcon:{eKphkzzQhvabh5aATFwXTr:L.Z},HammerIcon:{eKphkzzQhvabh5aATFwXTr:M.Z},PencilIcon:{eKphkzzQhvabh5aATFwXTr:Q.Z},LightningIcon:{eKphkzzQhvabh5aATFwXTr:X.Z},RightArrowIcon:{eKphkzzQhvabh5aATFwXTr:x.Z},Done24Pxsvg2Icon:{eKphkzzQhvabh5aATFwXTr:_.Z},Ellipse15Icon:{eKphkzzQhvabh5aATFwXTr:H.Z},SearchIcon:{eKphkzzQhvabh5aATFwXTr:R.Z},BgIcon:{eKphkzzQhvabh5aATFwXTr:D.C},Vector5Icon:{eKphkzzQhvabh5aATFwXTr:N.Z},Forma1Icon:{eKphkzzQhvabh5aATFwXTr:$.Z},CombinedShape16072Icon:{eKphkzzQhvabh5aATFwXTr:B.Z},Vector6Icon:{eKphkzzQhvabh5aATFwXTr:U.Z}},J={Screen:{eKphkzzQhvabh5aATFwXTr:{component:V.wd,isContext:!Boolean(void 0)}}},Y={"/":{name:"Home",projectId:"eKphkzzQhvabh5aATFwXTr"},"/pricing":{name:"Pricing",projectId:"eKphkzzQhvabh5aATFwXTr"},"/features":{name:"Features",projectId:"eKphkzzQhvabh5aATFwXTr"},"/teste":{name:"Teste",projectId:"eKphkzzQhvabh5aATFwXTr"}};function ee(e){return Array.isArray(e)&&(e=e.join("/")),e.startsWith("/")||(e="/"+e),Y[e]}function te(e,t,n){const o=Object.entries(n||{}).map((([e,n])=>{if(W[e]){const{component:t,isContext:r}=W[e];return[r?t.Provider:t,n]}if(!J[e])throw new Error(`The provider ${e} could not be found.`);if(!J[e][t])throw new Error(`The provider ${e} requires a valid projectId. Passed: ${t}. Options: ${Object.keys(J[e])}`);const{component:r,isContext:o}=J[e][t];return[o?r.Provider:r,n]}));return o.length?o.reduce(((e,[t,n])=>r.createElement(t,{value:n},e)),e):e}function ne({projectId:e,component:t,componentProps:n={},providerProps:o={}}){const a=function(e,t){if(q[t])return q[t];if(!G[t])throw new Error(`The component ${t} could not be found.`);if(!G[t][e])throw new Error(`The component ${t} requires a valid projectId. Passed: ${e}. Options: ${Object.keys(G[t])}`);return G[t][e]}(e,t);return te(r.createElement(a,n),e,o)}},6071:function(e,t,n){"use strict";var r=n(3848),o=n(9448);t.default=void 0;var a=o(n(7294)),i=n(1689),c=n(2441),u=n(5749),l={};function s(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var w=a.Children.only(h),g=w&&"object"===typeof w&&w.ref,T=(0,u.useIntersection)({rootMargin:"200px"}),A=r(T,2),z=A[0],k=A[1],I=a.default.useCallback((function(e){z(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,z]);(0,a.useEffect)((function(){var e=k&&t&&(0,i.isLocalURL)(p),r="undefined"!==typeof b?b:n&&n.locale,o=l[p+"%"+d+(r?"%"+r:"")];e&&!o&&s(n,p,d,{locale:r})}),[d,p,k,b,t,n]);var Z={ref:I,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:c}))}(e,n,p,d,v,y,m,b)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),s(n,p,d,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){var P="undefined"!==typeof b?b:n&&n.locale,E=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(d,P,n&&n.locales,n&&n.domainLocales);Z.href=E||(0,i.addBasePath)((0,i.addLocale)(d,P,n&&n.defaultLocale))}return a.default.cloneElement(w,Z)};t.default=f},5749:function(e,t,n){"use strict";var r=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,u=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],p=s[1],d=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=n(7294),a=n(8391),i="undefined"!==typeof IntersectionObserver;var c=new Map},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},7947:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(617))&&a.__esModule?a:{default:a},u=n(3367),l=n(4287),s=n(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,l=h.length;u<l;u++){var s=h[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],p=r[s]||new Set;"name"===s&&i||!p.has(f)?(p.add(f),r[s]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function y(e){var t=e.children,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}y.rewind=function(){};var m=y;t.default=m},617:function(e,t,n){"use strict";var r=n(3115),o=n(2553),a=n(2012),i=(n(450),n(9807)),c=n(7690),u=n(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var s=n(7294),f=function(e){i(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},1859:function(){},9008:function(e,t,n){e.exports=n(7947)},1664:function(e,t,n){e.exports=n(6071)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6265:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},8347:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},1385:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),o=n(7381),a=n(3585),i=n(5725);e.exports=function(e){return r(e)||o(e)||a(e)||i()}}}]);