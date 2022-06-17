(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{764:function(e,t,a){"use strict";a.r(t);var s=a(15),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tablet-restore-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablet-restore-tool"}},[e._v("#")]),e._v(" Tablet Restore Tool")]),e._v(" "),a("h2",{attrs:{id:"restore-data-from-be-recycle-bin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore-data-from-be-recycle-bin"}},[e._v("#")]),e._v(" Restore data from BE Recycle Bin")]),e._v(" "),a("p",[e._v("During the user's use of Doris, some valid tablets (including metadata and data) may be deleted due to some misoperations or online bugs. In order to prevent data loss in these abnormal situations, Doris provides a recycle bin mechanism to protect user data. Tablet data deleted by users will not be deleted directly, but will be stored in the recycle bin for a period of time. After a period of time, there will be a regular cleaning mechanism to delete expired data. The data in the recycle bin includes: tablet data file (.dat), tablet index file (.idx) and tablet metadata file (.hdr). The data will be stored in a path in the following format:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/root_path/trash/time_label/tablet_id/schema_hash/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("root_path")]),e._v(": a data root directory corresponding to the BE node.")]),e._v(" "),a("li",[a("code",[e._v("trash")]),e._v(": The directory of the recycle bin.")]),e._v(" "),a("li",[a("code",[e._v("time_label")]),e._v(": Time label, for the uniqueness of the data directory in the recycle bin, while recording the data time, use the time label as a subdirectory.")])]),e._v(" "),a("p",[e._v("When a user finds that online data has been deleted by mistake, he needs to recover the deleted tablet from the recycle bin. This tablet data recovery function is needed.")]),e._v(" "),a("p",[e._v("BE provides http interface and "),a("code",[e._v("restore_tablet_tool.sh")]),e._v(" script to achieve this function, and supports single tablet operation (single mode) and batch operation mode (batch mode).")]),e._v(" "),a("ul",[a("li",[e._v("In single mode, data recovery of a single tablet is supported.")]),e._v(" "),a("li",[e._v("In batch mode, support batch tablet data recovery.")])]),e._v(" "),a("h3",{attrs:{id:"operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[e._v("#")]),e._v(" Operation")]),e._v(" "),a("h4",{attrs:{id:"single-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-mode"}},[e._v("#")]),e._v(" single mode")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("http request method")]),e._v(" "),a("p",[e._v("BE provides an http interface for single tablet data recovery, the interface is as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('curl -X POST "http://be_host:be_webserver_port/api/restore_tablet?tablet_id=11111\\&schema_hash=12345"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The successful results are as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{"status": "Success", "msg": "OK"}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If it fails, the corresponding failure reason will be returned. One possible result is as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{"status": "Failed", "msg": "create link path failed"}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Script mode")]),e._v(" "),a("p",[a("code",[e._v("restore_tablet_tool.sh")]),e._v(" can be used to realize the function of single tablet data recovery.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('sh tools/restore_tablet_tool.sh -b "http://127.0.0.1:8040" -t 12345 -s 11111\nsh tools/restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --tablet_id 12345 --schema_hash 11111\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])])]),e._v(" "),a("h4",{attrs:{id:"batch-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-mode"}},[e._v("#")]),e._v(" batch mode")]),e._v(" "),a("p",[e._v("The batch recovery mode is used to realize the function of recovering multiple tablet data.")]),e._v(" "),a("p",[e._v("When using, you need to put the restored tablet id and schema hash in a file in a comma-separated format in advance, one tablet per line.")]),e._v(" "),a("p",[e._v("The format is as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("12345,11111\n12346,11111\n12347,11111\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Then perform the recovery with the following command (assuming the file name is: "),a("code",[e._v("tablets.txt")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('sh restore_tablet_tool.sh -b "http://127.0.0.1:8040" -f tablets.txt\nsh restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --file tablets.txt\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"repair-missing-or-damaged-tablet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repair-missing-or-damaged-tablet"}},[e._v("#")]),e._v(" Repair missing or damaged Tablet")]),e._v(" "),a("p",[e._v("In some very special circumstances, such as code bugs, or human misoperation, etc., all replicas of some tablets may be lost. In this case, the data has been substantially lost. However, in some scenarios, the business still hopes to ensure that the query will not report errors even if there is data loss, and reduce the perception of the user layer. At this point, we can use the blank Tablet to fill the missing replica to ensure that the query can be executed normally.")]),e._v(" "),a("p",[a("strong",[e._v("Note: This operation is only used to avoid the problem of error reporting due to the inability to find a queryable replica, and it is impossible to recover the data that has been substantially lost.")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("View Master FE log "),a("code",[e._v("fe.log")])]),e._v(" "),a("p",[e._v("If there is data loss, there will be a log similar to the following in the log:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("backend [10001] invalid situation. tablet[20000] has few replica[1], replica num setting is [3]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This log indicates that all replicas of tablet 20000 have been damaged or lost.")])]),e._v(" "),a("li",[a("p",[e._v("Use blank replicas to fill in missing copies")]),e._v(" "),a("p",[e._v("After confirming that the data cannot be recovered, you can execute the following command to generate blank replicas.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ADMIN SET FRONTEND CONFIG ("recover_with_empty_tablet" = "true");\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("Note: You can first check whether the current version supports this parameter through the "),a("code",[e._v("ADMIN SHOW FRONTEND CONFIG;")]),e._v(" command.")])])]),e._v(" "),a("li",[a("p",[e._v("A few minutes after the setup is complete, you should see the following log in the Master FE log "),a("code",[e._v("fe.log")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tablet 20000 has only one replica 20001 on backend 10001 and it is lost. create an empty replica to recover it.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The log indicates that the system has created a blank tablet to fill in the missing replica.")])]),e._v(" "),a("li",[a("p",[e._v("Judge whether it has been repaired successfully through query.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);