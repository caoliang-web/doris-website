(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{1278:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"doris-be存储层benchmark工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-be存储层benchmark工具"}},[s._v("#")]),s._v(" Doris BE存储层Benchmark工具")]),s._v(" "),a("h2",{attrs:{id:"用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[s._v("#")]),s._v(" 用途")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("可以用来测试BE存储层的一些部分(例如segment、page)的性能。根据输入数据构造出指定对象,利用google benchmark进行性能测试。\n")])])]),a("h2",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("确保环境已经能顺利编译Doris本体,可以参考"),a("RouterLink",{attrs:{to:"/zh-CN/docs/install/source-install/compilation.html"}},[s._v("编译与部署")]),s._v("。")],1)]),s._v(" "),a("li",[a("p",[s._v("运行目录下的"),a("code",[s._v("run-be-ut.sh")])])]),s._v(" "),a("li",[a("p",[s._v("编译出的可执行文件位于"),a("code",[s._v("./be/ut_build_ASAN/test/tools/benchmark_tool")])])])]),s._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("h4",{attrs:{id:"使用随机生成的数据集进行segment读取测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用随机生成的数据集进行segment读取测试"}},[s._v("#")]),s._v(" 使用随机生成的数据集进行Segment读取测试")]),s._v(" "),a("p",[s._v("会先利用数据集写入一个"),a("code",[s._v("segment")]),s._v("文件,然后对scan整个"),a("code",[s._v("segment")]),s._v("的耗时进行统计。")]),s._v(" "),a("blockquote",[a("p",[s._v("./benchmark_tool --operation=SegmentScan --column_type=int,varchar --rows_number=10000 --iterations=0")])]),s._v(" "),a("p",[s._v("这里的"),a("code",[s._v("column_type")]),s._v("可以设置表结构,"),a("code",[s._v("segment")]),s._v("层的表结构类型目前支持"),a("code",[s._v("int、char、varchar、string")]),s._v(","),a("code",[s._v("char")]),s._v("类型的长度为"),a("code",[s._v("8")]),s._v(","),a("code",[s._v("varchar")]),s._v("和"),a("code",[s._v("string")]),s._v("类型长度限制都为最大值。默认值为"),a("code",[s._v("int,varchar")]),s._v("。")]),s._v(" "),a("p",[s._v("数据集按以下规则生成。")]),s._v(" "),a("blockquote",[a("p",[s._v("int: 在[1,1000000]内随机。")])]),s._v(" "),a("p",[s._v("字符串类型的数据字符集为大小写英文字母,长度根据类型不同。")]),s._v(" "),a("blockquote",[a("p",[s._v("char: 长度在[1,8]内随机。\nvarchar: 长度在[1,128]内随机。\nstring: 长度在[1,100000]内随机。")])]),s._v(" "),a("p",[a("code",[s._v("rows_number")]),s._v("表示数据的行数,默认值为"),a("code",[s._v("10000")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("iterations")]),s._v("表示迭代次数,benchmark会重复进行测试,然后计算平均耗时。如果"),a("code",[s._v("iterations")]),s._v("为"),a("code",[s._v("0")]),s._v("则表示由benchmark自动选择迭代次数。默认值为"),a("code",[s._v("10")]),s._v("。")]),s._v(" "),a("h4",{attrs:{id:"使用随机生成的数据集进行segment写入测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用随机生成的数据集进行segment写入测试"}},[s._v("#")]),s._v(" 使用随机生成的数据集进行Segment写入测试")]),s._v(" "),a("p",[s._v("对将数据集添加进segment并写入磁盘的流程进行耗时统计。")]),s._v(" "),a("blockquote",[a("p",[s._v("./benchmark_tool --operation=SegmentWrite")])]),s._v(" "),a("h4",{attrs:{id:"使用从文件导入的数据集进行segment读取测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用从文件导入的数据集进行segment读取测试"}},[s._v("#")]),s._v(" 使用从文件导入的数据集进行Segment读取测试")]),s._v(" "),a("blockquote",[a("p",[s._v("./benchmark_tool --operation=SegmentScanByFile --input_file=./sample.dat")])]),s._v(" "),a("p",[s._v("这里的"),a("code",[s._v("input_file")]),s._v("为导入的数据集文件。\n数据集文件第一行为表结构定义,之后每行分别对应一行数据,每个数据用"),a("code",[s._v(",")]),s._v("隔开。")]),s._v(" "),a("p",[s._v("举例:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int,char,varchar\n123,hello,world\n321,good,bye\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("类型支持同样为"),a("code",[s._v("int")]),s._v("、"),a("code",[s._v("char")]),s._v("、"),a("code",[s._v("varchar")]),s._v("、"),a("code",[s._v("string")]),s._v(",注意"),a("code",[s._v("char")]),s._v("类型数据长度不能超过8。")]),s._v(" "),a("h4",{attrs:{id:"使用从文件导入的数据集进行segment写入测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用从文件导入的数据集进行segment写入测试"}},[s._v("#")]),s._v(" 使用从文件导入的数据集进行Segment写入测试")]),s._v(" "),a("blockquote",[a("p",[s._v("./benchmark_tool --operation=SegmentWriteByFile --input_file=./sample.dat")])]),s._v(" "),a("h4",{attrs:{id:"使用随机生成的数据集进行page字典编码测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用随机生成的数据集进行page字典编码测试"}},[s._v("#")]),s._v(" 使用随机生成的数据集进行page字典编码测试")]),s._v(" "),a("blockquote",[a("p",[s._v("./benchmark_tool --operation=BinaryDictPageEncode --rows_number=10000 --iterations=0")])]),s._v(" "),a("p",[s._v("会随机生成长度在[1,8]之间的varchar,并对编码进行耗时统计。")]),s._v(" "),a("h4",{attrs:{id:"使用随机生成的数据集进行page字典解码测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用随机生成的数据集进行page字典解码测试"}},[s._v("#")]),s._v(" 使用随机生成的数据集进行page字典解码测试")]),s._v(" "),a("blockquote",[a("p",[s._v("./benchmark_tool --operation=BinaryDictPageDecode")])]),s._v(" "),a("p",[s._v("会随机生成长度在[1,8]之间的varchar并编码,并对解码进行耗时统计。")]),s._v(" "),a("h2",{attrs:{id:"custom测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom测试"}},[s._v("#")]),s._v(" Custom测试")]),s._v(" "),a("p",[s._v("这里支持用户使用自己编写的函数进行性能测试,具体可以实现在"),a("code",[s._v("/be/test/tools/benchmark_tool.cpp")]),s._v("。\n例如实现有：")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("custom_run_plus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        q"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UNLIKELY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("custom_run_mod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        q"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("则可以通过注册"),a("code",[s._v("CustomBenchmark")]),s._v("来加入测试。")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[s._v("benchmarks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("emplace_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" doris"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("CustomBenchmark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"custom_run_plus"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        custom_init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" custom_run_plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nbenchmarks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("emplace_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" doris"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("CustomBenchmark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"custom_run_mod"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        custom_init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" custom_run_mod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这里的"),a("code",[s._v("init")]),s._v("为每轮测试的初始化步骤(不会计入耗时),如果用户有需要初始化的对象则可以通过"),a("code",[s._v("CustomBenchmark")]),s._v("的派生类来实现。\n运行后有如下结果:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("2021-08-30T10:29:35+08:00\nRunning ./benchmark_tool\nRun on (96 X 3100.75 MHz CPU s)\nCPU Caches:\n  L1 Data 32 KiB (x48)\n  L1 Instruction 32 KiB (x48)\n  L2 Unified 1024 KiB (x48)\n  L3 Unified 33792 KiB (x2)\nLoad Average: 0.55, 0.53, 0.39\n----------------------------------------------------------\nBenchmark                Time             CPU   Iterations\n----------------------------------------------------------\ncustom_run_plus      0.812 ms        0.812 ms          861\ncustom_run_mod        1.30 ms         1.30 ms          539\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);