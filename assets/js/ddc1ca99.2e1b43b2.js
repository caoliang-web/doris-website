"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[28534],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>g});var t=n(67294);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,c=function(e,r){if(null==e)return{};var n,t,c={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(c[n]=e[n]);return c}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=t.createContext({}),i=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},s=function(e){var r=i(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,c=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=i(n),g=c,d=f["".concat(p,".").concat(g)]||f[g]||u[g]||l;return n?t.createElement(d,o(o({ref:r},s),{},{components:n})):t.createElement(d,o({ref:r},s))}));function g(e,r){var n=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var l=n.length,o=new Array(l);o[0]=f;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var i=2;i<l;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6745:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var t=n(87462),c=(n(67294),n(3905));const l={title:"regexp_replace",language:"en"},o=void 0,a={unversionedId:"sql-reference/sql-functions/string-functions/regexp/regexp_replace",id:"version-1.0/sql-reference/sql-functions/string-functions/regexp/regexp_replace",title:"regexp_replace",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-functions/string-functions/regexp/regexp_replace.md",sourceDirName:"sql-reference/sql-functions/string-functions/regexp",slug:"/sql-reference/sql-functions/string-functions/regexp/regexp_replace",permalink:"/docs/1.0/sql-reference/sql-functions/string-functions/regexp/regexp_replace",draft:!1,tags:[],version:"1.0",frontMatter:{title:"regexp_replace",language:"en"},sidebar:"docs",previous:{title:"regexp_extract",permalink:"/docs/1.0/sql-reference/sql-functions/string-functions/regexp/regexp_extract"},next:{title:"not regexp",permalink:"/docs/1.0/sql-reference/sql-functions/string-functions/regexp/not_regexp"}},p={},i=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],s={toc:i};function u(e){let{components:r,...n}=e;return(0,c.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"regexp_replace"},"regexp_replace"),(0,c.kt)("h2",{id:"description"},"description"),(0,c.kt)("h3",{id:"syntax"},"Syntax"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"VARCHAR regexp_replace(VARCHAR str, VARCHAR pattern, VARCHAR repl)")),(0,c.kt)("p",null,"Regular matching of STR strings, replacing the part hitting pattern with repl"),(0,c.kt)("h2",{id:"example"},"example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"mysql> SELECT regexp_replace('a b c', \" \", \"-\");\n+-----------------------------------+\n| regexp_replace('a b c', ' ', '-') |\n+-----------------------------------+\n| a-b-c                             |\n+-----------------------------------+\n\nmysql> SELECT regexp_replace('a b c','(b)','<\\\\1>');\n+----------------------------------------+\n| regexp_replace('a b c', '(b)', '<\\1>') |\n+----------------------------------------+\n| a <b> c                                |\n+----------------------------------------+\n")),(0,c.kt)("h2",{id:"keyword"},"keyword"),(0,c.kt)("p",null,"REGEXP_REPLACE,REGEXP,REPLACE"))}u.isMDXComponent=!0}}]);