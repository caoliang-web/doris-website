"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[11826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW CREATE FUNCTION",language:"en"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-FUNCTION",id:"version-1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-FUNCTION",title:"SHOW CREATE FUNCTION",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-FUNCTION.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-FUNCTION",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-FUNCTION",draft:!1,tags:[],version:"1.0",frontMatter:{title:"SHOW CREATE FUNCTION",language:"en"},sidebar:"docs",previous:{title:"SHOW BACKUP",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-BACKUP"},next:{title:"SHOW CREATE ROUTINE LOAD",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-ROUTINE-LOAD"}},c={},s=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-create-function"},"SHOW CREATE FUNCTION"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The statement is used to show the creation statement of user-defined function\ngrammar:\n    SHOW CREATE FUNTION function_name(arg_type [, ...]) [FROM db_name]];\n    \nDescription:\n   `function_name`: the name of the function to be displayed\n   `arg_type`: the parameter list of the function to be displayed\n   If you do not specify db_name, use the current default db\n    \n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. Show the creation statement of the specified function under the default db\n    SHOW CREATE FUNCTION my_add(INT, INT)\n     \n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW,CREATE,FUNCTION\n")))}u.isMDXComponent=!0}}]);