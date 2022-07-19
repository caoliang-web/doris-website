(window.webpackJsonp=window.webpackJsonp||[]).push([[2354],{2979:function(_,v,a){"use strict";a.r(v);var e=a(15),l=Object(e.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"文件管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件管理器"}},[_._v("#")]),_._v(" 文件管理器")]),_._v(" "),a("p",[_._v("Doris 中的一些功能需要使用一些用户自定义的文件。比如用于访问外部数据源的公钥、密钥文件、证书文件等等。文件管理器提供这样一个功能，能够让用户预先上传这些文件并保存在 Doris 系统中，然后可以在其他命令中引用或访问。")]),_._v(" "),a("h2",{attrs:{id:"名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[_._v("#")]),_._v(" 名词解释")]),_._v(" "),a("ul",[a("li",[_._v("FE：Frontend，Doris 的前端节点。负责元数据管理和请求接入。")]),_._v(" "),a("li",[_._v("BE：Backend，Doris 的后端节点。负责查询执行和数据存储。")]),_._v(" "),a("li",[_._v("BDBJE：Oracle Berkeley DB Java Edition。FE 中用于持久化元数据的分布式嵌入式数据库。")]),_._v(" "),a("li",[_._v("SmallFileMgr：文件管理器。负责创建并维护用户的文件。")])]),_._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[_._v("#")]),_._v(" 基本概念")]),_._v(" "),a("p",[_._v("文件是指用户创建并保存在 Doris 中的文件。")]),_._v(" "),a("p",[_._v("一个文件由 "),a("code",[_._v("数据库名称（database）")]),_._v("、"),a("code",[_._v("分类（catalog）")]),_._v(" 和 "),a("code",[_._v("文件名（file_name）")]),_._v(" 共同定位。同时每个文件也有一个全局唯一的 id（file_id），作为系统内的标识。")]),_._v(" "),a("p",[_._v("文件的创建和删除只能由拥有 "),a("code",[_._v("admin")]),_._v(" 权限的用户进行操作。一个文件隶属于一个数据库。对某一数据库拥有访问权限（查询、导入、修改等等）的用户都可以使用该数据库下创建的文件。")]),_._v(" "),a("h2",{attrs:{id:"具体操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体操作"}},[_._v("#")]),_._v(" 具体操作")]),_._v(" "),a("p",[_._v("文件管理主要有三个命令："),a("code",[_._v("CREATE FILE")]),_._v("，"),a("code",[_._v("SHOW FILE")]),_._v(" 和 "),a("code",[_._v("DROP FILE")]),_._v("，分别为创建、查看和删除文件。这三个命令的具体语法可以通过连接到 Doris 后，执行 "),a("code",[_._v("HELP cmd;")]),_._v(" 的方式查看帮助。")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("CREATE FILE")]),_._v(" "),a("p",[_._v("在创建文件的命令中，用户必须提供以下信息：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("file_name：文件名。用户自定义，在一个 catalog 内唯一即可。")])]),_._v(" "),a("li",[a("p",[_._v("catalog：文件所属分类。用户自定义，在一个 database 内唯一即可。")]),_._v(" "),a("blockquote",[a("p",[_._v("Doris 也有一些特殊的分类名称供特定的命令使用。")])]),_._v(" "),a("blockquote",[a("ol",[a("li",[_._v("kafka")])])]),_._v(" "),a("blockquote",[a("p",[_._v('当在例行导入命令中指定数据源为 Kafka，并且需要引用到文件时，Doris 会默认从 catalog 名为 "kafka" 的分类中查找文件。')])])]),_._v(" "),a("li",[a("p",[_._v("url：文件的下载地址。目前仅支持无认证的 http 下载地址。该下载地址仅用于在执行创建文件命令时，从这个地址下载文件。当文件成功创建并保存在 Doris 中后，该地址将不再被使用。")])]),_._v(" "),a("li",[a("p",[_._v("md5：可选项。文件的 MD5 值。如果用户提供该值，将在文件下载后进行 MD5 值的校验。校验失败则文件创建失败。")])])]),_._v(" "),a("p",[_._v("文件创建成功后，文件相关的信息将持久化在 Doris 中。用户可以通过 "),a("code",[_._v("SHOW FILE")]),_._v(" 命令查看已经创建成功的文件。")])]),_._v(" "),a("li",[a("p",[_._v("SHOW FILE")]),_._v(" "),a("p",[_._v("该命令可以查看已经创建成功的文件。具体操作见："),a("code",[_._v("HELP SHOW FILE;")])])]),_._v(" "),a("li",[a("p",[_._v("DROP FILE")]),_._v(" "),a("p",[_._v("该命令可以删除一个已经创建的文件。具体操作见："),a("code",[_._v("HELP DROP FILE;")])])])]),_._v(" "),a("h2",{attrs:{id:"实现细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现细节"}},[_._v("#")]),_._v(" 实现细节")]),_._v(" "),a("h3",{attrs:{id:"创建和删除文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建和删除文件"}},[_._v("#")]),_._v(" 创建和删除文件")]),_._v(" "),a("p",[_._v("当用户执行 "),a("code",[_._v("CREATE FILE")]),_._v(" 命令后，FE 会从给定的 URL 下载文件。并将文件的内容以 Base64 编码的形式直接保存在 FE 的内存中。同时会将文件内容以及文件相关的元信息持久化在 BDBJE 中。所有被创建的文件，其元信息和文件内容都会常驻于 FE 的内存中。如果 FE 宕机重启，也会从 BDBJE 中加载元信息和文件内容到内存中。当文件被删除时，会直接从 FE 内存中删除相关信息，同时也从 BDBJE 中删除持久化的信息。")]),_._v(" "),a("h3",{attrs:{id:"文件的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件的使用"}},[_._v("#")]),_._v(" 文件的使用")]),_._v(" "),a("p",[_._v("如果是 FE 端需要使用创建的文件，则 SmallFileMgr 会直接将 FE 内存中的数据保存为本地文件，存储在指定的目录中，并返回本地的文件路径供使用。")]),_._v(" "),a("p",[_._v("如果是 BE 端需要使用创建的文件，BE 会通过 FE 的 http 接口 "),a("code",[_._v("/api/get_small_file")]),_._v(" 将文件内容下载到 BE 上指定的目录中，供使用。同时，BE 也会在内存中记录当前已经下载过的文件的信息。当 BE 请求一个文件时，会先查看本地文件是否存在并校验。如果校验通过，则直接返回本地文件路径。如果校验失败，则会删除本地文件，重新从 FE 下载。当 BE 重启时，会预先加载本地的文件到内存中。")]),_._v(" "),a("h2",{attrs:{id:"使用限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用限制"}},[_._v("#")]),_._v(" 使用限制")]),_._v(" "),a("p",[_._v("因为文件元信息和内容都存储于 FE 的内存中。所以默认仅支持上传大小在 1MB 以内的文件。并且总文件数量限制为 100 个。可以通过下一小节介绍的配置项进行修改。")]),_._v(" "),a("h2",{attrs:{id:"相关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关配置"}},[_._v("#")]),_._v(" 相关配置")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("FE 配置")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("small_file_dir")]),_._v("：用于存放上传文件的路径，默认为 FE 运行目录的 "),a("code",[_._v("small_files/")]),_._v(" 目录下。")]),_._v(" "),a("li",[a("code",[_._v("max_small_file_size_bytes")]),_._v("：单个文件大小限制，单位为字节。默认为 1MB。大于该配置的文件创建将会被拒绝。")]),_._v(" "),a("li",[a("code",[_._v("max_small_file_number")]),_._v("：一个 Doris 集群支持的总文件数量。默认为 100。当创建的文件数超过这个值后，后续的创建将会被拒绝。")])]),_._v(" "),a("blockquote",[a("p",[_._v("如果需要上传更多文件或提高单个文件的大小限制，可以通过 "),a("code",[_._v("ADMIN SET CONFIG")]),_._v(" 命令修改 "),a("code",[_._v("max_small_file_size_bytes")]),_._v(" 和 "),a("code",[_._v("max_small_file_number")]),_._v(" 参数。但文件数量和大小的增加，会导致 FE 内存使用量的增加。")])])]),_._v(" "),a("li",[a("p",[_._v("BE 配置")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("small_file_dir")]),_._v("：用于存放从 FE 下载的文件的路径，默认为 BE 运行目录的 "),a("code",[_._v("lib/small_files/")]),_._v(" 目录下。")])])])])])}),[],!1,null,null,null);v.default=l.exports}}]);