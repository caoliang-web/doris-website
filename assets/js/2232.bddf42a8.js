(window.webpackJsonp=window.webpackJsonp||[]).push([[2232],{2857:function(e,t,s){"use strict";s.r(t);var a=s(15),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"insert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[e._v("#")]),e._v(" INSERT")]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INSERT INTO table_name\n    [ PARTITION (p1, ...) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h3",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("blockquote",[s("p",[e._v("tablet_name: 导入数据的目的表。可以是 "),s("code",[e._v("db_name.table_name")]),e._v(" 形式")]),e._v(" "),s("p",[e._v("partitions: 指定待导入的分区，必须是 "),s("code",[e._v("table_name")]),e._v(" 中存在的分区，多个分区名称用逗号分隔")]),e._v(" "),s("p",[e._v("label: 为 Insert 任务指定一个 label")]),e._v(" "),s("p",[e._v("column_name: 指定的目的列，必须是 "),s("code",[e._v("table_name")]),e._v(" 中存在的列")]),e._v(" "),s("p",[e._v("expression: 需要赋值给某个列的对应表达式")]),e._v(" "),s("p",[e._v("DEFAULT: 让对应列使用默认值")]),e._v(" "),s("p",[e._v("query: 一个普通查询，查询的结果会写入到目标中")]),e._v(" "),s("p",[e._v("hint: 用于指示 "),s("code",[e._v("INSERT")]),e._v(" 执行行为的一些指示符。"),s("code",[e._v("streaming")]),e._v(" 和 默认的非 "),s("code",[e._v("streaming")]),e._v(" 方式均会使用同步方式完成 "),s("code",[e._v("INSERT")]),e._v(" 语句执行\n非 "),s("code",[e._v("streaming")]),e._v(" 方式在执行完成后会返回一个 label 方便用户通过 "),s("code",[e._v("SHOW LOAD")]),e._v(" 查询导入的状态")])]),e._v(" "),s("h3",{attrs:{id:"note"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),s("p",[e._v("当前执行 "),s("code",[e._v("INSERT")]),e._v(" 语句时，对于有不符合目标表格式的数据，默认的行为是过滤，比如字符串超长等。但是对于有要求数据不能够被过滤的业务场景，可以通过设置会话变量 "),s("code",[e._v("enable_insert_strict")]),e._v(" 为 "),s("code",[e._v("true")]),e._v(" 来确保当有数据被过滤掉的时候，"),s("code",[e._v("INSERT")]),e._v(" 不会被执行成功。")]),e._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),s("p",[s("code",[e._v("test")]),e._v(" 表包含两个列"),s("code",[e._v("c1")]),e._v(", "),s("code",[e._v("c2")]),e._v("。")]),e._v(" "),s("ol",[s("li",[e._v("向"),s("code",[e._v("test")]),e._v("表中导入一行数据")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("其中第一条、第二条语句是一样的效果。在不指定目标列时，使用表中的列顺序来作为默认的目标列。\n第三条、第四条语句表达的意思是一样的，使用"),s("code",[e._v("c2")]),e._v("列的默认值，来完成数据导入。")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("向"),s("code",[e._v("test")]),e._v("表中一次性导入多行数据")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INSERT INTO test VALUES (1, 2), (3, 2 + 2);\nINSERT INTO test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT INTO test (c1) VALUES (1), (3);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("其中第一条、第二条语句效果一样，向"),s("code",[e._v("test")]),e._v("表中一次性导入两条数据\n第三条、第四条语句效果已知，使用"),s("code",[e._v("c2")]),e._v("列的默认值向"),s("code",[e._v("test")]),e._v("表中导入两条数据")]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("向 "),s("code",[e._v("test")]),e._v(" 表中导入一个查询语句结果")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INSERT INTO test SELECT * FROM test2;\nINSERT INTO test (c1, c2) SELECT * from test2;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("向 "),s("code",[e._v("test")]),e._v(" 表中导入一个查询语句结果，并指定 partition 和 label")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INSERT INTO test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test2;\nINSERT INTO test WITH LABEL `label1` (c1, c2) SELECT * from test2;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("异步的导入其实是，一个同步的导入封装成了异步。填写 streaming 和不填写的"),s("strong",[e._v("执行效率是一样")]),e._v("的。")]),e._v(" "),s("p",[e._v("由于Doris之前的导入方式都是异步导入方式，为了兼容旧有的使用习惯，不加 streaming 的 "),s("code",[e._v("INSERT")]),e._v(" 语句依旧会返回一个 label，用户需要通过"),s("code",[e._v("SHOW LOAD")]),e._v("命令查看此"),s("code",[e._v("label")]),e._v("导入作业的状态。")]),e._v(" "),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("INSERT\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);