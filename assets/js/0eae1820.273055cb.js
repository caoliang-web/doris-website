"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[59156],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),a=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=a(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=a(t),d=i,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var a=2;a<o;a++)s[a]=t[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},69070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=t(87462),i=(t(67294),t(3905));const o={title:"instr",language:"en"},s=void 0,c={unversionedId:"sql-reference/sql-functions/string-functions/instr",id:"version-0.15/sql-reference/sql-functions/string-functions/instr",title:"instr",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-functions/string-functions/instr.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/instr",permalink:"/docs/0.15/sql-reference/sql-functions/string-functions/instr",draft:!1,tags:[],version:"0.15",frontMatter:{title:"instr",language:"en"},sidebar:"docs",previous:{title:"group_concat",permalink:"/docs/0.15/sql-reference/sql-functions/string-functions/group_concat"},next:{title:"lcase",permalink:"/docs/0.15/sql-reference/sql-functions/string-functions/lcase"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:a};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"instr"},"instr"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"INSTR (VARCHAR STR, VARCHAR substrate)")),(0,i.kt)("p",null,"Returns the location where substr first appeared in str (counting from 1). If substr does not appear in str, return 0."),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select instr(\"abc\", \"b\");\n+-------------------+\n| instr('abc', 'b') |\n+-------------------+\n|                 2 |\n+-------------------+\n\nmysql> select instr(\"abc\", \"d\");\n+-------------------+\n| instr('abc', 'd') |\n+-------------------+\n|                 0 |\n+-------------------+\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("p",null,"INSTR"))}p.isMDXComponent=!0}}]);