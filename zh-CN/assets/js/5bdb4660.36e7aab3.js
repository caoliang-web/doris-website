"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[20528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"Connection Action",language:"zh-CN"},a=void 0,c={unversionedId:"administrator-guide/http-actions/fe/connection-action",id:"version-0.15/administrator-guide/http-actions/fe/connection-action",title:"Connection Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/http-actions/fe/connection-action.md",sourceDirName:"administrator-guide/http-actions/fe",slug:"/administrator-guide/http-actions/fe/connection-action",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/fe/connection-action",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Connection Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Config Action",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/fe/config-action"},next:{title:"Get DDL Statement Action",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/fe/get-ddl-stmt-action"}},l={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connection-action"},"Connection Action"),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/connection")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a connection id\uff0c\u8fd4\u56de\u8fd9\u4e2a\u8fde\u63a5\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\uff0c\u6216\u6700\u540e\u4e00\u6b21\u6267\u884c\u5b8c\u6210\u7684 query id\u3002"),(0,o.kt)("p",null,"connection id \u53ef\u4ee5\u901a\u8fc7 MySQL \u547d\u4ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"show processlist;")," \u4e2d\u7684 id \u5217\u67e5\u770b\u3002"),(0,o.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"connection_id")),(0,o.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u7684 connection id"))),(0,o.kt)("h2",{id:"request-body"},"Request body"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "query_id": "b52513ce3f0841ca-9cb4a96a268f2dba"\n    },\n    "count": 0\n}\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u5b9a connection id \u7684 query id"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'GET /api/connection?connection_id=101\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "query_id": "b52513ce3f0841ca-9cb4a96a268f2dba"\n    },\n    "count": 0\n}\n')))))}u.isMDXComponent=!0}}]);