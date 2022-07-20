"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[17494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"Java \u4ee3\u7801\u683c\u5f0f\u5316",language:"zh-CN"},o=void 0,i={unversionedId:"developer-guide/java-format-code",id:"developer-guide/java-format-code",title:"Java \u4ee3\u7801\u683c\u5f0f\u5316",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/java-format-code.md",sourceDirName:"developer-guide",slug:"/developer-guide/java-format-code",permalink:"/zh-CN/community/developer-guide/java-format-code",draft:!1,tags:[],version:"current",frontMatter:{title:"Java \u4ee3\u7801\u683c\u5f0f\u5316",language:"zh-CN"},sidebar:"community",previous:{title:"Doris BE\u5f00\u53d1\u8c03\u8bd5\u73af\u5883 -- vscode",permalink:"/zh-CN/community/developer-guide/be-vscode-dev"},next:{title:"C++ \u4ee3\u7801\u683c\u5f0f\u5316",permalink:"/zh-CN/community/developer-guide/cpp-format-code"}},p={},c=[{value:"Import Order",id:"import-order",level:2},{value:"\u7f16\u8bd1\u65f6\u68c0\u67e5",id:"\u7f16\u8bd1\u65f6\u68c0\u67e5",level:2},{value:"Checkstyle \u63d2\u4ef6",id:"checkstyle-\u63d2\u4ef6",level:2},{value:"IDEA",id:"idea",level:3},{value:"VS Code",id:"vs-code",level:3},{value:"IDEA",id:"idea-1",level:2},{value:"\u81ea\u52a8\u683c\u5f0f\u5316",id:"\u81ea\u52a8\u683c\u5f0f\u5316",level:3},{value:"Rearrange Code",id:"rearrange-code",level:3},{value:"Remove unused header",id:"remove-unused-header",level:2}],d={toc:c};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"java-\u4ee3\u7801\u683c\u5f0f\u5316"},"Java \u4ee3\u7801\u683c\u5f0f\u5316"),(0,a.kt)("p",null,"Doris \u4e2d Java \u90e8\u5206\u4ee3\u7801\u7684\u683c\u5f0f\u5316\u5de5\u4f5c\u901a\u5e38\u6709 IDE \u6765\u81ea\u52a8\u5b8c\u6210\u3002\u8fd9\u91cc\u4ec5\u5217\u4e3e\u901a\u7528\u683c\u5f0f\u89c4\u5219\uff0c\u5f00\u53d1\u8fd9\u9700\u8981\u6839\u636e\u683c\u5f0f\u89c4\u5219\uff0c\u5728\u4e0d\u540c IDE \u4e2d\u8bbe\u7f6e\u5bf9\u5e94\u7684\u4ee3\u7801\u98ce\u683c\u3002"),(0,a.kt)("h2",{id:"import-order"},"Import Order"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"org.apache.doris\n<blank line>\nthird party package\n<blank line>\nstandard java package\n<blank line>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7981\u6b62\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"import *")),(0,a.kt)("li",{parentName:"ul"},"\u7981\u6b62\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"import static"))),(0,a.kt)("h2",{id:"\u7f16\u8bd1\u65f6\u68c0\u67e5"},"\u7f16\u8bd1\u65f6\u68c0\u67e5"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5728\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"maven"),"\u8fdb\u884c\u7f16\u8bd1\u65f6\uff0c\u4f1a\u9ed8\u8ba4\u8fdb\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"CheckStyle"),"\u68c0\u67e5\u3002\u6b64\u68c0\u67e5\u4f1a\u7565\u5fae\u964d\u4f4e\u7f16\u8bd1\u901f\u5ea6\u3002\u5982\u679c\u60f3\u8df3\u8fc7\u6b64\u68c0\u67e5\uff0c\u8bf7\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn clean install -DskipTests -Dcheckstyle.skip\n")),(0,a.kt)("h2",{id:"checkstyle-\u63d2\u4ef6"},"Checkstyle \u63d2\u4ef6"),(0,a.kt)("p",null,"\u73b0\u5728\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"CI")," \u4e4b\u4e2d\u4f1a\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"formatter-check")," \u8fdb\u884c\u4ee3\u7801\u683c\u5f0f\u5316\u68c0\u6d4b\u3002"),(0,a.kt)("h3",{id:"idea"},"IDEA"),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"IDEA")," \u8fdb\u884c Java \u5f00\u53d1\uff0c\u8bf7\u5728\u8bbe\u7f6e\u4e2d\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Checkstyle-IDEA")," \u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Tools->Checkstyle")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration File")," \u91cc\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Use a local Checkstyle file"),"\uff0c\u9009\u62e9\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"fe/check/checkstyle/checkstyle.xml")," \u6587\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u4fdd\u8bc1",(0,a.kt)("inlineCode",{parentName:"p"},"Checkstyle"),"\u7684\u7248\u672c\u57289.3\u53ca\u4ee5\u4e0a\uff08\u63a8\u8350\u4f7f\u7528\u6700\u65b0\u7248\u672c\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(26657).Z,width:"753",height:"146"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Checkstyle-IDEA")," \u63d2\u4ef6\u6765\u5bf9\u4ee3\u7801\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"strong"},"Checkstyle")," \u68c0\u6d4b"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(39234).Z,width:"870",height:"527"})),(0,a.kt)("h3",{id:"vs-code"},"VS Code"),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528 VS Code \u8fdb\u884c Java \u5f00\u53d1\uff0c\u8bf7\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Checkstyle for Java")," \u63d2\u4ef6\uff0c\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/java/java-linting"},"\u6587\u6863"),"\u91cc\u7684\u8bf4\u660e\u548c\u52a8\u56fe\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"idea-1"},"IDEA"),(0,a.kt)("h3",{id:"\u81ea\u52a8\u683c\u5f0f\u5316"},"\u81ea\u52a8\u683c\u5f0f\u5316"),(0,a.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"IDEA")," \u7684\u81ea\u52a8\u683c\u5f0f\u5316\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Preferences->Editor->Code Style->Java")," \u7684\u914d\u7f6e\u6807\u8bc6\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Import Scheme"),"\uff0c\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA code style XML"),"\uff0c\u9009\u62e9\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"build-support/IntelliJ-code-format.xml")," \u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"rearrange-code"},"Rearrange Code"),(0,a.kt)("p",null,"Checkstyle \u4f1a\u6309\u7167 ",(0,a.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/javase/codeconventions-fileorganization.html#1852"},"Class and Interface Declarations")," \u68c0\u6d4b\u4ee3\u7801\u7684 declarations \u987a\u5e8f\u3002"),(0,a.kt)("p",null,"\u5728\u5bfc\u5165\u4e0a\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"build-support/IntelliJ-code-format.xml")," \u6587\u4ef6\u540e\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Code/Rearrange Code")," \u81ea\u52a8\u5b8c\u6210\u6392\u5e8f"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(97005).Z,width:"808",height:"862"})),(0,a.kt)("h2",{id:"remove-unused-header"},"Remove unused header"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u5feb\u6377\u952e ",(0,a.kt)("strong",{parentName:"p"},"CTRL + ALT + O ---\x3e")," \u4ec5\u4ec5\u5220\u9664\u672a\u4f7f\u7528\u7684\u5bfc\u5165\u3002"),(0,a.kt)("p",null,"\u81ea\u52a8\u79fb\u9664\u5e76\u4e14 Reorder \uff1a"),(0,a.kt)("p",null,"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Preferences->Editor->General->Auto Import->Optimize Imports on the Fly")))}s.isMDXComponent=!0},39234:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/idea-checkstyle-plugin-cn-2898885f5fce33c971ab075a70919f0a.png"},26657:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/idea-checkstyle-version-8dd2c11f9b1ff58b36f42a13985e86d9.png"},97005:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/idea-rearrange-code-84eb3793733a97939b36cf0a30678101.png"}}]);