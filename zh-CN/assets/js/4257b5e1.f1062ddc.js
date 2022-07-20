"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[48388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW ENCRYPTKEYS",language:"zh-CN"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Definition/SHOW-ENCRYPTKEYS",id:"version-0.15/sql-reference/sql-statements/Data-Definition/SHOW-ENCRYPTKEYS",title:"SHOW ENCRYPTKEYS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Definition/SHOW-ENCRYPTKEYS.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/SHOW-ENCRYPTKEYS",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/SHOW-ENCRYPTKEYS",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW ENCRYPTKEYS",language:"zh-CN"},sidebar:"docs",previous:{title:"RESTORE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/RESTORE"},next:{title:"TRUNCATE TABLE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/TRUNCATE-TABLE"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-encryptkeys"},"SHOW ENCRYPTKEYS"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW ENCRYPTKEYS [IN|FROM db] [LIKE 'key_pattern']\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"db"),": \u8981\u67e5\u8be2\u7684\u6570\u636e\u5e93\u540d\u5b57\n",(0,a.kt)("inlineCode",{parentName:"p"},"key_pattern"),": \u7528\u6765\u8fc7\u6ee4\u5bc6\u94a5\u540d\u79f0\u7684\u53c2\u6570  ")),(0,a.kt)("p",null,"\u67e5\u770b\u6570\u636e\u5e93\u4e0b\u6240\u6709\u7684\u81ea\u5b9a\u4e49\u7684\u5bc6\u94a5\u3002\u5982\u679c\u7528\u6237\u6307\u5b9a\u4e86\u6570\u636e\u5e93\uff0c\u90a3\u4e48\u67e5\u770b\u5bf9\u5e94\u6570\u636e\u5e93\u7684\uff0c\u5426\u5219\u76f4\u63a5\u67e5\u8be2\u5f53\u524d\u4f1a\u8bdd\u6240\u5728\u6570\u636e\u5e93\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u5bf9\u8fd9\u4e2a\u6570\u636e\u5e93\u62e5\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"ADMIN")," \u6743\u9650"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```\nmysql> SHOW ENCRYPTKEYS;\n+-------------------+-------------------+\n| EncryptKey Name   | EncryptKey String |\n+-------------------+-------------------+\n| example_db.my_key | ABCD123456789     |\n+-------------------+-------------------+\n1 row in set (0.00 sec)\n\nmysql> SHOW ENCRYPTKEYS FROM example_db LIKE "%my%";\n+-------------------+-------------------+\n| EncryptKey Name   | EncryptKey String |\n+-------------------+-------------------+\n| example_db.my_key | ABCD123456789     |\n+-------------------+-------------------+\n1 row in set (0.00 sec)\n```\n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW,ENCRYPTKEYS\n")))}u.isMDXComponent=!0}}]);