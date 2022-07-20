"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[52023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const o={title:"ALTER CLUSTER",language:"en"},i=void 0,a={unversionedId:"sql-reference/sql-statements/Administration/ALTER-CLUSTER",id:"version-1.0/sql-reference/sql-statements/Administration/ALTER-CLUSTER",title:"ALTER CLUSTER",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Administration/ALTER-CLUSTER.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ALTER-CLUSTER",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/ALTER-CLUSTER",draft:!1,tags:[],version:"1.0",frontMatter:{title:"ALTER CLUSTER",language:"en"},sidebar:"docs",previous:{title:"ADMIN SHOW REPLICA STATUS",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/ADMIN-SHOW-REPLICA-STATUS"},next:{title:"ALTER SYSTEM",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/ALTER-SYSTEM"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"alter-cluster"},"ALTER CLUSTER"),(0,l.kt)("h2",{id:"description"},"description"),(0,l.kt)("p",null,"This statement is used to update the logical cluster. Administrator privileges are required"),(0,l.kt)("p",null,"grammar"),(0,l.kt)("p",null,'ALTER CLUSTER cluster_name PROPERTIES ("key"="value", ...);'),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Scaling, scaling (according to the number of be existing in the cluster, large is scaling, small is scaling), scaling for synchronous operation, scaling for asynchronous operation, through the state of backend can be known whether the scaling is completed. ")),(0,l.kt)("h2",{id:"example"},"example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Reduce the number of be of logical cluster test_cluster containing 3 be by 2.")),(0,l.kt)("p",null,'ALTER CLUSTER test_cluster PROPERTIES ("instance_num"="2");'),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Expansion, increase the number of be of logical cluster test_cluster containing 3 be to 4")),(0,l.kt)("p",null,'ALTER CLUSTER test_cluster PROPERTIES ("instance_num"="4");'),(0,l.kt)("h2",{id:"keyword"},"keyword"),(0,l.kt)("p",null,"ALTER,CLUSTER"))}p.isMDXComponent=!0}}]);