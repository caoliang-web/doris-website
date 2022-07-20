"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[10781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"DROP FILE",language:"en"},a=void 0,l={unversionedId:"sql-reference/sql-statements/Administration/DROP-FILE",id:"version-1.0/sql-reference/sql-statements/Administration/DROP-FILE",title:"DROP FILE",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Administration/DROP-FILE.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/DROP-FILE",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/DROP-FILE",draft:!1,tags:[],version:"1.0",frontMatter:{title:"DROP FILE",language:"en"},sidebar:"docs",previous:{title:"DROP CLUSTER",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/DROP-CLUSTER"},next:{title:"ENTER",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/ENTER"}},s={},c=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"drop-file"},"DROP FILE"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This statement is used to delete an uploaded file."),(0,i.kt)("p",null,"Grammar:"),(0,i.kt)("p",null,'DROP FILE "file_name" ',"[FROM database][properties]"),(0,i.kt)("p",null,"Explain:\nFile_name: File name.\nDatabase: A DB to which the file belongs, if not specified, uses the DB of the current session.\nproperties \u652f\u6301\u4ee5\u4e0b\u53c2\u6570:"),(0,i.kt)("p",null,"Catalog: Yes. Classification of documents."),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Delete the file ca.pem")),(0,i.kt)("p",null,'DROP FILE "ca.pem" properties("catalog" = "kafka");'),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("p",null,"DROP,FILE"))}u.isMDXComponent=!0}}]);