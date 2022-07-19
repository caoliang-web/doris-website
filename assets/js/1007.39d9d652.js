(window.webpackJsonp=window.webpackJsonp||[]).push([[1007],{1635:function(s,n,a){"use strict";a.r(n);var t=a(15),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"substring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#substring"}},[s._v("#")]),s._v(" substring")]),s._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("p",[a("code",[s._v("VARCHAR substring(VARCHAR str, INT pos[, INT len])")])]),s._v(" "),a("p",[s._v("没有 "),a("code",[s._v("len")]),s._v(" 参数时返回从位置 "),a("code",[s._v("pos")]),s._v(" 开始的字符串 "),a("code",[s._v("str")]),s._v(" 的一个子字符串，\n在有 "),a("code",[s._v("len")]),s._v(" 参数时返回从位置 "),a("code",[s._v("pos")]),s._v(" 开始的字符串 "),a("code",[s._v("str")]),s._v(" 的一个长度为 "),a("code",[s._v("len")]),s._v(" 子字符串，\n"),a("code",[s._v("pos")]),s._v(" 参数可以使用负值，在这种情况下，子字符串是以字符串 "),a("code",[s._v("str")]),s._v(" 末尾开始计算 "),a("code",[s._v("pos")]),s._v(" 个字符，而不是开头,\n"),a("code",[s._v("pos")]),s._v(" 的值为 0 返回一个空字符串。")]),s._v(" "),a("p",[s._v("对于所有形式的 SUBSTRING()，要从中提取子字符串的字符串中第一个字符的位置为1。")]),s._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> select substring('abc1', 2);\n+-----------------------------+\n| substring('abc1', 2)        |\n+-----------------------------+\n| bc1                         |\n+-----------------------------+\n\nmysql> select substring('abc1', -2);\n+-----------------------------+\n| substring('abc1', -2)       |\n+-----------------------------+\n| c1                          |\n+-----------------------------+\n\nmysql> select substring('abc1', 0);\n+----------------------+\n| substring('abc1', 0) |\n+----------------------+\n|                      |\n+----------------------+\n\nmysql> select substring('abc1', 5);\n+-----------------------------+\n| substring('abc1', 5)        |\n+-----------------------------+\n| NULL                        |\n+-----------------------------+\n\nmysql> select substring('abc1def', 2, 2);\n+-----------------------------+\n| substring('abc1def', 2, 2)  |\n+-----------------------------+\n| bc                          |\n+-----------------------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),a("p",[s._v("SUBSTRING, STRING")])])}),[],!1,null,null,null);n.default=e.exports}}]);