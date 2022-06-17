(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{649:function(e,a,t){"use strict";t.r(a);var s=t(43),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"apache-doris-发布流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-doris-发布流程"}},[e._v("#")]),e._v(" Apache Doris 发布流程")]),e._v(" "),t("p",[e._v("Apache 的发布必须至少是 IPMC 成员，拥有 apache 邮箱的commiter，这个角色叫做 release manager。")]),e._v(" "),t("p",[e._v("发布的大致流程如下：")]),e._v(" "),t("ol",[t("li",[e._v("在社区发起 DISCUSS;")]),e._v(" "),t("li",[e._v("准备分支和打 tag;")]),e._v(" "),t("li",[e._v("将 tag 打包签名；")]),e._v(" "),t("li",[e._v("上传签名的软件包到 Apache SVN 的 DEV 目录")]),e._v(" "),t("li",[e._v("发社区投票邮件")]),e._v(" "),t("li",[e._v("投票通过后，发 Result 邮件")]),e._v(" "),t("li",[e._v("发邮件到 general@incubator.apache.org 进行投票")]),e._v(" "),t("li",[e._v("发 Result 邮件到 general@incubator.apache.org")]),e._v(" "),t("li",[e._v("上传签名的软件包到 Apache SVN 的 release 目录，并生成相关链接")]),e._v(" "),t("li",[e._v("准备 release note 并发 Announce 邮件到 general@incubator.apache.org")]),e._v(" "),t("li",[e._v("在 Doris 官网和 github 发布下载链接")])]),e._v(" "),t("p",[e._v("Release manager 在发布前需要先生成自己的签名公钥，并上传到公钥服务器，之后就可以用这个公钥对准备发布的软件包进行签名。")]),e._v(" "),t("h2",{attrs:{id:"_1-准备发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备发布"}},[e._v("#")]),e._v(" 1. 准备发布")]),e._v(" "),t("h3",{attrs:{id:"_1-1-在社区发起-discuss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-在社区发起-discuss"}},[e._v("#")]),e._v(" 1.1 在社区发起 DISCUSS")]),e._v(" "),t("p",[e._v("如果觉得已经修复了很多bug，开发了比较重要的 feature，任何 IPMC 成员都可以发起 DISCUSS 讨论发布新版本。\n可以发起一个标题为 [DISCUSS] x.y.z release 的邮件，在社区内部进行讨论，说明已经修复了哪些bug，开发了哪些 features。\n如果 DISCUSS 邮件得到大家支持就可以进行下一步。")]),e._v(" "),t("h3",{attrs:{id:"_1-2-准备分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-准备分支"}},[e._v("#")]),e._v(" 1.2 准备分支")]),e._v(" "),t("p",[e._v("发布前需要先新建一个分支，这个分支要进行比较充分的测试，使得功能可用，bug收敛，重要bug都得到修复。")]),e._v(" "),t("p",[e._v("例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout -b branch-0.9\n\n")])])]),t("h3",{attrs:{id:"_1-3-打-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-打-tag"}},[e._v("#")]),e._v(" 1.3 打 tag")]),e._v(" "),t("p",[e._v("当上述分支已经比较稳定后，就可以在此分支上打 tag。\n记得在创建 tag 时，修改 "),t("code",[e._v("gensrc/script/gen_build_version.sh")]),e._v(" 中的 "),t("code",[e._v("build_version")]),e._v(" 变量。如 "),t("code",[e._v('build_version="0.10.0-release"')])]),e._v(" "),t("p",[e._v("例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ git checkout branch-0.9\n$ git tag -a 0.9.0-rc01 -m "0.9.0 release candidate 01"\n$ git push origin 0.9.0-rc01\nCounting objects: 1, done.\nWriting objects: 100% (1/1), 165 bytes | 0 bytes/s, done.\nTotal 1 (delta 0), reused 0 (delta 0)\nTo git@github.com:apache/incubator-doris.git\n * [new tag]         0.9.0-rc01 -> 0.9.0-rc01\n\n$ git tag\n')])])]),t("h2",{attrs:{id:"_2-签名软件-gnupg-的安装配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-签名软件-gnupg-的安装配置"}},[e._v("#")]),e._v(" 2. 签名软件 GnuPG 的安装配置")]),e._v(" "),t("h3",{attrs:{id:"_2-1-gnupg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-gnupg"}},[e._v("#")]),e._v(" 2.1 GnuPG")]),e._v(" "),t("p",[e._v("1991年，程序员Phil Zimmermann为了避开政府监视，开发了加密软件PGP。这个软件非常好用，迅速流传开来，成了许多程序员的必备工具。但是，它是商业软件，不能自由使用。所以，自由软件基金会决定，开发一个PGP的替代品，取名为GnuPG。这就是GPG的由来。")]),e._v(" "),t("h3",{attrs:{id:"_2-2-安装配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-安装配置"}},[e._v("#")]),e._v(" 2.2 安装配置")]),e._v(" "),t("p",[e._v("CentOS 安装命令：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("yum install gnupg\n")])])]),t("p",[e._v("安装完成后，默认配置文件 gpg.conf 会放在 home 目录下。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("~/.gnupg/gpg.conf\n")])])]),t("p",[e._v("如果不存在这个目录或文件，可以直接创建一个空文件。\n编辑gpg.conf, 修改或者增加 keyserver 配置：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("keyserver hkp://keys.gnupg.net\n")])])]),t("p",[e._v("Apache 签名推荐 SHA512， 可以通过配置 gpg 完成。\n编辑gpg.conf, 增加下面的三行：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("personal-digest-preferences SHA512\ncert-digest-algo SHA512\ndefault-preference-list SHA512 SHA384 SHA256 SHA224 AES256 AES192 AES CAST5 ZLIB BZIP2 ZIP Uncompressed\n")])])]),t("h2",{attrs:{id:"_3-生成新的签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-生成新的签名"}},[e._v("#")]),e._v(" 3. 生成新的签名")]),e._v(" "),t("h3",{attrs:{id:"_3-1-准备签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-准备签名"}},[e._v("#")]),e._v(" 3.1 准备签名")]),e._v(" "),t("p",[e._v("推荐的生成新签名的设置：")]),e._v(" "),t("p",[e._v("这里必须通过 SecureCRT 等终端直接登录用户账户，不能通过 su - user 或者 ssh 转，否则密码输入 box 会显示不出来而报错。")]),e._v(" "),t("p",[e._v("先看下 gpg 的 version 以及是否支持 SHA512.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --version\ngpg (GnuPG) 2.0.22\nlibgcrypt 1.5.3\nCopyright (C) 2013 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nHome: ~/.gnupg\nSupported algorithms:\nPubkey: RSA, ?, ?, ELG, DSA\nCipher: IDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256, TWOFISH,\n        CAMELLIA128, CAMELLIA192, CAMELLIA256\nHash: MD5, SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224\nCompression: Uncompressed, ZIP, ZLIB, BZIP2\n")])])]),t("h3",{attrs:{id:"_3-2-生成新的签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-生成新的签名"}},[e._v("#")]),e._v(" 3.2 生成新的签名")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --gen-key\ngpg (GnuPG) 2.0.22; Copyright (C) 2013 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: xxx\nName must be at least 5 characters long\nReal name: xxx-yyy\nEmail address: xxx@apache.org\nComment: xxx's key\nYou selected this USER-ID:\n    \"xxx-yyy (xxx's key) <xxx@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? o\n")])])]),t("p",[e._v("其中 Real name 需保持和 id.apache.org 中显示的 id 一致。\nEmail address 为 apache 的邮箱。")]),e._v(" "),t("h3",{attrs:{id:"_3-3-查看和输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-查看和输出"}},[e._v("#")]),e._v(" 3.3 查看和输出")]),e._v(" "),t("p",[e._v('第一行显示公钥文件名（pubring.gpg），第二行显示公钥特征（4096位，Hash字符串和生成时间），第三行显示"用户ID"，第四行显示私钥特征。')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --list-keys\n/home/lide/.gnupg/pubring.gpg\n-----------------------------\npub   4096R/33DBF2E0 2018-12-06\nuid                  xxx-yyy  (xxx's key) <xxx@apache.org>\nsub   4096R/0E8182E6 2018-12-06\n")])])]),t("p",[e._v("其中 xxx-yyy 就是用户ID。")]),e._v(" "),t("p",[e._v("gpg --armor --output public-key.txt --export [用户ID]")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --armor --output public-key.txt --export xxx-yyy\n$ cat public-key.txt\n-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v2.0.22 (GNU/Linux)\n\nmQINBFwJEQ0BEACwqLluHfjBqD/RWZ4uoYxNYHlIzZvbvxAlwS2mn53BirLIU/G3\n9opMWNplvmK+3+gNlRlFpiZ7EvHsF/YJOAP59HmI2Z...\n")])])]),t("h2",{attrs:{id:"_4-上传签名公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-上传签名公钥"}},[e._v("#")]),e._v(" 4. 上传签名公钥")]),e._v(" "),t("p",[e._v("公钥服务器是网络上专门储存用户公钥的服务器。send-keys 参数可以将公钥上传到服务器。")]),e._v(" "),t("p",[e._v("gpg --send-keys xxxx")]),e._v(" "),t("p",[e._v("其中 xxxx 为上一步 --list-keys 结果中 pub 后面的字符串，如上为：33DBF2E0")]),e._v(" "),t("p",[e._v("也可以通过下面的网址上传上述 public-key.txt 的内容：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://keys.gnupg.net\n")])])]),t("p",[e._v("上传成功之后，可以通过查询这个网站，输入 0x33DBF2E0 查询：")]),e._v(" "),t("p",[e._v("http://keys.gnupg.net")]),e._v(" "),t("p",[e._v("该网站查询有延迟，可能需要等1个小时。")]),e._v(" "),t("h2",{attrs:{id:"_5-生成-fingerprint-并上传到-apache-用户信息中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-生成-fingerprint-并上传到-apache-用户信息中"}},[e._v("#")]),e._v(" 5. 生成 fingerprint 并上传到 apache 用户信息中")]),e._v(" "),t("p",[e._v("由于公钥服务器没有检查机制，任何人都可以用你的名义上传公钥，所以没有办法保证服务器上的公钥的可靠性。通常，你可以在网站上公布一个公钥指纹，让其他人核对下载到的公钥是否为真。")]),e._v(" "),t("p",[e._v("fingerprint参数生成公钥指纹：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpg --fingerprint [用户ID]\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --fingerprint xxx-yyy\npub   4096R/33DBF2E0 2018-12-06\n      Key fingerprint = 07AA E690 B01D 1A4B 469B  0BEF 5E29 CE39 33DB F2E0\nuid                  xxx-yyy (xxx's key) <xxx@apache.org>\nsub   4096R/0E8182E6 2018-12-06\n")])])]),t("p",[e._v("将上面的 fingerprint （即 07AA E690 B01D 1A4B 469B  0BEF 5E29 CE39 33DB F2E0）粘贴到自己的用户信息中：")]),e._v(" "),t("p",[e._v("https://id.apache.org\nOpenPGP Public Key Primary Fingerprint:")]),e._v(" "),t("h2",{attrs:{id:"_6-生成-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-生成-keys"}},[e._v("#")]),e._v(" 6. 生成 keys")]),e._v(" "),t("p",[e._v("新建一个名为 KEYS 的文件，写入如下内容（无需做任何修改）：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("This file contains the PGP keys of various developers.\n\nUsers: pgp < KEYS\nor\n       gpg --import KEYS\n\nDevelopers:\n    pgp -kxa <your name> and append it to this file.\nor\n    (pgpk -ll <your name> && pgpk -xa <your name>) >> this file.\nor\n    (gpg --list-sigs <your name>\n    && gpg --armor --export <your name>) >> this file.\n")])])]),t("p",[e._v("然后生成将 签名信息追加写入：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpg --list-sigs [用户 ID] >> KEYS\n")])])]),t("p",[e._v("最后，将 public key 追加导入：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpg --armor --export [用户 ID] >> KEYS\n")])])]),t("h2",{attrs:{id:"_7-打包签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-打包签名"}},[e._v("#")]),e._v(" 7. 打包签名")]),e._v(" "),t("p",[e._v("如下步骤，也需要通过 SecureCRT 等终端直接登录用户账户，不能通过 su - user 或者 ssh 转，否则密码输入 box 会显示不出来而报错。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout 0.9.0-rc01\n\n$ git archive --format=tar 0.9.0-rc01 --prefix=apache-doris-0.9.0-incubating-src/ | gzip > apache-doris-0.9.0-incubating-src.tar.gz\n\n$ gpg -u xxx@apache.org --armor --output apache-doris-0.9.0-incubating-src.tar.gz.asc --detach-sign apache-doris-0.9.0-incubating-src.tar.gz\n\n$ gpg --verify apache-doris-0.9.0-incubating-src.tar.gz.asc apache-doris-0.9.0-incubating-src.tar.gz\n\n$ sha512sum apache-doris-0.9.0-incubating-src.tar.gz > apache-doris-0.9.0-incubating-src.tar.gz.sha512\n\n$ sha512sum --check apache-doris-0.9.0-incubating-src.tar.gz.sha512\n")])])]),t("h2",{attrs:{id:"_8-上传签名的软件包和-keys-文件到-dev-svn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-上传签名的软件包和-keys-文件到-dev-svn"}},[e._v("#")]),e._v(" 8. 上传签名的软件包和 KEYS 文件到 DEV svn")]),e._v(" "),t("p",[e._v("首先，下载 svn 库：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("svn co https://dist.apache.org/repos/dist/dev/incubator/doris/\n")])])]),t("p",[e._v("将之前得到的全部文件组织成以下svn路径")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./doris/\n├── 0.9\n│   └── 0.9.0-rc1\n│       ├── apache-doris-0.9.0-incubating-src.tar.gz\n│       ├── apache-doris-0.9.0-incubating-src.tar.gz.asc\n│       ├── apache-doris-0.9.0-incubating-src.tar.gz.sha512\n│       └── KEYS\n")])])]),t("p",[e._v("上传这些文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('svn add 0.9.0-rc1\nsvn commit -m "Release Apache Doris (incubating) 0.9.0 rc1"\n')])])]),t("h2",{attrs:{id:"_9-发社区投票邮件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-发社区投票邮件"}},[e._v("#")]),e._v(" 9. 发社区投票邮件")]),e._v(" "),t("p",[e._v("[VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hi all,\n\nPlease review and vote on Apache Doris 0.9.0-incubating-rc01 release.\n\nThe release candidate has been tagged in GitHub as 0.9.0-rc01, available\nhere:\nhttps://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n\n===== CHANGE LOG =====\n\nNew Features:\n....\n\n======================\n\nThanks to everyone who has contributed to this release.\n\nThe artifacts (source, signature and checksum) corresponding to this release\ncandidate can be found here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc1/\n\nThis has been signed with PGP key 33DBF2E0, corresponding to\nlide@apache.org.\nKEYS file is available here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/KEYS\nIt is also listed here:\nhttps://people.apache.org/keys/committer/lide.asc\n\nTo verify and build, you can refer to following wiki:\nhttps://github.com/apache/incubator-doris/wiki/How-to-verify-Apache-Release\nhttps://wiki.apache.org/incubator/IncubatorReleaseChecklist\n\nThe vote will be open for at least 72 hours.\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because ...\n\nBest Regards,\nxxx\n")])])]),t("h2",{attrs:{id:"_10-投票通过后，发-result-邮件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-投票通过后，发-result-邮件"}},[e._v("#")]),e._v(" 10. 投票通过后，发 Result 邮件")]),e._v(" "),t("p",[e._v("[Result][VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Thanks to everyone, and this vote is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\n+1 Zhao Chun\n+1 xxx\n+1 Li Chaoyong\n+1 Mingyu Chen\n\nBest Regards,\nxxx\n\n")])])]),t("h2",{attrs:{id:"_11-发邮件到-general-incubator-apache-org-进行投票"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-发邮件到-general-incubator-apache-org-进行投票"}},[e._v("#")]),e._v(" 11. 发邮件到 general@incubator.apache.org 进行投票")]),e._v(" "),t("p",[e._v("[VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hi all,\n\nPlease review and vote on Apache Doris 0.9.0-incubating-rc01 release.\n\nApache Doris is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe Apache Doris community has voted on and approved this release:\nhttps://lists.apache.org/thread.html/d70f7c8a8ae448bf6680a15914646005c6483564464cfa15f4ddc2fc@%3Cdev.doris.apache.org%3E\n\nThe vote result email thread:\nhttps://lists.apache.org/thread.html/64d229f0ba15d66adc83306bc8d7b7ccd5910ecb7e842718ce6a61da@%3Cdev.doris.apache.org%3E\n\nThe release candidate has been tagged in GitHub as 0.9.0-rc01, available here:\nhttps://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n\nThere is no CHANGE LOG file because this is the first release of Apache Doris.\nThanks to everyone who has contributed to this release, and there is a simple release notes can be found here:\nhttps://github.com/apache/incubator-doris/issues/406\n\nThe artifacts (source, signature and checksum) corresponding to this release candidate can be found here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc01/\n\nThis has been signed with PGP key 33DBF2E0, corresponding to lide@apache.org.\nKEYS file is available here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/KEYS\nIt is also listed here:\nhttps://people.apache.org/keys/committer/lide.asc\n\nThe vote will be open for at least 72 hours.\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because ...\n\nTo verify and build, you can refer to following instruction:\n\nFirstly, you must be install and start docker service, and then you could build Doris as following steps:\n\nStep1: Pull the docker image with Doris building environment\n$ docker pull apachedoris/doris-dev:build-env\nYou can check it by listing images, its size is about 3.28GB.\n\nStep2: Run the Docker image\nYou can run image directly:\n$ docker run -it apachedoris/doris-dev:build-env\n\nStep3: Download Doris source\nNow you should in docker environment, and you can download Doris source package.\n(If you have downloaded source and it is not in image, you can map its path to image in Step2.)\n$ wget https://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc01/apache-doris-0.9.0.rc01-incubating-src.tar.gz\n\nStep4: Build Doris\nNow you can decompress and enter Doris source path and build Doris.\n$ tar zxvf apache-doris-0.9.0.rc01-incubating-src.tar.gz\n$ cd apache-doris-0.9.0.rc01-incubating-src\n$ sh build.sh\n\nBest Regards,\nxxx\n")])])]),t("p",[e._v("邮件的 thread 连接可以在这里找到：")]),e._v(" "),t("p",[t("code",[e._v("https://lists.apache.org/list.html?dev@doris.apache.org")])]),e._v(" "),t("h2",{attrs:{id:"_12-发-result-邮件到-general-incubator-apache-org"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-发-result-邮件到-general-incubator-apache-org"}},[e._v("#")]),e._v(" 12. 发 Result 邮件到 general@incubator.apache.org")]),e._v(" "),t("p",[e._v("[RESULT][VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hi,\n\nThanks to everyone, and the vote for releasing Apache Doris 0.9.0-incubating-rc01 is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\n+1 Willem Jiang\n+1 Justin Mclean\n+1 ShaoFeng Shi\n+1 Makoto Yui\n\nThe vote thread:\nhttps://lists.apache.org/thread.html/da05fdd8d84e35de527f27200b5690d7811a1e97d419d1ea66562130@%3Cgeneral.incubator.apache.org%3E\n\nBest Regards,\nxxx\n")])])]),t("h2",{attrs:{id:"_13-上传-package-到-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-上传-package-到-release"}},[e._v("#")]),e._v(" 13. 上传 package 到 release")]),e._v(" "),t("p",[e._v("当正式发布投票成功后，先发[Result]邮件，然后就准备 release package。\n将之前在dev下发布的对应rc文件夹下的源码包、签名文件和hash文件拷贝到另一个目录 0.9.0-incubating，注意文件名字中不要rcxx (可以rename，但不要重新计算签名，hash可以重新计算，结果不会变)")]),e._v(" "),t("p",[e._v("第一次发布的话 KEYS 文件也需要拷贝过来。然后add到svn release 下。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nhttps://dist.apache.org/repos/dist/release/incubator/doris/0.9.0-incubating/\n\n最终能在 apache 官网看到：\nhttp://www.apache.org/dist/incubator/doris/0.9.0-incubating/\n\n")])])]),t("h2",{attrs:{id:"_14-发-announce-邮件到-general-incubator-apache-org"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-发-announce-邮件到-general-incubator-apache-org"}},[e._v("#")]),e._v(" 14. 发 Announce 邮件到 general@incubator.apache.org")]),e._v(" "),t("p",[e._v("Title:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[ANNOUNCE] Apache Doris (incubating) 0.9.0 Release\n")])])]),t("p",[e._v("发送邮件组：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("general@incubator.apache.org <general@incubator.apache.org>\ndev@doris.apache.org <dev@doris.apache.org>\n")])])]),t("p",[e._v("邮件正文：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hi All,\n\nWe are pleased to announce the release of Apache Doris 0.9.0-incubating.\n\nApache Doris (incubating) is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe release is available at:\nhttp://doris.apache.org/downloads.html\n\nThanks to everyone who has contributed to this release, and the release note can be found here:\nhttps://github.com/apache/incubator-doris/releases\n\nBest Regards,\n\nOn behalf of the Doris team,\nxxx\n")])])]),t("h2",{attrs:{id:"_15-在-doris-官网和-github-发布链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-在-doris-官网和-github-发布链接"}},[e._v("#")]),e._v(" 15. 在 Doris 官网和 github 发布链接")]),e._v(" "),t("h3",{attrs:{id:"_15-1-创建下载链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-1-创建下载链接"}},[e._v("#")]),e._v(" 15.1 创建下载链接")]),e._v(" "),t("p",[e._v("下载链接：\nhttp://www.apache.org/dyn/closer.cgi?filename=incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz&action=download")]),e._v(" "),t("p",[e._v('wget --trust-server-names "https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz"')]),e._v(" "),t("p",[e._v("原始位置:\nhttps://www.apache.org/dist/incubator/doris/0.9.0-incubating/")]),e._v(" "),t("p",[e._v("http://www.apache.org/dyn/closer.cgi/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz")]),e._v(" "),t("p",[e._v("源码包（source package）:\nhttp://www.apache.org/dyn/closer.cgi/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz")]),e._v(" "),t("p",[e._v("ASC:\nhttp://archive.apache.org/dist/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz.asc")]),e._v(" "),t("p",[e._v("sha512:\nhttp://archive.apache.org/dist/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz.sha512")]),e._v(" "),t("p",[e._v("KEYS:\nhttp://archive.apache.org/dist/incubator/doris/KEYS")]),e._v(" "),t("p",[e._v("refer to: "),t("a",{attrs:{href:"http://www.apache.org/dev/release-download-pages#closer",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.apache.org/dev/release-download-pages#closer"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_15-2-准备-release-note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-2-准备-release-note"}},[e._v("#")]),e._v(" 15.2 准备 release note")]),e._v(" "),t("p",[e._v("需要修改如下两个地方：")]),e._v(" "),t("p",[e._v("1、Github 的 release 页面")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n")])])]),t("p",[e._v("2、Doris 官网下载页面")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://doris.apache.org/downloads.html\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);