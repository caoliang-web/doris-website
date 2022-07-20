"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[36067],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=n,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(k,s(s({ref:r},u),{},{components:t})):a.createElement(k,s({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},49443:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const o={title:"Resource management",language:"en"},s=void 0,i={unversionedId:"administrator-guide/resource-management",id:"version-1.0/administrator-guide/resource-management",title:"Resource management",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/administrator-guide/resource-management.md",sourceDirName:"administrator-guide",slug:"/administrator-guide/resource-management",permalink:"/docs/1.0/administrator-guide/resource-management",draft:!1,tags:[],version:"1.0",frontMatter:{title:"Resource management",language:"en"},sidebar:"docs",previous:{title:"LDAP",permalink:"/docs/1.0/administrator-guide/ldap"},next:{title:"Statistics of query execution",permalink:"/docs/1.0/administrator-guide/running-profile"}},l={},p=[{value:"Fundamental Concept",id:"fundamental-concept",level:2},{value:"Operation Of Resource",id:"operation-of-resource",level:2},{value:"Resources Supported",id:"resources-supported",level:2},{value:"Spark",id:"spark",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Spark Parameters:",id:"spark-parameters",level:5},{value:"If spark is used for ETL, also need to specify the following parameters:",id:"if-spark-is-used-for-etl-also-need-to-specify-the-following-parameters",level:5},{value:"Example",id:"example",level:4},{value:"ODBC",id:"odbc",level:3},{value:"Parameter",id:"parameter-1",level:4},{value:"ODBC Parameters:",id:"odbc-parameters",level:5},{value:"Example",id:"example-1",level:4}],u={toc:p};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"resource-management"},"Resource Management"),(0,n.kt)("p",null,"In order to save the compute and storage resources in the Doris cluster, Doris needs to reference to some other external resources to do the related work. such as spark/GPU for query, HDFS/S3 for external storage, spark/MapReduce for ETL, connect to external storage by ODBC driver. Therefore, Doris need a resource management mechanism to manage these external resources."),(0,n.kt)("h2",{id:"fundamental-concept"},"Fundamental Concept"),(0,n.kt)("p",null,"A resource contains basic information such as name and type. The name is globally unique. Different types of resources contain different attributes. Please refer to the introduction of each resource for details."),(0,n.kt)("p",null,"The creation and deletion of resources can only be performed by users own ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," permission. One resource belongs to the entire Doris cluster. Users with ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," permission can assign permission of resource to other users. Please refer to ",(0,n.kt)("inlineCode",{parentName:"p"},"HELP GRANT")," or doris document."),(0,n.kt)("h2",{id:"operation-of-resource"},"Operation Of Resource"),(0,n.kt)("p",null,"There are three main commands for resource management: ",(0,n.kt)("inlineCode",{parentName:"p"},"create resource"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"drop resource")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"show resources"),". They are to create, delete and check resources. The specific syntax of these three commands can be viewed by executing ",(0,n.kt)("inlineCode",{parentName:"p"},"help CMD")," after MySQL client connects to Doris."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"CREATE RESOURCE")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE [EXTERNAL] RESOURCE "resource_name"                                  \n  PROPERTIES ("key"="value", ...); \n')),(0,n.kt)("p",null,"   In the command to create a resource, the user must provide the following information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"resource_name")," name of the resource"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PROPERTIES")," related parameters, as follows:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"type"),": resource type, required. Currently, only spark and odbc_catalog are supported."),(0,n.kt)("li",{parentName:"ul"},"For other parameters, see the resource introduction")))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"DROP RESOURCE"),(0,n.kt)("p",{parentName:"li"},"This command can delete an existing resource. For details, please refer to: ",(0,n.kt)("inlineCode",{parentName:"p"},"HELP DROP RESOURCE"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"SHOW RESOURCES"),(0,n.kt)("p",{parentName:"li"},"This command can view the resources that the user has permission to use. Please refer to: ",(0,n.kt)("inlineCode",{parentName:"p"},"HELP SHOW RESOURCES")))),(0,n.kt)("h2",{id:"resources-supported"},"Resources Supported"),(0,n.kt)("p",null,"Currently, Doris can support"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Spark resource: do ETL work"),(0,n.kt)("li",{parentName:"ul"},"ODBC resource: query and import data from external tables")),(0,n.kt)("p",null,"The following shows how the two resources are used."),(0,n.kt)("h3",{id:"spark"},"Spark"),(0,n.kt)("h4",{id:"parameter"},"Parameter"),(0,n.kt)("h5",{id:"spark-parameters"},"Spark Parameters:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"spark.master"),": required, currently supported yarn, spark://host:port."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"spark.submit.deployMode"),": The deployment mode of spark. required. It supports cluster and client."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"spark.hadoop.yarn.resourcemanager.address"),": required when master is yarn."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"spark.hadoop.fs.defaultFS"),": required when master is yarn."),(0,n.kt)("p",null,"Other parameters are optional, refer to: ",(0,n.kt)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/configuration.html"},"http://spark.apache.org/docs/latest/configuration.html"),"."),(0,n.kt)("h5",{id:"if-spark-is-used-for-etl-also-need-to-specify-the-following-parameters"},"If spark is used for ETL, also need to specify the following parameters:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"working_dir"),": Directory used by ETL. Spark is required when used as an ETL resource. For example: hdfs://host:port/tmp/doris."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"broker"),": The name of broker. Is required when spark be used as ETL resource. You need to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"ALTER SYSTEM ADD BROKER")," command to complete the configuration in advance. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"broker.property_key"),": When the broker reads the intermediate file generated by ETL, it needs the specified authentication information.")),(0,n.kt)("h4",{id:"example"},"Example"),(0,n.kt)("p",null,"Create a spark resource named ",(0,n.kt)("inlineCode",{parentName:"p"},"spark0 "),"in the yarn cluster mode."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE "spark0"\nPROPERTIES\n(\n  "type" = "spark",\n  "spark.master" = "yarn",\n  "spark.submit.deployMode" = "cluster",\n  "spark.jars" = "xxx.jar,yyy.jar",\n  "spark.files" = "/tmp/aaa,/tmp/bbb",\n  "spark.executor.memory" = "1g",\n  "spark.yarn.queue" = "queue0",\n  "spark.hadoop.yarn.resourcemanager.address" = "127.0.0.1:9999",\n  "spark.hadoop.fs.defaultFS" = "hdfs://127.0.0.1:10000",\n  "working_dir" = "hdfs://127.0.0.1:10000/tmp/doris",\n  "broker" = "broker0",\n  "broker.username" = "user0",\n  "broker.password" = "password0"\n);\n')),(0,n.kt)("h3",{id:"odbc"},"ODBC"),(0,n.kt)("h4",{id:"parameter-1"},"Parameter"),(0,n.kt)("h5",{id:"odbc-parameters"},"ODBC Parameters:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type"),": Required, must be ",(0,n.kt)("inlineCode",{parentName:"p"},"odbc_catalog"),". As the type identifier of resource."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"user"),": The user name of the external table, required."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"password"),": The user password of the external table, required."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"host"),": The ip address of the external table, required."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"port"),": The port of the external table, required."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"odbc_type"),": Indicates the type of external table. Currently, Doris supports ",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Oracle"),". In the future, it may support more databases. The ODBC external table referring to the resource is required. The old MySQL external table referring to the resource is optional."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"driver"),": Indicates the driver dynamic library used by the ODBC external table.\nThe ODBC external table referring to the resource is required. The old MySQL external table referring to the resource is optional."),(0,n.kt)("p",null,"For the usage of ODBC resource, please refer to ",(0,n.kt)("a",{parentName:"p",href:"../extending-doris/odbc-of-doris.html"},"ODBC of Doris")),(0,n.kt)("h4",{id:"example-1"},"Example"),(0,n.kt)("p",null,"Create the ODBC resource of Oracle, named ",(0,n.kt)("inlineCode",{parentName:"p"},"oracle_odbc"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE `oracle_odbc`\nPROPERTIES (\n"type" = "odbc_catalog",\n"host" = "192.168.0.1",\n"port" = "8086",\n"user" = "test",\n"password" = "test",\n"database" = "test",\n"odbc_type" = "oracle",\n"driver" = "Oracle 19 ODBC driver"\n);\n')))}d.isMDXComponent=!0}}]);