(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{1217:function(t,s,e){"use strict";e.r(s);var a=e(15),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"show-routine-load-task"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-routine-load-task"}},[t._v("#")]),t._v(" SHOW-ROUTINE-LOAD-TASK")]),t._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),e("p",[t._v("SHOW ROUTINE LOAD TASK")]),t._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("View the currently running subtasks of a specified Routine Load job.")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROUTINE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOAD")]),t._v(" TASK\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" JobName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"job_name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("The returned results are as follows:")]),t._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('              TaskId: d67ce537f1be4b86-abf47530b79ab8e6\n               TxnId: 4\n           TxnStatus: UNKNOWN\n               JobId: 10280\n          CreateTime: 2020-12-12 20:29:48\n    ExecuteStartTime: 2020-12-12 20:29:48\n             Timeout: 20\n                BeId: 10002\nDataSourceProperties: {"0":19}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("ul",[e("li",[e("code",[t._v("TaskId")]),t._v(": The unique ID of the subtask.")]),t._v(" "),e("li",[e("code",[t._v("TxnId")]),t._v(": The import transaction ID corresponding to the subtask.")]),t._v(" "),e("li",[e("code",[t._v("TxnStatus")]),t._v(": The import transaction status corresponding to the subtask. Usually UNKNOWN. No real meaning.")]),t._v(" "),e("li",[e("code",[t._v("JobId")]),t._v(": The job ID corresponding to the subtask.")]),t._v(" "),e("li",[e("code",[t._v("CreateTime")]),t._v(": The creation time of the subtask.")]),t._v(" "),e("li",[e("code",[t._v("ExecuteStartTime")]),t._v(": The time when the subtask is scheduled to be executed, usually later than the creation time.")]),t._v(" "),e("li",[e("code",[t._v("Timeout")]),t._v(": Subtask timeout, usually twice the "),e("code",[t._v("MaxIntervalS")]),t._v(" set by the job.")]),t._v(" "),e("li",[e("code",[t._v("BeId")]),t._v(": The ID of the BE node executing this subtask.")]),t._v(" "),e("li",[e("code",[t._v("DataSourceProperties")]),t._v(": The starting offset of the Kafka Partition that the subtask is ready to consume. is a Json format string. Key is Partition Id. Value is the starting offset of consumption.")])]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Display the subtask information of the routine import task named test1.")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROUTINE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOAD")]),t._v(" TASK "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" JobName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])]),t._v(" "),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" Keywords")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("SHOW, ROUTINE, LOAD, TASK\n")])])]),e("h3",{attrs:{id:"best-practice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice")]),t._v(" "),e("p",[t._v("With this command, you can view how many subtasks are currently running in a Routine Load job, and which BE node is running on.")])])}),[],!1,null,null,null);s.default=n.exports}}]);