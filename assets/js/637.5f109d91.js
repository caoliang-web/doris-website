(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{1266:function(r,e,t){"use strict";t.r(e);var n=t(15),a=Object(n.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"apache-doris-incubating-0-15-0-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-doris-incubating-0-15-0-release"}},[r._v("#")]),r._v(" Apache Doris(Incubating) 0.15.0 Release")]),r._v(" "),t("p",[r._v("亲爱的社区小伙伴们，历时数个月精心打磨，我们很高兴地宣布， Apache Doris(incubating) 于 2021 年 11 月 29 日迎来了 0.15.0 Release 版本的正式发布！有 99 位 Contributor 为 Apache Doris 提交了近 700 项优化和修复，在此我们也对所有贡献者表示最真诚的感激！")]),r._v(" "),t("p",[r._v("在 0.15.0 Release 版本中，我们增加了诸多新功能，对 Apache Doris 的查询性能、易用性、稳定性方面等进行了全面优化：新增资源划分和隔离功能，用户可以通过资源标签的方式将集群中的 BE 节点划分为资源组，实现对在线、离线业务的统一管理和资源隔离；增加了 Runtime Filter 及 Join Reorder 功能，对多表 Join 场景的查询效率进行了大幅提升，在 Star Schema Benchmark 测试数据集下有 2-10 倍的性能提升；新增导入方式 Binlog Load ，使 Doris 可以增量同步 MySQL 中对数据更新操作的 CDC ；支持 String 列类型，长度最大支持 2GB ；支持 List 分区功能，可以通过枚举值创建分区；支持 Unique Key 模型上的 Update 语句；Spark-Doris-Connector 支持数据写入 Doris ……还有更多重要特性，欢迎大家下载使用。")]),r._v(" "),t("p",[r._v("我们欢迎大家在使用过程中，有任何问题通过 GitHub Discussion 或者 Dev 邮件组与我们取得联系，也期待大家参与社区讨论和建设中 。")]),r._v(" "),t("h2",{attrs:{id:"重要更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重要更新"}},[r._v("#")]),r._v(" 重要更新")]),r._v(" "),t("h3",{attrs:{id:"资源划分与隔离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源划分与隔离"}},[r._v("#")]),r._v(" 资源划分与隔离")]),r._v(" "),t("p",[r._v("用户可以通过资源标签的方式将一个 Doris 集群中的 BE 节点划分成多个资源组，从而可以进行在线、离线业务的统一管理和节点级别的资源隔离。\n同时，还可以通过限制单个查询任务的 CPU、内存开销以及复杂度，来控制单个查询的资源开销，从而降低不同查询之间的资源抢占问题。")]),r._v(" "),t("h3",{attrs:{id:"性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[r._v("#")]),r._v(" 性能优化")]),r._v(" "),t("ul",[t("li",[t("p",[r._v("Runtime Filter 功能通过使用 Join 算子中右表的 Join Key 列条件来过滤左表的数据，在大部分 Join 场景下可以显著提升查询效率。如在 Star Schema Benchmark ( TPCH 的精简测试集) 下可以获得 2-10 倍的性能提升。")])]),r._v(" "),t("li",[t("p",[r._v("Join Reorder 功能可以通过通过代价模型自动帮助调整 SQL 中 Join 的顺序，以帮助获得最优的 Join 效率。\n可通过会话变量  "),t("code",[r._v("set enable_cost_based_join_reorder=true")]),r._v("  开启。")])])]),r._v(" "),t("h3",{attrs:{id:"新增功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新增功能"}},[r._v("#")]),r._v(" 新增功能")]),r._v(" "),t("ul",[t("li",[r._v("支持直接对接 Canal Server 同步 MySQL binlog 数据。")]),r._v(" "),t("li",[r._v("支持 String 列类型，最大支持 2GB 。")]),r._v(" "),t("li",[r._v("支持 List 分区功能，可以针对枚举值创建分区。")]),r._v(" "),t("li",[r._v("支持事务性 Insert 语句功能。可以通过 begin ; insert ; insert; ,... ; commit ; 的方式批量导入数据。")]),r._v(" "),t("li",[r._v("支持在 Unique Key 模型上的 Update 语句功能。可以在 Unique Key 模型表上执行 Update Set where 语句。")]),r._v(" "),t("li",[r._v("支持 SQL 阻塞名单功能。可以通过正则、Hash 值匹配等方式阻止部分 SQL 的执行。")]),r._v(" "),t("li",[r._v("支持 LDAP 登陆验证。")])]),r._v(" "),t("h3",{attrs:{id:"拓展功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拓展功能"}},[r._v("#")]),r._v(" 拓展功能")]),r._v(" "),t("ul",[t("li",[r._v("支持 Flink-Doris-Connector 。")]),r._v(" "),t("li",[r._v("支持 DataX doriswriter 插件。")]),r._v(" "),t("li",[r._v("Spark-Doris-Connector 支持数据写入 Doris 。")])]),r._v(" "),t("h2",{attrs:{id:"功能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能优化"}},[r._v("#")]),r._v(" 功能优化")]),r._v(" "),t("h3",{attrs:{id:"查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[r._v("#")]),r._v(" 查询")]),r._v(" "),t("ul",[t("li",[r._v("支持在 SQL 查询规划阶段，利用 BE 的函数计算能力计算所有常量表达式。")])]),r._v(" "),t("h3",{attrs:{id:"导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[r._v("#")]),r._v(" 导入")]),r._v(" "),t("ul",[t("li",[r._v("支持导入文本格式文件时，指定多字节行列分隔符或不可见分隔符。")]),r._v(" "),t("li",[r._v("支持通过 Stream Load 导入压缩格式文件。")]),r._v(" "),t("li",[r._v("Stream Load支持导入多行格式的 Json 数据。")])]),r._v(" "),t("h3",{attrs:{id:"导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出"}},[r._v("#")]),r._v(" 导出")]),r._v(" "),t("ul",[t("li",[r._v("支持 Export 导出功能指定 where 过滤条件。支持导出文件使用多字节行列分隔符。支持导出到本地文件。")]),r._v(" "),t("li",[r._v("Export 导出功能支持仅导出指定的列。")]),r._v(" "),t("li",[r._v("支持通过 outfile 语句导出结果集到本地磁盘，并支持导出后写入导出成功的标记文件。")])]),r._v(" "),t("h3",{attrs:{id:"易用性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#易用性"}},[r._v("#")]),r._v(" 易用性")]),r._v(" "),t("ul",[t("li",[r._v("动态分区功能支持创建、保留指定的历史分区、支持自动冷热数据迁移设置。")]),r._v(" "),t("li",[r._v("支持在命令行使用可视化的树形结构展示查询、导入的计划和 Profile。")]),r._v(" "),t("li",[r._v("支持记录并查看 Stream Load 操作日志。")]),r._v(" "),t("li",[r._v("通过 Routine Load 消费 Kafka 数据时，可以指定时间点进行消费。")]),r._v(" "),t("li",[r._v("支持通过 show create routine load 功能导出 Routine Load 的创建语句。")]),r._v(" "),t("li",[r._v("支持通过 pause/resume all routine load 命令一键启停所有 Routine Load Job。")]),r._v(" "),t("li",[r._v("支持通过 alter routine load 语句修改 Routine Load 的 Broker List 和 Topic。")]),r._v(" "),t("li",[r._v("支持 create table as select 功能。")]),r._v(" "),t("li",[r._v("支持通过 alter table 命令修改列注释和表注释。")]),r._v(" "),t("li",[r._v("show tablet status 增加表创建时间、数据更新时间。")]),r._v(" "),t("li",[r._v("支持通过 show data skew 命令查看表的数据量分布，以排查数据倾斜问题。")]),r._v(" "),t("li",[r._v("支持通过 show/clean trash 命令查看 BE 文件回收站的磁盘占用情况并主动清除。")]),r._v(" "),t("li",[r._v("支持通过 show view 语句展示一个表被哪些视图所引用。")])]),r._v(" "),t("h3",{attrs:{id:"新增函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新增函数"}},[r._v("#")]),r._v(" 新增函数")]),r._v(" "),t("ul",[t("li",[t("code",[r._v("bitmap_min")]),r._v(", "),t("code",[r._v("bit_length")])]),r._v(" "),t("li",[t("code",[r._v("yearweek")]),r._v(", "),t("code",[r._v("week")]),r._v(", "),t("code",[r._v("makedate")])]),r._v(" "),t("li",[t("code",[r._v("percentile")]),r._v(" 精确百分位函数")]),r._v(" "),t("li",[t("code",[r._v("json_array")]),r._v("，"),t("code",[r._v("json_object")]),r._v("，"),t("code",[r._v("json_quote")])]),r._v(" "),t("li",[r._v("支持为 "),t("code",[r._v("AES_ENCRYPT")]),r._v(" 和 "),t("code",[r._v("AES_DECRYPT")]),r._v(" 函数创建自定义公钥。")]),r._v(" "),t("li",[r._v("支持通过 "),t("code",[r._v("create alias function")]),r._v(" 创建函数别名来组合多个函数。")])]),r._v(" "),t("h3",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[r._v("#")]),r._v(" 其他")]),r._v(" "),t("ul",[t("li",[r._v("支持访问 SSL 连接协议的ES外表。")]),r._v(" "),t("li",[r._v("支持在动态分区属性中指定热点分区的数量，热点分区将存储在 SSD 磁盘中。")]),r._v(" "),t("li",[r._v("支持通过 Broker Load 导入 Json 格式数据。")]),r._v(" "),t("li",[r._v("支持直接通过 libhdfs3 库访问 HDFS 进行数据的导入导出，而不需要 Broker 进程。")]),r._v(" "),t("li",[r._v("select into outfile 功能支持导出 Parquet 文件格式，并支持并行导出。")]),r._v(" "),t("li",[r._v("ODBC 外表支持 SQLServer。")])]),r._v(" "),t("h2",{attrs:{id:"致谢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#致谢"}},[r._v("#")]),r._v(" 致谢")]),r._v(" "),t("p",[r._v("Apache Doris(incubating) 0.15.0 Release 版本的发布离不开所有社区用户的支持，在此向所有参与版本设计、开发、测试、讨论的社区贡献者们表示感谢，他们分别是：")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/924060929",target:"_blank",rel:"noopener noreferrer"}},[r._v("@924060929"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acelyc111",target:"_blank",rel:"noopener noreferrer"}},[r._v("@acelyc111"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/Aimiyoo",target:"_blank",rel:"noopener noreferrer"}},[r._v("@Aimiyoo"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/amosbird",target:"_blank",rel:"noopener noreferrer"}},[r._v("@amosbird"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/arthur-zhang",target:"_blank",rel:"noopener noreferrer"}},[r._v("@arthur-zhang"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/azurenake",target:"_blank",rel:"noopener noreferrer"}},[r._v("@azurenake"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/BiteTheDDDDt",target:"_blank",rel:"noopener noreferrer"}},[r._v("@BiteTheDDDDt"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/caiconghui",target:"_blank",rel:"noopener noreferrer"}},[r._v("@caiconghui"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/caneGuy",target:"_blank",rel:"noopener noreferrer"}},[r._v("@caneGuy"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/caoliang-web",target:"_blank",rel:"noopener noreferrer"}},[r._v("@caoliang-web"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ccoffline",target:"_blank",rel:"noopener noreferrer"}},[r._v("@ccoffline"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/chaplinthink",target:"_blank",rel:"noopener noreferrer"}},[r._v("@chaplinthink"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/chovy-3012",target:"_blank",rel:"noopener noreferrer"}},[r._v("@chovy-3012"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ChPi",target:"_blank",rel:"noopener noreferrer"}},[r._v("@ChPi"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/copperybean",target:"_blank",rel:"noopener noreferrer"}},[r._v("@copperybean"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/crazyleeyang",target:"_blank",rel:"noopener noreferrer"}},[r._v("@crazyleeyang"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/dh-cloud",target:"_blank",rel:"noopener noreferrer"}},[r._v("@dh-cloud"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/DinoZhang",target:"_blank",rel:"noopener noreferrer"}},[r._v("@DinoZhang"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/dixingxing0",target:"_blank",rel:"noopener noreferrer"}},[r._v("@dixingxing0"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/dohongdayi",target:"_blank",rel:"noopener noreferrer"}},[r._v("@dohongdayi"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/e0c9",target:"_blank",rel:"noopener noreferrer"}},[r._v("@e0c9"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/EmmyMiao87",target:"_blank",rel:"noopener noreferrer"}},[r._v("@EmmyMiao87"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/eyesmoons",target:"_blank",rel:"noopener noreferrer"}},[r._v("@eyesmoons"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/francisoliverlee",target:"_blank",rel:"noopener noreferrer"}},[r._v("@francisoliverlee"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/Gabriel39",target:"_blank",rel:"noopener noreferrer"}},[r._v("@Gabriel39"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/gaodayue",target:"_blank",rel:"noopener noreferrer"}},[r._v("@gaodayue"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/GoGoWen",target:"_blank",rel:"noopener noreferrer"}},[r._v("@GoGoWen"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/HappenLee",target:"_blank",rel:"noopener noreferrer"}},[r._v("@HappenLee"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/harveyyue",target:"_blank",rel:"noopener noreferrer"}},[r._v("@harveyyue"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/Henry2SS",target:"_blank",rel:"noopener noreferrer"}},[r._v("@Henry2SS"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/hf200012",target:"_blank",rel:"noopener noreferrer"}},[r._v("@hf200012"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/huangmengbin",target:"_blank",rel:"noopener noreferrer"}},[r._v("@huangmengbin"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/huozhanfeng",target:"_blank",rel:"noopener noreferrer"}},[r._v("@huozhanfeng"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/huzk8",target:"_blank",rel:"noopener noreferrer"}},[r._v("@huzk8"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/hxianshun",target:"_blank",rel:"noopener noreferrer"}},[r._v("@hxianshun"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ikaruga4600",target:"_blank",rel:"noopener noreferrer"}},[r._v("@ikaruga4600"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/JameyWoo",target:"_blank",rel:"noopener noreferrer"}},[r._v("@JameyWoo"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/Jennifer88huang",target:"_blank",rel:"noopener noreferrer"}},[r._v("@Jennifer88huang"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/JinLiOnline",target:"_blank",rel:"noopener noreferrer"}},[r._v("@JinLiOnline"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/jinyuanlu",target:"_blank",rel:"noopener noreferrer"}},[r._v("@jinyuanlu"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/JNSimba",target:"_blank",rel:"noopener noreferrer"}},[r._v("@JNSimba"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/killxdcj",target:"_blank",rel:"noopener noreferrer"}},[r._v("@killxdcj"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/kuncle",target:"_blank",rel:"noopener noreferrer"}},[r._v("@kuncle"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/liutang123",target:"_blank",rel:"noopener noreferrer"}},[r._v("@liutang123"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/luozenglin",target:"_blank",rel:"noopener noreferrer"}},[r._v("@luozenglin"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/luzhijing",target:"_blank",rel:"noopener noreferrer"}},[r._v("@luzhijing"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/MarsXDM",target:"_blank",rel:"noopener noreferrer"}},[r._v("@MarsXDM"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/mh-boy",target:"_blank",rel:"noopener noreferrer"}},[r._v("@mh-boy"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/mk8310",target:"_blank",rel:"noopener noreferrer"}},[r._v("@mk8310"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/morningman",target:"_blank",rel:"noopener noreferrer"}},[r._v("@morningman"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/Myasuka",target:"_blank",rel:"noopener noreferrer"}},[r._v("@Myasuka"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/nimuyuhan",target:"_blank",rel:"noopener noreferrer"}},[r._v("@nimuyuhan"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/pan3793",target:"_blank",rel:"noopener noreferrer"}},[r._v("@pan3793"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/PatrickNicholas",target:"_blank",rel:"noopener noreferrer"}},[r._v("@PatrickNicholas"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/pengxiangyu",target:"_blank",rel:"noopener noreferrer"}},[r._v("@pengxiangyu"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/pierre94",target:"_blank",rel:"noopener noreferrer"}},[r._v("@pierre94"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/qidaye",target:"_blank",rel:"noopener noreferrer"}},[r._v("@qidaye"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/qzsee",target:"_blank",rel:"noopener noreferrer"}},[r._v("@qzsee"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/shiyi23",target:"_blank",rel:"noopener noreferrer"}},[r._v("@shiyi23"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/smallhibiscus",target:"_blank",rel:"noopener noreferrer"}},[r._v("@smallhibiscus"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/songenjie",target:"_blank",rel:"noopener noreferrer"}},[r._v("@songenjie"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/spaces-X",target:"_blank",rel:"noopener noreferrer"}},[r._v("@spaces-X"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/stalary",target:"_blank",rel:"noopener noreferrer"}},[r._v("@stalary"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/stdpain",target:"_blank",rel:"noopener noreferrer"}},[r._v("@stdpain"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/Stephen-Robin",target:"_blank",rel:"noopener noreferrer"}},[r._v("@Stephen-Robin"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/Sunt-ing",target:"_blank",rel:"noopener noreferrer"}},[r._v("@Sunt-ing"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/Taaang",target:"_blank",rel:"noopener noreferrer"}},[r._v("@Taaang"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/tarepanda1024",target:"_blank",rel:"noopener noreferrer"}},[r._v("@tarepanda1024"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/tianhui5",target:"_blank",rel:"noopener noreferrer"}},[r._v("@tianhui5"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/tinkerrrr",target:"_blank",rel:"noopener noreferrer"}},[r._v("@tinkerrrr"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/TobKed",target:"_blank",rel:"noopener noreferrer"}},[r._v("@TobKed"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ucasfl",target:"_blank",rel:"noopener noreferrer"}},[r._v("@ucasfl"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/Userwhite",target:"_blank",rel:"noopener noreferrer"}},[r._v("@Userwhite"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vinson0526",target:"_blank",rel:"noopener noreferrer"}},[r._v("@vinson0526"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/wangbo",target:"_blank",rel:"noopener noreferrer"}},[r._v("@wangbo"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/wangliansong",target:"_blank",rel:"noopener noreferrer"}},[r._v("@wangliansong"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/wangshuo128",target:"_blank",rel:"noopener noreferrer"}},[r._v("@wangshuo128"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/weajun",target:"_blank",rel:"noopener noreferrer"}},[r._v("@weajun"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/weihongkai2008",target:"_blank",rel:"noopener noreferrer"}},[r._v("@weihongkai2008"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/weizuo93",target:"_blank",rel:"noopener noreferrer"}},[r._v("@weizuo93"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/WindyGao",target:"_blank",rel:"noopener noreferrer"}},[r._v("@WindyGao"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/wunan1210",target:"_blank",rel:"noopener noreferrer"}},[r._v("@wunan1210"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/wuyunfeng",target:"_blank",rel:"noopener noreferrer"}},[r._v("@wuyunfeng"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/xhmz",target:"_blank",rel:"noopener noreferrer"}},[r._v("@xhmz"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/xiaokangguo",target:"_blank",rel:"noopener noreferrer"}},[r._v("@xiaokangguo"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/xiaoxiaopan118",target:"_blank",rel:"noopener noreferrer"}},[r._v("@xiaoxiaopan118"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/xinghuayu007",target:"_blank",rel:"noopener noreferrer"}},[r._v("@xinghuayu007"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/xinyiZzz",target:"_blank",rel:"noopener noreferrer"}},[r._v("@xinyiZzz"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/xuliuzhe",target:"_blank",rel:"noopener noreferrer"}},[r._v("@xuliuzhe"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/xxiao2018",target:"_blank",rel:"noopener noreferrer"}},[r._v("@xxiao2018"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/xy720",target:"_blank",rel:"noopener noreferrer"}},[r._v("@xy720"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/yangzhg",target:"_blank",rel:"noopener noreferrer"}},[r._v("@yangzhg"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/yx91490",target:"_blank",rel:"noopener noreferrer"}},[r._v("@yx91490"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/zbtzbtzbt",target:"_blank",rel:"noopener noreferrer"}},[r._v("@zbtzbtzbt"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/zenoyang",target:"_blank",rel:"noopener noreferrer"}},[r._v("@zenoyang"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/zh0122",target:"_blank",rel:"noopener noreferrer"}},[r._v("@zh0122"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/zhangboya1",target:"_blank",rel:"noopener noreferrer"}},[r._v("@zhangboya1"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/zhangstar333",target:"_blank",rel:"noopener noreferrer"}},[r._v("@zhangstar333"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/zuochunwei",target:"_blank",rel:"noopener noreferrer"}},[r._v("@zuochunwei"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);