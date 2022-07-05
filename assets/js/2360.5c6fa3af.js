(window.webpackJsonp=window.webpackJsonp||[]).push([[2360],{2985:function(_,t,v){"use strict";v.r(t);var e=v(15),r=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"star-schema-benchmark"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#star-schema-benchmark"}},[_._v("#")]),_._v(" Star Schema Benchmark")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://www.cs.umb.edu/~poneil/StarSchemaB.PDF",target:"_blank",rel:"noopener noreferrer"}},[_._v("Star Schema Benchmark(SSB)"),v("OutboundLink")],1),_._v(" 是一个轻量级的数仓场景下的性能测试集。SSB基于 "),v("a",{attrs:{href:"http://www.tpc.org/tpch/",target:"_blank",rel:"noopener noreferrer"}},[_._v("TPC-H"),v("OutboundLink")],1),_._v(" 提供了一个简化版的星形模型数据集，主要用于测试在星形模型下，多表关联查询的性能表现。")]),_._v(" "),v("p",[_._v("本文档主要介绍如何在 Doris 中通过 SSB 进程初步的性能测试。")]),_._v(" "),v("blockquote",[v("p",[_._v("注1：包括 SSB 在内的标准测试集通常和实际业务场景差距较大，并且部分测试会针对测试集进行参数调优。所以标准测试集的测试结果仅能反映数据库在特定场景下的性能表现。建议用户使用实际业务数据进行进一步的测试。")]),_._v(" "),v("p",[_._v("注2：本文档涉及的操作都在 CentOS 7 环境进行。")])]),_._v(" "),v("h2",{attrs:{id:"环境准备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[_._v("#")]),_._v(" 环境准备")]),_._v(" "),v("p",[_._v("请先参照 "),v("a",{attrs:{href:"http://doris.incubator.apache.org/master/zh-CN/installing/install-deploy.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("官方文档"),v("OutboundLink")],1),_._v(" 进行 Doris 的安装部署，以获得一个正常运行中的 Doris 集群（至少包含 1 FE，1 BE）。")]),_._v(" "),v("p",[_._v("以下文档中涉及的的脚本都存放在 Doris 代码库的 "),v("code",[_._v("tools/ssb-tools/")]),_._v(" 下。")]),_._v(" "),v("h2",{attrs:{id:"数据准备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据准备"}},[_._v("#")]),_._v(" 数据准备")]),_._v(" "),v("h3",{attrs:{id:"_1-下载安装-ssb-数据生成工具。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载安装-ssb-数据生成工具。"}},[_._v("#")]),_._v(" 1. 下载安装 SSB 数据生成工具。")]),_._v(" "),v("p",[_._v("执行以下脚本下载并编译 "),v("a",{attrs:{href:"https://github.com/electrum/ssb-dbgen.git",target:"_blank",rel:"noopener noreferrer"}},[_._v("ssb-dbgen"),v("OutboundLink")],1),_._v(" 工具。")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("sh build-ssb-dbgen.sh\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("安装成功后，将在 "),v("code",[_._v("ssb-dbgen/")]),_._v(" 目录下生成 "),v("code",[_._v("dbgen")]),_._v(" 二进制文件。")]),_._v(" "),v("h3",{attrs:{id:"_2-生成-ssb-测试集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成-ssb-测试集"}},[_._v("#")]),_._v(" 2. 生成 SSB 测试集")]),_._v(" "),v("p",[_._v("执行以下脚本生成 SSB 数据集：")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("sh gen-ssb-data.sh -s 100 -c 100\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("blockquote",[v("p",[_._v("注1：通过 "),v("code",[_._v("sh gen-ssb-data.sh -h")]),_._v(" 查看脚本帮助。")]),_._v(" "),v("p",[_._v("注2：数据会以 "),v("code",[_._v(".tbl")]),_._v(" 为后缀生成在  "),v("code",[_._v("ssb-data/")]),_._v(" 目录下。文件总大小约60GB。生成时间可能在数分钟到1小时不等。")]),_._v(" "),v("p",[_._v("注3："),v("code",[_._v("-s 100")]),_._v(" 表示测试集大小系数为 100，"),v("code",[_._v("-c 100")]),_._v(" 表示并发100个线程生成 lineorder 表的数据。"),v("code",[_._v("-c")]),_._v(" 参数也决定了最终 lineorder 表的文件数量。参数越大，文件数越多，每个文件越小。")])]),_._v(" "),v("p",[_._v("在 "),v("code",[_._v("-s 100")]),_._v(" 参数下，生成的数据集大小为：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("Table")]),_._v(" "),v("th",[_._v("Rows")]),_._v(" "),v("th",[_._v("Size")]),_._v(" "),v("th",[_._v("File Number")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("lineorder")]),_._v(" "),v("td",[_._v("6亿（600037902）")]),_._v(" "),v("td",[_._v("60GB")]),_._v(" "),v("td",[_._v("100")])]),_._v(" "),v("tr",[v("td",[_._v("customer")]),_._v(" "),v("td",[_._v("3千万（3000000）")]),_._v(" "),v("td",[_._v("277M")]),_._v(" "),v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("part")]),_._v(" "),v("td",[_._v("140万（1400000）")]),_._v(" "),v("td",[_._v("116M")]),_._v(" "),v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("supplier")]),_._v(" "),v("td",[_._v("20万（200000）")]),_._v(" "),v("td",[_._v("17M")]),_._v(" "),v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("date")]),_._v(" "),v("td",[_._v("2556")]),_._v(" "),v("td",[_._v("228K")]),_._v(" "),v("td",[_._v("1")])])])]),_._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[v("p",[_._v("建表")]),_._v(" "),v("p",[_._v("复制 "),v("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/tools/ssb-tools/create-tables.sql",target:"_blank",rel:"noopener noreferrer"}},[_._v("create-tables.sql"),v("OutboundLink")],1),_._v(" 中的建表语句，在 Doris 中执行。")])]),_._v(" "),v("li",[v("p",[_._v("导入数据")]),_._v(" "),v("ol",{attrs:{start:"0"}},[v("li",[v("p",[_._v("准备 'doris-cluster.conf' 文件。")]),_._v(" "),v("p",[_._v("在调用导入脚本前，需要将 FE 的 ip 端口等信息写在 "),v("code",[_._v("doris-cluster.conf")]),_._v(" 文件中。")]),_._v(" "),v("p",[_._v("文件位置和 "),v("code",[_._v("load-dimension-data.sh")]),_._v(" 平级。")]),_._v(" "),v("p",[_._v("文件内容包括 FE 的 ip，HTTP 端口，用户名，密码以及待导入数据的 DB 名称：")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v('export FE_HOST="xxx"\nexport FE_HTTP_PORT="8030"\nexport USER="root"\nexport PASSWORD=\'xxx\'\nexport DB="ssb"\n')])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br"),v("span",{staticClass:"line-number"},[_._v("3")]),v("br"),v("span",{staticClass:"line-number"},[_._v("4")]),v("br"),v("span",{staticClass:"line-number"},[_._v("5")]),v("br")])])]),_._v(" "),v("li",[v("p",[_._v("导入 4 张维度表数据（customer, part, supplier and date）")]),_._v(" "),v("p",[_._v("因为这4张维表数据量较小，导入较简单，我们使用以下命令先导入这4表的数据：")]),_._v(" "),v("p",[v("code",[_._v("sh load-dimension-data.sh")])])]),_._v(" "),v("li",[v("p",[_._v("导入事实表 lineorder。")]),_._v(" "),v("p",[_._v("通过以下命令导入 lineorder 表数据：")]),_._v(" "),v("p",[v("code",[_._v("sh load-fact-data.sh -c 5")])]),_._v(" "),v("p",[v("code",[_._v("-c 5")]),_._v(" 表示启动 5 个并发线程导入（默认为3）。在单 BE 节点情况下，由 "),v("code",[_._v("sh gen-ssb-data.sh -s 100 -c 100")]),_._v(" 生成的 lineorder 数据，使用 "),v("code",[_._v("sh load-fact-data.sh -c 3")]),_._v(" 的导入时间约为 10min。内存开销约为 5-6GB。如果开启更多线程，可以加快导入速度，但会增加额外的内存开销。")])])]),_._v(" "),v("blockquote",[v("p",[_._v("注：为获得更快的导入速度，你可以在 be.conf 中添加 "),v("code",[_._v("flush_thread_num_per_store=5")]),_._v(" 后重启BE。该配置表示每个数据目录的写盘线程数，默认为2。较大的数据可以提升写数据吞吐，但可能会增加 IO Util。（参考值：1块机械磁盘，在默认为2的情况下，导入过程中的 IO Util 约为12%，设置为5时，IO Util 约为26%。如果是 SSD 盘，则几乎为 0）。")])])]),_._v(" "),v("li",[v("p",[_._v("检查导入数据")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("select count(*) from part;\nselect count(*) from customer;\nselect count(*) from supplier;\nselect count(*) from date;\nselect count(*) from lineorder;\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br"),v("span",{staticClass:"line-number"},[_._v("3")]),v("br"),v("span",{staticClass:"line-number"},[_._v("4")]),v("br"),v("span",{staticClass:"line-number"},[_._v("5")]),v("br")])]),v("p",[_._v("数据量应和生成数据的行数一致。")])])]),_._v(" "),v("h2",{attrs:{id:"查询测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查询测试"}},[_._v("#")]),_._v(" 查询测试")]),_._v(" "),v("p",[_._v("SSB 测试集共 4 组 14 个 SQL。查询语句在 "),v("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/tools/ssb-tools/queries",target:"_blank",rel:"noopener noreferrer"}},[_._v("queries/"),v("OutboundLink")],1),_._v(" 目录下。")]),_._v(" "),v("h2",{attrs:{id:"测试报告"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#测试报告"}},[_._v("#")]),_._v(" 测试报告")]),_._v(" "),v("p",[_._v("以下测试报告基于 Doris "),v("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/branch-0.15",target:"_blank",rel:"noopener noreferrer"}},[_._v("branch-0.15"),v("OutboundLink")],1),_._v(" 分支代码测试，仅供参考。（更新时间：2021年10月25号）")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("硬件环境")]),_._v(" "),v("ul",[v("li",[_._v("1 FE + 1-3 BE 混部")]),_._v(" "),v("li",[_._v("CPU：96core, Intel(R) Xeon(R) Gold 6271C CPU @ 2.60GHz")]),_._v(" "),v("li",[_._v("内存：384GB")]),_._v(" "),v("li",[_._v("硬盘：1块机械硬盘")]),_._v(" "),v("li",[_._v("网卡：万兆网卡")])])]),_._v(" "),v("li",[v("p",[_._v("数据集")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("Table")]),_._v(" "),v("th",[_._v("Rows")]),_._v(" "),v("th",[_._v("Origin Size")]),_._v(" "),v("th",[_._v("Compacted Size(1 Replica)")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("lineorder")]),_._v(" "),v("td",[_._v("6亿（600037902）")]),_._v(" "),v("td",[_._v("60 GB")]),_._v(" "),v("td",[_._v("14.846 GB")])]),_._v(" "),v("tr",[v("td",[_._v("customer")]),_._v(" "),v("td",[_._v("3千万（3000000）")]),_._v(" "),v("td",[_._v("277 MB")]),_._v(" "),v("td",[_._v("414.741 MB")])]),_._v(" "),v("tr",[v("td",[_._v("part")]),_._v(" "),v("td",[_._v("140万（1400000）")]),_._v(" "),v("td",[_._v("116 MB")]),_._v(" "),v("td",[_._v("38.277 MB")])]),_._v(" "),v("tr",[v("td",[_._v("supplier")]),_._v(" "),v("td",[_._v("20万（200000）")]),_._v(" "),v("td",[_._v("17 MB")]),_._v(" "),v("td",[_._v("27.428 MB")])]),_._v(" "),v("tr",[v("td",[_._v("date")]),_._v(" "),v("td",[_._v("2556")]),_._v(" "),v("td",[_._v("228 KB")]),_._v(" "),v("td",[_._v("275.804 KB")])])])])]),_._v(" "),v("li",[v("p",[_._v("测试结果")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("Query")]),_._v(" "),v("th",[_._v("Time(ms) (1 BE)")]),_._v(" "),v("th",[_._v("Time(ms) (3 BE)")]),_._v(" "),v("th",[_._v("Parallelism")]),_._v(" "),v("th",[_._v("Runtime Filter Mode")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("q1.1")]),_._v(" "),v("td",[_._v("200")]),_._v(" "),v("td",[_._v("140")]),_._v(" "),v("td",[_._v("8")]),_._v(" "),v("td",[_._v("IN")])]),_._v(" "),v("tr",[v("td",[_._v("q1.2")]),_._v(" "),v("td",[_._v("90")]),_._v(" "),v("td",[_._v("80")]),_._v(" "),v("td",[_._v("8")]),_._v(" "),v("td",[_._v("IN")])]),_._v(" "),v("tr",[v("td",[_._v("q1.3")]),_._v(" "),v("td",[_._v("90")]),_._v(" "),v("td",[_._v("80")]),_._v(" "),v("td",[_._v("8")]),_._v(" "),v("td",[_._v("IN")])]),_._v(" "),v("tr",[v("td",[_._v("q2.1")]),_._v(" "),v("td",[_._v("1100")]),_._v(" "),v("td",[_._v("400")]),_._v(" "),v("td",[_._v("8")]),_._v(" "),v("td",[_._v("BLOOM_FILTER")])]),_._v(" "),v("tr",[v("td",[_._v("q2.2")]),_._v(" "),v("td",[_._v("900")]),_._v(" "),v("td",[_._v("330")]),_._v(" "),v("td",[_._v("8")]),_._v(" "),v("td",[_._v("BLOOM_FILTER")])]),_._v(" "),v("tr",[v("td",[_._v("q2.3")]),_._v(" "),v("td",[_._v("790")]),_._v(" "),v("td",[_._v("320")]),_._v(" "),v("td",[_._v("8")]),_._v(" "),v("td",[_._v("BLOOM_FILTER")])]),_._v(" "),v("tr",[v("td",[_._v("q3.1")]),_._v(" "),v("td",[_._v("3100")]),_._v(" "),v("td",[_._v("1280")]),_._v(" "),v("td",[_._v("8")]),_._v(" "),v("td",[_._v("BLOOM_FILTER")])]),_._v(" "),v("tr",[v("td",[_._v("q3.2")]),_._v(" "),v("td",[_._v("700")]),_._v(" "),v("td",[_._v("270")]),_._v(" "),v("td",[_._v("8")]),_._v(" "),v("td",[_._v("BLOOM_FILTER")])]),_._v(" "),v("tr",[v("td",[_._v("q3.3")]),_._v(" "),v("td",[_._v("540")]),_._v(" "),v("td",[_._v("270")]),_._v(" "),v("td",[_._v("8")]),_._v(" "),v("td",[_._v("BLOOM_FILTER")])]),_._v(" "),v("tr",[v("td",[_._v("q3.4")]),_._v(" "),v("td",[_._v("560")]),_._v(" "),v("td",[_._v("240")]),_._v(" "),v("td",[_._v("8")]),_._v(" "),v("td",[_._v("BLOOM_FILTER")])]),_._v(" "),v("tr",[v("td",[_._v("q4.1")]),_._v(" "),v("td",[_._v("2820")]),_._v(" "),v("td",[_._v("1150")]),_._v(" "),v("td",[_._v("8")]),_._v(" "),v("td",[_._v("BLOOM_FILTER")])]),_._v(" "),v("tr",[v("td",[_._v("q4.2")]),_._v(" "),v("td",[_._v("1430")]),_._v(" "),v("td",[_._v("670")]),_._v(" "),v("td",[_._v("8")]),_._v(" "),v("td",[_._v("BLOOM_FILTER")])]),_._v(" "),v("tr",[v("td",[_._v("q4.2")]),_._v(" "),v("td",[_._v("1750")]),_._v(" "),v("td",[_._v("1030")]),_._v(" "),v("td",[_._v("8")]),_._v(" "),v("td",[_._v("BLOOM_FILTER")])])])]),_._v(" "),v("blockquote",[v("p",[_._v("注1：“这个测试集和你的生产环境相去甚远，请对他保持怀疑态度！”")]),_._v(" "),v("p",[_._v("注2：测试结果为多次执行取平均值（Page Cache 会起到一定加速作用）。并且数据经过充分的 compaction （如果在刚导入数据后立刻测试，则查询延迟可能高于本测试结果）")]),_._v(" "),v("p",[_._v("注3：因环境受限，本测试使用的硬件规格较高，但整个测试过程中不会消耗如此多的硬件资源。其中内存消耗在 10GB 以内，CPU使用率在 10% 以内。")]),_._v(" "),v("p",[_._v("注4：Parallelism 表示查询并发度，通过 "),v("code",[_._v("set parallel_fragment_exec_instance_num=8")]),_._v(" 设置。")]),_._v(" "),v("p",[_._v("注5：Runtime Filter Mode 是 Runtime Filter 的类型，通过 "),v("code",[_._v('set runtime_filter_type="BLOOM_FILTER"')]),_._v(" 设置。（"),v("a",{attrs:{href:"http://doris.incubator.apache.org/master/zh-CN/administrator-guide/runtime-filter.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("Runtime Filter"),v("OutboundLink")],1),_._v(" 功能对 SSB 测试集效果显著。因为该测试集中，Join 算子右表的数据可以对左表起到很好的过滤作用。你可以尝试通过 "),v("code",[_._v("set runtime_filter_mode=off")]),_._v(" 关闭该功能，看看查询延迟的变化。）")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);