"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[14307],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={title:"conv",language:"en"},c=void 0,i={unversionedId:"sql-reference/sql-functions/math-functions/conv",id:"version-1.0/sql-reference/sql-functions/math-functions/conv",title:"conv",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-functions/math-functions/conv.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/conv",permalink:"/docs/1.0/sql-reference/sql-functions/math-functions/conv",draft:!1,tags:[],version:"1.0",frontMatter:{title:"conv",language:"en"},sidebar:"docs",previous:{title:"murmur_hash3_32",permalink:"/docs/1.0/sql-reference/sql-functions/hash-functions/murmur_hash3_32"},next:{title:"pmod",permalink:"/docs/1.0/sql-reference/sql-functions/math-functions/pmod"}},l={},s=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conv"},"conv"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR CONV(VARCHAR input, TINYINT from_base, TINYINT to_base)"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR CONV(BIGINT input, TINYINT from_base, TINYINT to_base)"),"\nConvert the input number to the target base. The input base range should be within ",(0,o.kt)("inlineCode",{parentName:"p"},"[2,36]"),". "),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL [test]> SELECT CONV(15,10,2);\n+-----------------+\n| conv(15, 10, 2) |\n+-----------------+\n| 1111            |\n+-----------------+\n\nMySQL [test]> SELECT CONV('ff',16,10);\n+--------------------+\n| conv('ff', 16, 10) |\n+--------------------+\n| 255                |\n+--------------------+\n\nMySQL [test]> SELECT CONV(230,10,16);\n+-------------------+\n| conv(230, 10, 16) |\n+-------------------+\n| E6                |\n+-------------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CONV\n")))}u.isMDXComponent=!0}}]);