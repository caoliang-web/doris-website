"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[3194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"DECIMAL",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/DECIMAL",id:"sql-manual/sql-reference/Data-Types/DECIMAL",title:"DECIMAL",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Types/DECIMAL.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DECIMAL",permalink:"/docs/sql-manual/sql-reference/Data-Types/DECIMAL",draft:!1,tags:[],version:"current",frontMatter:{title:"DECIMAL",language:"en"},sidebar:"docs",previous:{title:"DATETIME",permalink:"/docs/sql-manual/sql-reference/Data-Types/DATETIME"},next:{title:"DOUBLE",permalink:"/docs/sql-manual/sql-reference/Data-Types/DOUBLE"}},s={},c=[{value:"DECIMAL",id:"decimal",level:2},{value:"Description",id:"description",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"decimal"},"DECIMAL"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"DECIMAL (M ","[,D]",")"),(0,a.kt)("p",null,"High-precision fixed-point, M stands for the total number of significant numbers (precision), D stands for the maximum number of decimal points (scale).\nThe range of M is ","[1, 27]",", the range of D is ","[0, 9]",", the integer part is ","[1, 18]","."),(0,a.kt)("p",null,"in addition, M must be greater than or equal to the value of D. "),(0,a.kt)("p",null,"The default value is DECIMAL(9, 0)."),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"DECIMAL"))}u.isMDXComponent=!0}}]);