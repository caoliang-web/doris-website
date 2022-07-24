"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[67038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=k(e,["components","mdxType","originalType","parentName"]),N=o(n),c=a,u=N["".concat(i,".").concat(c)]||N[c]||s[c]||l;return n?r.createElement(u,p(p({ref:t},m),{},{components:n})):r.createElement(u,p({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=N;var k={};for(var i in t)hasOwnProperty.call(t,i)&&(k[i]=t[i]);k.originalType=e,k.mdxType="string"==typeof e?e:a,p[1]=k;for(var o=2;o<l;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},82537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>k,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={title:"CREATE MATERIALIZED VIEW",language:"zh-CN"},p=void 0,k={unversionedId:"sql-reference/sql-statements/Data-Definition/CREATE-MATERIALIZED-VIEW",id:"version-0.15/sql-reference/sql-statements/Data-Definition/CREATE-MATERIALIZED-VIEW",title:"CREATE MATERIALIZED VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Definition/CREATE-MATERIALIZED-VIEW.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/CREATE-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/CREATE-MATERIALIZED-VIEW",draft:!1,tags:[],version:"0.15",frontMatter:{title:"CREATE MATERIALIZED VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE INDEX",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/CREATE-INDEX"},next:{title:"CREATE REPOSITORY",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/CREATE-REPOSITORY"}},i={},o=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],m={toc:o};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-materialized-view"},"CREATE MATERIALIZED VIEW"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u7269\u5316\u89c6\u56fe\u3002\n")),(0,a.kt)("p",null,"\u8bf4\u660e:\n\u5f02\u6b65\u8bed\u6cd5\uff0c\u8c03\u7528\u6210\u529f\u540e\u4ec5\u8868\u793a\u521b\u5efa\u7269\u5316\u89c6\u56fe\u7684\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\uff0c\u7528\u6237\u9700\u8981\u5148\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"show alter table rollup")," \u6765\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684\u521b\u5efa\u8fdb\u5ea6\u3002\n\u5728\u663e\u793a FINISHED \u540e\u65e2\u53ef\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"desc [table_name] all")," \u547d\u4ee4\u6765\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684 schema \u4e86\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```\n\nCREATE MATERIALIZED VIEW [MV name] as [query]\n[PROPERTIES ("key" = "value")]\n\n```\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"MV name"),(0,a.kt)("p",{parentName:"li"},"\u7269\u5316\u89c6\u56fe\u7684\u540d\u79f0\uff0c\u5fc5\u586b\u9879\u3002"),(0,a.kt)("p",{parentName:"li"},"\u76f8\u540c\u8868\u7684\u7269\u5316\u89c6\u56fe\u540d\u79f0\u4e0d\u53ef\u91cd\u590d\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"query"),(0,a.kt)("p",{parentName:"li"},"\u7528\u4e8e\u6784\u5efa\u7269\u5316\u89c6\u56fe\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u67e5\u8be2\u8bed\u53e5\u7684\u7ed3\u679c\u65e2\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u3002\u76ee\u524d\u652f\u6301\u7684 query \u683c\u5f0f\u4e3a:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\nSELECT select_expr[, select_expr ...]\nFROM [Base view name]\nGROUP BY column_name[, column_name ...]\nORDER BY column_name[, column_name ...]\n\n\u8bed\u6cd5\u548c\u67e5\u8be2\u8bed\u53e5\u8bed\u6cd5\u4e00\u81f4\u3002\n\n")),(0,a.kt)("p",{parentName:"li"},"select_expr: \u7269\u5316\u89c6\u56fe\u7684 schema \u4e2d\u6240\u6709\u7684\u5217\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"+ \u4ec5\u652f\u6301\u4e0d\u5e26\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7684\u5355\u5217\uff0c\u805a\u5408\u5217\u3002\n+ \u5176\u4e2d\u805a\u5408\u51fd\u6570\u76ee\u524d\u4ec5\u652f\u6301 SUM, MIN, MAX \u4e09\u79cd\uff0c\u4e14\u805a\u5408\u51fd\u6570\u7684\u53c2\u6570\u53ea\u80fd\u662f\u4e0d\u5e26\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7684\u5355\u5217\u3002\n+ \u81f3\u5c11\u5305\u542b\u4e00\u4e2a\u5355\u5217\u3002\n+ \u6240\u6709\u6d89\u53ca\u5230\u7684\u5217\uff0c\u5747\u53ea\u80fd\u51fa\u73b0\u4e00\u6b21\u3002\n")),(0,a.kt)("p",{parentName:"li"},"base view name: \u7269\u5316\u89c6\u56fe\u7684\u539f\u59cb\u8868\u540d\uff0c\u5fc5\u586b\u9879\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"+ \u5fc5\u987b\u662f\u5355\u8868\uff0c\u4e14\u975e\u5b50\u67e5\u8be2\n")),(0,a.kt)("p",{parentName:"li"},"group by: \u7269\u5316\u89c6\u56fe\u7684\u5206\u7ec4\u5217\uff0c\u9009\u586b\u9879\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"+ \u4e0d\u586b\u5219\u6570\u636e\u4e0d\u8fdb\u884c\u5206\u7ec4\u3002\n")),(0,a.kt)("p",{parentName:"li"},"order by: \u7269\u5316\u89c6\u56fe\u7684\u6392\u5e8f\u5217\uff0c\u9009\u586b\u9879\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"+ \u6392\u5e8f\u5217\u7684\u58f0\u660e\u987a\u5e8f\u5fc5\u987b\u548c select_expr \u4e2d\u5217\u58f0\u660e\u987a\u5e8f\u4e00\u81f4\u3002\n+ \u5982\u679c\u4e0d\u58f0\u660e order by\uff0c\u5219\u6839\u636e\u89c4\u5219\u81ea\u52a8\u8865\u5145\u6392\u5e8f\u5217\u3002\n      \u5982\u679c\u7269\u5316\u89c6\u56fe\u662f\u805a\u5408\u7c7b\u578b\uff0c\u5219\u6240\u6709\u7684\u5206\u7ec4\u5217\u81ea\u52a8\u8865\u5145\u4e3a\u6392\u5e8f\u5217\u3002\n      \u5982\u679c\u7269\u5316\u89c6\u56fe\u662f\u975e\u805a\u5408\u7c7b\u578b\uff0c\u5219\u524d 36 \u4e2a\u5b57\u8282\u81ea\u52a8\u8865\u5145\u4e3a\u6392\u5e8f\u5217\u3002\u5982\u679c\u81ea\u52a8\u8865\u5145\u7684\u6392\u5e8f\u4e2a\u6570\u5c0f\u4e8e3\u4e2a\uff0c\u5219\u524d\u4e09\u4e2a\u4f5c\u4e3a\u6392\u5e8f\u5217\u3002\n+ \u5982\u679c query \u4e2d\u5305\u542b\u5206\u7ec4\u5217\u7684\u8bdd\uff0c\u5219\u6392\u5e8f\u5217\u5fc5\u987b\u548c\u5206\u7ec4\u5217\u4e00\u81f4\u3002\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"properties"),(0,a.kt)("p",{parentName:"li"},"\u58f0\u660e\u7269\u5316\u89c6\u56fe\u7684\u4e00\u4e9b\u914d\u7f6e\uff0c\u9009\u586b\u9879\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'\nPROPERTIES ("key" = "value", "key" = "value" ...)\n\n')),(0,a.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u51e0\u4e2a\u914d\u7f6e\uff0c\u5747\u53ef\u58f0\u660e\u5728\u6b64\u5904\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"short_key: \u6392\u5e8f\u5217\u7684\u4e2a\u6570\u3002\ntimeout: \u7269\u5316\u89c6\u56fe\u6784\u5efa\u7684\u8d85\u65f6\u65f6\u95f4\u3002\n")))),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("p",null,"Base \u8868\u7ed3\u6784\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> desc duplicate_table;\n+-------+--------+------+------+---------+-------+\n| Field | Type   | Null | Key  | Default | Extra |\n+-------+--------+------+------+---------+-------+\n| k1    | INT    | Yes  | true | N/A     |       |\n| k2    | INT    | Yes  | true | N/A     |       |\n| k3    | BIGINT | Yes  | true | N/A     |       |\n| k4    | BIGINT | Yes  | true | N/A     |       |\n+-------+--------+------+------+---------+-------+\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u4ec5\u5305\u542b\u539f\u59cb\u8868 \uff08k1, k2\uff09\u5217\u7684\u7269\u5316\u89c6\u56fe"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"create materialized view k1_k2 as\n    select k1, k2 from duplicate_table;\n")),(0,a.kt)("p",{parentName:"li"},"\u7269\u5316\u89c6\u56fe\u7684 schema \u5982\u4e0b\u56fe\uff0c\u7269\u5316\u89c6\u56fe\u4ec5\u5305\u542b\u4e24\u5217 k1, k2 \u4e14\u4e0d\u5e26\u4efb\u4f55\u805a\u5408"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"+-----------------+-------+--------+------+------+---------+-------+\n| IndexName       | Field | Type   | Null | Key  | Default | Extra |\n+-----------------+-------+--------+------+------+---------+-------+\n| k1_k2           | k1    | INT    | Yes  | true | N/A     |       |\n|                 | k2    | INT    | Yes  | true | N/A     |       |\n+-----------------+-------+--------+------+------+---------+-------+\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u4ee5 k2 \u4e3a\u6392\u5e8f\u5217\u7684\u7269\u5316\u89c6\u56fe"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"create materialized view k2_order as\n    select k2, k1 from duplicate_table order by k2;\n")),(0,a.kt)("p",{parentName:"li"},"\u7269\u5316\u89c6\u56fe\u7684 schema \u5982\u4e0b\u56fe\uff0c\u7269\u5316\u89c6\u56fe\u4ec5\u5305\u542b\u4e24\u5217 k2, k1\uff0c\u5176\u4e2d k2 \u5217\u4e3a\u6392\u5e8f\u5217\uff0c\u4e0d\u5e26\u4efb\u4f55\u805a\u5408\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| k2_order        | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k1    | INT    | Yes  | false | N/A     | NONE  |\n+-----------------+-------+--------+------+-------+---------+-------+\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u4ee5 k1, k2 \u5206\u7ec4\uff0ck3 \u5217\u4e3a SUM \u805a\u5408\u7684\u7269\u5316\u89c6\u56fe"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"create materialized view k1_k2_sumk3 as\n    select k1, k2, sum(k3) from duplicate_table group by k1, k2;\n")),(0,a.kt)("p",{parentName:"li"},"\u7269\u5316\u89c6\u56fe\u7684 schema \u5982\u4e0b\u56fe\uff0c\u7269\u5316\u89c6\u56fe\u5305\u542b\u4e24\u5217 k1, k2\uff0csum(k3) \u5176\u4e2d k1, k2 \u4e3a\u5206\u7ec4\u5217\uff0csum(k3) \u4e3a\u6839\u636e k1, k2 \u5206\u7ec4\u540e\u7684 k3 \u5217\u7684\u6c42\u548c\u503c\u3002"),(0,a.kt)("p",{parentName:"li"},"\u7531\u4e8e\u7269\u5316\u89c6\u56fe\u6ca1\u6709\u58f0\u660e\u6392\u5e8f\u5217\uff0c\u4e14\u7269\u5316\u89c6\u56fe\u5e26\u805a\u5408\u6570\u636e\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u8865\u5145\u5206\u7ec4\u5217 k1, k2 \u4e3a\u6392\u5e8f\u5217\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| k1_k2_sumk3     | k1    | INT    | Yes  | true  | N/A     |       |\n|                 | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k3    | BIGINT | Yes  | false | N/A     | SUM   |\n+-----------------+-------+--------+------+-------+---------+-------+\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u53bb\u9664\u91cd\u590d\u884c\u7684\u7269\u5316\u89c6\u56fe"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"create materialized view deduplicate as\n    select k1, k2, k3, k4 from duplicate_table group by k1, k2, k3, k4;\n")),(0,a.kt)("p",{parentName:"li"},"\u7269\u5316\u89c6\u56fe schema \u5982\u4e0b\u56fe\uff0c\u7269\u5316\u89c6\u56fe\u5305\u542b k1, k2, k3, k4\u5217\uff0c\u4e14\u4e0d\u5b58\u5728\u91cd\u590d\u884c\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| deduplicate     | k1    | INT    | Yes  | true  | N/A     |       |\n|                 | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k3    | BIGINT | Yes  | true  | N/A     |       |\n|                 | k4    | BIGINT | Yes  | true  | N/A     |       |\n+-----------------+-------+--------+------+-------+---------+-------+\n\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u4e0d\u58f0\u660e\u6392\u5e8f\u5217\u7684\u975e\u805a\u5408\u578b\u7269\u5316\u89c6\u56fe"),(0,a.kt)("p",{parentName:"li"},"all_type_table \u7684 schema \u5982\u4e0b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"+-------+--------------+------+-------+---------+-------+\n| Field | Type         | Null | Key   | Default | Extra |\n+-------+--------------+------+-------+---------+-------+\n| k1    | TINYINT      | Yes  | true  | N/A     |       |\n| k2    | SMALLINT     | Yes  | true  | N/A     |       |\n| k3    | INT          | Yes  | true  | N/A     |       |\n| k4    | BIGINT       | Yes  | true  | N/A     |       |\n| k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n| k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n| k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n+-------+--------------+------+-------+---------+-------+\n")),(0,a.kt)("p",{parentName:"li"},"\u7269\u5316\u89c6\u56fe\u5305\u542b k3, k4, k5, k6, k7 \u5217\uff0c\u4e14\u4e0d\u58f0\u660e\u6392\u5e8f\u5217\uff0c\u5219\u521b\u5efa\u8bed\u53e5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"create materialized view mv_1 as\n    select k3, k4, k5, k6, k7 from all_type_table;\n")),(0,a.kt)("p",{parentName:"li"},"\u7cfb\u7edf\u9ed8\u8ba4\u8865\u5145\u7684\u6392\u5e8f\u5217\u4e3a k3, k4, k5 \u4e09\u5217\u3002\u8fd9\u4e09\u5217\u7c7b\u578b\u7684\u5b57\u8282\u6570\u4e4b\u548c\u4e3a 4(INT) + 8(BIGINT) + 16(DECIMAL) = 28 < 36\u3002\u6240\u4ee5\u8865\u5145\u7684\u662f\u8fd9\u4e09\u5217\u4f5c\u4e3a\u6392\u5e8f\u5217\u3002\n\u7269\u5316\u89c6\u56fe\u7684 schema \u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u5176\u4e2d k3, k4, k5 \u5217\u7684 key \u5b57\u6bb5\u4e3a true\uff0c\u4e5f\u5c31\u662f\u6392\u5e8f\u5217\u3002k6, k7 \u5217\u7684 key \u5b57\u6bb5\u4e3a false\uff0c\u4e5f\u5c31\u662f\u975e\u6392\u5e8f\u5217\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"+----------------+-------+--------------+------+-------+---------+-------+\n| IndexName      | Field | Type         | Null | Key   | Default | Extra |\n+----------------+-------+--------------+------+-------+---------+-------+\n| mv_1           | k3    | INT          | Yes  | true  | N/A     |       |\n|                | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|                | k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n|                | k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n|                | k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n+----------------+-------+--------------+------+-------+---------+-------+\n")))),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE, MATERIALIZED, VIEW\n")))}s.isMDXComponent=!0}}]);