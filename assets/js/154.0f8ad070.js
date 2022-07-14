(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{781:function(e,t,a){"use strict";a.r(t);var s=a(15),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"bucket-shuffle-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bucket-shuffle-join"}},[e._v("#")]),e._v(" Bucket Shuffle Join")]),e._v(" "),a("p",[e._v("Bucket Shuffle Join is a new function officially added in Doris 0.14. The purpose is to provide local optimization for some join queries to reduce the time-consuming of data transmission between nodes and speed up the query.")]),e._v(" "),a("p",[e._v("It's design, implementation can be referred to "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/issues/4394",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISSUE 4394"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"noun-interpretation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),a("ul",[a("li",[e._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),e._v(" "),a("li",[e._v("BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")]),e._v(" "),a("li",[e._v("Left table: the left table in join query. Perform probe expr. The order can be adjusted by join reorder.")]),e._v(" "),a("li",[e._v("Right table: the right table in join query. Perform build expr The order can be adjusted by join reorder.")])]),e._v(" "),a("h2",{attrs:{id:"principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),a("p",[e._v("The conventional distributed join methods supported by Doris is: "),a("code",[e._v("Shuffle Join, Broadcast Join")]),e._v(". Both of these join will lead to some network overhead.")]),e._v(" "),a("p",[e._v("For example, there are join queries for table A and table B. the join method is hashjoin. The cost of different join types is as follows：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Broadcast Join")]),e._v(": If table a has three executing hashjoinnodes according to the data distribution, table B needs to be sent to the three HashJoinNode. Its network overhead is "),a("code",[e._v("3B")]),e._v(", and its memory overhead is "),a("code",[e._v("3B")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("Shuffle Join")]),e._v(": Shuffle join will distribute the data of tables A and B to the nodes of the cluster according to hash calculation, so its network overhead is "),a("code",[e._v("A + B")]),e._v(" and memory overhead is "),a("code",[e._v("B")]),e._v(".")])]),e._v(" "),a("p",[e._v("The data distribution information of each Doris table is saved in FE. If the join statement hits the data distribution column of the left table, we should use the data distribution information to reduce the network and memory overhead of the join query. This is the source of the idea of bucket shuffle join.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/bucket_shuffle_join.png"),alt:"image.png"}}),e._v(" "),a("p",[e._v("The picture above shows how the Bucket Shuffle Join works. The SQL query is A table join B table. The equivalent expression of join hits the data distribution column of A. According to the data distribution information of table A. Bucket Shuffle Join sends the data of table B to the corresponding data storage and calculation node of table A. The cost of Bucket Shuffle Join is as follows:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("network cost： "),a("code",[e._v("B < min(3B, A + B)")])])]),e._v(" "),a("li",[a("p",[e._v("memory cost： "),a("code",[e._v("B <= min(3B, B)")])])])]),e._v(" "),a("p",[e._v("Therefore, compared with Broadcast Join and Shuffle Join, Bucket shuffle join has obvious performance advantages. It reduces the time-consuming of data transmission between nodes and the memory cost of join. Compared with Doris's original join method, it has the following advantages")]),e._v(" "),a("ul",[a("li",[e._v("First of all, Bucket Shuffle Join reduces the network and memory cost which makes some join queries have better performance. Especially when FE can perform partition clipping and bucket clipping of the left table.")]),e._v(" "),a("li",[e._v("Secondly, unlike Colorate Join, it is not intrusive to the data distribution of tables, which is transparent to users. There is no mandatory requirement for the data distribution of the table, which is not easy to lead to the problem of data skew.")]),e._v(" "),a("li",[e._v("Finally, it can provide more optimization space for join reorder.")])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("h3",{attrs:{id:"set-session-variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-session-variable"}},[e._v("#")]),e._v(" Set session variable")]),e._v(" "),a("p",[e._v("Set session variable "),a("code",[e._v("enable_bucket_shuffle_join")]),e._v(" to "),a("code",[e._v("true")]),e._v(", FE will automatically plan queries that can be converted to Bucket Shuffle Join.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("set enable_bucket_shuffle_join = true;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("In FE's distributed query planning, the priority order is Colorate Join -> Bucket Shuffle Join -> Broadcast Join -> Shuffle Join. However, if the user explicitly hints the type of join, for example:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from test join [shuffle] baseall on test.k1 = baseall.k1;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("the above order of preference will not take effect.")]),e._v(" "),a("p",[e._v("The session variable is set to "),a("code",[e._v("true")]),e._v(" by default in version 0.14, while it needs to be set to "),a("code",[e._v("true")]),e._v(" manually in version 0.13.")]),e._v(" "),a("h3",{attrs:{id:"view-the-type-of-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-the-type-of-join"}},[e._v("#")]),e._v(" View the type of join")]),e._v(" "),a("p",[e._v("You can use the "),a("code",[e._v("explain")]),e._v(" command to check whether the join is a Bucket Shuffle Join")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("HASH")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),e._v("                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("join")]),e._v(" op: "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INNER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("BUCKET_SHUFFLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("hash")]),e._v(" predicates:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("  colocate: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" reason: "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("table")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("not")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" the same "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("group")]),e._v("                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("  equal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("join")]),e._v(" conjunct: "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v("k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v("baseall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v("k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")])]),e._v("                                         \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("The join type indicates that the join method to be used is："),a("code",[e._v("BUCKET_SHUFFLE")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"planning-rules-of-bucket-shuffle-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#planning-rules-of-bucket-shuffle-join"}},[e._v("#")]),e._v(" Planning rules of Bucket Shuffle Join")]),e._v(" "),a("p",[e._v("In most scenarios, users only need to turn on the session variable by default to transparently use the performance improvement brought by this join method. However, if we understand the planning rules of Bucket Shuffle Join, we can use it to write more efficient SQL.")]),e._v(" "),a("ul",[a("li",[e._v("Bucket Shuffle Join only works when the join condition is equivalent. The reason is similar to Colorate Join. They all rely on hash to calculate the determined data distribution.")]),e._v(" "),a("li",[e._v("The bucket column of two tables is included in the equivalent join condition. When the bucket column of the left table is an equivalent join condition, it has a high probability of being planned as a Bucket Shuffle Join.")]),e._v(" "),a("li",[e._v("Because the hash values of different data types have different calculation results. Bucket Shuffle Join requires that the bucket column type of the left table and the equivalent join column type of the right table should be consistent, otherwise the corresponding planning cannot be carried out.")]),e._v(" "),a("li",[e._v("Bucket Shuffle Join only works on Doris native OLAP tables. For ODBC, MySQL, ES External Table, when they are used as left tables, they cannot be planned as Bucket Shuffle Join.")]),e._v(" "),a("li",[e._v("For partitioned tables, because the data distribution rules of each partition may be different, the Bucket Shuffle Join can only guarantee that the left table is a single partition. Therefore, in SQL execution, we need to use the "),a("code",[e._v("where")]),e._v(" condition as far as possible to make the partition clipping policy effective.")]),e._v(" "),a("li",[e._v("If the left table is a colorate table, the data distribution rules of each partition are determined. So the bucket shuffle join can perform better on the colorate table.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);