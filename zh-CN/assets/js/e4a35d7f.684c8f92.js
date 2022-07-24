"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[55508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW TRASH",language:"zh-CN"},i=void 0,s={unversionedId:"sql-reference/sql-statements/Administration/SHOW-TRASH",id:"version-0.15/sql-reference/sql-statements/Administration/SHOW-TRASH",title:"SHOW TRASH",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Administration/SHOW-TRASH.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW-TRASH",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Administration/SHOW-TRASH",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW TRASH",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW TABLE STATUS",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Administration/SHOW-TABLE-STATUS"},next:{title:"UNINSTALL PLUGIN",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Administration/UNINSTALL-PLUGIN"}},l={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-trash"},"SHOW TRASH"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b backend \u5185\u7684\u5783\u573e\u6570\u636e\u5360\u7528\u7a7a\u95f4\u3002\n\u8bed\u6cd5\uff1a\n    SHOW TRASH [ON BackendHost:BackendHeartBeatPort];\n\n\u8bf4\u660e\uff1a\n    1. Backend \u683c\u5f0f\u4e3a\u8be5\u8282\u70b9\u7684BackendHost:BackendHeartBeatPort\u3002\n    2. TrashUsedCapacity \u8868\u793a\u8be5\u8282\u70b9\u5783\u573e\u6570\u636e\u5360\u7528\u7a7a\u95f4\u3002\n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u67e5\u770b\u6240\u6709be\u8282\u70b9\u7684\u5783\u573e\u6570\u636e\u5360\u7528\u7a7a\u95f4\u3002\n\n    SHOW TRASH;\n\n2. \u67e5\u770b'192.168.0.1:9050'\u7684\u5783\u573e\u6570\u636e\u5360\u7528\u7a7a\u95f4(\u4f1a\u663e\u793a\u5177\u4f53\u78c1\u76d8\u4fe1\u606f)\u3002\n\n    SHOW TRASH ON \"192.168.0.1:9050\";\n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, TRASH\n")))}d.isMDXComponent=!0}}]);