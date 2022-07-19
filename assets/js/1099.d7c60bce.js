(window.webpackJsonp=window.webpackJsonp||[]).push([[1099],{1725:function(a,e,s){"use strict";s.r(e);var t=s(15),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"show-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-transaction"}},[a._v("#")]),a._v(" SHOW TRANSACTION")]),a._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),s("p",[a._v("This syntax is used to view transaction details for the specified transaction id or label name.")]),a._v(" "),s("p",[a._v("grammar:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SHOW TRANSACTION\n[FROM db_name]\nWHERE\n[id = transaction_id]\n[label = label_name];\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("Example return result:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("     TransactionId: 4005\n             Label: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\n       Coordinator: FE: 10.74.167.16\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2020-01-09 14:59:07\n        CommitTime: 2020-01-09 14:59:09\n        FinishTime: 2020-01-09 14:59:09\n            Reason:\nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 300000\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("ul",[s("li",[a._v("TransactionId: transaction id")]),a._v(" "),s("li",[a._v("Label: the label of the corresponding load job")]),a._v(" "),s("li",[a._v("Coordinator: the node responsible for transaction coordination")]),a._v(" "),s("li",[a._v("TransactionStatus: transaction status\n    * PREPARE: preparation stage\n    * COMMITTED: The transaction was successful, but the data is not visible\n    * VISIBLE: The transaction was successful and the data is visible\n    * ABORTED: transaction failed")]),a._v(" "),s("li",[a._v("LoadJobSourceType: The type of the load job.")]),a._v(" "),s("li",[a._v("PrepareTime: transaction start time")]),a._v(" "),s("li",[a._v("CommitTime: the time when the transaction was successfully committed")]),a._v(" "),s("li",[a._v("FinishTime: The time when the data is visible")]),a._v(" "),s("li",[a._v("Reason: error message")]),a._v(" "),s("li",[a._v("ErrorReplicasCount: Number of replicas with errors")]),a._v(" "),s("li",[a._v("ListenerId: the id of the related load job")]),a._v(" "),s("li",[a._v("TimeoutMs: transaction timeout time in milliseconds")])]),a._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("View the transaction with id 4005:")]),a._v(" "),s("p",[a._v("SHOW TRANSACTION WHERE ID = 4005;")])]),a._v(" "),s("li",[s("p",[a._v("Specify the db and view the transaction with id 4005:")]),a._v(" "),s("p",[a._v("SHOW TRANSACTION FROM db WHERE ID = 4005;")])]),a._v(" "),s("li",[s("p",[a._v("View the transaction with label "),s("code",[a._v("label_name")]),a._v(":")]),a._v(" "),s("p",[a._v("SHOW TRANSACTION WHERE LABEL = 'label_name';")])])]),a._v(" "),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("SHOW, TRANSACTION")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);