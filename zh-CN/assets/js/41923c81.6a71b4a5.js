"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[33946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),O=a,f=d["".concat(c,".").concat(O)]||d[O]||u[O]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW CREATE FUNCTION",language:"zh-CN"},l=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-FUNCTION",id:"version-1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-FUNCTION",title:"SHOW CREATE FUNCTION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-FUNCTION.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-FUNCTION",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-FUNCTION",draft:!1,tags:[],version:"1.0",frontMatter:{title:"SHOW CREATE FUNCTION",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW BACKUP",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-BACKUP"},next:{title:"SHOW CREATE ROUTINE LOAD",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-ROUTINE-LOAD"}},c={},s=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-create-function"},"SHOW CREATE FUNCTION"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u7684\u521b\u5efa\u8bed\u53e5\n\u8bed\u6cd5\uff1a\n    SHOW CREATE FUNTION function_name(arg_type [, ...]) [FROM db_name]];\n    \n\u8bf4\u660e\uff1a\n   `function_name`: \u8981\u5c55\u793a\u7684\u51fd\u6570\u540d\u79f0\n   `arg_type`: \u8981\u5c55\u793a\u7684\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\n   \u5982\u679c\u4e0d\u6307\u5b9a db_name\uff0c\u4f7f\u7528\u5f53\u524d\u9ed8\u8ba4 db\n    \n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u5c55\u793a\u9ed8\u8ba4db\u4e0b\u6307\u5b9a\u51fd\u6570\u7684\u521b\u5efa\u8bed\u53e5\n    SHOW CREATE FUNCTION my_add(INT, INT)\n     \n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW,CREATE,FUNCTION\n")))}u.isMDXComponent=!0}}]);