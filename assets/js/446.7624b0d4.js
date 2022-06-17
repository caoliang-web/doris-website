(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{1071:function(t,a,s){"use strict";s.r(a);var e=s(15),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"backup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backup"}},[t._v("#")]),t._v(" BACKUP")]),t._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),s("p",[t._v("BACKUP")]),t._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("This statement is used to back up the data under the specified database. This command is an asynchronous operation. After the submission is successful, you need to check the progress through the SHOW BACKUP command. Only backing up tables of type OLAP is supported.")]),t._v(" "),s("p",[t._v("grammar:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BACKUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SNAPSHOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("db_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("{snapshot_name}\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("repository_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("EXCLUDE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("illustrate:")]),t._v(" "),s("ul",[s("li",[t._v("There can only be one executing BACKUP or RESTORE task under the same database.")]),t._v(" "),s("li",[t._v("The ON clause identifies the tables and partitions that need to be backed up. If no partition is specified, all partitions of the table are backed up by default")]),t._v(" "),s("li",[t._v("Tables and partitions that do not require backup are identified in the EXCLUDE clause. Back up all partition data for all tables in this database except the specified table or partition.")]),t._v(" "),s("li",[t._v("PROPERTIES currently supports the following properties:\n"),s("ul",[s("li",[t._v('"type" = "full": indicates that this is a full update (default)')]),t._v(" "),s("li",[t._v('"timeout" = "3600": The task timeout period, the default is one day. in seconds.')])])])]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("ol",[s("li",[t._v("Fully backup the table example_tbl under example_db to the warehouse example_repo:")])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BACKUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SNAPSHOT")]),t._v(" example_db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("snapshot_label1\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" example_repo\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("example_tbl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"full"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Under the full backup example_db, the p1, p2 partitions of the table example_tbl, and the table example_tbl2 to the warehouse example_repo:")])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BACKUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SNAPSHOT")]),t._v(" example_db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("snapshot_label2\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" example_repo\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    example_tbl "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    example_tbl2\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Full backup of all tables except table example_tbl under example_db to warehouse example_repo:")])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BACKUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SNAPSHOT")]),t._v(" example_db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("snapshot_label3\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" example_repo\nEXCLUDE "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("example_tbl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" Keywords")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("BACKUP\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"best-practice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Only one backup operation can be performed under the same database.")])]),t._v(" "),s("li",[s("p",[t._v("The backup operation will back up the underlying table and "),s("RouterLink",{attrs:{to:"/docs/advanced/materialized-view.html"}},[t._v("materialized view")]),t._v(" of the specified table or partition, and only one copy will be backed up.")],1)]),t._v(" "),s("li",[s("p",[t._v("Efficiency of backup operations")]),t._v(" "),s("p",[t._v("The efficiency of backup operations depends on the amount of data, the number of Compute Nodes, and the number of files. Each Compute Node where the backup data shard is located will participate in the upload phase of the backup operation. The greater the number of nodes, the higher the upload efficiency.")]),t._v(" "),s("p",[t._v("The amount of file data refers only to the number of shards, and the number of files in each shard. If there are many shards, or there are many small files in the shards, the backup operation time may be increased.")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);