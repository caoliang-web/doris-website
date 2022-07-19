(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{830:function(e,t,n){"use strict";n.r(t);var i=n(15),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v('<!-\nLicensed to the Apache Software Foundation (ASF) under one\nor more contributor license agreements. See the NOTICE file\ndistributed with this work for additional information\nregarding copyright ownership. The ASF licenses this file\nto you under the Apache License, Version 2.0 (the\n"License"); you may not use this file except in compliance\nwith the License. You may obtain a copy of the License at')]),e._v(" "),n("p",[e._v("http://www.apache.org/licenses/LICENSE-2.0")]),e._v(" "),n("p",[e._v('Unless required by applicable law or agreed to in writing,\nsoftware distributed under the License is distributed on an\n"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, either express or implied. See the License for the\nspecific language governing permissions and limitations\nunder the License.\n->')]),e._v(" "),n("h1",{attrs:{id:"audit-log-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#audit-log-plugin"}},[e._v("#")]),e._v(" Audit log plugin")]),e._v(" "),n("p",[e._v("Doris's audit log plugin was developed based on FE's plugin framework. Is an optional plugin. Users can install or uninstall this plugin at runtime.")]),e._v(" "),n("p",[e._v("This plugin can periodically import the FE audit log into the specified Doris cluster, so that users can easily view and analyze the audit log through SQL.")]),e._v(" "),n("h2",{attrs:{id:"compile-configure-and-deploy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compile-configure-and-deploy"}},[e._v("#")]),e._v(" Compile, Configure and Deploy")]),e._v(" "),n("h3",{attrs:{id:"fe-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fe-configuration"}},[e._v("#")]),e._v(" FE Configuration")]),e._v(" "),n("p",[e._v("FE's plugin framework is an experimental feature, which is closed by default. In the FE configuration file, add "),n("code",[e._v("plugin_enable = true")]),e._v(" to enable the plugin framework.")]),e._v(" "),n("h3",{attrs:{id:"auditloader-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#auditloader-configuration"}},[e._v("#")]),e._v(" AuditLoader Configuration")]),e._v(" "),n("p",[e._v("The configuration of the auditloader plugin is located in "),n("code",[e._v("$ {DORIS}/fe_plugins/auditloader/src/main/assembly/")]),e._v(".")]),e._v(" "),n("p",[e._v("Open "),n("code",[e._v("plugin.conf")]),e._v(" for configuration. See the comments of the configuration items.")]),e._v(" "),n("h3",{attrs:{id:"compile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[e._v("#")]),e._v(" Compile")]),e._v(" "),n("p",[e._v("After executing "),n("code",[e._v("sh build_plugin.sh")]),e._v(" in the Doris code directory, you will get the "),n("code",[e._v("auditloader.zip")]),e._v(" file in the "),n("code",[e._v("fe_plugins/output")]),e._v(" directory.")]),e._v(" "),n("h3",{attrs:{id:"deployment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),n("p",[e._v("You can place this file on an http download server or copy(or unzip) it to the specified directory of all FEs. Here we use the latter.")]),e._v(" "),n("h3",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),n("p",[e._v("After deployment is complete, and before installing the plugin, you need to create the audit database and tables previously specified in "),n("code",[e._v("plugin.conf")]),e._v(". The table creation statement is as follows:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('create table doris_audit_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    time datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    cpu_time_ms bigint comment "Total scan cpu time in millisecond of this query",\n    sql_hash varchar(50) comment "Hash value for this query",\n    sql_digest varchar(48) comment "Sql digest for this query",\n    peak_memory_bytes bigint comment "Peak memory bytes used on all backends of this query",\n    stmt string comment "The original statement, trimed if longer than 2G"\n) engine=OLAP\nduplicate key(query_id, time, client_ip)\npartition by range(time) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br")])]),n("blockquote",[n("p",[n("strong",[e._v("Notice")])]),e._v(" "),n("p",[e._v("In the above table structure: stmt string, this can only be used in 0.15 and later versions, in previous versions, the field type used varchar")])]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("dynamic_partition")]),e._v(" attribute selects the number of days to keep the audit log based on your needs.")]),e._v(" "),n("p",[e._v("After that, connect to Doris and use the "),n("code",[e._v("INSTALL PLUGIN")]),e._v(" command to complete the installation. After successful installation, you can see the installed plug-ins through "),n("code",[e._v("SHOW PLUGINS")]),e._v(", and the status is "),n("code",[e._v("INSTALLED")]),e._v(".")]),e._v(" "),n("p",[e._v("Upon completion, the plug-in will continuously import audit date into this table at specified intervals.")])])}),[],!1,null,null,null);t.default=a.exports}}]);