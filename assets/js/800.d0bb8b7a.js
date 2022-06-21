(window.webpackJsonp=window.webpackJsonp||[]).push([[800],{1424:function(t,s,e){"use strict";e.r(s);var a=e(15),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"前缀索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前缀索引"}},[t._v("#")]),t._v(" 前缀索引")]),t._v(" "),e("h2",{attrs:{id:"基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),e("p",[t._v("不同于传统的数据库设计，Doris 不支持在任意列上创建索引。Doris 这类 MPP 架构的 OLAP 数据库，通常都是通过提高并发，来处理大量数据的。")]),t._v(" "),e("p",[t._v("本质上，Doris 的数据存储在类似 SSTable（Sorted String Table）的数据结构中。该结构是一种有序的数据结构，可以按照指定的列进行排序存储。在这种数据结构上，以排序列作为条件进行查找，会非常的高效。")]),t._v(" "),e("p",[t._v("在 Aggregate、Unique 和 Duplicate 三种数据模型中。底层的数据存储，是按照各自建表语句中，AGGREGATE KEY、UNIQUE KEY 和 DUPLICATE KEY 中指定的列进行排序存储的。")]),t._v(" "),e("p",[t._v("而前缀索引，即在排序的基础上，实现的一种根据给定前缀列，快速查询数据的索引方式。")]),t._v(" "),e("h2",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("p",[t._v("我们将一行数据的前 "),e("strong",[t._v("36 个字节")]),t._v(" 作为这行数据的前缀索引。当遇到 VARCHAR 类型时，前缀索引会直接截断。我们举例说明：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("以下表结构的前缀索引为 user_id(8 Bytes) + age(4 Bytes) + message(prefix 20 Bytes)。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("ColumnName")]),t._v(" "),e("th",[t._v("Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("user_id")]),t._v(" "),e("td",[t._v("BIGINT")])]),t._v(" "),e("tr",[e("td",[t._v("age")]),t._v(" "),e("td",[t._v("INT")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("VARCHAR(100)")])]),t._v(" "),e("tr",[e("td",[t._v("max_dwell_time")]),t._v(" "),e("td",[t._v("DATETIME")])]),t._v(" "),e("tr",[e("td",[t._v("min_dwell_time")]),t._v(" "),e("td",[t._v("DATETIME")])])])])]),t._v(" "),e("li",[e("p",[t._v("以下表结构的前缀索引为 user_name(20 Bytes)。即使没有达到 36 个字节，因为遇到 VARCHAR，所以直接截断，不再往后继续。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("ColumnName")]),t._v(" "),e("th",[t._v("Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("user_name")]),t._v(" "),e("td",[t._v("VARCHAR(20)")])]),t._v(" "),e("tr",[e("td",[t._v("age")]),t._v(" "),e("td",[t._v("INT")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("VARCHAR(100)")])]),t._v(" "),e("tr",[e("td",[t._v("max_dwell_time")]),t._v(" "),e("td",[t._v("DATETIME")])]),t._v(" "),e("tr",[e("td",[t._v("min_dwell_time")]),t._v(" "),e("td",[t._v("DATETIME")])])])])])]),t._v(" "),e("p",[t._v("当我们的查询条件，是"),e("strong",[t._v("前缀索引的前缀")]),t._v("时，可以极大的加快查询速度。比如在第一个例子中，我们执行如下查询：")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" user_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1829239")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" age"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("；\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("该查询的效率会"),e("strong",[t._v("远高于")]),t._v("如下查询：")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" age"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("；\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("所以在建表时，"),e("strong",[t._v("正确的选择列顺序，能够极大地提高查询效率")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"通过rollup来调整前缀索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过rollup来调整前缀索引"}},[t._v("#")]),t._v(" 通过ROLLUP来调整前缀索引")]),t._v(" "),e("p",[t._v("因为建表时已经指定了列顺序，所以一个表只有一种前缀索引。这对于使用其他不能命中前缀索引的列作为条件进行的查询来说，效率上可能无法满足需求。因此，我们可以通过创建 ROLLUP 来人为的调整列顺序。详情可参考"),e("RouterLink",{attrs:{to:"/zh-CN/docs/data-table/hit-the-rollup.html"}},[t._v("ROLLUP")]),t._v("。")],1)])}),[],!1,null,null,null);s.default=_.exports}}]);