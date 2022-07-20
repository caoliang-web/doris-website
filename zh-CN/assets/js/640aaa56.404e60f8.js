"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[62392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"ALTER VIEW",language:"zh-CN"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Definition/ALTER-VIEW",id:"version-1.0/sql-reference/sql-statements/Data-Definition/ALTER-VIEW",title:"ALTER VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-statements/Data-Definition/ALTER-VIEW.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/ALTER-VIEW",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Definition/ALTER-VIEW",draft:!1,tags:[],version:"1.0",frontMatter:{title:"ALTER VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER TABLE",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Definition/ALTER-TABLE"},next:{title:"BACKUP",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Definition/BACKUP"}},c={},s=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alter-view"},"ALTER VIEW"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u8be5\u8bed\u53e5\u7528\u4e8e\u4fee\u6539\u4e00\u4e2aview\u7684\u5b9a\u4e49\n\u8bed\u6cd5\uff1a\n    ALTER VIEW\n    [db_name.]view_name\n    (column1[ COMMENT "col comment"][, column2, ...])\n    AS query_stmt\n    \n\u8bf4\u660e\uff1a\n    1. \u89c6\u56fe\u90fd\u662f\u903b\u8f91\u4e0a\u7684\uff0c\u5176\u4e2d\u7684\u6570\u636e\u4e0d\u4f1a\u5b58\u50a8\u5728\u7269\u7406\u4ecb\u8d28\u4e0a\uff0c\u5728\u67e5\u8be2\u65f6\u89c6\u56fe\u5c06\u4f5c\u4e3a\u8bed\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2\uff0c\u56e0\u6b64\uff0c\u4fee\u6539\u89c6\u56fe\u7684\u5b9a\u4e49\u7b49\u4ef7\u4e8e\u4fee\u6539query_stmt\u3002\n    2. query_stmt \u4e3a\u4efb\u610f\u652f\u6301\u7684 SQL\n   \n')),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1\u3001\u4fee\u6539example_db\u4e0a\u7684\u89c6\u56feexample_view\n\n    ALTER VIEW example_db.example_view\n    (\n        c1 COMMENT "column 1",\n        c2 COMMENT "column 2",\n        c3 COMMENT "column 3"\n    )\n    AS SELECT k1, k2, SUM(v1) FROM example_table \n    GROUP BY k1, k2\n')))}u.isMDXComponent=!0}}]);