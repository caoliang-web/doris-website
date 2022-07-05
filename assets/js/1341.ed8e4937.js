(window.webpackJsonp=window.webpackJsonp||[]).push([[1341],{1966:function(e,t,n){"use strict";n.r(t);var s=n(15),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"compiling-with-ldb-toolchain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compiling-with-ldb-toolchain"}},[e._v("#")]),e._v(" Compiling with LDB toolchain")]),e._v(" "),n("p",[e._v("This document describes how to compile Doris using the LDB toolchain. This method is currently used as a supplement to the Docker compilation method to facilitate developers and users without a Docker environment to compile Doris source code.")]),e._v(" "),n("blockquote",[n("p",[e._v("You can still compile the latest code using the Docker development image: "),n("code",[e._v("apache/incubator-doris:build-env-ldb-toolchain-latest")])])]),e._v(" "),n("blockquote",[n("p",[e._v("Thanks to "),n("a",{attrs:{href:"https://github.com/amosbird",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amos Bird"),n("OutboundLink")],1),e._v(" for this contribution.")])]),e._v(" "),n("h2",{attrs:{id:"prepare-the-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-environment"}},[e._v("#")]),e._v(" Prepare the environment")]),e._v(" "),n("p",[e._v("This works for most Linux distributions (CentOS, Ubuntu, etc.).")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Download "),n("code",[e._v("ldb_toolchain_gen.sh")])]),e._v(" "),n("p",[e._v("The latest "),n("code",[e._v("ldb_toolchain_gen.sh")]),e._v(" can be downloaded from "),n("a",{attrs:{href:"https://github.com/amosbird/ldb_toolchain_gen/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(". This script is used to generate the ldb toolchain.")]),e._v(" "),n("blockquote",[n("p",[e._v("For more information, you can visit "),n("a",{attrs:{href:"https://github.com/amosbird/ldb_toolchain_gen",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/amosbird/ldb_toolchain_gen"),n("OutboundLink")],1)])])]),e._v(" "),n("li",[n("p",[e._v("Execute the following command to generate the ldb toolchain")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sh ldb_toolchain_gen.sh /path/to/ldb_toolchain/\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("where "),n("code",[e._v("/path/to/ldb_toolchain/")]),e._v(" is the directory where the toolchain is installed.")]),e._v(" "),n("p",[e._v("After successful execution, the following directory structure will be created under "),n("code",[e._v("/path/to/ldb_toolchain/")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("├── bin\n├── include\n├── lib\n├── share\n├── test\n└── usr\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])])]),e._v(" "),n("li",[n("p",[e._v("Download and install other compiled components")]),e._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/jdk-8u131-linux-x64.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java8"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/apache-maven-3.6.3-bin.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Maven 3.6.3"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v12.13.0-linux-x64.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node v12.13.0"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("If your environment is somehow minimal, additional packages should be installed before compiling Doris. The following instructions describe how to setup a minimal CentOS 6 box to compile Doris. Other linux distros should be similar.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# install required system packages\nsudo yum install -y byacc patch automake libtool make which file ncurses-devel gettext-devel unzip bzip2 zip util-linux wget git python2\n\n# install autoconf-2.69\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    cd autoconf-2.69 && \\\n    ./configure && \\\n    make && \\\n    make install\n\n# install bison-3.0.4\nwget http://ftp.gnu.org/gnu/bison/bison-3.0.4.tar.gz && \\\n    tar xzf bison-3.0.4.tar.gz && \\\n    cd bison-3.0.4 && \\\n    ./configure && \\\n    make && \\\n    make install\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br")])])]),e._v(" "),n("li",[n("p",[e._v("Download Doris source code")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git clone https://github.com/apache/incubator-doris.git\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("After downloading, go to the Doris source directory, create the "),n("code",[e._v("custom_env.sh")]),e._v(", file, and set the PATH environment variable, e.g.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export JAVA_HOME=/path/to/java/\nexport PATH=$JAVA_HOME/bin:$PATH\nexport PATH=/path/to/maven/bin:$PATH\nexport PATH=/path/to/node/bin:$PATH\nexport PATH=/path/to/ldb_toolchain/bin:$PATH\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])])])]),e._v(" "),n("h2",{attrs:{id:"compiling-doris"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compiling-doris"}},[e._v("#")]),e._v(" Compiling Doris")]),e._v(" "),n("p",[e._v("Enter the Doris source code directory and execute:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ cat /proc/cpuinfo | grep avx2\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Check whether the compilation machine supports the avx2 instruction set")]),e._v(" "),n("p",[e._v("If it is not supported, use the following command to compile")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ USE_AVX2=0 sh build.sh\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("If supported, execute "),n("code",[e._v("sh build.sh")]),e._v(" directly")]),e._v(" "),n("p",[e._v("This script will compile the third-party libraries first and then the Doris components (FE, BE) later. The compiled output is in the "),n("code",[e._v("output/")]),e._v(" directory.")])])}),[],!1,null,null,null);t.default=a.exports}}]);