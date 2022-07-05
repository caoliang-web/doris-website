(window.webpackJsonp=window.webpackJsonp||[]).push([[2764],{3392:function(s,t,e){"use strict";e.r(t);var a=e(15),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"begin-commit-rollback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#begin-commit-rollback"}},[s._v("#")]),s._v(" BEGIN, COMMIT, ROLLBACK")]),s._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("BEGIN;\nINSERT INTO table_name ...\nCOMMIT;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("BEGIN [ WITH LABEL label];\nINSERT INTO table_name ...\nROLLBACK;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[s._v("#")]),s._v(" Parameters")]),s._v(" "),e("blockquote",[e("p",[s._v("label: 用于指定当前事务的标签名。")])]),s._v(" "),e("h3",{attrs:{id:"note"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[s._v("#")]),s._v(" Note")]),s._v(" "),e("p",[s._v("事务只能对insert使用，而不能对update和delete使用，当指定标签时，可通过以下命令检查事务的运行状态： "),e("code",[s._v("SHOW TRANSACTION WHERE LABEL = 'label'")])]),s._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),e("ol",[e("li",[s._v("开启一个事务，不指定标签，执行insert后提交。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("BEGIN\nINSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\nCOMMIT:\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("所有在"),e("code",[s._v("begin")]),s._v("和"),e("code",[s._v("commit")]),s._v("之间的数据会被插入到test表中。")]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("开启一个事务，不指定标签，执行insert后，回滚。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("BEGIN\nINSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\nROLLBACK:\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("所有在"),e("code",[s._v("begin")]),s._v("和"),e("code",[s._v("commit")]),s._v("之间的数据会取消，没有任何数据插入到test表中。")]),s._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[s._v("开启一个事务，指定标签为test_label1，执行insert后提交。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("BEGIN WITH LABEL test_label1\nINSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\nCOMMIT:\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("所有在"),e("code",[s._v("begin")]),s._v("和"),e("code",[s._v("commit")]),s._v("之间的数据会被插入到test表中。\n标签"),e("code",[s._v("test_label1")]),s._v("用于标记该事务，可以通过以下命令来检查事务的状态："),e("code",[s._v("SHOW TRANSACTION WHERE LABEL = 'test_label1'")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[s._v("#")]),s._v(" keyword")]),s._v(" "),e("p",[s._v("BEGIN, COMMIT, ROLLBACK")])])}),[],!1,null,null,null);t.default=n.exports}}]);