(window.webpackJsonp=window.webpackJsonp||[]).push([[745],{1370:function(s,t,e){"use strict";e.r(t);var a=e(15),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"bucket-shuffle-join"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bucket-shuffle-join"}},[s._v("#")]),s._v(" Bucket Shuffle Join")]),s._v(" "),e("p",[s._v("Bucket Shuffle Join 是在 Doris 0.14 版本中正式加入的新功能。旨在为某些 Join 查询提供本地性优化，来减少数据在节点间的传输耗时，来加速查询。")]),s._v(" "),e("p",[s._v("它的设计、实现和效果可以参阅 "),e("a",{attrs:{href:"https://github.com/apache/incubator-doris/issues/4394",target:"_blank",rel:"noopener noreferrer"}},[s._v("ISSUE 4394"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"名词解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[s._v("#")]),s._v(" 名词解释")]),s._v(" "),e("ul",[e("li",[s._v("左表：Join查询时，左边的表。进行Probe操作。可被Join Reorder调整顺序。")]),s._v(" "),e("li",[s._v("右表：Join查询时，右边的表。进行Build操作。可被Join Reorder调整顺序。")])]),s._v(" "),e("h2",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),e("p",[s._v("Doris支持的常规分布式Join方式包括了shuffle join 和broadcast join。这两种join都会导致不小的网络开销:")]),s._v(" "),e("p",[s._v("举个例子，当前存在A表与B表的Join查询，它的Join方式为HashJoin，不同Join类型的开销如下：")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("Broadcast Join")]),s._v(": 如果根据数据分布，查询规划出A表有3个执行的HashJoinNode，那么需要将B表全量的发送到3个HashJoinNode，那么它的网络开销是"),e("code",[s._v("3B")]),s._v("，它的内存开销也是"),e("code",[s._v("3B")]),s._v("。")]),s._v(" "),e("li",[e("strong",[s._v("Shuffle Join")]),s._v(": Shuffle Join会将A，B两张表的数据根据哈希计算分散到集群的节点之中，所以它的网络开销为 "),e("code",[s._v("A + B")]),s._v("，内存开销为"),e("code",[s._v("B")]),s._v("。")])]),s._v(" "),e("p",[s._v("在FE之中保存了Doris每个表的数据分布信息，如果join语句命中了表的数据分布列，我们应该使用数据分布信息来减少join语句的网络与内存开销，这就是Bucket Shuffle Join的思路来源。")]),s._v(" "),e("img",{attrs:{src:s.$withBase("https://doris.apache.org/images/bucket_shuffle_join.png"),alt:"image.png"}}),s._v(" "),e("p",[s._v("上面的图片展示了Bucket Shuffle Join的工作原理。SQL语句为 A表 join B表，并且join的等值表达式命中了A的数据分布列。而Bucket Shuffle Join会根据A表的数据分布信息，将B表的数据发送到对应的A表的数据存储计算节点。Bucket Shuffle Join开销如下：")]),s._v(" "),e("ul",[e("li",[s._v("网络开销： "),e("code",[s._v("B < min(3B, A + B)")])]),s._v(" "),e("li",[s._v("内存开销： "),e("code",[s._v("B <= min(3B, B)")])])]),s._v(" "),e("p",[s._v("可见，相比于Broadcast Join与Shuffle Join， Bucket Shuffle Join有着较为明显的性能优势。减少数据在节点间的传输耗时和Join时的内存开销。相对于Doris原有的Join方式，它有着下面的优点")]),s._v(" "),e("ul",[e("li",[s._v("首先，Bucket-Shuffle-Join降低了网络与内存开销，使一些Join查询具有了更好的性能。尤其是当FE能够执行左表的分区裁剪与桶裁剪时。")]),s._v(" "),e("li",[s._v("其次，同时与Colocate Join不同，它对于表的数据分布方式并没有侵入性，这对于用户来说是透明的。对于表的数据分布没有强制性的要求，不容易导致数据倾斜的问题。")]),s._v(" "),e("li",[s._v("最后，它可以为Join Reorder提供更多可能的优化空间。")])]),s._v(" "),e("h2",{attrs:{id:"使用方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),e("h3",{attrs:{id:"设置session变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置session变量"}},[s._v("#")]),s._v(" 设置Session变量")]),s._v(" "),e("p",[s._v("将session变量"),e("code",[s._v("enable_bucket_shuffle_join")]),s._v("设置为"),e("code",[s._v("true")]),s._v("，则FE在进行查询规划时就会默认将能够转换为Bucket Shuffle Join的查询自动规划为Bucket Shuffle Join。")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" enable_bucket_shuffle_join "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在FE进行分布式查询规划时，优先选择的顺序为 Colocate Join -> Bucket Shuffle Join -> Broadcast Join -> Shuffle Join。但是如果用户显式hint了Join的类型，如：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("shuffle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" baseall "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("k1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" baseall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("k1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("则上述的选择优先顺序则不生效。")]),s._v(" "),e("p",[s._v("该session变量在0.14版本默认为"),e("code",[s._v("true")]),s._v(", 而0.13版本需要手动设置为"),e("code",[s._v("true")]),s._v("。")]),s._v(" "),e("h3",{attrs:{id:"查看join的类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看join的类型"}},[s._v("#")]),s._v(" 查看Join的类型")]),s._v(" "),e("p",[s._v("可以通过"),e("code",[s._v("explain")]),s._v("命令来查看Join是否为Bucket Shuffle Join：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HASH")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v("                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" op: "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BUCKET_SHUFFLE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hash")]),s._v(" predicates:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  colocate: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reason: "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" the same "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v("                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  equal "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" conjunct: "),e("span",{pre:!0,attrs:{class:"token identifier"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token identifier"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("k1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token identifier"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("baseall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token identifier"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("k1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("                                         \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("在Join类型之中会指明使用的Join方式为："),e("code",[s._v("BUCKET_SHUFFLE")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"bucket-shuffle-join的规划规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bucket-shuffle-join的规划规则"}},[s._v("#")]),s._v(" Bucket Shuffle Join的规划规则")]),s._v(" "),e("p",[s._v("在绝大多数场景之中，用户只需要默认打开session变量的开关就可以透明的使用这种Join方式带来的性能提升，但是如果了解Bucket Shuffle Join的规划规则，可以帮助我们利用它写出更加高效的SQL。")]),s._v(" "),e("ul",[e("li",[s._v("Bucket Shuffle Join只生效于Join条件为等值的场景，原因与Colocate Join类似，它们都依赖hash来计算确定的数据分布。")]),s._v(" "),e("li",[s._v("在等值Join条件之中包含两张表的分桶列，当左表的分桶列为等值的Join条件时，它有很大概率会被规划为Bucket Shuffle Join。")]),s._v(" "),e("li",[s._v("由于不同的数据类型的hash值计算结果不同，所以Bucket Shuffle Join要求左表的分桶列的类型与右表等值join列的类型需要保持一致，否则无法进行对应的规划。")]),s._v(" "),e("li",[s._v("Bucket Shuffle Join只作用于Doris原生的OLAP表，对于ODBC，MySQL，ES等外表，当其作为左表时是无法规划生效的。")]),s._v(" "),e("li",[s._v("对于分区表，由于每一个分区的数据分布规则可能不同，所以Bucket Shuffle Join只能保证左表为单分区时生效。所以在SQL执行之中，需要尽量使用"),e("code",[s._v("where")]),s._v("条件使分区裁剪的策略能够生效。")]),s._v(" "),e("li",[s._v("假如左表为Colocate的表，那么它每个分区的数据分布规则是确定的，Bucket Shuffle Join能在Colocate表上表现更好。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);