"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[50847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"RECOVER",language:"zh-CN"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Definition/RECOVER",id:"version-1.0/sql-reference/sql-statements/Data-Definition/RECOVER",title:"RECOVER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-statements/Data-Definition/RECOVER.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/RECOVER",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Definition/RECOVER",draft:!1,tags:[],version:"1.0",frontMatter:{title:"RECOVER",language:"zh-CN"},sidebar:"docs",previous:{title:"HLL",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Definition/HLL"},next:{title:"REFRESH DATABASE",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Definition/REFRESH-DATABASE"}},c={},s=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recover"},"RECOVER"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u6062\u590d\u4e4b\u524d\u5220\u9664\u7684 database\u3001table \u6216\u8005 partition\n\u8bed\u6cd5\uff1a\n    1) \u6062\u590d database\n        RECOVER DATABASE db_name;\n    2) \u6062\u590d table\n        RECOVER TABLE [db_name.]table_name;\n    3) \u6062\u590d partition\n        RECOVER PARTITION partition_name FROM [db_name.]table_name;\n\n\u8bf4\u660e\uff1a\n    1. \u8be5\u64cd\u4f5c\u4ec5\u80fd\u6062\u590d\u4e4b\u524d\u4e00\u6bb5\u65f6\u95f4\u5185\u5220\u9664\u7684\u5143\u4fe1\u606f\u3002\u9ed8\u8ba4\u4e3a 1 \u5929\u3002\uff08\u53ef\u901a\u8fc7fe.conf\u4e2d`catalog_trash_expire_second`\u53c2\u6570\u914d\u7f6e\uff09\n    2. \u5982\u679c\u5220\u9664\u5143\u4fe1\u606f\u540e\u65b0\u5efa\u7acb\u4e86\u540c\u540d\u540c\u7c7b\u578b\u7684\u5143\u4fe1\u606f\uff0c\u5219\u4e4b\u524d\u5220\u9664\u7684\u5143\u4fe1\u606f\u4e0d\u80fd\u88ab\u6062\u590d\n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u6062\u590d\u540d\u4e3a example_db \u7684 database\n    RECOVER DATABASE example_db;\n    \n2. \u6062\u590d\u540d\u4e3a example_tbl \u7684 table\n    RECOVER TABLE example_db.example_tbl;\n    \n3. \u6062\u590d\u8868 example_tbl \u4e2d\u540d\u4e3a p1 \u7684 partition\n    RECOVER PARTITION p1 FROM example_tbl;\n    \n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RECOVER\n")))}u.isMDXComponent=!0}}]);