"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[25964],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),k=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=k(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),N=k(a),c=r,d=N["".concat(o,".").concat(c)]||N[c]||s[c]||l;return a?n.createElement(d,p(p({ref:t},m),{},{components:a})):n.createElement(d,p({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=N;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var k=2;k<l;k++)p[k]=a[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},72690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const l={title:"CREATE-ROUTINE-LOAD",language:"zh-CN"},p=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD",title:"CREATE-ROUTINE-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-ROUTINE-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"CANCEL-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD"},next:{title:"PAUSE-ROUTINE-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD"}},o={},k=[{value:"CREATE-ROUTINE-LOAD",id:"create-routine-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:k};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-routine-load"},"CREATE-ROUTINE-LOAD"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CREATE ROUTINE LOAD"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u4f8b\u884c\u5bfc\u5165\uff08Routine Load\uff09\u529f\u80fd\uff0c\u652f\u6301\u7528\u6237\u63d0\u4ea4\u4e00\u4e2a\u5e38\u9a7b\u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u901a\u8fc7\u4e0d\u65ad\u7684\u4ece\u6307\u5b9a\u7684\u6570\u636e\u6e90\u8bfb\u53d6\u6570\u636e\uff0c\u5c06\u6570\u636e\u5bfc\u5165\u5230 Doris \u4e2d\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u4ec5\u652f\u6301\u901a\u8fc7\u65e0\u8ba4\u8bc1\u6216\u8005 SSL \u8ba4\u8bc1\u65b9\u5f0f\uff0c\u4ece Kakfa \u5bfc\u5165 CSV \u6216 Json \u683c\u5f0f\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROUTINE LOAD [db.]job_name ON tbl_name\n[merge_type]\n[load_properties]\n[job_properties]\nFROM data_source [data_source_properties]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[db.]job_name")),(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u4f5c\u4e1a\u7684\u540d\u79f0\uff0c\u5728\u540c\u4e00\u4e2a database \u5185\uff0c\u76f8\u540c\u540d\u79f0\u53ea\u80fd\u6709\u4e00\u4e2a job \u5728\u8fd0\u884c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"tbl_name")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u9700\u8981\u5bfc\u5165\u7684\u8868\u7684\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"merge_type")),(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u5408\u5e76\u7c7b\u578b\u3002\u9ed8\u8ba4\u4e3a APPEND\uff0c\u8868\u793a\u5bfc\u5165\u7684\u6570\u636e\u90fd\u662f\u666e\u901a\u7684\u8ffd\u52a0\u5199\u64cd\u4f5c\u3002MERGE \u548c DELETE \u7c7b\u578b\u4ec5\u9002\u7528\u4e8e Unique Key \u6a21\u578b\u8868\u3002\u5176\u4e2d MERGE \u7c7b\u578b\u9700\u8981\u914d\u5408 ","[DELETE ON]"," \u8bed\u53e5\u4f7f\u7528\uff0c\u4ee5\u6807\u6ce8 Delete Flag \u5217\u3002\u800c DELETE \u7c7b\u578b\u5219\u8868\u793a\u5bfc\u5165\u7684\u6240\u6709\u6570\u636e\u7686\u4e3a\u5220\u9664\u6570\u636e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"load_properties"),(0,r.kt)("p",{parentName:"li"},"\u7528\u4e8e\u63cf\u8ff0\u5bfc\u5165\u6570\u636e\u3002\u7ec4\u6210\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"[column_separator],\n[columns_mapping],\n[preceding_filter],\n[where_predicates],\n[partitions],\n[DELETE ON],\n[ORDER BY]\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"column_separator")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u5217\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"\\t")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'COLUMNS TERMINATED BY ","'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"columns_mapping")),(0,r.kt)("p",{parentName:"li"},"\u7528\u4e8e\u6307\u5b9a\u6587\u4ef6\u5217\u548c\u8868\u4e2d\u5217\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u4ee5\u53ca\u5404\u79cd\u5217\u8f6c\u6362\u7b49\u3002\u5173\u4e8e\u8fd9\u90e8\u5206\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u9605 ","[\u5217\u7684\u6620\u5c04\uff0c\u8f6c\u6362\u4e0e\u8fc7\u6ee4]"," \u6587\u6863\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"(k1, k2, tmpk1, k3 = tmpk1 + 1)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"preceding_filter")),(0,r.kt)("p",{parentName:"li"},"\u8fc7\u6ee4\u539f\u59cb\u6570\u636e\u3002\u5173\u4e8e\u8fd9\u90e8\u5206\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u9605 ","[\u5217\u7684\u6620\u5c04\uff0c\u8f6c\u6362\u4e0e\u8fc7\u6ee4]"," \u6587\u6863\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"where_predicates")),(0,r.kt)("p",{parentName:"li"},"\u6839\u636e\u6761\u4ef6\u5bf9\u5bfc\u5165\u7684\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4\u3002\u5173\u4e8e\u8fd9\u90e8\u5206\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u9605 ","[\u5217\u7684\u6620\u5c04\uff0c\u8f6c\u6362\u4e0e\u8fc7\u6ee4]"," \u6587\u6863\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"WHERE k1 > 100 and k2 = 1000"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"partitions")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u5bfc\u5165\u76ee\u7684\u8868\u7684\u54ea\u4e9b partition \u4e2d\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f1a\u81ea\u52a8\u5bfc\u5165\u5230\u5bf9\u5e94\u7684 partition \u4e2d\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PARTITION(p1, p2, p3)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DELETE ON")),(0,r.kt)("p",{parentName:"li"},"\u9700\u914d\u5408 MEREGE \u5bfc\u5165\u6a21\u5f0f\u4e00\u8d77\u4f7f\u7528\uff0c\u4ec5\u9488\u5bf9 Unique Key \u6a21\u578b\u7684\u8868\u3002\u7528\u4e8e\u6307\u5b9a\u5bfc\u5165\u6570\u636e\u4e2d\u8868\u793a Delete Flag \u7684\u5217\u548c\u8ba1\u7b97\u5173\u7cfb\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DELETE ON v3 >100"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")),(0,r.kt)("p",{parentName:"li"},"\u4ec5\u9488\u5bf9 Unique Key \u6a21\u578b\u7684\u8868\u3002\u7528\u4e8e\u6307\u5b9a\u5bfc\u5165\u6570\u636e\u4e2d\u8868\u793a Sequence Col \u7684\u5217\u3002\u4e3b\u8981\u7528\u4e8e\u5bfc\u5165\u65f6\u4fdd\u8bc1\u6570\u636e\u987a\u5e8f\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"job_properties")),(0,r.kt)("p",{parentName:"li"},"\u7528\u4e8e\u6307\u5b9a\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u7684\u901a\u7528\u53c2\u6570\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'PROPERTIES (\n    "key1" = "val1",\n    "key2" = "val2"\n)\n')),(0,r.kt)("p",{parentName:"li"},"\u76ee\u524d\u6211\u4eec\u652f\u6301\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"desired_concurrent_number")),(0,r.kt)("p",{parentName:"li"},"\u671f\u671b\u7684\u5e76\u53d1\u5ea6\u3002\u4e00\u4e2a\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u4f1a\u88ab\u5206\u6210\u591a\u4e2a\u5b50\u4efb\u52a1\u6267\u884c\u3002\u8fd9\u4e2a\u53c2\u6570\u6307\u5b9a\u4e00\u4e2a\u4f5c\u4e1a\u6700\u591a\u6709\u591a\u5c11\u4efb\u52a1\u53ef\u4ee5\u540c\u65f6\u6267\u884c\u3002\u5fc5\u987b\u5927\u4e8e0\u3002\u9ed8\u8ba4\u4e3a3\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u5e76\u53d1\u5ea6\u5e76\u4e0d\u662f\u5b9e\u9645\u7684\u5e76\u53d1\u5ea6\uff0c\u5b9e\u9645\u7684\u5e76\u53d1\u5ea6\uff0c\u4f1a\u901a\u8fc7\u96c6\u7fa4\u7684\u8282\u70b9\u6570\u3001\u8d1f\u8f7d\u60c5\u51b5\uff0c\u4ee5\u53ca\u6570\u636e\u6e90\u7684\u60c5\u51b5\u7efc\u5408\u8003\u8651\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'"desired_concurrent_number" = "3"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"max_batch_interval/max_batch_rows/max_batch_size")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e09\u4e2a\u53c2\u6570\u5206\u522b\u8868\u793a\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u5b50\u4efb\u52a1\u6700\u5927\u6267\u884c\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002\u8303\u56f4\u4e3a 5 \u5230 60\u3002\u9ed8\u8ba4\u4e3a10\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u5b50\u4efb\u52a1\u6700\u591a\u8bfb\u53d6\u7684\u884c\u6570\u3002\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e200000\u3002\u9ed8\u8ba4\u662f200000\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u5b50\u4efb\u52a1\u6700\u591a\u8bfb\u53d6\u7684\u5b57\u8282\u6570\u3002\u5355\u4f4d\u662f\u5b57\u8282\uff0c\u8303\u56f4\u662f 100MB \u5230 1GB\u3002\u9ed8\u8ba4\u662f 100MB\u3002")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e09\u4e2a\u53c2\u6570\uff0c\u7528\u4e8e\u63a7\u5236\u4e00\u4e2a\u5b50\u4efb\u52a1\u7684\u6267\u884c\u65f6\u95f4\u548c\u5904\u7406\u91cf\u3002\u5f53\u4efb\u610f\u4e00\u4e2a\u8fbe\u5230\u9608\u503c\uff0c\u5219\u4efb\u52a1\u7ed3\u675f\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"max_batch_interval" = "20",\n"max_batch_rows" = "300000",\n"max_batch_size" = "209715200"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"max_error_number")),(0,r.kt)("p",{parentName:"li"},"\u91c7\u6837\u7a97\u53e3\u5185\uff0c\u5141\u8bb8\u7684\u6700\u5927\u9519\u8bef\u884c\u6570\u3002\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0\u3002\u9ed8\u8ba4\u662f 0\uff0c\u5373\u4e0d\u5141\u8bb8\u6709\u9519\u8bef\u884c\u3002"),(0,r.kt)("p",{parentName:"li"},"\u91c7\u6837\u7a97\u53e3\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"max_batch_rows * 10"),"\u3002\u5373\u5982\u679c\u5728\u91c7\u6837\u7a97\u53e3\u5185\uff0c\u9519\u8bef\u884c\u6570\u5927\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"max_error_number"),"\uff0c\u5219\u4f1a\u5bfc\u81f4\u4f8b\u884c\u4f5c\u4e1a\u88ab\u6682\u505c\uff0c\u9700\u8981\u4eba\u5de5\u4ecb\u5165\u68c0\u67e5\u6570\u636e\u8d28\u91cf\u95ee\u9898\u3002"),(0,r.kt)("p",{parentName:"li"},"\u88ab where \u6761\u4ef6\u8fc7\u6ee4\u6389\u7684\u884c\u4e0d\u7b97\u9519\u8bef\u884c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"strict_mode")),(0,r.kt)("p",{parentName:"li"},"\u662f\u5426\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u4e3a\u5173\u95ed\u3002\u5982\u679c\u5f00\u542f\u540e\uff0c\u975e\u7a7a\u539f\u59cb\u6570\u636e\u7684\u5217\u7c7b\u578b\u53d8\u6362\u5982\u679c\u7ed3\u679c\u4e3a NULL\uff0c\u5219\u4f1a\u88ab\u8fc7\u6ee4\u3002\u6307\u5b9a\u65b9\u5f0f\u4e3a\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'"strict_mode" = "true"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"timezone")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u5bfc\u5165\u4f5c\u4e1a\u6240\u4f7f\u7528\u7684\u65f6\u533a\u3002\u9ed8\u8ba4\u4e3a\u4f7f\u7528 Session \u7684 timezone \u53c2\u6570\u3002\u8be5\u53c2\u6570\u4f1a\u5f71\u54cd\u6240\u6709\u5bfc\u5165\u6d89\u53ca\u7684\u548c\u65f6\u533a\u6709\u5173\u7684\u51fd\u6570\u7ed3\u679c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"format")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u5bfc\u5165\u6570\u636e\u683c\u5f0f\uff0c\u9ed8\u8ba4\u662fcsv\uff0c\u652f\u6301json\u683c\u5f0f\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"jsonpaths")),(0,r.kt)("p",{parentName:"li"},"\u5f53\u5bfc\u5165\u6570\u636e\u683c\u5f0f\u4e3a json \u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 jsonpaths \u6307\u5b9a\u62bd\u53d6 Json \u6570\u636e\u4e2d\u7684\u5b57\u6bb5\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'-H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"strip_outer_array")),(0,r.kt)("p",{parentName:"li"},"\u5f53\u5bfc\u5165\u6570\u636e\u683c\u5f0f\u4e3a json \u65f6\uff0cstrip_outer_array \u4e3a true \u8868\u793a Json \u6570\u636e\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u5c55\u73b0\uff0c\u6570\u636e\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u5c06\u88ab\u89c6\u4e3a\u4e00\u884c\u6570\u636e\u3002\u9ed8\u8ba4\u503c\u662f false\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'-H "strip_outer_array: true"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"json_root")),(0,r.kt)("p",{parentName:"li"},"\u5f53\u5bfc\u5165\u6570\u636e\u683c\u5f0f\u4e3a json \u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 json_root \u6307\u5b9a Json \u6570\u636e\u7684\u6839\u8282\u70b9\u3002Doris \u5c06\u901a\u8fc7 json_root \u62bd\u53d6\u6839\u8282\u70b9\u7684\u5143\u7d20\u8fdb\u884c\u89e3\u6790\u3002\u9ed8\u8ba4\u4e3a\u7a7a\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'-H "json_root: $.RECORDS"'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"FROM data_source [data_source_properties]")),(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u6e90\u7684\u7c7b\u578b\u3002\u5f53\u524d\u652f\u6301\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'FROM KAFKA\n(\n    "key1" = "val1",\n    "key2" = "val2"\n)\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data_source_properties")," \u652f\u6301\u5982\u4e0b\u6570\u636e\u6e90\u5c5e\u6027\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"kafka_broker_list")),(0,r.kt)("p",{parentName:"li"},"Kafka \u7684 broker \u8fde\u63a5\u4fe1\u606f\u3002\u683c\u5f0f\u4e3a ip:host\u3002\u591a\u4e2abroker\u4e4b\u95f4\u4ee5\u9017\u53f7\u5206\u9694\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'"kafka_broker_list" = "broker1:9092,broker2:9092"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"kafka_topic")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u8981\u8ba2\u9605\u7684 Kafka \u7684 topic\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'"kafka_topic" = "my_topic"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"kafka_partitions/kafka_offsets")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u9700\u8981\u8ba2\u9605\u7684 kafka partition\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u6bcf\u4e2a partition \u7684\u8d77\u59cb offset\u3002\u5982\u679c\u6307\u5b9a\u65f6\u95f4\uff0c\u5219\u4f1a\u4ece\u5927\u4e8e\u7b49\u4e8e\u8be5\u65f6\u95f4\u7684\u6700\u8fd1\u4e00\u4e2a offset \u5904\u5f00\u59cb\u6d88\u8d39\u3002"),(0,r.kt)("p",{parentName:"li"},"offset \u53ef\u4ee5\u6307\u5b9a\u4ece\u5927\u4e8e\u7b49\u4e8e 0 \u7684\u5177\u4f53 offset\uff0c\u6216\u8005\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OFFSET_BEGINNING"),": \u4ece\u6709\u6570\u636e\u7684\u4f4d\u7f6e\u5f00\u59cb\u8ba2\u9605\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OFFSET_END"),": \u4ece\u672b\u5c3e\u5f00\u59cb\u8ba2\u9605\u3002"),(0,r.kt)("li",{parentName:"ul"},'\u65f6\u95f4\u683c\u5f0f\uff0c\u5982\uff1a"2021-05-22 11:00:00"')),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"OFFSET_END")," \u5f00\u59cb\u8ba2\u9605 topic \u4e0b\u7684\u6240\u6709 partition\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"kafka_partitions" = "0,1,2,3",\n"kafka_offsets" = "101,0,OFFSET_BEGINNING,OFFSET_END"\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"kafka_partitions" = "0,1,2,3",\n"kafka_offsets" = "2021-05-22 11:00:00,2021-05-22 11:00:00,2021-05-22 11:00:00"\n')),(0,r.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff0c\u65f6\u95f4\u683c\u5f0f\u4e0d\u80fd\u548c OFFSET \u683c\u5f0f\u6df7\u7528\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"property")),(0,r.kt)("p",{parentName:"li"},'\u6307\u5b9a\u81ea\u5b9a\u4e49kafka\u53c2\u6570\u3002\u529f\u80fd\u7b49\u540c\u4e8ekafka shell\u4e2d "--property" \u53c2\u6570\u3002'),(0,r.kt)("p",{parentName:"li"},'\u5f53\u53c2\u6570\u7684 value \u4e3a\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u9700\u8981\u5728 value \u524d\u52a0\u4e0a\u5173\u952e\u8bcd\uff1a"FILE:"\u3002'),(0,r.kt)("p",{parentName:"li"},"\u5173\u4e8e\u5982\u4f55\u521b\u5efa\u6587\u4ef6\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"},"CREATE FILE")," \u547d\u4ee4\u6587\u6863\u3002"),(0,r.kt)("p",{parentName:"li"},"\u66f4\u591a\u652f\u6301\u7684\u81ea\u5b9a\u4e49\u53c2\u6570\uff0c\u8bf7\u53c2\u9605 librdkafka \u7684\u5b98\u65b9 CONFIGURATION \u6587\u6863\u4e2d\uff0cclient \u7aef\u7684\u914d\u7f6e\u9879\u3002\u5982\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"property.client.id" = "12345",\n"property.ssl.ca.location" = "FILE:ca.pem"\n')),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 SSL \u8fde\u63a5 Kafka \u65f6\uff0c\u9700\u8981\u6307\u5b9a\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"property.security.protocol" = "ssl",\n"property.ssl.ca.location" = "FILE:ca.pem",\n"property.ssl.certificate.location" = "FILE:client.pem",\n"property.ssl.key.location" = "FILE:client.key",\n"property.ssl.key.password" = "abcdefg"\n')),(0,r.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"property.security.protocol")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"property.ssl.ca.location")," \u4e3a\u5fc5\u987b\uff0c\u7528\u4e8e\u6307\u660e\u8fde\u63a5\u65b9\u5f0f\u4e3a SSL\uff0c\u4ee5\u53ca CA \u8bc1\u4e66\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c Kafka server \u7aef\u5f00\u542f\u4e86 client \u8ba4\u8bc1\uff0c\u5219\u8fd8\u9700\u8bbe\u7f6e\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"property.ssl.certificate.location"\n"property.ssl.key.location"\n"property.ssl.key.password"\n')),(0,r.kt)("p",{parentName:"li"},"\u5206\u522b\u7528\u4e8e\u6307\u5b9a client \u7684 public key\uff0cprivate key \u4ee5\u53ca private key \u7684\u5bc6\u7801\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9akafka partition\u7684\u9ed8\u8ba4\u8d77\u59cboffset"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka_partitions/kafka_offsets"),"\uff0c\u9ed8\u8ba4\u6d88\u8d39\u6240\u6709\u5206\u533a\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6b64\u65f6\u53ef\u4ee5\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka_default_offsets")," \u6307\u5b9a\u8d77\u59cb offset\u3002\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"OFFSET_END"),"\uff0c\u5373\u4ece\u672b\u5c3e\u5f00\u59cb\u8ba2\u9605\u3002"),(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"property.kafka_default_offsets" = "OFFSET_BEGINNING"\n')))))))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e3a example_db \u7684 example_tbl \u521b\u5efa\u4e00\u4e2a\u540d\u4e3a test1 \u7684 Kafka \u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u3002\u6307\u5b9a\u5217\u5206\u9694\u7b26\u548c group.id \u548c client.id\uff0c\u5e76\u4e14\u81ea\u52a8\u9ed8\u8ba4\u6d88\u8d39\u6240\u6709\u5206\u533a\uff0c\u4e14\u4ece\u6709\u6570\u636e\u7684\u4f4d\u7f6e\uff08OFFSET_BEGINNING\uff09\u5f00\u59cb\u8ba2\u9605")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS TERMINATED BY ",",\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100)\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "property.group.id" = "xxx",\n    "property.client.id" = "xxx",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4e3a example_db \u7684 example_tbl \u521b\u5efa\u4e00\u4e2a\u540d\u4e3a test1 \u7684 Kafka \u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u3002\u5bfc\u5165\u4efb\u52a1\u4e3a\u4e25\u683c\u6a21\u5f0f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\nPRECEDING FILTER k1 = 1,\nWHERE k1 > 100 and k2 like "%doris%"\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2,3",\n    "kafka_offsets" = "101,0,0,200"\n);\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 SSL \u8ba4\u8bc1\u65b9\u5f0f\uff0c\u4ece Kafka \u96c6\u7fa4\u5bfc\u5165\u6570\u636e\u3002\u540c\u65f6\u8bbe\u7f6e client.id \u53c2\u6570\u3002\u5bfc\u5165\u4efb\u52a1\u4e3a\u975e\u4e25\u683c\u6a21\u5f0f\uff0c\u65f6\u533a\u4e3a Africa/Abidjan")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\nWHERE k1 > 100 and k2 like "%doris%"\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false",\n    "timezone" = "Africa/Abidjan"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "property.security.protocol" = "ssl",\n    "property.ssl.ca.location" = "FILE:ca.pem",\n    "property.ssl.certificate.location" = "FILE:client.pem",\n    "property.ssl.key.location" = "FILE:client.key",\n    "property.ssl.key.password" = "abcdefg",\n    "property.client.id" = "my_client_id"\n);\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u5bfc\u5165 Json \u683c\u5f0f\u6570\u636e\u3002\u9ed8\u8ba4\u4f7f\u7528 Json \u4e2d\u7684\u5b57\u6bb5\u540d\u4f5c\u4e3a\u5217\u540d\u6620\u5c04\u3002\u6307\u5b9a\u5bfc\u5165 0,1,2 \u4e09\u4e2a\u5206\u533a\uff0c\u8d77\u59cb offset \u90fd\u4e3a 0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test_json_label_1 ON table1\nCOLUMNS(category,price,author)\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false",\n    "format" = "json"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2",\n    "kafka_offsets" = "0,0,0"\n);\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u5bfc\u5165 Json \u6570\u636e\uff0c\u5e76\u901a\u8fc7 Jsonpaths \u62bd\u53d6\u5b57\u6bb5\uff0c\u5e76\u6307\u5b9a Json \u6587\u6863\u6839\u8282\u70b9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(category, author, price, timestamp, dt=from_unixtime(timestamp, \'%Y%m%d\'))\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false",\n    "format" = "json",\n    "jsonpaths" = "[\\"$.category\\",\\"$.author\\",\\"$.price\\",\\"$.timestamp\\"]",\n    "json_root" = "$.RECORDS"\n    "strip_outer_array" = "true"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2",\n    "kafka_offsets" = "0,0,0"\n);\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u4e3a example_db \u7684 example_tbl \u521b\u5efa\u4e00\u4e2a\u540d\u4e3a test1 \u7684 Kafka \u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u3002\u5e76\u4e14\u4f7f\u7528\u6761\u4ef6\u8fc7\u6ee4\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nWITH MERGE\nCOLUMNS(k1, k2, k3, v1, v2, v3),\nWHERE k1 > 100 and k2 like "%doris%",\nDELETE ON v3 >100\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2,3",\n    "kafka_offsets" = "101,0,0,200"\n);\n')),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"\u5bfc\u5165\u6570\u636e\u5230\u542b\u6709 sequence \u5217\u7684 Unique Key \u6a21\u578b\u8868\u4e2d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test_job ON example_tbl\nCOLUMNS TERMINATED BY ",",\nCOLUMNS(k1,k2,source_sequence,v1,v2),\nORDER BY source_sequence\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "30",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200"\n) FROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2,3",\n    "kafka_offsets" = "101,0,0,200"\n);\n')),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"\u4ece\u6307\u5b9a\u7684\u65f6\u95f4\u70b9\u5f00\u59cb\u6d88\u8d39")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test_job ON example_tbl\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "30",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200"\n) FROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_default_offset" = "2021-05-21 10:00:00"\n);\n')),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE, ROUTINE, LOAD, CREATE LOAD\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("p",null,"\u5173\u4e8e\u6307\u5b9a\u6d88\u8d39\u7684 Partition \u548c Offset"),(0,r.kt)("p",null,"Doris \u652f\u6301\u6307\u5b9a Partition \u548c Offset \u5f00\u59cb\u6d88\u8d39\uff0c\u8fd8\u652f\u6301\u4e86\u6307\u5b9a\u65f6\u95f4\u70b9\u8fdb\u884c\u6d88\u8d39\u7684\u529f\u80fd\u3002\u8fd9\u91cc\u8bf4\u660e\u4e0b\u5bf9\u5e94\u53c2\u6570\u7684\u914d\u7f6e\u5173\u7cfb\u3002"),(0,r.kt)("p",null,"\u6709\u4e09\u4e2a\u76f8\u5173\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kafka_partitions"),'\uff1a\u6307\u5b9a\u5f85\u6d88\u8d39\u7684 partition \u5217\u8868\uff0c\u5982\uff1a"0, 1, 2, 3"\u3002'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kafka_offsets"),"\uff1a\u6307\u5b9a\u6bcf\u4e2a\u5206\u533a\u7684\u8d77\u59cboffset\uff0c\u5fc5\u987b\u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka_partitions"),' \u5217\u8868\u4e2a\u6570\u5bf9\u5e94\u3002\u5982\uff1a"1000, 1000, 2000, 2000"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"property.kafka_default_offset"),"\uff1a\u6307\u5b9a\u5206\u533a\u9ed8\u8ba4\u7684\u8d77\u59cboffset\u3002")),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a\u65f6\uff0c\u8fd9\u4e09\u4e2a\u53c2\u6570\u53ef\u4ee5\u6709\u4ee5\u4e0b\u7ec4\u5408\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7ec4\u5408"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"kafka_partitions")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"kafka_offsets")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"property.kafka_default_offset")),(0,r.kt)("th",{parentName:"tr",align:null},"\u884c\u4e3a"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u4f1a\u81ea\u52a8\u67e5\u627etopic\u5bf9\u5e94\u7684\u6240\u6709\u5206\u533a\u5e76\u4ece OFFSET_END \u5f00\u59cb\u6d88\u8d39")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u4f1a\u81ea\u52a8\u67e5\u627etopic\u5bf9\u5e94\u7684\u6240\u6709\u5206\u533a\u5e76\u4ece default offset \u6307\u5b9a\u7684\u4f4d\u7f6e\u5f00\u59cb\u6d88\u8d39")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u4f1a\u4ece\u6307\u5b9a\u5206\u533a\u7684 OFFSET_END \u5f00\u59cb\u6d88\u8d39")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u4f1a\u4ece\u6307\u5b9a\u5206\u533a\u7684\u6307\u5b9aoffset \u5904\u5f00\u59cb\u6d88\u8d39")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u4f1a\u4ece\u6307\u5b9a\u5206\u533a\uff0cdefault offset \u6307\u5b9a\u7684\u4f4d\u7f6e\u5f00\u59cb\u6d88\u8d39")))))}s.isMDXComponent=!0}}]);