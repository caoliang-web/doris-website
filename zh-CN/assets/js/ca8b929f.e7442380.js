"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[30979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"ALTER CLUSTER",language:"zh-CN"},i=void 0,s={unversionedId:"sql-reference/sql-statements/Administration/ALTER-CLUSTER",id:"version-1.0/sql-reference/sql-statements/Administration/ALTER-CLUSTER",title:"ALTER CLUSTER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-statements/Administration/ALTER-CLUSTER.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ALTER-CLUSTER",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/ALTER-CLUSTER",draft:!1,tags:[],version:"1.0",frontMatter:{title:"ALTER CLUSTER",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN SHOW REPLICA STATUS",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-SHOW-REPLICA-STATUS"},next:{title:"ALTER SYSTEM",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Administration/ALTER-SYSTEM"}},l={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alter-cluster"},"ALTER CLUSTER"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u8be5\u8bed\u53e5\u7528\u4e8e\u66f4\u65b0\u903b\u8f91\u96c6\u7fa4\u3002\u9700\u8981\u6709\u7ba1\u7406\u5458\u6743\u9650\n\n\u8bed\u6cd5\n\n    ALTER CLUSTER cluster_name PROPERTIES ("key"="value", ...);\n\n1. \u7f29\u5bb9\uff0c\u6269\u5bb9 \uff08\u6839\u636e\u96c6\u7fa4\u73b0\u6709\u7684be\u6570\u76ee\uff0c\u5927\u5219\u4e3a\u6269\u5bb9\uff0c\u5c0f\u5219\u4e3a\u7f29\u5bb9), \u6269\u5bb9\u4e3a\u540c\u6b65\u64cd\u4f5c\uff0c\u7f29\u5bb9\u4e3a\u5f02\u6b65\u64cd\u4f5c\uff0c\u901a\u8fc7backend\u7684\u72b6\u6001\u53ef\u4ee5\u5f97\u77e5\u662f\u5426\u7f29\u5bb9\u5b8c\u6210\n\n    PROERTIES ("instance_num" = "3")\n\n    instance_num \u903b\u8f91\u96c6\u7fa4\u8282\u70b9\u6811\n')),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1. \u7f29\u5bb9\uff0c\u51cf\u5c11\u542b\u67093\u4e2abe\u7684\u903b\u8f91\u96c6\u7fa4test_cluster\u7684be\u6570\u4e3a2\n\n    ALTER CLUSTER test_cluster PROPERTIES ("instance_num"="2");\n\n2. \u6269\u5bb9\uff0c\u589e\u52a0\u542b\u67093\u4e2abe\u7684\u903b\u8f91\u96c6\u7fa4test_cluster\u7684be\u6570\u4e3a4\n\n    ALTER CLUSTER test_cluster PROPERTIES ("instance_num"="4");\n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ALTER,CLUSTER\n")))}u.isMDXComponent=!0}}]);