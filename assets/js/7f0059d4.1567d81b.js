"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[93935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Bootstrap Action",language:"en"},i=void 0,p={unversionedId:"administrator-guide/http-actions/fe/bootstrap-action",id:"version-0.15/administrator-guide/http-actions/fe/bootstrap-action",title:"Bootstrap Action",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/http-actions/fe/bootstrap-action.md",sourceDirName:"administrator-guide/http-actions/fe",slug:"/administrator-guide/http-actions/fe/bootstrap-action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/bootstrap-action",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Bootstrap Action",language:"en"},sidebar:"docs",previous:{title:"Query Profile Action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/manager/query-profile-action"},next:{title:"Cancel Load Action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/cancel-load-action"}},l={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bootstrap-action"},"Bootstrap Action"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/bootstrap")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"It is used to judge whether the FE has started. When no parameters are provided, only whether the startup is successful is returned. If ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster_id")," are provided, more detailed information is returned."),(0,a.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,a.kt)("p",null,"none"),(0,a.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cluster_id")),(0,a.kt)("p",{parentName:"li"},"  The cluster id. It can be viewed in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"palo-meta/image/VERSION"),".\n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"token")),(0,a.kt)("p",{parentName:"li"},"  Cluster token. It can be viewed in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"palo-meta/image/VERSION"),"."))),(0,a.kt)("h2",{id:"request-body"},"Request body"),(0,a.kt)("p",null,"none"),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No parameters provided"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')),(0,a.kt)("p",{parentName:"li"},"  A code of 0 means that the FE node has started successfully. Error codes other than 0 indicate other errors.\n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Provide ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster_id")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "queryPort": 9030,\n        "rpcPort": 9020,\n        "maxReplayedJournal": 17287\n    },\n    "count": 0\n}\n')),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"queryPort")," is the MySQL protocol port of the FE node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rpcPort")," is the thrift RPC port of the FE node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxReplayedJournal")," represents the maximum metadata journal id currently played back by the FE node.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"No parameters"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'GET /api/bootstrap\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provide ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster_id")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'GET /api/bootstrap?cluster_id=935437471&token=ad87f6dd-c93f-4880-bcdb-8ca8c9ab3031\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "queryPort": 9030,\n        "rpcPort": 9020,\n        "maxReplayedJournal": 17287\n    },\n    "count": 0\n}\n')))))}c.isMDXComponent=!0}}]);