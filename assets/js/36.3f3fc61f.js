(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{666:function(e,t,s){"use strict";s.r(t);var a=s(15),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"commit-format-specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commit-format-specification"}},[e._v("#")]),e._v(" Commit Format Specification")]),e._v(" "),s("p",[e._v("Commit is divided into ‘ title ’ and ‘ content ’ , the title should be lowercase and the contents  should be capitalized in principle .")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Title")]),e._v(" "),s("p",[s("code",[e._v("[<type>](<scope>) <subject> (#pr)")])]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("<type>")])]),e._v(" "),s("p",[e._v("The types of this pull request are limited to the following types (all lowercase)")]),e._v(" "),s("ul",[s("li",[e._v("fix: Bug fix")]),e._v(" "),s("li",[e._v("feature: New feature")]),e._v(" "),s("li",[e._v("feature-wip: Feature works-in-porgress.")]),e._v(" "),s("li",[e._v("improvement: Optimization and improvement for the original feature.")]),e._v(" "),s("li",[e._v("style: Code style adjustment")]),e._v(" "),s("li",[e._v("typo: Code or Document correction")]),e._v(" "),s("li",[e._v("refactor: Code refactoring (no function changes involved)")]),e._v(" "),s("li",[e._v("performance/optimize: Performance optimization")]),e._v(" "),s("li",[e._v("test: Addition or repair of unit test")]),e._v(" "),s("li",[e._v("chore: Modification of build tool")]),e._v(" "),s("li",[e._v("revert: Revert a previous commit")]),e._v(" "),s("li",[e._v("deps: Modification of third-party dependency Library")]),e._v(" "),s("li",[e._v("community: Such as modification of Github issue template.")])]),e._v(" "),s("p",[e._v("Some tips：")]),e._v(" "),s("ol",[s("li",[e._v("If there are multiple types in one commit, multiple types need to be added")]),e._v(" "),s("li",[e._v("If code refactoring brings performance improvement,  [refactor][optimize] can be added at the same time")]),e._v(" "),s("li",[e._v("There should be no other types than those listed above. If necessary, you need to add new types to this document.")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("<scope>")])]),e._v(" "),s("p",[e._v("Because there are many functional modules, only part of the module scope of the design submitted this time is listed here, which will be continuously improved according to the needs in the future.")]),e._v(" "),s("ul",[s("li",[e._v("planner")]),e._v(" "),s("li",[e._v("meta")]),e._v(" "),s("li",[e._v("storage")]),e._v(" "),s("li",[e._v("stream-load")]),e._v(" "),s("li",[e._v("broker-load")]),e._v(" "),s("li",[e._v("routine-load")]),e._v(" "),s("li",[e._v("sync-job")]),e._v(" "),s("li",[e._v("export")]),e._v(" "),s("li",[e._v("executor")]),e._v(" "),s("li",[e._v("spark-connector")]),e._v(" "),s("li",[e._v("flink-connector")]),e._v(" "),s("li",[e._v("datax")]),e._v(" "),s("li",[e._v("log")]),e._v(" "),s("li",[e._v("cache")]),e._v(" "),s("li",[e._v("config")]),e._v(" "),s("li",[e._v("vectorization")]),e._v(" "),s("li",[e._v("docs")]),e._v(" "),s("li",[e._v("profile")])]),e._v(" "),s("p",[e._v("Some tips：")]),e._v(" "),s("ol",[s("li",[e._v("Try to use options that already exist in the list. If you need to add, please update this document in time")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("<subject>")])]),e._v(" "),s("p",[e._v("The title should clearly indicate the main contents of this commit as far as possible.")])])])]),e._v(" "),s("li",[s("p",[e._v("Content")]),e._v(" "),s("p",[e._v("commit message should follow the following format:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("issue：#7777\n\nyour message\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("ol",[s("li",[e._v("If there is no issue, it can be left blank. Issue can also appear in message.")]),e._v(" "),s("li",[e._v("One line should not exceed 100 characters")])])]),e._v(" "),s("li",[s("p",[e._v("Example")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[fix](executor) change DateTimeValue's memory layout to load (#7022)\n\nChange DateTimeValue memory's layout to old to fix compatibility problems.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[feat](log) extend logger interface, support structured log output(#6600)\n\nSupport structured logging.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[fix][feat-opt](executor)(load)(config) fix some memory bugs (#6699)\n\n1. Fix a memory leak in `collect_iterator.cpp` (Fix #6700)\n2. Add a new BE config `max_segment_num_per_rowset` to limit the num of segment in new rowset.(Fix #6701)\n3. Make the error msg of stream load more friendly.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[feat-opt](load) Reduce the number of segments when loading a large volume data in one batch (#6947)\n\n## Case\n\nIn the load process, each tablet will have a memtable to save the incoming data,\nand if the data in a memtable is larger than 100MB, it will be flushed to disk\nas a `segment` file. And then a new memtable will be created to save the following data.\n\nAssume that this is a table with N buckets(tablets). So the max size of all memtables\nwill be `N * 100MB`. If N is large, it will cost too much memory.\n\nSo for memory limit purpose, when the size of all memtables reach a threshold(2GB as default),\nDoris will try to flush all current memtables to disk(even if their size are not reach 100MB).\n\nSo you will see that the memtable will be flushed when it's size reach `2GB/N`, which maybe much\nsmaller than 100MB, resulting in too many small segment files.\n\n## Solution\n\nWhen decide to flush memtable to reduce memory consumption, NOT to flush all memtable,\nbut to flush part of them.\n\nFor example, there are 50 tablets(with 50 memtables). The memory limit is 1GB,\nso when each memtable reach 20MB, the total size reach 1GB, and flush will occur.\n\nIf I only flush 25 of 50 memtables, then next time when the total size reach 1GB,\nthere will be 25 memtables with size 10MB, and other 25 memtables with size 30MB.\nSo I can flush those memtables with size 30MB, which is larger than 20MB.\n\nThe main idea is to introduce some jitter during flush to ensure the small unevenness\nof each memtable, so as to ensure that flush will only be triggered when the memtable\nis large enough.\n\nIn my test, loading a table with 48 buckets, mem limit 2G, in previous version,\nthe average memtable size is 44MB, after modification, the average size is 82MB\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);