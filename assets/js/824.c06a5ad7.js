(window.webpackJsonp=window.webpackJsonp||[]).push([[824],{1452:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"seatunnel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seatunnel"}},[s._v("#")]),s._v(" SeaTunnel")]),s._v(" "),a("p",[s._v("最新版本的 "),a("a",{attrs:{href:"https://seatunnel.apache.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Apache SeaTunnel (原 waterdrop )"),a("OutboundLink")],1),s._v(" 已经支持 Doris 的连接器, SeaTunnel 可以用过 Spark 引擎和 Flink 引擎同步数据至 Doris 中.")]),s._v(" "),a("p",[s._v("事实上, SeaTunnel 通过 Stream Load 方式同步数据,性能强劲,欢迎大家使用")]),s._v(" "),a("p",[s._v("#安装 SeaTunnel\n"),a("a",{attrs:{href:"https://interestinglab.github.io/seatunnel-docs/#/zh-cn/v2/flink/installation",target:"_blank",rel:"noopener noreferrer"}},[s._v("SeaTunnel 安装链接"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"spark-sink-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark-sink-doris"}},[s._v("#")]),s._v(" Spark Sink Doris")]),s._v(" "),a("h3",{attrs:{id:"插件代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件代码"}},[s._v("#")]),s._v(" 插件代码")]),s._v(" "),a("p",[s._v("Spark Sink Doris 的插件代码在"),a("a",{attrs:{href:"https://github.com/apache/incubator-seatunnel/tree/dev/seatunnel-connectors/seatunnel-connectors-spark/seatunnel-connector-spark-doris",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"参数列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数列表"}},[s._v("#")]),s._v(" 参数列表")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数名")]),s._v(" "),a("th",[s._v("参数类型")]),s._v(" "),a("th",[s._v("是否必要")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("引擎类型")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("fenodes")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Spark")])]),s._v(" "),a("tr",[a("td",[s._v("database")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Spark")])]),s._v(" "),a("tr",[a("td",[s._v("table")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Spark")])]),s._v(" "),a("tr",[a("td",[s._v("user")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Spark")])]),s._v(" "),a("tr",[a("td",[s._v("password")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Spark")])]),s._v(" "),a("tr",[a("td",[s._v("batch_size")]),s._v(" "),a("td",[s._v("int")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("100")]),s._v(" "),a("td",[s._v("Spark")])]),s._v(" "),a("tr",[a("td",[s._v("doris.*")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("no")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Spark")])])])]),s._v(" "),a("p",[a("code",[s._v("fenodes [string]")])]),s._v(" "),a("p",[s._v("Doris Fe节点地址:8030")]),s._v(" "),a("p",[a("code",[s._v("database [string]")])]),s._v(" "),a("p",[s._v("写入 Doris 的库名")]),s._v(" "),a("p",[a("code",[s._v("table [string]")])]),s._v(" "),a("p",[s._v("写入 Doris 的表名")]),s._v(" "),a("p",[a("code",[s._v("user [string]")])]),s._v(" "),a("p",[s._v("Doris 访问用户")]),s._v(" "),a("p",[a("code",[s._v("password [string]")])]),s._v(" "),a("p",[s._v("Doris 访问用户密码")]),s._v(" "),a("p",[a("code",[s._v("batch_size [string]")])]),s._v(" "),a("p",[s._v("Spark 通过 Stream Load 方式写入,每个批次提交条数")]),s._v(" "),a("p",[a("code",[s._v("doris. [string]")])]),s._v(" "),a("p",[s._v("Stream Load 方式写入的 Http 参数优化,在官网参数前加上'Doris.'前缀")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/stream-load-manual.html"}},[s._v("更多 Stream Load 参数配置")])],1),s._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),a("p",[s._v("Hive 迁移数据至 Doris")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('env{\n  spark.app.name = "hive2doris-template"\n}\n\nspark {\n  spark.sql.catalogImplementation = "hive"\n}\n\nsource {\n  hive {\n    preSql = "select * from tmp.test"\n    result_table_name = "test"\n  }\n}\n\ntransform {\n}\n\n\nsink {\n\nConsole {\n\n  }\n\nDoris {\n   fenodes="xxxx:8030"\n   database="tmp"\n   table="test"\n   user="root"\n   password="root"\n   batch_size=1000\n   doris.column_separator="\\t"\n   doris.columns="date_key,date_value,day_in_year,day_in_month"\n   }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("p",[s._v("启动命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sh bin/start-waterdrop-spark.sh --master local[4] --deploy-mode client --config ./config/spark.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);