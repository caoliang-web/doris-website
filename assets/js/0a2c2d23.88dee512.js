"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[18183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},59700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"EXPORT",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",title:"EXPORT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",draft:!1,tags:[],version:"current",frontMatter:{title:"EXPORT",language:"en"},sidebar:"docs",previous:{title:"SELECT",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT"},next:{title:"OUTFILE",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE"}},s={},p=[{value:"EXPORT",id:"export",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"export"},"EXPORT"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"EXPORT"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to export the data of the specified table to the specified location."),(0,r.kt)("p",null,"This is an asynchronous operation that returns if the task is submitted successfully. After execution, you can use the ",(0,r.kt)("a",{parentName:"p",href:"../../Show-Statements/SHOW-EXPORT"},"SHOW EXPORT")," command to view the progress."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPORT TABLE table_name\n[PARTITION (p1[,p2])]\nTO export_path\n[opt_properties]\nWITH BROKER\n[broker_properties];\n")),(0,r.kt)("p",null,"illustrate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"table_name")),(0,r.kt)("p",{parentName:"li"},"The table name of the table currently being exported. Only the export of Doris local table data is supported.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"partition")),(0,r.kt)("p",{parentName:"li"},"It is possible to export only some specified partitions of the specified table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"export_path")),(0,r.kt)("p",{parentName:"li"},"The exported path must be a directory.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"opt_properties")),(0,r.kt)("p",{parentName:"li"},"Used to specify some export parameters."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'[PROPERTIES ("key"="value", ...)]\n')),(0,r.kt)("p",{parentName:"li"},"The following parameters can be specified:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"column_separator"),": Specifies the exported column separator, default is \\t. Only single byte is supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"line_delimiter"),": Specifies the line delimiter for export, the default is \\n. Only single byte is supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exec_mem_limit"),": Export the upper limit of the memory usage of a single BE node, the default is 2GB, and the unit is bytes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout"),": The timeout period of the import job, the default is 2 hours, the unit is seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tablet_num_per_task"),": The maximum number of tablets each subtask can allocate to scan."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"WITH BROKER")),(0,r.kt)("p",{parentName:"li"},"The export function needs to write data to the remote storage through the Broker process. Here you need to define the relevant connection information for the broker to use."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'WITH BROKER hdfs|s3 ("key"="value"[,...])\n')))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the export is to Amazon S3, you need to provide the following properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fs.s3a.access.key: AmazonS3 access key\nfs.s3a.secret.key: AmazonS3 secret key\nfs.s3a.endpoint: AmazonS3 endpoint\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you use the S3 protocol to directly connect to the remote storage, you need to specify the following properties"),(0,r.kt)("p",{parentName:"li"},'(\n"AWS_ENDPOINT" = "",\n"AWS_ACCESS_KEY" = "",\n"AWS_SECRET_KEY"="",\n"AWS_REGION" = ""\n)'))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Export all data in the test table to hdfs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "hdfs://hdfs_host:port/a/b/c" \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Export partitions p1, p2 in the testTbl table to hdfs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl PARTITION (p1,p2) TO "hdfs://hdfs_host:port/a/b/c" \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},'Export all data in the testTbl table to hdfs, with "," as the column separator, and specify the label')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" \nPROPERTIES ("label" = "mylabel", "column_separator"=",") \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Export the row with k1 = 1 in the testTbl table to hdfs.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl WHERE k1=1 TO "hdfs://hdfs_host:port/a/b/c" \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Export all data in the testTbl table to local.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl TO "file:///home/data/a";\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},'Export all data in the testTbl table to hdfs with invisible character "\\x07" as column or row separator.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) \nWITH BROKER "broker_name" \n(\n  "username"="xxx", \n  "password"="yyy"\n)\n')),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Export the k1, v1 columns of the testTbl table to the local.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl TO "file:///home/data/a" PROPERTIES ("columns" = "k1,v1");\n')),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},'Export all data in the testTbl table to s3 with invisible characters "\\x07" as column or row separators.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) WITH s3 (\n  "AWS_ENDPOINT" = "xxxxx",\n  "AWS_ACCESS_KEY" = "xxxxx",\n  "AWS_SECRET_KEY"="xxxx",\n  "AWS_REGION" = "xxxxx"\n)\n')),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"EXPORT\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Splitting of subtasks"),(0,r.kt)("p",{parentName:"li"},"An Export job will be split into multiple subtasks (execution plans) to execute. How many query plans need to be executed depends on how many tablets there are in total, and how many tablets can be allocated to a query plan."),(0,r.kt)("p",{parentName:"li"},"Because multiple query plans are executed serially, the execution time of the job can be reduced if one query plan handles more shards."),(0,r.kt)("p",{parentName:"li"},"However, if there is an error in the query plan (such as the failure of the RPC calling the broker, the jitter in the remote storage, etc.), too many Tablets will lead to a higher retry cost of a query plan."),(0,r.kt)("p",{parentName:"li"},"Therefore, it is necessary to reasonably arrange the number of query plans and the number of shards that each query plan needs to scan, so as to balance the execution time and the execution success rate."),(0,r.kt)("p",{parentName:"li"},"It is generally recommended that the amount of data scanned by a query plan is within 3-5 GB."),(0,r.kt)("h4",{parentName:"li",id:"memory-limit"},"memory limit"),(0,r.kt)("p",{parentName:"li"},"Usually, the query plan of an Export job has only two parts of ",(0,r.kt)("inlineCode",{parentName:"p"},"scan-export"),", which does not involve calculation logic that requires too much memory. So usually the default memory limit of 2GB suffices."),(0,r.kt)("p",{parentName:"li"},"However, in some scenarios, such as a query plan, too many Tablets need to be scanned on the same BE, or too many Tablet data versions may cause insufficient memory. At this point, you need to set a larger memory, such as 4GB, 8GB, etc., through the ",(0,r.kt)("inlineCode",{parentName:"p"},"exec_mem_limit")," parameter."),(0,r.kt)("h4",{parentName:"li",id:"precautions"},"Precautions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Exporting a large amount of data at one time is not recommended. The maximum recommended export data volume for an Export job is several tens of GB. An overly large export results in more junk files and higher retry costs. If the amount of table data is too large, it is recommended to export by partition."),(0,r.kt)("li",{parentName:"ul"},"If the Export job fails, the ",(0,r.kt)("inlineCode",{parentName:"li"},"__doris_export_tmp_xxx")," temporary directory generated in the remote storage and the generated files will not be deleted, and the user needs to delete it manually."),(0,r.kt)("li",{parentName:"ul"},"If the Export job runs successfully, the ",(0,r.kt)("inlineCode",{parentName:"li"},"__doris_export_tmp_xxx")," directory generated in the remote storage may be preserved or cleared according to the file system semantics of the remote storage. For example, in S3 object storage, after the last file in a directory is removed by the rename operation, the directory will also be deleted. If the directory is not cleared, the user can clear it manually."),(0,r.kt)("li",{parentName:"ul"},"The Export job only exports the data of the Base table, not the data of the materialized view."),(0,r.kt)("li",{parentName:"ul"},"The export job scans data and occupies IO resources, which may affect the query latency of the system."),(0,r.kt)("li",{parentName:"ul"},"The maximum number of export jobs running simultaneously in a cluster is 5. Only jobs submitted after that will be queued.")))))}u.isMDXComponent=!0}}]);