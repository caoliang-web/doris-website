(window.webpackJsonp=window.webpackJsonp||[]).push([[728],{1356:function(t,a,e){"use strict";e.r(a);var s=e(15),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"get-label-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-label-state"}},[t._v("#")]),t._v(" GET LABEL STATE")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("NAME:\n    get_load_state: get load's state by label\n    \nSYNOPSIS\n    curl -u user:passwd http://host:port/api/{db}/get_load_state?label=xxx\n\nDESCRIPTION\n    该命令用于查看一个Label对应的事务状态\n\nRETURN VALUES\n    执行完毕后，会以Json格式返回这次导入的相关内容。当前包括以下字段\n    Label：本次导入的 label，如果没有指定，则为一个 uuid。\n    Status：此命令是否成功执行，Success表示成功执行\n    Message： 具体的执行信息\n    State: 只有在Status为Success时才有意义\n       UNKNOWN: 没有找到对应的Label\n       PREPARE: 对应的事务已经prepare，但尚未提交\n       COMMITTED: 事务已经提交，不能被cancel\n       VISIBLE: 事务提交，并且数据可见，不能被cancel\n       ABORTED: 事务已经被ROLLBACK，导入已经失败。\n    \nERRORS\n")])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("1. 获得testDb, testLabel的状态\n    curl -u root http://host:port/api/testDb/get_load_state?label=testLabel\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("GET, LOAD, STATE\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);