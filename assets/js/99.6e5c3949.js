(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{749:function(s,n,t){"use strict";t.r(n);var e=t(15),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"cluster-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cluster-action"}},[s._v("#")]),s._v(" Cluster Action")]),s._v(" "),t("h2",{attrs:{id:"request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[s._v("#")]),s._v(" Request")]),s._v(" "),t("p",[t("code",[s._v("GET /rest/v2/manager/cluster/cluster_info/conn_info")])]),s._v(" "),t("h2",{attrs:{id:"cluster-connection-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cluster-connection-information"}},[s._v("#")]),s._v(" Cluster Connection Information")]),s._v(" "),t("p",[t("code",[s._v("GET /rest/v2/manager/cluster/cluster_info/conn_info")])]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("Used to get cluster http, mysql connection information.")]),s._v(" "),t("h3",{attrs:{id:"response"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[s._v("#")]),s._v(" Response")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "fe_host:http_ip"\n        ],\n        "mysql": [\n            "fe_host:query_ip"\n        ]\n    },\n    "count": 0\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v('```\nGET /rest/v2/manager/cluster/cluster_info/conn_info\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "127.0.0.1:8030"\n        ],\n        "mysql": [\n            "127.0.0.1:9030"\n        ]\n    },\n    "count": 0\n}\n```')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);