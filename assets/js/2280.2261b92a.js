(window.webpackJsonp=window.webpackJsonp||[]).push([[2280],{2907:function(n,e,t){"use strict";t.r(e);var s=t(15),a=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"connection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[n._v("#")]),n._v(" CONNECTION")]),n._v(" "),t("p",[n._v("通过connection_id, 获取当前连接的query_id")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("curl -X GET http://fe_host:fe_http_port/api/connection?connection_id=123\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br")])]),t("p",[n._v("如果connection_id不存在，直接返回404 NOT FOUND错误")]),n._v(" "),t("p",[n._v("如果connection_id存在，会返回当前connection_id上一个进行的query_id")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "query_id" : 9133b7efa92a44c8-8ed4b44772ec2a0c\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);