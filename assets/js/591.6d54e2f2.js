(window.webpackJsonp=window.webpackJsonp||[]).push([[591],{1219:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"show-snapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-snapshot"}},[s._v("#")]),s._v(" SHOW-SNAPSHOT")]),s._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),t("p",[s._v("SHOW SNAPSHOT")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("This statement is used to view backups that already exist in the repository.")]),s._v(" "),t("p",[s._v("grammar:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("repo_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"snapshot"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TIMESTAMP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"backup_timestamp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("illustrate:")]),s._v(" "),t("ol",[t("li",[s._v("The meanings of the columns are as follows:\nSnapshot: The name of the backup\nTimestamp: corresponds to the time version of the backup\nStatus: If the backup is normal, it will display OK, otherwise it will display an error message")]),s._v(" "),t("li",[s._v("If TIMESTAMP is specified, the following additional information is displayed:\nDatabase: The name of the database to which the backup data originally belonged\nDetails: In the form of Json, the data directory and file structure of the entire backup are displayed")])]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("View the existing backups in the repository example_repo")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" example_repo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("View only the backup named backup1 in the repository example_repo:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" example_repo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"backup1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v('View the details of the backup named backup1 in the warehouse example_repo with the time version "2018-05-05-15-34-26":')]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" example_repo\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"backup1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TIMESTAMP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-05-05-15-34-26"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("SHOW, SNAPSHOT\n")])])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=r.exports}}]);