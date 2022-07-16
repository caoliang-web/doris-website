(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{1102:function(t,a,s){"use strict";s.r(a);var e=s(15),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"create-table-like"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-table-like"}},[t._v("#")]),t._v(" CREATE-TABLE-LIKE")]),t._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),s("p",[t._v("CREATE TABLE LIKE")]),t._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("This statement is used to create an empty table with the exact same table structure as another table, and can optionally replicate some rollups.")]),t._v(" "),s("p",[t._v("grammar:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("EXTERNAL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("table_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("table_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH ROLLUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("r2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("r3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("illustrate:")]),t._v(" "),s("ul",[s("li",[t._v("The copied table structure includes Column Definition, Partitions, Table Properties, etc.")]),t._v(" "),s("li",[t._v("The user needs to have "),s("code",[t._v("SELECT")]),t._v(" permission on the copied original table")]),t._v(" "),s("li",[t._v("Support for copying external tables such as MySQL")]),t._v(" "),s("li",[t._v("Support the rollup of copying OLAP Table")])]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create an empty table with the same table structure as table1 under the test1 library, the table name is table2")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("Create an empty table with the same table structure as test1.table1 under the test2 library, the table name is table2")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("Create an empty table with the same table structure as table1 under the test1 library, the table name is table2, and copy the two rollups of r1 and r2 of table1 at the same time")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH ROLLUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("r2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("Create an empty table with the same table structure as table1 under the test1 library, the table name is table2, and copy all the rollups of table1 at the same time")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH ROLLUP")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("Create an empty table with the same table structure as test1.table1 under the test2 library, the table name is table2, and copy the two rollups of r1 and r2 of table1 at the same time")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH ROLLUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("r2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("Create an empty table with the same table structure as test1.table1 under the test2 library, the table name is table2, and copy all the rollups of table1 at the same time")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH ROLLUP")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("Create an empty table under the test1 library with the same table structure as the MySQL outer table1, the table name is table2")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" Keywords")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("CREATE, TABLE, LIKE\n")])])]),s("h3",{attrs:{id:"best-practice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice")])])}),[],!1,null,null,null);a.default=r.exports}}]);