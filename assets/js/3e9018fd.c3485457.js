"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[95162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=m(n),u=i,h=c["".concat(l,".").concat(u)]||c[u]||s[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const r={title:"Dynamic Partition",language:"en"},o=void 0,p={unversionedId:"advanced/partition/dynamic-partition",id:"advanced/partition/dynamic-partition",title:"Dynamic Partition",description:"\x3c!--",source:"@site/docs/advanced/partition/dynamic-partition.md",sourceDirName:"advanced/partition",slug:"/advanced/partition/dynamic-partition",permalink:"/docs/advanced/partition/dynamic-partition",draft:!1,tags:[],version:"current",frontMatter:{title:"Dynamic Partition",language:"en"},sidebar:"docs",previous:{title:"Replace Table",permalink:"/docs/advanced/alter-table/replace-table"},next:{title:"Temporary partition",permalink:"/docs/advanced/partition/table-temp-partition"}},l={},m=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Principle",id:"principle",level:2},{value:"Usage",id:"usage",level:2},{value:"Establishment of tables",id:"establishment-of-tables",level:3},{value:"Dynamic partition rule parameters",id:"dynamic-partition-rule-parameters",level:3},{value:"Create History Partition Rules",id:"create-history-partition-rules",level:4},{value:"Notice",id:"notice",level:3},{value:"Example",id:"example",level:3},{value:"Modify Dynamic Partition Properties",id:"modify-dynamic-partition-properties",level:3},{value:"Check Dynamic Partition Table Scheduling Status",id:"check-dynamic-partition-table-scheduling-status",level:3},{value:"Advanced Operation",id:"advanced-operation",level:2},{value:"FE Configuration Item",id:"fe-configuration-item",level:3},{value:"Converting dynamic and manual partition tables to each other",id:"converting-dynamic-and-manual-partition-tables-to-each-other",level:3},{value:"Converting Manual Partitioning to Dynamic Partitioning",id:"converting-manual-partitioning-to-dynamic-partitioning",level:4},{value:"Converting Dynamic Partitioning to Manual Partitioning",id:"converting-dynamic-partitioning-to-manual-partitioning",level:4},{value:"Common problem",id:"common-problem",level:2},{value:"More Help",id:"more-help",level:2}],d={toc:m};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dynamic-partition"},"Dynamic Partition"),(0,i.kt)("p",null,"Dynamic partition is a new feature introduced in Doris version 0.12. It's designed to manage partition's Time-to-Life (TTL), reducing the burden on users."),(0,i.kt)("p",null,"At present, the functions of dynamically adding partitions and dynamically deleting partitions are realized."),(0,i.kt)("p",null,"Dynamic partitioning is only supported for Range partitions."),(0,i.kt)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access."),(0,i.kt)("li",{parentName:"ul"},"BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")),(0,i.kt)("h2",{id:"principle"},"Principle"),(0,i.kt)("p",null,"In some usage scenarios, the user will partition the table according to the day and perform routine tasks regularly every day. At this time, the user needs to manually manage the partition. Otherwise, the data load may fail because the user does not create a partition. This brings additional maintenance costs to the user."),(0,i.kt)("p",null,"Through the dynamic partitioning feature, users can set the rules of dynamic partitioning when building tables. FE will start a background thread to create or delete partitions according to the rules specified by the user. Users can also change existing rules at runtime."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"establishment-of-tables"},"Establishment of tables"),(0,i.kt)("p",null,"The rules for dynamic partitioning can be specified when the table is created or modified at runtime. Currently,dynamic partition rules can only be set for partition tables with single partition columns.    "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Specified when creating table"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'CREATE TABLE tbl1\n(...)\nPROPERTIES\n(\n    "dynamic_partition.prop1" = "value1",\n    "dynamic_partition.prop2" = "value2",\n    ...\n)\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Modify at runtime"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'ALTER TABLE tbl1 SET\n(\n    "dynamic_partition.prop1" = "value1",\n    "dynamic_partition.prop2" = "value2",\n    ...\n)\n')))),(0,i.kt)("h3",{id:"dynamic-partition-rule-parameters"},"Dynamic partition rule parameters"),(0,i.kt)("p",null,"The rules of dynamic partition are prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition."),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.enable")),(0,i.kt)("p",{parentName:"li"},"  Whether to enable the dynamic partition feature. Can be specified as ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUE")," or",(0,i.kt)("inlineCode",{parentName:"p"}," FALSE"),". If not filled, the default is ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUE"),". If it is ",(0,i.kt)("inlineCode",{parentName:"p"},"FALSE"),", Doris will ignore the dynamic partitioning rules of the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.time_unit")),(0,i.kt)("p",{parentName:"li"},"  The unit for dynamic partition scheduling. Can be specified as ",(0,i.kt)("inlineCode",{parentName:"p"},"HOUR"),",",(0,i.kt)("inlineCode",{parentName:"p"},"DAY"),",",(0,i.kt)("inlineCode",{parentName:"p"}," WEEK"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"MONTH"),", means to create or delete partitions by hour, day, week, and month, respectively."),(0,i.kt)("p",{parentName:"li"},"  When specified as ",(0,i.kt)("inlineCode",{parentName:"p"},"HOUR"),", the suffix format of the dynamically created partition name is ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyyMMddHH"),", for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"2020032501"),". ",(0,i.kt)("em",{parentName:"p"},"When the time unit is HOUR, the data type of partition column cannot be DATE.")),(0,i.kt)("p",{parentName:"li"},"  When specified as ",(0,i.kt)("inlineCode",{parentName:"p"},"DAY"),", the suffix format of the dynamically created partition name is ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyyMMdd"),", for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"20200325"),"."),(0,i.kt)("p",{parentName:"li"},"  When specified as ",(0,i.kt)("inlineCode",{parentName:"p"},"WEEK"),", the suffix format of the dynamically created partition name is ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyy_ww"),". That is, the week of the year of current date. For example, the suffix of the partition created for ",(0,i.kt)("inlineCode",{parentName:"p"},"2020-03-25")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"2020_13"),", indicating that it is currently the 13th week of 2020."),(0,i.kt)("p",{parentName:"li"},"  When specified as ",(0,i.kt)("inlineCode",{parentName:"p"},"MONTH"),", the suffix format of the dynamically created partition name is ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyyMM"),", for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"202003"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.time_zone")),(0,i.kt)("p",{parentName:"li"},"  The time zone of the dynamic partition, if not filled in, defaults to the time zone of the current machine's system, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Asia/Shanghai"),", if you want to know the supported TimeZone, you can found in ",(0,i.kt)("inlineCode",{parentName:"p"},"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.start")),(0,i.kt)("p",{parentName:"li"},"  The starting offset of the dynamic partition, usually a negative number. Depending on the ",(0,i.kt)("inlineCode",{parentName:"p"},"time_unit")," attribute, based on the current day (week / month), the partitions with a partition range before this offset will be deleted. If not filled, the default is ",(0,i.kt)("inlineCode",{parentName:"p"},"-2147483648"),", that is, the history partition will not be  deleted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.end")))),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0The end offset of the dynamic partition, usually a positive number. According to the difference of the ",(0,i.kt)("inlineCode",{parentName:"p"},"time_unit")," attribute, the partition of the corresponding range is created in advance based on the current day (week / month)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.prefix"))),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0The dynamically created partition name prefix."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.buckets"))),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0The number of buckets corresponding to the dynamically created partitions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.replication_num")),(0,i.kt)("p",{parentName:"li"},"  The replication number of dynamic partition.If not filled in, defaults to the number of table's replication number.\xa0\xa0\xa0\xa0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.start_day_of_week")))),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0When ",(0,i.kt)("inlineCode",{parentName:"p"},"time_unit")," is",(0,i.kt)("inlineCode",{parentName:"p"}," WEEK"),", this parameter is used to specify the starting point of the week. The value ranges from 1 to 7. Where 1 is Monday and 7 is Sunday. The default is 1, which means that every week starts on Monday."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.start_day_of_month"))),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0When ",(0,i.kt)("inlineCode",{parentName:"p"},"time_unit")," is",(0,i.kt)("inlineCode",{parentName:"p"}," MONTH"),", this parameter is used to specify the start date of each month. The value ranges from 1 to 28. 1 means the 1st of every month, and 28 means the 28th of every month. The default is 1, which means that every month starts at 1st. The 29, 30 and 31 are not supported at the moment to avoid ambiguity caused by lunar years or months."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.create_history_partition")),(0,i.kt)("p",{parentName:"li"},"  The default is false. When set to true, Doris will automatically create all partitions, as described in the creation rules below. At the same time, the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"max_dynamic_partition_num")," of FE will limit the total number of partitions to avoid creating too many partitions at once. When the number of partitions expected to be created is greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"max_dynamic_partition_num"),", the operation will fail."),(0,i.kt)("p",{parentName:"li"},"  When the ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," attribute is not specified, this parameter has no effect.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.history_partition_num")),(0,i.kt)("p",{parentName:"li"}," When ",(0,i.kt)("inlineCode",{parentName:"p"},"create_history_partition")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", this parameter is used to specify the number of history partitions. The default value is -1, which means it is not set.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.hot_partition_num")),(0,i.kt)("p",{parentName:"li"},"  Specify how many of the latest partitions are hot partitions. For hot partition, the system will automatically set its ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_medium")," parameter to SSD, and set ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_cooldown_time"),"."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"hot_partition_num")," is all partitions in the previous n days and in the future."),(0,i.kt)("p",{parentName:"li"},"  Let us give an example. Suppose today is 2021-05-20, partition by day, and the properties of dynamic partition are set to: hot_partition_num=2, end=3, start=-3. Then the system will automatically create the following partitions, and set the ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_medium")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_cooldown_time")," properties:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'p20210517: ["2021-05-17", "2021-05-18") storage_medium=HDD storage_cooldown_time=9999-12-31 23:59:59\np20210518: ["2021-05-18", "2021-05-19") storage_medium=HDD storage_cooldown_time=9999-12-31 23:59:59\np20210519: ["2021-05-19", "2021-05-20") storage_medium=SSD storage_cooldown_time=2021-05-21 00:00:00\np20210520: ["2021-05-20", "2021-05-21") storage_medium=SSD storage_cooldown_time=2021-05-22 00:00:00\np20210521: ["2021-05-21", "2021-05-22") storage_medium=SSD storage_cooldown_time=2021-05-23 00:00:00\np20210522: ["2021-05-22", "2021-05-23") storage_medium=SSD storage_cooldown_time=2021-05-24 00:00:00\np20210523: ["2021-05-23", "2021-05-24") storage_medium=SSD storage_cooldown_time=2021-05-25 00:00:00\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.reserved_history_periods")),(0,i.kt)("p",{parentName:"li"},"  The range of reserved history periods. It should be in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"[yyyy-MM-dd,yyyy-MM-dd],[...,...]")," while the ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.time_unit"),' is "DAY, WEEK, and MONTH". And it should be in the form of ',(0,i.kt)("inlineCode",{parentName:"p"},"[yyyy-MM-dd HH:mm:ss,yyyy-MM-dd HH:mm:ss],[...,...]")," while the dynamic_partition.time_unit",(0,i.kt)("inlineCode",{parentName:"p"},'is "HOUR". And no more spaces expected. The default value is'),'"NULL"`, which means it is not set.'),(0,i.kt)("p",{parentName:"li"},"  Let us give an example. Suppose today is 2021-09-06\uff0cpartitioned by day, and the properties of dynamic partition are set to: "),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'time_unit="DAY/WEEK/MONTH", end=3, start=-3, reserved_history_periods="[2020-06-01,2020-06-20],[2020-10-31,2020-11-15]"'),"."),(0,i.kt)("p",{parentName:"li"},"  The system will automatically reserve following partitions in following period :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'["2020-06-01","2020-06-20"],\n["2020-10-31","2020-11-15"]\n')),(0,i.kt)("p",{parentName:"li"},"  or"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'time_unit="HOUR", end=3, start=-3, reserved_history_periods="[2020-06-01 00:00:00,2020-06-01 03:00:00]"'),"."),(0,i.kt)("p",{parentName:"li"},"  The system will automatically reserve following partitions in following period :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'["2020-06-01 00:00:00","2020-06-01 03:00:00"]\n')),(0,i.kt)("p",{parentName:"li"},"  Otherwise, every ",(0,i.kt)("inlineCode",{parentName:"p"},"[...,...]")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"reserved_history_periods")," is a couple of properties, and they should be set at the same time. And the first date can't be larger than the second one."))),(0,i.kt)("h4",{id:"create-history-partition-rules"},"Create History Partition Rules"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"create_history_partition")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", i.e. history partition creation is enabled, Doris determines the number of history partitions to be created based on ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.start")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.history_partition_num"),". "),(0,i.kt)("p",null,"Assuming the number of history partitions to be created is ",(0,i.kt)("inlineCode",{parentName:"p"},"expect_create_partition_num"),", the number is as follows according to different settings."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"create_history_partition")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"  "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.history_partition_num")," is not set, i.e. -1.",(0,i.kt)("br",{parentName:"p"}),"\n","",(0,i.kt)("inlineCode",{parentName:"p"},"expect_create_partition_num")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),"; ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.history_partition_num")," is set",(0,i.kt)("br",{parentName:"p"}),"\n","",(0,i.kt)("inlineCode",{parentName:"p"},"expect_create_partition_num")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," - max(",(0,i.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-histoty_partition_num"),");")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"create_history_partition")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),(0,i.kt)("br",{parentName:"p"}),"\n","No history partition will be created, ",(0,i.kt)("inlineCode",{parentName:"p"},"expect_create_partition_num")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," - 0;"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"expect_create_partition_num")," is greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"max_dynamic_partition_num")," (default 500), creating too many partitions is prohibited."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")," "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Suppose today is 2021-05-20, partition by day, and the attributes of dynamic partition are set to ",(0,i.kt)("inlineCode",{parentName:"p"},"create_history_partition=true, end=3, start=-3, history_partition_num=1"),", then the system will automatically create the following partitions."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"p20210519\np20210520\np20210521\np20210522\np20210523\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"history_partition_num=5")," and keep the rest attributes as in 1, then the system will automatically create the following partitions."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"p20210517\np20210518\np20210519\np20210520\np20210521\np20210522\np20210523\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"history_partition_num=-1")," i.e., if you do not set the number of history partitions and keep the rest of the attributes as in 1, the system will automatically create the following partitions."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"p20210517\np20210518\np20210519\np20210520\np20210521\np20210522\np20210523\n")))),(0,i.kt)("h3",{id:"notice"},"Notice"),(0,i.kt)("p",null,"If some partitions between ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.start")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.end")," are lost due to some unexpected circumstances when using dynamic partition, the lost partitions between the current time and ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.end")," will be recreated, but the lost partitions between ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.start")," and the current time will not be recreated."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Table ",(0,i.kt)("inlineCode",{parentName:"p"},"tbl1")," partition column k1, type is DATE, create a dynamic partition rule. By day partition, only the partitions of the last 7 days are kept, and the partitions of the next 3 days are created in advance."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'CREATE TABLE tbl1\n(\n    k1 DATE,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-7",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32"\n);\n')),(0,i.kt)("p",{parentName:"li"},"Suppose the current date is 2020-05-29. According to the above rules, tbl1 will produce the following partitions:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'p20200529: ["2020-05-29", "2020-05-30")\np20200530: ["2020-05-30", "2020-05-31")\np20200531: ["2020-05-31", "2020-06-01")\np20200601: ["2020-06-01", "2020-06-02")\n')),(0,i.kt)("p",{parentName:"li"},"On the next day, 2020-05-30, a new partition will be created ",(0,i.kt)("inlineCode",{parentName:"p"},'p20200602: [" 2020-06-02 "," 2020-06-03 ")')),(0,i.kt)("p",{parentName:"li"},"On 2020-06-06, because ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.start")," is set to 7, the partition 7 days ago will be deleted, that is, the partition ",(0,i.kt)("inlineCode",{parentName:"p"},"p20200529")," will be deleted.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Table tbl1 partition column k1, type is DATETIME, create a dynamic partition rule. Partition by week, only keep the partition of the last 2 weeks, and create the partition of the next 2 weeks in advance."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'CREATE TABLE tbl1\n(\n    k1 DATETIME,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "WEEK",\n    "dynamic_partition.start" = "-2",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8"\n);\n')),(0,i.kt)("p",{parentName:"li"},"Suppose the current date is 2020-05-29, which is the 22nd week of 2020. The default week starts on Monday. Based on the above rules, tbl1 will produce the following partitions:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'p2020_22: ["2020-05-25 00:00:00", "2020-06-01 00:00:00")\np2020_23: ["2020-06-01 00:00:00", "2020-06-08 00:00:00")\np2020_24: ["2020-06-08 00:00:00", "2020-06-15 00:00:00")\n')),(0,i.kt)("p",{parentName:"li"},"The start date of each partition is Monday of the week. At the same time, because the type of the partition column k1 is DATETIME, the partition value will fill the hour, minute and second fields, and all are 0."),(0,i.kt)("p",{parentName:"li"},"On 2020-06-15, the 25th week, the partition 2 weeks ago will be deleted, ie ",(0,i.kt)("inlineCode",{parentName:"p"},"p2020_22")," will be deleted."),(0,i.kt)("p",{parentName:"li"},"In the above example, suppose the user specified the start day of the week as ",(0,i.kt)("inlineCode",{parentName:"p"},'"dynamic_partition.start_day_of_week" = "3"'),", that is, set Wednesday as the start of week. The partition is as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'p2020_22: ["2020-05-27 00:00:00", "2020-06-03 00:00:00")\np2020_23: ["2020-06-03 00:00:00", "2020-06-10 00:00:00")\np2020_24: ["2020-06-10 00:00:00", "2020-06-17 00:00:00")\n')),(0,i.kt)("p",{parentName:"li"},"That is, the partition ranges from Wednesday of the current week to Tuesday of the next week."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note: 2019-12-31 and 2020-01-01 are in same week, if the starting date of the partition is 2019-12-31, the partition name is ",(0,i.kt)("inlineCode",{parentName:"li"},"p2019_53"),", if the starting date of the partition is 2020-01 -01, the partition name is ",(0,i.kt)("inlineCode",{parentName:"li"},"p2020_01"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Table tbl1 partition column k1, type is DATE, create a dynamic partition rule. Partition by month without deleting historical partitions, and create partitions for the next 2 months in advance. At the same time, set the starting date on the 3rd of each month."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'CREATE TABLE tbl1\n(\n    k1 DATE,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "MONTH",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8",\n    "dynamic_partition.start_day_of_month" = "3"\n);\n')),(0,i.kt)("p",{parentName:"li"},"Suppose the current date is 2020-05-29. Based on the above rules, tbl1 will produce the following partitions:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'p202005: ["2020-05-03", "2020-06-03")\np202006: ["2020-06-03", "2020-07-03")\np202007: ["2020-07-03", "2020-08-03")\n')),(0,i.kt)("p",{parentName:"li"},"Because ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.start")," is not set, the historical partition will not be deleted."),(0,i.kt)("p",{parentName:"li"},"Assuming that today is 2020-05-20, and set 28th as the start of each month, the partition range is:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'p202004: ["2020-04-28", "2020-05-28")\np202005: ["2020-05-28", "2020-06-28")\np202006: ["2020-06-28", "2020-07-28")\n')))),(0,i.kt)("h3",{id:"modify-dynamic-partition-properties"},"Modify Dynamic Partition Properties"),(0,i.kt)("p",null,"You can modify the properties of the dynamic partition with the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ALTER TABLE tbl1 SET\n(\n    "dynamic_partition.prop1" = "value1",\n    ...\n);\n')),(0,i.kt)("p",null,"The modification of certain attributes may cause conflicts. Assume that the partition granularity was DAY and the following partitions have been created:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'p20200519: ["2020-05-19", "2020-05-20")\np20200520: ["2020-05-20", "2020-05-21")\np20200521: ["2020-05-21", "2020-05-22")\n')),(0,i.kt)("p",null,"If the partition granularity is changed to MONTH at this time, the system will try to create a partition with the range ",(0,i.kt)("inlineCode",{parentName:"p"},'["2020-05-01", "2020-06-01")'),", and this range conflicts with the existing partition. So it cannot be created. And the partition with the range ",(0,i.kt)("inlineCode",{parentName:"p"},'["2020-06-01", "2020-07-01")')," can be created normally. Therefore, the partition between 2020-05-22 and 2020-05-30 needs to be filled manually."),(0,i.kt)("h3",{id:"check-dynamic-partition-table-scheduling-status"},"Check Dynamic Partition Table Scheduling Status"),(0,i.kt)("p",null,"You can further view the scheduling of dynamic partitioned tables by using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> SHOW DYNAMIC PARTITION TABLES;\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| TableName | Enable | TimeUnit | Start       | End  | Prefix | Buckets | StartOf   | LastUpdateTime | LastSchedulerTime   | State  | LastCreatePartitionMsg | LastDropPartitionMsg | ReservedHistoryPeriods  |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| d3        | true   | WEEK     | -3          | 3    | p      | 1       | MONDAY    | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | [2021-12-01,2021-12-31] |\n| d5        | true   | DAY      | -7          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d4        | true   | WEEK     | -3          | 3    | p      | 1       | WEDNESDAY | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d6        | true   | MONTH    | -2147483648 | 2    | p      | 8       | 3rd       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d2        | true   | DAY      | -3          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d7        | true   | MONTH    | -2147483648 | 5    | p      | 8       | 24th      | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n7 rows in set (0.02 sec)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LastUpdateTime: The last time of modifying dynamic partition properties "),(0,i.kt)("li",{parentName:"ul"},"LastSchedulerTime: The last time of performing dynamic partition scheduling"),(0,i.kt)("li",{parentName:"ul"},"State: The state of the last execution of dynamic partition scheduling"),(0,i.kt)("li",{parentName:"ul"},"LastCreatePartitionMsg: Error message of the last time to dynamically add partition scheduling"),(0,i.kt)("li",{parentName:"ul"},"LastDropPartitionMsg: Error message of the last execution of dynamic deletion partition scheduling")),(0,i.kt)("h2",{id:"advanced-operation"},"Advanced Operation"),(0,i.kt)("h3",{id:"fe-configuration-item"},"FE Configuration Item"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"dynamic","_","partition","_","enable"),(0,i.kt)("p",{parentName:"li"},"  Whether to enable Doris's dynamic partition feature. The default value is false, which is off. This parameter only affects the partitioning operation of dynamic partition tables, not normal tables. You can modify the parameters in ",(0,i.kt)("inlineCode",{parentName:"p"},"fe.conf")," and restart FE to take effect. You can also execute the following commands at runtime to take effect:"),(0,i.kt)("p",{parentName:"li"},"  MySQL protocol:"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'ADMIN SET FRONTEND CONFIG ("dynamic_partition_enable" = "true")')),(0,i.kt)("p",{parentName:"li"},"  HTTP protocol:"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"curl --location-trusted -u username:password -XGET http://fe_host:fe_http_port/api/_set_config?dynamic_partition_enable=true")),(0,i.kt)("p",{parentName:"li"},"  To turn off dynamic partitioning globally, set this parameter to false.\n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"dynamic","_","partition","_","check","_","interval","_","seconds"),(0,i.kt)("p",{parentName:"li"},"  The execution frequency of dynamic partition threads defaults to 3600 (1 hour), that is, scheduling is performed every 1 hour. You can modify the parameters in ",(0,i.kt)("inlineCode",{parentName:"p"},"fe.conf")," and restart FE to take effect. You can also modify the following commands at runtime:"),(0,i.kt)("p",{parentName:"li"},"  MySQL protocol:"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'ADMIN SET FRONTEND CONFIG ("dynamic_partition_check_interval_seconds" = "7200")')),(0,i.kt)("p",{parentName:"li"},"  HTTP protocol:"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"curl --location-trusted -u username:password -XGET http://fe_host:fe_http_port/api/_set_config?dynamic_partition_check_interval_seconds=432000"),"\n"))),(0,i.kt)("h3",{id:"converting-dynamic-and-manual-partition-tables-to-each-other"},"Converting dynamic and manual partition tables to each other"),(0,i.kt)("p",null,"For a table, dynamic and manual partitioning can be freely converted, but they cannot exist at the same time, there is and only one state."),(0,i.kt)("h4",{id:"converting-manual-partitioning-to-dynamic-partitioning"},"Converting Manual Partitioning to Dynamic Partitioning"),(0,i.kt)("p",null,"If a table is not dynamically partitioned when it is created, it can be converted to dynamic partitioning at runtime by modifying the dynamic partitioning properties with ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE"),", an example of which can be seen with ",(0,i.kt)("inlineCode",{parentName:"p"},"HELP ALTER TABLE"),"."),(0,i.kt)("p",null,"When dynamic partitioning feature is enabled, Doris will no longer allow users to manage partitions manually, but will automatically manage partitions based on dynamic partition properties."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTICE"),": If ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition.start")," is set, historical partitions with a partition range before the start offset of the dynamic partition will be deleted."),(0,i.kt)("h4",{id:"converting-dynamic-partitioning-to-manual-partitioning"},"Converting Dynamic Partitioning to Manual Partitioning"),(0,i.kt)("p",null,"The dynamic partitioning feature can be disabled by executing ",(0,i.kt)("inlineCode",{parentName:"p"},'ALTER TABLE tbl_name SET ("dynamic_partition.enable" = "false") ')," and converting it to a manual partition table."),(0,i.kt)("p",null,"When dynamic partitioning feature is disabled, Doris will no longer manage partitions automatically, and users will have to create or delete partitions manually by using ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE"),"."),(0,i.kt)("h2",{id:"common-problem"},"Common problem"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After creating the dynamic partition table, it prompts ",(0,i.kt)("inlineCode",{parentName:"p"},"Could not create table with dynamic partition when fe config dynamic_partition_enable is false")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},' Because the main switch of dynamic partition, that is, the configuration of FE ```dynamic_partition_enable``` is false, the dynamic partition table cannot be created.\n \n At this time, please modify the FE configuration file, add a line ```dynamic_partition_enable=true```, and restart FE. Or execute the command ADMIN SET FRONTEND CONFIG ("dynamic_partition_enable" = "true") to turn on the dynamic partition switch.\n')))),(0,i.kt)("h2",{id:"more-help"},"More Help"),(0,i.kt)("p",null,"For more detailed syntax and best practices for using dynamic partitions, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-DYNAMIC-PARTITION"},"SHOW DYNAMIC PARTITION")," Command manual, you can also enter ",(0,i.kt)("inlineCode",{parentName:"p"},"HELP ALTER TABLE")," in the MySql client command line for more help information."))}s.isMDXComponent=!0}}]);