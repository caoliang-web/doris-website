"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[62757],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,_=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return t?r.createElement(_,c(c({ref:n},p),{},{components:t})):r.createElement(_,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},64047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={title:"append_trailing_char_if_absent",language:"en"},c=void 0,o={unversionedId:"sql-reference/sql-functions/string-functions/append_trailing_char_if_absent",id:"version-0.15/sql-reference/sql-functions/string-functions/append_trailing_char_if_absent",title:"append_trailing_char_if_absent",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-functions/string-functions/append_trailing_char_if_absent.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/append_trailing_char_if_absent",permalink:"/docs/0.15/sql-reference/sql-functions/string-functions/append_trailing_char_if_absent",draft:!1,tags:[],version:"0.15",frontMatter:{title:"append_trailing_char_if_absent",language:"en"},sidebar:"docs",previous:{title:"`ST_Y`",permalink:"/docs/0.15/sql-reference/sql-functions/spatial-functions/st_y"},next:{title:"ASCII",permalink:"/docs/0.15/sql-reference/sql-functions/string-functions/ascii"}},s={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:l};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"append_trailing_char_if_absent"},"append_trailing_char_if_absent"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR append_trailing_char_if_absent(VARCHAR str, VARCHAR trailing_char)")),(0,a.kt)("p",null,"If the @str string is non-empty and does not contain the @trailing_char character at the end, it appends the @trailing_char character to the end.\n@trailing_char contains only one character, and it will return NULL if contains more than one character"),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MySQL [test]> select append_trailing_char_if_absent('a','c');\n+------------------------------------------+\n| append_trailing_char_if_absent('a', 'c') |\n+------------------------------------------+\n| ac                                       |\n+------------------------------------------+\n1 row in set (0.02 sec)\n\nMySQL [test]> select append_trailing_char_if_absent('ac','c');\n+-------------------------------------------+\n| append_trailing_char_if_absent('ac', 'c') |\n+-------------------------------------------+\n| ac                                        |\n+-------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"APPEND_TRAILING_CHAR_IF_ABSENT"))}f.isMDXComponent=!0}}]);