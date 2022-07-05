(window.webpackJsonp=window.webpackJsonp||[]).push([[2916],{3544:function(e,s,a){"use strict";a.r(s);var t=a(15),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"get-fe-log-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-fe-log-file"}},[e._v("#")]),e._v(" Get FE log file")]),e._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" Request")]),e._v(" "),a("p",[a("code",[e._v("HEAD /api/get_log_file")])]),e._v(" "),a("p",[a("code",[e._v("GET /api/get_log_file")])]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("用户可以通过该 HTTP 接口获取 FE 的日志文件。")]),e._v(" "),a("p",[e._v("其中 HEAD 请求用于获取指定日志类型的日志文件列表。GET 请求用于下载指定的日志文件。")]),e._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),a("p",[e._v("无")]),e._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("type")])]),e._v(" "),a("p",[e._v("指定日志类型，支持如下类型：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("fe.audit.log")]),e._v("：FE 审计日志")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("file")])]),e._v(" "),a("p",[e._v("指定的文件名。")])])]),e._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[e._v("#")]),e._v(" Request body")]),e._v(" "),a("p",[e._v("无")]),e._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("HEAD")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('HTTP/1.1 200 OK\nfile_infos: {"fe.audit.log":24759,"fe.audit.log.20190528.1":132934}\ncontent-type: text/html\nconnection: keep-alive\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("返回的 header 中罗列出了当前所有指定类型的日志文件，以及每个文件的大小。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("GET")])]),e._v(" "),a("p",[e._v("以文本形式下载指定日志文件")])])]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("获取对应类型的日志文件列表")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('HEAD /api/get_log_file?type=fe.audit.log\n\nResponse:\n\nHTTP/1.1 200 OK\nfile_infos: {"fe.audit.log":24759,"fe.audit.log.20190528.1":132934}\ncontent-type: text/html\nconnection: keep-alive\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("在返回的 header 中，"),a("code",[e._v("file_infos")]),e._v(" 字段以 json 格式展示文件列表以及对应文件大小（单位字节）")])]),e._v(" "),a("li",[a("p",[e._v("下载日志文件")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GET /api/get_log_file?type=fe.audit.log&file=fe.audit.log.20190528.1\n\nResponse:\n\n< HTTP/1.1 200\n< Vary: Origin\n< Vary: Access-Control-Request-Method\n< Vary: Access-Control-Request-Headers\n< Content-Disposition: attachment;fileName=fe.audit.log\n< Content-Type: application/octet-stream;charset=UTF-8\n< Transfer-Encoding: chunked\n\n... File Content ...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);