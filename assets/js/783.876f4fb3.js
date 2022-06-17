(window.webpackJsonp=window.webpackJsonp||[]).push([[783],{1408:function(s,t,e){"use strict";e.r(t);var a=e(15),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"delete-操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-操作"}},[s._v("#")]),s._v(" Delete 操作")]),s._v(" "),e("p",[s._v("Delete不同于其他导入方式，它是一个同步过程，与Insert into相似，所有的Delete操作在Doris中是一个独立的导入作业，一般Delete语句需要指定表和分区以及删除的条件来筛选要删除的数据，并将会同时删除base表和rollup表的数据。")]),s._v(" "),e("h2",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),e("p",[s._v("delete操作的语法详见官网 "),e("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE.html"}},[s._v("DELETE")]),s._v(" 语法。")],1),s._v(" "),e("h2",{attrs:{id:"返回结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回结果"}},[s._v("#")]),s._v(" 返回结果")]),s._v(" "),e("p",[s._v("Delete命令是一个SQL命令，返回结果是同步的，分为以下几种：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("执行成功")]),s._v(" "),e("p",[s._v("如果Delete顺利执行完成并可见，将返回下列结果，"),e("code",[s._v("Query OK")]),s._v("表示成功")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test_tbl "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" p1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" k1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.04")]),s._v(" sec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n{"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'label'")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'status'")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'VISIBLE'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'txnId'")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4005'")]),s._v("}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("提交成功，但未可见")]),s._v(" "),e("p",[s._v("Doris的事务提交分为两步：提交和发布版本，只有完成了发布版本步骤，结果才对用户是可见的。若已经提交成功了，那么就可以认为最终一定会发布成功，Doris会尝试在提交完后等待发布一段时间，如果超时后即使发布版本还未完成也会优先返回给用户，提示用户提交已经完成。若如果Delete已经提交并执行，但是仍未发布版本和可见，将返回下列结果")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test_tbl "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" p1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" k1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.04")]),s._v(" sec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n{"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'label'")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'status'")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'COMMITTED'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'txnId'")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4005'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'err'")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'delete job is committed but may be taking effect later'")]),s._v(" }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("结果会同时返回一个json字符串：")]),s._v(" "),e("p",[e("code",[s._v("affected rows")]),s._v("：表示此次删除影响的行，由于Doris的删除目前是逻辑删除，因此对于这个值是恒为0；")]),s._v(" "),e("p",[e("code",[s._v("label")]),s._v("：自动生成的 label，是该导入作业的标识。每个导入作业，都有一个在单 database 内部唯一的 Label；")]),s._v(" "),e("p",[e("code",[s._v("status")]),s._v("：表示数据删除是否可见，如果可见则显示"),e("code",[s._v("VISIBLE")]),s._v("，如果不可见则显示"),e("code",[s._v("COMMITTED")]),s._v("；")]),s._v(" "),e("p",[e("code",[s._v("txnId")]),s._v("：这个Delete job对应的事务id；")]),s._v(" "),e("p",[e("code",[s._v("err")]),s._v("：字段会显示一些本次删除的详细信息。")])]),s._v(" "),e("li",[e("p",[s._v("提交失败，事务取消")]),s._v(" "),e("p",[s._v("如果Delete语句没有提交成功，将会被Doris自动中止，返回下列结果")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test_tbl "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),s._v(" p1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" k1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nERROR "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1064")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HY000"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": errCode "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" detailMessage "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" {错误原因}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("示例：")]),s._v(" "),e("p",[s._v("比如说一个超时的删除，将会返回timeout时间和未完成的"),e("code",[s._v("(tablet=replica)")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test_tbl "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),s._v(" p1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" k1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nERROR "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1064")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HY000"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": errCode "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" detailMessage "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" failed "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" replicas "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" job: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4005")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Unfinished replicas:"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("60000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10001")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("60000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10002")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("60000")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("综上，对于Delete操作返回结果的正确处理逻辑为：")])]),s._v(" "),e("ol",[e("li",[s._v("如果返回结果为"),e("code",[s._v("ERROR 1064 (HY000)")]),s._v("，则表示删除失败；")]),s._v(" "),e("li",[s._v("如果返回结果为"),e("code",[s._v("Query OK")]),s._v("，则表示删除执行成功；\n"),e("ul",[e("li",[s._v("如果"),e("code",[s._v("status")]),s._v("为"),e("code",[s._v("COMMITTED")]),s._v("，表示数据仍不可见，用户可以稍等一段时间再用"),e("code",[s._v("show delete")]),s._v("命令查看结果；")]),s._v(" "),e("li",[s._v("如果"),e("code",[s._v("status")]),s._v("为"),e("code",[s._v("VISIBLE")]),s._v("，表示数据删除成功。")])])])])])]),s._v(" "),e("h2",{attrs:{id:"delete操作相关fe配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete操作相关fe配置"}},[s._v("#")]),s._v(" Delete操作相关FE配置")]),s._v(" "),e("p",[e("strong",[s._v("TIMEOUT配置")])]),s._v(" "),e("p",[s._v("总体来说，Doris的删除作业的超时时间限制在30秒到5分钟时间内，具体时间可通过下面配置项调整")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("tablet_delete_timeout_second")])]),s._v(" "),e("p",[s._v("delete自身的超时时间是可受指定分区下tablet的数量弹性改变的，此项配置为平均一个tablet所贡献的timeout时间，默认值为2。")]),s._v(" "),e("p",[s._v("假设此次删除所指定分区下有5个tablet，那么可提供给delete的timeout时间为10秒，由于低于最低超时时间30秒，因此最终超时时间为30秒。")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("load_straggler_wait_second")])]),s._v(" "),e("p",[s._v("如果用户预估的数据量确实比较大，使得5分钟的上限不足时，用户可以通过此项调整timeout上限，默认值为300。")]),s._v(" "),e("p",[e("strong",[s._v("TIMEOUT的具体计算规则为(秒)")])]),s._v(" "),e("p",[e("code",[s._v("TIMEOUT = MIN(load_straggler_wait_second, MAX(30, tablet_delete_timeout_second * tablet_num))")])])]),s._v(" "),e("li",[e("p",[e("code",[s._v("query_timeout")])]),s._v(" "),e("p",[s._v("因为delete本身是一个SQL命令，因此删除语句也会受session限制，timeout还受Session中的"),e("code",[s._v("query_timeout")]),s._v("值影响，可以通过"),e("code",[s._v("SET query_timeout = xxx")]),s._v("来增加超时时间，单位是秒。")])])]),s._v(" "),e("p",[e("strong",[s._v("IN谓词配置")])]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("max_allowed_in_element_num_of_delete")])]),s._v(" "),e("p",[s._v("如果用户在使用in谓词时需要占用的元素比较多，用户可以通过此项调整允许携带的元素上限，默认值为1024。")])])]),s._v(" "),e("h2",{attrs:{id:"查看历史记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看历史记录"}},[s._v("#")]),s._v(" 查看历史记录")]),s._v(" "),e("p",[s._v("用户可以通过show delete语句查看历史上已执行完成的删除记录。")]),s._v(" "),e("p",[s._v("语法如下")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" db_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使用示例")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test_db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------+---------------+---------------------+-----------------+----------+")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" TableName "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PartitionName "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" CreateTime          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" DeleteCondition "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" State    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------+---------------+---------------------+-----------------+----------+")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" empty_tbl "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" p3            "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("09")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k1 EQ "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("       "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" FINISHED "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" test_tbl  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" p4            "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("09")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k1 GT "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"80"')]),s._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" FINISHED "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------+---------------+---------------------+-----------------+----------+")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),e("ul",[e("li",[s._v("不同于 Insert into 命令，delete 不能手动指定"),e("code",[s._v("label")]),s._v("，有关 label 的概念可以查看"),e("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/insert-into-manual.html"}},[s._v("Insert Into")]),s._v(" 文档。")],1)]),s._v(" "),e("h2",{attrs:{id:"更多帮助"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多帮助"}},[s._v("#")]),s._v(" 更多帮助")]),s._v(" "),e("p",[s._v("关于 "),e("strong",[s._v("delete")]),s._v(" 使用的更多详细语法，请参阅 "),e("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE.html"}},[s._v("delete")]),s._v(" 命令手册，也可以在Mysql客户端命令行下输入 "),e("code",[s._v("HELP DELETE")]),s._v(" 获取更多帮助信息。")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);