"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[94158],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=l,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27956:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={title:"Logstash Doris Output Plugin",language:"en"},i=void 0,o={unversionedId:"extending-doris/logstash",id:"version-1.0/extending-doris/logstash",title:"Logstash Doris Output Plugin",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/extending-doris/logstash.md",sourceDirName:"extending-doris",slug:"/extending-doris/logstash",permalink:"/docs/1.0/extending-doris/logstash",draft:!1,tags:[],version:"1.0",frontMatter:{title:"Logstash Doris Output Plugin",language:"en"},sidebar:"docs",previous:{title:"Doris On ES",permalink:"/docs/1.0/extending-doris/doris-on-es"},next:{title:"ODBC of Doris",permalink:"/docs/1.0/extending-doris/odbc-of-doris"}},s={},p=[{value:"Install and compile",id:"install-and-compile",level:2},{value:"1.Download source code",id:"1download-source-code",level:3},{value:"2.compile",id:"2compile",level:3},{value:"3.Plug-in installation",id:"3plug-in-installation",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Example:",id:"example",level:3},{value:"Start Up",id:"start-up",level:2},{value:"Complete usage example",id:"complete-usage-example",level:2},{value:"1. Compile doris-output-plugin",id:"1-compile-doris-output-plugin",level:3},{value:"2. Install and configure filebeat (here use filebeat as input)",id:"2-install-and-configure-filebeat-here-use-filebeat-as-input",level:3},{value:"3.Install logstash and doris-out-plugin",id:"3install-logstash-and-doris-out-plugin",level:3},{value:"4.Test Load",id:"4test-load",level:3}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"doris-output-plugin"},"Doris output plugin"),(0,l.kt)("p",null,"This plugin is used to output data to Doris for logstash, use the HTTP protocol to interact with the Doris FE Http interface, and import data through Doris's stream load."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://doris.apache.org/administrator-guide/load-data/stream-load-manual.html"},"Learn more about Doris Stream Load ")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://doris.apache.org"},"Learn more about Doris")),(0,l.kt)("h2",{id:"install-and-compile"},"Install and compile"),(0,l.kt)("h3",{id:"1download-source-code"},"1.Download source code"),(0,l.kt)("h3",{id:"2compile"},"2.compile"),(0,l.kt)("p",null,"Execute under extension/logstash/ directory"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gem build logstash-output-doris.gemspec")),(0,l.kt)("p",null,"You will get logstash-output-doris-{version}.gem file in the same directory"),(0,l.kt)("h3",{id:"3plug-in-installation"},"3.Plug-in installation"),(0,l.kt)("p",null,"copy logstash-output-doris-{version}.gem to the logstash installation directory"),(0,l.kt)("p",null,"Executing an order"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"./bin/logstash-plugin install logstash-output-doris-{version}.gem")," "),(0,l.kt)("p",null,"Install logstash-output-doris plugin"),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h3",{id:"example"},"Example:"),(0,l.kt)("p",null,"Create a new configuration file in the config directory and name it logstash-doris.conf"),(0,l.kt)("p",null,"The specific configuration is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'output {\n    doris {\n        http_hosts => [ "http://fehost:8030" ]\n        user => user_name\n        password => password\n        db => "db_name"\n        table => "table_name"\n        label_prefix => "label_prefix"\n        column_separator => ","\n    }\n}\n')),(0,l.kt)("p",null,"Configuration instructions:"),(0,l.kt)("p",null,"Connection configuration:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http_hosts")),(0,l.kt)("td",{parentName:"tr",align:null},"FE's HTTP interactive address eg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user")),(0,l.kt)("td",{parentName:"tr",align:null},"User name, the user needs to have import permission for the doris table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null},"Password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"db")),(0,l.kt)("td",{parentName:"tr",align:null},"Database name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")),(0,l.kt)("td",{parentName:"tr",align:null},"Table name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label_prefix")),(0,l.kt)("td",{parentName:"tr",align:null},"Import the identification prefix, the final generated ID is ",(0,l.kt)("em",{parentName:"td"},"{label","_","prefix}","_","{db}","_","{table}","_","{time_stamp}"))))),(0,l.kt)("p",null,"Load configuration:(",(0,l.kt)("a",{parentName:"p",href:"http://doris.apache.org/master/zh-CN/administrator-guide/load-data/stream-load-manual.html"},"Reference documents"),")"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"column_separator")),(0,l.kt)("td",{parentName:"tr",align:null},"Column separator, the default is \\t")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"columns")),(0,l.kt)("td",{parentName:"tr",align:null},"Used to specify the correspondence between the columns in the import file and the columns in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"where")),(0,l.kt)("td",{parentName:"tr",align:null},"The filter conditions specified by the import task")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"max_filter_ratio")),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum tolerance rate of the import task, the default is zero tolerance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"partition")),(0,l.kt)("td",{parentName:"tr",align:null},"Partition information of the table to be imported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeout")),(0,l.kt)("td",{parentName:"tr",align:null},"timeout, the default is 600s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"strict_mode")),(0,l.kt)("td",{parentName:"tr",align:null},"Strict mode, the default is false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timezone")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the time zone used for this import, the default is the East Eight District")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"exec_mem_limit")),(0,l.kt)("td",{parentName:"tr",align:null},"Import memory limit, default is 2GB, unit is byte")))),(0,l.kt)("p",null,"Other configuration:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"save_on_failure")),(0,l.kt)("td",{parentName:"tr",align:null},"If the import fails to save locally, the default is true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"save_dir")),(0,l.kt)("td",{parentName:"tr",align:null},"Local save directory, default is /tmp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"automatic_retries")),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of retries on failure, the default is 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"batch_size")),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of events processed per batch, the default is 100000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"idle_flush_time")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum interval, the default is 20 (seconds)")))),(0,l.kt)("h2",{id:"start-up"},"Start Up"),(0,l.kt)("p",null,"Run the command to start the doris output plugin:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{logstash-home}/bin/logstash -f {logstash-home}/config/logstash-doris.conf --config.reload.automatic")),(0,l.kt)("h2",{id:"complete-usage-example"},"Complete usage example"),(0,l.kt)("h3",{id:"1-compile-doris-output-plugin"},"1. Compile doris-output-plugin"),(0,l.kt)("p",null,"1> Download the ruby compressed package and go to ",(0,l.kt)("a",{parentName:"p",href:"https://www.ruby-lang.org/en/downloads/"},"ruby official website")," to download it. The version 2.7.1 used here"),(0,l.kt)("p",null,"2> Compile and install, configure ruby environment variables"),(0,l.kt)("p",null,"3> Go to the doris source extension/logstash/ directory and execute"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gem build logstash-output-doris.gemspec")),(0,l.kt)("p",null,"Get the file logstash-output-doris-0.1.0.gem, and the compilation is complete"),(0,l.kt)("h3",{id:"2-install-and-configure-filebeat-here-use-filebeat-as-input"},"2. Install and configure filebeat (here use filebeat as input)"),(0,l.kt)("p",null,"1> ",(0,l.kt)("a",{parentName:"p",href:"https://www.elastic.co/"},"es official website")," Download the filebeat tar compression package and decompress it"),(0,l.kt)("p",null,"2> Enter the filebeat directory and modify the configuration file filebeat.yml as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'filebeat.inputs:\n- type: log\n  paths:\n    - /tmp/doris.data\noutput.logstash:\n  hosts: ["localhost:5044"]\n')),(0,l.kt)("p",null,"/tmp/doris.data is the doris data path"),(0,l.kt)("p",null,"3> Start filebeat:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'./filebeat -e -c filebeat.yml -d "publish"')),(0,l.kt)("h3",{id:"3install-logstash-and-doris-out-plugin"},"3.Install logstash and doris-out-plugin"),(0,l.kt)("p",null,"1> ",(0,l.kt)("a",{parentName:"p",href:"https://www.elastic.co/"},"es official website")," Download the logstash tar compressed package and decompress it"),(0,l.kt)("p",null,"2> Copy the logstash-output-doris-0.1.0.gem obtained in step 1 to the logstash installation directory"),(0,l.kt)("p",null,"3> execute"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"./bin/logstash-plugin install logstash-output-doris-0.1.0.gem")),(0,l.kt)("p",null,"Install the plugin"),(0,l.kt)("p",null,"4> Create a new configuration file logstash-doris.conf in the config directory as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'input {\n    beats {\n        port => "5044"\n    }\n}\n\noutput {\n    doris {\n        http_hosts => [ "http://127.0.0.1:8030" ]\n        user => doris\n        password => doris\n        db => "logstash_output_test"\n        table => "output"\n        label_prefix => "doris"\n        column_separator => ","\n        columns => "a,b,c,d,e"\n    }\n}\n')),(0,l.kt)("p",null,"The configuration here needs to be configured according to the configuration instructions"),(0,l.kt)("p",null,"5> Start logstash:"),(0,l.kt)("p",null,"./bin/logstash -f ./config/logstash-doris.conf --config.reload.automatic"),(0,l.kt)("h3",{id:"4test-load"},"4.Test Load"),(0,l.kt)("p",null,"Add write data to /tmp/doris.data"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"echo a,b,c,d,e >> /tmp/doris.data")),(0,l.kt)("p",null,"Observe the logstash log. If the status of the returned response is Success, the import was successful. At this time, you can view the imported data in the logstash_output_test.output table"))}u.isMDXComponent=!0}}]);