(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{1101:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"create-table-as-select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-table-as-select"}},[t._v("#")]),t._v(" CREATE-TABLE-AS-SELECT")]),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),a("p",[t._v("CREATE TABLE AS SELECT")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("This statement creates the table structure by returning the results from the Select statement and imports the data at the same time")]),t._v(" "),a("p",[t._v("grammar：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" column_name_list "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nopt_engine opt_partition opt_properties KW_AS query_stmt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("illustrate:")]),t._v(" "),a("ul",[a("li",[t._v("The user needs to have"),a("code",[t._v("SELECT")]),t._v("permission for the source table and"),a("code",[t._v("CREATE")]),t._v("permission for the target database")]),t._v(" "),a("li",[t._v("After a table is created, data is imported. If the import fails, the table is deleted")])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Using the field names in the SELECT statement")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("select_varchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" \nPROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('\\"replication_num\\" '),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(' \\"'),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v('\\"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("varchar_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Custom field names (need to match the number of fields returned)")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("select_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" testname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userstatus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nPROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('\\"replication_num\\" '),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(' \\"'),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v('\\"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" vt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("varchar_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" vt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("join_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" jt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" vt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userId\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" Keywords")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("CREATE, TABLE, AS, SELECT\n")])])]),a("h3",{attrs:{id:"best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice")])])}),[],!1,null,null,null);s.default=n.exports}}]);