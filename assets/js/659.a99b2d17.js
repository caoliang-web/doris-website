(window.webpackJsonp=window.webpackJsonp||[]).push([[659],{1284:function(e,a,s){"use strict";s.r(a);var i=s(15),n=Object(i.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"minidump-removed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minidump-removed"}},[e._v("#")]),e._v(" Minidump(removed)")]),e._v(" "),s("blockquote",[s("p",[e._v("Minidump 已经被移除，它在实际线上环境中没有用处，反而会引入额外的错误。")])]),e._v(" "),s("p",[e._v("Minidump 是微软定义的一种用于程序崩溃后错误上报的文件格式。其中包括了崩溃时的线程信息、寄存器信息、调用栈信息等等，这有助于开发人员快速定位问题。")]),e._v(" "),s("p",[e._v("不同于 "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Core_dump",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coredump"),s("OutboundLink")],1),e._v("，Minidump 文件体积更小，更易于上报和网络传输。Coredump 文件会包含完整的内存镜像，因此体积可能有几十上百GB。而 Minidump 文件仅包含关键线程的调用栈和寄存器信息，因此体积通常只有 MB 级别。")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/google/breakpad",target:"_blank",rel:"noopener noreferrer"}},[e._v("Breakpad"),s("OutboundLink")],1),e._v(" 是一个跨平台的崩溃转储和分析框架和工具集合。用户可以借助 Breakpad 来对 Minidump 文件进行自助分析。也可以收集 Minidump 文件并上报给 Doris 集群运维或开发人员。")]),e._v(" "),s("h2",{attrs:{id:"如何开启-minidump"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何开启-minidump"}},[e._v("#")]),e._v(" 如何开启 Minidump")]),e._v(" "),s("p",[e._v("Minidump 功能是在 Doris 0.15.0 之后的版本中引入的功能。该功能由 BE 的以下配置文件控制：")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("disable_minidump")])]),e._v(" "),s("p",[e._v("是否开启 Minidump 功能。默认为 false，即开启。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("minidump_dir")])]),e._v(" "),s("p",[e._v("Minidump 文件的存储目录。默认为 "),s("code",[e._v("${DORIS_HOME}/Minidump/")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("max_minidump_file_size_mb")])]),e._v(" "),s("p",[e._v("Minidump 文件的大小限制。默认为 200MB。如果大小超过阈值，breakpad 会尝试减少文件中记录的信息，比如线程数量和寄存器数量来介绍 Minidump 的文件大小。但这只是一个期望值，实际文件大小可能比设定的大。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("max_minidump_file_number")])]),e._v(" "),s("p",[e._v("最多保留多少个 Minidump 文件。默认为 10，既保留最近的 10 个文件。")])])]),e._v(" "),s("h2",{attrs:{id:"如何生成-minidump"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何生成-minidump"}},[e._v("#")]),e._v(" 如何生成 Minidump")]),e._v(" "),s("p",[e._v("Minidump 的生成有两种方式：")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("程序崩溃")]),e._v(" "),s("p",[e._v("当程序遇到问题崩溃后，会自动生成 Minidump 文件。此时会在 be.out 中出现如下信息：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('Minidump created at: /doris/be/Minidump/4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp\n*** Aborted at 1636970042 (unix time) try "date -d @1636970042" if you are using GNU date ***\nPC: @          0x1b184e4 doris::OlapScanNode::scanner_thread()\n*** SIGSEGV (@0x0) received by PID 71567 (TID 0x7f173a5df700) from PID 0; stack trace: ***\n@          0x220c992 google::(anonymous namespace)::FailureSignalHandler()\n@     0x7f174fb5e1d0 (unknown)\n@          0x1b184e4 doris::OlapScanNode::scanner_thread()\n@          0x15a19af doris::PriorityThreadPool::work_thread()\n@          0x21d9107 thread_proxy\n@     0x7f174fb53f84 start_thread\n@     0x7f174f943ddf __GI___clone\n@                0x0 (unknown)\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("p",[e._v("其中 "),s("code",[e._v("/doris/be/Minidump/4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp")]),e._v(" 为 Minidump 文件。而其后的堆栈是程序崩溃点所在的调用栈信息。")])]),e._v(" "),s("li",[s("p",[e._v("手动触发")]),e._v(" "),s("p",[e._v("用户可以主动地向 BE 进程发送 SIGUSR1 信号来触发 Minidump。如使用以下命令：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kill -s SIGUSR1 71567\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("其中 71567 是 BE 的进程id（pid）。之后，会在 be.out 中出现如下信息：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Receive signal: SIGUSR1\nMinidump created at: /doris/be/Minidump/1af8fe8f-3d5b-40ea-6b76ad8f-0cf6756f.dmp\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("其中 "),s("code",[e._v("Receive signal: SIGUSR1")]),e._v(" 表示这是用户触发的 Minidump 操作。后面是 Minidump 文件位置。")]),e._v(" "),s("p",[e._v("用户手动触发的 Minidump 操作不会杀死 BE 进程，并且不会在 be.out 产生错误堆栈。")])])]),e._v(" "),s("h2",{attrs:{id:"如何分析-minidump"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何分析-minidump"}},[e._v("#")]),e._v(" 如何分析 Minidump")]),e._v(" "),s("p",[e._v("我们可以使用 breakpad 提供的各类工具来分析 Minidump，从而查看错误原因。")]),e._v(" "),s("h3",{attrs:{id:"获取-breakpad-工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取-breakpad-工具"}},[e._v("#")]),e._v(" 获取 breakpad 工具")]),e._v(" "),s("p",[e._v("用户可以自行前往 "),s("a",{attrs:{href:"https://github.com/google/breakpad",target:"_blank",rel:"noopener noreferrer"}},[e._v("Breakpad"),s("OutboundLink")],1),e._v(" 代码库下载并编译 breakpad。编译方式可以参考 Doris 源码库中的 "),s("a",{attrs:{href:"https://github.com/apache/incubator-doris/blob/master/thirdparty/vars.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("thirdparty/vars.sh"),s("OutboundLink")],1),e._v(" 中的 "),s("code",[e._v("build_breakpad()")]),e._v(" 方法。")]),e._v(" "),s("p",[e._v("也可以在 Doris 提供的 Docker 编译镜像 1.4.2 以上版本中，从镜像容器的 "),s("code",[e._v("/var/local/thirdparty/installed/bin")]),e._v(" 目录下找到 breakpad 编译产出的各类工具。")]),e._v(" "),s("h3",{attrs:{id:"分析-minidump"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析-minidump"}},[e._v("#")]),e._v(" 分析 Minidump")]),e._v(" "),s("p",[e._v("我们可以使用以下两种方式来分析 Minidump 文件。")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("转储成 coredump 文件")]),e._v(" "),s("p",[e._v("使用 breakpad 提供的 "),s("code",[e._v("minidump-2-core")]),e._v(" 工具将 Minidump 文件转储成 coredump 文件：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("./minidump-2-core /doris/be/Minidump/1af8fe8f-3d5b-40ea-6b76ad8f-0cf6756f.dmp > 1.coredump\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("之后我们可以使用 gdb 工具来分析这个 coredump 文件了：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("gdb lib/palo_be -c 1.coredump\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("生成可读调用栈")]),e._v(" "),s("p",[e._v("Minidump 文件中只包含调用栈的地址，我们需要把这些地址对应到实际的函数文件位置。因此，我们首先需要通过 "),s("code",[e._v("dump_syms")]),e._v(" 生成 BE 二进制文件的符号表 "),s("code",[e._v("palo_be.sym")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("./dump_syms ./lib/palo_be > palo_be.sym\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("接下来，我们需要符号表第一行的信息，构建一个对应的符号表目录。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("head -n1 palo_be.sym\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("以上命令会打印 palo_be.sym 的第一行内容如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("MODULE Linux x86_64 137706CC745F5EC3EABBF730D4B229370 palo_be\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("之后我们创建一个目录结构：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mkdir -p ./symbols/palo_be/137706CC745F5EC3EABBF730D4B229370\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("目录路径中的 "),s("code",[e._v("palo_be")]),e._v(" 和 "),s("code",[e._v("137706CC745F5EC3EABBF730D4B229370")]),e._v(" 需和 palo_be.sym 文件的第一行内容一致。然后我们将 palo_be.sym 文件移动到该目录中：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cp palo_be.sym ./symbols/palo_be/137706CC745F5EC3EABBF730D4B229370\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("最后，我们可以使用 "),s("code",[e._v("minidump_stackwalk")]),e._v(" 来产出可读的调用栈信息：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("minidump_stackwalk 4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp ./symbols/ > readable.stack\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("其中 "),s("code",[e._v("4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp")]),e._v(" 为 minidump 文件。"),s("code",[e._v("./symbols/")]),e._v(" 为之前创建的包含 palo_be.sym 的目录。"),s("code",[e._v("readable.stack")]),e._v(" 是将生成的结果重定向到这个文件中。同时，在执行这个命令时，屏幕上也会刷一些程序运行日志，可以不用理会。")]),e._v(" "),s("p",[e._v("至此，我们就获取了一个可读的线程调用栈文件：readable.stack。其中包含了 BE 程序在写 Minidump 文件时的所有线程的调用栈信息，以及对应的寄存器信息。")]),e._v(" "),s("p",[e._v("其中 "),s("code",[e._v("Crash reason")]),e._v(" 说明了程序崩溃的原因。如果是 "),s("code",[e._v("DUMP_REQUESTED")]),e._v("，则表示这是一次用户主动触发的 Minidump。")]),e._v(" "),s("p",[e._v("我们可以通过以下命令过滤掉寄存器信息，从而获取一个比较清晰的调用栈视图：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('grep -v = readable.stack |grep -v "Found by" |vi -\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("其结果比较类似于通过 pstack 命令获取到的线程调用栈信息。")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);