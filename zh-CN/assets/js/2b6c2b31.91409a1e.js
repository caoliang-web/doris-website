"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[41046],{3905:(t,e,r)=>{r.d(e,{Zo:()=>o,kt:()=>c});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),N=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},o=function(t){var e=N(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),m=N(r),c=n,g=m["".concat(d,".").concat(c)]||m[c]||k[c]||l;return r?a.createElement(g,i(i({ref:e},o),{},{components:r})):a.createElement(g,i({ref:e},o))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var N=2;N<l;N++)i[N]=r[N];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36521:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>N});var a=r(87462),n=(r(67294),r(3905));const l={title:"ODBC of Doris",language:"zh-CN"},i=void 0,p={unversionedId:"extending-doris/odbc-of-doris",id:"version-0.15/extending-doris/odbc-of-doris",title:"ODBC of Doris",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/extending-doris/odbc-of-doris.md",sourceDirName:"extending-doris",slug:"/extending-doris/odbc-of-doris",permalink:"/zh-CN/docs/0.15/extending-doris/odbc-of-doris",draft:!1,tags:[],version:"0.15",frontMatter:{title:"ODBC of Doris",language:"zh-CN"},sidebar:"docs",previous:{title:"Logstash Doris Output Plugin",permalink:"/zh-CN/docs/0.15/extending-doris/logstash"},next:{title:"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c",permalink:"/zh-CN/docs/0.15/extending-doris/plugin-development-manual"}},d={},N=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"Doris\u76f8\u5173",id:"doris\u76f8\u5173",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"Doris\u4e2d\u521b\u5efaODBC\u7684\u5916\u8868",id:"doris\u4e2d\u521b\u5efaodbc\u7684\u5916\u8868",level:3},{value:"1. \u4e0d\u4f7f\u7528Resource\u521b\u5efaODBC\u7684\u5916\u8868",id:"1-\u4e0d\u4f7f\u7528resource\u521b\u5efaodbc\u7684\u5916\u8868",level:4},{value:"2. \u901a\u8fc7ODBC_Resource\u6765\u521b\u5efaODBC\u5916\u8868 (\u63a8\u8350\u4f7f\u7528\u7684\u65b9\u5f0f)",id:"2-\u901a\u8fc7odbc_resource\u6765\u521b\u5efaodbc\u5916\u8868-\u63a8\u8350\u4f7f\u7528\u7684\u65b9\u5f0f",level:4},{value:"ODBC Driver\u7684\u5b89\u88c5\u548c\u914d\u7f6e",id:"odbc-driver\u7684\u5b89\u88c5\u548c\u914d\u7f6e",level:5},{value:"\u67e5\u8be2\u7528\u6cd5",id:"\u67e5\u8be2\u7528\u6cd5",level:3},{value:"\u6570\u636e\u5199\u5165",id:"\u6570\u636e\u5199\u5165",level:3},{value:"\u4e8b\u52a1",id:"\u4e8b\u52a1",level:4},{value:"\u7c7b\u578b\u5339\u914d",id:"\u7c7b\u578b\u5339\u914d",level:2},{value:"MySQL",id:"mysql",level:3},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Oracle",id:"oracle",level:3},{value:"SQLServer",id:"sqlserver",level:3},{value:"Q&amp;A",id:"qa",level:2}],o={toc:N};function k(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"odbc-external-table-of-doris"},"ODBC External Table Of Doris"),(0,n.kt)("p",null,"ODBC External Table Of Doris \u63d0\u4f9b\u4e86Doris\u901a\u8fc7\u6570\u636e\u5e93\u8bbf\u95ee\u7684\u6807\u51c6\u63a5\u53e3(ODBC)\u6765\u8bbf\u95ee\u5916\u90e8\u8868\uff0c\u5916\u90e8\u8868\u7701\u53bb\u4e86\u7e41\u7410\u7684\u6570\u636e\u5bfc\u5165\u5de5\u4f5c\uff0c\u8ba9Doris\u53ef\u4ee5\u5177\u6709\u4e86\u8bbf\u95ee\u5404\u5f0f\u6570\u636e\u5e93\u7684\u80fd\u529b\uff0c\u5e76\u501f\u52a9Doris\u672c\u8eab\u7684OLAP\u7684\u80fd\u529b\u6765\u89e3\u51b3\u5916\u90e8\u8868\u7684\u6570\u636e\u5206\u6790\u95ee\u9898\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u652f\u6301\u5404\u79cd\u6570\u636e\u6e90\u63a5\u5165Doris"),(0,n.kt)("li",{parentName:"ol"},"\u652f\u6301Doris\u4e0e\u5404\u79cd\u6570\u636e\u6e90\u4e2d\u7684\u8868\u8054\u5408\u67e5\u8be2\uff0c\u8fdb\u884c\u66f4\u52a0\u590d\u6742\u7684\u5206\u6790\u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ol"},"\u901a\u8fc7insert into\u5c06Doris\u6267\u884c\u7684\u67e5\u8be2\u7ed3\u679c\u5199\u5165\u5916\u90e8\u7684\u6570\u636e\u6e90")),(0,n.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u8be5\u529f\u80fd\u7684\u5b9e\u73b0\u539f\u7406\u3001\u4f7f\u7528\u65b9\u5f0f\u7b49\u3002"),(0,n.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,n.kt)("h3",{id:"doris\u76f8\u5173"},"Doris\u76f8\u5173"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FE\uff1aFrontend\uff0cDoris \u7684\u524d\u7aef\u8282\u70b9,\u8d1f\u8d23\u5143\u6570\u636e\u7ba1\u7406\u548c\u8bf7\u6c42\u63a5\u5165"),(0,n.kt)("li",{parentName:"ul"},"BE\uff1aBackend\uff0cDoris \u7684\u540e\u7aef\u8282\u70b9,\u8d1f\u8d23\u67e5\u8be2\u6267\u884c\u548c\u6570\u636e\u5b58\u50a8")),(0,n.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,n.kt)("h3",{id:"doris\u4e2d\u521b\u5efaodbc\u7684\u5916\u8868"},"Doris\u4e2d\u521b\u5efaODBC\u7684\u5916\u8868"),(0,n.kt)("h4",{id:"1-\u4e0d\u4f7f\u7528resource\u521b\u5efaodbc\u7684\u5916\u8868"},"1. \u4e0d\u4f7f\u7528Resource\u521b\u5efaODBC\u7684\u5916\u8868"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'CREATE EXTERNAL TABLE `baseall_oracle` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n) ENGINE=ODBC\nCOMMENT "ODBC"\nPROPERTIES (\n"host" = "192.168.0.1",\n"port" = "8086",\n"user" = "test",\n"password" = "test",\n"database" = "test",\n"table" = "baseall",\n"driver" = "Oracle 19 ODBC driver",\n"odbc_type" = "oracle"\n);\n')),(0,n.kt)("h4",{id:"2-\u901a\u8fc7odbc_resource\u6765\u521b\u5efaodbc\u5916\u8868-\u63a8\u8350\u4f7f\u7528\u7684\u65b9\u5f0f"},"2. \u901a\u8fc7ODBC_Resource\u6765\u521b\u5efaODBC\u5916\u8868 (\u63a8\u8350\u4f7f\u7528\u7684\u65b9\u5f0f)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'CREATE EXTERNAL RESOURCE `oracle_odbc`\nPROPERTIES (\n"type" = "odbc_catalog",\n"host" = "192.168.0.1",\n"port" = "8086",\n"user" = "test",\n"password" = "test",\n"database" = "test",\n"odbc_type" = "oracle",\n"driver" = "Oracle 19 ODBC driver"\n);\n     \nCREATE EXTERNAL TABLE `baseall_oracle` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n) ENGINE=ODBC\nCOMMENT "ODBC"\nPROPERTIES (\n"odbc_catalog_resource" = "oracle_odbc",\n"database" = "test",\n"table" = "baseall"\n);\n')),(0,n.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"hosts")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5916\u8868\u6570\u636e\u5e93\u7684IP\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"driver")),(0,n.kt)("td",{parentName:"tr",align:null},"ODBC\u5916\u8868\u7684Driver\u540d\uff0c\u8be5\u540d\u5b57\u9700\u8981\u548cbe/conf/odbcinst.ini\u4e2d\u7684Driver\u540d\u4e00\u81f4\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"odbc_type")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5916\u8868\u6570\u636e\u5e93\u7684\u7c7b\u578b\uff0c\u5f53\u524d\u652f\u6301oracle, mysql, postgresql")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"user")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5916\u8868\u6570\u636e\u5e93\u7684\u7528\u6237\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"password")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u7528\u6237\u7684\u5bc6\u7801\u4fe1\u606f")))),(0,n.kt)("h5",{id:"odbc-driver\u7684\u5b89\u88c5\u548c\u914d\u7f6e"},"ODBC Driver\u7684\u5b89\u88c5\u548c\u914d\u7f6e"),(0,n.kt)("p",null,"\u5404\u5927\u4e3b\u6d41\u6570\u636e\u5e93\u90fd\u4f1a\u63d0\u4f9bODBC\u7684\u8bbf\u95eeDriver\uff0c\u7528\u6237\u53ef\u4ee5\u6267\u884c\u53c2\u7167\u53c2\u7167\u5404\u6570\u636e\u5e93\u5b98\u65b9\u63a8\u8350\u7684\u65b9\u5f0f\u5b89\u88c5\u5bf9\u5e94\u7684ODBC Driver LiB\u5e93\u3002"),(0,n.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u67e5\u627e\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u7684Driver Lib\u5e93\u7684\u8def\u5f84\uff0c\u5e76\u4e14\u4fee\u6539be/conf/odbcinst.ini\u7684\u914d\u7f6e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[MySQL Driver]\nDescription     = ODBC for MySQL\nDriver          = /usr/lib64/libmyodbc8w.so\nFileUsage       = 1 \n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0a\u8ff0\u914d\u7f6e",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"\u91cc\u7684\u5bf9\u5e94\u7684\u662fDriver\u540d\uff0c\u5728\u5efa\u7acb\u5916\u90e8\u8868\u65f6\u9700\u8981\u4fdd\u6301\u5916\u90e8\u8868\u7684Driver\u540d\u548c\u914d\u7f6e\u6587\u4ef6\u4e4b\u4e2d\u7684\u4e00\u81f4\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Driver="),"  \u8fd9\u4e2a\u8981\u6839\u636e\u5b9e\u9645BE\u5b89\u88c5Driver\u7684\u8def\u5f84\u6765\u586b\u5199\uff0c\u672c\u8d28\u4e0a\u5c31\u662f\u4e00\u4e2a\u52a8\u6001\u5e93\u7684\u8def\u5f84\uff0c\u8fd9\u91cc\u9700\u8981\u4fdd\u8bc1\u8be5\u52a8\u6001\u5e93\u7684\u524d\u7f6e\u4f9d\u8d56\u90fd\u88ab\u6ee1\u8db3\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5207\u8bb0\uff0c\u8fd9\u91cc\u8981\u6c42\u6240\u6709\u7684BE\u8282\u70b9\u90fd\u5b89\u88c5\u4e0a\u76f8\u540c\u7684Driver\uff0c\u5e76\u4e14\u5b89\u88c5\u8def\u5f84\u76f8\u540c\uff0c\u540c\u65f6\u6709\u76f8\u540c\u7684be/conf/odbcinst.ini\u7684\u914d\u7f6e\u3002")),(0,n.kt)("h3",{id:"\u67e5\u8be2\u7528\u6cd5"},"\u67e5\u8be2\u7528\u6cd5"),(0,n.kt)("p",null,"\u5b8c\u6210\u5728Doris\u4e2d\u5efa\u7acbODBC\u5916\u8868\u540e\uff0c\u9664\u4e86\u65e0\u6cd5\u4f7f\u7528Doris\u4e2d\u7684\u6570\u636e\u6a21\u578b(rollup\u3001\u9884\u805a\u5408\u3001\u7269\u5316\u89c6\u56fe\u7b49)\u5916\uff0c\u4e0e\u666e\u901a\u7684Doris\u8868\u5e76\u65e0\u533a\u522b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"select * from oracle_table where k1 > 1000 and k3 ='term' or k4 like '%doris';\n")),(0,n.kt)("h3",{id:"\u6570\u636e\u5199\u5165"},"\u6570\u636e\u5199\u5165"),(0,n.kt)("p",null,"\u5728Doris\u4e2d\u5efa\u7acbODBC\u5916\u8868\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7insert into\u8bed\u53e5\u76f4\u63a5\u5199\u5165\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u5c06Doris\u6267\u884c\u5b8c\u67e5\u8be2\u4e4b\u540e\u7684\u7ed3\u679c\u5199\u5165ODBC\u5916\u8868\uff0c\u6216\u8005\u662f\u4ece\u4e00\u4e2aODBC\u5916\u8868\u5c06\u6570\u636e\u5bfc\u5165\u53e6\u4e00\u4e2aODBC\u5916\u8868\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'insert into oracle_table values(1, "doris");\ninsert into oracle_table select * from postgre_table;\n')),(0,n.kt)("h4",{id:"\u4e8b\u52a1"},"\u4e8b\u52a1"),(0,n.kt)("p",null,"Doris\u7684\u6570\u636e\u662f\u7531\u4e00\u7ec4batch\u7684\u65b9\u5f0f\u5199\u5165\u5916\u90e8\u8868\u7684\uff0c\u5982\u679c\u4e2d\u9014\u5bfc\u5165\u4e2d\u65ad\uff0c\u4e4b\u524d\u5199\u5165\u6570\u636e\u53ef\u80fd\u9700\u8981\u56de\u6eda\u3002\u6240\u4ee5ODBC\u5916\u8868\u652f\u6301\u6570\u636e\u5199\u5165\u65f6\u7684\u4e8b\u52a1\uff0c\u4e8b\u52a1\u7684\u652f\u6301\u9700\u8981\u901a\u8fc7session variable\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"enable_odbc_transcation "),"\u8bbe\u7f6e\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set enable_odbc_transcation = true; \n")),(0,n.kt)("p",null,"\u4e8b\u52a1\u4fdd\u8bc1\u4e86ODBC\u5916\u8868\u6570\u636e\u5199\u5165\u7684\u539f\u5b50\u6027\uff0c\u4f46\u662f\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u4f1a\u964d\u4f4e\u6570\u636e\u5199\u5165\u7684\u6027\u80fd\uff0c\u53ef\u4ee5\u8003\u8651\u914c\u60c5\u5f00\u542f\u8be5\u529f\u80fd\u3002"),(0,n.kt)("h2",{id:"\u7c7b\u578b\u5339\u914d"},"\u7c7b\u578b\u5339\u914d"),(0,n.kt)("p",null,"\u5404\u4e2a\u6570\u636e\u5e93\u4e4b\u95f4\u6570\u636e\u7c7b\u578b\u5b58\u5728\u4e0d\u540c\uff0c\u8fd9\u91cc\u5217\u51fa\u4e86\u5404\u4e2a\u6570\u636e\u5e93\u4e2d\u7684\u7c7b\u578b\u548cDoris\u4e4b\u4e2d\u6570\u636e\u7c7b\u578b\u5339\u914d\u7684\u60c5\u51b5\u3002"),(0,n.kt)("h3",{id:"mysql"},"MySQL"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"MySQL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Doris"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u66ff\u6362\u65b9\u6848"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5f53\u524d\u4ec5\u652f\u6301UTF8\u7f16\u7801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5f53\u524d\u4ec5\u652f\u6301UTF8\u7f16\u7801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PostgreSQL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Doris"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u66ff\u6362\u65b9\u6848"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5f53\u524d\u4ec5\u652f\u6301UTF8\u7f16\u7801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5f53\u524d\u4ec5\u652f\u6301UTF8\u7f16\u7801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"REAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"TIMESTAMP"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h3",{id:"oracle"},"Oracle"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Oracle"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Doris"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u66ff\u6362\u65b9\u6848"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Oracle\u53ef\u7528number(1) \u66ff\u6362boolean")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Oracle\u53ef\u7531NUMMBER\u66ff\u6362")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Oracle\u53ef\u7531NUMMBER\u66ff\u6362")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Oracle\u53ef\u7531NUMMBER\u66ff\u6362")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h3",{id:"sqlserver"},"SQLServer"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"SQLServer"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Doris"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u66ff\u6362\u65b9\u6848"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5f53\u524d\u4ec5\u652f\u6301UTF8\u7f16\u7801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5f53\u524d\u4ec5\u652f\u6301UTF8\u7f16\u7801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"REAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME/DATETIME2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL/NUMERIC"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h2",{id:"qa"},"Q&A"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e0e\u539f\u5148\u7684MySQL\u5916\u8868\u7684\u5173\u7cfb"),(0,n.kt)("p",{parentName:"li"},"\u5728\u63a5\u5165ODBC\u5916\u8868\u4e4b\u540e\uff0c\u539f\u5148\u7684\u8bbf\u95eeMySQL\u5916\u8868\u7684\u65b9\u5f0f\u5c06\u88ab\u9010\u6e10\u5f03\u7528\u3002\u5982\u679c\u4e4b\u524d\u6ca1\u6709\u4f7f\u7528\u8fc7MySQL\u5916\u8868\uff0c\u5efa\u8bae\u65b0\u63a5\u5165\u7684MySQL\u8868\u76f4\u63a5\u4f7f\u7528ODBC\u7684MySQL\u5916\u8868\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9664\u4e86MySQL,Oracle,PostgreSQL,SQLServer\u662f\u5426\u80fd\u591f\u652f\u6301\u66f4\u591a\u7684\u6570\u636e\u5e93"),(0,n.kt)("p",{parentName:"li"},"\u76ee\u524dDoris\u53ea\u9002\u914d\u4e86MySQL,Oracle,PostgreSQL,SQLServer\uff0c\u5173\u4e8e\u5176\u4ed6\u7684\u6570\u636e\u5e93\u7684\u9002\u914d\u5de5\u4f5c\u6b63\u5728\u89c4\u5212\u4e4b\u4e2d\uff0c\u539f\u5219\u4e0a\u6765\u8bf4\u4efb\u4f55\u652f\u6301ODBC\u8bbf\u95ee\u7684\u6570\u636e\u5e93\u90fd\u80fd\u901a\u8fc7ODBC\u5916\u8868\u6765\u8bbf\u95ee\u3002\u5982\u679c\u60a8\u6709\u8bbf\u95ee\u5176\u4ed6\u5916\u8868\u7684\u9700\u6c42\uff0c\u6b22\u8fce\u4fee\u6539\u4ee3\u7801\u5e76\u8d21\u732e\u7ed9Doris\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4ec0\u4e48\u573a\u5408\u9002\u5408\u901a\u8fc7\u5916\u8868\u8bbf\u95ee"),(0,n.kt)("p",{parentName:"li"},"\u901a\u5e38\u5728\u5916\u8868\u6570\u636e\u91cf\u8f83\u5c0f\uff0c\u5c11\u4e8e100W\u6761\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5916\u90e8\u8868\u7684\u65b9\u5f0f\u8bbf\u95ee\u3002\u7531\u4e8e\u5916\u8868\u65e0\u6cd5\u53d1\u6325Doris\u5728\u5b58\u50a8\u5f15\u64ce\u90e8\u5206\u7684\u80fd\u529b\u548c\u4f1a\u5e26\u6765\u989d\u5916\u7684\u7f51\u7edc\u5f00\u9500\uff0c\u6240\u4ee5\u5efa\u8bae\u6839\u636e\u5b9e\u9645\u5bf9\u67e5\u8be2\u7684\u8bbf\u95ee\u65f6\u5ef6\u8981\u6c42\u6765\u786e\u5b9a\u662f\u5426\u901a\u8fc7\u5916\u90e8\u8868\u8bbf\u95ee\u8fd8\u662f\u5c06\u6570\u636e\u5bfc\u5165Doris\u4e4b\u4e2d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7Oracle\u8bbf\u95ee\u51fa\u73b0\u4e71\u7801"),(0,n.kt)("p",{parentName:"li"},"\u5c1d\u8bd5\u5728BE\u542f\u52a8\u811a\u672c\u4e4b\u4e2d\u6dfb\u52a0\u5982\u4e0b\u53c2\u6570\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"export NLS_LANG=AMERICAN_AMERICA.AL32UTF8"),"\uff0c \u5e76\u91cd\u65b0\u542f\u52a8\u6240\u6709BE")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"ANSI Driver or Unicode Driver \uff1f"),(0,n.kt)("p",{parentName:"li"},"\u5f53\u524dODBC\u652f\u6301ANSI \u4e0e Unicode \u4e24\u79cdDriver\u5f62\u5f0f\uff0c\u5f53\u524dDoris\u53ea\u652f\u6301Unicode Driver\u3002\u5982\u679c\u5f3a\u884c\u4f7f\u7528ANSI Driver\u53ef\u80fd\u4f1a\u5bfc\u81f4\u67e5\u8be2\u7ed3\u679c\u51fa\u9519\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u62a5\u9519 ",(0,n.kt)("inlineCode",{parentName:"p"},"driver connect Err: 01000 [unixODBC][Driver Manager]Can't open lib 'Xxx' : file not found (0)")),(0,n.kt)("p",{parentName:"li"},"\u6ca1\u6709\u5728\u6bcf\u4e00\u4e2aBE\u4e0a\u5b89\u88c5\u597d\u5bf9\u5e94\u6570\u636e\u7684Driver\uff0c\u6216\u8005\u662f\u6ca1\u6709\u5728be/conf/odbcinst.ini\u914d\u7f6e\u6b63\u786e\u7684\u8def\u5f84\uff0c\u4ea6\u6216\u662f\u5efa\u8868\u662fDriver\u540d\u4e0ebe/conf/odbcinst.ini\u4e0d\u540c")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u62a5\u9519 ",(0,n.kt)("inlineCode",{parentName:"p"},"Fail to convert odbc value 'PALO ' TO INT on column:'A'")),(0,n.kt)("p",{parentName:"li"},"ODBC\u5916\u8868\u7684A\u5217\u7c7b\u578b\u8f6c\u6362\u51fa\u9519\uff0c\u8bf4\u660e\u5916\u8868\u7684\u5b9e\u9645\u5217\u4e0eODBC\u7684\u6620\u5c04\u5217\u7684\u6570\u636e\u7c7b\u578b\u4e0d\u540c\uff0c\u9700\u8981\u4fee\u6539\u5217\u7684\u7c7b\u578b\u6620\u5c04")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u540c\u65f6\u4f7f\u7528\u65e7\u7684MySQL\u8868\u4e0eODBC\u5916\u8868\u7684Driver\u65f6\u51fa\u73b0\u7a0b\u5e8fCrash"),(0,n.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u662fMySQL\u6570\u636e\u5e93\u7684Driver\u4e0e\u73b0\u6709Doris\u4f9d\u8d56MySQL\u5916\u8868\u7684\u517c\u5bb9\u95ee\u9898\u3002\u63a8\u8350\u89e3\u51b3\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65b9\u5f0f1\uff1a\u901a\u8fc7ODBC\u5916\u8868\u66ff\u6362\u65e7\u7684MySQL\u5916\u8868\uff0c\u5e76\u91cd\u65b0\u7f16\u8bd1BE\uff0c\u5173\u95edWITH_MYSQL\u7684\u9009\u9879"),(0,n.kt)("li",{parentName:"ul"},"\u65b9\u5f0f2\uff1a\u4e0d\u4f7f\u7528\u6700\u65b08.X\u7684MySQL\u7684ODBC Driver\uff0c\u800c\u662f\u4f7f\u75285.X\u7684MySQL\u7684ODBC Driver"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8fc7\u6ee4\u6761\u4ef6\u4e0b\u63a8\n\u5f53\u524dODBC\u5916\u8868\u652f\u6301\u8fc7\u6ee4\u6761\u4ef6\u4e0b\u63a8\uff0c\u76ee\u524dMySQL\u7684\u5916\u8868\u662f\u80fd\u591f\u652f\u6301\u6240\u6709\u6761\u4ef6\u4e0b\u63a8\u7684\u3002\u5176\u4ed6\u7684\u6570\u636e\u5e93\u7684\u51fd\u6570\u4e0eDoris\u4e0d\u540c\u4f1a\u5bfc\u81f4\u4e0b\u63a8\u67e5\u8be2\u5931\u8d25\u3002\u76ee\u524d\u9664MySQL\u5916\u8868\u4e4b\u5916\uff0c\u5176\u4ed6\u7684\u6570\u636e\u5e93\u4e0d\u652f\u6301\u51fd\u6570\u8c03\u7528\u7684\u6761\u4ef6\u4e0b\u63a8\u3002Doris\u662f\u5426\u5c06\u6240\u9700\u8fc7\u6ee4\u6761\u4ef6\u4e0b\u63a8\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"explain")," \u67e5\u8be2\u8bed\u53e5\u8fdb\u884c\u786e\u8ba4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u62a5\u9519",(0,n.kt)("inlineCode",{parentName:"p"},"driver connect Err: xxx")),(0,n.kt)("p",{parentName:"li"},"\u901a\u5e38\u662f\u8fde\u63a5\u6570\u636e\u5e93\u5931\u8d25\uff0cErr\u90e8\u5206\u4ee3\u8868\u4e86\u4e0d\u540c\u7684\u6570\u636e\u5e93\u8fde\u63a5\u5931\u8d25\u7684\u62a5\u9519\u3002\u8fd9\u79cd\u60c5\u51b5\u901a\u5e38\u662f\u914d\u7f6e\u5b58\u5728\u95ee\u9898\u3002\u53ef\u4ee5\u68c0\u67e5\u662f\u5426\u9519\u914d\u4e86ip\u5730\u5740\uff0c\u7aef\u53e3\u6216\u8d26\u53f7\u5bc6\u7801\u3002"))))}k.isMDXComponent=!0}}]);