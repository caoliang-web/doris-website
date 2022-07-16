(window.webpackJsonp=window.webpackJsonp||[]).push([[1122],{1750:function(e,a,t){"use strict";t.r(a);var r=t(15),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"hll-hyperloglog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hll-hyperloglog"}},[e._v("#")]),e._v(" HLL(HyperLogLog)")]),e._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("HLL\nHLL不能作为key列使用，建表时配合聚合类型为HLL_UNION。\n用户不需要指定长度和默认值。长度根据数据的聚合程度系统内控制。\n并且HLL列只能通过配套的hll_union_agg、hll_raw_agg、hll_cardinality、hll_hash进行查询或使用。\n\nHLL是模糊去重，在数据量大的情况性能优于Count Distinct。\nHLL的误差通常在1%左右，有时会达到2%。\n")])])]),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("select hour, HLL_UNION_AGG(pv) over(order by hour) uv from(\n   select hour, HLL_RAW_AGG(device_id) as pv\n   from metric_table -- 查询每小时的累计UV\n   where datekey=20200622\ngroup by hour order by 1\n) final;\n")])])]),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[e._v("#")]),e._v(" keywords")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("HLL,HYPERLOGLOG\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);