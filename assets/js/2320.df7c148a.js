(window.webpackJsonp=window.webpackJsonp||[]).push([[2320],{2945:function(s,a,e){"use strict";e.r(a);var t=e(15),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"批量删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#批量删除"}},[s._v("#")]),s._v(" 批量删除")]),s._v(" "),e("p",[s._v("目前Doris 支持broker load， routine load， stream load 等多种导入方式，对于数据的删除目前只能通过delete 语句进行删除，使用delete 语句的方式删除时，每执行一次delete 都会生成一个新的数据版本，如果频繁删除会严重影响查询性能，并且在使用delete 方式删除时，是通过生成一个空的rowset来记录删除条件实现，每次读取都要对删除条件进行过滤，同样在条件较多时会对性能造成影响。对比其他的系统，greenplum 的实现方式更像是传统数据库产品，snowflake 通过merge 语法实现。")]),s._v(" "),e("p",[s._v("对于类似于cdc 数据的导入的场景，数据数据中insert 和delete 一般是穿插出现的，面对这种场景我们目前的导入方式也无法满足，即使我们能够分离出insert 和delete 虽然可以解决导入的问题，但是仍然解决不了删除的问题。使用批量删除功能可以解决这些个场景的需求。\n数据导入有三种合并方式：")]),s._v(" "),e("ol",[e("li",[s._v("APPEND: 数据全部追加到现有数据中")]),s._v(" "),e("li",[s._v("DELETE: 删除所有与导入数据key 列值相同的行")]),s._v(" "),e("li",[s._v("MERGE: 根据 DELETE ON 的决定 APPEND 还是 DELETE")])]),s._v(" "),e("h2",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),e("p",[s._v("通过增加一个隐藏列"),e("code",[s._v("__DORIS_DELETE_SIGN__")]),s._v("实现，因为我们只是在unique 模型上做批量删除，因此只需要增加一个 类型为bool 聚合函数为replace 的隐藏列即可。在be 各种聚合写入流程都和正常列一样，读取方案有两个：")]),s._v(" "),e("p",[s._v("在fe遇到 * 等扩展时去去掉"),e("code",[s._v("__DORIS_DELETE_SIGN__")]),s._v("，并且默认加上 "),e("code",[s._v("__DORIS_DELETE_SIGN__ != true")]),s._v(" 的条件\nbe 读取时都会加上一列进行判断，通过条件确定是否删除。")]),s._v(" "),e("h3",{attrs:{id:"导入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[s._v("#")]),s._v(" 导入")]),s._v(" "),e("p",[s._v("导入时在fe 解析时将隐藏列的值设置成 "),e("code",[s._v("DELETE ON")]),s._v(" 表达式的值，其他的聚合行为和replace的聚合列相同")]),s._v(" "),e("h3",{attrs:{id:"读取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读取"}},[s._v("#")]),s._v(" 读取")]),s._v(" "),e("p",[s._v("读取时在所有存在隐藏列的olapScanNode上增加"),e("code",[s._v("__DORIS_DELETE_SIGN__ != true")]),s._v(" 的条件，be 不感知这以过程，正常执行")]),s._v(" "),e("h3",{attrs:{id:"cumulative-compaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cumulative-compaction"}},[s._v("#")]),s._v(" Cumulative Compaction")]),s._v(" "),e("p",[s._v("Cumulative Compaction 时将隐藏列看作正常的列处理，Compaction逻辑没有变化")]),s._v(" "),e("h3",{attrs:{id:"base-compaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base-compaction"}},[s._v("#")]),s._v(" Base Compaction")]),s._v(" "),e("p",[s._v("Base Compaction 时要将标记为删除的行的删掉，以减少数据占用的空间")]),s._v(" "),e("h3",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),e("p",[s._v("导入的语法设计方面主要是增加一个指定删除标记列的字段的column 映射，并且需要在导入数据中增加这一列，各个导入方式设置的方法如下")]),s._v(" "),e("h4",{attrs:{id:"stream-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[s._v("#")]),s._v(" stream load")]),s._v(" "),e("p",[s._v("stream load 的写法在在header 中的 columns  字段增加一个设置删除标记列的字段， 示例\n"),e("code",[s._v('-H "columns: k1, k2, label_c3" -H "merge_type: [MERGE|APPEND|DELETE]" -H "delete: label_c3=1"')])]),s._v(" "),e("h4",{attrs:{id:"broker-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#broker-load"}},[s._v("#")]),s._v(" broker load")]),s._v(" "),e("p",[s._v("在"),e("code",[s._v("PROPERTIES")]),s._v(" 处设置删除标记列的字段")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('LOAD LABEL db1.label1\n(\n    [MERGE|APPEND|DELETE] DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file1")\n    INTO TABLE tbl1\n    COLUMNS TERMINATED BY ","\n    (tmp_c1,tmp_c2, label_c3)\n    SET\n    (\n        id=tmp_c2,\n        name=tmp_c1,\n    )\n    [DELETE ON label=true]\n\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n    \n);\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("h4",{attrs:{id:"routine-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#routine-load"}},[s._v("#")]),s._v(" routine load")]),s._v(" "),e("p",[s._v("routine load 在"),e("code",[s._v("columns")]),s._v(" 字段增加映射 映射方式同上，示例如下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('   CREATE ROUTINE LOAD example_db.test1 ON example_tbl \n    [WITH MERGE|APPEND|DELETE]\n    COLUMNS(k1, k2, k3, v1, v2, label),\n    WHERE k1 > 100 and k2 like "%doris%"\n    [DELETE ON label=true]\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("h2",{attrs:{id:"启用批量删除支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启用批量删除支持"}},[s._v("#")]),s._v(" 启用批量删除支持")]),s._v(" "),e("p",[s._v("启用批量删除支持 有两种形式：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("通过在fe 配置文件中增加"),e("code",[s._v("enable_batch_delete_by_default=true")]),s._v(" 重启fe 后新建表的都支持批量删除，此选项默认为false")])]),s._v(" "),e("li",[e("p",[s._v("对于没有更改上述fe 配置或对于以存在的不支持批量删除功能的表，可以使用如下语句：\n"),e("code",[s._v('ALTER TABLE tablename ENABLE FEATURE "BATCH_DELETE"')]),s._v(" 来启用批量删除。本操作本质上是一个schema change 操作，操作立即返回，可以通过"),e("code",[s._v("show alter table column")]),s._v(" 来确认操作是否完成。")])])]),s._v(" "),e("p",[s._v("如果确定一个表是否支持批量删除，可以通过 设置一个session variable 来显示隐藏列 "),e("code",[s._v("SET show_hidden_columns=true")]),s._v(" ，之后使用"),e("code",[s._v("desc tablename")]),s._v("，如果输出中有"),e("code",[s._v("__DORIS_DELETE_SIGN__")]),s._v(" 列则支持，如果没有则不支持")]),s._v(" "),e("h2",{attrs:{id:"注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),e("ol",[e("li",[s._v("由于除stream load 外的导入操作在doris 内部有可能乱序执行，因此在使用"),e("code",[s._v("MERGE")]),s._v(" 方式导入时如果不是stream load，需要与 load sequence 一起使用，具体的 语法可以参照sequence列 相关的文档")]),s._v(" "),e("li",[e("code",[s._v("DELETE ON")]),s._v(" 条件只能与 MERGE 一起使用")])]),s._v(" "),e("h2",{attrs:{id:"使用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),e("p",[s._v("下面以stream load 为例 展示下使用方式")]),s._v(" "),e("ol",[e("li",[s._v("正常导入数据：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: APPEND"  -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其中的APPEND 条件可以省略，与下面的语句效果相同：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("将与导入数据key 相同的数据全部删除")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: DELETE"  -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("假设导入表中原有数据为:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      3 |        2 | tom      |    2 |\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("导入数据为：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("3,2,tom,0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("导入后数据变成:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("将导入数据中与"),e("code",[s._v("site_id=1")]),s._v(" 的行的key列相同的行")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: MERGE" -H "delete: siteid=1"  -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("假设导入前数据为：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n|      1 |        1 | jim      |    2 |\n+--------+----------+----------+------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("导入数据为：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("2,1,grace,2\n3,2,tom,2\n1,1,jim,2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("导入后为：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      2 |        1 | grace    |    2 |\n|      3 |        2 | tom      |    2 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);