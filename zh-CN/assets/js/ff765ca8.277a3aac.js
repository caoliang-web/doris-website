"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[23921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"CREATE FILE",language:"zh-CN"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Administration/CREATE-FILE",id:"version-1.0/sql-reference/sql-statements/Administration/CREATE-FILE",title:"CREATE FILE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-statements/Administration/CREATE-FILE.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/CREATE-FILE",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/CREATE-FILE",draft:!1,tags:[],version:"1.0",frontMatter:{title:"CREATE FILE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE CLUSTER",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/CREATE-CLUSTER"},next:{title:"DROP CLUSTER",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/DROP-CLUSTER"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-file"},"CREATE FILE"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u5e76\u4e0a\u4f20\u4e00\u4e2a\u6587\u4ef6\u5230 Doris \u96c6\u7fa4\u3002\n\u8be5\u529f\u80fd\u901a\u5e38\u7528\u4e8e\u7ba1\u7406\u4e00\u4e9b\u5176\u4ed6\u547d\u4ee4\u4e2d\u9700\u8981\u4f7f\u7528\u5230\u7684\u6587\u4ef6\uff0c\u5982\u8bc1\u4e66\u3001\u516c\u94a5\u79c1\u94a5\u7b49\u7b49\u3002\n\n\u8be5\u547d\u4ee4\u53ea\u7528 admin \u6743\u9650\u7528\u6237\u53ef\u4ee5\u6267\u884c\u3002\n\u67d0\u4e2a\u6587\u4ef6\u90fd\u5f52\u5c5e\u4e0e\u67d0\u4e00\u4e2a\u7684 database\u3002\u5bf9 database \u62e5\u6709\u8bbf\u95ee\u6743\u9650\u7684\u7528\u6237\u90fd\u53ef\u4ee5\u4f7f\u7528\u8be5\u6587\u4ef6\u3002\n\n\u5355\u4e2a\u6587\u4ef6\u5927\u5c0f\u9650\u5236\u4e3a 1MB\u3002\n\u4e00\u4e2a Doris \u96c6\u7fa4\u6700\u591a\u4e0a\u4f20 100 \u4e2a\u6587\u4ef6\u3002\n\n\u8bed\u6cd5\uff1a\n    \n    CREATE FILE "file_name" [IN database]\n    [properties]\n\n\u8bf4\u660e\uff1a\n    file_name:  \u81ea\u5b9a\u4e49\u6587\u4ef6\u540d\u3002\n    database: \u6587\u4ef6\u5f52\u5c5e\u4e8e\u67d0\u4e00\u4e2a db\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u4f7f\u7528\u5f53\u524d session \u7684 db\u3002\n    properties \u652f\u6301\u4ee5\u4e0b\u53c2\u6570:\n\n        url: \u5fc5\u987b\u3002\u6307\u5b9a\u4e00\u4e2a\u6587\u4ef6\u7684\u4e0b\u8f7d\u8def\u5f84\u3002\u5f53\u524d\u4ec5\u652f\u6301\u65e0\u8ba4\u8bc1\u7684 http \u4e0b\u8f7d\u8def\u5f84\u3002\u547d\u4ee4\u6267\u884c\u6210\u529f\u540e\uff0c\u6587\u4ef6\u5c06\u88ab\u4fdd\u5b58\u5728 doris \u4e2d\uff0c\u8be5 url \u5c06\u4e0d\u518d\u9700\u8981\u3002\n        catalog: \u5fc5\u987b\u3002\u5bf9\u6587\u4ef6\u7684\u5206\u7c7b\u540d\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u3002\u4f46\u5728\u67d0\u4e9b\u547d\u4ee4\u4e2d\uff0c\u4f1a\u67e5\u627e\u6307\u5b9a catalog \u4e2d\u7684\u6587\u4ef6\u3002\u6bd4\u5982\u4f8b\u884c\u5bfc\u5165\u4e2d\u7684\uff0c\u6570\u636e\u6e90\u4e3a kafka \u65f6\uff0c\u4f1a\u67e5\u627e catalog \u540d\u4e3a kafka \u4e0b\u7684\u6587\u4ef6\u3002\n        md5: \u53ef\u9009\u3002\u6587\u4ef6\u7684 md5\u3002\u5982\u679c\u6307\u5b9a\uff0c\u4f1a\u5728\u4e0b\u8f7d\u6587\u4ef6\u540e\u8fdb\u884c\u6821\u9a8c\u3002\n')),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1. \u521b\u5efa\u6587\u4ef6 ca.pem \uff0c\u5206\u7c7b\u4e3a kafka\n\n    CREATE FILE "ca.pem"\n    PROPERTIES\n    (\n        "url" = "https://test.bj.bcebos.com/kafka-key/ca.pem",\n        "catalog" = "kafka"\n    );\n\n2. \u521b\u5efa\u6587\u4ef6 client.key\uff0c\u5206\u7c7b\u4e3a my_catalog\n\n    CREATE FILE "client.key"\n    IN my_database\n    PROPERTIES\n    (\n        "url" = "https://test.bj.bcebos.com/kafka-key/client.key",\n        "catalog" = "my_catalog",\n        "md5" = "b5bb901bf10f99205b39a46ac3557dd9"\n    );\n    \n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE,FILE\n")))}d.isMDXComponent=!0}}]);