"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[7669],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},E={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),b=r,d=u["".concat(i,".").concat(b)]||u[b]||E[b]||l;return a?n.createElement(d,s(s({ref:t},p),{},{components:a})):n.createElement(d,s({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64968:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>E,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"CREATE TABLE LIKE",language:"en"},s=void 0,o={unversionedId:"sql-reference/sql-statements/Data-Definition/CREATE-TABLE-LIKE",id:"version-1.0/sql-reference/sql-statements/Data-Definition/CREATE-TABLE-LIKE",title:"CREATE TABLE LIKE",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Data-Definition/CREATE-TABLE-LIKE.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/CREATE-TABLE-LIKE",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Definition/CREATE-TABLE-LIKE",draft:!1,tags:[],version:"1.0",frontMatter:{title:"CREATE TABLE LIKE",language:"en"},sidebar:"docs",previous:{title:"CREATE REPOSITORY",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Definition/CREATE-REPOSITORY"},next:{title:"CREATE TABLE",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Definition/CREATE-TABLE"}},i={},c=[{value:"description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function E(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-table-like"},"CREATE TABLE LIKE"),(0,r.kt)("h2",{id:"description"},"description"),(0,r.kt)("p",null,"Use CREATE TABLE ... LIKE to create an empty table based on the definition of another table, including any column attributes, table partitions and table properties defined in the original table:\nSyntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name LIKE [database.]table_name [WITH ROLLUP (r2,r2,r3,...)] \n")),(0,r.kt)("p",null,"Explain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. The replicated table structures include Column Definition, Partitions, Table Properties, and so on\n2. The SELECT privilege is required on the original table.\n3. Support to copy external table such as MySQL.\n4. Support to copy OLAP table rollup\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. Under the test1 Database, create an empty table with the same table structure as table1, named table2\n\n    CREATE TABLE test1.table2 LIKE test1.table1\n\n2. Under the test2 Database, create an empty table with the same table structure as test1.table1, named table2\n\n    CREATE TABLE test2.table2 LIKE test1.table1\n\n3. Under the test1 Database, create an empty table with the same table structure as table1, named table2. copy r1 and r2 rollup of table1 simultaneously\n\n    CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n\n4. Under the test1 Database, create an empty table with the same table structure as table1, named table2. copy all rollup of table1 simultaneously\n\n    CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP\n\n5. Under the test2 Database, create an empty table with the same table structure as table1, named table2. copy r1 and r2 rollup of table1 simultaneously\n\n    CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n\n6. Under the test2 Database, create an empty table with the same table structure as table1, named table2. copy all rollup of table1 simultaneously\n\n    CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP\n\n7. Under the test1 Database, create an empty table with the same table structure as MySQL's external table1, called table2\n\n    CREATE TABLE test1.table2 LIKE test1.table1\n")),(0,r.kt)("h2",{id:"keyword"},"keyword"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    CREATE,TABLE,LIKE\n\n")))}E.isMDXComponent=!0}}]);