(window.webpackJsonp=window.webpackJsonp||[]).push([[581],{1208:function(s,t,e){"use strict";e.r(t);var a=e(15),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"show-property"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-property"}},[s._v("#")]),s._v(" SHOW-PROPERTY")]),s._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("p",[s._v("This statement is used to view the attributes of the user")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SHOW PROPERTY [FOR user] [LIKE key];\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[e("p",[e("code",[s._v("user")])]),s._v(" "),e("p",[s._v("View the attributes of the specified user. If not specified, check the current user's.")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("LIKE")])]),s._v(" "),e("p",[s._v("Fuzzy matching can be done by attribute name.")])])]),s._v(" "),e("p",[s._v("Return result description:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" property "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%connection%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------------+-------+")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Key")]),s._v("                  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Value")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------------+-------+")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" max_user_connections "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------------+-------+")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ul",[e("li",[e("p",[e("code",[s._v("Key")])]),s._v(" "),e("p",[s._v("Property name.")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("Value")])]),s._v(" "),e("p",[s._v("Attribute value.")])])]),s._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("View the attributes of the jack user")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" PROPERTY "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("View the attribute of jack user connection limit")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" PROPERTY "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%connection%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("SHOW, PROPERTY\n")])])]),e("h3",{attrs:{id:"best-practice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);t.default=r.exports}}]);