(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{1100:function(t,a,s){"use strict";s.r(a);var e=s(15),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"truncate-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#truncate-table"}},[t._v("#")]),t._v(" TRUNCATE-TABLE")]),t._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),s("p",[t._v("TRUNCATE TABLE")]),t._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("This statement is used to clear the data of the specified table and partition\ngrammar:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRUNCATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("tbl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("illustrate:")]),t._v(" "),s("ul",[s("li",[t._v("The statement clears the data, but leaves the table or partition.")]),t._v(" "),s("li",[t._v("Unlike DELETE, this statement can only clear the specified table or partition as a whole, and cannot add filter conditions.")]),t._v(" "),s("li",[t._v("Unlike DELETE, using this method to clear data will not affect query performance.")]),t._v(" "),s("li",[t._v("The data deleted by this operation cannot be recovered.")]),t._v(" "),s("li",[t._v("When using this command, the table status needs to be NORMAL, that is, operations such as SCHEMA CHANGE are not allowed.")])]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Clear the table tbl under example_db")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRUNCATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" example_db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tbl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("Empty p1 and p2 partitions of table tbl")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRUNCATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tbl "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" Keywords")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(" TRUNCATE, TABLE\n")])])]),s("h3",{attrs:{id:"best-practice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice")])])}),[],!1,null,null,null);a.default=n.exports}}]);