"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[16349],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return a?r.createElement(h,i(i({ref:t},s),{},{components:a})):r.createElement(h,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19082:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"DataX doriswriter",language:"en"},i=void 0,l={unversionedId:"ecosystem/datax",id:"ecosystem/datax",title:"DataX doriswriter",description:"\x3c!--",source:"@site/docs/ecosystem/datax.md",sourceDirName:"ecosystem",slug:"/ecosystem/datax",permalink:"/docs/ecosystem/datax",draft:!1,tags:[],version:"current",frontMatter:{title:"DataX doriswriter",language:"en"},sidebar:"docs",previous:{title:"Spark Doris Connector",permalink:"/docs/ecosystem/spark-doris-connector"},next:{title:"Logstash Doris Output Plugin",permalink:"/docs/ecosystem/logstash"}},d={},p=[{value:"About DataX",id:"about-datax",level:2},{value:"Usage",id:"usage",level:2},{value:"Directory structure",id:"directory-structure",level:3},{value:"How to build",id:"how-to-build",level:3},{value:"Example",id:"example",level:3},{value:"1. Stream reads the data and imports it to Doris",id:"1-stream-reads-the-data-and-imports-it-to-doris",level:4},{value:"2.Mysql reads the data and imports it to Doris",id:"2mysql-reads-the-data-and-imports-it-to-doris",level:4}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datax-doriswriter"},"DataX doriswriter"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/DataX"},"DataX")," doriswriter plug-in, used to synchronize data from other data sources to Doris through DataX."),(0,n.kt)("p",null,"The plug-in uses Doris' Stream Load function to synchronize and import data. It needs to be used with DataX service."),(0,n.kt)("h2",{id:"about-datax"},"About DataX"),(0,n.kt)("p",null,"DataX is an open source version of Alibaba Cloud DataWorks data integration, an offline data synchronization tool/platform widely used in Alibaba Group. DataX implements efficient data synchronization functions between various heterogeneous data sources including MySQL, Oracle, SqlServer, Postgre, HDFS, Hive, ADS, HBase, TableStore (OTS), MaxCompute (ODPS), Hologres, DRDS, etc."),(0,n.kt)("p",null,"More details can be found at: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/alibaba/DataX/")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The code of DataX doriswriter plug-in can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/extension/DataX"},"here"),"."),(0,n.kt)("p",null,"This directory is the doriswriter plug-in development environment of Alibaba DataX."),(0,n.kt)("p",null,"Because the doriswriter plug-in depends on some modules in the DataX code base, and these module dependencies are not submitted to the official Maven repository, when we develop the doriswriter plug-in, we need to download the complete DataX code base to facilitate our development and compilation of the doriswriter plug-in."),(0,n.kt)("h3",{id:"directory-structure"},"Directory structure"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter/")),(0,n.kt)("p",{parentName:"li"},"This directory is the code directory of doriswriter, and this part of the code should be in the Doris code base."),(0,n.kt)("p",{parentName:"li"},"The help doc can be found in ",(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter/doc"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"init-env.sh")),(0,n.kt)("p",{parentName:"li"},"The script mainly performs the following steps:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Git clone the DataX code base to the local")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Softlink the ",(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter/")," directory to ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/doriswriter"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add ",(0,n.kt)("inlineCode",{parentName:"p"},"<module>doriswriter</module>")," to the original ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/pom.xml"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change httpclient version from 4.5 to 4.5.13 in DataX/core/pom.xml"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"httpclient v4.5 can not handle redirect 307 correctly.")))),(0,n.kt)("p",{parentName:"li"},"After that, developers can enter ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/")," for development. And the changes in the ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/doriswriter")," directory will be reflected in the ",(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter/")," directory, which is convenient for developers to submit code."))),(0,n.kt)("h3",{id:"how-to-build"},"How to build"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"init-env.sh"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Modify code of doriswriter in ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/doriswriter")," if you need.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Build doriswriter"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Build doriswriter along:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"mvn clean install -pl plugin-rdbms-util,doriswriter -DskipTests"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Build DataX:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"mvn package assembly:assembly -Dmaven.test.skip=true")),(0,n.kt)("p",{parentName:"li"},"The output will be in ",(0,n.kt)("inlineCode",{parentName:"p"},"target/datax/datax/"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"hdfsreader, hdfswriter and oscarwriter needs some extra jar packages. If you don't need to use these components, you can comment out the corresponding module in DataX/pom.xml."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Compilation error"),(0,n.kt)("p",{parentName:"li"},"If you encounter the following compilation errors:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Could not find artifact com.alibaba.datax:datax-all:pom:0.0.1-SNAPSHOT ...\n")),(0,n.kt)("p",{parentName:"li"},"You can try the following solutions:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Download ",(0,n.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/alibaba-datax-maven-m2-20210928.tar.gz"},"alibaba-datax-maven-m2-20210928.tar.gz")),(0,n.kt)("li",{parentName:"ol"},"After decompression, copy the resulting ",(0,n.kt)("inlineCode",{parentName:"li"},"alibaba/datax/")," directory to ",(0,n.kt)("inlineCode",{parentName:"li"},".m2/repository/com/alibaba/")," corresponding to the maven used."),(0,n.kt)("li",{parentName:"ol"},"Try to compile again."))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Commit code of doriswriter in ",(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter")," if you need."))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("h4",{id:"1-stream-reads-the-data-and-imports-it-to-doris"},"1. Stream reads the data and imports it to Doris"),(0,n.kt)("p",null,"For instructions on using the doriswriter plug-in, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/blob/master/extension/DataX/doriswriter/doc/doriswriter.md"},"here"),"."),(0,n.kt)("h4",{id:"2mysql-reads-the-data-and-imports-it-to-doris"},"2.Mysql reads the data and imports it to Doris"),(0,n.kt)("p",null,"1.Mysql table structure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `t_test`(\n `id`bigint(30) NOT NULL,\n `order_code` varchar(30) DEFAULT NULL COMMENT '',\n `line_code` varchar(30) DEFAULT NULL COMMENT '',\n `remark` varchar(30) DEFAULT NULL COMMENT '',\n `unit_no` varchar(30) DEFAULT NULL COMMENT '',\n `unit_name` varchar(30) DEFAULT NULL COMMENT '',\n `price` decimal(12,2) DEFAULT NULL COMMENT '',\n PRIMARY KEY(`id`) USING BTREE\n)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='';\n")),(0,n.kt)("p",null,"2.Doris table structure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `ods_t_test` (\n `id`bigint(30) NOT NULL,\n `order_code` varchar(30) DEFAULT NULL COMMENT '',\n `line_code` varchar(30) DEFAULT NULL COMMENT '',\n `remark` varchar(30) DEFAULT NULL COMMENT '',\n `unit_no` varchar(30) DEFAULT NULL COMMENT '',\n `unit_name` varchar(30) DEFAULT NULL COMMENT '',\n `price` decimal(12,2) DEFAULT NULL COMMENT ''\n\uff09ENGINE=OLAP\nUNIQUE KEY(id`, `order_code`)\nDISTRIBUTED BY HASH(`order_code`) BUCKETS 1\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 3\",\n\"in_memory\" = \"false\",\n\"storage_format\" = \"V2\"\n);\n")),(0,n.kt)("p",null,"3.Create datax script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n    "job": {\n        "setting": {\n            "speed": {\n                "channel": 1\n            },\n            "errorLimit": {\n                "record": 0,\n                "percentage": 0\n            }\n        },\n        "content": [\n            {\n                "reader": {\n                    "name": "mysqlreader",\n                    "parameter": {\n                        "username": "xxx",\n                        "password": "xxx",\n                        "column": ["id","order_code","line_code","remark","unit_no","unit_name","price"],\n                        "connection": [ { "table": [ "t_test" ], "jdbcUrl": [ "jdbc:mysql://10.10.10.1:33306/demo" ] } ] }\n                },\n                "writer": {\n                    "name": "doriswriter",\n                    "parameter": {\n                        "feLoadUrl": ["127.0.0.1:8030","127.0.0.2:8030"],\n                        "beLoadUrl": ["127.0.0.3:8040","127.0.0.4:8040","127.0.0.5:8040"],\n                        "jdbcUrl": "jdbc:mysql://127.0.0.1:9030/",\n                        "database": "demo",\n                        "table": "ods_t_test",\n                        "column": ["id","order_code","line_code","remark","unit_no","unit_name","price"],\n                        "username": "xxx",\n                        "password": "xxx",\n                        "postSql": [],\n                        "preSql": [],\n                        "loadProps": {\n                        },\n                        "maxBatchRows" : 300000,\n                        "maxBatchByteSize" : 20971520\n                    }\n                }\n            }\n        ]\n    }\n}\n')),(0,n.kt)("p",null,"4.Execute the datax task, refer to the specific ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/DataX/blob/master/userGuid.md"},"datax official website")))}c.isMDXComponent=!0}}]);