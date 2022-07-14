(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{663:function(e,n,a){"use strict";a.r(n);var t=a(15),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"apache-doris-incubating-1-0-0-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-doris-incubating-1-0-0-release"}},[e._v("#")]),e._v(" Apache Doris(Incubating) 1.0.0 Release")]),e._v(" "),a("p",[e._v("Dear community friends, after several months, we are happy to announce that Apache Doris (incubating) has officially released the 1.0 Release version on April 18, 2022! "),a("strong",[e._v("This is the first 1-bit version of Apache Doris since it was incubated by the Apache Foundation, and it is also the version with the largest refactoring of the core code of Apache Doris so far")]),e._v("**! **With "),a("strong",[e._v("114 Contributors")]),e._v(" committing "),a("strong",[e._v("over 660 optimizations and fixes")]),e._v(" for Apache Doris, thank you to everyone who makes Apache Doris even better!")]),e._v(" "),a("p",[e._v('In version 1.0, we introduced important functions such as vectorized execution engine, Hive external table, Lateral View syntax and Table Function table function, Z-Order data index, Apache SeaTunnel plug-in, etc., and added support for synchronous update and deletion of data in Flink CDC. Support, optimize many problems in the process of data import and query, and comprehensively enhance the query performance, ease of use, stability and other special effects of Apache Doris. Welcome to download and use! Click "'),a("strong",[e._v("Read the original text")]),e._v('" at the end of the article to go directly to the download address.')]),e._v(" "),a("p",[e._v("Every day that has not been published, there are countless contributors behind it, who dare not stop for half a minute. Here we would like to especially thank the small partners from SIG (Special Interest Group) such as "),a("strong",[e._v("vectorized execution engine, query optimizer, and visual operation and maintenance platform")]),e._v(". Since the establishment of the Apache Doris Community SIG group in August 2021, data from more than ten companies including Baidu, Meituan, Xiaomi, JD, Shuhai, ByteDance, Tencent, NetEase, Alibaba, PingCAP, Nebula Graph, etc. Ten contributors** joined the SIG as the first members, and for the first time completed the development of such major functions as the vectorized execution engine, query optimizer, and Doris Manager visual monitoring operation and maintenance platform in the form of open source collaboration of special groups. "),a("strong",[e._v("During more than half a year, conducting technical research and sharing dozens of times, holding nearly 100 remote meetings, accumulatively submitting hundreds of Commits, involving more than 100,000 lines of code")]),e._v(", it is precisely because of their contributions , only the 1.0 version came out, let us once again express our most sincere thanks for their hard work!")]),e._v(" "),a("p",[e._v("At the same time, the number of Apache Doris contributors has exceeded 300, the number of monthly active contributors has exceeded 60, and the average weekly number of Commits submitted in recent weeks has also exceeded 80. The scale and activity of developers gathered by the community There has been a huge improvement. We are very much looking forward to having more small partners participate in the community contribution, and work with us to build Apache Doris into the world's top analytical database. We also hope that all small partners can reap valuable growth with us. If you would like to participate in the community, please contact us via the developer email dev@doris.apache.org.")]),e._v(" "),a("p",[e._v("We welcome you to contact us with any questions during the use process through GitHub Discussion or Dev mail group, and we look forward to your participation in community discussions and construction.")]),e._v(" "),a("h2",{attrs:{id:"important-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important-update"}},[e._v("#")]),e._v(" Important update")]),e._v(" "),a("h3",{attrs:{id:"vectorized-execution-engine-experimental"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vectorized-execution-engine-experimental"}},[e._v("#")]),e._v(" Vectorized Execution Engine [Experimental]")]),e._v(" "),a("p",[e._v("In the past, the SQL execution engine of Apache Doris was designed based on the row-based memory format and the traditional volcano model. There was unnecessary overhead in performing SQL operator and function operations, which led to the limited efficiency of the Apache Doris execution engine, which did not Adapt to the architecture of modern CPUs. The goal of the vectorized execution engine is to replace the current row-based SQL execution engine of Apache Doris, fully release the computing power of modern CPUs, break through the performance limitations on the SQL execution engine, and exert extreme performance.")]),e._v(" "),a("p",[e._v("Based on the characteristics of modern CPUs and the execution characteristics of the volcano model, the vectorized execution engine redesigned the SQL execution engine in the columnar storage system:")]),e._v(" "),a("ul",[a("li",[e._v("Reorganized the data structure of memory, replaced Tuple with Column, improved Cache affinity, branch prediction and prefetch memory friendliness during calculation")]),e._v(" "),a("li",[e._v("Type judgment is performed in batches. In this batch, the type determined during type judgment is used, and the virtual function cost of type judgment of each line is allocated to the batch level.")]),e._v(" "),a("li",[e._v("Through batch-level type judgment, virtual function calls are eliminated, allowing the compiler to have the opportunity for function inlining and SIMD optimization")])]),e._v(" "),a("p",[e._v("This greatly improves the efficiency of the CPU when executing SQL and improves the performance of SQL queries.")]),e._v(" "),a("p",[e._v("In Apache Doris version 1.0, enabling the vectorized execution engine with set batch_size = 4096 and set enable_vectorized_engine = true can significantly improve query performance in most cases. Under the SSB and OnTime standard test datasets, the overall performance of the two scenarios of multi-table association and wide-column query is improved by 3 times and 2.6 times respectively.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/blogs/1.0/1.0.0-1.png"),alt:""}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/blogs/1.0/1.0.0-2.png"),alt:""}}),e._v(" "),a("h3",{attrs:{id:"lateral-view-grammar-experimental"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lateral-view-grammar-experimental"}},[e._v("#")]),e._v(" Lateral View Grammar [Experimental]")]),e._v(" "),a("p",[e._v("Through Lateral View syntax, we can use Table Function table functions such as explode_bitmap, explode_split, explode_jaon_array, etc., to expand bitmap, String or Json Array from one column into multiple rows, so that the expanded data can be further processed (such as Filter, Join, etc.) .")]),e._v(" "),a("h3",{attrs:{id:"hive-external-table-experimental"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hive-external-table-experimental"}},[e._v("#")]),e._v(" Hive External Table [Experimental]")]),e._v(" "),a("p",[e._v("Hive External Table provides users with the ability to directly access Hive tables through Doris. External tables save the tedious data import work, and can use Doris's own OLAP capabilities to solve data analysis problems of Hive tables. The current version supports connecting Hive data sources to Doris, and supports federated queries through data in Doris and Hive data sources for more complex analysis operations.")]),e._v(" "),a("h3",{attrs:{id:"support-z-order-data-sorting-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support-z-order-data-sorting-format"}},[e._v("#")]),e._v(" Support Z-Order data sorting format")]),e._v(" "),a("p",[e._v("Apache Doris data is sorted and stored according to the prefix column, so when the prefix query condition is included, fast data search can be performed on the sorted data, but if the query condition is not a prefix column, the data sorting feature cannot be used for fast data search. The above problems can be solved by Z-Order Indexing. In version 1.0, we have added the Z-Order data sorting format, which can play a good filtering effect in the scenario of kanban multi-column query and accelerate the filtering performance of non-prefix column conditions. .")]),e._v(" "),a("h3",{attrs:{id:"support-for-apache-seatunnel-incubating-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support-for-apache-seatunnel-incubating-plugin"}},[e._v("#")]),e._v(" Support for Apache SeaTunnel (Incubating) plugin")]),e._v(" "),a("p",[e._v("Apache SeaTunnel is a high-performance distributed data integration framework built on Apache Spark and Apache Flink. In the 1.0 version of Apache Doris, we have added the SaeTunnel plugin, users can use Apache SeaTunnel for synchronization and ETL between multiple data sources.")]),e._v(" "),a("h3",{attrs:{id:"new-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-function"}},[e._v("#")]),e._v(" New Function")]),e._v(" "),a("p",[e._v("More bitmap functions are supported, see the function manual for details:")]),e._v(" "),a("ul",[a("li",[e._v("bitmap_max")]),e._v(" "),a("li",[e._v("bitmap_and_not")]),e._v(" "),a("li",[e._v("bitmap_and_not_count")]),e._v(" "),a("li",[e._v("bitmap_has_all")]),e._v(" "),a("li",[e._v("bitmap_and_count")]),e._v(" "),a("li",[e._v("bitmap_or_count")]),e._v(" "),a("li",[e._v("bitmap_xor_count")]),e._v(" "),a("li",[e._v("bitmap_subset_limit")]),e._v(" "),a("li",[e._v("sub_bitmap")])]),e._v(" "),a("p",[e._v("Support national secret algorithm SM3/SM4;")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(": The functions marked [Experimental] above are experimental functions. We will continue to optimize and iterate on the above functions in subsequent versions, and further improve them in subsequent versions. If you have any questions or comments during use, please feel free to contact us")])]),e._v(" "),a("h3",{attrs:{id:"important-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important-optimization"}},[e._v("#")]),e._v(" Important Optimization")]),e._v(" "),a("h3",{attrs:{id:"features-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features-optimization"}},[e._v("#")]),e._v(" Features Optimization")]),e._v(" "),a("ul",[a("li",[e._v("Reduced the number of segment files generated when importing in large batches to reduce Compaction pressure.")]),e._v(" "),a("li",[e._v("Transfer data through BRPC's attachment function to reduce serialization and deserialization overhead during query.")]),e._v(" "),a("li",[e._v("Support to directly return binary data of HLL/BITMAP type for external analysis of business.")]),e._v(" "),a("li",[e._v("Optimize and reduce the probability of OVERCROWDED and NOT_CONNECTED errors in BRPC, and enhance system stability.")]),e._v(" "),a("li",[e._v("Enhance the fault tolerance of import.")]),e._v(" "),a("li",[e._v("Support to update and delete data synchronously through Flink CDC.")]),e._v(" "),a("li",[e._v("Support adaptive Runtime Filter.")]),e._v(" "),a("li",[e._v("Significantly reduce the memory footprint of insert into operations")])]),e._v(" "),a("h3",{attrs:{id:"usability-improvements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usability-improvements"}},[e._v("#")]),e._v(" Usability Improvements")]),e._v(" "),a("ul",[a("li",[e._v("Routine Load supports displaying the current offset delay number and other status.")]),e._v(" "),a("li",[e._v("Added statistics on peak memory usage of queries in FE audit log.")]),e._v(" "),a("li",[e._v("Added missing version information to Compaction URL results to facilitate troubleshooting.")]),e._v(" "),a("li",[e._v("Support marking BE as non-queryable or non-importable to quickly screen problem nodes.")])]),e._v(" "),a("h3",{attrs:{id:"important-bug-fixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important-bug-fixes"}},[e._v("#")]),e._v(" Important Bug Fixes")]),e._v(" "),a("ul",[a("li",[e._v("Fixed several query errors.")]),e._v(" "),a("li",[e._v("Fixed some scheduling logic issues in Broker Load.")]),e._v(" "),a("li",[e._v("Fix the problem that the metadata cannot be loaded due to the STREAM keyword.")]),e._v(" "),a("li",[e._v("Fixed Decommission not executing correctly.")]),e._v(" "),a("li",[e._v("Fix the problem that -102 error may occur when operating Schema Change operation in some cases.")]),e._v(" "),a("li",[e._v("Fix the problem that using String type may cause BE to crash in some cases.")])]),e._v(" "),a("h3",{attrs:{id:"other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[e._v("#")]),e._v(" Other")]),e._v(" "),a("ul",[a("li",[e._v("Added Minidump function; easy to locate when problems occur")])]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("p",[e._v("For detailed Release Note, please check the link:")]),e._v(" "),a("p",[e._v("https://github.com/apache/incubator-doris/issues/8549")]),e._v(" "),a("h2",{attrs:{id:"thanks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thanks"}},[e._v("#")]),e._v(" Thanks")]),e._v(" "),a("p",[e._v("The release of Apache Doris(incubating) 1.0 Release version is inseparable from the support of all community users. I would like to express my gratitude to all community contributors who participated in version design, development, testing and discussion. They are:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@924060929\n@adonis0147\n@Aiden-Dong\n@aihai\n@airborne12\n@Alibaba-HZY\n@amosbird\n@arthuryangcs\n@awakeljw\n@bingzxy\n@BiteTheDDDDt\n@blackstar-baba\n@caiconghui\n@CalvinKirs\n@cambyzju\n@caoliang-web\n@ccoffline\n@chaplinthink\n@chovy-3012\n@ChPi\n@DarvenDuan\n@dataalive\n@dataroaring\n@dh-cloud\n@dohongdayi\n@dongweizhao\n@drgnchan\n@e0c9\n@EmmyMiao87\n@englefly\n@eyesmoons\n@freemandealer\n@Gabriel39\n@gaodayue\n@GoGoWen\n@Gongruixiao\n@gwdgithubnom\n@HappenLee\n@Henry2SS\n@hf200012\n@htyoung\n@jacktengg\n@jackwener\n@JNSimba\n@Keysluomo\n@kezhenxu94\n@killxdcj\n@lihuigang\n@littleeleventhwolf\n@liutang123\n@liuzhuang2017\n@lonre\n@lovingfeel\n@luozenglin\n@luzhijing\n@MeiontheTop\n@mh-boy\n@morningman\n@mrhhsg\n@Myasuka\n@nimuyuhan\n@obobj\n@pengxiangyu\n@qidaye\n@qzsee\n@renzhimin7\n@Royce33\n@SleepyBear96\n@smallhibiscus\n@sodamnsure\n@spaces-X\n@sparklezzz\n@stalary\n@steadyBoy\n@tarepanda1024\n@THUMarkLau\n@tianhui5\n@tinkerrrr\n@ucasfl\n@Userwhite\n@vinson0526\n@wangbo\n@wangshuo128\n@wangyf0555\n@weajun\n@weizuo93\n@whutpencil\n@WindyGao\n@wunan1210\n@xiaokang\n@xiaokangguo\n@xiedeyantu\n@xinghuayu007\n@xingtanzjr\n@xinyiZzz\n@xtr1993\n@xu20160924\n@xuliuzhe\n@xuzifu666\n@xy720\n@yangzhg\n@yiguolei\n@yinzhijian\n@yjant\n@zbtzbtzbt\n@zenoyang\n@zh0122\n@zhangstar333\n@zhannngchen\n@zhengshengjun\n@zhengshiJ\n@ZhikaiZuo\n@ztgoto\n@zuochunwei\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br"),a("span",{staticClass:"line-number"},[e._v("48")]),a("br"),a("span",{staticClass:"line-number"},[e._v("49")]),a("br"),a("span",{staticClass:"line-number"},[e._v("50")]),a("br"),a("span",{staticClass:"line-number"},[e._v("51")]),a("br"),a("span",{staticClass:"line-number"},[e._v("52")]),a("br"),a("span",{staticClass:"line-number"},[e._v("53")]),a("br"),a("span",{staticClass:"line-number"},[e._v("54")]),a("br"),a("span",{staticClass:"line-number"},[e._v("55")]),a("br"),a("span",{staticClass:"line-number"},[e._v("56")]),a("br"),a("span",{staticClass:"line-number"},[e._v("57")]),a("br"),a("span",{staticClass:"line-number"},[e._v("58")]),a("br"),a("span",{staticClass:"line-number"},[e._v("59")]),a("br"),a("span",{staticClass:"line-number"},[e._v("60")]),a("br"),a("span",{staticClass:"line-number"},[e._v("61")]),a("br"),a("span",{staticClass:"line-number"},[e._v("62")]),a("br"),a("span",{staticClass:"line-number"},[e._v("63")]),a("br"),a("span",{staticClass:"line-number"},[e._v("64")]),a("br"),a("span",{staticClass:"line-number"},[e._v("65")]),a("br"),a("span",{staticClass:"line-number"},[e._v("66")]),a("br"),a("span",{staticClass:"line-number"},[e._v("67")]),a("br"),a("span",{staticClass:"line-number"},[e._v("68")]),a("br"),a("span",{staticClass:"line-number"},[e._v("69")]),a("br"),a("span",{staticClass:"line-number"},[e._v("70")]),a("br"),a("span",{staticClass:"line-number"},[e._v("71")]),a("br"),a("span",{staticClass:"line-number"},[e._v("72")]),a("br"),a("span",{staticClass:"line-number"},[e._v("73")]),a("br"),a("span",{staticClass:"line-number"},[e._v("74")]),a("br"),a("span",{staticClass:"line-number"},[e._v("75")]),a("br"),a("span",{staticClass:"line-number"},[e._v("76")]),a("br"),a("span",{staticClass:"line-number"},[e._v("77")]),a("br"),a("span",{staticClass:"line-number"},[e._v("78")]),a("br"),a("span",{staticClass:"line-number"},[e._v("79")]),a("br"),a("span",{staticClass:"line-number"},[e._v("80")]),a("br"),a("span",{staticClass:"line-number"},[e._v("81")]),a("br"),a("span",{staticClass:"line-number"},[e._v("82")]),a("br"),a("span",{staticClass:"line-number"},[e._v("83")]),a("br"),a("span",{staticClass:"line-number"},[e._v("84")]),a("br"),a("span",{staticClass:"line-number"},[e._v("85")]),a("br"),a("span",{staticClass:"line-number"},[e._v("86")]),a("br"),a("span",{staticClass:"line-number"},[e._v("87")]),a("br"),a("span",{staticClass:"line-number"},[e._v("88")]),a("br"),a("span",{staticClass:"line-number"},[e._v("89")]),a("br"),a("span",{staticClass:"line-number"},[e._v("90")]),a("br"),a("span",{staticClass:"line-number"},[e._v("91")]),a("br"),a("span",{staticClass:"line-number"},[e._v("92")]),a("br"),a("span",{staticClass:"line-number"},[e._v("93")]),a("br"),a("span",{staticClass:"line-number"},[e._v("94")]),a("br"),a("span",{staticClass:"line-number"},[e._v("95")]),a("br"),a("span",{staticClass:"line-number"},[e._v("96")]),a("br"),a("span",{staticClass:"line-number"},[e._v("97")]),a("br"),a("span",{staticClass:"line-number"},[e._v("98")]),a("br"),a("span",{staticClass:"line-number"},[e._v("99")]),a("br"),a("span",{staticClass:"line-number"},[e._v("100")]),a("br"),a("span",{staticClass:"line-number"},[e._v("101")]),a("br"),a("span",{staticClass:"line-number"},[e._v("102")]),a("br"),a("span",{staticClass:"line-number"},[e._v("103")]),a("br"),a("span",{staticClass:"line-number"},[e._v("104")]),a("br"),a("span",{staticClass:"line-number"},[e._v("105")]),a("br"),a("span",{staticClass:"line-number"},[e._v("106")]),a("br"),a("span",{staticClass:"line-number"},[e._v("107")]),a("br"),a("span",{staticClass:"line-number"},[e._v("108")]),a("br"),a("span",{staticClass:"line-number"},[e._v("109")]),a("br"),a("span",{staticClass:"line-number"},[e._v("110")]),a("br"),a("span",{staticClass:"line-number"},[e._v("111")]),a("br"),a("span",{staticClass:"line-number"},[e._v("112")]),a("br"),a("span",{staticClass:"line-number"},[e._v("113")]),a("br"),a("span",{staticClass:"line-number"},[e._v("114")]),a("br")])])])}),[],!1,null,null,null);n.default=s.exports}}]);