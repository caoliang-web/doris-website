"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[79016],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},68927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={title:"Node Action",language:"zh-CN"},i=void 0,l={unversionedId:"administrator-guide/http-actions/fe/manager/node-action",id:"version-1.0/administrator-guide/http-actions/fe/manager/node-action",title:"Node Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/administrator-guide/http-actions/fe/manager/node-action.md",sourceDirName:"administrator-guide/http-actions/fe/manager",slug:"/administrator-guide/http-actions/fe/manager/node-action",permalink:"/zh-CN/docs/1.0/administrator-guide/http-actions/fe/manager/node-action",draft:!1,tags:[],version:"1.0",frontMatter:{title:"Node Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Cluster Action",permalink:"/zh-CN/docs/1.0/administrator-guide/http-actions/fe/manager/cluster-action"},next:{title:"Query Profile Action",permalink:"/zh-CN/docs/1.0/administrator-guide/http-actions/fe/manager/query-profile-action"}},s={},p=[{value:"Request",id:"request",level:2},{value:"\u83b7\u53d6fe, be, broker\u8282\u70b9\u4fe1\u606f",id:"\u83b7\u53d6fe-be-broker\u8282\u70b9\u4fe1\u606f",level:2},{value:"Description",id:"description",level:3},{value:"Response",id:"response",level:3},{value:"\u83b7\u53d6\u8282\u70b9\u914d\u7f6e\u4fe1\u606f",id:"\u83b7\u53d6\u8282\u70b9\u914d\u7f6e\u4fe1\u606f",level:2},{value:"Description",id:"description-1",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response-1",level:3},{value:"Examples",id:"examples",level:3},{value:"\u4fee\u6539\u914d\u7f6e\u503c",id:"\u4fee\u6539\u914d\u7f6e\u503c",level:2},{value:"Description",id:"description-2",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-2",level:3},{value:"Examples",id:"examples-1",level:3}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-action"},"Node Action"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/frontends")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/backends")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/brokers")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/set_config/fe")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/set_config/be")),(0,r.kt)("h2",{id:"\u83b7\u53d6fe-be-broker\u8282\u70b9\u4fe1\u606f"},"\u83b7\u53d6fe, be, broker\u8282\u70b9\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/frontends")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/backends")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/brokers")),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u96c6\u7fa4\u83b7\u53d6fe, be, broker\u8282\u70b9\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'frontends:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Name",\n            "IP",\n            "HostName",\n            "EditLogPort",\n            "HttpPort",\n            "QueryPort",\n            "RpcPort",\n            "Role",\n            "IsMaster",\n            "ClusterId",\n            "Join",\n            "Alive",\n            "ReplayedJournalId",\n            "LastHeartbeat",\n            "IsHelper",\n            "ErrMsg",\n            "Version"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'backends:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "BackendId",\n            "Cluster",\n            "IP",\n            "HostName",\n            "HeartbeatPort",\n            "BePort",\n            "HttpPort",\n            "BrpcPort",\n            "LastStartTime",\n            "LastHeartbeat",\n            "Alive",\n            "SystemDecommissioned",\n            "ClusterDecommissioned",\n            "TabletNum",\n            "DataUsedCapacity",\n            "AvailCapacity",\n            "TotalCapacity",\n            "UsedPct",\n            "MaxDiskUsedPct",\n            "ErrMsg",\n            "Version",\n            "Status"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'brokers:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Name",\n            "IP",\n            "HostName",\n            "Port",\n            "Alive",\n            "LastStartTime",\n            "LastUpdateTime",\n            "ErrMsg"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,r.kt)("h2",{id:"\u83b7\u53d6\u8282\u70b9\u914d\u7f6e\u4fe1\u606f"},"\u83b7\u53d6\u8282\u70b9\u914d\u7f6e\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info")),(0,r.kt)("h3",{id:"description-1"},"Description"),(0,r.kt)("p",null,"configuration_name \u7528\u4e8e\u83b7\u53d6\u8282\u70b9\u914d\u7f6e\u9879\u540d\u79f0\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","node_list \u7528\u4e8e\u83b7\u53d6\u8282\u70b9\u5217\u8868\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","configuration_info \u7528\u4e8e\u83b7\u53d6\u8282\u70b9\u914d\u7f6e\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"query-parameters"},"Query parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name"),(0,r.kt)("br",{parentName:"p"}),"\n","\u65e0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list"),(0,r.kt)("br",{parentName:"p"}),"\n","\u65e0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type\n\u503c\u4e3a fe \u6216 be\uff0c \u7528\u4e8e\u6307\u5b9a\u83b7\u53d6fe\u7684\u914d\u7f6e\u4fe1\u606f\u6216be\u7684\u914d\u7f6e\u4fe1\u606f\u3002")),(0,r.kt)("h3",{id:"request-body"},"Request body"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name"),(0,r.kt)("br",{parentName:"p"}),"\n","\u65e0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list"),(0,r.kt)("br",{parentName:"p"}),"\n","\u65e0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "conf_name": [\n        ""\n    ],\n    "node": [\n        ""\n    ]\n}\n\n\u82e5\u4e0d\u5e26body\uff0cbody\u4e2d\u7684\u53c2\u6570\u90fd\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002  \nconf_name \u7528\u4e8e\u6307\u5b9a\u8fd4\u56de\u54ea\u4e9b\u914d\u7f6e\u9879\u7684\u4fe1\u606f\uff0c \u9ed8\u8ba4\u8fd4\u56de\u6240\u6709\u914d\u7f6e\u9879\u4fe1\u606f\uff1b\nnode \u7528\u4e8e\u6307\u5b9a\u8fd4\u56de\u54ea\u4e9b\u8282\u70b9\u7684\u914d\u7f6e\u9879\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e3a\u5168\u90e8fe\u8282\u70b9\u6216be\u8282\u70b9\u914d\u7f6e\u9879\u4fe1\u606f\u3002\n')),(0,r.kt)("h3",{id:"response-1"},"Response"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "backend":[\n            ""\n        ],\n        "frontend":[\n            ""\n        ]\n    },\n    "count": 0\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "backend": [\n            ""\n        ],\n        "frontend": [\n            ""\n        ]\n    },\n    "count": 0\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info?type=fe")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "\u914d\u7f6e\u9879",\n            "\u8282\u70b9",\n            "\u8282\u70b9\u7c7b\u578b",\n            "\u914d\u7f6e\u503c\u7c7b\u578b",\n            "MasterOnly",\n            "\u914d\u7f6e\u503c",\n            "\u53ef\u4fee\u6539"\n        ],\n        "rows": [\n            [\n                ""\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info?type=be")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "\u914d\u7f6e\u9879",\n            "\u8282\u70b9",\n            "\u8282\u70b9\u7c7b\u578b",\n            "\u914d\u7f6e\u503c\u7c7b\u578b",\n            "\u914d\u7f6e\u503c",\n            "\u53ef\u4fee\u6539"\n        ],\n        "rows": [\n            [\n                ""\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6fe agent_task_resend_wait_time_ms \u914d\u7f6e\u9879\u4fe1\u606f\uff1a"),(0,r.kt)("p",{parentName:"li"},"POST /rest/v2/manager/node/configuration_info?type=fe",(0,r.kt)("br",{parentName:"p"}),"\n","body:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "conf_name":[\n        "agent_task_resend_wait_time_ms"\n    ]\n}\n')),(0,r.kt)("p",{parentName:"li"},"Response:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "\u914d\u7f6e\u9879",\n            "\u8282\u70b9",\n            "\u8282\u70b9\u7c7b\u578b",\n            "\u914d\u7f6e\u503c\u7c7b\u578b",\n            "MasterOnly",\n            "\u914d\u7f6e\u503c",\n            "\u53ef\u4fee\u6539"\n        ],\n        "rows": [\n            [\n                "agent_task_resend_wait_time_ms",\n                "127.0.0.1:8030",\n                "FE",\n                "long",\n                "true",\n                "50000",\n                "true"\n            ]\n        ]\n    },\n    "count": 0\n}\n')))),(0,r.kt)("h2",{id:"\u4fee\u6539\u914d\u7f6e\u503c"},"\u4fee\u6539\u914d\u7f6e\u503c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/set_config/fe")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/set_config/be")),(0,r.kt)("h3",{id:"description-2"},"Description"),(0,r.kt)("p",null,"\u7528\u4e8e\u4fee\u6539fe\u6216be\u8282\u70b9\u914d\u7f6e\u503c"),(0,r.kt)("h3",{id:"request-body-1"},"Request body"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "config_name":{\n        "node":[\n            ""\n        ],\n        "value":"",\n        "persist":\n    }\n}\n\nconfig_name\u4e3a\u5bf9\u5e94\u7684\u914d\u7f6e\u9879\uff1b  \nnode\u4e3a\u5173\u952e\u5b57\uff0c\u8868\u793a\u8981\u4fee\u6539\u7684\u8282\u70b9\u5217\u8868;  \nvalue\u4e3a\u914d\u7f6e\u7684\u503c\uff1b  \npersist\u4e3a true \u8868\u793a\u6c38\u4e45\u4fee\u6539\uff0c false \u8868\u793a\u4e34\u65f6\u4fee\u6539\u3002\u6c38\u4e45\u4fee\u6539\u91cd\u542f\u540e\u80fd\u751f\u6548\uff0c \u4e34\u65f6\u4fee\u6539\u91cd\u542f\u540e\u5931\u6548\u3002\n')),(0,r.kt)("h3",{id:"response-2"},"Response"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "",\n    "code": 0,\n    "data": {\n        "failed":[\n            {\n                "config_name":"name",\n                "value"="",\n                "node":"",\n                "err_info":""\n            }\n        ]\n    },\n    "count": 0\n}\n\nfailed \u8868\u793a\u4fee\u6539\u5931\u8d25\u7684\u914d\u7f6e\u4fe1\u606f\u3002\n')),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539fe 127.0.0.1:8030 \u8282\u70b9\u4e2d agent_task_resend_wait_time_ms \u548calter_table_timeout_second \u914d\u7f6e\u503c\uff1a"),(0,r.kt)("p",{parentName:"li"},"POST /rest/v2/manager/node/set_config/fe\nbody:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "agent_task_resend_wait_time_ms":{\n        "node":[\n            "127.0.0.1:8030"\n        ],\n        "value":"10000",\n        "persist":"true"\n    },\n    "alter_table_timeout_second":{\n        "node":[\n            "127.0.0.1:8030"\n        ],\n        "value":"true",\n        "persist":"true"\n    }\n}\n')),(0,r.kt)("p",{parentName:"li"},"Response:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "failed": [\n            {\n                "config_name": "alter_table_timeout_second",\n                "node": "10.81.85.89:8837",\n                "err_info": "Unsupported configuration value type.",\n                "value": "true"\n            }\n        ]\n    },\n    "count": 0\n}\n\nagent_task_resend_wait_time_ms \u914d\u7f6e\u503c\u4fee\u6539\u6210\u529f\uff0calter_table_timeout_second \u4fee\u6539\u5931\u8d25\u3002\n')))))}m.isMDXComponent=!0}}]);