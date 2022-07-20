"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[49461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=c(n),d=a,m=y["".concat(p,".").concat(d)]||y[d]||u[d]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},94888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"ARRAY",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/ARRAY",id:"sql-manual/sql-reference/Data-Types/ARRAY",title:"ARRAY",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Types/ARRAY.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/ARRAY",permalink:"/docs/sql-manual/sql-reference/Data-Types/ARRAY",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY",language:"en"},sidebar:"docs",previous:{title:"VARCHAR",permalink:"/docs/sql-manual/sql-reference/Data-Types/VARCHAR"},next:{title:"DESCRIBE",permalink:"/docs/sql-manual/sql-reference/Utility-Statements/DESCRIBE"}},p={},c=[{value:"ARRAY",id:"array",level:2},{value:"description",id:"description",level:3},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array"},"ARRAY"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"ARRAY\\<T",">"),(0,a.kt)("p",null,"An array of T-type items, it cannot be used as a key column. Now ARRAY can only used in Duplicate Model Tables."),(0,a.kt)("p",null,"T-type could be any of:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DATE,\nDATETIME, CHAR, VARCHAR, STRING\n")),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,"please open ",(0,a.kt)("inlineCode",{parentName:"p"},"enable_array_type")," before use ARRAY"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("p",null,"Create table example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mysql> set enable_array_type=true;\n\nmysql> CREATE TABLE `array_test` (\n  `id` int(11) NULL COMMENT "",\n  `c_array` ARRAY<int(11)> NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2"\n);\n')),(0,a.kt)("p",null,"Insert data example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> INSERT INTO `array_test` VALUES (1, [1,2,3,4,5]);\nmysql> INSERT INTO `array_test` VALUES (2, array(6,7,8)), (3, array()), (4, null);\n")),(0,a.kt)("p",null,"Select data example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> SELECT * FROM `array_test`;\n+------+-----------------+\n| id   | c_array         |\n+------+-----------------+\n|    1 | [1, 2, 3, 4, 5] |\n|    2 | [6, 7, 8]       |\n|    3 | []              |\n|    4 | NULL            |\n+------+-----------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ARRAY, array_contains, array_position, element_at\n")))}u.isMDXComponent=!0}}]);