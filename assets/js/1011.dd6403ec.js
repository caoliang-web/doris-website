(window.webpackJsonp=window.webpackJsonp||[]).push([[1011],{1638:function(e,s,t){"use strict";t.r(s);var a=t(15),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"outer组合器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outer组合器"}},[e._v("#")]),e._v(" outer组合器")]),e._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("p",[e._v("在table function的函数名后面添加"),t("code",[e._v("_outer")]),e._v("后缀使得函数行为从"),t("code",[e._v("non-outer")]),e._v("变为"),t("code",[e._v("outer")]),e._v(",在表函数生成0行数据时添加一行"),t("code",[e._v("Null")]),e._v("数据。")]),e._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> select e1 from (select 1 k1) as t lateral view explode_numbers(0) tmp1 as e1;\nEmpty set\n\nmysql> select e1 from (select 1 k1) as t lateral view explode_numbers_outer(0) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n+------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[e._v("#")]),e._v(" keywords")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("outer\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);