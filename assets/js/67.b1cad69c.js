(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{697:function(e,a,t){"use strict";t.r(a);var i=t(15),s=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"minidump-removed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minidump-removed"}},[e._v("#")]),e._v(" Minidump(removed)")]),e._v(" "),t("blockquote",[t("p",[e._v("Minidump has been removed, it's useless in real online environment and instead introduces additional bugs")])]),e._v(" "),t("p",[e._v("Minidump is a file format defined by Microsoft for reporting errors after program crashes. It includes thread information, register information, call stack information, etc. at the time of the crash, which helps developers quickly locate the problem.")]),e._v(" "),t("p",[e._v("Unlike "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Core_dump",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coredump"),t("OutboundLink")],1),e._v(", Minidump files are smaller and easier to report and network transmission. Coredump file will contain a complete memory image, so the volume may be dozens or hundreds of GB. The Minidump file only contains the call stack and register information of the key thread, so the size is usually only MB level.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/google/breakpad",target:"_blank",rel:"noopener noreferrer"}},[e._v("Breakpad"),t("OutboundLink")],1),e._v(" is a cross-platform crash dump and analysis framework and tool collection. Users can use Breakpad to conduct self-service analysis of Minidump files. You can also collect Minidump files and report them to Doris cluster operation and maintenance or developers.")]),e._v(" "),t("h2",{attrs:{id:"how-to-enable-minidump"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-enable-minidump"}},[e._v("#")]),e._v(" How to enable Minidump")]),e._v(" "),t("p",[e._v("Minidump function is a function introduced in Doris 0.15.0 or later. This function is controlled by the following configuration files of BE:")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("disable_minidump")])]),e._v(" "),t("p",[e._v("Whether to enable Minidump function. The default is false, which means it is turned on.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("minidump_dir")])]),e._v(" "),t("p",[e._v("The storage directory of the Minidump file. The default is "),t("code",[e._v("${DORIS_HOME}/Minidump/")])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("max_minidump_file_size_mb")])]),e._v(" "),t("p",[e._v("Minidump file size limit. The default is 200MB. If the size exceeds the threshold, breakpad will try to reduce the information recorded in the file, such as the number of threads and the number of registers to introduce the Minidump file size. But this is only an expected value, and the actual file size may be larger than the set value.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("max_minidump_file_number")])]),e._v(" "),t("p",[e._v("The maximum number of Minidump files to keep. The default is 10, which means that the most recent 10 files are kept.")])])]),e._v(" "),t("h2",{attrs:{id:"how-to-generate-minidump"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-generate-minidump"}},[e._v("#")]),e._v(" How to generate Minidump")]),e._v(" "),t("p",[e._v("There are two ways to generate Minidump:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("The program crashes")]),e._v(" "),t("p",[e._v("When the program encounters a problem and crashes, it will automatically generate a Minidump file. The following information will appear in be.out at this time:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Minidump created at: /doris/be/Minidump/4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp\n*** Aborted at 1636970042 (unix time) try "date -d @1636970042" if you are using GNU date ***\nPC: @ 0x1b184e4 doris::OlapScanNode::scanner_thread()\n*** SIGSEGV (@0x0) received by PID 71567 (TID 0x7f173a5df700) from PID 0; stack trace: ***\n@ 0x220c992 google::(anonymous namespace)::FailureSignalHandler()\n@ 0x7f174fb5e1d0 (unknown)\n@ 0x1b184e4 doris::OlapScanNode::scanner_thread()\n@ 0x15a19af doris::PriorityThreadPool::work_thread()\n@ 0x21d9107 thread_proxy\n@ 0x7f174fb53f84 start_thread\n@ 0x7f174f943ddf __GI___clone\n@ 0x0 (unknown)\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("p",[e._v("Among them, "),t("code",[e._v("/doris/be/Minidump/4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp")]),e._v(" is the Minidump file. And the following stack is the call stack information where the program crashed.")])]),e._v(" "),t("li",[t("p",[e._v("Manual trigger")]),e._v(" "),t("p",[e._v("The user can actively send the SIGUSR1 signal to the BE process to trigger Minidump. For example, use the following command:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kill -s SIGUSR1 71567\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("71567 is the process id (pid) of BE. After that, the following information will appear in be.out:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Receive signal: SIGUSR1\nMinidump created at: /doris/be/Minidump/1af8fe8f-3d5b-40ea-6b76ad8f-0cf6756f.dmp\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("Among them, "),t("code",[e._v("Receive signal: SIGUSR1")]),e._v(" means that this is a Minidump operation triggered by the user. Following is the location of the Minidump file.")]),e._v(" "),t("p",[e._v("The Minidump operation manually triggered by the user will not kill the BE process and will not generate an error stack in be.out.")])])]),e._v(" "),t("h2",{attrs:{id:"how-to-analyze-minidump"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-analyze-minidump"}},[e._v("#")]),e._v(" How to analyze Minidump")]),e._v(" "),t("p",[e._v("We can use various tools provided by breakpad to analyze Minidump to see the cause of the error.")]),e._v(" "),t("h3",{attrs:{id:"get-the-breakpad-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-the-breakpad-tool"}},[e._v("#")]),e._v(" Get the breakpad tool")]),e._v(" "),t("p",[e._v("Users can go to "),t("a",{attrs:{href:"https://github.com/google/breakpad",target:"_blank",rel:"noopener noreferrer"}},[e._v("Breakpad"),t("OutboundLink")],1),e._v(" code base to download and compile breakpad. For the compilation method, please refer to the "),t("code",[e._v("build_breakpad()")]),e._v(" method in "),t("a",{attrs:{href:"https://github.com/apache/incubator-doris/blob/master/thirdparty/vars.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("thirdparty/vars.sh"),t("OutboundLink")],1),e._v(" in the Doris source code library.")]),e._v(" "),t("p",[e._v("You can also find various tools compiled by breakpad from the "),t("code",[e._v("/var/local/thirdparty/installed/bin")]),e._v(" directory of the image container in the version 1.4.2 and above of the Docker compiled image provided by Doris.")]),e._v(" "),t("h3",{attrs:{id:"analyze-minidump"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analyze-minidump"}},[e._v("#")]),e._v(" Analyze Minidump")]),e._v(" "),t("p",[e._v("We can use the following two methods to analyze Minidump files.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Dump into coredump file")]),e._v(" "),t("p",[e._v("Use the "),t("code",[e._v("minidump-2-core")]),e._v(" tool provided by breakpad to dump the Minidump file into a coredump file:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./minidump-2-core /doris/be/Minidump/1af8fe8f-3d5b-40ea-6b76ad8f-0cf6756f.dmp> 1.coredump\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Then we can use the gdb tool to analyze the coredump file:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gdb lib/doris_be -c 1.coredump\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Generate a readable call stack")]),e._v(" "),t("p",[e._v("The Minidump file only contains the address of the call stack, and we need to map these addresses to the actual function file location. Therefore, we first need to generate the symbol table "),t("code",[e._v("doris_be.sym")]),e._v(" of the BE binary file through "),t("code",[e._v("dump_syms")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./dump_syms ./lib/doris_be> doris_be.sym\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Next, we need the information in the first row of the symbol table to build a corresponding symbol table directory.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("head -n1 doris_be.sym\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The above command will print the first line of doris_be.sym as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MODULE Linux x86_64 137706CC745F5EC3EABBF730D4B229370 doris_be\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Then we create a directory structure:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mkdir -p ./symbols/doris_be/137706CC745F5EC3EABBF730D4B229370\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The "),t("code",[e._v("doris_be")]),e._v(" and "),t("code",[e._v("137706CC745F5EC3EABBF730D4B229370")]),e._v(" in the directory path must be consistent with the first line of the doris_be.sym file. Then we move the doris_be.sym file to this directory:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cp doris_be.sym ./symbols/doris_be/137706CC745F5EC3EABBF730D4B229370\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Finally, we can use "),t("code",[e._v("minidump_stackwalk")]),e._v(" to produce readable call stack information:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("minidump_stackwalk 4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp ./symbols/> readable.stack\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Among them, "),t("code",[e._v("4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp")]),e._v(" is a minidump file. "),t("code",[e._v("./symbols/")]),e._v(" is the previously created directory containing doris_be.sym. "),t("code",[e._v("readable.stack")]),e._v(" redirects the generated results to this file. At the same time, when this command is executed, some program running logs will be flashed on the screen, so you can ignore it.")]),e._v(" "),t("p",[e._v("At this point, we have obtained a readable thread call stack file: readable.stack. It contains the call stack information of all threads when the BE program is writing the Minidump file, and the corresponding register information. Among them, "),t("code",[e._v("Crash reason")]),e._v(" explains why the program crashed. If it is "),t("code",[e._v("DUMP_REQUESTED")]),e._v(", it means that this is a Minidump triggered by the user.")]),e._v(" "),t("p",[e._v("We can filter out the register information with the following command to get a clear view of the call stack:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('grep -v = readable.stack |grep -v "Found by" |vi-\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The result is similar to the thread call stack information obtained through the pstack command.")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);