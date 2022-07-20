"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[64840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=c,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5535:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),c=(r(67294),r(3905));const a={title:"CHECK/RESET Stub Cache",language:"zh-CN"},o=void 0,i={unversionedId:"administrator-guide/http-actions/check-reset-rpc-cache",id:"version-1.0/administrator-guide/http-actions/check-reset-rpc-cache",title:"CHECK/RESET Stub Cache",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/administrator-guide/http-actions/check-reset-rpc-cache.md",sourceDirName:"administrator-guide/http-actions",slug:"/administrator-guide/http-actions/check-reset-rpc-cache",permalink:"/docs/1.0/administrator-guide/http-actions/check-reset-rpc-cache",draft:!1,tags:[],version:"1.0",frontMatter:{title:"CHECK/RESET Stub Cache",language:"zh-CN"},sidebar:"docs",previous:{title:"CANCEL LABEL",permalink:"/docs/1.0/administrator-guide/http-actions/cancel-label"},next:{title:"Compaction Action",permalink:"/docs/1.0/administrator-guide/http-actions/compaction-action"}},p={},s=[{value:"description",id:"description",level:2},{value:"Check Stub Cache",id:"check-stub-cache",level:3},{value:"Reset Stub Cache",id:"reset-stub-cache",level:3},{value:"example",id:"example",level:2}],l={toc:s};function h(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"checkreset-stub-cache"},"CHECK/RESET Stub Cache"),(0,c.kt)("h2",{id:"description"},"description"),(0,c.kt)("h3",{id:"check-stub-cache"},"Check Stub Cache"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Check whether the connection cache is available\n\nDescription: Check whether the connection cache is available, the maximum load is 10M\nMETHOD: GET\nURI: http://be_host:be_http_port/api/check_rpc_channel/{host_to_check}/{remot_brpc_port}/{payload_size}\n")),(0,c.kt)("h3",{id:"reset-stub-cache"},"Reset Stub Cache"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"This api is used to reset the connection cache of brpc. Endpoints can be in the form of `all` to clear all caches, `host1:port1,host2:port2,...`: clear to the cache of the specified target\n\nDescription: Reset connection cache\nMETHOD: GET\nURI: http://be_host:be_http_port/api/reset_rpc_channel/{endpoints}\n")),(0,c.kt)("h2",{id:"example"},"example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'curl -X GET "http://host:port/api/check_rpc_channel/host2/8060/1024000"\ncurl -X GET "http://host:port/api/reset_rpc_channel/all"\n')))}h.isMDXComponent=!0}}]);