"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[20172],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=a(n),d=c,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,s[1]=i;for(var a=2;a<o;a++)s[a]=n[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=n(87462),c=(n(67294),n(3905));const o={title:"SM3",language:"en"},s=void 0,i={unversionedId:"sql-reference/sql-functions/encrypt-digest-functions/sm3",id:"version-1.0/sql-reference/sql-functions/encrypt-digest-functions/sm3",title:"SM3",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-functions/encrypt-digest-functions/sm3.md",sourceDirName:"sql-reference/sql-functions/encrypt-digest-functions",slug:"/sql-reference/sql-functions/encrypt-digest-functions/sm3",permalink:"/docs/1.0/sql-reference/sql-functions/encrypt-digest-functions/sm3",draft:!1,tags:[],version:"1.0",frontMatter:{title:"SM3",language:"en"},sidebar:"docs",previous:{title:"SM4",permalink:"/docs/1.0/sql-reference/sql-functions/encrypt-digest-functions/sm4"},next:{title:"SM3SUM",permalink:"/docs/1.0/sql-reference/sql-functions/encrypt-digest-functions/sm3sum"}},l={},a=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:a};function u(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"sm3"},"SM3"),(0,c.kt)("h2",{id:"description"},"description"),(0,c.kt)("p",null,"Calculates an SM3 256-bit checksum for the string"),(0,c.kt)("h3",{id:"syntax"},"Syntax"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"SM3(str)")),(0,c.kt)("h2",{id:"example"},"example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"MySQL > select sm3(\"abcd\");\n+------------------------------------------------------------------+\n| sm3('abcd')                                                      |\n+------------------------------------------------------------------+\n| 82ec580fe6d36ae4f81cae3c73f4a5b3b5a09c943172dc9053c69fd8e18dca1e |\n+------------------------------------------------------------------+\n1 row in set (0.009 sec)\n")),(0,c.kt)("h2",{id:"keyword"},"keyword"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"SM3\n")))}u.isMDXComponent=!0}}]);