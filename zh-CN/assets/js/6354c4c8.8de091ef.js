"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[37369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"ADMIN REPAIR",language:"zh-CN"},a=void 0,l={unversionedId:"sql-reference/sql-statements/Administration/ADMIN-REPAIR",id:"version-1.0/sql-reference/sql-statements/Administration/ADMIN-REPAIR",title:"ADMIN REPAIR",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-statements/Administration/ADMIN-REPAIR.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN-REPAIR",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-REPAIR",draft:!1,tags:[],version:"1.0",frontMatter:{title:"ADMIN REPAIR",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN COMPACT",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-COMPACT"},next:{title:"ADMIN SET CONFIG",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-SET-CONFIG"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"admin-repair"},"ADMIN REPAIR"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c1d\u8bd5\u4f18\u5148\u4fee\u590d\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a\n\n\u8bed\u6cd5\uff1a\n\n    ADMIN REPAIR TABLE table_name[ PARTITION (p1,...)]\n\n\u8bf4\u660e\uff1a\n\n    1. \u8be5\u8bed\u53e5\u4ec5\u8868\u793a\u8ba9\u7cfb\u7edf\u5c1d\u8bd5\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u5206\u7247\u526f\u672c\uff0c\u5e76\u4e0d\u4fdd\u8bc1\u80fd\u591f\u4fee\u590d\u6210\u529f\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ADMIN SHOW REPLICA STATUS \u547d\u4ee4\u67e5\u770b\u4fee\u590d\u60c5\u51b5\u3002\n    2. \u9ed8\u8ba4\u7684 timeout \u662f 14400 \u79d2(4\u5c0f\u65f6)\u3002\u8d85\u65f6\u610f\u5473\u7740\u7cfb\u7edf\u5c06\u4e0d\u518d\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u5206\u7247\u526f\u672c\u3002\u9700\u8981\u91cd\u65b0\u4f7f\u7528\u8be5\u547d\u4ee4\u8bbe\u7f6e\u3002\n")),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. \u5c1d\u8bd5\u4fee\u590d\u6307\u5b9a\u8868\n\n    ADMIN REPAIR TABLE tbl1;\n\n2. \u5c1d\u8bd5\u4fee\u590d\u6307\u5b9a\u5206\u533a\n\n    ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);\n    \n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ADMIN,REPAIR\n")))}u.isMDXComponent=!0}}]);