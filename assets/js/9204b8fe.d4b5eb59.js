"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[67259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),a=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=a(n),d=o,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var a=2;a<i;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var r=n(87462),o=(n(67294),n(3905));const i={title:"bitnot",language:"en"},l=void 0,s={unversionedId:"sql-reference/sql-functions/bitwise-functions/bitnot",id:"version-1.0/sql-reference/sql-functions/bitwise-functions/bitnot",title:"bitnot",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-functions/bitwise-functions/bitnot.md",sourceDirName:"sql-reference/sql-functions/bitwise-functions",slug:"/sql-reference/sql-functions/bitwise-functions/bitnot",permalink:"/docs/1.0/sql-reference/sql-functions/bitwise-functions/bitnot",draft:!1,tags:[],version:"1.0",frontMatter:{title:"bitnot",language:"en"},sidebar:"docs",previous:{title:"bitxor",permalink:"/docs/1.0/sql-reference/sql-functions/bitwise-functions/bitxor"},next:{title:"get_json_double",permalink:"/docs/1.0/sql-reference/sql-functions/json-functions/get_json_double"}},c={},a=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:a};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bitnot"},"bitnot"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BITNOT(Integer-type value)")),(0,o.kt)("p",null,"Returns the result of the NOT operation of one integer."),(0,o.kt)("p",null,"Integer range: TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select bitnot(7) ans;\n+------+\n| ans  |\n+------+\n|   -8 |\n+------+\n\nmysql> select bitxor(-127) ans;\n+------+\n| ans  |\n+------+\n|  126 |\n+------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"BITNOT\n")))}p.isMDXComponent=!0}}]);