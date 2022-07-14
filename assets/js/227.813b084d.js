(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{853:function(e,t,s){"use strict";s.r(t);var a=s(15),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"user-defined-function-rpc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-defined-function-rpc"}},[e._v("#")]),e._v(" User Defined Function Rpc")]),e._v(" "),s("p",[e._v("Remote UDF Service The Remote UDF Service can be accessed through RPC to implement the execution of user-defined functions. Compared with Native UDF implementations, Remote UDF Service has the following advantages and limitations:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("The advantage")]),e._v(" "),s("ul",[s("li",[e._v("Cross-language: UDF services can be written in all languages supported by Protobuf.")]),e._v(" "),s("li",[e._v("Security: UDF execution failure or crash only affects the UDF Service and does not cause the Doris process to crash.")]),e._v(" "),s("li",[e._v("Flexibility: Any other Service or library class can be invoked within a UDF Service to meet a wider variety of business requirements.")])])]),e._v(" "),s("li",[s("p",[e._v("Restrictions on use")]),e._v(" "),s("ul",[s("li",[e._v("Performance: Compared to Native UDFs, UDF services incur extra network overhead and thus have much lower performance than Native UDFs. At the same time, the implementation of the UDF Service also affects the execution efficiency of the function. Users need to deal with problems such as high concurrency and thread safety by themselves.")]),e._v(" "),s("li",[e._v("Single line mode and batch mode: Doris's original query execution framework based on row memory would execute one UDF RPC call for each row of data, so the execution efficiency was very poor. However, under the new vectorization execution framework, one UDF RPC call would be executed for each batch of data (2048 rows by default), so the performance was significantly improved. In actual tests, the performance of Remote UDF based on vectorization and batch processing is similar to that of Native UDF based on rowmemory, which can be used for reference.")])])])]),e._v(" "),s("h2",{attrs:{id:"write-udf-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-udf-functions"}},[e._v("#")]),e._v(" Write UDF functions")]),e._v(" "),s("p",[e._v("This section describes how to develop a Remote RPC Service. Samples for the Java version are provided under "),s("code",[e._v("samples/doris-demo/udf-demo/")]),e._v(" for your reference.")]),e._v(" "),s("h3",{attrs:{id:"copy-the-proto-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-the-proto-file"}},[e._v("#")]),e._v(" Copy the proto file")]),e._v(" "),s("p",[e._v("Copy gensrc/proto/function_service.proto and gensrc/proto/types.proto to Rpc service")]),e._v(" "),s("ul",[s("li",[e._v("function_service.proto\n"),s("ul",[s("li",[e._v("PFunctionCallRequest\n"),s("ul",[s("li",[e._v("function_name：The function name, corresponding to the symbol specified when the function was created")]),e._v(" "),s("li",[e._v("args：The parameters passed by the method")]),e._v(" "),s("li",[e._v("context：Querying context Information")])])]),e._v(" "),s("li",[e._v("PFunctionCallResponse\n"),s("ul",[s("li",[e._v("result：Return result")]),e._v(" "),s("li",[e._v("status：Return Status, 0 indicates normal")])])]),e._v(" "),s("li",[e._v("PCheckFunctionRequest\n"),s("ul",[s("li",[e._v("function：Function related information")]),e._v(" "),s("li",[e._v("match_type：Matching type")])])]),e._v(" "),s("li",[e._v("PCheckFunctionResponse\n"),s("ul",[s("li",[e._v("status：Return status, 0 indicates normal")])])])])])]),e._v(" "),s("h3",{attrs:{id:"generated-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generated-interface"}},[e._v("#")]),e._v(" Generated interface")]),e._v(" "),s("p",[e._v("Use protoc generate code, and specific parameters are viewed using protoc -h")]),e._v(" "),s("h3",{attrs:{id:"implementing-an-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementing-an-interface"}},[e._v("#")]),e._v(" Implementing an interface")]),e._v(" "),s("p",[e._v("The following three methods need to be implemented")]),e._v(" "),s("ul",[s("li",[e._v("fnCall：Used to write computational logic")]),e._v(" "),s("li",[e._v("checkFn：Used to verify function names, parameters, and return values when creating UDFs")]),e._v(" "),s("li",[e._v("handShake：Used for interface probe")])]),e._v(" "),s("h2",{attrs:{id:"create-udf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-udf"}},[e._v("#")]),e._v(" Create UDF")]),e._v(" "),s("p",[e._v("Currently, UDAF and UDTF are not supported")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FUNCTION")]),e._v(" \nname "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RETURNS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" rettype\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"value"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\t\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("Instructions:")]),e._v(" "),s("ol",[s("li",[e._v("PROPERTIES中"),s("code",[e._v("symbol")]),e._v("Represents the name of the method passed by the RPC call, which must be set。")]),e._v(" "),s("li",[e._v("PROPERTIES中"),s("code",[e._v("object_file")]),e._v("Represents the RPC service address. Currently, a single address and a cluster address in BRPC-compatible format are supported. Refer to the cluster connection mode"),s("a",{attrs:{href:"https://github.com/apache/incubator-brpc/blob/master/docs/cn/client.md#%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E9%9B%86%E7%BE%A4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Format specification"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("li",[e._v("PROPERTIES中"),s("code",[e._v("type")]),e._v("Indicates the UDF call type, which is Native by default. Rpc is transmitted when Rpc UDF is used。")]),e._v(" "),s("li",[e._v("name: A function belongs to a DB and name is of the form"),s("code",[e._v("dbName")]),e._v("."),s("code",[e._v("funcName")]),e._v(". When "),s("code",[e._v("dbName")]),e._v(" is not explicitly specified, the db of the current session is used"),s("code",[e._v("dbName")]),e._v("。")])]),e._v(" "),s("p",[e._v("Sample:")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FUNCTION")]),e._v(" rpc_add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RETURNS")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INT")]),e._v(" PROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"SYMBOL"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"add_int"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"OBJECT_FILE"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"127.0.0.1:9090"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"TYPE"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RPC"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h2",{attrs:{id:"use-udf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-udf"}},[e._v("#")]),e._v(" Use UDF")]),e._v(" "),s("p",[e._v("Users must have the "),s("code",[e._v("SELECT")]),e._v(" permission of the corresponding database to use UDF/UDAF.")]),e._v(" "),s("p",[e._v("The use of UDF is consistent with ordinary function methods. The only difference is that the scope of built-in functions is global, and the scope of UDF is internal to DB. When the link session is inside the data, directly using the UDF name will find the corresponding UDF inside the current DB. Otherwise, the user needs to display the specified UDF database name, such as "),s("code",[e._v("dbName")]),e._v("."),s("code",[e._v("funcName")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"delete-udf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-udf"}},[e._v("#")]),e._v(" Delete UDF")]),e._v(" "),s("p",[e._v("When you no longer need UDF functions, you can delete a UDF function by the following command, you can refer to "),s("code",[e._v("DROP FUNCTION")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),s("p",[e._v("Examples of rpc server implementations and cpp/java/python languages are provided in the "),s("code",[e._v("samples/doris-demo/")]),e._v(" directory. See the "),s("code",[e._v("README.md")]),e._v(" in each directory for details on how to use it.")])])}),[],!1,null,null,null);t.default=n.exports}}]);