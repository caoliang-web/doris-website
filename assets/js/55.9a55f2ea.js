(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{684:function(t,e,a){"use strict";a.r(e);var s=a(15),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"doris-be-storage-layer-benchmark-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-be-storage-layer-benchmark-tool"}},[t._v("#")]),t._v(" Doris BE Storage Layer Benchmark Tool")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" usage")]),t._v(" "),a("p",[t._v("It can be used to test the performance of some parts of the BE storage layer (for example, segment, page). According to the input data, the designated object is constructed, and the google benchmark is used for performance testing.")]),t._v(" "),a("h2",{attrs:{id:"compilation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compilation"}},[t._v("#")]),t._v(" Compilation")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("To ensure that the environment has been able to successfully compile the Doris ontology, you can refer to "),a("RouterLink",{attrs:{to:"/docs/install/source-install/compilation.html"}},[t._v("Installation and deployment")]),t._v("。")],1)]),t._v(" "),a("li",[a("p",[t._v("Execute"),a("code",[t._v("run-be-ut.sh")])])]),t._v(" "),a("li",[a("p",[t._v("The compiled executable file is located in "),a("code",[t._v("./be/ut_build_ASAN/test/tools/benchmark_tool")])])])]),t._v(" "),a("h2",{attrs:{id:"operator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operator"}},[t._v("#")]),t._v(" operator")]),t._v(" "),a("h4",{attrs:{id:"use-randomly-generated-data-set-for-segment-read-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-randomly-generated-data-set-for-segment-read-test"}},[t._v("#")]),t._v(" Use randomly generated data set for segment read test")]),t._v(" "),a("p",[t._v("The data set will be used to write a "),a("code",[t._v("segment")]),t._v(" file first, and then the time-consuming scan of the entire "),a("code",[t._v("segment")]),t._v(" will be counted.")]),t._v(" "),a("blockquote",[a("p",[t._v("./benchmark_tool --operation=SegmentScan --column_type=int,varchar --rows_number=10000 --iterations=0")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("column_type")]),t._v(" here can set the schema, the column type of the "),a("code",[t._v("segment")]),t._v(" layer currently supports "),a("code",[t._v("int, char, varchar, string")]),t._v(", the length of the "),a("code",[t._v("char")]),t._v(" type is "),a("code",[t._v("8")]),t._v(", and both "),a("code",[t._v("varchar")]),t._v(" and "),a("code",[t._v("string")]),t._v(" types have length restrictions Is the maximum value. The default value is "),a("code",[t._v("int,varchar")]),t._v(".")]),t._v(" "),a("p",[t._v("The data set is generated according to the following rules.")]),t._v(" "),a("blockquote",[a("p",[t._v("int: Random in [1,1000000].")])]),t._v(" "),a("p",[t._v("The data character set of string type is uppercase and lowercase English letters, and the length varies according to the type.")]),t._v(" "),a("blockquote",[a("p",[t._v("char: Length random in [1,8]。\nvarchar: Length random in [1,128]。\nstring: Length random in [1,100000]。")])]),t._v(" "),a("p",[a("code",[t._v("rows_number")]),t._v(" indicates the number of rows of data, the default value is "),a("code",[t._v("10000")]),t._v(".")]),t._v(" "),a("p",[a("code",[t._v("iterations")]),t._v(" indicates the number of iterations, the benchmark will repeat the test, and then calculate the average time. If "),a("code",[t._v("iterations")]),t._v(" is "),a("code",[t._v("0")]),t._v(", it means that the number of iterations is automatically selected by the benchmark. The default value is "),a("code",[t._v("10")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"use-randomly-generated-data-set-for-segment-write-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-randomly-generated-data-set-for-segment-write-test"}},[t._v("#")]),t._v(" Use randomly generated data set for segment write test")]),t._v(" "),a("p",[t._v("Perform time-consuming statistics on the process of adding data sets to segments and writing them to disk.")]),t._v(" "),a("blockquote",[a("p",[t._v("./benchmark_tool --operation=SegmentWrite")])]),t._v(" "),a("h4",{attrs:{id:"use-the-data-set-imported-from-the-file-for-segment-read-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-the-data-set-imported-from-the-file-for-segment-read-test"}},[t._v("#")]),t._v(" Use the data set imported from the file for segment read test")]),t._v(" "),a("blockquote",[a("p",[t._v("./benchmark_tool --operation=SegmentScanByFile --input_file=./sample.dat")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("input_file")]),t._v(" here is the imported data set file.\nThe first row of the data set file defines the schema, and each row corresponds to a row of data, and each data is separated by "),a("code",[t._v(",")]),t._v(".")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("int,char,varchar\n123,hello,world\n321,good,bye\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("The type support is also "),a("code",[t._v("int")]),t._v(", "),a("code",[t._v("char")]),t._v(", "),a("code",[t._v("varchar")]),t._v(", "),a("code",[t._v("string")]),t._v(". Note that the data length of the "),a("code",[t._v("char")]),t._v(" type cannot exceed 8.")]),t._v(" "),a("h4",{attrs:{id:"use-the-data-set-imported-from-the-file-for-segment-write-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-the-data-set-imported-from-the-file-for-segment-write-test"}},[t._v("#")]),t._v(" Use the data set imported from the file for segment write test")]),t._v(" "),a("blockquote",[a("p",[t._v("./benchmark_tool --operation=SegmentWriteByFile --input_file=./sample.dat")])]),t._v(" "),a("h4",{attrs:{id:"use-randomly-generated-data-set-for-page-dictionary-encoding-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-randomly-generated-data-set-for-page-dictionary-encoding-test"}},[t._v("#")]),t._v(" Use randomly generated data set for page dictionary encoding test")]),t._v(" "),a("blockquote",[a("p",[t._v("./benchmark_tool --operation=BinaryDictPageEncode --rows_number=10000 --iterations=0")])]),t._v(" "),a("p",[t._v("Randomly generate varchar with a length between [1,8], and perform time-consuming statistics on encoding.")]),t._v(" "),a("h4",{attrs:{id:"use-randomly-generated-data-set-for-page-dictionary-decoding-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-randomly-generated-data-set-for-page-dictionary-decoding-test"}},[t._v("#")]),t._v(" Use randomly generated data set for page dictionary decoding test")]),t._v(" "),a("blockquote",[a("p",[t._v("./benchmark_tool --operation=BinaryDictPageDecode")])]),t._v(" "),a("p",[t._v("Randomly generate varchar with a length between [1,8] and encode, and perform time-consuming statistics on decoding.")]),t._v(" "),a("h2",{attrs:{id:"custom-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-test"}},[t._v("#")]),t._v(" Custom test")]),t._v(" "),a("p",[t._v("Here, users are supported to use their own functions for performance testing, which can be implemented in "),a("code",[t._v("/be/test/tools/benchmark_tool.cpp")]),t._v(".")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("custom_run_plus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UNLIKELY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("custom_run_mod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("You can join the test by registering "),a("code",[t._v("CustomBenchmark")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("benchmarks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emplace_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" doris"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CustomBenchmark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom_run_plus"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    \tcustom_init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" custom_run_plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbenchmarks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emplace_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" doris"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CustomBenchmark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom_run_mod"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    \tcustom_init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" custom_run_mod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("The "),a("code",[t._v("custom_init")]),t._v(" here is the initialization step of each round of testing (not counted as time-consuming). If the user has an object that needs to be initialized, it can be implemented by a derived class of "),a("code",[t._v("CustomBenchmark")]),t._v(".\nAfter running, the results are as follows:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("2021-08-30T10:29:35+08:00\nRunning ./benchmark_tool\nRun on (96 X 3100.75 MHz CPU s)\nCPU Caches:\n  L1 Data 32 KiB (x48)\n  L1 Instruction 32 KiB (x48)\n  L2 Unified 1024 KiB (x48)\n  L3 Unified 33792 KiB (x2)\nLoad Average: 0.55, 0.53, 0.39\n----------------------------------------------------------\nBenchmark                Time             CPU   Iterations\n----------------------------------------------------------\ncustom_run_plus      0.812 ms        0.812 ms          861\ncustom_run_mod        1.30 ms         1.30 ms          539\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);