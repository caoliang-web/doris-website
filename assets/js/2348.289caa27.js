(window.webpackJsonp=window.webpackJsonp||[]).push([[2348],{2973:function(s,a,t){"use strict";t.r(a);var r=t(15),n=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"资源管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源管理"}},[s._v("#")]),s._v(" 资源管理")]),s._v(" "),t("p",[s._v("为了节省Doris集群内的计算、存储资源，Doris需要引入一些其他外部资源来完成相关的工作，如Spark/GPU用于查询，HDFS/S3用于外部存储，Spark/MapReduce用于ETL, 通过ODBC连接外部存储等，因此我们引入资源管理机制来管理Doris使用的这些外部资源。")]),s._v(" "),t("h2",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),t("p",[s._v("一个资源包含名字、类型等基本信息，名字为全局唯一，不同类型的资源包含不同的属性，具体参考各资源的介绍。")]),s._v(" "),t("p",[s._v("资源的创建和删除只能由拥有 "),t("code",[s._v("admin")]),s._v(" 权限的用户进行操作。一个资源隶属于整个Doris集群。拥有 "),t("code",[s._v("admin")]),s._v(" 权限的用户可以将使用权限"),t("code",[s._v("usage_priv")]),s._v(" 赋给普通用户。可参考"),t("code",[s._v("HELP GRANT")]),s._v("或者权限文档。")]),s._v(" "),t("h2",{attrs:{id:"具体操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体操作"}},[s._v("#")]),s._v(" 具体操作")]),s._v(" "),t("p",[s._v("资源管理主要有三个命令："),t("code",[s._v("CREATE RESOURCE")]),s._v("，"),t("code",[s._v("DROP RESOURCE")]),s._v(" 和 "),t("code",[s._v("SHOW RESOURCES")]),s._v("，分别为创建、删除和查看资源。这三个命令的具体语法可以通过MySQL客户端连接到 Doris 后，执行 "),t("code",[s._v("HELP cmd")]),s._v(" 的方式查看帮助。")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("CREATE RESOURCE")]),s._v(" "),t("p",[s._v("语法")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("EXTERNAL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" RESOURCE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"resource_name"')]),s._v("                                  \n  PROPERTIES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("在创建资源的命令中，用户必须提供以下信息：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("resource_name")]),s._v(" 为 Doris 中配置的资源的名字。")]),s._v(" "),t("li",[t("code",[s._v("PROPERTIES")]),s._v(" 是资源相关参数，如下：\n"),t("ul",[t("li",[t("code",[s._v("type")]),s._v("：资源类型，必填，目前仅支持 spark与odbc_catalog。")]),s._v(" "),t("li",[s._v("其他参数见各资源介绍。")])])])])]),s._v(" "),t("li",[t("p",[s._v("DROP RESOURCE")]),s._v(" "),t("p",[s._v("该命令可以删除一个已存在的资源。具体操作见："),t("code",[s._v("HELP DROP RESOURCE")])])]),s._v(" "),t("li",[t("p",[s._v("SHOW RESOURCES")]),s._v(" "),t("p",[s._v("该命令可以查看用户有使用权限的资源。具体操作见："),t("code",[s._v("HELP SHOW RESOURCES")])])])]),s._v(" "),t("h2",{attrs:{id:"支持的资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持的资源"}},[s._v("#")]),s._v(" 支持的资源")]),s._v(" "),t("p",[s._v("目前Doris能够支持")]),s._v(" "),t("ul",[t("li",[s._v("Spark资源 : 完成ETL工作。")]),s._v(" "),t("li",[s._v("ODBC资源：查询和导入外部表的数据")])]),s._v(" "),t("p",[s._v("下面将分别展示两种资源的使用方式。")]),s._v(" "),t("h3",{attrs:{id:"spark"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spark"}},[s._v("#")]),s._v(" Spark")]),s._v(" "),t("h4",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("h5",{attrs:{id:"spark-相关参数如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spark-相关参数如下"}},[s._v("#")]),s._v(" Spark 相关参数如下：")]),s._v(" "),t("p",[t("code",[s._v("spark.master")]),s._v(": 必填，目前支持yarn，spark://host:port。")]),s._v(" "),t("p",[t("code",[s._v("spark.submit.deployMode")]),s._v(": Spark 程序的部署模式，必填，支持 cluster，client 两种。")]),s._v(" "),t("p",[t("code",[s._v("spark.hadoop.yarn.resourcemanager.address")]),s._v(": master为yarn时必填。")]),s._v(" "),t("p",[t("code",[s._v("spark.hadoop.fs.defaultFS")]),s._v(": master为yarn时必填。")]),s._v(" "),t("p",[s._v("其他参数为可选，参考http://spark.apache.org/docs/latest/configuration.html。")]),s._v(" "),t("h5",{attrs:{id:"如果spark用于etl-还需要指定以下参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果spark用于etl-还需要指定以下参数"}},[s._v("#")]),s._v(" 如果Spark用于ETL，还需要指定以下参数：")]),s._v(" "),t("p",[t("code",[s._v("working_dir")]),s._v(": ETL 使用的目录。spark作为ETL资源使用时必填。例如：hdfs://host:port/tmp/doris。")]),s._v(" "),t("p",[t("code",[s._v("broker")]),s._v(": broker 名字。spark作为ETL资源使用时必填。需要使用"),t("code",[s._v("ALTER SYSTEM ADD BROKER")]),s._v(" 命令提前完成配置。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("broker.property_key")]),s._v(": broker读取ETL生成的中间文件时需要指定的认证信息等。")])]),s._v(" "),t("h4",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("p",[s._v("创建 yarn cluster 模式，名为 spark0 的 Spark 资源。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" EXTERNAL RESOURCE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark0"')]),s._v("\nPROPERTIES\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.master"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yarn"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.submit.deployMode"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cluster"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.jars"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx.jar,yyy.jar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.files"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/tmp/aaa,/tmp/bbb"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.executor.memory"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1g"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.yarn.queue"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"queue0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.hadoop.yarn.resourcemanager.address"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:9999"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.hadoop.fs.defaultFS"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hdfs://127.0.0.1:10000"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"working_dir"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hdfs://127.0.0.1:10000/tmp/doris"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker.username"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker.password"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password0"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"odbc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#odbc"}},[s._v("#")]),s._v(" ODBC")]),s._v(" "),t("h4",{attrs:{id:"参数-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数-2"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("h5",{attrs:{id:"odbc-相关参数如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#odbc-相关参数如下"}},[s._v("#")]),s._v(" ODBC 相关参数如下：")]),s._v(" "),t("p",[t("code",[s._v("type")]),s._v(": 必填，且必须为"),t("code",[s._v("odbc_catalog")]),s._v("。作为resource的类型标识。")]),s._v(" "),t("p",[t("code",[s._v("user")]),s._v(": 外部表的账号，必填。")]),s._v(" "),t("p",[t("code",[s._v("password")]),s._v(": 外部表的密码，必填。")]),s._v(" "),t("p",[t("code",[s._v("host")]),s._v(": 外部表的连接ip地址，必填。")]),s._v(" "),t("p",[t("code",[s._v("port")]),s._v(": 外部表的连接端口，必填。")]),s._v(" "),t("p",[t("code",[s._v("odbc_type")]),s._v(": 标示外部表的类型，当前doris支持"),t("code",[s._v("mysql")]),s._v("与"),t("code",[s._v("oracle")]),s._v("，未来可能支持更多的数据库。引用该resource的ODBC外表必填，旧的mysql外表选填。")]),s._v(" "),t("p",[t("code",[s._v("driver")]),s._v(": 标示外部表使用的driver动态库，引用该resource的ODBC外表必填，旧的mysql外表选填。")]),s._v(" "),t("p",[s._v("具体如何使用可以，可以参考"),t("RouterLink",{attrs:{to:"/zh-CN/1.0/extending-doris/odbc-of-doris.html"}},[s._v("ODBC of Doris")])],1),s._v(" "),t("h4",{attrs:{id:"示例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("p",[s._v("创建oracle的odbc resource，名为 odbc_oracle 的 odbc_catalog的 资源。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" EXTERNAL RESOURCE "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("oracle_odbc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\nPROPERTIES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"odbc_catalog"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"port"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8086"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"database"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"odbc_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"oracle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"driver"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Oracle 19 ODBC driver"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);