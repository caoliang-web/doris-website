(window.webpackJsonp=window.webpackJsonp||[]).push([[685],{1313:function(t,a,e){"use strict";e.r(a);var s=e(15),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"检查和重置连接缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查和重置连接缓存"}},[t._v("#")]),t._v(" 检查和重置连接缓存")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("h3",{attrs:{id:"检查连接缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查连接缓存"}},[t._v("#")]),t._v(" 检查连接缓存")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("该功能用于检查brpc的连接缓存。\n\n说明：检查连接缓存是否可用,负载最大10M\nMETHOD: GET\nURI: http://be_host:be_http_port/api/check_rpc_channel/{host_to_check}/{remot_brpc_port}/{payload_size}\n")])])]),e("h3",{attrs:{id:"重置连接缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重置连接缓存"}},[t._v("#")]),t._v(" 重置连接缓存")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("该功能用于重置brpc的连接缓存。endpoints 可以时如下形式 `all` 清空全部缓存，  `host1:port1,host2:port2,...`: 清空到指定目标的缓存\n\n说明：重置连接缓存,负载最大10M\nMETHOD: GET\nURI: http://be_host:be_http_port/api/reset_rpc_channel/{endpoints}\n")])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('curl -X GET "http://host:port/api/check_rpc_channel/host2/8060/1024000"\ncurl -X GET "http://host:port/api/reset_rpc_channel/all"\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);