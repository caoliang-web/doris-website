"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[53885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"ADMIN SET REPLICA STATUS",language:"zh-CN"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Administration/ADMIN-SET-REPLICA-STATUS",id:"version-1.0/sql-reference/sql-statements/Administration/ADMIN-SET-REPLICA-STATUS",title:"ADMIN SET REPLICA STATUS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-statements/Administration/ADMIN-SET-REPLICA-STATUS.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN-SET-REPLICA-STATUS",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-SET-REPLICA-STATUS",draft:!1,tags:[],version:"1.0",frontMatter:{title:"ADMIN SET REPLICA STATUS",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN SET CONFIG",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-SET-CONFIG"},next:{title:"ADMIN SHOW CONFIG",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-SHOW-CONFIG"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"admin-set-replica-status"},"ADMIN SET REPLICA STATUS"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u8be5\u8bed\u53e5\u7528\u4e8e\u8bbe\u7f6e\u6307\u5b9a\u526f\u672c\u7684\u72b6\u6001\u3002\n\u8be5\u547d\u4ee4\u76ee\u524d\u4ec5\u7528\u4e8e\u624b\u52a8\u5c06\u67d0\u4e9b\u526f\u672c\u72b6\u6001\u8bbe\u7f6e\u4e3a BAD \u6216 OK\uff0c\u4ece\u800c\u4f7f\u5f97\u7cfb\u7edf\u80fd\u591f\u81ea\u52a8\u4fee\u590d\u8fd9\u4e9b\u526f\u672c\u3002\n\n\u8bed\u6cd5\uff1a\n\n    ADMIN SET REPLICA STATUS\n    PROPERTIES ("key" = "value", ...);\n\n    \u76ee\u524d\u652f\u6301\u5982\u4e0b\u5c5e\u6027\uff1a\n    "tablet_id"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a\u4e00\u4e2a Tablet Id.\n    "backend_id"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a Backend Id.\n    "status"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a\u72b6\u6001\u3002\u5f53\u524d\u4ec5\u652f\u6301 "bad" \u6216 "ok"\n\n    \u5982\u679c\u6307\u5b9a\u7684\u526f\u672c\u4e0d\u5b58\u5728\uff0c\u6216\u72b6\u6001\u5df2\u7ecf\u662f bad\uff0c\u5219\u4f1a\u88ab\u5ffd\u7565\u3002\n\n\u6ce8\u610f\uff1a\n\n    \u8bbe\u7f6e\u4e3a Bad \u72b6\u6001\u7684\u526f\u672c\u53ef\u80fd\u7acb\u523b\u88ab\u5220\u9664\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002\n')),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1. \u8bbe\u7f6e tablet 10003 \u5728 BE 10001 \u4e0a\u7684\u526f\u672c\u72b6\u6001\u4e3a bad\u3002\n\n    ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "bad");\n\n2. \u8bbe\u7f6e tablet 10003 \u5728 BE 10001 \u4e0a\u7684\u526f\u672c\u72b6\u6001\u4e3a ok\u3002\n\n    ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "ok");\n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADMIN,SET,REPLICA,STATUS\n")))}p.isMDXComponent=!0}}]);