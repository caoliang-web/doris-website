"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[71335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW BACKUP",language:"zh-CN"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-BACKUP",id:"version-1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-BACKUP",title:"SHOW BACKUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-BACKUP.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-BACKUP",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-BACKUP",draft:!1,tags:[],version:"1.0",frontMatter:{title:"SHOW BACKUP",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW ALTER",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-ALTER"},next:{title:"SHOW CREATE FUNCTION",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-FUNCTION"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-backup"},"SHOW BACKUP"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b BACKUP \u4efb\u52a1\n\u8bed\u6cd5\uff1a\n    SHOW BACKUP [FROM db_name]\n    \n\u8bf4\u660e\uff1a\n    1. Palo \u4e2d\u4ec5\u4fdd\u5b58\u6700\u8fd1\u4e00\u6b21 BACKUP \u4efb\u52a1\u3002\n    2. \u5404\u5217\u542b\u4e49\u5982\u4e0b\uff1a\n        JobId\uff1a                  \u552f\u4e00\u4f5c\u4e1aid\n        SnapshotName\uff1a           \u5907\u4efd\u7684\u540d\u79f0\n        DbName\uff1a                 \u6240\u5c5e\u6570\u636e\u5e93\n        State\uff1a                  \u5f53\u524d\u9636\u6bb5\n            PENDING\uff1a        \u63d0\u4ea4\u4f5c\u4e1a\u540e\u7684\u521d\u59cb\u72b6\u6001\n            SNAPSHOTING\uff1a    \u6267\u884c\u5feb\u7167\u4e2d\n            UPLOAD_SNAPSHOT\uff1a\u5feb\u7167\u5b8c\u6210\uff0c\u51c6\u5907\u4e0a\u4f20\n            UPLOADING\uff1a      \u5feb\u7167\u4e0a\u4f20\u4e2d\n            SAVE_META\uff1a      \u5c06\u4f5c\u4e1a\u5143\u4fe1\u606f\u4fdd\u5b58\u4e3a\u672c\u5730\u6587\u4ef6\n            UPLOAD_INFO\uff1a    \u4e0a\u4f20\u4f5c\u4e1a\u5143\u4fe1\u606f\n            FINISHED\uff1a       \u4f5c\u4e1a\u6210\u529f\n            CANCELLED\uff1a      \u4f5c\u4e1a\u5931\u8d25\n        BackupObjs\uff1a             \u5907\u4efd\u7684\u8868\u548c\u5206\u533a\n        CreateTime\uff1a             \u4efb\u52a1\u63d0\u4ea4\u65f6\u95f4\n        SnapshotFinishedTime\uff1a   \u5feb\u7167\u5b8c\u6210\u65f6\u95f4\n        UploadFinishedTime\uff1a     \u5feb\u7167\u4e0a\u4f20\u5b8c\u6210\u65f6\u95f4\n        FinishedTime\uff1a           \u4f5c\u4e1a\u7ed3\u675f\u65f6\u95f4\n        UnfinishedTasks\uff1a        \u5728 SNAPSHOTING \u548c UPLOADING \u9636\u6bb5\u4f1a\u663e\u793a\u8fd8\u672a\u5b8c\u6210\u7684\u5b50\u4efb\u52a1id\n        Status\uff1a                 \u5982\u679c\u4f5c\u4e1a\u5931\u8d25\uff0c\u663e\u793a\u5931\u8d25\u4fe1\u606f\n        Timeout\uff1a                \u4f5c\u4e1a\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u67e5\u770b example_db \u4e0b\u6700\u540e\u4e00\u6b21 BACKUP \u4efb\u52a1\u3002\n    SHOW BACKUP FROM example_db;\n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, BACKUP\n")))}u.isMDXComponent=!0}}]);