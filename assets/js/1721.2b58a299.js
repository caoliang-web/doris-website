(window.webpackJsonp=window.webpackJsonp||[]).push([[1721],{2346:function(a,e,s){"use strict";s.r(e);var n=s(15),t=Object(n.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"schema-change"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schema-change"}},[a._v("#")]),a._v(" Schema Change")]),a._v(" "),s("p",[a._v("用户可以通过 Schema Change 操作来修改已存在表的 Schema。目前 Doris 支持以下几种修改:")]),a._v(" "),s("ul",[s("li",[a._v("增加、删除列")]),a._v(" "),s("li",[a._v("修改列类型")]),a._v(" "),s("li",[a._v("调整列顺序")]),a._v(" "),s("li",[a._v("增加、修改 Bloom Filter")]),a._v(" "),s("li",[a._v("增加、删除 bitmap index")])]),a._v(" "),s("p",[a._v("本文档主要介绍如何创建 Schema Change 作业，以及进行 Schema Change 的一些注意事项和常见问题。")]),a._v(" "),s("h2",{attrs:{id:"名词解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[a._v("#")]),a._v(" 名词解释")]),a._v(" "),s("ul",[s("li",[a._v("Base Table：基表。每一个表被创建时，都对应一个基表。")]),a._v(" "),s("li",[a._v("Rollup：基于基表或者其他 Rollup 创建出来的上卷表。")]),a._v(" "),s("li",[a._v("Index：物化索引。Rollup 或 Base Table 都被称为物化索引。")]),a._v(" "),s("li",[a._v("Transaction：事务。每一个导入任务都是一个事务，每个事务有一个唯一递增的 Transaction ID。")])]),a._v(" "),s("h2",{attrs:{id:"原理介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理介绍"}},[a._v("#")]),a._v(" 原理介绍")]),a._v(" "),s("p",[a._v("执行 Schema Change 的基本过程，是通过原 Index 的数据，生成一份新 Schema 的 Index 的数据。其中主要需要进行两部分数据转换，一是已存在的历史数据的转换，二是在 Schema Change 执行过程中，新到达的导入数据的转换。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+----------+\n| Load Job |\n+----+-----+\n     |\n     | Load job generates both origin and new index data\n     |\n     |      +------------------+ +---------------+\n     |      | Origin Index     | | Origin Index  |\n     +------\x3e New Incoming Data| | History Data  |\n     |      +------------------+ +------+--------+\n     |                                  |\n     |                                  | Convert history data\n     |                                  |\n     |      +------------------+ +------v--------+\n     |      | New Index        | | New Index     |\n     +------\x3e New Incoming Data| | History Data  |\n            +------------------+ +---------------+\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("p",[a._v("在开始转换历史数据之前，Doris 会获取一个最新的 Transaction ID。并等待这个 Transaction ID 之前的所有导入事务完成。这个 Transaction ID 成为分水岭。意思是，Doris 保证在分水岭之后的所有导入任务，都会同时为原 Index 和新 Index 生成数据。这样当历史数据转换完成后，可以保证新的 Index 中的数据是完整的。")]),a._v(" "),s("h2",{attrs:{id:"创建作业"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建作业"}},[a._v("#")]),a._v(" 创建作业")]),a._v(" "),s("p",[a._v("创建 Schema Change 的具体语法可以查看帮助 "),s("code",[a._v("HELP ALTER TABLE")]),a._v(" 中 Schema Change 部分的说明。")]),a._v(" "),s("p",[a._v("Schema Change 的创建是一个异步过程，作业提交成功后，用户需要通过 "),s("code",[a._v("SHOW ALTER TABLE COLUMN")]),a._v(" 命令来查看作业进度。")]),a._v(" "),s("h2",{attrs:{id:"查看作业"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看作业"}},[a._v("#")]),a._v(" 查看作业")]),a._v(" "),s("p",[s("code",[a._v("SHOW ALTER TABLE COLUMN")]),a._v(" 可以查看当前正在执行或已经完成的 Schema Change 作业。当一次 Schema Change 作业涉及到多个 Index 时，该命令会显示多行，每行对应一个 Index。举例如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("        JobId: 20021\n    TableName: tbl1\n   CreateTime: 2019-08-05 23:03:13\n   FinishTime: 2019-08-05 23:03:42\n    IndexName: tbl1\n      IndexId: 20022\nOriginIndexId: 20017\nSchemaVersion: 2:792557838\nTransactionId: 10023\n        State: FINISHED\n          Msg:\n     Progress: N/A\n      Timeout: 86400\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("ul",[s("li",[a._v("JobId：每个 Schema Change 作业的唯一 ID。")]),a._v(" "),s("li",[a._v("TableName：Schema Change 对应的基表的表名。")]),a._v(" "),s("li",[a._v("CreateTime：作业创建时间。")]),a._v(" "),s("li",[a._v('FinishedTime：作业结束时间。如未结束，则显示 "N/A"。')]),a._v(" "),s("li",[a._v("IndexName： 本次修改所涉及的某一个 Index 的名称。")]),a._v(" "),s("li",[a._v("IndexId：新的 Index 的唯一 ID。")]),a._v(" "),s("li",[a._v("OriginIndexId：旧的 Index 的唯一 ID。")]),a._v(" "),s("li",[a._v("SchemaVersion：以 M:N 的格式展示。其中 M 表示本次 Schema Change 变更的版本，N 表示对应的 Hash 值。每次 Schema Change，版本都会递增。")]),a._v(" "),s("li",[a._v("TransactionId：转换历史数据的分水岭 transaction ID。")]),a._v(" "),s("li",[a._v("State：作业所在阶段。\n"),s("ul",[s("li",[a._v("PENDING：作业在队列中等待被调度。")]),a._v(" "),s("li",[a._v("WAITING_TXN：等待分水岭 transaction ID 之前的导入任务完成。")]),a._v(" "),s("li",[a._v("RUNNING：历史数据转换中。")]),a._v(" "),s("li",[a._v("FINISHED：作业成功。")]),a._v(" "),s("li",[a._v("CANCELLED：作业失败。")])])]),a._v(" "),s("li",[a._v("Msg：如果作业失败，这里会显示失败信息。")]),a._v(" "),s("li",[a._v("Progress：作业进度。只有在 RUNNING 状态才会显示进度。进度是以 M/N 的形式显示。其中 N 为 Schema Change 涉及的总副本数。M 为已完成历史数据转换的副本数。")]),a._v(" "),s("li",[a._v("Timeout：作业超时时间。单位秒。")])]),a._v(" "),s("h2",{attrs:{id:"取消作业"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取消作业"}},[a._v("#")]),a._v(" 取消作业")]),a._v(" "),s("p",[a._v("在作业状态不为 FINISHED 或 CANCELLED 的情况下，可以通过以下命令取消 Schema Change 作业：")]),a._v(" "),s("p",[s("code",[a._v("CANCEL ALTER TABLE COLUMN FROM tbl_name;")])]),a._v(" "),s("h2",{attrs:{id:"最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[a._v("#")]),a._v(" 最佳实践")]),a._v(" "),s("p",[a._v("Schema Change 可以在一个作业中，对多个 Index 进行不同的修改。举例如下：")]),a._v(" "),s("p",[a._v("源 Schema：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n+-----------+-------+------+------+------+---------+-------+\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("可以通过以下命令给 rollup1 和 rollup2 都加入一列 k4，并且再给 rollup2 加入一列 k5：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('ALTER TABLE tbl1\nADD COLUMN k4 INT default "1" to rollup1,\nADD COLUMN k4 INT default "1" to rollup2,\nADD COLUMN k5 INT default "1" to rollup2;\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("完成后，Schema 变为：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n+-----------+-------+------+------+------+---------+-------+\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("p",[a._v("可以看到，Base 表 tbl1 也自动加入了 k4, k5 列。即给任意 rollup 增加的列，都会自动加入到 Base 表中。")]),a._v(" "),s("p",[a._v("同时，不允许向 Rollup 中加入 Base 表已经存在的列。如果用户需要这样做，可以重新建立一个包含新增列的 Rollup，之后再删除原 Rollup。")]),a._v(" "),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("一张表在同一时间只能有一个 Schema Change 作业在运行。")])]),a._v(" "),s("li",[s("p",[a._v("Schema Change 操作不阻塞导入和查询操作。")])]),a._v(" "),s("li",[s("p",[a._v("分区列和分桶列不能修改。")])]),a._v(" "),s("li",[s("p",[a._v("如果 Schema 中有 REPLACE 方式聚合的 value 列，则不允许删除 Key 列。")]),a._v(" "),s("p",[a._v("如果删除 Key 列，Doris 无法决定 REPLACE 列的取值。")]),a._v(" "),s("p",[a._v("Unique 数据模型表的所有非 Key 列都是 REPLACE 聚合方式。")])]),a._v(" "),s("li",[s("p",[a._v("在新增聚合类型为 SUM 或者 REPLACE 的 value 列时，该列的默认值对历史数据没有含义。")]),a._v(" "),s("p",[a._v("因为历史数据已经失去明细信息，所以默认值的取值并不能实际反映聚合后的取值。")])]),a._v(" "),s("li",[s("p",[a._v("当修改列类型时，除 Type 以外的字段都需要按原列上的信息补全。")]),a._v(" "),s("p",[a._v("如修改列 "),s("code",[a._v('k1 INT SUM NULL DEFAULT "1"')]),a._v(" 类型为 BIGINT，则需执行命令如下：")]),a._v(" "),s("p",[s("code",[a._v('ALTER TABLE tbl1 MODIFY COLUMN `k1` BIGINT SUM NULL DEFAULT "1";')])]),a._v(" "),s("p",[a._v("注意，除新的列类型外，如聚合方式，Nullable 属性，以及默认值都要按照原信息补全。")])]),a._v(" "),s("li",[s("p",[a._v("不支持修改列名称、聚合类型、Nullable 属性、默认值以及列注释。")])])]),a._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[a._v("#")]),a._v(" 常见问题")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Schema Change 的执行速度")]),a._v(" "),s("p",[a._v("目前 Schema Change 执行速度按照最差效率估计约为 10MB/s。保守起见，用户可以根据这个速率来设置作业的超时时间。")])]),a._v(" "),s("li",[s("p",[a._v("提交作业报错 "),s("code",[a._v("Table xxx is not stable. ...")])]),a._v(" "),s("p",[a._v("Schema Change 只有在表数据完整且非均衡状态下才可以开始。如果表的某些数据分片副本不完整，或者某些副本正在进行均衡操作，则提交会被拒绝。")]),a._v(" "),s("p",[a._v("数据分片副本是否完整，可以通过以下命令查看：")]),a._v(" "),s("p",[s("code",[a._v('ADMIN SHOW REPLICA STATUS FROM tbl WHERE STATUS != "OK";')])]),a._v(" "),s("p",[a._v("如果有返回结果，则说明有副本有问题。通常系统会自动修复这些问题，用户也可以通过以下命令优先修复这个表：")]),a._v(" "),s("p",[s("code",[a._v("ADMIN REPAIR TABLE tbl1;")])]),a._v(" "),s("p",[a._v("用户可以通过以下命令查看是否有正在运行的均衡任务：")]),a._v(" "),s("p",[s("code",[a._v('SHOW PROC "/cluster_balance/pending_tablets";')])]),a._v(" "),s("p",[a._v("可以等待均衡任务完成，或者通过以下命令临时禁止均衡操作：")]),a._v(" "),s("p",[s("code",[a._v('ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");')])])])]),a._v(" "),s("h2",{attrs:{id:"相关配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关配置"}},[a._v("#")]),a._v(" 相关配置")]),a._v(" "),s("h3",{attrs:{id:"fe-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置"}},[a._v("#")]),a._v(" FE 配置")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("alter_table_timeout_second")]),a._v("：作业默认超时时间，86400 秒。")])]),a._v(" "),s("h3",{attrs:{id:"be-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#be-配置"}},[a._v("#")]),a._v(" BE 配置")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("alter_tablet_worker_count")]),a._v("：在 BE 端用于执行历史数据转换的线程数。默认为 3。如果希望加快 Schema Change 作业的速度，可以适当调大这个参数后重启 BE。但过多的转换线程可能会导致 IO 压力增加，影响其他操作。该线程和 Rollup 作业共用。")])])])}),[],!1,null,null,null);e.default=t.exports}}]);