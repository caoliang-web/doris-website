(window.webpackJsonp=window.webpackJsonp||[]).push([[793],{1421:function(t,a,r){"use strict";r.r(a);var o=r(15),e=Object(o.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"导入总览"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导入总览"}},[t._v("#")]),t._v(" 导入总览")]),t._v(" "),r("h2",{attrs:{id:"支持的数据源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#支持的数据源"}},[t._v("#")]),t._v(" 支持的数据源")]),t._v(" "),r("p",[t._v("Doris 提供多种数据导入方案，可以针对不同的数据源进行选择不同的数据导入方式。")]),t._v(" "),r("h3",{attrs:{id:"按场景划分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#按场景划分"}},[t._v("#")]),t._v(" 按场景划分")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("数据源")]),t._v(" "),r("th",[t._v("导入方式")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("对象存储（s3）,HDFS")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-scenes/external-storage-load.html"}},[t._v("使用Broker导入数据")])],1)]),t._v(" "),r("tr",[r("td",[t._v("本地文件")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-scenes/local-file-load.html"}},[t._v("导入本地数据")])],1)]),t._v(" "),r("tr",[r("td",[t._v("Kafka")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-scenes/kafka-load.html"}},[t._v("订阅Kafka数据")])],1)]),t._v(" "),r("tr",[r("td",[t._v("Mysql、PostgreSQL，Oracle，SQLServer")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-scenes/external-table-load.html"}},[t._v("通过外部表同步数据")])],1)]),t._v(" "),r("tr",[r("td",[t._v("通过JDBC导入")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-scenes/jdbc-load.html"}},[t._v("使用JDBC同步数据")])],1)]),t._v(" "),r("tr",[r("td",[t._v("导入JSON格式数据")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/load-json-format.html"}},[t._v("JSON格式数据导入")])],1)]),t._v(" "),r("tr",[r("td",[t._v("MySQL Binlog")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/binlog-load-manual.html"}},[t._v("Binlog Load")])],1)])])]),t._v(" "),r("h3",{attrs:{id:"按导入方式划分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#按导入方式划分"}},[t._v("#")]),t._v(" 按导入方式划分")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("导入方式名称")]),t._v(" "),r("th",[t._v("使用方式")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Spark Load")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/spark-load-manual.html"}},[t._v("通过Spark导入外部数据")])],1)]),t._v(" "),r("tr",[r("td",[t._v("Broker Load")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/broker-load-manual.html"}},[t._v("通过Broker导入外部存储数据")])],1)]),t._v(" "),r("tr",[r("td",[t._v("Stream Load")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/stream-load-manual.html"}},[t._v("流式导入数据(本地文件及内存数据)")])],1)]),t._v(" "),r("tr",[r("td",[t._v("Routine Load")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/routine-load-manual.html"}},[t._v("导入Kafka数据")])],1)]),t._v(" "),r("tr",[r("td",[t._v("Binlog Load")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/binlog-load-manual.html"}},[t._v("采集Mysql Binlog 导入数据")])],1)]),t._v(" "),r("tr",[r("td",[t._v("Insert Into")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/insert-into-manual.html"}},[t._v("外部表通过INSERT方式导入数据")])],1)]),t._v(" "),r("tr",[r("td",[t._v("S3 Load")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/s3-load-manual.html"}},[t._v("S3协议的对象存储数据导入")])],1)])])]),t._v(" "),r("h2",{attrs:{id:"支持的数据格式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#支持的数据格式"}},[t._v("#")]),t._v(" 支持的数据格式")]),t._v(" "),r("p",[t._v("不同的导入方式支持的数据格式略有不同。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("导入方式")]),t._v(" "),r("th",[t._v("支持的格式")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Broker Load")]),t._v(" "),r("td",[t._v("Parquet，ORC，csv，gzip")])]),t._v(" "),r("tr",[r("td",[t._v("Stream Load")]),t._v(" "),r("td",[t._v("csv, gzip, json")])]),t._v(" "),r("tr",[r("td",[t._v("Routine Load")]),t._v(" "),r("td",[t._v("csv, json")])])])]),t._v(" "),r("h2",{attrs:{id:"导入说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导入说明"}},[t._v("#")]),t._v(" 导入说明")]),t._v(" "),r("p",[t._v("Apache Doris 的数据导入实现有以下共性特征，这里分别介绍，以帮助大家更好的使用数据导入功能")]),t._v(" "),r("h2",{attrs:{id:"导入的原子性保证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导入的原子性保证"}},[t._v("#")]),t._v(" 导入的原子性保证")]),t._v(" "),r("p",[t._v("Doris 的每一个导入作业，不论是使用 Broker Load 进行批量导入，还是使用 INSERT 语句进行单条导入，都是一个完整的事务操作。导入事务可以保证一批次内的数据原子生效，不会出现部分数据写入的情况。")]),t._v(" "),r("p",[t._v("同时，一个导入作业都会有一个 Label。这个 Label 是在一个数据库（Database）下唯一的，用于唯一标识一个导入作业。Label 可以由用户指定，部分导入功能也会由系统自动生成。")]),t._v(" "),r("p",[t._v("Label 是用于保证对应的导入作业，仅能成功导入一次。一个被成功导入的 Label，再次使用时，会被拒绝并报错 "),r("code",[t._v("Label already used")]),t._v("。通过这个机制，可以在 Doris 侧做到 "),r("code",[t._v("At-Most-Once")]),t._v(" 语义。如果结合上游系统的 "),r("code",[t._v("At-Least-Once")]),t._v(" 语义，则可以实现导入数据的 "),r("code",[t._v("Exactly-Once")]),t._v(" 语义。")]),t._v(" "),r("p",[t._v("关于原子性保证的最佳实践，可以参阅 导入事务和原子性。")]),t._v(" "),r("h2",{attrs:{id:"同步及异步导入"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#同步及异步导入"}},[t._v("#")]),t._v(" 同步及异步导入")]),t._v(" "),r("p",[t._v("导入方式分为同步和异步。对于同步导入方式，返回结果即表示导入成功还是失败。而对于异步导入方式，返回成功仅代表作业提交成功，不代表数据导入成功，需要使用对应的命令查看导入作业的运行状态。")])])}),[],!1,null,null,null);a.default=e.exports}}]);