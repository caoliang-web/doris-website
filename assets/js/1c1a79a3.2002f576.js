"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[45637],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=m(a),k=r,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14371:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"Star-Schema-Benchmark",language:"en"},i=void 0,o={unversionedId:"benchmark/star-schema-benchmark",id:"version-1.0/benchmark/star-schema-benchmark",title:"Star-Schema-Benchmark",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/benchmark/star-schema-benchmark.md",sourceDirName:"benchmark",slug:"/benchmark/star-schema-benchmark",permalink:"/docs/1.0/benchmark/star-schema-benchmark",draft:!1,tags:[],version:"1.0",frontMatter:{title:"Star-Schema-Benchmark",language:"en"},sidebar:"docs",previous:{title:"Orthogonal BITMAP calculation",permalink:"/docs/1.0/administrator-guide/orthogonal-bitmap-manual"},next:{title:"Systemd",permalink:"/docs/1.0/benchmark/systemd"}},p={},m=[{value:"Environmental preparation",id:"environmental-preparation",level:2},{value:"data preparation",id:"data-preparation",level:2},{value:"1. Download and install the SSB data generation tool.",id:"1-download-and-install-the-ssb-data-generation-tool",level:3},{value:"2. Generate SSB test set",id:"2-generate-ssb-test-set",level:3},{value:"Query test",id:"query-test",level:2},{value:"testing report",id:"testing-report",level:2}],s={toc:m};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"star-schema-benchmark"},"Star Schema Benchmark"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cs.umb.edu/~poneil/StarSchemaB.PDF"},"Star Schema Benchmark(SSB)")," is a lightweight data warehouse scenario performance test set. Based on ",(0,r.kt)("a",{parentName:"p",href:"http://www.tpc.org/tpch/"},"TPC-H"),", SSB provides a simplified version of the star model data set, which is mainly used to test the performance of multi-table association queries under the star model."),(0,r.kt)("p",null,"This document mainly introduces how to pass the preliminary performance test of the SSB process in Doris."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note 1: The standard test set including SSB is usually far from the actual business scenario, and some tests will perform parameter tuning for the test set. Therefore, the test results of the standard test set can only reflect the performance of the database in a specific scenario. It is recommended that users use actual business data for further testing."),(0,r.kt)("p",{parentName:"blockquote"},"Note 2: The operations involved in this document are all performed in the CentOS 7 environment.")),(0,r.kt)("h2",{id:"environmental-preparation"},"Environmental preparation"),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"http://doris.incubator.apache.org/master/en/installing/install-deploy.html"},"official document")," to install and deploy Doris to obtain a normal running Doris cluster ( Contain at least 1 FE, 1 BE)."),(0,r.kt)("p",null,"The scripts involved in the following documents are all stored under ",(0,r.kt)("inlineCode",{parentName:"p"},"tools/ssb-tools/")," in the Doris code base."),(0,r.kt)("h2",{id:"data-preparation"},"data preparation"),(0,r.kt)("h3",{id:"1-download-and-install-the-ssb-data-generation-tool"},"1. Download and install the SSB data generation tool."),(0,r.kt)("p",null,"Execute the following script to download and compile the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/electrum/ssb-dbgen.git"},"ssb-dbgen")," tool."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sh build-ssb-dbgen.sh\n")),(0,r.kt)("p",null,"After the installation is successful, the ",(0,r.kt)("inlineCode",{parentName:"p"},"dbgen")," binary file will be generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ssb-dbgen/")," directory."),(0,r.kt)("h3",{id:"2-generate-ssb-test-set"},"2. Generate SSB test set"),(0,r.kt)("p",null,"Execute the following script to generate the SSB data set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sh gen-ssb-data.sh -s 100 -c 100\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note 1: Run ",(0,r.kt)("inlineCode",{parentName:"p"},"sh gen-ssb-data.sh -h")," for help."),(0,r.kt)("p",{parentName:"blockquote"},"Note 2: The data will be generated under the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"ssb-data/")," with a suffix of ",(0,r.kt)("inlineCode",{parentName:"p"},".tbl"),". The total file size is about 60GB. The generation time may vary from a few minutes to an hour."),(0,r.kt)("p",{parentName:"blockquote"},"Note 3: ",(0,r.kt)("inlineCode",{parentName:"p"},"-s 100")," means that the test set size factor is 100, ",(0,r.kt)("inlineCode",{parentName:"p"},"-c 100")," means that 100 threads concurrently generate data in the lineorder table. The ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," parameter also determines the number of files in the final lineorder table. The larger the parameter, the more files and the smaller each file.")),(0,r.kt)("p",null,"Under the ",(0,r.kt)("inlineCode",{parentName:"p"},"-s 100")," parameter, the generated data set size is:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Table"),(0,r.kt)("th",{parentName:"tr",align:null},"Rows"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"File Number"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineorder"),(0,r.kt)("td",{parentName:"tr",align:null},"600 million (600037902)"),(0,r.kt)("td",{parentName:"tr",align:null},"60GB"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customer"),(0,r.kt)("td",{parentName:"tr",align:null},"30 million (3000000)"),(0,r.kt)("td",{parentName:"tr",align:null},"277M"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"part"),(0,r.kt)("td",{parentName:"tr",align:null},"1.4 million (1400000)"),(0,r.kt)("td",{parentName:"tr",align:null},"116M"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"supplier"),(0,r.kt)("td",{parentName:"tr",align:null},"200,000 (200,000)"),(0,r.kt)("td",{parentName:"tr",align:null},"17M"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"2556"),(0,r.kt)("td",{parentName:"tr",align:null},"228K"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build a table"),(0,r.kt)("p",{parentName:"li"},"Copy the table creation statement in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/tools/ssb-tools/create-tables.sql"},"create-tables.sql")," and execute it in Doris.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import data"),(0,r.kt)("ol",{parentName:"li",start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prepare the 'doris-cluster.conf' file."),(0,r.kt)("p",{parentName:"li"}," Before calling the load script, you need to write the FE's ip port and other information in the ",(0,r.kt)("inlineCode",{parentName:"p"},"doris-cluster.conf")," file."),(0,r.kt)("p",{parentName:"li"}," 'doris-cluster.conf' in the same directory as ",(0,r.kt)("inlineCode",{parentName:"p"},"load-dimension-data.sh"),"."),(0,r.kt)("p",{parentName:"li"}," The contents of the file include FE's ip, HTTP port, user name, password and the DB name of the data to be loaded:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'export FE_HOST="xxx"\nexport FE_HTTP_PORT="8030"\nexport USER="root"\nexport PASSWORD=\'xxx\'\nexport DB="ssb"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Load 4 dimension table data (customer, part, supplier and date)"),(0,r.kt)("p",{parentName:"li"},"Because the data volume of these 4 dimension tables is small, and the load is simpler, we use the following command to load the data of these 4 tables first:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sh load-dimension-data.sh"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Load the fact table lineorder."),(0,r.kt)("p",{parentName:"li"},"Load the lineorder table data with the following command:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sh load-fact-data.sh -c 5")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-c 5")," means to start 5 concurrent threads to import (the default is 3). In the case of a single BE node, the load time of lineorder data generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"sh gen-ssb-data.sh -s 100 -c 100")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"sh load-fact-data.sh -c 3")," is about 10 minutes. The memory overhead is about 5-6GB. If you turn on more threads, you can speed up the load speed, but it will increase additional memory overhead."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: To get a faster import speed, you can add ",(0,r.kt)("inlineCode",{parentName:"p"},"flush_thread_num_per_store=5")," in be.conf and restart BE. This configuration indicates the number of disk write threads for each data directory, and the default is 2. Larger data can increase write data throughput, but may increase IO Util. (Reference value: 1 mechanical disk, when the default is 2, the IO Util during the import process is about 12%, when it is set to 5, the IO Util is about 26%. If it is an SSD disk, it is almost 0) ."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the loaded data"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"select count(*) from part;\nselect count(*) from customer;\nselect count(*) from supplier;\nselect count(*) from date;\nselect count(*) from lineorder;\n")),(0,r.kt)("p",{parentName:"li"},"The amount of data should be the same as the number of rows of generated data."))),(0,r.kt)("h2",{id:"query-test"},"Query test"),(0,r.kt)("p",null,"There are 4 groups of 14 SQL in the SSB test set. The query statement is in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/tools/ssb-tools/queries"},"queries/")," directory."),(0,r.kt)("h2",{id:"testing-report"},"testing report"),(0,r.kt)("p",null,"The following test report is based on Doris ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/branch-0.15"},"branch-0.15")," branch code test, for reference only. (Update time: October 25, 2021)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Hardware environment"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1 FE + 1-3 BE mixed"),(0,r.kt)("li",{parentName:"ul"},"CPU: 96core, Intel(R) Xeon(R) Gold 6271C CPU @ 2.60GHz"),(0,r.kt)("li",{parentName:"ul"},"Memory: 384GB"),(0,r.kt)("li",{parentName:"ul"},"Hard disk: 1 HDD"),(0,r.kt)("li",{parentName:"ul"},"Network card: 10 Gigabit network card"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Data set"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Table"),(0,r.kt)("th",{parentName:"tr",align:null},"Rows"),(0,r.kt)("th",{parentName:"tr",align:null},"Origin Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Compacted Size(1 Replica)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineorder"),(0,r.kt)("td",{parentName:"tr",align:null},"600 million (600037902)"),(0,r.kt)("td",{parentName:"tr",align:null},"60 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"14.846 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customer"),(0,r.kt)("td",{parentName:"tr",align:null},"30 million (3000000)"),(0,r.kt)("td",{parentName:"tr",align:null},"277 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"414.741 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"part"),(0,r.kt)("td",{parentName:"tr",align:null},"1.4 million (1.400000)"),(0,r.kt)("td",{parentName:"tr",align:null},"116 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"38.277 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"supplier"),(0,r.kt)("td",{parentName:"tr",align:null},"200,000 (200,000)"),(0,r.kt)("td",{parentName:"tr",align:null},"17 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"27.428 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"2556"),(0,r.kt)("td",{parentName:"tr",align:null},"228 KB"),(0,r.kt)("td",{parentName:"tr",align:null},"275.804 KB"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test results"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Query"),(0,r.kt)("th",{parentName:"tr",align:null},"Time(ms) (1 BE)"),(0,r.kt)("th",{parentName:"tr",align:null},"Time(ms) (3 BE)"),(0,r.kt)("th",{parentName:"tr",align:null},"Parallelism"),(0,r.kt)("th",{parentName:"tr",align:null},"Runtime Filter Mode"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"140"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"IN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"90"),(0,r.kt)("td",{parentName:"tr",align:null},"80"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"IN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q1.3"),(0,r.kt)("td",{parentName:"tr",align:null},"90"),(0,r.kt)("td",{parentName:"tr",align:null},"80"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"IN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q2.1"),(0,r.kt)("td",{parentName:"tr",align:null},"1100"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOOM_FILTER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q2.2"),(0,r.kt)("td",{parentName:"tr",align:null},"900"),(0,r.kt)("td",{parentName:"tr",align:null},"330"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOOM_FILTER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q2.3"),(0,r.kt)("td",{parentName:"tr",align:null},"790"),(0,r.kt)("td",{parentName:"tr",align:null},"320"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOOM_FILTER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q3.1"),(0,r.kt)("td",{parentName:"tr",align:null},"3100"),(0,r.kt)("td",{parentName:"tr",align:null},"1280"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOOM_FILTER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q3.2"),(0,r.kt)("td",{parentName:"tr",align:null},"700"),(0,r.kt)("td",{parentName:"tr",align:null},"270"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOOM_FILTER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q3.3"),(0,r.kt)("td",{parentName:"tr",align:null},"540"),(0,r.kt)("td",{parentName:"tr",align:null},"270"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOOM_FILTER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q3.4"),(0,r.kt)("td",{parentName:"tr",align:null},"560"),(0,r.kt)("td",{parentName:"tr",align:null},"240"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOOM_FILTER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q4.1"),(0,r.kt)("td",{parentName:"tr",align:null},"2820"),(0,r.kt)("td",{parentName:"tr",align:null},"1150"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOOM_FILTER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q4.2"),(0,r.kt)("td",{parentName:"tr",align:null},"1430"),(0,r.kt)("td",{parentName:"tr",align:null},"670"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOOM_FILTER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q4.2"),(0,r.kt)("td",{parentName:"tr",align:null},"1750"),(0,r.kt)("td",{parentName:"tr",align:null},"1030"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOOM_FILTER")))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},'Note 1: "This test set is far from your production environment, please be skeptical!"'),(0,r.kt)("p",{parentName:"blockquote"},"Note 2: The test result is the average value of multiple executions (Page Cache will play a certain acceleration role). And the data has undergone sufficient compaction (if you test immediately after importing the data, the query delay may be higher than the test result)"),(0,r.kt)("p",{parentName:"blockquote"},"Note 3: Due to environmental constraints, the hardware specifications used in this test are relatively high, but so many hardware resources will not be consumed during the entire test. The memory consumption is within 10GB, and the CPU usage is within 10%."),(0,r.kt)("p",{parentName:"blockquote"},"Note 4: Parallelism means query concurrency, which is set by ",(0,r.kt)("inlineCode",{parentName:"p"},"set parallel_fragment_exec_instance_num=8"),"."),(0,r.kt)("p",{parentName:"blockquote"},"Note 5: Runtime Filter Mode is the type of Runtime Filter, set by ",(0,r.kt)("inlineCode",{parentName:"p"},'set runtime_filter_type="BLOOM_FILTER"'),". (",(0,r.kt)("a",{parentName:"p",href:"http://doris.incubator.apache.org/master/en/administrator-guide/runtime-filter.html"},"Runtime Filter")," function has a significant effect on the SSB test set. Because in this test set, The data from the right table of Join can filter the left table very well. You can try to turn off this function through ",(0,r.kt)("inlineCode",{parentName:"p"},"set runtime_filter_mode=off")," to see the change in query latency.)")))))}d.isMDXComponent=!0}}]);