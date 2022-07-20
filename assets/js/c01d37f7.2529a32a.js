"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[69093],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,f=c["".concat(o,".").concat(m)]||c[m]||s[m]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9397:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Upload Action",language:"en"},i=void 0,p={unversionedId:"administrator-guide/http-actions/fe/upload-action",id:"version-1.0/administrator-guide/http-actions/fe/upload-action",title:"Upload Action",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/administrator-guide/http-actions/fe/upload-action.md",sourceDirName:"administrator-guide/http-actions/fe",slug:"/administrator-guide/http-actions/fe/upload-action",permalink:"/docs/1.0/administrator-guide/http-actions/fe/upload-action",draft:!1,tags:[],version:"1.0",frontMatter:{title:"Upload Action",language:"en"},sidebar:"docs",previous:{title:"Table Schema Action",permalink:"/docs/1.0/administrator-guide/http-actions/fe/table-schema-action"},next:{title:"CANCEL LABEL",permalink:"/docs/1.0/administrator-guide/http-actions/cancel-label"}},o={},d=[{value:"Upload load file",id:"upload-load-file",level:2},{value:"Request",id:"request",level:3},{value:"Path parameters",id:"path-parameters",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"Load the uploaded file",id:"load-the-uploaded-file",level:2},{value:"Request",id:"request-1",level:3},{value:"Path parameters",id:"path-parameters-1",level:3},{value:"Query parameters",id:"query-parameters-1",level:3},{value:"Header",id:"header",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Example",id:"example",level:3}],u={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upload-action"},"Upload Action"),(0,r.kt)("p",null,"Upload Action currently mainly serves the front-end page of FE, and is used for users to load small test files."),(0,r.kt)("h2",{id:"upload-load-file"},"Upload load file"),(0,r.kt)("p",null,"Used to upload a file to the FE node, which can be used to load the file later. Currently only supports uploading files up to 100MB."),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /api/<namespace>/<db>/<tbl>/upload\n")),(0,r.kt)("h3",{id:"path-parameters"},"Path parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<namespace>")),(0,r.kt)("p",{parentName:"li"},"  Namespace, currently only supports ",(0,r.kt)("inlineCode",{parentName:"p"},"default_cluster"),"\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<db>")),(0,r.kt)("p",{parentName:"li"},"  Specify database\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<tbl>")),(0,r.kt)("p",{parentName:"li"},"  Specify table"))),(0,r.kt)("h3",{id:"query-parameters"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"column_separator")),(0,r.kt)("p",{parentName:"li"},"  Optional, specify the column separator of the file. Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"\\t"),"\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"preview")),(0,r.kt)("p",{parentName:"li"},"  Optional, if set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", up to 10 rows of data rows split according to ",(0,r.kt)("inlineCode",{parentName:"p"},"column_separator")," will be displayed in the returned result."))),(0,r.kt)("h3",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"The content of the file to be uploaded, the Content-type is ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/form-data")),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "id": 1,\n        "uuid": "b87824a4-f6fd-42c9-b9f1-c6d68c5964c2",\n        "originFileName": "data.txt",\n        "fileSize": 102400,\n        "absPath": "/path/to/file/data.txt"\n        "maxColNum" : 5\n    },\n    "count": 1\n}\n')),(0,r.kt)("h2",{id:"load-the-uploaded-file"},"Load the uploaded file"),(0,r.kt)("h3",{id:"request-1"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT /api/<namespace>/<db>/<tbl>/upload\n")),(0,r.kt)("h3",{id:"path-parameters-1"},"Path parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<namespace>")),(0,r.kt)("p",{parentName:"li"},"  Namespace, currently only supports ",(0,r.kt)("inlineCode",{parentName:"p"},"default_cluster"),"\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<db>")),(0,r.kt)("p",{parentName:"li"},"  Specify database\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<tbl>")),(0,r.kt)("p",{parentName:"li"},"  Specify table"))),(0,r.kt)("h3",{id:"query-parameters-1"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"file_id")),(0,r.kt)("p",{parentName:"li"},"  Specify the load file id, which is returned by the API that uploads the file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"file_uuid")),(0,r.kt)("p",{parentName:"li"},"  Specify the file uuid, which is returned by the API that uploads the file.\n"))),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("p",null,"The options in the header are the same as those in the header in the Stream Load request."),(0,r.kt)("h3",{id:"request-body-1"},"Request body"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"response-1"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "TxnId": 7009,\n        "Label": "9dbdfb0a-120b-47a2-b078-4531498727cb",\n        "Status": "Success",\n        "Message": "OK",\n        "NumberTotalRows": 3,\n        "NumberLoadedRows": 3,\n        "NumberFilteredRows": 0,\n        "NumberUnselectedRows": 0,\n        "LoadBytes": 12,\n        "LoadTimeMs": 71,\n        "BeginTxnTimeMs": 0,\n        "StreamLoadPutTimeMs": 1,\n        "ReadDataTimeMs": 0,\n        "WriteDataTimeMs": 13,\n        "CommitAndPublishTimeMs": 53\n    },\n    "count": 1\n}\n')),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT /api/default_cluster/db1/tbl1/upload?file_id=1&file_uuid=b87824a4-f6fd-42c9-b9f1-c6d68c5964c2\n")))}s.isMDXComponent=!0}}]);