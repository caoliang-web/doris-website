(window.webpackJsonp=window.webpackJsonp||[]).push([[680],{1307:function(a,s,e){"use strict";e.r(s);var t=e(15),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"数据删除恢复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据删除恢复"}},[a._v("#")]),a._v(" 数据删除恢复")]),a._v(" "),e("p",[a._v("Doris为了避免误操作造成的灾难，支持对误删除的数据库/表/分区进行数据恢复，在drop table或者 drop database之后，Doris不会立刻对数据进行物理删除，而是在 Trash 中保留一段时间（默认1天，可通过fe.conf中"),e("code",[a._v("catalog_trash_expire_second")]),a._v("参数配置），管理员可以通过RECOVER命令对误删除的数据进行恢复。")]),a._v(" "),e("h2",{attrs:{id:"开始数据恢复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始数据恢复"}},[a._v("#")]),a._v(" 开始数据恢复")]),a._v(" "),e("p",[a._v("1.恢复名为 example_db 的 database")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[a._v("RECOVER "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" example_db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("2.恢复名为 example_tbl 的 table")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[a._v("RECOVER "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" example_db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("example_tbl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("3.恢复表 example_tbl 中名为 p1 的 partition")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[a._v("RECOVER "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PARTITION")]),a._v(" p1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" example_tbl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"更多帮助"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多帮助"}},[a._v("#")]),a._v(" 更多帮助")]),a._v(" "),e("p",[a._v("关于 RECOVER 使用的更多详细语法及最佳实践，请参阅 "),e("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RECOVER.html"}},[a._v("RECOVER")]),a._v(" 命令手册，你也可以在 MySql 客户端命令行下输入 "),e("code",[a._v("HELP RECOVER")]),a._v(" 获取更多帮助信息。")],1)])}),[],!1,null,null,null);s.default=r.exports}}]);