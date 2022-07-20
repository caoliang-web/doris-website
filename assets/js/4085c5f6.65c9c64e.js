"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[63113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),E=c(n),m=a,d=E["".concat(i,".").concat(m)]||E[m]||p[m]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=E;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},20574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"CREATE USER",language:"en"},s=void 0,l={unversionedId:"sql-reference/sql-statements/Account-Management/CREATE-USER",id:"version-1.0/sql-reference/sql-statements/Account-Management/CREATE-USER",title:"CREATE USER",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Account-Management/CREATE-USER.md",sourceDirName:"sql-reference/sql-statements/Account-Management",slug:"/sql-reference/sql-statements/Account-Management/CREATE-USER",permalink:"/docs/1.0/sql-reference/sql-statements/Account-Management/CREATE-USER",draft:!1,tags:[],version:"1.0",frontMatter:{title:"CREATE USER",language:"en"},sidebar:"docs",previous:{title:"CREATE ROLE",permalink:"/docs/1.0/sql-reference/sql-statements/Account-Management/CREATE-ROLE"},next:{title:"DROP ROLE",permalink:"/docs/1.0/sql-reference/sql-statements/Account-Management/DROP-ROLE"}},i={},c=[{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-user"},"CREATE USER"),(0,a.kt)("p",null,"##Description"),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("p",null,"CREATE USER user_identity ","[IDENTIFIED BY 'password'][DEFAULT ROLE 'role_name']"),(0,a.kt)("p",null,"user_identity:\n'user_name'@'host'"),(0,a.kt)("p",null,"The CREATE USER command is used to create a Doris user. In Doris, a user_identity uniquely identifies a user. User_identity consists of two parts, user_name and host, where username is the user name. The host identifies the host address where the client connects. The host part can use% for fuzzy matching. If no host is specified, the default is'%', which means that the user can connect to Doris from any host."),(0,a.kt)("p",null,"The host part can also be specified as a domain with the grammar:'user_name'@","['domain']",". Even if surrounded by brackets, Doris will think of it as a domain and try to parse its IP address. At present, it only supports BNS analysis within Baidu."),(0,a.kt)("p",null,"If a role (ROLE) is specified, the permissions that the role has are automatically granted to the newly created user. If not specified, the user defaults to having no permissions. The specified ROLE must already exist."),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a passwordless user (without specifying host, it is equivalent to Jack @'%')")),(0,a.kt)("p",null,"CREATE USER 'jack';"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create a password user that allows login from'172.10.1.10'")),(0,a.kt)("p",null,"CREATE USER jack@'172.10.1.10' IDENTIFIED BY '123456';"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"To avoid passing plaintext, use case 2 can also be created in the following way")),(0,a.kt)("p",null,"CREATE USER jack@'172.10.1.10' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';"),(0,a.kt)("p",null,"Later encrypted content can be obtained through PASSWORD (), for example:"),(0,a.kt)("p",null,"SELECT PASSWORD('123456');"),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Create a user who is allowed to log in from the ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168")," subnet and specify its role as example_role")),(0,a.kt)("p",null,"CREATE USER 'jack'@'192.168.%' DEFAULT ROLE 'example_role';"),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Create a user who is allowed to log in from the domain name 'example_domain'.")),(0,a.kt)("p",null,"CREATE USER 'jack'@","['example_domain']"," IDENTIFIED BY '12345';"),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Create a user and specify a role")),(0,a.kt)("p",null,"CREATE USER 'jack'@'%' IDENTIFIED BY '12345' DEFAULT ROLE 'my_role';"),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"CREATE, USER"))}p.isMDXComponent=!0}}]);