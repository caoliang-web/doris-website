"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[60819],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=s,b=f["".concat(a,".").concat(d)]||f[d]||u[d]||i;return t?r.createElement(b,o(o({ref:n},p),{},{components:t})):r.createElement(b,o({ref:n},p))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},69443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const i={title:"substring",language:"zh-CN"},o=void 0,l={unversionedId:"sql-reference/sql-functions/string-functions/substring",id:"version-1.0/sql-reference/sql-functions/string-functions/substring",title:"substring",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-functions/string-functions/substring.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/substring",permalink:"/zh-CN/docs/1.0/sql-reference/sql-functions/string-functions/substring",draft:!1,tags:[],version:"1.0",frontMatter:{title:"substring",language:"zh-CN"},sidebar:"docs",previous:{title:"strright",permalink:"/zh-CN/docs/1.0/sql-reference/sql-functions/string-functions/strright"},next:{title:"unhex",permalink:"/zh-CN/docs/1.0/sql-reference/sql-functions/string-functions/unhex"}},a={},c=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"substring"},"substring"),(0,s.kt)("h2",{id:"description"},"description"),(0,s.kt)("h3",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"VARCHAR substring(VARCHAR str, INT pos[, INT len])")),(0,s.kt)("p",null,"\u6ca1\u6709 ",(0,s.kt)("inlineCode",{parentName:"p"},"len")," \u53c2\u6570\u65f6\u8fd4\u56de\u4ece\u4f4d\u7f6e ",(0,s.kt)("inlineCode",{parentName:"p"},"pos")," \u5f00\u59cb\u7684\u5b57\u7b26\u4e32 ",(0,s.kt)("inlineCode",{parentName:"p"},"str")," \u7684\u4e00\u4e2a\u5b50\u5b57\u7b26\u4e32\uff0c\n\u5728\u6709 ",(0,s.kt)("inlineCode",{parentName:"p"},"len")," \u53c2\u6570\u65f6\u8fd4\u56de\u4ece\u4f4d\u7f6e ",(0,s.kt)("inlineCode",{parentName:"p"},"pos")," \u5f00\u59cb\u7684\u5b57\u7b26\u4e32 ",(0,s.kt)("inlineCode",{parentName:"p"},"str")," \u7684\u4e00\u4e2a\u957f\u5ea6\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"len")," \u5b50\u5b57\u7b26\u4e32\uff0c\n",(0,s.kt)("inlineCode",{parentName:"p"},"pos")," \u53c2\u6570\u53ef\u4ee5\u4f7f\u7528\u8d1f\u503c\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5b50\u5b57\u7b26\u4e32\u662f\u4ee5\u5b57\u7b26\u4e32 ",(0,s.kt)("inlineCode",{parentName:"p"},"str")," \u672b\u5c3e\u5f00\u59cb\u8ba1\u7b97 ",(0,s.kt)("inlineCode",{parentName:"p"},"pos")," \u4e2a\u5b57\u7b26\uff0c\u800c\u4e0d\u662f\u5f00\u5934,\n",(0,s.kt)("inlineCode",{parentName:"p"},"pos")," \u7684\u503c\u4e3a 0 \u8fd4\u56de\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,s.kt)("p",null,"\u5bf9\u4e8e\u6240\u6709\u5f62\u5f0f\u7684 SUBSTRING()\uff0c\u8981\u4ece\u4e2d\u63d0\u53d6\u5b50\u5b57\u7b26\u4e32\u7684\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684\u4f4d\u7f6e\u4e3a1\u3002"),(0,s.kt)("h2",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mysql> select substring('abc1', -2);\n+-----------------------------+\n| substring('abc1', 2)        |\n+-----------------------------+\n| bc1                         |\n+-----------------------------+\n\nmysql> select substring('abc1', -2);\n+-----------------------------+\n| substring('abc1', -2)       |\n+-----------------------------+\n| c1                          |\n+-----------------------------+\n\nmysql> select substring('abc1', 5);\n+-----------------------------+\n| substring('abc1', 5)        |\n+-----------------------------+\n| NULL                        |\n+-----------------------------+\n\nmysql> select substring('abc1def', 2, 2);\n+-----------------------------+\n| substring('abc1def', 2, 2)  |\n+-----------------------------+\n| bc                          |\n+-----------------------------+\n")),(0,s.kt)("h2",{id:"keyword"},"keyword"),(0,s.kt)("p",null,"SUBSTRING"))}u.isMDXComponent=!0}}]);