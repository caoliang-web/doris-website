"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[18184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,s=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return n?a.createElement(s,o(o({ref:t},m),{},{components:n})):a.createElement(s,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"C++ \u4ee3\u7801\u683c\u5f0f\u5316",language:"zh-CN"},o=void 0,i={unversionedId:"developer-guide/cpp-format-code",id:"developer-guide/cpp-format-code",title:"C++ \u4ee3\u7801\u683c\u5f0f\u5316",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/cpp-format-code.md",sourceDirName:"developer-guide",slug:"/developer-guide/cpp-format-code",permalink:"/zh-CN/community/developer-guide/cpp-format-code",draft:!1,tags:[],version:"current",frontMatter:{title:"C++ \u4ee3\u7801\u683c\u5f0f\u5316",language:"zh-CN"},sidebar:"community",previous:{title:"Java \u4ee3\u7801\u683c\u5f0f\u5316",permalink:"/zh-CN/community/developer-guide/java-format-code"},next:{title:"C++ \u4ee3\u7801\u5206\u6790",permalink:"/zh-CN/community/developer-guide/cpp-diagnostic-code"}},p={},c=[{value:"\u4ee3\u7801\u98ce\u683c\u5b9a\u5236",id:"\u4ee3\u7801\u98ce\u683c\u5b9a\u5236",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u4e0b\u8f7d\u5b89\u88c5clang-format",id:"\u4e0b\u8f7d\u5b89\u88c5clang-format",level:3},{value:"clang-format\u63d2\u4ef6",id:"clang-format\u63d2\u4ef6",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u547d\u4ee4\u884c\u8fd0\u884c",id:"\u547d\u4ee4\u884c\u8fd0\u884c",level:3},{value:"\u5728IDE\u6216Editor\u4e2d\u4f7f\u7528clang-format",id:"\u5728ide\u6216editor\u4e2d\u4f7f\u7528clang-format",level:3},{value:"Clion",id:"clion",level:4},{value:"VS Code",id:"vs-code",level:4}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"c-\u4ee3\u7801\u683c\u5f0f\u5316"},"C++ \u4ee3\u7801\u683c\u5f0f\u5316"),(0,r.kt)("p",null,"Doris\u4f7f\u7528clang-format\u8fdb\u884c\u4ee3\u7801\u683c\u5f0f\u5316\uff0c\u5e76\u5728build-support\u76ee\u5f55\u4e0b\u63d0\u4f9b\u4e86\u5c01\u88c5\u811a\u672c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"clang-format.sh"),"."),(0,r.kt)("p",{parentName:"li"},"  \u683c\u5f0f\u5316 ",(0,r.kt)("inlineCode",{parentName:"p"},"be/src")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"be/test")," \u76ee\u5f55\u4e0b\u7684 C/C++ \u4ee3\u7801\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"check-format.sh"),"."),(0,r.kt)("p",{parentName:"li"},"  \u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"be/src")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"be/test")," \u76ee\u5f55\u4e0b\u7684 C/C++ \u4ee3\u7801\u683c\u5f0f\uff0c\u5e76\u5c06 diff \u8f93\u51fa\uff0c\u4f46\u4e0d\u4f1a\u4fee\u6539\u6587\u4ef6\u5185\u5bb9\u3002"))),(0,r.kt)("h2",{id:"\u4ee3\u7801\u98ce\u683c\u5b9a\u5236"},"\u4ee3\u7801\u98ce\u683c\u5b9a\u5236"),(0,r.kt)("p",null,"Doris\u7684\u4ee3\u7801\u98ce\u683c\u5728Google Style\u7684\u57fa\u7840\u4e0a\u7a0d\u6709\u6539\u52a8\uff0c\u5b9a\u5236\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},".clang-format")," \u6587\u4ef6\uff0c\u4f4d\u4e8eDoris\u6839\u76ee\u5f55\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},".clang-format")," \u914d\u7f6e\u6587\u4ef6\u9002\u914dclang-format-13.0.1\u4ee5\u4e0a\u7684\u7248\u672c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".clang-format-ignore")," \u6587\u4ef6\u4e2d\u8bb0\u5f55\u4e86\u4e0d\u5e0c\u671b\u88ab\u683c\u5f0f\u5316\u7684\u4ee3\u7801\u3002\u8fd9\u4e9b\u4ee3\u7801\u901a\u5e38\u6765\u81ea\u7b2c\u4e09\u65b9\u4ee3\u7801\u5e93\uff0c\u5efa\u8bae\u4fdd\u6301\u539f\u6709\u4ee3\u7801\u98ce\u683c\u3002"),(0,r.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,r.kt)("p",null,"\u9700\u8981\u4e0b\u8f7d\u5b89\u88c5clang-format\uff0c\u4e5f\u53ef\u4f7f\u7528IDE\u6216Editor\u63d0\u4f9b\u7684clang-format\u63d2\u4ef6\uff0c\u4e0b\u9762\u5206\u522b\u4ecb\u7ecd\u3002"),(0,r.kt)("h3",{id:"\u4e0b\u8f7d\u5b89\u88c5clang-format"},"\u4e0b\u8f7d\u5b89\u88c5clang-format"),(0,r.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 NPM \u5b89\u88c5 clang-format 14\uff08\u4e0d\u540c\u7248\u672c\u7684 clang-format \u53ef\u80fd\u4ea7\u751f\u4e0d\u540c\u7684\u4ee3\u7801\u683c\u5f0f\uff0c\u5efa\u8bae\u4f7f\u7528 14 \u7248\u672c\uff09\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install clang-format@1.6.0")),(0,r.kt)("p",null,"Ubuntu: ",(0,r.kt)("inlineCode",{parentName:"p"},"apt-get install clang-format")," "),(0,r.kt)("p",null,"\u5f53\u524d\u7248\u672c\u4e3a10.0\uff0c\u4e5f\u53ef\u6307\u5b9a\u65e7\u7248\u672c\uff0c\u4f8b\u5982: ",(0,r.kt)("inlineCode",{parentName:"p"},"apt-get install clang-format-9"),"\uff0c\u5efa\u8bae\u6e90\u7801\u7f16\u8bd114.0\u7248\u672c\u3002"),(0,r.kt)("p",null,"Mac: ",(0,r.kt)("inlineCode",{parentName:"p"},"brew install clang-format")),(0,r.kt)("p",null,"Centos 7: "),(0,r.kt)("p",null,"centos yum\u5b89\u88c5\u7684clang-format\u7248\u672c\u8fc7\u8001\uff0c\u652f\u6301\u7684StyleOption\u592a\u5c11\uff0c\u5efa\u8bae\u6e90\u7801\u7f16\u8bd114.0\u7248\u672c\u3002"),(0,r.kt)("p",null,"LDB toolchain:"),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"../../docs/install/source-install/compilation-with-ldb-toolchain.md"},"LDB toolchain"),"\uff0c\n\u6700\u65b0\u7248\u672c\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen/releases"},"LDB toolchain"),"\uff08>= v0.11\uff09\u5df2\u7ecf\u5305\u542b\u4e86\u9884\u7f16\u8bd1\u7684clang-format\n13.0.1\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,r.kt)("h3",{id:"clang-format\u63d2\u4ef6"},"clang-format\u63d2\u4ef6"),(0,r.kt)("p",null,'Clion IDE\u53ef\u4f7f\u7528\u63d2\u4ef6"ClangFormat"\uff0c',(0,r.kt)("inlineCode",{parentName:"p"},"File->Setting->Plugins"),"\u641c\u7d22\u4e0b\u8f7d\u3002\u4f46\u7248\u672c\u65e0\u6cd5\u548c\nclang-format\u7a0b\u5e8f\u7684\u7248\u672c\u5339\u914d\uff0c\u4ece\u652f\u6301\u7684StyleOption\u4e0a\u770b\uff0c\u5e94\u8be5\u662f\u4f4e\u4e8eclang-format-9.0\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("h3",{id:"\u547d\u4ee4\u884c\u8fd0\u884c"},"\u547d\u4ee4\u884c\u8fd0\u884c"),(0,r.kt)("p",null,"cd\u5230Doris\u6839\u76ee\u5f55\u4e0b\uff0c\u7136\u540e\u6267\u884c\u5982\u4e0b\u547d\u4ee4:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"build-support/clang-format.sh")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"clang-format.sh"),"\u811a\u672c\u8981\u6c42\u60a8\u7684\u673a\u5668\u4e0a\u5b89\u88c5\u4e86python 3")),(0,r.kt)("h3",{id:"\u5728ide\u6216editor\u4e2d\u4f7f\u7528clang-format"},"\u5728IDE\u6216Editor\u4e2d\u4f7f\u7528clang-format"),(0,r.kt)("h4",{id:"clion"},"Clion"),(0,r.kt)("p",null,"Clion\u5982\u679c\u4f7f\u7528\u63d2\u4ef6\uff0c\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"Reformat Code"),"\u5373\u53ef\u3002"),(0,r.kt)("h4",{id:"vs-code"},"VS Code"),(0,r.kt)("p",null,"VS Code\u9700\u5b89\u88c5\u6269\u5c55\u7a0b\u5e8fClang-Format\uff0c\u4f46\u9700\u8981\u81ea\u884c\u63d0\u4f9bclang-format\u6267\u884c\u7a0b\u5e8f\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,'\u6253\u5f00VS Code\u914d\u7f6e\u9875\u9762\uff0c\u76f4\u63a5\u641c\u7d22"clang_format"\uff0c\u586b\u4e0a'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"clang_format_path":  "$clang-format path$",\n"clang_format_style": "file"\n')),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u53f3\u952e\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"Format Document"),"\u5373\u53ef\u3002"))}u.isMDXComponent=!0}}]);