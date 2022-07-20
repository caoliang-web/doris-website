"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[61074],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>p});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),m=s(t),p=o,y=m["".concat(c,".").concat(p)]||m[p]||u[p]||l;return t?r.createElement(y,i(i({ref:n},f),{},{components:t})):r.createElement(y,i({ref:n},f))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97967:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const l={title:"money_format",language:"zh-CN"},i=void 0,a={unversionedId:"sql-reference/sql-functions/string-functions/money_format",id:"version-0.15/sql-reference/sql-functions/string-functions/money_format",title:"money_format",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/string-functions/money_format.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/money_format",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/money_format",draft:!1,tags:[],version:"0.15",frontMatter:{title:"money_format",language:"zh-CN"},sidebar:"docs",previous:{title:"ltrim",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/ltrim"},next:{title:"null_or_empty",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/null_or_empty"}},c={},s=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],f={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"money_format"},"money_format"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR money_format(Number)")),(0,o.kt)("p",null,"\u5c06\u6570\u5b57\u6309\u7167\u8d27\u5e01\u683c\u5f0f\u8f93\u51fa\uff0c\u6574\u6570\u90e8\u5206\u6bcf\u96943\u4f4d\u7528\u9017\u53f7\u5206\u9694\uff0c\u5c0f\u6570\u90e8\u5206\u4fdd\u75592\u4f4d"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select money_format(17014116);\n+------------------------+\n| money_format(17014116) |\n+------------------------+\n| 17,014,116.00          |\n+------------------------+\n\nmysql> select money_format(1123.456);\n+------------------------+\n| money_format(1123.456) |\n+------------------------+\n| 1,123.46               |\n+------------------------+\n\nmysql> select money_format(1123.4);\n+----------------------+\n| money_format(1123.4) |\n+----------------------+\n| 1,123.40             |\n+----------------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"MONEY_FORMAT,MONEY,FORMAT"))}u.isMDXComponent=!0}}]);