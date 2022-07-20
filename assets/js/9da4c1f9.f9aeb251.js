"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[73295],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"ADMIN SET REPLICA STATUS",language:"en"},o=void 0,s={unversionedId:"sql-reference/sql-statements/Administration/ADMIN-SET-REPLICA-STATUS",id:"version-1.0/sql-reference/sql-statements/Administration/ADMIN-SET-REPLICA-STATUS",title:"ADMIN SET REPLICA STATUS",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Administration/ADMIN-SET-REPLICA-STATUS.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN-SET-REPLICA-STATUS",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-SET-REPLICA-STATUS",draft:!1,tags:[],version:"1.0",frontMatter:{title:"ADMIN SET REPLICA STATUS",language:"en"},sidebar:"docs",previous:{title:"ADMIN SET CONFIG",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-SET-CONFIG"},next:{title:"ADMIN SHOW CONFIG",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-SHOW-CONFIG"}},l={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"admin-set-replica-status"},"ADMIN SET REPLICA STATUS"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"This commend is used to set the status of the specified replica.\n")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0This command is currently only used to manually set the status of some replicas to BAD or OK, allowing the system to automatically repair these replicas."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Syntax:\n\n    ADMIN SET REPLICA STATUS\n    PROPERTIES ("key" = "value", ...);\n\n    The following attributes are currently supported:\n    "tablet_id": required. Specify a Tablet Id.\n    "backend_id": required. Specify a Backend Id.\n    "status": required. Specify the status. Only "bad" and "ok" are currently supported.\n\n    If the specified replica does not exist or the status is already bad or ok, it will be ignored.\n\nNotice:\n\n    Replica set to Bad status may be dropped immediately, please proceed with caution.\n')),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1. Set the replica status of tablet 10003 on BE 10001 to bad.\n\n    ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "bad");\n\n2. Set the replica status of tablet 10003 on BE 10001 to ok.\n\n    ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "ok");\n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADMIN,SET,REPLICA,STATUS\n")))}d.isMDXComponent=!0}}]);