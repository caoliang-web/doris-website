"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[78920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,_=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(_,l(l({ref:t},s),{},{components:n})):a.createElement(_,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"BITMAP_UNION",language:"zh-CN"},l=void 0,p={unversionedId:"sql-reference/sql-functions/aggregate-functions/bitmap_union",id:"version-1.0/sql-reference/sql-functions/aggregate-functions/bitmap_union",title:"BITMAP_UNION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-functions/aggregate-functions/bitmap_union.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/bitmap_union",permalink:"/zh-CN/docs/1.0/sql-reference/sql-functions/aggregate-functions/bitmap_union",draft:!1,tags:[],version:"1.0",frontMatter:{title:"BITMAP_UNION",language:"zh-CN"},sidebar:"docs",previous:{title:"AVG",permalink:"/zh-CN/docs/1.0/sql-reference/sql-functions/aggregate-functions/avg"},next:{title:"COUNT",permalink:"/zh-CN/docs/1.0/sql-reference/sql-functions/aggregate-functions/count"}},o={},u=[{value:"Create table",id:"create-table",level:2},{value:"Data Load",id:"data-load",level:2},{value:"Stream Load",id:"stream-load",level:3},{value:"Insert Into",id:"insert-into",level:3},{value:"Data Query",id:"data-query",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Example",id:"example",level:3},{value:"keyword",id:"keyword",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bitmap_union"},"BITMAP_UNION"),(0,r.kt)("h2",{id:"create-table"},"Create table"),(0,r.kt)("p",null,"\u5efa\u8868\u65f6\u9700\u8981\u4f7f\u7528\u805a\u5408\u6a21\u578b\uff0c\u6570\u636e\u7c7b\u578b\u662f bitmap , \u805a\u5408\u51fd\u6570\u662f bitmap_union"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'CREATE TABLE `pv_bitmap` (\n  `dt` int(11) NULL COMMENT "",\n  `page` varchar(10) NULL COMMENT "",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`dt`, `page`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`dt`) BUCKETS 2;\n')),(0,r.kt)("p",null,"\u6ce8\uff1a\u5f53\u6570\u636e\u91cf\u5f88\u5927\u65f6\uff0c\u6700\u597d\u4e3a\u9ad8\u9891\u7387\u7684 bitmap_union \u67e5\u8be2\u5efa\u7acb\u5bf9\u5e94\u7684 rollup \u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ALTER TABLE pv_bitmap ADD ROLLUP pv (page, user_id);\n")),(0,r.kt)("h2",{id:"data-load"},"Data Load"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TO_BITMAP(expr)")," : \u5c06 0 ~ 18446744073709551615 \u7684 unsigned bigint \u8f6c\u4e3a bitmap"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BITMAP_EMPTY()"),": \u751f\u6210\u7a7a bitmap \u5217\uff0c\u7528\u4e8e insert \u6216\u5bfc\u5165\u7684\u65f6\u586b\u5145\u9ed8\u8ba4\u503c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BITMAP_HASH(expr)"),": \u5c06\u4efb\u610f\u7c7b\u578b\u7684\u5217\u901a\u8fc7 Hash \u7684\u65b9\u5f0f\u8f6c\u4e3a bitmap"),(0,r.kt)("h3",{id:"stream-load"},"Stream Load"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)"   http://host:8410/api/test/testDb/_stream_load\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=bitmap_hash(user_id)"   http://host:8410/api/test/testDb/_stream_load\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=bitmap_empty()"   http://host:8410/api/test/testDb/_stream_load\n')),(0,r.kt)("h3",{id:"insert-into"},"Insert Into"),(0,r.kt)("p",null,"id2 \u7684\u5217\u7c7b\u578b\u662f bitmap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"insert into bitmap_table1 select id, id2 from bitmap_table2;\n")),(0,r.kt)("p",null,"id2 \u7684\u5217\u7c7b\u578b\u662f bitmap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO bitmap_table1 (id, id2) VALUES (1001, to_bitmap(1000)), (1001, to_bitmap(2000));\n")),(0,r.kt)("p",null,"id2 \u7684\u5217\u7c7b\u578b\u662f bitmap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"insert into bitmap_table1 select id, bitmap_union(id2) from bitmap_table2 group by id;\n")),(0,r.kt)("p",null,"id2 \u7684\u5217\u7c7b\u578b\u662f int"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"insert into bitmap_table1 select id, to_bitmap(id2) from table;\n")),(0,r.kt)("p",null,"id2 \u7684\u5217\u7c7b\u578b\u662f String"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"insert into bitmap_table1 select id, bitmap_hash(id_string) from table;\n")),(0,r.kt)("h2",{id:"data-query"},"Data Query"),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BITMAP_UNION(expr)")," : \u8ba1\u7b97\u8f93\u5165 Bitmap \u7684\u5e76\u96c6\uff0c\u8fd4\u56de\u65b0\u7684bitmap"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BITMAP_UNION_COUNT(expr)"),": \u8ba1\u7b97\u8f93\u5165 Bitmap \u7684\u5e76\u96c6\uff0c\u8fd4\u56de\u5176\u57fa\u6570\uff0c\u548c BITMAP_COUNT(BITMAP_UNION(expr)) \u7b49\u4ef7\u3002\u76ee\u524d\u63a8\u8350\u4f18\u5148\u4f7f\u7528 BITMAP_UNION_COUNT \uff0c\u5176\u6027\u80fd\u4f18\u4e8e BITMAP_COUNT(BITMAP_UNION(expr))"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BITMAP_UNION_INT(expr)")," : \u8ba1\u7b97 TINYINT,SMALLINT \u548c INT \u7c7b\u578b\u7684\u5217\u4e2d\u4e0d\u540c\u503c\u7684\u4e2a\u6570\uff0c\u8fd4\u56de\u503c\u548c\nCOUNT(DISTINCT expr) \u76f8\u540c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INTERSECT_COUNT(bitmap_column_to_count, filter_column, filter_values ...)")," : \u8ba1\u7b97\u6ee1\u8db3\nfilter_column \u8fc7\u6ee4\u6761\u4ef6\u7684\u591a\u4e2a bitmap \u7684\u4ea4\u96c6\u7684\u57fa\u6570\u503c\u3002\nbitmap_column_to_count \u662f bitmap \u7c7b\u578b\u7684\u5217\uff0cfilter_column \u662f\u53d8\u5316\u7684\u7ef4\u5ea6\u5217\uff0cfilter_values \u662f\u7ef4\u5ea6\u53d6\u503c\u5217\u8868"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684 SQL \u4ee5\u4e0a\u9762\u7684 pv_bitmap table \u4e3a\u4f8b\uff1a"),(0,r.kt)("p",null,"\u8ba1\u7b97 user_id \u7684\u53bb\u91cd\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select bitmap_union_count(user_id) from pv_bitmap;\n\nselect bitmap_count(bitmap_union(user_id)) from pv_bitmap;\n")),(0,r.kt)("p",null,"\u8ba1\u7b97 id \u7684\u53bb\u91cd\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select bitmap_union_int(id) from pv_bitmap;\n")),(0,r.kt)("p",null,"\u8ba1\u7b97 user_id \u7684 \u7559\u5b58:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select intersect_count(user_id, page, 'meituan') as meituan_uv,\nintersect_count(user_id, page, 'waimai') as waimai_uv,\nintersect_count(user_id, page, 'meituan', 'waimai') as retention //\u5728 'meituan' \u548c 'waimai' \u4e24\u4e2a\u9875\u9762\u90fd\u51fa\u73b0\u7684\u7528\u6237\u6570\nfrom pv_bitmap\nwhere page in ('meituan', 'waimai');\n")),(0,r.kt)("h2",{id:"keyword"},"keyword"),(0,r.kt)("p",null,"BITMAP,BITMAP_COUNT,BITMAP_EMPTY,BITMAP_UNION,BITMAP_UNION_INT,TO_BITMAP,BITMAP_UNION_COUNT,INTERSECT_COUNT"))}c.isMDXComponent=!0}}]);