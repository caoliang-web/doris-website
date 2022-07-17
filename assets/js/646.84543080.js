(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{1274:function(s,a,e){"use strict";e.r(a);var r=e(15),t=Object(r.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"完成发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完成发布"}},[s._v("#")]),s._v(" 完成发布")]),s._v(" "),e("p",[s._v("本文档中的步骤，是在完成 dev@doris 邮件组中的发版投票并通过后，进行的后续步骤。")]),s._v(" "),e("h2",{attrs:{id:"上传-package-到-release"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传-package-到-release"}},[s._v("#")]),s._v(" 上传 package 到 release")]),s._v(" "),e("p",[s._v("当正式发布投票成功后，先发[Result]邮件，然后就准备 release package。\n将之前在dev下发布的对应文件夹下的源码包、签名文件和hash文件拷贝到另一个目录 1.1.0，注意文件名字中不要rcxx (可以rename，但不要重新计算签名，hash可以重新计算，结果不会变)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('From:\nhttps://dist.apache.org/repos/dist/dev/doris/\n\nTo:\nhttps://dist.apache.org/repos/dist/release/doris/\n\nEg:\nsvn mv -m "move doris 1.1.0-rc05 to release" https://dist.apache.org/repos/dist/dev/doris/1.1 https://dist.apache.org/repos/dist/release/doris/1.1\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("第一次发布的话 KEYS 文件也需要拷贝过来。然后add到svn release 下。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("add 成功后就可以在下面网址上看到你发布的文件\nhttps://dist.apache.org/repos/dist/release/doris/1.xx/\n\n稍等一段时间后，能在 apache 官网看到：\nhttp://www.apache.org/dist/doris/1.xx/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"在-doris-官网和-github-发布链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-doris-官网和-github-发布链接"}},[s._v("#")]),s._v(" 在 Doris 官网和 github 发布链接")]),s._v(" "),e("p",[s._v("我们以 Doris Core 为例。其他组件注意替换对应的名称。")]),s._v(" "),e("h3",{attrs:{id:"创建下载链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建下载链接"}},[s._v("#")]),s._v(" 创建下载链接")]),s._v(" "),e("p",[s._v("下载链接：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('http://www.apache.org/dyn/closer.cgi?filename=doris/1.xx/apache-doris-1.xx-src.tar.gz&action=download\n\nwget --trust-server-names "https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=doris/1.xx/apache-doris-1.xx-src.tar.gz"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("原始位置:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("https://www.apache.org/dist/doris/1.xx/\n\nhttp://www.apache.org/dyn/closer.cgi/doris/1.xx/apache-doris-1.xx-src.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("源码包：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://www.apache.org/dyn/closer.cgi/doris/1.xx/apache-doris-1.xx-src.tar.gz\n\nASC:\nhttp://archive.apache.org/dist/doris/1.xx/apache-doris-1.xx-src.tar.gz.asc\n\nsha512:\nhttp://archive.apache.org/dist/doris/1.xx/apache-doris-1.xx-src.tar.gz.sha512\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("KEYS:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://archive.apache.org/dist/doris/KEYS\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("refer to: "),e("a",{attrs:{href:"http://www.apache.org/dev/release-download-pages#closer",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.apache.org/dev/release-download-pages#closer"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"maven"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven"}},[s._v("#")]),s._v(" Maven")]),s._v(" "),e("p",[s._v("在 "),e("a",{attrs:{href:"https://repository.apache.org/#stagingRepositories",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://repository.apache.org/#stagingRepositories"),e("OutboundLink")],1),s._v(" 中找到对应的 Staging Repo, 点击 "),e("code",[s._v("Release")]),s._v(" 进行正式发布。")]),s._v(" "),e("h3",{attrs:{id:"准备-release-note"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备-release-note"}},[s._v("#")]),s._v(" 准备 release note")]),s._v(" "),e("p",[s._v("需要修改如下两个地方：")]),s._v(" "),e("p",[s._v("1、Github 的 release 页面")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("https://github.com/apache/doris/releases/tag/0.9.0-rc01\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2、Doris 官网下载页面")]),s._v(" "),e("p",[s._v("下载页面是一个 markdown 文件，地址如下。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docs/zh-CN/downloads/downloads.md\ndocs/en/downloads/downloads.md\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",[e("li",[s._v("需要将上一次发布版本的下载包地址改为 apache 的归档地址（见后）。")]),s._v(" "),e("li",[s._v("增加新版本的下载信息。")])]),s._v(" "),e("h3",{attrs:{id:"svn-上清理旧版本的包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#svn-上清理旧版本的包"}},[s._v("#")]),s._v(" svn 上清理旧版本的包")]),s._v(" "),e("ol",[e("li",[s._v("svn 上删除旧版本的包")])]),s._v(" "),e("p",[s._v("由于 svn 只需要保存最新版本的包，所以当有新版本发布的时候，旧版本的包就应该从 svn 上清理。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("https://dist.apache.org/repos/dist/release/doris/\nhttps://dist.apache.org/repos/dist/dev/doris/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("保持这两个地址中，只有最新版本的包即可。")]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("将 Doris 官网的下载页面中，旧版本包的下载地址改为归档页面的地址")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("下载页面: http://doris.apache.org/downloads.html\n归档页面: http://archive.apache.org/dist/doris\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("Apache 会有同步机制去将历史的发布版本进行一个归档，具体操作见："),e("a",{attrs:{href:"https://www.apache.org/legal/release-policy.html#how-to-archive",target:"_blank",rel:"noopener noreferrer"}},[s._v("how to archive"),e("OutboundLink")],1),s._v("\n所以即使旧的包从 svn 上清除，还是可以在归档页面中找到。")]),s._v(" "),e("h2",{attrs:{id:"announce-邮件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#announce-邮件"}},[s._v("#")]),s._v(" Announce 邮件")]),s._v(" "),e("p",[s._v("Title:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[ANNOUNCE] Apache Doris 1.xx release\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("发送邮件组：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("dev@doris.apache.org\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("邮件正文：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Hi All,\n\nWe are pleased to announce the release of Apache Doris 1.xx.\n\nApache Doris is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe release is available at:\nhttp://doris.apache.org/master/zh-CN/downloads/downloads.html\n\nThanks to everyone who has contributed to this release, and the release note can be found here:\nhttps://github.com/apache/doris/releases\n\nBest Regards,\n\nOn behalf of the Doris team,\nxxx\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);