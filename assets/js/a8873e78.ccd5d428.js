"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[23083],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>A});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),A=a,m=d["".concat(l,".").concat(A)]||d[A]||u[A]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function A(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"MIGRATE DATABASE",language:"en"},s=void 0,i={unversionedId:"sql-reference/sql-statements/Administration/MIGRATE-DATABASE",id:"version-1.0/sql-reference/sql-statements/Administration/MIGRATE-DATABASE",title:"MIGRATE DATABASE",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Administration/MIGRATE-DATABASE.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/MIGRATE-DATABASE",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/MIGRATE-DATABASE",draft:!1,tags:[],version:"1.0",frontMatter:{title:"MIGRATE DATABASE",language:"en"},sidebar:"docs",previous:{title:"LINK DATABASE",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/LINK-DATABASE"},next:{title:"SET LDAP_ADMIN_PASSWORD",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/SET-LDAP-ADMIN-PASSWORD"}},l={},c=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrate-database"},"MIGRATE DATABASE"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to migrate a logical cluster database to another logical cluster. Before performing this operation, the database must be in a link state and need to be managed."),(0,a.kt)("p",null,"Membership authority"),(0,a.kt)("p",null,"grammar"),(0,a.kt)("p",null,"MIGRATE DATABASE src u cluster name.src db name of the cluster name.des db name"),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8fc1\u79fbtest_clusterA\u4e2d\u7684test_db\u5230test_clusterB")),(0,a.kt)("p",null,"MIGRATE DATABASE test_clusterA.test_db test_clusterB.link_test_db;"),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"MIGRATE,DATABASE"))}u.isMDXComponent=!0}}]);