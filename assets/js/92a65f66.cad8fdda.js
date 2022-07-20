"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[47829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=o,f=d["".concat(i,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"AES",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/aes",id:"sql-manual/sql-functions/encrypt-digest-functions/aes",title:"AES",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/encrypt-digest-functions/aes.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/aes",permalink:"/docs/sql-manual/sql-functions/encrypt-digest-functions/aes",draft:!1,tags:[],version:"current",frontMatter:{title:"AES",language:"en"},sidebar:"docs",previous:{title:"pmod",permalink:"/docs/sql-manual/sql-functions/math-functions/pmod"},next:{title:"MD5",permalink:"/docs/sql-manual/sql-functions/encrypt-digest-functions/md5"}},i={},c=[{value:"AES_ENCRYPT",id:"aes_encrypt",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"AES_DECRYPT",id:"aes_decrypt",level:2},{value:"description",id:"description-1",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"example",id:"example-1",level:3},{value:"keywords",id:"keywords-1",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"aes_encrypt"},"AES_ENCRYPT"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"encryption of data using the official AES"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR AES_ENCRYPT(str,key_str[,init_vector])")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL > select to_base64(AES_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3'));\n+--------------------------------+\n| to_base64(aes_encrypt('text')) |\n+--------------------------------+\n| wr2JEDVXzL9+2XtRhgIloA==       |\n+--------------------------------+\n1 row in set (0.010 sec)\n\nMySQL> set block_encryption_mode=\"AES_256_CBC\";\nQuery OK, 0 rows affected (0.006 sec)\n\nMySQL > select to_base64(AES_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n+-----------------------------------------------------+\n| to_base64(aes_encrypt('text', '***', '0123456789')) |\n+-----------------------------------------------------+\n| tsmK1HzbpnEdR2//WhO+MA==                            |\n+-----------------------------------------------------+\n1 row in set (0.011 sec)\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"AES_ENCRYPT\n")),(0,o.kt)("h2",{id:"aes_decrypt"},"AES_DECRYPT"),(0,o.kt)("h3",{id:"description-1"},"description"),(0,o.kt)("p",null,"decryption of data using the official AES "),(0,o.kt)("h4",{id:"syntax-1"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR AES_DECRYPT(str,key_str[,init_vector])")),(0,o.kt)("h3",{id:"example-1"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL > select AES_DECRYPT(FROM_BASE64('wr2JEDVXzL9+2XtRhgIloA=='),'F3229A0B371ED2D9441B830D21A390C3');\n+------------------------------------------------------+\n| aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA==')) |\n+------------------------------------------------------+\n| text                                                 |\n+------------------------------------------------------+\n1 row in set (0.012 sec)\n\nMySQL> set block_encryption_mode=\"AES_256_CBC\";\nQuery OK, 0 rows affected (0.006 sec)\n\nMySQL > select AES_DECRYPT(FROM_BASE64('tsmK1HzbpnEdR2//WhO+MA=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n+---------------------------------------------------------------------------+\n| aes_decrypt(from_base64('tsmK1HzbpnEdR2//WhO+MA=='), '***', '0123456789') |\n+---------------------------------------------------------------------------+\n| text                                                                      |\n+---------------------------------------------------------------------------+\n1 row in set (0.012 sec)\n")),(0,o.kt)("h3",{id:"keywords-1"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"AES_ENCRYPT, AES_DECRYPT\n")))}u.isMDXComponent=!0}}]);