(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{708:function(e,t,a){"use strict";a.r(t);var c=a(15),s=Object(c.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"check-reset-stub-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-reset-stub-cache"}},[e._v("#")]),e._v(" CHECK/RESET Stub Cache")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("h3",{attrs:{id:"check-stub-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-stub-cache"}},[e._v("#")]),e._v(" Check Stub Cache")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Check whether the connection cache is available\n\nDescription: Check whether the connection cache is available, the maximum load is 10M\nMETHOD: GET\nURI: http://be_host:be_http_port/api/check_rpc_channel/{host_to_check}/{remot_brpc_port}/{payload_size}\n")])])]),a("h3",{attrs:{id:"reset-stub-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-stub-cache"}},[e._v("#")]),e._v(" Reset Stub Cache")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("This api is used to reset the connection cache of brpc. Endpoints can be in the form of `all` to clear all caches, `host1:port1,host2:port2,...`: clear to the cache of the specified target\n\nDescription: Reset connection cache\nMETHOD: GET\nURI: http://be_host:be_http_port/api/reset_rpc_channel/{endpoints}\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('curl -X GET "http://host:port/api/check_rpc_channel/host2/8060/1024000"\ncurl -X GET "http://host:port/api/reset_rpc_channel/all"\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);