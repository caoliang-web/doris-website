(window.webpackJsonp=window.webpackJsonp||[]).push([[2118],{2743:function(t,e,a){"use strict";a.r(e);var s=a(15),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"admin-check-tablet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-check-tablet"}},[t._v("#")]),t._v(" ADMIN CHECK TABLET")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("p",[t._v("该语句用于对一组 tablet 执行指定的检查操作")]),t._v(" "),a("p",[t._v("语法：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ADMIN CHECK TABLE (tablet_id1, tablet_id2, ...)\nPROPERTIES("type" = "...");\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("说明：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("必须指定 tablet id 列表以及 PROPERTIES 中的 type 属性。")])]),t._v(" "),a("li",[a("p",[t._v("目前 type 仅支持：")]),t._v(" "),a("ul",[a("li",[t._v("consistency: 对tablet的副本数据一致性进行检查。该命令为异步命令，发送后，Doris 会开始执行对应 tablet 的一致性检查作业。最终的结果，将体现在 "),a("code",[t._v('SHOW PROC "/statistic";')]),t._v(" 结果中的 InconsistentTabletNum 列。")])])])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("对指定的一组 tablet 进行副本数据一致性检查")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ADMIN CHECK TABLET (10000, 10001)\nPROPERTIES("type" = "consistency");\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("ADMIN,CHECK,TABLET\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);