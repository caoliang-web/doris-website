"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[22921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,A=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(A,i(i({ref:t},p),{},{components:n})):r.createElement(A,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"ADMIN CLEAN TRASH",language:"zh-CN"},i=void 0,c={unversionedId:"sql-reference/sql-statements/Administration/ADMIN-CLEAN-TRASH",id:"version-1.0/sql-reference/sql-statements/Administration/ADMIN-CLEAN-TRASH",title:"ADMIN CLEAN TRASH",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-statements/Administration/ADMIN-CLEAN-TRASH.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN-CLEAN-TRASH",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-CLEAN-TRASH",draft:!1,tags:[],version:"1.0",frontMatter:{title:"ADMIN CLEAN TRASH",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN CANCEL REPAIR",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-CANCEL-REPAIR"},next:{title:"ADMIN CHECK TABLET",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-CHECK-TABLET"}},s={},l=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"admin-clean-trash"},"ADMIN CLEAN TRASH"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u8be5\u8bed\u53e5\u7528\u4e8e\u6e05\u7406 backend \u5185\u7684\u5783\u573e\u6570\u636e\u3002\n\u8bed\u6cd5\uff1a\n    ADMIN CLEAN TRASH [ON ("BackendHost1:BackendHeartBeatPort1", "BackendHost2:BackendHeartBeatPort2", ...)];\n\n\u8bf4\u660e\uff1a\n    \u4ee5 BackendHost:BackendHeartBeatPort \u8868\u793a\u9700\u8981\u6e05\u7406\u7684 backend \uff0c\u4e0d\u6dfb\u52a0on\u9650\u5b9a\u5219\u6e05\u7406\u6240\u6709 backend \u3002\n')),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u6e05\u7406\u6240\u6709be\u8282\u70b9\u7684\u5783\u573e\u6570\u636e\u3002\n\n    ADMIN CLEAN TRASH;\n\n2. \u6e05\u7406'192.168.0.1:9050'\u548c'192.168.0.2:9050'\u7684\u5783\u573e\u6570\u636e\u3002\n\n    ADMIN CLEAN TRASH ON (\"192.168.0.1:9050\",\"192.168.0.2:9050\");\n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADMIN, CLEAN, TRASH\n")))}d.isMDXComponent=!0}}]);