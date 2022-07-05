(window.webpackJsonp=window.webpackJsonp||[]).push([[2020],{2648:function(s,t,a){"use strict";a.r(t);var e=a(15),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"cast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cast"}},[s._v("#")]),s._v(" CAST")]),s._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cast (input as type)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"bigint-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bigint-type"}},[s._v("#")]),s._v(" BIGINT type")]),s._v(" "),a("h3",{attrs:{id:"syntax-bigint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax-bigint"}},[s._v("#")]),s._v(" Syntax(BIGINT)")]),s._v(" "),a("p",[a("code",[s._v("cast (input as BIGINT)")])]),s._v(" "),a("p",[s._v("将 input 转成 指定的 type")]),s._v(" "),a("p",[s._v("将当前列 input 转换为 BIGINT 类型")]),s._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),a("ol",[a("li",[s._v("转常量，或表中某列")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> select cast (1 as BIGINT);\n+-------------------+\n| CAST(1 AS BIGINT) |\n+-------------------+\n|                 1 |\n+-------------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("转导入的原始数据")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(tmp_k1 as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("em",[s._v("注：在导入中，由于原始类型均为String，将值为浮点的原始数据做 cast的时候数据会被转换成 NULL ，比如 12.0 。Doris目前不会对原始数据做截断。")])]),s._v(" "),a("p",[s._v("如果想强制将这种类型的原始数据 cast to int 的话。请看下面写法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(cast(tmp_k1 as DOUBLE) as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n\nmysql> select cast(cast ("11.2" as double) as bigint);\n+----------------------------------------+\n| CAST(CAST(\'11.2\' AS DOUBLE) AS BIGINT) |\n+----------------------------------------+\n|                                     11 |\n+----------------------------------------+\n1 row in set (0.00 sec)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[s._v("#")]),s._v(" keyword")]),s._v(" "),a("p",[s._v("CAST")])])}),[],!1,null,null,null);t.default=n.exports}}]);