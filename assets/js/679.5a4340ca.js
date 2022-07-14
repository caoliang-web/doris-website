(window.webpackJsonp=window.webpackJsonp||[]).push([[679],{1308:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"数据备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据备份"}},[s._v("#")]),s._v(" 数据备份")]),s._v(" "),t("p",[s._v("Doris 支持将当前数据以文件的形式，通过 broker 备份到远端存储系统中。之后可以通过 恢复 命令，从远端存储系统中将数据恢复到任意 Doris 集群。通过这个功能，Doris 可以支持将数据定期的进行快照备份。也可以通过这个功能，在不同集群间进行数据迁移。")]),s._v(" "),t("p",[s._v("该功能需要 Doris 版本 0.8.2+")]),s._v(" "),t("p",[s._v("使用该功能，需要部署对应远端存储的 broker。如 BOS、HDFS 等。可以通过 "),t("code",[s._v("SHOW BROKER;")]),s._v(" 查看当前部署的 broker。")]),s._v(" "),t("h2",{attrs:{id:"简要原理说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简要原理说明"}},[s._v("#")]),s._v(" 简要原理说明")]),s._v(" "),t("p",[s._v("备份操作是将指定表或分区的数据，直接以 Doris 存储的文件的形式，上传到远端仓库中进行存储。当用户提交 Backup 请求后，系统内部会做如下操作：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("快照及快照上传")]),s._v(" "),t("p",[s._v("快照阶段会对指定的表或分区数据文件进行快照。之后，备份都是对快照进行操作。在快照之后，对表进行的更改、导入等操作都不再影响备份的结果。快照只是对当前数据文件产生一个硬链，耗时很少。快照完成后，会开始对这些快照文件进行逐一上传。快照上传由各个 Backend 并发完成。")])]),s._v(" "),t("li",[t("p",[s._v("元数据准备及上传")]),s._v(" "),t("p",[s._v("数据文件快照上传完成后，Frontend 会首先将对应元数据写成本地文件，然后通过 broker 将本地元数据文件上传到远端仓库。完成最终备份作业")])]),s._v(" "),t("li",[t("p",[s._v("动态分区表说明")]),s._v(" "),t("p",[s._v("如果该表是动态分区表，备份之后会自动禁用动态分区属性，在做恢复的时候需要手动将该表的动态分区属性启用，命令如下:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dynamic_partition.enable"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("备份和恢复操作都不会保留表的 "),t("code",[s._v("colocate_with")]),s._v(" 属性。")])])]),s._v(" "),t("h2",{attrs:{id:"开始备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始备份"}},[s._v("#")]),s._v(" 开始备份")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("创建一个hdfs的远程仓库example_repo：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" REPOSITORY "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("example_repo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" BROKER "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("hdfs_broker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" LOCATION "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hdfs://hadoop-name-node:54310/path/to/repo/"')]),s._v("\nPROPERTIES\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("全量备份 example_db 下的表 example_tbl 到仓库 example_repo 中：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BACKUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" example_db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("snapshot_label1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" example_repo\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("example_tbl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nPROPERTIES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"full"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("全量备份 example_db 下，表 example_tbl 的 p1, p2 分区，以及表 example_tbl2 到仓库 example_repo 中：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BACKUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" example_db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("snapshot_label2\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" example_repo\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   example_tbl "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("p2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   example_tbl2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("查看最近 backup 作业的执行情况：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BACKUP")]),s._v("\\G"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n               JobId: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17891847")]),s._v("\n        SnapshotName: snapshot_label1\n              DbName: example_db\n               State: FINISHED\n          BackupObjs: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("default_cluster:example_db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example_tbl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          CreateTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v("\nSnapshotFinishedTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("\n  UploadFinishedTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),s._v("\n        FinishedTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("44")]),s._v("\n     UnfinishedTasks:\n            Progress:\n          TaskErrMsg:\n              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Status")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n             Timeout: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("查看远端仓库中已存在的备份")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" example_repo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"snapshot_label1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------+---------------------+--------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Snapshot")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Timestamp")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------+---------------------+--------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" snapshot_label1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" OK     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------+---------------------+--------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.15")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])]),s._v(" "),t("p",[s._v("BACKUP的更多用法可参考 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP.html"}},[s._v("这里")]),s._v("。")],1),s._v(" "),t("h2",{attrs:{id:"最佳实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[s._v("#")]),s._v(" 最佳实践")]),s._v(" "),t("h3",{attrs:{id:"备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[s._v("#")]),s._v(" 备份")]),s._v(" "),t("p",[s._v("当前我们支持最小分区（Partition）粒度的全量备份（增量备份有可能在未来版本支持）。如果需要对数据进行定期备份，首先需要在建表时，合理的规划表的分区及分桶，比如按时间进行分区。然后在之后的运行过程中，按照分区粒度进行定期的数据备份。")]),s._v(" "),t("h3",{attrs:{id:"数据迁移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据迁移"}},[s._v("#")]),s._v(" 数据迁移")]),s._v(" "),t("p",[s._v("用户可以先将数据备份到远端仓库，再通过远端仓库将数据恢复到另一个集群，完成数据迁移。因为数据备份是通过快照的形式完成的，所以，在备份作业的快照阶段之后的新的导入数据，是不会备份的。因此，在快照完成后，到恢复作业完成这期间，在原集群上导入的数据，都需要在新集群上同样导入一遍。")]),s._v(" "),t("p",[s._v("建议在迁移完成后，对新旧两个集群并行导入一段时间。完成数据和业务正确性校验后，再将业务迁移到新的集群。")]),s._v(" "),t("h2",{attrs:{id:"重点说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重点说明"}},[s._v("#")]),s._v(" 重点说明")]),s._v(" "),t("ol",[t("li",[s._v("备份恢复相关的操作目前只允许拥有 ADMIN 权限的用户执行。")]),s._v(" "),t("li",[s._v("一个 Database 内，只允许有一个正在执行的备份或恢复作业。")]),s._v(" "),t("li",[s._v("备份和恢复都支持最小分区（Partition）级别的操作，当表的数据量很大时，建议按分区分别执行，以降低失败重试的代价。")]),s._v(" "),t("li",[s._v("因为备份恢复操作，操作的都是实际的数据文件。所以当一个表的分片过多，或者一个分片有过多的小版本时，可能即使总数据量很小，依然需要备份或恢复很长时间。用户可以通过 "),t("code",[s._v("SHOW PARTITIONS FROM table_name;")]),s._v(" 和 "),t("code",[s._v("SHOW TABLET FROM table_name;")]),s._v(" 来查看各个分区的分片数量，以及各个分片的文件版本数量，来预估作业执行时间。文件数量对作业执行的时间影响非常大，所以建议在建表时，合理规划分区分桶，以避免过多的分片。")]),s._v(" "),t("li",[s._v("当通过 "),t("code",[s._v("SHOW BACKUP")]),s._v(" 或者 "),t("code",[s._v("SHOW RESTORE")]),s._v(" 命令查看作业状态时。有可能会在 "),t("code",[s._v("TaskErrMsg")]),s._v(" 一列中看到错误信息。但只要 "),t("code",[s._v("State")]),s._v(" 列不为 "),t("code",[s._v("CANCELLED")]),s._v("，则说明作业依然在继续。这些 Task 有可能会重试成功。当然，有些 Task 错误，也会直接导致作业失败。\n常见的"),t("code",[s._v("TaskErrMsg")]),s._v("错误如下：\nQ1：备份到HDFS，状态显示UPLOADING，TaskErrMsg 错误信息：[13333: Close broker writer failed, broker:TNetworkAddress(hostname=10.10.0.0,port=8000) msg:errors while close file output stream, cause by: DataStreamer Exception: ]\n这个一般是网络通信问题，查看broker日志，看某个ip 或者端口不通，如果是云服务，则需要查看是否访问了内网，如果是，则可以在borker/conf文件夹下添加hdfs-site.xml，还需在hdfs-site.xml配置文件下添加dfs.client.use.datanode.hostname=true，并在broker节点上配置HADOOP集群的主机名映射。")]),s._v(" "),t("li",[s._v("如果恢复作业是一次覆盖操作（指定恢复数据到已经存在的表或分区中），那么从恢复作业的 "),t("code",[s._v("COMMIT")]),s._v(" 阶段开始，当前集群上被覆盖的数据有可能不能再被还原。此时如果恢复作业失败或被取消，有可能造成之前的数据已损坏且无法访问。这种情况下，只能通过再次执行恢复操作，并等待作业完成。因此，我们建议，如无必要，尽量不要使用覆盖的方式恢复数据，除非确认当前数据已不再使用。")])]),s._v(" "),t("h2",{attrs:{id:"相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关命令"}},[s._v("#")]),s._v(" 相关命令")]),s._v(" "),t("p",[s._v("和备份恢复功能相关的命令如下。以下命令，都可以通过 mysql-client 连接 Doris 后，使用 "),t("code",[s._v("help cmd;")]),s._v(" 的方式查看详细帮助。")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("CREATE REPOSITORY")]),s._v(" "),t("p",[s._v("创建一个远端仓库路径，用于备份或恢复。该命令需要借助 Broker 进程访问远端存储，不同的 Broker 需要提供不同的参数，具体请参阅 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/advanced/broker.html"}},[s._v("Broker文档")]),s._v("，也可以直接通过S3 协议备份到支持AWS S3协议的远程存储上去，也可以直接备份到HDFS，具体参考 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY.html"}},[s._v("创建远程仓库文档")])],1)]),s._v(" "),t("li",[t("p",[s._v("BACKUP")]),s._v(" "),t("p",[s._v("执行一次备份操作。")])]),s._v(" "),t("li",[t("p",[s._v("SHOW BACKUP")]),s._v(" "),t("p",[s._v("查看最近一次 backup 作业的执行情况，包括：")]),s._v(" "),t("ul",[t("li",[s._v("JobId：本次备份作业的 id。")]),s._v(" "),t("li",[s._v("SnapshotName：用户指定的本次备份作业的名称（Label）。")]),s._v(" "),t("li",[s._v("DbName：备份作业对应的 Database。")]),s._v(" "),t("li",[s._v("State：备份作业当前所在阶段：\n"),t("ul",[t("li",[s._v("PENDING：作业初始状态。")]),s._v(" "),t("li",[s._v("SNAPSHOTING：正在进行快照操作。")]),s._v(" "),t("li",[s._v("UPLOAD_SNAPSHOT：快照结束，准备上传。")]),s._v(" "),t("li",[s._v("UPLOADING：正在上传快照。")]),s._v(" "),t("li",[s._v("SAVE_META：正在本地生成元数据文件。")]),s._v(" "),t("li",[s._v("UPLOAD_INFO：上传元数据文件和本次备份作业的信息。")]),s._v(" "),t("li",[s._v("FINISHED：备份完成。")]),s._v(" "),t("li",[s._v("CANCELLED：备份失败或被取消。")])])]),s._v(" "),t("li",[s._v("BackupObjs：本次备份涉及的表和分区的清单。")]),s._v(" "),t("li",[s._v("CreateTime：作业创建时间。")]),s._v(" "),t("li",[s._v("SnapshotFinishedTime：快照完成时间。")]),s._v(" "),t("li",[s._v("UploadFinishedTime：快照上传完成时间。")]),s._v(" "),t("li",[s._v("FinishedTime：本次作业完成时间。")]),s._v(" "),t("li",[s._v("UnfinishedTasks：在 "),t("code",[s._v("SNAPSHOTTING")]),s._v("，"),t("code",[s._v("UPLOADING")]),s._v(" 等阶段，会有多个子任务在同时进行，这里展示的当前阶段，未完成的子任务的 task id。")]),s._v(" "),t("li",[s._v("TaskErrMsg：如果有子任务执行出错，这里会显示对应子任务的错误信息。")]),s._v(" "),t("li",[s._v("Status：用于记录在整个作业过程中，可能出现的一些状态信息。")]),s._v(" "),t("li",[s._v("Timeout：作业的超时时间，单位是秒。")])])]),s._v(" "),t("li",[t("p",[s._v("SHOW SNAPSHOT")]),s._v(" "),t("p",[s._v("查看远端仓库中已存在的备份。")]),s._v(" "),t("ul",[t("li",[s._v("Snapshot：备份时指定的该备份的名称（Label）。")]),s._v(" "),t("li",[s._v("Timestamp：备份的时间戳。")]),s._v(" "),t("li",[s._v("Status：该备份是否正常。")])]),s._v(" "),t("p",[s._v("如果在 "),t("code",[s._v("SHOW SNAPSHOT")]),s._v(" 后指定了 where 子句，则可以显示更详细的备份信息。")]),s._v(" "),t("ul",[t("li",[s._v("Database：备份时对应的 Database。")]),s._v(" "),t("li",[s._v("Details：展示了该备份完整的数据目录结构。")])])]),s._v(" "),t("li",[t("p",[s._v("CANCEL BACKUP")]),s._v(" "),t("p",[s._v("取消当前正在执行的备份作业。")])]),s._v(" "),t("li",[t("p",[s._v("DROP REPOSITORY")]),s._v(" "),t("p",[s._v("删除已创建的远端仓库。删除仓库，仅仅是删除该仓库在 Doris 中的映射，不会删除实际的仓库数据。")])])]),s._v(" "),t("h2",{attrs:{id:"更多帮助"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多帮助"}},[s._v("#")]),s._v(" 更多帮助")]),s._v(" "),t("p",[s._v("关于 BACKUP 使用的更多详细语法及最佳实践，请参阅 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP.html"}},[s._v("BACKUP")]),s._v(" 命令手册，你也可以在 MySql 客户端命令行下输入 "),t("code",[s._v("HELP BACKUP")]),s._v(" 获取更多帮助信息。")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);