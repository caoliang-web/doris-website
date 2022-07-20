"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[64257],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=c(t),m=r,k=s["".concat(i,".").concat(m)]||s[m]||p[m]||l;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=s;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},31618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const l={title:"sequence\u5217",language:"zh-CN"},o=void 0,u={unversionedId:"administrator-guide/load-data/sequence-column-manual",id:"version-1.0/administrator-guide/load-data/sequence-column-manual",title:"sequence\u5217",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/administrator-guide/load-data/sequence-column-manual.md",sourceDirName:"administrator-guide/load-data",slug:"/administrator-guide/load-data/sequence-column-manual",permalink:"/zh-CN/docs/1.0/administrator-guide/load-data/sequence-column-manual",draft:!1,tags:[],version:"1.0",frontMatter:{title:"sequence\u5217",language:"zh-CN"},sidebar:"docs",previous:{title:"Routine Load",permalink:"/zh-CN/docs/1.0/administrator-guide/load-data/routine-load-manual"},next:{title:"Spark Load",permalink:"/zh-CN/docs/1.0/administrator-guide/load-data/spark-load-manual"}},i={},c=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u5efa\u8868",id:"\u5efa\u8868",level:3},{value:"\u5bfc\u5165",id:"\u5bfc\u5165",level:3},{value:"\u8bfb\u53d6",id:"\u8bfb\u53d6",level:3},{value:"Cumulative Compaction",id:"cumulative-compaction",level:3},{value:"Base Compaction",id:"base-compaction",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u5efa\u8868",id:"\u5efa\u8868-1",level:4},{value:"stream load",id:"stream-load",level:4},{value:"broker load",id:"broker-load",level:4},{value:"routine load",id:"routine-load",level:4},{value:"\u542f\u7528sequence column\u652f\u6301",id:"\u542f\u7528sequence-column\u652f\u6301",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sequence\u5217"},"sequence\u5217"),(0,r.kt)("p",null,"sequence\u5217\u76ee\u524d\u53ea\u652f\u6301Uniq\u6a21\u578b\uff0cUniq\u6a21\u578b\u4e3b\u8981\u9488\u5bf9\u9700\u8981\u552f\u4e00\u4e3b\u952e\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u4e3b\u952e\u552f\u4e00\u6027\u7ea6\u675f\uff0c\u4f46\u662f\u7531\u4e8e\u4f7f\u7528REPLACE\u805a\u5408\u65b9\u5f0f\uff0c\u5728\u540c\u4e00\u6279\u6b21\u4e2d\u5bfc\u5165\u7684\u6570\u636e\uff0c\u66ff\u6362\u987a\u5e8f\u4e0d\u505a\u4fdd\u8bc1\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.0/getting-started/data-model-rollup"},"\u8fd9\u91cc"),"\u3002\u66ff\u6362\u987a\u5e8f\u65e0\u6cd5\u4fdd\u8bc1\u5219\u65e0\u6cd5\u786e\u5b9a\u6700\u7ec8\u5bfc\u5165\u5230\u8868\u4e2d\u7684\u5177\u4f53\u6570\u636e\uff0c\u5b58\u5728\u4e86\u4e0d\u786e\u5b9a\u6027\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cDoris\u652f\u6301\u4e86sequence\u5217\uff0c\u901a\u8fc7\u7528\u6237\u5728\u5bfc\u5165\u65f6\u6307\u5b9asequence\u5217\uff0c\u76f8\u540ckey\u5217\u4e0b\uff0cREPLACE\u805a\u5408\u7c7b\u578b\u7684\u5217\u5c06\u6309\u7167sequence\u5217\u7684\u503c\u8fdb\u884c\u66ff\u6362\uff0c\u8f83\u5927\u503c\u53ef\u4ee5\u66ff\u6362\u8f83\u5c0f\u503c\uff0c\u53cd\u4e4b\u5219\u65e0\u6cd5\u66ff\u6362\u3002\u8be5\u65b9\u6cd5\u5c06\u987a\u5e8f\u7684\u786e\u5b9a\u4ea4\u7ed9\u4e86\u7528\u6237\uff0c\u7531\u7528\u6237\u63a7\u5236\u66ff\u6362\u987a\u5e8f\u3002"),(0,r.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,r.kt)("p",null,"\u901a\u8fc7\u589e\u52a0\u4e00\u4e2a\u9690\u85cf\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__"),"\u5b9e\u73b0\uff0c\u8be5\u5217\u7684\u7c7b\u578b\u7531\u7528\u6237\u5728\u5efa\u8868\u65f6\u6307\u5b9a\uff0c\u5728\u5bfc\u5165\u65f6\u786e\u5b9a\u8be5\u5217\u5177\u4f53\u503c\uff0c\u5e76\u4f9d\u636e\u8be5\u503c\u5bf9REPLACE\u5217\u8fdb\u884c\u66ff\u6362\u3002"),(0,r.kt)("h3",{id:"\u5efa\u8868"},"\u5efa\u8868"),(0,r.kt)("p",null,"\u521b\u5efaUniq\u8868\u65f6\uff0c\u5c06\u6309\u7167\u7528\u6237\u6307\u5b9a\u7c7b\u578b\u81ea\u52a8\u6dfb\u52a0\u4e00\u4e2a\u9690\u85cf\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__")),(0,r.kt)("h3",{id:"\u5bfc\u5165"},"\u5bfc\u5165"),(0,r.kt)("p",null,"\u5bfc\u5165\u65f6\uff0cfe\u5728\u89e3\u6790\u7684\u8fc7\u7a0b\u4e2d\u5c06\u9690\u85cf\u5217\u7684\u503c\u8bbe\u7f6e\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"order by")," \u8868\u8fbe\u5f0f\u7684\u503c(broker load\u548croutine load)\uff0c\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"function_column.sequence_col"),"\u8868\u8fbe\u5f0f\u7684\u503c(stream load), value\u5217\u5c06\u6309\u7167\u8be5\u503c\u8fdb\u884c\u66ff\u6362\u3002\u9690\u85cf\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__"),"\u7684\u503c\u65e2\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u6570\u636e\u6e90\u4e2d\u4e00\u5217\uff0c\u4e5f\u53ef\u4ee5\u662f\u8868\u7ed3\u6784\u4e2d\u7684\u4e00\u5217\u3002"),(0,r.kt)("h3",{id:"\u8bfb\u53d6"},"\u8bfb\u53d6"),(0,r.kt)("p",null,"\u8bf7\u6c42\u5305\u542bvalue\u5217\u65f6\u9700\u8981\u9700\u8981\u989d\u5916\u8bfb\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__"),"\u5217\uff0c\u8be5\u5217\u7528\u4e8e\u5728\u76f8\u540ckey\u5217\u4e0b\uff0cREPLACE\u805a\u5408\u51fd\u6570\u66ff\u6362\u987a\u5e8f\u7684\u4f9d\u636e\uff0c\u8f83\u5927\u503c\u53ef\u4ee5\u66ff\u6362\u8f83\u5c0f\u503c\uff0c\u53cd\u4e4b\u5219\u4e0d\u80fd\u66ff\u6362\u3002"),(0,r.kt)("h3",{id:"cumulative-compaction"},"Cumulative Compaction"),(0,r.kt)("p",null,"Cumulative Compaction \u65f6\u548c\u8bfb\u53d6\u8fc7\u7a0b\u539f\u7406\u76f8\u540c"),(0,r.kt)("h3",{id:"base-compaction"},"Base Compaction"),(0,r.kt)("p",null,"Base Compaction \u65f6\u8bfb\u53d6\u8fc7\u7a0b\u539f\u7406\u76f8\u540c"),(0,r.kt)("h3",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,r.kt)("p",null,"\u5efa\u8868\u65f6\u8bed\u6cd5\u65b9\u9762\u5728property\u4e2d\u589e\u52a0\u4e86\u4e00\u4e2a\u5c5e\u6027\uff0c\u7528\u6765\u6807\u8bc6",(0,r.kt)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__"),"\u7684\u7c7b\u578b\n\u5bfc\u5165\u7684\u8bed\u6cd5\u8bbe\u8ba1\u65b9\u9762\u4e3b\u8981\u662f\u589e\u52a0\u4e00\u4e2a\u4ecesequence\u5217\u7684\u5230\u5176\u4ed6column\u7684\u6620\u5c04\uff0c\u5404\u4e2a\u5bfc\u5165\u65b9\u5f0f\u8bbe\u7f6e\u7684\u5c06\u5728\u4e0b\u9762\u4ecb\u7ecd"),(0,r.kt)("h4",{id:"\u5efa\u8868-1"},"\u5efa\u8868"),(0,r.kt)("p",null,"\u521b\u5efaUniq\u8868\u65f6\uff0c\u53ef\u4ee5\u6307\u5b9asequence\u5217\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PROPERTIES (\n    \"function_column.sequence_type\" = 'Date',\n);\n")),(0,r.kt)("p",null,"sequence_type\u7528\u6765\u6307\u5b9asequence\u5217\u7684\u7c7b\u578b\uff0c\u53ef\u4ee5\u4e3a\u6574\u578b\u548c\u65f6\u95f4\u7c7b\u578b"),(0,r.kt)("h4",{id:"stream-load"},"stream load"),(0,r.kt)("p",null,"stream load \u7684\u5199\u6cd5\u662f\u5728header\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"function_column.sequence_col"),"\u5b57\u6bb5\u6dfb\u52a0\u9690\u85cf\u5217\u5bf9\u5e94\u7684source_sequence\u7684\u6620\u5c04\uff0c \u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "columns: k1,k2,source_sequence,v1,v2" -H "function_column.sequence_col: source_sequence" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')),(0,r.kt)("h4",{id:"broker-load"},"broker load"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u5904\u8bbe\u7f6e\u9690\u85cf\u5217\u6620\u5c04\u7684source_sequence\u5b57\u6bb5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'LOAD LABEL db1.label1\n(\n    DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n    INTO TABLE `tbl1`\n    COLUMNS TERMINATED BY ","\n    (k1,k2,source_sequence,v1,v2)\n    ORDER BY source_sequence\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n\n')),(0,r.kt)("h4",{id:"routine-load"},"routine load"),(0,r.kt)("p",null,"\u6620\u5c04\u65b9\u5f0f\u540c\u4e0a\uff0c\u793a\u4f8b\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'   CREATE ROUTINE LOAD example_db.test1 ON example_tbl \n    [WITH MERGE|APPEND|DELETE]\n    COLUMNS(k1, k2, source_sequence, v1, v2),\n    WHERE k1 > 100 and k2 like "%doris%"\n    [ORDER BY source_sequence]\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n')),(0,r.kt)("h2",{id:"\u542f\u7528sequence-column\u652f\u6301"},"\u542f\u7528sequence column\u652f\u6301"),(0,r.kt)("p",null,"\u5728\u65b0\u5efa\u8868\u65f6\u5982\u679c\u8bbe\u7f6e\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"function_column.sequence_type")," \uff0c\u5219\u65b0\u5efa\u8868\u5c06\u652f\u6301sequence column\u3002\n\u5bf9\u4e8e\u4e00\u4e2a\u4e0d\u652f\u6301sequence column\u7684\u8868\uff0c\u5982\u679c\u60f3\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u8bed\u53e5\uff1a\n",(0,r.kt)("inlineCode",{parentName:"p"},'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date")')," \u6765\u542f\u7528\u3002\n\u5982\u679c\u786e\u5b9a\u4e00\u4e2a\u8868\u662f\u5426\u652f\u6301sequence column\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4e00\u4e2asession variable\u6765\u663e\u793a\u9690\u85cf\u5217 ",(0,r.kt)("inlineCode",{parentName:"p"},"SET show_hidden_columns=true")," \uff0c\u4e4b\u540e\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"desc tablename"),"\uff0c\u5982\u679c\u8f93\u51fa\u4e2d\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__")," \u5217\u5219\u652f\u6301\uff0c\u5982\u679c\u6ca1\u6709\u5219\u4e0d\u652f\u6301"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("p",null,"\u4e0b\u9762\u4ee5stream load \u4e3a\u4f8b \u5c55\u793a\u4e0b\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u652f\u6301sequence column\u7684\u8868")),(0,r.kt)("p",null,"\u8868\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MySQL > desc test_table;\n+-------------+--------------+------+-------+---------+---------+\n| Field       | Type         | Null | Key   | Default | Extra   |\n+-------------+--------------+------+-------+---------+---------+\n| user_id     | BIGINT       | No   | true  | NULL    |         |\n| date        | DATE         | No   | true  | NULL    |         |\n| group_id    | BIGINT       | No   | true  | NULL    |         |\n| modify_date | DATE         | No   | false | NULL    | REPLACE |\n| keyword     | VARCHAR(128) | No   | false | NULL    | REPLACE |\n+-------------+--------------+------+-------+---------+---------+\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6b63\u5e38\u5bfc\u5165\u6570\u636e\uff1a")),(0,r.kt)("p",null,"\u5bfc\u5165\u5982\u4e0b\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-02-22      b\n1       2020-02-22      1       2020-03-05      c\n1       2020-02-22      1       2020-02-26      d\n1       2020-02-22      1       2020-02-22      e\n1       2020-02-22      1       2020-02-22      b\n")),(0,r.kt)("p",null,"\u6b64\u5904\u4ee5stream load\u4e3a\u4f8b\uff0c \u5c06sequence column\u6620\u5c04\u4e3amodify_date\u5217"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -H "function_column.sequence_col: modify_date" -T testData http://host:port/api/test/test_table/_stream_load\n')),(0,r.kt)("p",null,"\u7ed3\u679c\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MySQL > select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u6b21\u5bfc\u5165\u4e2d\uff0c\u56e0sequence column\u7684\u503c\uff08\u4e5f\u5c31\u662fmodify_date\u4e2d\u7684\u503c\uff09\u4e2d'2020-03-05'\u4e3a\u6700\u5927\u503c\uff0c\u6240\u4ee5keyword\u5217\u4e2d\u6700\u7ec8\u4fdd\u7559\u4e86c\u3002"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u66ff\u6362\u987a\u5e8f\u7684\u4fdd\u8bc1")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u6b65\u9aa4\u5b8c\u6210\u540e\uff0c\u63a5\u7740\u5bfc\u5165\u5982\u4e0b\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-02-23      b\n")),(0,r.kt)("p",null,"\u67e5\u8be2\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n")),(0,r.kt)("p",null,"\u7531\u4e8e\u65b0\u5bfc\u5165\u7684\u6570\u636e\u7684sequence column\u90fd\u5c0f\u4e8e\u8868\u4e2d\u5df2\u6709\u7684\u503c\uff0c\u65e0\u6cd5\u66ff\u6362\n\u518d\u5c1d\u8bd5\u5bfc\u5165\u5982\u4e0b\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-03-23      w\n")),(0,r.kt)("p",null,"\u67e5\u8be2\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-23  | w       |\n+---------+------------+----------+-------------+---------+\n")),(0,r.kt)("p",null,"\u6b64\u65f6\u5c31\u53ef\u4ee5\u66ff\u6362\u8868\u4e2d\u539f\u6709\u7684\u6570\u636e"))}p.isMDXComponent=!0}}]);