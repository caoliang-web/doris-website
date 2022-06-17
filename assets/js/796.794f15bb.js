(window.webpackJsonp=window.webpackJsonp||[]).push([[796],{1421:function(s,t,a){"use strict";a.r(t);var n=a(15),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"datax-doriswriter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datax-doriswriter"}},[s._v("#")]),s._v(" DataX doriswriter")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/alibaba/DataX",target:"_blank",rel:"noopener noreferrer"}},[s._v("DataX"),a("OutboundLink")],1),s._v(" doriswriter 插件，用于通过 DataX 同步其他数据源的数据到 Doris 中。")]),s._v(" "),a("p",[s._v("这个插件是利用Doris的Stream Load 功能进行数据导入的。需要配合 DataX 服务一起使用。")]),s._v(" "),a("h2",{attrs:{id:"关于-datax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-datax"}},[s._v("#")]),s._v(" 关于 DataX")]),s._v(" "),a("p",[s._v("DataX 是阿里云 DataWorks数据集成 的开源版本，在阿里巴巴集团内被广泛使用的离线数据同步工具/平台。DataX 实现了包括 MySQL、Oracle、SqlServer、Postgre、HDFS、Hive、ADS、HBase、TableStore(OTS)、MaxCompute(ODPS)、Hologres、DRDS 等各种异构数据源之间高效的数据同步功能。")]),s._v(" "),a("p",[s._v("更多信息请参阅: "),a("code",[s._v("https://github.com/alibaba/DataX/")])]),s._v(" "),a("h2",{attrs:{id:"使用手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用手册"}},[s._v("#")]),s._v(" 使用手册")]),s._v(" "),a("p",[s._v("DataX doriswriter 插件代码 "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/extension/DataX",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("这个目录包含插件代码以及 DataX 项目的开发环境。")]),s._v(" "),a("p",[s._v("doriswriter 插件依赖的 DataX 代码中的一些模块。而这些模块并没有在 Maven 官方仓库中。所以我们在开发 doriswriter 插件时，需要下载完整的 DataX 代码库，才能进行插件的编译和开发。")]),s._v(" "),a("h3",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("ol",[a("li",[a("p",[a("code",[s._v("doriswriter/")])]),s._v(" "),a("p",[s._v("这个目录是 doriswriter 插件的代码目录。这个目录中的所有代码，都托管在 Apache Doris 的代码库中。")]),s._v(" "),a("p",[s._v("doriswriter 插件帮助文档在这里："),a("code",[s._v("doriswriter/doc")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("init-env.sh")])]),s._v(" "),a("p",[s._v("这个脚本主要用于构建 DataX 开发环境，他主要进行了以下操作：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("将 DataX 代码库 clone 到本地。")])]),s._v(" "),a("li",[a("p",[s._v("将 "),a("code",[s._v("doriswriter/")]),s._v(" 目录软链到 "),a("code",[s._v("DataX/doriswriter")]),s._v(" 目录。")])]),s._v(" "),a("li",[a("p",[s._v("在 "),a("code",[s._v("DataX/pom.xml")]),s._v(" 文件中添加 "),a("code",[s._v("<module>doriswriter</module>")]),s._v(" 模块。")])]),s._v(" "),a("li",[a("p",[s._v("将 "),a("code",[s._v("DataX/core/pom.xml")]),s._v(" 文件中的 httpclient 版本从 4.5 改为 4.5.13.")]),s._v(" "),a("blockquote",[a("p",[s._v("httpclient v4.5 在处理 307 转发时有bug。")])])])]),s._v(" "),a("p",[s._v("这个脚本执行后，开发者就可以进入 "),a("code",[s._v("DataX/")]),s._v(" 目录开始开发或编译了。因为做了软链，所以任何对 "),a("code",[s._v("DataX/doriswriter")]),s._v(" 目录中文件的修改，都会反映到 "),a("code",[s._v("doriswriter/")]),s._v(" 目录中，方便开发者提交代码。")])])]),s._v(" "),a("h3",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("运行 "),a("code",[s._v("init-env.sh")])])]),s._v(" "),a("li",[a("p",[s._v("按需修改 "),a("code",[s._v("DataX/doriswriter")]),s._v(" 中的代码。")])]),s._v(" "),a("li",[a("p",[s._v("编译 doriswriter：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("单独编译 doriswriter 插件:")]),s._v(" "),a("p",[a("code",[s._v("mvn clean install -pl plugin-rdbms-util,doriswriter -DskipTests")])])]),s._v(" "),a("li",[a("p",[s._v("编译整个 DataX 项目:")]),s._v(" "),a("p",[a("code",[s._v("mvn package assembly:assembly -Dmaven.test.skip=true")])]),s._v(" "),a("p",[s._v("产出在 "),a("code",[s._v("target/datax/datax/")]),s._v(".")]),s._v(" "),a("blockquote",[a("p",[s._v("hdfsreader, hdfswriter and oscarwriter 这三个插件需要额外的jar包。如果你并不需要这些插件，可以在 "),a("code",[s._v("DataX/pom.xml")]),s._v(" 中删除这些插件的模块。")])])]),s._v(" "),a("li",[a("p",[s._v("编译错误")]),s._v(" "),a("p",[s._v("如遇到如下编译错误：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Could not find artifact com.alibaba.datax:datax-all:pom:0.0.1-SNAPSHOT ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可尝试以下方式解决：")]),s._v(" "),a("ol",[a("li",[s._v("下载 "),a("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/alibaba-datax-maven-m2-20210928.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[s._v("alibaba-datax-maven-m2-20210928.tar.gz"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("解压后，将得到的 "),a("code",[s._v("alibaba/datax/")]),s._v(" 目录，拷贝到所使用的 maven 对应的 "),a("code",[s._v(".m2/repository/com/alibaba/")]),s._v(" 下。")]),s._v(" "),a("li",[s._v("再次尝试编译。")])])])])]),s._v(" "),a("li",[a("p",[s._v("按需提交修改。")])])]),s._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("h4",{attrs:{id:"_1-stream读取数据后导入至doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-stream读取数据后导入至doris"}},[s._v("#")]),s._v(" 1.Stream读取数据后导入至Doris")]),s._v(" "),a("p",[s._v("该示例插件的使用说明请参阅 "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/blob/master/extension/DataX/doriswriter/doc/doriswriter.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1)]),s._v(" "),a("h4",{attrs:{id:"_2-mysql读取数据后导入至doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql读取数据后导入至doris"}},[s._v("#")]),s._v(" 2.Mysql读取数据后导入至Doris")]),s._v(" "),a("p",[s._v("1.Mysql表结构")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("t_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("order_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("line_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("remark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("unit_no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("unit_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USING")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BTREE")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4 ROW_FORMAT"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("DYNAMIC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("2.Doris表结构")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("ods_t_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("order_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("line_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("remark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("unit_no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("unit_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n）"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("OLAP\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNIQUE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("order_code"),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(")\nDISTRIBUTED BY HASH("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("order_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" BUCKETS "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"replication_allocation"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tag.location.default: 3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"in_memory"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"storage_format"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"V2"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("3.创建datax脚本")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    "job": {\n        "setting": {\n            "speed": {\n                "channel": 1\n            },\n            "errorLimit": {\n                "record": 0,\n                "percentage": 0\n            }\n        },\n        "content": [\n            {\n                "reader": {\n                    "name": "mysqlreader",\n                    "parameter": {\n                        "username": "xxx",\n                        "password": "xxx",\n                        "column": ["id","order_code","line_code","remark","unit_no","unit_name","price"],\n                        "connection": [ { "table": [ "t_test" ], "jdbcUrl": [ "jdbc:mysql://10.10.10.1:33306/demo" ] } ] }\n                },\n                "writer": {\n                    "name": "doriswriter",\n                    "parameter": {\n                        "feLoadUrl": ["127.0.0.1:8030","127.0.0.2:8030"],\n                        "beLoadUrl": ["127.0.0.3:8040","127.0.0.4:8040","127.0.0.5:8040"],\n                        "jdbcUrl": "jdbc:mysql://127.0.0.1:9030/",\n                        "database": "demo",\n                        "table": "ods_t_test",\n                        "column": ["id","order_code","line_code","remark","unit_no","unit_name","price"],\n                        "username": "xxx",\n                        "password": "xxx",\n                        "postSql": [],\n                        "preSql": [],\n                        "loadProps": {\n                        },\n                        "maxBatchRows" : 300000,\n                        "maxBatchByteSize" : 20971520\n                    }\n                }\n            }\n        ]\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])]),a("p",[s._v("4.执行datax任务，具体参考 "),a("a",{attrs:{href:"https://github.com/alibaba/DataX/blob/master/userGuid.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("datax官网"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);