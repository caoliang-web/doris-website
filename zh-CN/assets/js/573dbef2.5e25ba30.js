"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[37777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"SHOW LAST INSERT",language:"zh-CN"},i=void 0,o={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-LAST-INSERT",id:"version-1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-LAST-INSERT",title:"SHOW LAST INSERT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-LAST-INSERT.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-LAST-INSERT",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-LAST-INSERT",draft:!1,tags:[],version:"1.0",frontMatter:{title:"SHOW LAST INSERT",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW TRANSACTION",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-TRANSACTION"},next:{title:"STOP ROUTINE LOAD",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Manipulation/STOP-ROUTINE-LOAD"}},s={},p=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-last-insert"},"SHOW LAST INSERT"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("p",null,"\u8be5\u8bed\u6cd5\u7528\u4e8e\u67e5\u770b\u5728\u5f53\u524dsession\u8fde\u63a5\u4e2d\uff0c\u6700\u8fd1\u4e00\u6b21 insert \u64cd\u4f5c\u7684\u7ed3\u679c"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW LAST INSERT\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    TransactionId: 64067\n            Label: insert_ba8f33aea9544866-8ed77e2844d0cc9b\n         Database: default_cluster:db1\n            Table: t1\nTransactionStatus: VISIBLE\n       LoadedRows: 2\n     FilteredRows: 0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TransactionId\uff1a\u4e8b\u52a1id"),(0,a.kt)("li",{parentName:"ul"},"Label\uff1ainsert\u4efb\u52a1\u5bf9\u5e94\u7684 label"),(0,a.kt)("li",{parentName:"ul"},"Database\uff1ainsert\u5bf9\u5e94\u7684\u6570\u636e\u5e93"),(0,a.kt)("li",{parentName:"ul"},"Table\uff1ainsert\u5bf9\u5e94\u7684\u8868"),(0,a.kt)("li",{parentName:"ul"},"TransactionStatus\uff1a\u4e8b\u52a1\u72b6\u6001",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PREPARE\uff1a\u51c6\u5907\u9636\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"PRECOMMITTED\uff1a\u9884\u63d0\u4ea4\u9636\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"COMMITTED\uff1a\u4e8b\u52a1\u6210\u529f\uff0c\u4f46\u6570\u636e\u4e0d\u53ef\u89c1"),(0,a.kt)("li",{parentName:"ul"},"VISIBLE\uff1a\u4e8b\u52a1\u6210\u529f\u4e14\u6570\u636e\u53ef\u89c1"),(0,a.kt)("li",{parentName:"ul"},"ABORTED\uff1a\u4e8b\u52a1\u5931\u8d25"))),(0,a.kt)("li",{parentName:"ul"},"LoadedRows\uff1a\u5bfc\u5165\u7684\u884c\u6570"),(0,a.kt)("li",{parentName:"ul"},"FilteredRows\uff1a\u88ab\u8fc7\u6ee4\u7684\u884c\u6570")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, LAST, INSERT\n")))}u.isMDXComponent=!0}}]);