"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[28072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},E={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,C=m["".concat(p,".").concat(u)]||m[u]||E[u]||l;return n?r.createElement(C,i(i({ref:t},s),{},{components:n})):r.createElement(C,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>E,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"CREATE-ENCRYPT-KEY",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",title:"CREATE-ENCRYPT-KEY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-ENCRYPT-KEY",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-DATABASE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE"},next:{title:"CREATE-FILE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"}},p={},c=[{value:"CREATE-ENCRYPTKEY",id:"create-encryptkey",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:c};function E(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-encryptkey"},"CREATE-ENCRYPTKEY"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"CREATE ENCRYPTKEY"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u6b64\u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5bc6\u94a5\u3002\u6267\u884c\u6b64\u547d\u4ee4\u9700\u8981\u7528\u6237\u62e5\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"ADMIN")," \u6743\u9650\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ENCRYPTKEY key_name AS "key_string"\n')),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"key_name"),": \u8981\u521b\u5efa\u5bc6\u94a5\u7684\u540d\u5b57, \u53ef\u4ee5\u5305\u542b\u6570\u636e\u5e93\u7684\u540d\u5b57\u3002\u6bd4\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"db1.my_key"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"key_string"),": \u8981\u521b\u5efa\u5bc6\u94a5\u7684\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"key_name")," \u4e2d\u5305\u542b\u4e86\u6570\u636e\u5e93\u540d\u5b57\uff0c\u90a3\u4e48\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u5bc6\u94a5\u4f1a\u521b\u5efa\u5728\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u4e2d\uff0c\u5426\u5219\u8fd9\u4e2a\u51fd\u6570\u5c06\u4f1a\u521b\u5efa\u5728\u5f53\u524d\u4f1a\u8bdd\u6240\u5728\u7684\u6570\u636e\u5e93\u3002\u65b0\u5bc6\u94a5\u7684\u540d\u5b57\u4e0d\u80fd\u591f\u4e0e\u5bf9\u5e94\u6570\u636e\u5e93\u4e2d\u5df2\u5b58\u5728\u7684\u5bc6\u94a5\u76f8\u540c\uff0c\u5426\u5219\u4f1a\u521b\u5efa\u5931\u8d25\u3002"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5bc6\u94a5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ENCRYPTKEY my_key AS "ABCD123456789";\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bc6\u94a5"),(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bc6\u94a5\u9700\u5728\u5bc6\u94a5\u524d\u6dfb\u52a0\u5173\u952e\u5b57 ",(0,a.kt)("inlineCode",{parentName:"p"},"KEY"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\uff0c\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"key_name")," \u7a7a\u683c\u9694\u5f00\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT HEX(AES_ENCRYPT(\"Doris is Great\", KEY my_key));\n+------------------------------------------------+\n| hex(aes_encrypt('Doris is Great', key my_key)) |\n+------------------------------------------------+\n| D26DB38579D6A343350EDDC6F2AD47C6               |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT AES_DECRYPT(UNHEX('D26DB38579D6A343350EDDC6F2AD47C6'), KEY my_key);\n+--------------------------------------------------------------------+\n| aes_decrypt(unhex('D26DB38579D6A343350EDDC6F2AD47C6'), key my_key) |\n+--------------------------------------------------------------------+\n| Doris is Great                                                     |\n+--------------------------------------------------------------------+\n1 row in set (0.01 sec)\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE, ENCRYPTKEY\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}E.isMDXComponent=!0}}]);