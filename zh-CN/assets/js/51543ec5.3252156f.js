"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[85361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||O[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>O,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW RESTORE",language:"zh-CN"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-RESTORE",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-RESTORE",title:"SHOW RESTORE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-RESTORE.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-RESTORE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-RESTORE",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW RESTORE",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW REPOSITORIES",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-REPOSITORIES"},next:{title:"SHOW ROUTINE LOAD TASK",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-ROUTINE-LOAD-TASK"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function O(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-restore"},"SHOW RESTORE"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b RESTORE \u4efb\u52a1\n\u8bed\u6cd5\uff1a\n    SHOW RESTORE [FROM db_name]\n    \n\u8bf4\u660e\uff1a\n    1. Palo \u4e2d\u4ec5\u4fdd\u5b58\u6700\u8fd1\u4e00\u6b21 RESTORE \u4efb\u52a1\u3002\n    2. \u5404\u5217\u542b\u4e49\u5982\u4e0b\uff1a\n        JobId\uff1a                  \u552f\u4e00\u4f5c\u4e1aid\n        Label\uff1a                  \u8981\u6062\u590d\u7684\u5907\u4efd\u7684\u540d\u79f0\n        Timestamp\uff1a              \u8981\u6062\u590d\u7684\u5907\u4efd\u7684\u65f6\u95f4\u7248\u672c\n        DbName\uff1a                 \u6240\u5c5e\u6570\u636e\u5e93\n        State\uff1a                  \u5f53\u524d\u9636\u6bb5\n            PENDING\uff1a        \u63d0\u4ea4\u4f5c\u4e1a\u540e\u7684\u521d\u59cb\u72b6\u6001\n            SNAPSHOTING\uff1a    \u6267\u884c\u5feb\u7167\u4e2d\n            DOWNLOAD\uff1a       \u5feb\u7167\u5b8c\u6210\uff0c\u51c6\u5907\u4e0b\u8f7d\u4ed3\u5e93\u4e2d\u7684\u5feb\u7167\n            DOWNLOADING\uff1a    \u5feb\u7167\u4e0b\u8f7d\u4e2d\n            COMMIT\uff1a         \u5feb\u7167\u4e0b\u8f7d\u5b8c\u6210\uff0c\u51c6\u5907\u751f\u6548\n            COMMITING\uff1a      \u751f\u6548\u4e2d\n            FINISHED\uff1a       \u4f5c\u4e1a\u6210\u529f\n            CANCELLED\uff1a      \u4f5c\u4e1a\u5931\u8d25\n        AllowLoad\uff1a              \u6062\u590d\u65f6\u662f\u5426\u5141\u8bb8\u5bfc\u5165\uff08\u5f53\u524d\u4e0d\u652f\u6301\uff09\n        ReplicationNum\uff1a         \u6307\u5b9a\u6062\u590d\u7684\u526f\u672c\u6570\n        RestoreJobs\uff1a            \u8981\u6062\u590d\u7684\u8868\u548c\u5206\u533a\n        CreateTime\uff1a             \u4efb\u52a1\u63d0\u4ea4\u65f6\u95f4\n        MetaPreparedTime\uff1a       \u5143\u6570\u636e\u51c6\u5907\u5b8c\u6210\u65f6\u95f4\n        SnapshotFinishedTime\uff1a   \u5feb\u7167\u5b8c\u6210\u65f6\u95f4\n        DownloadFinishedTime\uff1a   \u5feb\u7167\u4e0b\u8f7d\u5b8c\u6210\u65f6\u95f4\n        FinishedTime\uff1a           \u4f5c\u4e1a\u7ed3\u675f\u65f6\u95f4\n        UnfinishedTasks\uff1a        \u5728 SNAPSHOTING\u3001DOWNLOADING \u548c COMMITING \u9636\u6bb5\u4f1a\u663e\u793a\u8fd8\u672a\u5b8c\u6210\u7684\u5b50\u4efb\u52a1id\n        Status\uff1a                 \u5982\u679c\u4f5c\u4e1a\u5931\u8d25\uff0c\u663e\u793a\u5931\u8d25\u4fe1\u606f\n        Timeout\uff1a                \u4f5c\u4e1a\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u67e5\u770b example_db \u4e0b\u6700\u8fd1\u4e00\u6b21 RESTORE \u4efb\u52a1\u3002\n    SHOW RESTORE FROM example_db;\n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, RESTORE\n")))}O.isMDXComponent=!0}}]);