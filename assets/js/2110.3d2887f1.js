(window.webpackJsonp=window.webpackJsonp||[]).push([[2110],{2735:function(e,a,t){"use strict";t.r(a);var s=t(15),_=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-user"}},[e._v("#")]),e._v(" CREATE USER")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("p",[e._v("Syntax:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("CREATE USER user_identity [IDENTIFIED BY 'password'] [DEFAULT ROLE 'role_name']\n\nuser_identity:\n    'user_name'@'host'\n")])])]),t("p",[e._v("CREATE USER 命令用于创建一个 Doris 用户。在 Doris 中，一个 user_identity 唯一标识一个用户。user_identity 由两部分组成，user_name 和 host，其中 username 为用户名。host 标识用户端连接所在的主机地址。host 部分可以使用 % 进行模糊匹配。如果不指定 host，默认为 '%'，即表示该用户可以从任意 host 连接到 Doris。")]),e._v(" "),t("p",[e._v("host 部分也可指定为 domain，语法为：'user_name'@['domain']，即使用中括号包围，则 Doris 会认为这个是一个 domain，并尝试解析其 ip 地址。目前仅支持百度内部的 BNS 解析。")]),e._v(" "),t("p",[e._v("如果指定了角色（ROLE），则会自动将该角色所拥有的权限赋予新创建的这个用户。如果不指定，则该用户默认没有任何权限。指定的 ROLE 必须已经存在。")]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("创建一个无密码用户（不指定 host，则等价于 jack@'%'）")]),e._v(" "),t("p",[e._v("CREATE USER 'jack';")])]),e._v(" "),t("li",[t("p",[e._v("创建一个有密码用户，允许从 '172.10.1.10' 登陆")]),e._v(" "),t("p",[e._v("CREATE USER jack@'172.10.1.10' IDENTIFIED BY '123456';")])]),e._v(" "),t("li",[t("p",[e._v("为了避免传递明文，用例2也可以使用下面的方式来创建")]),e._v(" "),t("p",[e._v("CREATE USER jack@'172.10.1.10' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';")]),e._v(" "),t("p",[e._v("后面加密的内容可以通过PASSWORD()获得到,例如：")]),e._v(" "),t("p",[e._v("SELECT PASSWORD('123456');")])]),e._v(" "),t("li",[t("p",[e._v("创建一个允许从 '192.168' 子网登陆的用户，同时指定其角色为 example_role")]),e._v(" "),t("p",[e._v("CREATE USER 'jack'@'192.168.%' DEFAULT ROLE 'example_role';")])]),e._v(" "),t("li",[t("p",[e._v("创建一个允许从域名 'example_domain' 登陆的用户")]),e._v(" "),t("p",[e._v("CREATE USER 'jack'@['example_domain'] IDENTIFIED BY '12345';")])]),e._v(" "),t("li",[t("p",[e._v("创建一个用户，并指定一个角色")]),e._v(" "),t("p",[e._v("CREATE USER 'jack'@'%' IDENTIFIED BY '12345' DEFAULT ROLE 'my_role';")])])]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("CREATE, USER\n")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);