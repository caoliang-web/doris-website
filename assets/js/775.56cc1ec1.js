(window.webpackJsonp=window.webpackJsonp||[]).push([[775],{1402:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"文件管理器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件管理器"}},[s._v("#")]),s._v(" 文件管理器")]),s._v(" "),t("p",[s._v("Doris 中的一些功能需要使用一些用户自定义的文件。比如用于访问外部数据源的公钥、密钥文件、证书文件等等。文件管理器提供这样一个功能，能够让用户预先上传这些文件并保存在 Doris 系统中，然后可以在其他命令中引用或访问。")]),s._v(" "),t("h2",{attrs:{id:"名词解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[s._v("#")]),s._v(" 名词解释")]),s._v(" "),t("ul",[t("li",[s._v("BDBJE：Oracle Berkeley DB Java Edition。FE 中用于持久化元数据的分布式嵌入式数据库。")]),s._v(" "),t("li",[s._v("SmallFileMgr：文件管理器。负责创建并维护用户的文件。")])]),s._v(" "),t("h2",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),t("p",[s._v("文件是指用户创建并保存在 Doris 中的文件。")]),s._v(" "),t("p",[s._v("一个文件由 "),t("code",[s._v("数据库名称（database）")]),s._v("、"),t("code",[s._v("分类（catalog）")]),s._v(" 和 "),t("code",[s._v("文件名（file_name）")]),s._v(" 共同定位。同时每个文件也有一个全局唯一的 id（file_id），作为系统内的标识。")]),s._v(" "),t("p",[s._v("文件的创建和删除只能由拥有 "),t("code",[s._v("admin")]),s._v(" 权限的用户进行操作。一个文件隶属于一个数据库。对某一数据库拥有访问权限（查询、导入、修改等等）的用户都可以使用该数据库下创建的文件。")]),s._v(" "),t("h2",{attrs:{id:"具体操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体操作"}},[s._v("#")]),s._v(" 具体操作")]),s._v(" "),t("p",[s._v("文件管理主要有三个命令："),t("code",[s._v("CREATE FILE")]),s._v("，"),t("code",[s._v("SHOW FILE")]),s._v(" 和 "),t("code",[s._v("DROP FILE")]),s._v("，分别为创建、查看和删除文件。这三个命令的具体语法可以通过连接到 Doris 后，执行 "),t("code",[s._v("HELP cmd;")]),s._v(" 的方式查看帮助。")]),s._v(" "),t("h3",{attrs:{id:"create-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-file"}},[s._v("#")]),s._v(" CREATE FILE")]),s._v(" "),t("p",[s._v("该语句用于创建并上传一个文件到 Doris 集群，具体操作可查看 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE.html"}},[s._v("CREATE FILE")]),s._v(" 。")],1),s._v(" "),t("p",[s._v("Examples:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 创建文件 ca"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pem ，分类为 kafka\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ca.pem"')]),s._v("\n    PROPERTIES\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://test.bj.bcebos.com/kafka-key/ca.pem"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalog"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 创建文件 client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v("，分类为 my_catalog\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client.key"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" my_database\n    PROPERTIES\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://test.bj.bcebos.com/kafka-key/client.key"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalog"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_catalog"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"md5"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b5bb901bf10f99205b39a46ac3557dd9"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h3",{attrs:{id:"show-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-file"}},[s._v("#")]),s._v(" SHOW FILE")]),s._v(" "),t("p",[s._v("该语句可以查看已经创建成功的文件，具体操作可查看 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-FILE.html"}},[s._v("SHOW FILE")]),s._v("。")],1),s._v(" "),t("p",[s._v("Examples:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 查看数据库 my_database 中已上传的文件\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" my_database"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"drop-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drop-file"}},[s._v("#")]),s._v(" DROP FILE")]),s._v(" "),t("p",[s._v("该语句可以查看可以删除一个已经创建的文件，具体操作可查看 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FILE.html"}},[s._v("DROP FILE")]),s._v("。")],1),s._v(" "),t("p",[s._v("Examples:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 删除文件 ca"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pem\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ca.pem"')]),s._v(" properties"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalog"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"实现细节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现细节"}},[s._v("#")]),s._v(" 实现细节")]),s._v(" "),t("h3",{attrs:{id:"创建和删除文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建和删除文件"}},[s._v("#")]),s._v(" 创建和删除文件")]),s._v(" "),t("p",[s._v("当用户执行 "),t("code",[s._v("CREATE FILE")]),s._v(" 命令后，FE 会从给定的 URL 下载文件。并将文件的内容以 Base64 编码的形式直接保存在 FE 的内存中。同时会将文件内容以及文件相关的元信息持久化在 BDBJE 中。所有被创建的文件，其元信息和文件内容都会常驻于 FE 的内存中。如果 FE 宕机重启，也会从 BDBJE 中加载元信息和文件内容到内存中。当文件被删除时，会直接从 FE 内存中删除相关信息，同时也从 BDBJE 中删除持久化的信息。")]),s._v(" "),t("h3",{attrs:{id:"文件的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件的使用"}},[s._v("#")]),s._v(" 文件的使用")]),s._v(" "),t("p",[s._v("如果是 FE 端需要使用创建的文件，则 SmallFileMgr 会直接将 FE 内存中的数据保存为本地文件，存储在指定的目录中，并返回本地的文件路径供使用。")]),s._v(" "),t("p",[s._v("如果是 BE 端需要使用创建的文件，BE 会通过 FE 的 http 接口 "),t("code",[s._v("/api/get_small_file")]),s._v(" 将文件内容下载到 BE 上指定的目录中，供使用。同时，BE 也会在内存中记录当前已经下载过的文件的信息。当 BE 请求一个文件时，会先查看本地文件是否存在并校验。如果校验通过，则直接返回本地文件路径。如果校验失败，则会删除本地文件，重新从 FE 下载。当 BE 重启时，会预先加载本地的文件到内存中。")]),s._v(" "),t("h2",{attrs:{id:"使用限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用限制"}},[s._v("#")]),s._v(" 使用限制")]),s._v(" "),t("p",[s._v("因为文件元信息和内容都存储于 FE 的内存中。所以默认仅支持上传大小在 1MB 以内的文件。并且总文件数量限制为 100 个。可以通过下一小节介绍的配置项进行修改。")]),s._v(" "),t("h2",{attrs:{id:"相关配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关配置"}},[s._v("#")]),s._v(" 相关配置")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("FE 配置")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("small_file_dir")]),s._v("：用于存放上传文件的路径，默认为 FE 运行目录的 "),t("code",[s._v("small_files/")]),s._v(" 目录下。")]),s._v(" "),t("li",[t("code",[s._v("max_small_file_size_bytes")]),s._v("：单个文件大小限制，单位为字节。默认为 1MB。大于该配置的文件创建将会被拒绝。")]),s._v(" "),t("li",[t("code",[s._v("max_small_file_number")]),s._v("：一个 Doris 集群支持的总文件数量。默认为 100。当创建的文件数超过这个值后，后续的创建将会被拒绝。")])]),s._v(" "),t("blockquote",[t("p",[s._v("如果需要上传更多文件或提高单个文件的大小限制，可以通过 "),t("code",[s._v("ADMIN SET CONFIG")]),s._v(" 命令修改 "),t("code",[s._v("max_small_file_size_bytes")]),s._v(" 和 "),t("code",[s._v("max_small_file_number")]),s._v(" 参数。但文件数量和大小的增加，会导致 FE 内存使用量的增加。")])])]),s._v(" "),t("li",[t("p",[s._v("BE 配置")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("small_file_dir")]),s._v("：用于存放从 FE 下载的文件的路径，默认为 BE 运行目录的 "),t("code",[s._v("lib/small_files/")]),s._v(" 目录下。")])])])]),s._v(" "),t("h2",{attrs:{id:"更多帮助"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多帮助"}},[s._v("#")]),s._v(" 更多帮助")]),s._v(" "),t("p",[s._v("关于文件管理器使用的更多详细语法及最佳实践，请参阅 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE.html"}},[s._v("CREATE FILE")]),s._v(" 、"),t("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FILE.html"}},[s._v("DROP FILE")]),s._v(" 和 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-FILE.html"}},[s._v("SHOW FILE")]),s._v(" 命令手册，你也可以在 MySql 客户端命令行下输入 "),t("code",[s._v("HELP CREATE FILE")]),s._v(" 、"),t("code",[s._v("HELP DROP FILE")]),s._v("和"),t("code",[s._v("HELP SHOW FILE")]),s._v("  获取更多帮助信息。")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);