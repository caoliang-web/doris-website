(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{694:function(e,t,a){"use strict";a.r(t);var r=a(15),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"java-format-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-format-code"}},[e._v("#")]),e._v(" Java Format Code")]),e._v(" "),a("p",[e._v("The formatting of the Java part of the code in Doris is usually done automatically by the IDE. Only the general format rules are listed here. For developer, you need to set the corresponding code styles in different IDEs according to the format rules.")]),e._v(" "),a("h2",{attrs:{id:"import-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-order"}},[e._v("#")]),e._v(" Import Order")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("org.apache.doris\n<blank line>\nthird party package\n<blank line>\nstandard java package\n<blank line>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("ul",[a("li",[e._v("Do not use "),a("code",[e._v("import *")])]),e._v(" "),a("li",[e._v("Do not use "),a("code",[e._v("import static")])])]),e._v(" "),a("h2",{attrs:{id:"checkstyle-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkstyle-plugin"}},[e._v("#")]),e._v(" Checkstyle Plugin")]),e._v(" "),a("p",[e._v("Now we have "),a("code",[e._v("formatter-check")]),e._v(" in "),a("code",[e._v("CI")]),e._v(" to check the code format.")]),e._v(" "),a("h3",{attrs:{id:"idea"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idea"}},[e._v("#")]),e._v(" IDEA")]),e._v(" "),a("p",[e._v("If you use "),a("code",[e._v("IDEA")]),e._v(" to develop Java code, please install "),a("code",[e._v("Checkstyle-IDEA")]),e._v(" plugin.")]),e._v(" "),a("p",[e._v("Setting the "),a("code",[e._v("checkstyle.xml")]),e._v(" file in "),a("code",[e._v("Tools->Checkstyle")]),e._v(".")]),e._v(" "),a("p",[e._v("Click the plus sign under Configuration File, select "),a("code",[e._v("Use a local Checkstyle file")]),e._v(", and select the "),a("code",[e._v("fe/check/checkstyle/checkstyle.xml")]),e._v(" file.")]),e._v(" "),a("p",[a("strong",[e._v("NOTE:")]),e._v(" Make sure that the version of "),a("code",[e._v("Checkstyle")]),e._v(" is 9.3 or newer (the latest version is recommended).")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/idea-checkstyle-version.png"),alt:""}}),e._v(" "),a("p",[a("strong",[e._v("You can use "),a("code",[e._v("Checkstyle-IDEA")]),e._v(" plugin to check "),a("code",[e._v("Checkstyle")]),e._v(" of your code real-time.")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/idea-checkstyle-plugin-en.png"),alt:""}}),e._v(" "),a("h3",{attrs:{id:"vs-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vs-code"}},[e._v("#")]),e._v(" VS Code")]),e._v(" "),a("p",[e._v("If you use VS Code to develop Java code, please install "),a("code",[e._v("Checkstyle for Java")]),e._v(" plugin, and config according to the "),a("a",{attrs:{href:"https://code.visualstudio.com/docs/java/java-linting",target:"_blank",rel:"noopener noreferrer"}},[e._v("document"),a("OutboundLink")],1),e._v(" and the picture")]),e._v(" "),a("h2",{attrs:{id:"idea-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idea-2"}},[e._v("#")]),e._v(" IDEA")]),e._v(" "),a("h3",{attrs:{id:"auto-format-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-format-code"}},[e._v("#")]),e._v(" Auto format code")]),e._v(" "),a("p",[e._v("The automatic formatting function of "),a("code",[e._v("IDEA")]),e._v(" is also recommended.")]),e._v(" "),a("p",[e._v("Go to "),a("code",[e._v("Preferences->Editor->Code Style->Java")]),e._v(" click the config sign and select "),a("code",[e._v("Import Scheme")]),e._v("，select "),a("code",[e._v("IntelliJ IDEA code style XML")]),e._v("，and select the "),a("code",[e._v("build-support/IntelliJ-code-format.xml")]),e._v(" file.")]),e._v(" "),a("h3",{attrs:{id:"auto-rearrange-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-rearrange-code"}},[e._v("#")]),e._v(" Auto rearrange code")]),e._v(" "),a("p",[e._v("Checkstyle will check declarations order according to "),a("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase/codeconventions-fileorganization.html#1852",target:"_blank",rel:"noopener noreferrer"}},[e._v("Class and Interface Declarations"),a("OutboundLink")],1),e._v(" .")]),e._v(" "),a("p",[e._v("After add the "),a("code",[e._v("build-support/IntelliJ-code-format.xml")]),e._v(" file. Click "),a("code",[e._v("Code/Rearrange Code")]),e._v(" to auto rearrange code.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/idea-rearrange-code.png"),alt:""}}),e._v(" "),a("h2",{attrs:{id:"remove-unused-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-unused-header"}},[e._v("#")]),e._v(" Remove unused header")]),e._v(" "),a("p",[a("strong",[e._v("CTRL + ALT + O ---\x3e")]),e._v(" to remove the unused imports in windows.")]),e._v(" "),a("p",[e._v("Auto remove unused header and reorder according to configure xml:")]),e._v(" "),a("p",[e._v("Click "),a("code",[e._v("Preferences->Editor->Auto Import->Optimize Imports on the Fly")])])])}),[],!1,null,null,null);t.default=o.exports}}]);