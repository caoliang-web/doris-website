(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{1144:function(e,a,t){"use strict";t.r(a);var s=t(15),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"admin-show-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#admin-show-config"}},[e._v("#")]),e._v(" ADMIN-SHOW-CONFIG")]),e._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[e._v("#")]),e._v(" Name")]),e._v(" "),t("p",[e._v("ADMIN SHOW CONFIG")]),e._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("This statement is used to display the configuration of the current cluster (currently only the configuration items of FE are supported)")]),e._v(" "),t("p",[e._v("grammar:")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v(" ADMIN "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SHOW")]),e._v(" FRONTEND CONFIG "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("LIKE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"pattern"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The columns in the results have the following meanings:")]),e._v(" "),t("ol",[t("li",[e._v("Key: Configuration item name")]),e._v(" "),t("li",[e._v("Value: Configuration item value")]),e._v(" "),t("li",[e._v("Type: Configuration item type")]),e._v(" "),t("li",[e._v("IsMutable: Whether it can be set by ADMIN SET CONFIG command")]),e._v(" "),t("li",[e._v("MasterOnly: Is it only applicable to Master FE")]),e._v(" "),t("li",[e._v("Comment: Configuration item description")])]),e._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("View the configuration of the current FE node")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("ADMIN "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SHOW")]),e._v(" FRONTEND CONFIG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Use the like predicate to search the configuration of the current Fe node")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> ADMIN SHOW FRONTEND CONFIG LIKE '%check_java_version%';\n+--------------------+-------+---------+---------- -+------------+---------+\n| Key | Value | Type | IsMutable | MasterOnly | Comment |\n+--------------------+-------+---------+---------- -+------------+---------+\n| check_java_version | true | boolean | false | false | |\n+--------------------+-------+---------+---------- -+------------+---------+\n1 row in set (0.01 sec)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])])])]),e._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[e._v("#")]),e._v(" Keywords")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("ADMIN, SHOW, CONFIG\n")])])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[e._v("#")]),e._v(" Best Practice")])])}),[],!1,null,null,null);a.default=n.exports}}]);