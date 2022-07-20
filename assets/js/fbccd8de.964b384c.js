"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[53863],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(t),d=c,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function d(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(87462),c=(t(67294),t(3905));const o={title:"concat",language:"en"},a=void 0,i={unversionedId:"sql-reference/sql-functions/string-functions/concat",id:"version-1.0/sql-reference/sql-functions/string-functions/concat",title:"concat",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-functions/string-functions/concat.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/concat",permalink:"/docs/1.0/sql-reference/sql-functions/string-functions/concat",draft:!1,tags:[],version:"1.0",frontMatter:{title:"concat",language:"en"},sidebar:"docs",previous:{title:"CHAR_LENGTH",permalink:"/docs/1.0/sql-reference/sql-functions/string-functions/char_length"},next:{title:"Concat_ws",permalink:"/docs/1.0/sql-reference/sql-functions/string-functions/concat_ws"}},l={},s=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,c.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"concat"},"concat"),(0,c.kt)("h2",{id:"description"},"Description"),(0,c.kt)("h3",{id:"syntax"},"Syntax"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"VARCHAR concat (VARCHAR,...)")),(0,c.kt)("p",null,"Connect multiple strings and return NULL if any of the parameters is NULL"),(0,c.kt)("h2",{id:"example"},"example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"mysql> select concat(\"a\", \"b\");\n+------------------+\n| concat('a', 'b') |\n+------------------+\n| ab               |\n+------------------+\n\nmysql> select concat(\"a\", \"b\", \"c\");\n+-----------------------+\n| concat('a', 'b', 'c') |\n+-----------------------+\n| abc                   |\n+-----------------------+\n\nmysql> select concat(\"a\", null, \"c\");\n+------------------------+\n| concat('a', NULL, 'c') |\n+------------------------+\n| NULL                   |\n+------------------------+\n")),(0,c.kt)("h2",{id:"keyword"},"keyword"),(0,c.kt)("p",null,"CONCAT"))}p.isMDXComponent=!0}}]);