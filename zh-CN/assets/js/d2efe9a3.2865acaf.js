"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[77981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),E=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=E(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=E(n),b=a,f=u["".concat(i,".").concat(b)]||u[b]||p[b]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var E=2;E<l;E++)o[E]=n[E];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>E});var r=n(87462),a=(n(67294),n(3905));const l={title:"CREATE TABLE LIKE",language:"zh-CN"},o=void 0,s={unversionedId:"sql-reference/sql-statements/Data-Definition/CREATE-TABLE-LIKE",id:"version-1.0/sql-reference/sql-statements/Data-Definition/CREATE-TABLE-LIKE",title:"CREATE TABLE LIKE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-statements/Data-Definition/CREATE-TABLE-LIKE.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/CREATE-TABLE-LIKE",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Definition/CREATE-TABLE-LIKE",draft:!1,tags:[],version:"1.0",frontMatter:{title:"CREATE TABLE LIKE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE REPOSITORY",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Definition/CREATE-REPOSITORY"},next:{title:"CREATE TABLE",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Definition/CREATE-TABLE"}},i={},E=[{value:"description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:E};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-table-like"},"CREATE TABLE LIKE"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u8868\u7ed3\u6784\u548c\u53e6\u4e00\u5f20\u8868\u5b8c\u5168\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u540c\u65f6\u4e5f\u80fd\u591f\u53ef\u9009\u590d\u5236\u4e00\u4e9brollup\u3002\n\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name LIKE [database.]table_name [WITH ROLLUP (r1,r2,r3,...)]\n")),(0,a.kt)("p",null,"\u8bf4\u660e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u590d\u5236\u7684\u8868\u7ed3\u6784\u5305\u62ecColumn Definition\u3001Partitions\u3001Table Properties\u7b49\n2. \u7528\u6237\u9700\u8981\u5bf9\u590d\u5236\u7684\u539f\u8868\u6709`SELECT`\u6743\u9650\n3. \u652f\u6301\u590d\u5236MySQL\u7b49\u5916\u8868\n4. \u652f\u6301\u590d\u5236OLAP Table\u7684rollup\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u5728test1\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctable1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\n\n    CREATE TABLE test1.table2 LIKE test1.table1\n\n2. \u5728test2\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctest1.table1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\n\n    CREATE TABLE test2.table2 LIKE test1.table1\n\n3. \u5728test1\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctable1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\uff0c\u540c\u65f6\u590d\u5236table1\u7684r1\uff0cr2\u4e24\u4e2arollup\n\n    CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n\n4. \u5728test1\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctable1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\uff0c\u540c\u65f6\u590d\u5236table1\u7684\u6240\u6709rollup\n\n    CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP\n\n5. \u5728test2\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctest1.table1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\uff0c\u540c\u65f6\u590d\u5236table1\u7684r1\uff0cr2\u4e24\u4e2arollup\n\n    CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n\n6. \u5728test2\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctest1.table1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\uff0c\u540c\u65f6\u590d\u5236table1\u7684\u6240\u6709rollup\n\n    CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP\n\n7. \u5728test1\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548cMySQL\u5916\u8868table1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\n\n    CREATE TABLE test1.table2 LIKE test1.table1\n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    CREATE,TABLE,LIKE\n\n")))}p.isMDXComponent=!0}}]);