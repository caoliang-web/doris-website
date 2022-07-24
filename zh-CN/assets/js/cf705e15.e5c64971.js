"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[76511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>L});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),L=l,f=m["".concat(s,".").concat(L)]||m[L]||p[L]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function L(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={title:"ALTER-SQL-BLOCK-RULE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE",id:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE",title:"ALTER-SQL-BLOCK-RULE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-SQL-BLOCK-RULE",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-RESOURCE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE"},next:{title:"ALTER-TABLE-BITMAP",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-BITMAP"}},s={},c=[{value:"ALTER-SQL-BLOCK-RULE",id:"alter-sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"alter-sql-block-rule"},"ALTER-SQL-BLOCK-RULE"),(0,l.kt)("h3",{id:"name"},"Name"),(0,l.kt)("p",null,"ALTER SQL BLOCK RULE"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"\u4fee\u6539SQL\u963b\u6b62\u89c4\u5219\uff0c\u5141\u8bb8\u5bf9sql/sqlHash/partition_num/tablet_num/cardinality/global/enable\u7b49\u6bcf\u4e00\u9879\u8fdb\u884c\u4fee\u6539\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SQL_BLOCK_RULE rule_name \n[PROPERTIES ("key"="value", ...)];\n')),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sql \u548c sqlHash \u4e0d\u80fd\u540c\u65f6\u88ab\u8bbe\u7f6e\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u4e00\u4e2arule\u8bbe\u7f6e\u4e86sql\u6216\u8005sqlHash\uff0c\u5219\u53e6\u4e00\u4e2a\u5c5e\u6027\u5c06\u65e0\u6cd5\u88ab\u4fee\u6539\uff1b"),(0,l.kt)("li",{parentName:"ul"},"sql/sqlHash \u548c partition_num/tablet_num/cardinality \u4e0d\u80fd\u540c\u65f6\u88ab\u8bbe\u7f6e\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u4e00\u4e2arule\u8bbe\u7f6e\u4e86partition_num\uff0c\u90a3\u4e48sql\u6216\u8005sqlHash\u5c06\u65e0\u6cd5\u88ab\u4fee\u6539\uff1b")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6839\u636eSQL\u5c5e\u6027\u8fdb\u884c\u4fee\u6539")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SQL_BLOCK_RULE test_rule PROPERTIES("sql"="select \\\\* from test_table","enable"="true")\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e00\u4e2arule\u8bbe\u7f6e\u4e86partition_num\uff0c\u90a3\u4e48sql\u6216\u8005sqlHash\u5c06\u65e0\u6cd5\u88ab\u4fee\u6539")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SQL_BLOCK_RULE test_rule2 PROPERTIES("partition_num" = "10","tablet_num"="300","enable"="true")\n')),(0,l.kt)("h3",{id:"keywords"},"Keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ALTER,SQL_BLOCK_RULE\n")),(0,l.kt)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);