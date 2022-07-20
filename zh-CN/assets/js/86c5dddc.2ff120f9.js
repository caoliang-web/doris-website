"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[65352],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,S=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(S,o(o({ref:t},u),{},{components:r})):n.createElement(S,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1682:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"SHOW-LAST-INSERT",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT",id:"sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT",title:"SHOW-LAST-INSERT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-LAST-INSERT",language:"zh-CN"}},s={},c=[{value:"SHOW-LAST-INSERT",id:"show-last-insert",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-last-insert"},"SHOW-LAST-INSERT"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW LAST INSERT"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u6cd5\u7528\u4e8e\u67e5\u770b\u5728\u5f53\u524dsession\u8fde\u63a5\u4e2d\uff0c\u6700\u8fd1\u4e00\u6b21 insert \u64cd\u4f5c\u7684\u7ed3\u679c"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW LAST INSERT\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    TransactionId: 64067\n            Label: insert_ba8f33aea9544866-8ed77e2844d0cc9b\n         Database: default_cluster:db1\n            Table: t1\nTransactionStatus: VISIBLE\n       LoadedRows: 2\n     FilteredRows: 0\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TransactionId\uff1a\u4e8b\u52a1id"),(0,a.kt)("li",{parentName:"ul"},"Label\uff1ainsert\u4efb\u52a1\u5bf9\u5e94\u7684 label"),(0,a.kt)("li",{parentName:"ul"},"Database\uff1ainsert\u5bf9\u5e94\u7684\u6570\u636e\u5e93"),(0,a.kt)("li",{parentName:"ul"},"Table\uff1ainsert\u5bf9\u5e94\u7684\u8868"),(0,a.kt)("li",{parentName:"ul"},"TransactionStatus\uff1a\u4e8b\u52a1\u72b6\u6001",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PREPARE\uff1a\u51c6\u5907\u9636\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"PRECOMMITTED\uff1a\u9884\u63d0\u4ea4\u9636\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"COMMITTED\uff1a\u4e8b\u52a1\u6210\u529f\uff0c\u4f46\u6570\u636e\u4e0d\u53ef\u89c1"),(0,a.kt)("li",{parentName:"ul"},"VISIBLE\uff1a\u4e8b\u52a1\u6210\u529f\u4e14\u6570\u636e\u53ef\u89c1"),(0,a.kt)("li",{parentName:"ul"},"ABORTED\uff1a\u4e8b\u52a1\u5931\u8d25"))),(0,a.kt)("li",{parentName:"ul"},"LoadedRows\uff1a\u5bfc\u5165\u7684\u884c\u6570"),(0,a.kt)("li",{parentName:"ul"},"FilteredRows\uff1a\u88ab\u8fc7\u6ee4\u7684\u884c\u6570")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, LAST, INSERT\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);