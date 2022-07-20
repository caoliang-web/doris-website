"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[62727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),g=o,m=u["".concat(i,".").concat(g)]||u[g]||s[g]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={title:"C++ \u4ee3\u7801\u5206\u6790",language:"zh-CN"},l=void 0,c={unversionedId:"developer-guide/cpp-diagnostic-code",id:"developer-guide/cpp-diagnostic-code",title:"C++ \u4ee3\u7801\u5206\u6790",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/cpp-diagnostic-code.md",sourceDirName:"developer-guide",slug:"/developer-guide/cpp-diagnostic-code",permalink:"/zh-CN/community/developer-guide/cpp-diagnostic-code",draft:!1,tags:[],version:"current",frontMatter:{title:"C++ \u4ee3\u7801\u5206\u6790",language:"zh-CN"},sidebar:"community",previous:{title:"C++ \u4ee3\u7801\u683c\u5f0f\u5316",permalink:"/zh-CN/community/developer-guide/cpp-format-code"},next:{title:"\u5982\u4f55\u5206\u4eabBlog",permalink:"/zh-CN/community/developer-guide/how-to-share-blogs"}},i={},d=[{value:"Clang-Tidy",id:"clang-tidy",level:3},{value:"\u5728VSCODE\u4e2d\u914d\u7f6eClangd",id:"\u5728vscode\u4e2d\u914d\u7f6eclangd",level:3}],p={toc:d};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"c-\u4ee3\u7801\u5206\u6790"},"C++ \u4ee3\u7801\u5206\u6790"),(0,o.kt)("p",null,"Doris\u652f\u6301\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://clangd.llvm.org/"},"Clangd"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"https://clang.llvm.org/extra/clang-tidy/"},"Clang-Tidy"),"\u8fdb\u884c\u4ee3\u7801\u9759\u6001\u5206\u6790\u3002Clangd\u548cClang-Tidy\u5728",(0,o.kt)("a",{parentName:"p",href:"../../docs/install/source-install/compilation-with-ldb-toolchain.md"},"LDB-toolchain"),"\n\u4e2d\u5df2\u7ecf\u5185\u7f6e\uff0c\u53e6\u5916\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5b89\u88c5\u6216\u8005\u7f16\u8bd1\u3002"),(0,o.kt)("h3",{id:"clang-tidy"},"Clang-Tidy"),(0,o.kt)("p",null,"Clang-Tidy\u4e2d\u53ef\u4ee5\u505a\u4e00\u4e9b\u4ee3\u7801\u5206\u6790\u7684\u914d\u7f6e,\u914d\u7f6e\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},".clang-tidy"),"\u5728Doris\u6839\u76ee\u5f55\u4e0b\u3002"),(0,o.kt)("h3",{id:"\u5728vscode\u4e2d\u914d\u7f6eclangd"},"\u5728VSCODE\u4e2d\u914d\u7f6eClangd"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981\u5b89\u88c5clangd\u63d2\u4ef6\uff0c\u7136\u540e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json"),"\u4e2d\u7f16\u8f91\u6216\u8005\u76f4\u63a5\u5728\u9996\u9009\u9879\u4e2d\u66f4\u6539\u63d2\u4ef6\u914d\u7f6e\u3002\u76f8\u6bd4\u4e8evscode-cpptools\uff0cclangd\u53ef\u4ee5\u4e3avscode\u63d0\u4f9b\u66f4\u5f3a\u5927\u548c\u51c6\u786e\u7684\u4ee3\u7801\u8f6c\u8df3\uff0c\u5e76\u4e14\u96c6\u6210\u4e86clang-tidy\u7684\u5206\u6790\u548c\u5feb\u901f\u4fee\u590d\u529f\u80fd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "clangd.path": "ldb_toolchain/bin/clangd", //clangd\u7684\u8def\u5f84\n    "clangd.arguments": [\n        "--background-index",\n        "--clang-tidy", //\u5f00\u542fclang-tidy\n        "--compile-commands-dir=doris/be/build_RELEASE/", //\u4f1a\u7528\u5230cmake\u751f\u6210\u7684compile_commands.json,\u6240\u4ee5\u9700\u8981\u5148\u7f16\u8bd1\u4e00\u6b21\u751f\u6210\u8be5\u6587\u4ef6\n        "--completion-style=detailed",\n        "-j=5", //clangd\u5206\u6790\u6587\u4ef6\u7684\u5e76\u884c\u6570\n        "--all-scopes-completion",\n        "--pch-storage=memory",\n        "--pretty",\n        "-log=verbose",\n        "--query-driver=ldb_toolchain/bin/*" //\u7f16\u8bd1\u5668\u8def\u5f84\n    ],\n    "clangd.trace": "/home/disk2/pxl/dev/baidu/bdg/doris/core/output/clangd-server.log" //clangd\u7684\u65e5\u5fd7\u8def\u5f84,\u53ef\u4ee5\u81ea\u5df1\u8bbe\u5b9a\n')))}s.isMDXComponent=!0}}]);