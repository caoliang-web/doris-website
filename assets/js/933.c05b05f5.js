(window.webpackJsonp=window.webpackJsonp||[]).push([[933],{1561:function(s,a,t){"use strict";t.r(a);var n=t(15),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"str-to-date"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#str-to-date"}},[s._v("#")]),s._v(" str_to_date")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),t("h4",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),t("p",[t("code",[s._v("DATETIME STR_TO_DATE(VARCHAR str, VARCHAR format)")])]),s._v(" "),t("p",[s._v("通过format指定的方式将str转化为DATE类型，如果转化结果不对返回NULL")]),s._v(" "),t("p",[s._v("支持的format格式与date_format一致")]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> select str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s');\n+---------------------------------------------------------+\n| str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s') |\n+---------------------------------------------------------+\n| 2014-12-21 12:34:56                                     |\n+---------------------------------------------------------+\n\nmysql> select str_to_date('2014-12-21 12:34%3A56', '%Y-%m-%d %H:%i%%3A%s');\n+--------------------------------------------------------------+\n| str_to_date('2014-12-21 12:34%3A56', '%Y-%m-%d %H:%i%%3A%s') |\n+--------------------------------------------------------------+\n| 2014-12-21 12:34:56                                          |\n+--------------------------------------------------------------+\n\nmysql> select str_to_date('200442 Monday', '%X%V %W');\n+-----------------------------------------+\n| str_to_date('200442 Monday', '%X%V %W') |\n+-----------------------------------------+\n| 2004-10-18                              |\n+-----------------------------------------+\n\nmysql> select str_to_date(\"2020-09-01\", \"%Y-%m-%d %H:%i:%s\");\n+------------------------------------------------+\n| str_to_date('2020-09-01', '%Y-%m-%d %H:%i:%s') |\n+------------------------------------------------+\n| 2020-09-01 00:00:00                            |\n+------------------------------------------------+\n1 row in set (0.01 sec)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("STR_TO_DATE,STR,TO,DATE\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);