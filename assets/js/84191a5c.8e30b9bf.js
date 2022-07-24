"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[50092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"GET TABLETS ON A PARTICULAR BE",language:"en"},o=void 0,i={unversionedId:"admin-manual/http-actions/get-tablets",id:"admin-manual/http-actions/get-tablets",title:"GET TABLETS ON A PARTICULAR BE",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/get-tablets.md",sourceDirName:"admin-manual/http-actions",slug:"/admin-manual/http-actions/get-tablets",permalink:"/docs/admin-manual/http-actions/get-tablets",draft:!1,tags:[],version:"current",frontMatter:{title:"GET TABLETS ON A PARTICULAR BE",language:"en"},sidebar:"docs",previous:{title:"GET LABEL STATE",permalink:"/docs/admin-manual/http-actions/get-load-state"},next:{title:"PROFILE",permalink:"/docs/admin-manual/http-actions/profile-action"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-tablets-on-a-particular-be"},"GET TABLETS ON A PARTICULAR BE"),(0,a.kt)("p",null,"Get the tablet id and schema hash for a certain number of tablets on a particular BE node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/tablets_page?limit=XXXXX\n")),(0,a.kt)("p",null,'The return is the tablet id and schema hash for a certain number of tablets on the BE node. The data is returned as a rendered Web page. The number of returned tablets is determined by the parameter limit. If parameter limit does not exist, none tablet will be returned. if the value of parameter limit is "all", all the tablets on the BE node will be returned. if the value of parameter limit is non-numeric type other than "all", none tablet will be returned.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/tablets_json?limit=XXXXX\n")),(0,a.kt)("p",null,'The return is the tablet id and schema hash for a certain number of tablets on the BE node. The returned data is organized as a Json object. The number of returned tablets is determined by the parameter limit. If parameter limit does not exist, none tablet will be returned. if the value of parameter limit is "all", all the tablets on the BE node will be returned. if the value of parameter limit is non-numeric type other than "all", none tablet will be returned.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "10.38.157.107",\n        tablets: [\n            {\n                tablet_id: 11119,\n                schema_hash: 714349777\n            },\n\n                ...\n\n            {\n                tablet_id: 11063,\n                schema_hash: 714349777\n            }\n        ]\n    },\n    count: 30\n}\n')))}u.isMDXComponent=!0}}]);