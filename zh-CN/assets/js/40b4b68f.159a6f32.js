"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[87644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"TOPN",language:"zh-CN"},l=void 0,c={unversionedId:"sql-manual/sql-functions/aggregate-functions/topn",id:"sql-manual/sql-functions/aggregate-functions/topn",title:"TOPN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/topn.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/topn",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/topn",draft:!1,tags:[],version:"current",frontMatter:{title:"TOPN",language:"zh-CN"},sidebar:"docs",previous:{title:"SUM",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/sum"},next:{title:"VAR_SAMP,VARIANCE_SAMP",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/var_samp"}},i={},p=[{value:"TOPN",id:"topn",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"topn"},"TOPN"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"topn(expr, INT top_num[, INT space_expand_rate])")),(0,a.kt)("p",null,"\u8be5topn\u51fd\u6570\u4f7f\u7528Space-Saving\u7b97\u6cd5\u8ba1\u7b97expr\u4e2d\u7684top_num\u4e2a\u9891\u7e41\u9879\uff0c\u7ed3\u679c\u4e3a\u9891\u7e41\u9879\u53ca\u5176\u51fa\u73b0\u6b21\u6570\uff0c\u8be5\u7ed3\u679c\u4e3a\u8fd1\u4f3c\u503c"),(0,a.kt)("p",null,"space_expand_rate\u53c2\u6570\u662f\u53ef\u9009\u9879\uff0c\u8be5\u503c\u7528\u6765\u8bbe\u7f6eSpace-Saving\u7b97\u6cd5\u4e2d\u4f7f\u7528\u7684counter\u4e2a\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"counter numbers = top_num * space_expand_rate\n")),(0,a.kt)("p",null,"space_expand_rate\u7684\u503c\u8d8a\u5927\uff0c\u7ed3\u679c\u8d8a\u51c6\u786e\uff0c\u9ed8\u8ba4\u503c\u4e3a50"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MySQL [test]> select topn(keyword,10) from keyword_table where date>= '2020-06-01' and date <= '2020-06-19' ;\n+------------------------------------------------------------------------------------------------------------+\n| topn(`keyword`, 10)                                                                                        |\n+------------------------------------------------------------------------------------------------------------+\n| a:157, b:138, c:133, d:133, e:131, f:127, g:124, h:122, i:117, k:117                                       |\n+------------------------------------------------------------------------------------------------------------+\n\nMySQL [test]> select date,topn(keyword,10,100) from keyword_table where date>= '2020-06-17' and date <= '2020-06-19' group by date;\n+------------+-----------------------------------------------------------------------------------------------+\n| date       | topn(`keyword`, 10, 100)                                                                      |\n+------------+-----------------------------------------------------------------------------------------------+\n| 2020-06-19 | a:11, b:8, c:8, d:7, e:7, f:7, g:7, h:7, i:7, j:7                                             |\n| 2020-06-18 | a:10, b:8, c:7, f:7, g:7, i:7, k:7, l:7, m:6, d:6                                             |\n| 2020-06-17 | a:9, b:8, c:8, j:8, d:7, e:7, f:7, h:7, i:7, k:7                                              |\n+------------+-----------------------------------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"TOPN"))}u.isMDXComponent=!0}}]);