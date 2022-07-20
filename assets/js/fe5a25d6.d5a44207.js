"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[74649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"ADMIN CHECK TABLET",language:"en"},a=void 0,l={unversionedId:"sql-reference/sql-statements/Administration/ADMIN-CHECK-TABLET",id:"version-0.15/sql-reference/sql-statements/Administration/ADMIN-CHECK-TABLET",title:"ADMIN CHECK TABLET",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Administration/ADMIN-CHECK-TABLET.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN-CHECK-TABLET",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/ADMIN-CHECK-TABLET",draft:!1,tags:[],version:"0.15",frontMatter:{title:"ADMIN CHECK TABLET",language:"en"},sidebar:"docs",previous:{title:"ADMIN CLEAN TRASH",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/ADMIN-CLEAN-TRASH"},next:{title:"ADMIN REPAIR",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/ADMIN-REPAIR"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"admin-check-tablet"},"ADMIN CHECK TABLET"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("p",null,"This statement is used to perform a specified check operation on a list of tablets."),(0,o.kt)("p",null,"Syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ADMIN CHECK TABLE (tablet_id1, tablet_id2, ...)\nPROPERTIES("type" = "...");\n')),(0,o.kt)("p",null,"Note:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'You must specify the list of tablet ids and the "type" property in PROPERTIES.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Currently "type" only supports:'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'consistency: Check the consistency of the replicas of the tablet.\xa0This command is asynchronous. After sending, Doris will start to perform the consistency check job of the corresponding tablet. The final result will be reflected in the "InconsistentTabletNum" column in the result of `SHOW PROC" / statistic ";\n')))),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Perform a replica consistency check on a specified set of tablets"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'ADMIN CHECK TABLET (10000, 10001)\nPROPERTIES("type" = "consistency");\n')))),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ADMIN,CHECK,TABLET\n")))}m.isMDXComponent=!0}}]);