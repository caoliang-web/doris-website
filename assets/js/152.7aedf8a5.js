(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{777:function(e,t,a){"use strict";a.r(t);var s=a(15),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"partition-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partition-cache"}},[e._v("#")]),e._v(" Partition Cache")]),e._v(" "),a("h2",{attrs:{id:"demand-scenario"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demand-scenario"}},[e._v("#")]),e._v(" Demand scenario")]),e._v(" "),a("p",[e._v("In most data analysis scenarios, write less and read more. Data is written once and read frequently. For example, the dimensions and indicators involved in a report are calculated at one time in the early morning, but there are hundreds or even thousands of times every day. page access, so it is very suitable for caching the result set. In data analysis or BI applications, the following business scenarios exist:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("High concurrency scenario")]),e._v(", Doris can better support high concurrency, but a single server cannot carry too high QPS")]),e._v(" "),a("li",[a("strong",[e._v("Kanban for complex charts")]),e._v(", complex Dashboard or large-screen applications, the data comes from multiple tables, each page has dozens of queries, although each query is only tens of milliseconds, but the overall query time will be in a few seconds")]),e._v(" "),a("li",[a("strong",[e._v("Trend analysis")]),e._v(", the query for a given date range, the indicators are displayed by day, such as querying the trend of the number of users in the last 7 days, this type of query has a large amount of data and a wide range of queries, and the query time often takes tens of seconds")]),e._v(" "),a("li",[a("strong",[e._v("User repeated query")]),e._v(", if the product does not have an anti-reload mechanism, the user repeatedly refreshes the page due to hand error or other reasons, resulting in a large number of repeated SQL submissions")])]),e._v(" "),a("p",[e._v("In the above four scenarios, the solution at the application layer is to put the query results in Redis, update the cache periodically or manually refresh the cache by the user, but this solution has the following problems:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Data inconsistency")]),e._v(", unable to perceive the update of data, causing users to often see old data")]),e._v(" "),a("li",[a("strong",[e._v("Low hit rate")]),e._v(", cache the entire query result, if the data is written in real time, the cache is frequently invalidated, the hit rate is low and the system load is heavy")]),e._v(" "),a("li",[a("strong",[e._v("Additional cost")]),e._v(", the introduction of external cache components will bring system complexity and increase additional costs")])]),e._v(" "),a("h2",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),a("p",[e._v("This partitioned caching strategy can solve the above problems, giving priority to ensuring data consistency. On this basis, the cache granularity is refined and the hit rate is improved. Therefore, it has the following characteristics:")]),e._v(" "),a("ul",[a("li",[e._v("Users do not need to worry about data consistency, cache invalidation is controlled by version, and the cached data is consistent with the data queried from BE")]),e._v(" "),a("li",[e._v("No additional components and costs, cached results are stored in BE's memory, users can adjust the cache memory size as needed")]),e._v(" "),a("li",[e._v("Implemented two caching strategies, SQLCache and PartitionCache, the latter has a finer cache granularity")]),e._v(" "),a("li",[e._v("Use consistent hashing to solve the problem of BE nodes going online and offline. The caching algorithm in BE is an improved LRU")])]),e._v(" "),a("h2",{attrs:{id:"sqlcache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlcache"}},[e._v("#")]),e._v(" SQLCache")]),e._v(" "),a("p",[e._v("SQLCache stores and retrieves the cache according to the SQL signature, the partition ID of the queried table, and the latest version of the partition. The combination of the three determines a cached data set. If any one changes, such as SQL changes, such as query fields or conditions are different, or the version changes after the data is updated, the cache will not be hit.")]),e._v(" "),a("p",[e._v("If multiple tables are joined, use the latest updated partition ID and the latest version number. If one of the tables is updated, the partition ID or version number will be different, and the cache will also not be hit.")]),e._v(" "),a("p",[e._v("SQLCache is more suitable for T+1 update scenarios. Data is updated in the early morning. The results obtained from the BE for the first query are put into the cache, and subsequent identical queries are obtained from the cache. Real-time update data can also be used, but there may be a problem of low hit rate. You can refer to the following PartitionCache.")]),e._v(" "),a("h2",{attrs:{id:"partitioncache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partitioncache"}},[e._v("#")]),e._v(" PartitionCache")]),e._v(" "),a("h3",{attrs:{id:"design-principles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-principles"}},[e._v("#")]),e._v(" Design Principles")]),e._v(" "),a("ol",[a("li",[e._v("SQL can be split in parallel, Q = Q1 ∪ Q2 ... ∪ Qn, R= R1 ∪ R2 ... ∪ Rn, Q is the query statement, R is the result set")]),e._v(" "),a("li",[e._v("Split into read-only partitions and updatable partitions, read-only partitions are cached, and update partitions are not cached")])]),e._v(" "),a("p",[e._v("As above, query the number of users per day in the last 7 days, such as partitioning by date, the data is only written to the partition of the day, and the data of other partitions other than the day is fixed. Under the same query SQL, query a certain part that does not update Partition indicators are fixed. As follows, the number of users in the first 7 days is queried on 2020-03-09, the data from 2020-03-03 to 2020-03-07 comes from the cache, the first query on 2020-03-08 comes from the partition, and subsequent queries come from the cache , 2020-03-09 is from the partition because it is constantly being written that day.")]),e._v(" "),a("p",[e._v("Therefore, when querying N days of data, the data is updated on the most recent D days. Every day is only a query with a different date range and a similar query. Only D partitions need to be queried, and the other parts are from the cache, which can effectively reduce the cluster load and reduce query time.")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("MySQL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" eventdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("userid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("appevent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" eventdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2020-03-03"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("AND")]),e._v(" eventdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2020-03-09"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("GROUP")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" eventdate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ORDER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" eventdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("------------+-----------------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" eventdate  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v("userid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("------------+-----------------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("03")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("04")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("05")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("06")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("07")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("35")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("08")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("40")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//First from partition, subsequent from cache")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("09")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//from partition")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("------------+-----------------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rows")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.02")]),e._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("p",[e._v("In PartitionCache, the first-level key of the cache is the 128-bit MD5 signature of the SQL after the partition condition is removed. The following is the rewritten SQL to be signed:")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" eventdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("userid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("appevent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("GROUP")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" eventdate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ORDER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" eventdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The cached second-level key is the content of the partition field of the query result set, such as the content of the eventdate column of the query result above, and the auxiliary information of the second-level key is the version number and version update time of the partition.")]),e._v(" "),a("p",[e._v("The following demonstrates the process of executing the above SQL for the first time on 2020-03-09:")]),e._v(" "),a("ol",[a("li",[e._v("Get data from cache")])]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+------------+-----------------+\n| 2020-03-03 |              15 |\n| 2020-03-04 |              20 |\n| 2020-03-05 |              25 |\n| 2020-03-06 |              30 |\n| 2020-03-07 |              35 |\n+------------+-----------------+\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("ol",[a("li",[e._v("SQL and data to get data from BE SQL and data to get data from BE")])]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" eventdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("userid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("appevent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" eventdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2020-03-08"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("AND")]),e._v(" eventdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2020-03-09"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("GROUP")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" eventdate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ORDER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" eventdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("------------+-----------------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("08")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("40")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("------------+-----------------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("09")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("------------+-----------------+")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("ol",[a("li",[e._v("The last data sent to the terminal")])]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+------------+-----------------+\n| eventdate  | count(`userid`) |\n+------------+-----------------+\n| 2020-03-03 |              15 |\n| 2020-03-04 |              20 |\n| 2020-03-05 |              25 |\n| 2020-03-06 |              30 |\n| 2020-03-07 |              35 |\n| 2020-03-08 |              40 |\n| 2020-03-09 |              25 |\n+------------+-----------------+\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("ol",[a("li",[e._v("data sent to cache")])]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+------------+-----------------+\n| 2020-03-08 |              40 |\n+------------+-----------------+\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Partition cache is suitable for partitioning by date, some partitions are updated in real time, and the query SQL is relatively fixed.")]),e._v(" "),a("p",[e._v("Partition fields can also be other fields, but need to ensure that only a small number of partition updates.")]),e._v(" "),a("h3",{attrs:{id:"some-restrictions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-restrictions"}},[e._v("#")]),e._v(" Some restrictions")]),e._v(" "),a("ul",[a("li",[e._v("Only OlapTable is supported, other tables such as MySQL have no version information and cannot sense whether the data is updated")]),e._v(" "),a("li",[e._v("Only supports grouping by partition field, does not support grouping by other fields, grouping by other fields, the grouped data may be updated, which will cause the cache to be invalid")]),e._v(" "),a("li",[e._v("Only the first half of the result set, the second half of the result set and all cache hits are supported, and the result set is not supported to be divided into several parts by the cached data")])]),e._v(" "),a("h2",{attrs:{id:"how-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[e._v("#")]),e._v(" How to use")]),e._v(" "),a("h3",{attrs:{id:"enable-sqlcache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-sqlcache"}},[e._v("#")]),e._v(" Enable SQLCache")]),e._v(" "),a("p",[e._v("Make sure cache_enable_sql_mode=true in fe.conf (default is true)")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vim fe/conf/fe.conf\ncache_enable_sql_mode=true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Setting variables in MySQL command line")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("MySQL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" enable_sql_cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Note: global is a global variable, not referring to the current session variable")]),e._v(" "),a("h3",{attrs:{id:"enable-partitioncache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-partitioncache"}},[e._v("#")]),e._v(" Enable PartitionCache")]),e._v(" "),a("p",[e._v("Make sure cache_enable_partition_mode=true in fe.conf (default is true)")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vim fe/conf/fe.conf\ncache_enable_partition_mode=true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Setting variables in MySQL command line")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("MySQL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" enable_partition_cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If two caching strategies are enabled at the same time, the following parameters need to be paid attention to:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cache_last_version_interval_second=900\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If the interval between the latest version of the partition is greater than cache_last_version_interval_second, the entire query result will be cached first. If it is less than this interval, if it meets the conditions of PartitionCache, press PartitionCache data.")]),e._v(" "),a("h3",{attrs:{id:"monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[e._v("#")]),e._v(" Monitoring")]),e._v(" "),a("p",[e._v("FE monitoring items:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("query_table          //Number of tables in Query\nquery_olap_table     //Number of Olap tables in Query\ncache_mode_sql       //Identify the number of queries whose cache mode is sql\ncache_hit_sql        //The number of Cache hits by Query with mode sql\nquery_mode_partition //Identify the number of queries whose cache mode is Partition\ncache_hit_partition  //Number of queries hit by Partition\npartition_all        //All partitions scanned in Query\npartition_hit        //Number of partitions hit by Cache\n\nCache hit ratio = (cache_hit_sql + cache_hit_partition) / query_olap_table\nPartition hit ratio = partition_hit / partition_all\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[e._v("BE's monitoring items:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("query_cache_memory_total_byte     //Cache memory size\nquery_query_cache_sql_total_count //Number of SQL in Cache\nquery_cache_partition_total_count //Number of Cache partitions\n\nSQL average data size = cache_memory_total / cache_sql_total\nPartition average data size = cache_memory_total / cache_partition_total\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("Other monitoring: You can view the CPU and memory indicators of the BE node, the Query Percentile and other indicators in the Query statistics from Grafana, and adjust the Cache parameters to achieve business goals.")]),e._v(" "),a("h3",{attrs:{id:"optimization-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimization-parameters"}},[e._v("#")]),e._v(" Optimization parameters")]),e._v(" "),a("p",[e._v("The configuration item cache_result_max_row_count of FE, the maximum number of rows in the cache for the query result set, can be adjusted according to the actual situation, but it is recommended not to set it too large to avoid taking up too much memory, and the result set exceeding this size will not be cached.")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vim fe/conf/fe.conf\ncache_result_max_row_count=3000\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("The maximum number of partitions in BE cache_max_partition_count refers to the maximum number of partitions corresponding to each SQL. If it is partitioned by date, it can cache data for more than 2 years. If you want to keep the cache for a longer time, please set this parameter to a larger value and modify it at the same time. Parameter of cache_result_max_row_count.")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vim be/conf/be.conf\ncache_max_partition_count=1024\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("The cache memory setting in BE consists of two parameters, query_cache_max_size and query_cache_elasticity_size (in MB). If the memory exceeds query_cache_max_size + cache_elasticity_size, it will start to clean up and control the memory to below query_cache_max_size. These two parameters can be set according to the number of BE nodes, node memory size, and cache hit rate.")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("query_cache_max_size_mb=256\nquery_cache_elasticity_size_mb=128\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Calculation method:")]),e._v(" "),a("p",[e._v("If 10000 queries are cached, each query caches 1000 rows, each row is 128 bytes, distributed on 10 BEs, then each BE requires about 128M memory (10000 * 1000 * 128/10).")]),e._v(" "),a("h2",{attrs:{id:"unfinished-matters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unfinished-matters"}},[e._v("#")]),e._v(" Unfinished Matters")]),e._v(" "),a("ul",[a("li",[e._v("Can the data of T+1 also be cached by Partition? Currently not supported")]),e._v(" "),a("li",[e._v("Similar SQL, 2 indicators were queried before, but now 3 indicators are queried. Can the cache of 2 indicators be used? Not currently supported")]),e._v(" "),a("li",[e._v("Partition by date, but need to aggregate data by week dimension, is PartitionCache available? Not currently supported")])])])}),[],!1,null,null,null);t.default=n.exports}}]);