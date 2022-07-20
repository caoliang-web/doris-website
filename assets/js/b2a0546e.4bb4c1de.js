"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[53620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,c=h["".concat(s,".").concat(p)]||h[p]||d[p]||r;return n?i.createElement(c,o(o({ref:t},m),{},{components:n})):i.createElement(c,o({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r={title:"Runtime Filter",language:"en"},o=void 0,l={unversionedId:"administrator-guide/runtime-filter",id:"version-0.15/administrator-guide/runtime-filter",title:"Runtime Filter",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/runtime-filter.md",sourceDirName:"administrator-guide",slug:"/administrator-guide/runtime-filter",permalink:"/docs/0.15/administrator-guide/runtime-filter",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Runtime Filter",language:"en"},sidebar:"docs",previous:{title:"Statistics of query execution",permalink:"/docs/0.15/administrator-guide/running-profile"},next:{title:"File Manager",permalink:"/docs/0.15/administrator-guide/small-file-mgr"}},s={},u=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Principle",id:"principle",level:2},{value:"Usage",id:"usage",level:2},{value:"Runtime Filter query options",id:"runtime-filter-query-options",level:3},{value:"1.runtime_filter_type",id:"1runtime_filter_type",level:4},{value:"2.runtime_filter_mode",id:"2runtime_filter_mode",level:4},{value:"3.runtime_filter_wait_time_ms",id:"3runtime_filter_wait_time_ms",level:4},{value:"4.runtime_filters_max_num",id:"4runtime_filters_max_num",level:4},{value:"5. Bloom Filter length related parameters",id:"5-bloom-filter-length-related-parameters",level:4},{value:"View Runtime Filter generated by query",id:"view-runtime-filter-generated-by-query",level:3},{value:"Runtime Filter planning rules",id:"runtime-filter-planning-rules",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"runtime-filter"},"Runtime Filter"),(0,a.kt)("p",null,"Runtime Filter is a new feature officially added in Doris 0.15. It is designed to dynamically generate filter conditions for certain Join queries at runtime to reduce the amount of scanned data, avoid unnecessary I/O and network transmission, and speed up the query."),(0,a.kt)("p",null,"It's design, implementation and effects, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/issues/6116"},"ISSUE 6116"),"."),(0,a.kt)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access."),(0,a.kt)("li",{parentName:"ul"},"BE: Backend, the back-end node of Doris. Responsible for query execution and data storage."),(0,a.kt)("li",{parentName:"ul"},"Left table: the table on the left during Join query. Perform Probe operation. The order can be adjusted by Join Reorder."),(0,a.kt)("li",{parentName:"ul"},"Right table: the table on the right during Join query. Perform the Build operation. The order can be adjusted by Join Reorder."),(0,a.kt)("li",{parentName:"ul"},"Fragment: FE will convert the execution of specific SQL statements into corresponding fragments and send them to BE for execution. The corresponding Fragment is executed on the BE, and the results are aggregated and returned to the FE."),(0,a.kt)("li",{parentName:"ul"},"Join on clause: ",(0,a.kt)("inlineCode",{parentName:"li"},"Aa=Bb")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"A join B on Aa=Bb"),", based on this to generate join conjuncts during query planning, including expr used by join Build and Probe, where Build expr is called in Runtime Filter src expr, Probe expr are called target expr in Runtime Filter.")),(0,a.kt)("h2",{id:"principle"},"Principle"),(0,a.kt)("p",null,"Runtime Filter is generated during query planning, constructed in HashJoinNode, and applied in ScanNode."),(0,a.kt)("p",null,"For example, there is currently a Join query between the T1 table and the T2 table. Its Join mode is HashJoin. T1 is a fact table with 100,000 rows of data. T2 is a dimension table with 2000 rows of data. Doris join The actual situation is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|          >      HashJoinNode     <\n|         |                         |\n|         | 100000                  | 2000\n|         |                         |\n|   OlapScanNode              OlapScanNode\n|         ^                         ^   \n|         | 100000                  | 2000\n|        T1                        T2\n|\n")),(0,a.kt)("p",null,"Obviously, scanning data for T2 is much faster than T1. If we take the initiative to wait for a while and then scan T1, after T2 sends the scanned data record to HashJoinNode, HashJoinNode calculates a filter condition based on the data of T2, such as the maximum value of T2 data And the minimum value, or build a Bloom Filter, and then send this filter condition to ScanNode waiting to scan T1, the latter applies this filter condition and delivers the filtered data to HashJoinNode, thereby reducing the number of probe hash tables and network overhead. This filter condition is Runtime Filter, and the effect is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|          >      HashJoinNode     <\n|         |                         |\n|         | 6000                    | 2000\n|         |                         |\n|   OlapScanNode              OlapScanNode\n|         ^                         ^   \n|         | 100000                  | 2000\n|        T1                        T2\n|\n")),(0,a.kt)("p",null,"If the filter condition (Runtime Filter) can be pushed down to the storage engine, in some cases, the index can be used to directly reduce the amount of scanned data, thereby greatly reducing the scanning time. The effect is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|          >      HashJoinNode     <\n|         |                         |\n|         | 6000                    | 2000\n|         |                         |\n|   OlapScanNode              OlapScanNode\n|         ^                         ^   \n|         | 6000                    | 2000\n|        T1                        T2\n|\n")),(0,a.kt)("p",null,"It can be seen that, unlike predicate push-down and partition cutting, Runtime Filter is a filter condition dynamically generated at runtime, that is, when the query is run, the join on clause is parsed to determine the filter expression, and the expression is broadcast to ScanNode that is reading the left table , Thereby reducing the amount of scanned data, thereby reducing the number of probe hash table, avoiding unnecessary I/O and network transmission."),(0,a.kt)("p",null,"Runtime Filter is mainly used to optimize joins for large tables. If the amount of data in the left table is too small, or the amount of data in the right table is too large, the Runtime Filter may not achieve the expected effect."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"runtime-filter-query-options"},"Runtime Filter query options"),(0,a.kt)("p",null,"For query options related to Runtime Filter, please refer to the following sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The first query option is to adjust the type of Runtime Filter used. In most cases, you only need to adjust this option, and keep the other options as default."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"runtime_filter_type"),": Including Bloom Filter, MinMax Filter and IN predicate. By default, only IN predicate will be used conservatively. In some cases, the performance will be higher when both Bloom Filter, MinMax Filter and IN predicate are used at the same time."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Other query options usually only need to be further adjusted in certain specific scenarios to achieve the best results. Usually only after performance testing, optimize for resource-intensive, long enough running time and high enough frequency queries."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"runtime_filter_mode"),": Used to adjust the push-down strategy of Runtime Filter, including three strategies of OFF, LOCAL, and GLOBAL. The default setting is the GLOBAL strategy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"runtime_filter_wait_time_ms"),": the time that ScanNode in the left table waits for each Runtime Filter, the default is 1000ms")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"runtime_filters_max_num"),": The maximum number of Bloom Filters in the Runtime Filter that can be applied to each query, the default is 10")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_min_size"),": the minimum length of Bloom Filter in Runtime Filter, default 1048576 (1M)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_max_size"),": the maximum length of Bloom Filter in Runtime Filter, the default is 16777216 (16M)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_size"),": The default length of Bloom Filter in Runtime Filter, the default is 2097152 (2M)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"runtime_filter_max_in_num"),": If the number of rows in the right table of the join is greater than this value, we will not generate an IN predicate, the default is 1024"))))),(0,a.kt)("p",null,"The query options are further explained below."),(0,a.kt)("h4",{id:"1runtime_filter_type"},"1.runtime_filter_type"),(0,a.kt)("p",null,"Type of Runtime Filter used."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": Number (1, 2, 4) or the corresponding mnemonic string (IN, BLOOM_FILTER, MIN_MAX), the default is 1 (IN predicate), use multiple commas to separate, pay attention to the need to add quotation marks , Or add any number of types, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'set runtime_filter_type="BLOOM_FILTER,IN,MIN_MAX";\n')),(0,a.kt)("p",null,"Equivalent to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set runtime_filter_type=7;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Precautions for use")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Bloom Filter"),": There is a certain misjudgment rate, which results in the filtered data being a little less than expected, but it will not cause the final result to be inaccurate. In most cases, Bloom Filter can improve performance or has no significant impact on performance, but in some cases Under circumstances will cause performance degradation."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Bloom Filter construction and application overhead is high, so when the filtering rate is low, or the amount of data in the left table is small, Bloom Filter may cause performance degradation."),(0,a.kt)("li",{parentName:"ul"},"At present, only the Key column of the left table can be pushed down to the storage engine if the Bloom Filter is applied, and the test results show that the performance of the Bloom Filter is often reduced when the Bloom Filter is not pushed down to the storage engine."),(0,a.kt)("li",{parentName:"ul"},"Currently Bloom Filter only has short-circuit logic when using expression filtering on ScanNode, that is, when the false positive rate is too high, the Bloom Filter will not continue to be used, but there is no short-circuit logic when the Bloom Filter is pushed down to the storage engine , So when the filtration rate is low, it may cause performance degradation."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"MinMax Filter"),": Contains the maximum value and the minimum value, thereby filtering data smaller than the minimum value and greater than the maximum value. The filtering effect of the MinMax Filter is related to the type of the Key column in the join on clause and the data distribution of the left and right tables."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When the type of the Key column in the join on clause is int/bigint/double, etc., in extreme cases, if the maximum and minimum values \u200b\u200bof the left and right tables are the same, there is no effect, otherwise the maximum value of the right table is less than the minimum value of the left table, or the minimum of the right table The value is greater than the maximum value in the left table, the effect is best."),(0,a.kt)("li",{parentName:"ul"},"When the type of the Key column in the join on clause is varchar, etc., applying the MinMax Filter will often cause performance degradation."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"IN predicate"),": Construct IN predicate based on all the values \u200b\u200bof Key listed in the join on clause on the right table, and use the constructed IN predicate to filter on the left table. Compared with Bloom Filter, the cost of construction and application is lower. The amount of data in the right table is lower. When it is less, it tends to perform better."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"By default, only the number of data rows in the right table is less than 1024 will be pushed down (can be adjusted by ",(0,a.kt)("inlineCode",{parentName:"li"},"runtime_filter_max_in_num")," in the session variable)."),(0,a.kt)("li",{parentName:"ul"},"Currently IN predicate does not implement a merge method, that is, it cannot be pushed down across Fragments, so currently when it is necessary to push down to the ScanNode of the left table of shuffle join, if Bloom Filter is not generated, then we will convert IN predicate to Bloom Filter for Process pushdown across Fragments, so even if the type only selects IN predicate, Bloom Filter may actually be applied;")))),(0,a.kt)("h4",{id:"2runtime_filter_mode"},"2.runtime_filter_mode"),(0,a.kt)("p",null,"Used to control the transmission range of Runtime Filter between instances."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": Number (0, 1, 2) or corresponding mnemonic string (OFF, LOCAL, GLOBAL), default 2 (GLOBAL)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Precautions for use")),(0,a.kt)("p",null,"LOCAL: Relatively conservative, the constructed Runtime Filter can only be used in the same Fragment on the same instance (the smallest unit of query execution), that is, the Runtime Filter producer (the HashJoinNode that constructs the Filter) and the consumer (the ScanNode that uses the RuntimeFilter) The same Fragment, such as the general scene of broadcast join;"),(0,a.kt)("p",null,"GLOBAL: Relatively radical. In addition to satisfying the scenario of the LOCAL strategy, the Runtime Filter can also be combined and transmitted to different Fragments on different instances via the network. For example, the Runtime Filter producer and consumer are in different Fragments, such as shuffle join."),(0,a.kt)("p",null,"In most cases, the GLOBAL strategy can optimize queries in a wider range of scenarios, but in some shuffle joins, the cost of generating and merging Runtime Filters exceeds the performance advantage brought to the query, and you can consider changing to the LOCAL strategy."),(0,a.kt)("p",null,"If the join query involved in the cluster does not improve performance due to Runtime Filter, you can change the setting to OFF to completely turn off the function."),(0,a.kt)("p",null,"When building and applying Runtime Filters on different Fragments, the reasons and strategies for merging Runtime Filters can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/issues/6116"},"ISSUE 6116")),(0,a.kt)("h4",{id:"3runtime_filter_wait_time_ms"},"3.runtime_filter_wait_time_ms"),(0,a.kt)("p",null,"Waiting for Runtime Filter is time consuming."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": integer, default 1000, unit ms"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Precautions for use")),(0,a.kt)("p",null,"After the Runtime Filter is turned on, the ScanNode in the table on the left will wait for a period of time for each Runtime Filter assigned to itself before scanning the data, that is, if the ScanNode is assigned 3 Runtime Filters, it will wait at most 3000ms."),(0,a.kt)("p",null,"Because it takes time to build and merge the Runtime Filter, ScanNode will try to push down the Runtime Filter that arrives within the waiting time to the storage engine. If the waiting time is exceeded, ScanNode will directly start scanning data using the Runtime Filter that has arrived."),(0,a.kt)("p",null,"If the Runtime Filter arrives after ScanNode starts scanning, ScanNode will not push the Runtime Filter down to the storage engine. Instead, it will use expression filtering on ScanNode based on the Runtime Filter for the data that has been scanned from the storage engine. The scanned data will not apply the Runtime Filter, so the intermediate data size obtained will be larger than the optimal solution, but serious cracking can be avoided."),(0,a.kt)("p",null,"If the cluster is busy and there are many resource-intensive or long-time-consuming queries on the cluster, consider increasing the waiting time to avoid missing optimization opportunities for complex queries. If the cluster load is light, and there are many small queries on the cluster that only take a few seconds, you can consider reducing the waiting time to avoid an increase of 1s for each query."),(0,a.kt)("h4",{id:"4runtime_filters_max_num"},"4.runtime_filters_max_num"),(0,a.kt)("p",null,"The upper limit of the number of Bloom Filters in the Runtime Filter generated by each query."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": integer, default 10"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Precautions for use"),"\nCurrently, only the number of Bloom Filters is limited, because the construction and application of Bloom Filters are more expensive than MinMax Filter and IN predicate."),(0,a.kt)("p",null,"If the number of Bloom Filters generated exceeds the maximum allowable number, then the Bloom Filter with a large selectivity is retained. A large selectivity means that more rows are expected to be filtered. This setting can prevent Bloom Filter from consuming too much memory overhead and causing potential problems."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Selectivity = (HashJoinNode Cardinality / HashJoinNode left child Cardinality)\n- Because the cardinality of FE is currently inaccurate, the selectivity of Bloom Filter calculation here is inaccurate, so in the end, it may only randomly reserve part of Bloom Filter.\n")),(0,a.kt)("p",null,"This query option needs to be adjusted only when tuning some long-consuming queries involving joins between large tables."),(0,a.kt)("h4",{id:"5-bloom-filter-length-related-parameters"},"5. Bloom Filter length related parameters"),(0,a.kt)("p",null,"Including ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_min_size"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_max_size"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_size"),", used to determine the size (in bytes) of the Bloom Filter data structure used by the Runtime Filter."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": Integer"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Precautions for use"),"\nBecause it is necessary to ensure that the length of the Bloom Filter constructed by each HashJoinNode is the same to be merged, the length of the Bloom Filter is currently calculated in the FE query planning."),(0,a.kt)("p",null,"If you can get the number of data rows (Cardinality) in the statistical information of the join right table, it will try to estimate the optimal size of the Bloom Filter based on Cardinality, and round to the nearest power of 2 (log value with the base 2). If the Cardinality of the table on the right cannot be obtained, the default Bloom Filter length ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_size")," will be used. ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_min_size")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_max_size")," are used to limit the minimum and maximum length of the final Bloom Filter."),(0,a.kt)("p",null,"Larger Bloom Filters are more effective when processing high-cardinality input sets, but require more memory. If the query needs to filter high cardinality columns (for example, containing millions of different values), you can consider increasing the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_size")," for some benchmark tests, which will help make the Bloom Filter filter more accurate, so as to obtain the expected Performance improvement."),(0,a.kt)("p",null,"The effectiveness of Bloom Filter depends on the data distribution of the query, so it is usually only for some specific queries to additionally adjust the length of the Bloom Filter, rather than global modification, generally only for some long time-consuming queries involving joins between large tables. Only when you need to adjust this query option."),(0,a.kt)("h3",{id:"view-runtime-filter-generated-by-query"},"View Runtime Filter generated by query"),(0,a.kt)("p",null,"The query plan that can be displayed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"explain")," command includes the join on clause information used by each Fragment, as well as comments on the generation and use of the Runtime Filter by the Fragment, so as to confirm whether the Runtime Filter is applied to the desired join on clause."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The comment contained in the Fragment that generates the Runtime Filter, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"runtime filters: filter_id[type] <- table.column"),"."),(0,a.kt)("li",{parentName:"ul"},"Use the comment contained in the fragment of Runtime Filter such as ",(0,a.kt)("inlineCode",{parentName:"li"},"runtime filters: filter_id[type] -> table.column"),".")),(0,a.kt)("p",null,"The query in the following example uses a Runtime Filter with ID RF000."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'CREATE TABLE test (t1 INT) DISTRIBUTED BY HASH (t1) BUCKETS 2 PROPERTIES("replication_num" = "1");\nINSERT INTO test VALUES (1), (2), (3), (4);\n\nCREATE TABLE test2 (t2 INT) DISTRIBUTED BY HASH (t2) BUCKETS 2 PROPERTIES("replication_num" = "1");\nINSERT INTO test2 VALUES (3), (4), (5);\n\nEXPLAIN SELECT t1 FROM test JOIN test2 where test.t1 = test2.t2;\n+-------------------------------------------------------------------+\n| Explain String                                                    |\n+-------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                   |\n|  OUTPUT EXPRS:`t1`                                                |\n|                                                                   |\n|   4:EXCHANGE                                                      |\n|                                                                   |\n| PLAN FRAGMENT 1                                                   |\n|  OUTPUT EXPRS:                                                    |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:ssb`.`test`.`t1`  |\n|                                                                   |\n|   2:HASH JOIN                                                     |\n|   |  join op: INNER JOIN (BUCKET_SHUFFLE)                         |\n|   |  equal join conjunct: `test`.`t1` = `test2`.`t2`              |\n|   |  runtime filters: RF000[in] <- `test2`.`t2`                   |\n|   |                                                               |\n|   |----3:EXCHANGE                                                 |\n|   |                                                               |\n|   0:OlapScanNode                                                  |\n|      TABLE: test                                                  |\n|      runtime filters: RF000[in] -> `test`.`t1`                    |\n|                                                                   |\n| PLAN FRAGMENT 2                                                   |\n|  OUTPUT EXPRS:                                                    |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:ssb`.`test2`.`t2` |\n|                                                                   |\n|   1:OlapScanNode                                                  |\n|      TABLE: test2                                                 |\n+-------------------------------------------------------------------+\n-- The line of `runtime filters` above shows that `2:HASH JOIN` of `PLAN FRAGMENT 1` generates IN predicate with ID RF000,\n-- Among them, the key values of `test2`.`t2` are only known at runtime,\n-- This IN predicate is used in `0:OlapScanNode` to filter unnecessary data when reading `test`.`t1`.\n\nSELECT t1 FROM test JOIN test2 where test.t1 = test2.t2; \n-- Return 2 rows of results [3, 4];\n\n-- Through the query profile (set enable_profile=true;) you can view the detailed information of the internal work of the query,\n-- Including whether each Runtime Filter is pushed down, waiting time, \n-- and the total time from prepare to receiving Runtime Filter for OLAP_SCAN_NODE.\nRuntimeFilter:in:\n    -  HasPushDownToEngine:  true\n    -  AWaitTimeCost:  0ns\n    -  EffectTimeCost:  2.76ms\n\n-- In addition, in the OLAP_SCAN_NODE of the profile, you can also view the filtering effect \n-- and time consumption after the Runtime Filter is pushed down.\n    -  RowsVectorPredFiltered:  9.320008M  (9320008)\n    -  VectorPredEvalTime:  364.39ms\n')),(0,a.kt)("h2",{id:"runtime-filter-planning-rules"},"Runtime Filter planning rules"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Only support the generation of Runtime Filter for the equivalent conditions in the join on clause, excluding the Null-safe condition, because it may filter out the null value of the join left table."),(0,a.kt)("li",{parentName:"ol"},"Does not support pushing down Runtime Filter to the left table of left outer, full outer, and anti join;"),(0,a.kt)("li",{parentName:"ol"},"Does not support src expr or target expr is constant;"),(0,a.kt)("li",{parentName:"ol"},"The equality of src expr and target expr is not supported;"),(0,a.kt)("li",{parentName:"ol"},"The type of src expr is not supported to be equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"HLL")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"BITMAP"),";"),(0,a.kt)("li",{parentName:"ol"},"Currently only supports pushing down Runtime Filter to OlapScanNode;"),(0,a.kt)("li",{parentName:"ol"},"Target expr does not support NULL-checking expressions, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"COALESCE/IFNULL/CASE"),", because when the join on clause of other joins at the upper level of the outer join contains NULL-checking expressions and a Runtime Filter is generated, this Runtime Filter is downloaded Pushing to the left table of outer join may cause incorrect results;"),(0,a.kt)("li",{parentName:"ol"},"The column (slot) in target expr is not supported, and an equivalent column cannot be found in the original table;"),(0,a.kt)("li",{parentName:"ol"},"Column conduction is not supported. This includes two cases:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"First, when the join on clause contains A.k = B.k and B.k = C.k, currently C.k can only be pushed down to B.k, but not to A.k;"),(0,a.kt)("li",{parentName:"ul"},"Second, for example, the join on clause contains Aa + Bb = Cc. If Aa can be transmitted to Ba, that is, Aa and Ba are equivalent columns, then you can replace Aa with Ba, and then you can try to push the Runtime Filter down to B ( If Aa and Ba are not equivalent columns, they cannot be pushed down to B, because target expr must be bound to the only join left table);"))),(0,a.kt)("li",{parentName:"ol"},"The types of Target expr and src expr must be equal, because Bloom Filter is based on hash, if the types are not equal, it will try to convert the type of target expr to the type of src expr;"),(0,a.kt)("li",{parentName:"ol"},"The Runtime Filter generated by ",(0,a.kt)("inlineCode",{parentName:"li"},"PlanNode.Conjuncts")," is not supported. Unlike HashJoinNode's ",(0,a.kt)("inlineCode",{parentName:"li"},"eqJoinConjuncts")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"otherJoinConjuncts"),", the Runtime Filter generated by ",(0,a.kt)("inlineCode",{parentName:"li"},"PlanNode.Conjuncts")," found in the test that it may cause incorrect results, such as ",(0,a.kt)("inlineCode",{parentName:"li"}," When an IN")," subquery is converted to a join, the automatically generated join on clause will be stored in ",(0,a.kt)("inlineCode",{parentName:"li"},"PlanNode.Conjuncts"),". At this time, applying Runtime Filter may result in missing some rows in the result.")))}d.isMDXComponent=!0}}]);