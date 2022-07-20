"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[79635],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||r;return a?o.createElement(m,l(l({ref:t},p),{},{components:a})):o.createElement(m,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const r={title:"Debug Log",language:"en"},l=void 0,i={unversionedId:"advanced/best-practice/debug-log",id:"advanced/best-practice/debug-log",title:"Debug Log",description:"\x3c!--",source:"@site/docs/advanced/best-practice/debug-log.md",sourceDirName:"advanced/best-practice",slug:"/advanced/best-practice/debug-log",permalink:"/docs/advanced/best-practice/debug-log",draft:!1,tags:[],version:"current",frontMatter:{title:"Debug Log",language:"en"},sidebar:"docs",previous:{title:"Import Analysis",permalink:"/docs/advanced/best-practice/import-analysis"},next:{title:"Doris On ES",permalink:"/docs/ecosystem/external-table/doris-on-es"}},s={},c=[{value:"Enable FE Debug log",id:"enable-fe-debug-log",level:2},{value:"Enable BE Debug log",id:"enable-be-debug-log",level:2}],p={toc:c};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"debug-log"},"Debug Log"),(0,n.kt)("p",null,"The system operation logs of Doris's FE and BE nodes are at INFO level by default. It can usually satisfy the analysis of system behavior and the localization of basic problems. However, in some cases, it may be necessary to enable DEBUG level logs to further troubleshoot the problem. This document mainly introduces how to enable the DEBUG log level of FE and BE nodes."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is not recommended to adjust the log level to WARN or higher, which is not conducive to the analysis of system behavior and the location of problems.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Enable DEBUG log may cause a large number of logs to be generated, ",(0,n.kt)("strong",{parentName:"p"},"Please be careful to open it in production environment"),".")),(0,n.kt)("h2",{id:"enable-fe-debug-log"},"Enable FE Debug log"),(0,n.kt)("p",null,"The Debug level log of FE can be turned on by modifying the configuration file, or it can be turned on at runtime through the interface or API."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open via configuration file"),(0,n.kt)("p",{parentName:"li"},"Add the configuration item ",(0,n.kt)("inlineCode",{parentName:"p"},"sys_log_verbose_modules")," to fe.conf. An example is as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-text"},"# Only enable Debug log for class org.apache.doris.catalog.Catalog\nsys_log_verbose_modules=org.apache.doris.catalog.Catalog\n\n# Open the Debug log of all classes under the package org.apache.doris.catalog\nsys_log_verbose_modules=org.apache.doris.catalog\n\n# Enable Debug logs for all classes under package org\nsys_log_verbose_modules=org\n")),(0,n.kt)("p",{parentName:"li"},"Add configuration items and restart the FE node to take effect.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Via FE UI interface"),(0,n.kt)("p",{parentName:"li"},"The log level can be modified at runtime through the UI interface. There is no need to restart the FE node. Open the http port of the FE node (8030 by default) in the browser, and log in to the UI interface. Then click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Log")," tab in the upper navigation bar."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://bce.bdstatic.com/doc/BaiduDoris/DORIS/image_f87b8c1.png",alt:"image.png"})),(0,n.kt)("p",{parentName:"li"},"We can enter the package name or specific class name in the Add input box to open the corresponding Debug log. For example, enter ",(0,n.kt)("inlineCode",{parentName:"p"},"org.apache.doris.catalog.Catalog")," to open the Debug log of the Catalog class:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://bce.bdstatic.com/doc/BaiduDoris/DORIS/image_f0d4a23.png",alt:"image.png"})),(0,n.kt)("p",{parentName:"li"},"You can also enter the package name or specific class name in the Delete input box to close the corresponding Debug log."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"The modification here will only affect the log level of the corresponding FE node. Does not affect the log level of other FE nodes."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Modification via API"),(0,n.kt)("p",{parentName:"li"},"The log level can also be modified at runtime via the following API. There is no need to restart the FE node."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -uuser:passwd fe_host:http_port/rest/v1/log?add_verbose=org.apache.doris.catalog.Catalog\n")),(0,n.kt)("p",{parentName:"li"},"The username and password are the root or admin users who log in to Doris. The ",(0,n.kt)("inlineCode",{parentName:"p"},"add_verbose")," parameter specifies the package or class name to enable Debug logging. Returns if successful:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "LogConfiguration": {\n            "VerboseNames": "org,org.apache.doris.catalog.Catalog",\n            "AuditNames": "slow_query,query,load",\n            "Level": "INFO"\n        }\n    },\n    "count": 0\n}\n')),(0,n.kt)("p",{parentName:"li"},"Debug logging can also be turned off via the following API:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -uuser:passwd fe_host:http_port/rest/v1/log?del_verbose=org.apache.doris.catalog.Catalog\n")),(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"del_verbose")," parameter specifies the package or class name for which to turn off Debug logging."))),(0,n.kt)("h2",{id:"enable-be-debug-log"},"Enable BE Debug log"),(0,n.kt)("p",null,"BE's Debug log currently only supports modifying and restarting the BE node through the configuration file to take effect."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"sys_log_verbose_modules=plan_fragment_executor,olap_scan_node\nsys_log_verbose_level=3\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"sys_log_verbose_modules")," specifies the file name to be opened, which can be specified by the wildcard *. for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"sys_log_verbose_modules=*\n")),(0,n.kt)("p",null,"Indicates that all DEBUG logs are enabled."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"sys_log_verbose_level")," indicates the level of DEBUG. The higher the number, the more detailed the DEBUG log. The value range is 1-10."))}g.isMDXComponent=!0}}]);