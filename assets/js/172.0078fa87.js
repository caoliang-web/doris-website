(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{800:function(e,t,s){"use strict";s.r(t);var a=s(15),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"data-export"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-export"}},[e._v("#")]),e._v(" Data export")]),e._v(" "),s("p",[e._v("Export is a function provided by Doris to export data. This function can export user-specified table or partition data in text format to remote storage through Broker process, such as HDFS/BOS.")]),e._v(" "),s("p",[e._v("This document mainly introduces the basic principles, usage, best practices and precautions of Export.")]),e._v(" "),s("h2",{attrs:{id:"noun-interpretation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),s("ul",[s("li",[e._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),e._v(" "),s("li",[e._v("BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")]),e._v(" "),s("li",[e._v("Broker: Doris can manipulate files for remote storage through the Broker process.")]),e._v(" "),s("li",[e._v("Tablet: Data fragmentation. A table is divided into multiple data fragments.")])]),e._v(" "),s("h2",{attrs:{id:"principle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),s("p",[e._v("After the user submits an Export job. Doris counts all Tablets involved in this job. These tablets are then grouped to generate a special query plan for each group. The query plan reads the data on the included tablet and then writes the data to the specified path of the remote storage through Broker. It can also be directly exported to the remote storage that supports S3 protocol through S3 protocol.")]),e._v(" "),s("p",[e._v("The overall mode of dispatch is as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("+--------+\n| Client |\n+---+----+\n    |  1. Submit Job\n    |\n+---v--------------------+\n| FE                     |\n|                        |\n| +-------------------+  |\n| | ExportPendingTask |  |\n| +-------------------+  |\n|                        | 2. Generate Tasks\n| +--------------------+ |\n| | ExportExporingTask | |\n| +--------------------+ |\n|                        |\n| +-----------+          |     +----+   +------+   +---------+\n| | QueryPlan +----------------\x3e BE +---\x3eBroker+---\x3e         |\n| +-----------+          |     +----+   +------+   | Remote  |\n| +-----------+          |     +----+   +------+   | Storage |\n| | QueryPlan +----------------\x3e BE +---\x3eBroker+---\x3e         |\n| +-----------+          |     +----+   +------+   +---------+\n+------------------------+         3. Execute Tasks\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br")])]),s("ol",[s("li",[e._v("The user submits an Export job to FE.")]),e._v(" "),s("li",[e._v("FE's Export scheduler performs an Export job in two stages:\n"),s("ol",[s("li",[e._v("PENDING: FE generates Export Pending Task, sends snapshot command to BE, and takes a snapshot of all Tablets involved. And generate multiple query plans.")]),e._v(" "),s("li",[e._v("EXPORTING: FE generates Export ExportingTask and starts executing the query plan.")])])])]),e._v(" "),s("h3",{attrs:{id:"query-plan-splitting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-plan-splitting"}},[e._v("#")]),e._v(" query plan splitting")]),e._v(" "),s("p",[e._v("The Export job generates multiple query plans, each of which scans a portion of the Tablet. The number of Tablets scanned by each query plan is specified by the FE configuration parameter "),s("code",[e._v("export_tablet_num_per_task")]),e._v(", which defaults to 5. That is, assuming a total of 100 Tablets, 20 query plans will be generated. Users can also specify this number by the job attribute "),s("code",[e._v("tablet_num_per_task")]),e._v(", when submitting a job.")]),e._v(" "),s("p",[e._v("Multiple query plans for a job are executed sequentially.")]),e._v(" "),s("h3",{attrs:{id:"query-plan-execution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-plan-execution"}},[e._v("#")]),e._v(" Query Plan Execution")]),e._v(" "),s("p",[e._v("A query plan scans multiple fragments, organizes read data in rows, batches every 1024 actions, and writes Broker to remote storage.")]),e._v(" "),s("p",[e._v("The query plan will automatically retry three times if it encounters errors. If a query plan fails three retries, the entire job fails.")]),e._v(" "),s("p",[e._v("Doris will first create a temporary directory named "),s("code",[e._v("doris_export_tmp_12345")]),e._v(" (where "),s("code",[e._v("12345")]),e._v(" is the job id) in the specified remote storage path. The exported data is first written to this temporary directory. Each query plan generates a file with an example file name:")]),e._v(" "),s("p",[s("code",[e._v("export-data-c69fcf2b6db5420f-a96b94c1ff8bccef-1561453713822")])]),e._v(" "),s("p",[e._v("Among them, "),s("code",[e._v("c69fcf2b6db5420f-a96b94c1ff8bccef")]),e._v(" is the query ID of the query plan. "),s("code",[e._v("1561453713822")]),e._v(" Timestamp generated for the file.")]),e._v(" "),s("p",[e._v("When all data is exported, Doris will rename these files to the user-specified path.")]),e._v(" "),s("h3",{attrs:{id:"broker-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#broker-parameter"}},[e._v("#")]),e._v(" Broker parameter")]),e._v(" "),s("p",[e._v("Export needs to use the Broker process to access remote storage. Different brokers need to provide different parameters. For details, please refer to "),s("RouterLink",{attrs:{to:"/docs/advanced/broker.html"}},[e._v("Broker documentation")])],1),e._v(" "),s("h2",{attrs:{id:"start-export"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-export"}},[e._v("#")]),e._v(" Start Export")]),e._v(" "),s("p",[e._v("For detailed usage of Export, please refer to "),s("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT.html"}},[e._v("SHOW EXPORT")]),e._v(".")],1),e._v(" "),s("p",[e._v("Export's detailed commands can be passed through "),s("code",[e._v("HELP EXPORT;")]),e._v(" Examples are as follows:")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("EXPORT "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TABLE")]),e._v(" db1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("tbl1 \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("PARTITION")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("p2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("expr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TO")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bos://bj-test-cmy/export/"')]),e._v(" \nPROPERTIES\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"label"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mylabel"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"column_separator"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('","')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"columns"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"col1,col2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"exec_mem_limit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2147483648"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"timeout"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"3600"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WITH")]),e._v(" BROKER "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hdfs"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"username"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"password"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"passwd"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br")])]),s("ul",[s("li",[s("code",[e._v("label")]),e._v(": The identifier of this export job. You can use this identifier to view the job status later.")]),e._v(" "),s("li",[s("code",[e._v("column_separator")]),e._v(": Column separator. The default is "),s("code",[e._v("\\t")]),e._v(". Supports invisible characters, such as'\\x07'.")]),e._v(" "),s("li",[s("code",[e._v("column")]),e._v(": columns to be exported, separated by commas, if this parameter is not filled in, all columns of the table will be exported by default.")]),e._v(" "),s("li",[s("code",[e._v("line_delimiter")]),e._v(": Line separator. The default is "),s("code",[e._v("\\n")]),e._v(". Supports invisible characters, such as'\\x07'.")]),e._v(" "),s("li",[s("code",[e._v("exec_mem_limit")]),e._v(": Represents the memory usage limitation of a query plan on a single BE in an Export job. Default 2GB. Unit bytes.")]),e._v(" "),s("li",[s("code",[e._v("timeout")]),e._v(": homework timeout. Default 2 hours. Unit seconds.")]),e._v(" "),s("li",[s("code",[e._v("tablet_num_per_task")]),e._v(": The maximum number of fragments allocated per query plan. The default is 5.")])]),e._v(" "),s("p",[e._v("After submitting a job, the job status can be imported by querying the   "),s("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT.html"}},[e._v("SHOW EXPORT")]),e._v("  command. The results are as follows:")],1),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("show")]),e._v(" EXPORT\\G"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("row")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n     JobId: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("14008")]),e._v("\n     State: FINISHED\n  Progress: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("%")]),e._v("\n  TaskInfo: {"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"partitions"')]),e._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"exec mem limit"')]),e._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2147483648")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"column separator"')]),e._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('","')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"line delimiter"')]),e._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tablet num"')]),e._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"broker"')]),e._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hdfs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"coord num"')]),e._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"db"')]),e._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"default_cluster:db1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tbl"')]),e._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tbl3"')]),e._v("}\n      Path: bos:"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//bj-test-cmy/export/")]),e._v("\nCreateTime: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("06")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("17")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("08")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("24")]),e._v("\n StartTime: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("06")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("17")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("08")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v("\nFinishTime: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("06")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("17")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("08")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("34")]),e._v("\n   Timeout: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3600")]),e._v("\n  ErrorMsg: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("NULL")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("row")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.01")]),e._v(" sec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("ul",[s("li",[e._v("JobId: The unique ID of the job")]),e._v(" "),s("li",[e._v("State: Job status:\n"),s("ul",[s("li",[e._v("PENDING: Jobs to be Scheduled")]),e._v(" "),s("li",[e._v("EXPORTING: Data Export")]),e._v(" "),s("li",[e._v("FINISHED: Operation Successful")]),e._v(" "),s("li",[e._v("CANCELLED: Job Failure")])])]),e._v(" "),s("li",[e._v("Progress: Work progress. The schedule is based on the query plan. Assuming a total of 10 query plans have been completed, the progress will be 30%.")]),e._v(" "),s("li",[e._v("TaskInfo: Job information in Json format:\n"),s("ul",[s("li",[e._v("db: database name")]),e._v(" "),s("li",[e._v("tbl: Table name")]),e._v(" "),s("li",[e._v("partitions: Specify the exported partition. "),s("code",[e._v("*")]),e._v(" Represents all partitions.")]),e._v(" "),s("li",[e._v("exec MEM limit: query plan memory usage limit. Unit bytes.")]),e._v(" "),s("li",[e._v("column separator: The column separator for the exported file.")]),e._v(" "),s("li",[e._v("line delimiter: The line separator for the exported file.")]),e._v(" "),s("li",[e._v("tablet num: The total number of tablets involved.")]),e._v(" "),s("li",[e._v("Broker: The name of the broker used.")]),e._v(" "),s("li",[e._v("Coord num: Number of query plans.")])])]),e._v(" "),s("li",[e._v("Path: Export path on remote storage.")]),e._v(" "),s("li",[e._v("CreateTime/StartTime/FinishTime: Creation time, start scheduling time and end time of jobs.")]),e._v(" "),s("li",[e._v("Timeout: Job timeout. The unit is seconds. This time is calculated from CreateTime.")]),e._v(" "),s("li",[e._v("Error Msg: If there is an error in the job, the cause of the error is shown here.")])]),e._v(" "),s("h2",{attrs:{id:"best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),s("h3",{attrs:{id:"splitting-query-plans"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#splitting-query-plans"}},[e._v("#")]),e._v(" Splitting Query Plans")]),e._v(" "),s("p",[e._v("How many query plans need to be executed for an Export job depends on the total number of Tablets and how many Tablets can be allocated for a query plan at most. Since multiple query plans are executed serially, the execution time of jobs can be reduced if more fragments are processed by one query plan. However, if the query plan fails (e.g., the RPC fails to call Broker, the remote storage jitters, etc.), too many tablets can lead to a higher retry cost of a query plan. Therefore, it is necessary to arrange the number of query plans and the number of fragments to be scanned for each query plan in order to balance the execution time and the success rate of execution. It is generally recommended that the amount of data scanned by a query plan be within 3-5 GB (the size and number of tables in a table can be viewed by "),s("code",[e._v("SHOW TABLET FROM tbl_name;")]),e._v("statement.")]),e._v(" "),s("h3",{attrs:{id:"exec-mem-limit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exec-mem-limit"}},[e._v("#")]),e._v(" exec_mem_limit")]),e._v(" "),s("p",[e._v("Usually, a query plan for an Export job has only two parts "),s("code",[e._v("scan")]),e._v("- "),s("code",[e._v("export")]),e._v(", and does not involve computing logic that requires too much memory. So usually the default memory limit of 2GB can satisfy the requirement. But in some scenarios, such as a query plan, too many Tablets need to be scanned on the same BE, or too many data versions of Tablets, may lead to insufficient memory. At this point, larger memory needs to be set through this parameter, such as 4 GB, 8 GB, etc.")]),e._v(" "),s("h2",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),s("ul",[s("li",[e._v("It is not recommended to export large amounts of data at one time. The maximum amount of exported data recommended by an Export job is tens of GB. Excessive export results in more junk files and higher retry costs.")]),e._v(" "),s("li",[e._v("If the amount of table data is too large, it is recommended to export it by partition.")]),e._v(" "),s("li",[e._v("During the operation of the Export job, if FE restarts or cuts the master, the Export job will fail, requiring the user to resubmit.")]),e._v(" "),s("li",[e._v("If the Export job fails, the "),s("code",[e._v("__doris_export_tmp_xxx")]),e._v(" temporary directory generated in the remote storage and the generated files will not be deleted, requiring the user to delete them manually.")]),e._v(" "),s("li",[e._v("If the Export job runs successfully, the "),s("code",[e._v("__doris_export_tmp_xxx")]),e._v(" directory generated in the remote storage may be retained or cleared according to the file system semantics of the remote storage. For example, in Baidu Object Storage (BOS), after removing the last file in a directory through rename operation, the directory will also be deleted. If the directory is not cleared, the user can clear it manually.")]),e._v(" "),s("li",[e._v("When the Export runs successfully or fails, the FE reboots or cuts, then some information of the jobs displayed by "),s("code",[e._v("SHOW EXPORT")]),e._v(" will be lost and cannot be viewed.")]),e._v(" "),s("li",[e._v("Export jobs only export data from Base tables, not Rollup Index.")]),e._v(" "),s("li",[e._v("Export jobs scan data and occupy IO resources, which may affect the query latency of the system.")])]),e._v(" "),s("h2",{attrs:{id:"relevant-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relevant-configuration"}},[e._v("#")]),e._v(" Relevant configuration")]),e._v(" "),s("h3",{attrs:{id:"fe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fe"}},[e._v("#")]),e._v(" FE")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("expo_checker_interval_second")]),e._v(": Scheduling interval of Export job scheduler, default is 5 seconds. Setting this parameter requires restarting FE.")]),e._v(" "),s("li",[s("code",[e._v("export_running_job_num_limit")]),e._v(": Limit on the number of Export jobs running. If exceeded, the job will wait and be in PENDING state. The default is 5, which can be adjusted at run time.")]),e._v(" "),s("li",[s("code",[e._v("Export_task_default_timeout_second")]),e._v(": Export job default timeout time. The default is 2 hours. It can be adjusted at run time.")]),e._v(" "),s("li",[s("code",[e._v("export_tablet_num_per_task")]),e._v(": The maximum number of fragments that a query plan is responsible for. The default is 5.")])]),e._v(" "),s("h2",{attrs:{id:"more-help"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more-help"}},[e._v("#")]),e._v(" More Help")]),e._v(" "),s("p",[e._v("For more detailed syntax and best practices used by Export, please refer to the "),s("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT.html"}},[e._v("Export")]),e._v(" command manual, you can also You can enter "),s("code",[e._v("HELP EXPORT")]),e._v(" at the command line of the MySql client for more help.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);