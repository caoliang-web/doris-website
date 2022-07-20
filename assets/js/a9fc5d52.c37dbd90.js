"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[46156],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=l,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94839:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const o={title:"Rollup",language:"en"},r=void 0,i={unversionedId:"administrator-guide/alter-table/alter-table-rollup",id:"version-1.0/administrator-guide/alter-table/alter-table-rollup",title:"Rollup",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/administrator-guide/alter-table/alter-table-rollup.md",sourceDirName:"administrator-guide/alter-table",slug:"/administrator-guide/alter-table/alter-table-rollup",permalink:"/docs/1.0/administrator-guide/alter-table/alter-table-rollup",draft:!1,tags:[],version:"1.0",frontMatter:{title:"Rollup",language:"en"},sidebar:"docs",previous:{title:"Replace Table",permalink:"/docs/1.0/administrator-guide/alter-table/alter-table-replace-table"},next:{title:"Schema Change",permalink:"/docs/1.0/administrator-guide/alter-table/alter-table-schema-change"}},s={},u=[{value:"Glossary",id:"glossary",level:2},{value:"Basic Principles",id:"basic-principles",level:2},{value:"Create Job",id:"create-job",level:2},{value:"View Job",id:"view-job",level:2},{value:"Cancel Job",id:"cancel-job",level:2},{value:"Notice",id:"notice",level:2},{value:"FAQ",id:"faq",level:2},{value:"Configurations",id:"configurations",level:2},{value:"FE Configurations",id:"fe-configurations",level:3},{value:"BE Configurations",id:"be-configurations",level:3}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rollup"},"Rollup"),(0,l.kt)("p",null,"Users can speed up queries by creating rollup tables. For the concept and usage of Rollup, please refer to ",(0,l.kt)("a",{parentName:"p",href:"../../getting-started/data-model-rollup_EN.md"},"Data\nModel, ROLLUP and Prefix Index")," and\n",(0,l.kt)("a",{parentName:"p",href:"../../getting-started/hit-the-rollup_EN.md"},"Rollup and query"),"."),(0,l.kt)("p",null,"This document focuses on how to create a Rollup job, as well as some considerations and frequently asked questions about creating a Rollup."),(0,l.kt)("h2",{id:"glossary"},"Glossary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Base Table: When each table is created, it corresponds to a base table. The base table stores the complete data of this table. Rollups are usually created based on the data in the base table (and can also be created from other rollups)."),(0,l.kt)("li",{parentName:"ul"},"Index: Materialized index. Rollup or Base Table are both called materialized indexes."),(0,l.kt)("li",{parentName:"ul"},"Transaction: Each import task is a transaction, and each transaction has a unique incrementing Transaction ID.")),(0,l.kt)("h2",{id:"basic-principles"},"Basic Principles"),(0,l.kt)("p",null,"The basic process of creating a Rollup is to generate a new Rollup data containing the specified column from the data in the Base table. Among them, two parts of data conversion are needed. One is the conversion of existing historical data, and the other is the conversion of newly arrived imported data during Rollup execution."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+----------+\n| Load Job |\n+----+-----+\n     |\n     | Load job generates both base and rollup index data\n     |\n     |      +------------------+ +---------------+\n     |      | Base Index       | | Base Index    |\n     +------\x3e New Incoming Data| | History Data  |\n     |      +------------------+ +------+--------+\n     |                                  |\n     |                                  | Convert history data\n     |                                  |\n     |      +------------------+ +------v--------+\n     |      | Rollup Index     | | Rollup Index  |\n     +------\x3e New Incoming Data| | History Data  |\n            +------------------+ +---------------+\n")),(0,l.kt)("p",null,"Before starting the conversion of historical data, Doris will obtain a latest transaction ID. And wait for all import transactions before this Transaction ID to complete. This Transaction ID becomes a watershed. This means that Doris guarantees that all import tasks after the watershed will generate data for the Rollup Index at the same time. In this way, after the historical data conversion is completed, the data of the Rollup and Base tables can be guaranteed to be flush."),(0,l.kt)("h2",{id:"create-job"},"Create Job"),(0,l.kt)("p",null,"The specific syntax for creating a Rollup can be found in the description of the Rollup section in the help ",(0,l.kt)("inlineCode",{parentName:"p"},"HELP ALTER TABLE"),"."),(0,l.kt)("p",null,"The creation of Rollup is an asynchronous process. After the job is submitted successfully, the user needs to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW ALTER TABLE ROLLUP")," command to view the progress of the job."),(0,l.kt)("h2",{id:"view-job"},"View Job"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SHOW ALTER TABLE ROLLUP")," You can view rollup jobs that are currently executing or completed. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"          JobId: 20037\n      TableName: tbl1\n     CreateTime: 2019-08-06 15:38:49\n   FinishedTime: N/A\n  BaseIndexName: tbl1\nRollupIndexName: r1\n       RollupId: 20038\n  TransactionId: 10034\n          State: PENDING\n            Msg:\n       Progress: N/A\n        Timeout: 86400\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JobId: A unique ID for each Rollup job."),(0,l.kt)("li",{parentName:"ul"},"TableName: The table name of the base table corresponding to Rollup."),(0,l.kt)("li",{parentName:"ul"},"CreateTime: Job creation time."),(0,l.kt)("li",{parentName:"ul"},'FinishedTime: The end time of the job. If it is not finished, "N / A" is displayed.'),(0,l.kt)("li",{parentName:"ul"},"BaseIndexName: The name of the source Index corresponding to Rollup."),(0,l.kt)("li",{parentName:"ul"},"RollupIndexName: The name of the Rollup."),(0,l.kt)("li",{parentName:"ul"},"RollupId: The unique ID of the Rollup."),(0,l.kt)("li",{parentName:"ul"},"TransactionId: the watershed transaction ID of the conversion history data."),(0,l.kt)("li",{parentName:"ul"},"State: The phase of the operation.\n\xa0\xa0\xa0\xa0 ",(0,l.kt)("em",{parentName:"li"}," PENDING: The job is waiting in the queue to be scheduled.\n\xa0\xa0\xa0\xa0 ")," WAITING_TXN: Wait for the import task before the watershed transaction ID to complete.\n\xa0\xa0\xa0\xa0 ",(0,l.kt)("em",{parentName:"li"}," RUNNING: Historical data conversion.\n\xa0\xa0\xa0\xa0 ")," FINISHED: The operation was successful.\n\xa0\xa0\xa0\xa0 * CANCELLED: The job failed."),(0,l.kt)("li",{parentName:"ul"},"Msg: If the job fails, a failure message is displayed here."),(0,l.kt)("li",{parentName:"ul"},"Progress: operation progress. Progress is displayed only in the RUNNING state. Progress is displayed in M / N. Where N is the total number of copies of Rollup. M is the number of copies of historical data conversion completed."),(0,l.kt)("li",{parentName:"ul"},"Timeout: Job timeout time. Unit of second.")),(0,l.kt)("h2",{id:"cancel-job"},"Cancel Job"),(0,l.kt)("p",null,"In the case that the job status is not FINISHED or CANCELLED, you can cancel the Rollup job with the following command:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CANCEL ALTER TABLE ROLLUP FROM tbl_name;")),(0,l.kt)("h2",{id:"notice"},"Notice"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A table can have only one Rollup job running at a time. And only one rollup can be created in a job.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Rollup operations do not block import and query operations.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If a DELETE operation has a Key column in a where condition that does not exist in a Rollup, the DELETE is not allowed."))),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0If a Key column does not exist in a Rollup, the DELETE operation cannot delete data from the Rollup, so the data consistency between the Rollup table and the Base table cannot be guaranteed."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rollup columns must exist in the Base table.")),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0Rollup columns are always a subset of the Base table columns. Columns that do not exist in the Base table cannot appear."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If a rollup contains columns of the REPLACE aggregation type, the rollup must contain all the key columns.")),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0Assume the structure of the Base table is as follows:"),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"`(k1 INT, k2 INT, v1 INT REPLACE, v2 INT SUM)`")),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0If you need to create a Rollup that contains ",(0,l.kt)("inlineCode",{parentName:"p"},"v1")," columns, you must include the",(0,l.kt)("inlineCode",{parentName:"p"}," k1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"k2")," columns. Otherwise, the system cannot determine the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"v1")," listed in Rollup."),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0Note that all Value columns in the Unique data model table are of the REPLACE aggregation type."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rollup of the DUPLICATE data model table, you can specify the DUPLICATE KEY of the rollup.")),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0The DUPLICATE KEY in the DUPLICATE data model table is actually sorted. Rollup can specify its own sort order, but the sort order must be a prefix of the Rollup column order. If not specified, the system will check if the Rollup contains all sort columns of the Base table, and if it does not, it will report an error. For example:"),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0Base table structure: ",(0,l.kt)("inlineCode",{parentName:"p"},"(k1 INT, k2 INT, k3 INT) DUPLICATE KEY (k1, k2)")),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0Rollup can be: ",(0,l.kt)("inlineCode",{parentName:"p"},"(k2 INT, k1 INT) DUPLICATE KEY (k2)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rollup does not need to include partitioned or bucket columns for the Base table.")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"How many rollups can a table create")),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0There is theoretically no limit to the number of rollups a table can create, but too many rollups can affect import performance. Because when importing, data will be generated for all rollups at the same time. At the same time, Rollup will take up physical storage space. Usually the number of rollups for a table is less than 10."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rollup creation speed")),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0Rollup creation speed is currently estimated at about 10MB / s based on the worst efficiency. To be conservative, users can set the timeout for jobs based on this rate."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Submitting job error ",(0,l.kt)("inlineCode",{parentName:"li"},"Table xxx is not stable. ..."))),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0Rollup can start only when the table data is complete and unbalanced. If some data shard copies of the table are incomplete, or if some copies are undergoing an equalization operation, the submission is rejected."),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0Whether the data shard copy is complete can be checked with the following command:"),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0",(0,l.kt)("inlineCode",{parentName:"p"},'ADMIN SHOW REPLICA STATUS FROM tbl WHERE STATUS! =" OK ";')),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0If a result is returned, there is a problem with the copy. These problems are usually fixed automatically by the system. You can also use the following commands to repair this table first:"),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"ADMIN REPAIR TABLE tbl1; ")),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0You can check if there are running balancing tasks with the following command:"),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0",(0,l.kt)("inlineCode",{parentName:"p"},'SHOW PROC" / cluster_balance / pending_tablets ";')),(0,l.kt)("p",null,"\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0You can wait for the balancing task to complete, or temporarily disable the balancing operation with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'```ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");```\n')),(0,l.kt)("h2",{id:"configurations"},"Configurations"),(0,l.kt)("h3",{id:"fe-configurations"},"FE Configurations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alter_table_timeout_second"),": The default timeout for the job is 86400 seconds.")),(0,l.kt)("h3",{id:"be-configurations"},"BE Configurations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alter_tablet_worker_count"),": Number of threads used to perform historical data conversion on the BE side. The default is 3. If you want to speed up the rollup job, you can increase this parameter appropriately and restart the BE. But too many conversion threads can cause increased IO pressure and affect other operations. This thread is shared with the Schema Change job.")))}c.isMDXComponent=!0}}]);