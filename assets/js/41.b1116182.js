(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{671:function(e,a,s){"use strict";s.r(a);var t=s(15),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"complete-release"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#complete-release"}},[e._v("#")]),e._v(" Complete release")]),e._v(" "),s("p",[e._v("The steps in this document follow after the release has been voted on and approved in the dev@doris.")]),e._v(" "),s("h2",{attrs:{id:"upload-package-to-release"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upload-package-to-release"}},[e._v("#")]),e._v(" Upload package to release")]),e._v(" "),s("p",[e._v("When the official release poll is successful, send the [Result] email first, then prepare the release package.\nCopy the source package, signature file and hash file from the corresponding folder of the previous release under dev to another directory 1.xx, note that the file name should not be rcxx (you can rename, but do not recalculate the signature, the hash can be recalculated, the result will not change)")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('From:\nhttps://dist.apache.org/repos/dist/dev/doris/\n\nTo:\nhttps://dist.apache.org/repos/dist/release/doris/\n\nEg:\nsvn mv -m "move doris 1.1.0-rc05 to release" https://dist.apache.org/repos/dist/dev/doris/1.1 https://dist.apache.org/repos/dist/release/doris/1.1\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("For the first release, you need to copy the KEYS file as well. Then add it to the svn release.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("add 成功后就可以在下面网址上看到你发布的文件\nhttps://dist.apache.org/repos/dist/release/doris/1.xx/\n\n稍等一段时间后，能在 apache 官网看到：\nhttp://www.apache.org/dist/doris/1.xx/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h2",{attrs:{id:"post-links-on-doris-official-website-and-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-links-on-doris-official-website-and-github"}},[e._v("#")]),e._v(" Post links on Doris official website and github")]),e._v(" "),s("p",[e._v("We will use Doris Core as an example. For other components, replace the name with the corresponding one.")]),e._v(" "),s("h3",{attrs:{id:"create-a-download-link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-download-link"}},[e._v("#")]),e._v(" Create a download link")]),e._v(" "),s("p",[e._v("Download Link:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('http://www.apache.org/dyn/closer.cgi?filename=doris/1.xx/apache-doris-1.xx-src.tar.gz&action=download\n\nwget --trust-server-names "https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=doris/1.xx/apache-doris-1.xx-src.tar.gz"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("Original Location:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://www.apache.org/dist/doris/1.xx/\n\nhttp://www.apache.org/dyn/closer.cgi/doris/1.xx/apache-doris-1.xx-src.tar.gz\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("Ssource package:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("http://www.apache.org/dyn/closer.cgi/doris/1.xx/apache-doris-1.xx-src.tar.gz\n\nASC:\nhttp://archive.apache.org/dist/doris/1.xx/apache-doris-1.xx-src.tar.gz.asc\n\nsha512:\nhttp://archive.apache.org/dist/doris/1.xx/apache-doris-1.xx-src.tar.gz.sha512\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("KEYS:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("http://archive.apache.org/dist/doris/KEYS\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("refer to: "),s("a",{attrs:{href:"http://www.apache.org/dev/release-download-pages#closer",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.apache.org/dev/release-download-pages#closer"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"maven"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven"}},[e._v("#")]),e._v(" Maven")]),e._v(" "),s("p",[e._v("Find staging repo on "),s("a",{attrs:{href:"https://repository.apache.org/#stagingRepositories",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://repository.apache.org/#stagingRepositories"),s("OutboundLink")],1),e._v(" and click "),s("code",[e._v("Release")]),e._v(" to release.")]),e._v(" "),s("h3",{attrs:{id:"prepare-the-release-note"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-release-note"}},[e._v("#")]),e._v(" Prepare the release note")]),e._v(" "),s("p",[e._v("The following two places need to be modified.")]),e._v(" "),s("ol",[s("li",[e._v("Github's release page")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://github.com/apache/doris/releases/tag/0.9.0-rc01\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("2、Doris official website download page")]),e._v(" "),s("p",[e._v("The download page is a markdown file with the following address.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docs/zh-cn/downloads/downloads.md\ndocs/en/downloads/downloads.md\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ol",[s("li",[e._v("you need to change the download package address of the last release to the archive address of apache (see later).")]),e._v(" "),s("li",[e._v("Add the download information for the new version.")])]),e._v(" "),s("h3",{attrs:{id:"clean-up-old-versions-of-packages-on-svn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clean-up-old-versions-of-packages-on-svn"}},[e._v("#")]),e._v(" Clean up old versions of packages on svn")]),e._v(" "),s("ol",[s("li",[e._v("Deleting old packages on svn")])]),e._v(" "),s("p",[e._v("Since svn only needs to keep the latest version of packages, old versions of packages should be cleaned from svn when a new version is released.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://dist.apache.org/repos/dist/release/doris/\nhttps://dist.apache.org/repos/dist/dev/doris/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Keep these two addresses with only the latest package versions. 2.")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Change the download address of the older packages on the official Doris website to the address of the archive page")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Download page: http://doris.apache.org/downloads.html\nArchive page: http://archive.apache.org/dist/doris\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Apache has a synchronization mechanism to archive the history of releases, see "),s("a",{attrs:{href:"https://www.apache.org/legal/release-policy.html#how-to-archive",target:"_blank",rel:"noopener noreferrer"}},[e._v("how to archive"),s("OutboundLink")],1),e._v("\nSo even if an old package is removed from svn, it can still be found on the archive page.")]),e._v(" "),s("h2",{attrs:{id:"announce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#announce"}},[e._v("#")]),e._v(" Announce")]),e._v(" "),s("p",[e._v("Title:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[ANNOUNCE] Apache Doris 1.xx release\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("To mail：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("dev@doris.apache.org\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Email body:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Hi All,\n\nWe are pleased to announce the release of Apache Doris 1.xx.\n\nApache Doris is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe release is available at:\nhttp://doris.apache.org/master/zh-CN/downloads/downloads.html\n\nThanks to everyone who has contributed to this release, and the release note can be found here:\nhttps://github.com/apache/doris/releases\n\nBest Regards,\n\nOn behalf of the Doris team,\nxxx\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);