"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[99988],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>y});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),y=a,d=m["".concat(c,".").concat(y)]||m[y]||p[y]||l;return r?t.createElement(d,i(i({ref:n},u),{},{components:r})):t.createElement(d,i({ref:n},u))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8392:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const l={title:"ARRAY_MIN \u51fd\u6570",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_min",id:"sql-manual/sql-functions/array-functions/array_min",title:"ARRAY_MIN \u51fd\u6570",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array_min.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_min",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array_min",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_MIN \u51fd\u6570",language:"zh-CN"}},c={},s=[{value:"ARRAY_MIN",id:"array_min",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_min"},"ARRAY_MIN"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"ARRAY_MIN"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u8fd4\u56de\u6570\u7ec4\u4e2d\u6700\u5c0f\u7684\u5143\u7d20\uff0c\u6570\u7ec4\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u4f1a\u88ab\u8df3\u8fc7\u3002\u7a7a\u6570\u7ec4\u4ee5\u53ca\u5143\u7d20\u5168\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u7684\u6570\u7ec4\uff0c\u7ed3\u679c\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u3002"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> set enable_vectorized_engine = true;    # enable vectorized engine\nmysql> select k2, array_min(k2) from array_type_table;\n+--------------+-----------------+\n| k2           | array_min(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               1 |\n| [1, NULL, 3] |               1 |\n+--------------+-----------------+\n4 rows in set (0.02 sec)\n\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY_MIN"))}p.isMDXComponent=!0}}]);