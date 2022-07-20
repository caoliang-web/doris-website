"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[94186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"REVOKE",language:"en"},i=void 0,s={unversionedId:"sql-reference/sql-statements/Account-Management/REVOKE",id:"version-0.15/sql-reference/sql-statements/Account-Management/REVOKE",title:"REVOKE",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Account-Management/REVOKE.md",sourceDirName:"sql-reference/sql-statements/Account-Management",slug:"/sql-reference/sql-statements/Account-Management/REVOKE",permalink:"/docs/0.15/sql-reference/sql-statements/Account-Management/REVOKE",draft:!1,tags:[],version:"0.15",frontMatter:{title:"REVOKE",language:"en"},sidebar:"docs",previous:{title:"Grant",permalink:"/docs/0.15/sql-reference/sql-statements/Account-Management/GRANT"},next:{title:"SET PASSWORD",permalink:"/docs/0.15/sql-reference/sql-statements/Account-Management/SET-PASSWORD"}},l={},c=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"revoke"},"REVOKE"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The REVOKE command is used to revoke the rights specified by the specified user or role.\nSyntax\nREVOKE privilege_list ON db_name","[.tbl_name]"," FROM user_identity ","[ROLE role_name]"),(0,o.kt)("p",null,"user_identity:"),(0,o.kt)("p",null,"The user_identity syntax here is the same as CREATE USER. And you must create user_identity for the user using CREATE USER. The host in user_identity can be a domain name. If it is a domain name, the revocation time of permission may be delayed by about one minute."),(0,o.kt)("p",null,"You can also revoke the permission of the specified ROLE, which must exist for execution."),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Revoke the rights of user Jack database testDb")),(0,o.kt)("p",null,"REVOKE SELECT_PRIV ON db1.* FROM 'jack'@'192.%';"),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"REVOKE"))}p.isMDXComponent=!0}}]);