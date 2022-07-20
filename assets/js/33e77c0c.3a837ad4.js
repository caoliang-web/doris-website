"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[14233],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),u=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(a),m=r,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(b,s(s({ref:e},p),{},{components:a})):n.createElement(b,s({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9599:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"MULTI LOAD",language:"en"},s=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/MULTI-LOAD",id:"version-1.0/sql-reference/sql-statements/Data-Manipulation/MULTI-LOAD",title:"MULTI LOAD",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Data-Manipulation/MULTI-LOAD.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/MULTI-LOAD",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/MULTI-LOAD",draft:!1,tags:[],version:"1.0",frontMatter:{title:"MULTI LOAD",language:"en"},sidebar:"docs",previous:{title:"MINI LOAD",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/MINI-LOAD"},next:{title:"OUTFILE",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/OUTFILE"}},l={},u=[{value:"Description",id:"description",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:u};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multi-load"},"MULTI LOAD"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Syntax:\ncurl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_start?label=xxx\ncurl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table1}/_load?label=xxx\\&sub_label=yyy\ncurl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table2}/_load?label=xxx\\&sub_label=zzz\ncurl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_commit?label=xxx\ncurl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_desc?label=xxx"),(0,r.kt)("p",null,"'MULTI LOAD'can support users to import multiple tables at the same time on the basis of'MINI LOAD'. The specific commands are shown above.\n'/api/{db}/_multi_start' starts a multi-table import task\n'/api/{db}/{table}/_load' adds a table to be imported to an import task. The main difference from 'MINI LOAD' is that the 'sub_label' parameter needs to be passed in.\n'/api/{db}/_multi_commit' submits the entire multi-table import task and the background begins processing\n'/api/{db}/_multi_abort' Abandons a multi-table import task\n'/api/{db}/_multi_desc' shows the number of jobs submitted by a multi-table import task"),(0,r.kt)("p",null,"HTTP Protocol Specification\nPrivilege Authentication Currently Doris uses the Basic mode of HTTP for privilege authentication. So you need to specify a username and password when importing\nThis way is to pass passwords in plaintext, since we are all in the Intranet environment at present..."),(0,r.kt)("p",null,"Expect Doris needs to send an HTTP request, and needs the 'Expect' header information with the content of'100-continue'.\nWhy? Because we need to redirect the request, we have to transfer the data content before.\nThis can avoid causing multiple data transmission, thereby improving efficiency."),(0,r.kt)("p",null,"Content-Length Doris needs to send a request with the header 'Content-Length'. If the content ratio is sent\nIf'Content-Length'is less, Palo believes that if there is a transmission problem, the submission of the task fails.\nNOTE: If you send more data than 'Content-Length', Doris reads only 'Content-Length'.\nLength content and import"),(0,r.kt)("p",null,"Description of parameters:\nUser: User is user_name if the user is in default_cluster. Otherwise, it is user_name@cluster_name."),(0,r.kt)("p",null,"Label: Used to specify the label number imported in this batch for later job status queries, etc.\nThis parameter must be passed in."),(0,r.kt)("p",null,"Sub_label: Used to specify a subversion number within a multi-table import task. For multi-table imported loads, this parameter must be passed in."),(0,r.kt)("p",null,"Columns: Used to describe the corresponding column name in the import file.\nIf it is not passed in, the column order in the file is considered to be the same as the order in which the table is built.\nThe specified method is comma-separated, such as columns = k1, k2, k3, K4"),(0,r.kt)("p",null,"Column_separator: Used to specify the separator between columns, default is' t'\nNOTE: Url encoding is required, such as specifying '\\t'as a delimiter.\nThen you should pass in 'column_separator=% 09'"),(0,r.kt)("p",null,"Max_filter_ratio: Used to specify the maximum percentage allowed to filter irregular data, default is 0, not allowed to filter\nCustom specification should be as follows:'max_filter_ratio = 0.2', meaning that 20% error rate is allowed.\nPass in effect at'_multi_start'"),(0,r.kt)("p",null,"NOTE:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This method of importing is currently completed on a single machine, so it is not suitable to import a large amount of data.\nIt is recommended that the amount of data imported should not exceed 1GB")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Currently, it is not possible to submit multiple files in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"curl-T', "),"{file1, file2}', because curl splits them into multiple files.\nRequest sent, multiple requests cannot share a label number, so it cannot be used")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Supports streaming-like ways to use curl to import data into Doris, but Doris will have to wait until the streaming is over\nReal import behavior will occur, and the amount of data in this way cannot be too large."))),(0,r.kt)("p",null,"'35;'35; example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the data from the local file 'testData1'into the table of 'testTbl1' in the database 'testDb', and\nImport the data from 'testData2'into the table 'testTbl2' in 'testDb'(the user is in default_cluster)\ncurl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\ncurl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\ncurl --location-trusted -u root -T testData2 http://host:port/api/testDb/testTbl2/_load?label=123\\&sub_label=2\ncurl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_commit?label=123")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Multi-table Import Midway Abandon (User in default_cluster)\ncurl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\ncurl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\ncurl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_abort?label=123")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Multi-table import to see how much content has been submitted (user is in default_cluster)\ncurl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\ncurl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\ncurl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_desc?label=123"))),(0,r.kt)("h2",{id:"keyword"},"keyword"),(0,r.kt)("p",null,"MULTI, MINI, LOAD"))}c.isMDXComponent=!0}}]);