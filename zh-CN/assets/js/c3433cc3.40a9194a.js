"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[60946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),E=c(n),m=a,d=E["".concat(s,".").concat(m)]||E[m]||u[m]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=E;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},55054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"CREATE-TABLE-AS-SELECT",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",title:"CREATE-TABLE-AS-SELECT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-TABLE-AS-SELECT",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-TABLE-LIKE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-LIKE"},next:{title:"CREATE-TABLE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"}},s={},c=[{value:"CREATE-TABLE-AS-SELECT",id:"create-table-as-select",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-table-as-select"},"CREATE-TABLE-AS-SELECT"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"CREATE TABLE AS SELECT"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u901a\u8fc7 Select \u8bed\u53e5\u8fd4\u56de\u7ed3\u679c\u521b\u5efa\u8868\u7ed3\u6784\uff0c\u540c\u65f6\u5bfc\u5165\u6570\u636e"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name [( column_name_list )]\nopt_engine opt_partition opt_properties KW_AS query_stmt\n")),(0,a.kt)("p",null,"\u8bf4\u660e: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6682\u65f6\u4e0d\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"li"},"decimal"),"\u7c7b\u578b\u7684\u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u9700\u8981\u62e5\u6709\u6765\u6e90\u8868\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"SELECT"),"\u6743\u9650\u548c\u76ee\u6807\u5e93\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"CREATE"),"\u6743\u9650"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u8868\u6210\u529f\u540e\uff0c\u4f1a\u8fdb\u884c\u6570\u636e\u5bfc\u5165\uff0c\u5982\u679c\u5bfc\u5165\u5931\u8d25\uff0c\u5c06\u4f1a\u5220\u9664\u8868")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 select \u8bed\u53e5\u4e2d\u7684\u5b57\u6bb5\u540d"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'create table `test`.`select_varchar` \nPROPERTIES(\\"replication_num\\" = \\"1\\") \nas select * from `test`.`varchar_table`\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u5b57\u6bb5\u540d(\u9700\u8981\u4e0e\u8fd4\u56de\u7ed3\u679c\u5b57\u6bb5\u6570\u91cf\u4e00\u81f4)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'create table `test`.`select_name`(user, testname, userstatus) \nPROPERTIES(\\"replication_num\\" = \\"1\\") \nas select vt.userId, vt.username, jt.status \nfrom `test`.`varchar_table` vt join \n`test`.`join_table` jt on vt.userId=jt.userId\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE, TABLE, AS, SELECT\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);