"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[18356],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>D});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(o),D=r,k=m["".concat(p,".").concat(D)]||m[D]||u[D]||n;return o?a.createElement(k,i(i({ref:t},s),{},{components:o})):a.createElement(k,i({ref:t},s))}));function D(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},54617:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=o(87462),r=(o(67294),o(3905));const n={title:"Apache Doris \u5728\u5c0f\u7c73\u96c6\u56e2\u7684\u8fd0\u7ef4\u5b9e\u8df5",summary:"\u4e3a\u4e86\u63d0\u9ad8\u5c0f\u7c73\u589e\u957f\u5206\u6790\u5e73\u53f0\u7684\u67e5\u8be2\u6027\u80fd\u4ee5\u53ca\u964d\u4f4e\u5e73\u53f0\u7684\u8fd0\u7ef4\u6210\u672c\uff0c2019 \u5e74 9 \u6708\u5c0f\u7c73\u96c6\u56e2\u5f15\u5165\u4e86 Apache Doris\u3002\u5728\u8fc7\u53bb\u4e24\u5e74\u591a\u7684\u65f6\u95f4\u91cc\uff0cApache Doris \u5728\u5c0f\u7c73\u96c6\u56e2\u5f97\u5230\u4e86\u5e7f\u6cdb\u7684\u5e94\u7528\uff0c\u76ee\u524d\u5df2\u7ecf\u670d\u52a1\u4e86\u589e\u957f\u5206\u6790\u3001\u96c6\u56e2\u6570\u636e\u770b\u677f\u3001\u5929\u661f\u91d1\u878d\u3001\u5c0f\u7c73\u6709\u54c1\u3001\u7528\u6237\u753b\u50cf\u3001\u5e7f\u544a\u6295\u653e\u3001A/B \u5b9e\u9a8c\u5e73\u53f0\u3001\u65b0\u96f6\u552e\u7b49\u6570\u5341\u4e2a\u4e1a\u52a1\u3002\u5728\u5c0f\u7c73\u96c6\u56e2\uff0c\u8d28\u91cf\u5c31\u662f\u751f\u547d\u7ebf\uff0c\u968f\u7740\u4e1a\u52a1\u6301\u7eed\u589e\u957f\uff0c\u5982\u4f55\u4fdd\u969c\u7ebf\u4e0a Apache Doris \u96c6\u7fa4\u7684\u670d\u52a1\u8d28\u91cf\uff0c\u5bf9\u96c6\u7fa4\u7684\u8fd0\u7ef4\u4eba\u5458\u6765\u8bf4\u662f\u4e2a\u4e0d\u5c0f\u7684\u6311\u6218\u3002\u672c\u6587\u5c06\u4ece\u8fd0\u7ef4\u7684\u89d2\u5ea6\u5bf9 Apache Doris \u5728\u5c0f\u7c73\u96c6\u56e2\u7684\u5e94\u7528\u5b9e\u8df5\u8fdb\u884c\u5206\u4eab.",date:"2022-07-20",author:"Apache Doris",tags:["\u6700\u4f73\u5b9e\u8df5"]},i=void 0,l={permalink:"/zh-CN/blog/xiaomi",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/xiaomi.md",title:"Apache Doris \u5728\u5c0f\u7c73\u96c6\u56e2\u7684\u8fd0\u7ef4\u5b9e\u8df5",description:"\x3c!--",date:"2022-07-20T00:00:00.000Z",formattedDate:"2022\u5e747\u670820\u65e5",tags:[{label:"\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/blog/tags/\u6700\u4f73\u5b9e\u8df5"}],truncated:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris \u5728\u5c0f\u7c73\u96c6\u56e2\u7684\u8fd0\u7ef4\u5b9e\u8df5",summary:"\u4e3a\u4e86\u63d0\u9ad8\u5c0f\u7c73\u589e\u957f\u5206\u6790\u5e73\u53f0\u7684\u67e5\u8be2\u6027\u80fd\u4ee5\u53ca\u964d\u4f4e\u5e73\u53f0\u7684\u8fd0\u7ef4\u6210\u672c\uff0c2019 \u5e74 9 \u6708\u5c0f\u7c73\u96c6\u56e2\u5f15\u5165\u4e86 Apache Doris\u3002\u5728\u8fc7\u53bb\u4e24\u5e74\u591a\u7684\u65f6\u95f4\u91cc\uff0cApache Doris \u5728\u5c0f\u7c73\u96c6\u56e2\u5f97\u5230\u4e86\u5e7f\u6cdb\u7684\u5e94\u7528\uff0c\u76ee\u524d\u5df2\u7ecf\u670d\u52a1\u4e86\u589e\u957f\u5206\u6790\u3001\u96c6\u56e2\u6570\u636e\u770b\u677f\u3001\u5929\u661f\u91d1\u878d\u3001\u5c0f\u7c73\u6709\u54c1\u3001\u7528\u6237\u753b\u50cf\u3001\u5e7f\u544a\u6295\u653e\u3001A/B \u5b9e\u9a8c\u5e73\u53f0\u3001\u65b0\u96f6\u552e\u7b49\u6570\u5341\u4e2a\u4e1a\u52a1\u3002\u5728\u5c0f\u7c73\u96c6\u56e2\uff0c\u8d28\u91cf\u5c31\u662f\u751f\u547d\u7ebf\uff0c\u968f\u7740\u4e1a\u52a1\u6301\u7eed\u589e\u957f\uff0c\u5982\u4f55\u4fdd\u969c\u7ebf\u4e0a Apache Doris \u96c6\u7fa4\u7684\u670d\u52a1\u8d28\u91cf\uff0c\u5bf9\u96c6\u7fa4\u7684\u8fd0\u7ef4\u4eba\u5458\u6765\u8bf4\u662f\u4e2a\u4e0d\u5c0f\u7684\u6311\u6218\u3002\u672c\u6587\u5c06\u4ece\u8fd0\u7ef4\u7684\u89d2\u5ea6\u5bf9 Apache Doris \u5728\u5c0f\u7c73\u96c6\u56e2\u7684\u5e94\u7528\u5b9e\u8df5\u8fdb\u884c\u5206\u4eab.",date:"2022-07-20",author:"Apache Doris",tags:["\u6700\u4f73\u5b9e\u8df5"]},prevItem:{title:"Apache Doris \u5728\u7f8e\u56e2\u5916\u5356\u5b9e\u65f6\u6570\u4ed3\u5efa\u8bbe\u4e2d\u7684\u5b9e\u8df5",permalink:"/zh-CN/blog/meituan"},nextItem:{title:"Apache Doris 1.1 Release \u7248\u672c\u6b63\u5f0f\u53d1\u5e03",permalink:"/zh-CN/blog/1.1 Release"}},p={authorsImageUrls:[void 0]},c=[{value:"01  \u7528\u6237\u63a5\u5165",id:"01--\u7528\u6237\u63a5\u5165",level:2},{value:"02  \u6570\u636e\u5bfc\u5165",id:"02--\u6570\u636e\u5bfc\u5165",level:2},{value:"03  \u6570\u636e\u67e5\u8be2",id:"03--\u6570\u636e\u67e5\u8be2",level:2},{value:"04  Compaction \u8c03\u4f18",id:"04--compaction-\u8c03\u4f18",level:2},{value:"01  \u76d1\u63a7\u7cfb\u7edf",id:"01--\u76d1\u63a7\u7cfb\u7edf",level:2},{value:"02  Falcon",id:"02--falcon",level:2},{value:"03  Cloud-Doris",id:"03--cloud-doris",level:2},{value:"04  \u8f7b\u821f\u5de1\u68c0",id:"04--\u8f7b\u821f\u5de1\u68c0",level:2},{value:"01  \u63a5\u5165\u6545\u969c\u5904\u7406",id:"01--\u63a5\u5165\u6545\u969c\u5904\u7406",level:2},{value:"02  \u8282\u70b9\u6545\u969c\u5904\u7406",id:"02--\u8282\u70b9\u6545\u969c\u5904\u7406",level:2}],s={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,r.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u5c0f\u7c73\u589e\u957f\u5206\u6790\u5e73\u53f0\u7684\u67e5\u8be2\u6027\u80fd\u4ee5\u53ca\u964d\u4f4e\u5e73\u53f0\u7684\u8fd0\u7ef4\u6210\u672c\uff0c2019 \u5e74 9 \u6708\u5c0f\u7c73\u96c6\u56e2\u5f15\u5165\u4e86 Apache Doris\u3002\u5728\u8fc7\u53bb\u4e24\u5e74\u591a\u7684\u65f6\u95f4\u91cc\uff0cApache Doris \u5728\u5c0f\u7c73\u96c6\u56e2\u5f97\u5230\u4e86\u5e7f\u6cdb\u7684\u5e94\u7528\uff0c\u76ee\u524d\u5df2\u7ecf\u670d\u52a1\u4e86\u589e\u957f\u5206\u6790\u3001\u96c6\u56e2\u6570\u636e\u770b\u677f\u3001\u5929\u661f\u91d1\u878d\u3001\u5c0f\u7c73\u6709\u54c1\u3001\u7528\u6237\u753b\u50cf\u3001\u5e7f\u544a\u6295\u653e\u3001A/B \u5b9e\u9a8c\u5e73\u53f0\u3001\u65b0\u96f6\u552e\u7b49\u6570\u5341\u4e2a\u4e1a\u52a1\u3002\u5728\u5c0f\u7c73\u96c6\u56e2\uff0c\u8d28\u91cf\u5c31\u662f\u751f\u547d\u7ebf\uff0c\u968f\u7740\u4e1a\u52a1\u6301\u7eed\u589e\u957f\uff0c\u5982\u4f55\u4fdd\u969c\u7ebf\u4e0a Apache Doris \u96c6\u7fa4\u7684\u670d\u52a1\u8d28\u91cf\uff0c\u5bf9\u96c6\u7fa4\u7684\u8fd0\u7ef4\u4eba\u5458\u6765\u8bf4\u662f\u4e2a\u4e0d\u5c0f\u7684\u6311\u6218\u3002\u672c\u6587\u5c06\u4ece\u8fd0\u7ef4\u7684\u89d2\u5ea6\u5bf9 Apache Doris \u5728\u5c0f\u7c73\u96c6\u56e2\u7684\u5e94\u7528\u5b9e\u8df5\u8fdb\u884c\u5206\u4eab\u3002 "),(0,r.kt)("h1",{id:"\u96c6\u7fa4\u90e8\u7f72\u548c\u5347\u7ea7"},"\u96c6\u7fa4\u90e8\u7f72\u548c\u5347\u7ea7"),(0,r.kt)("p",null,"\u57fa\u4e8e Apache Doris \u793e\u533a\u53d1\u5e03\u7684\u7a33\u5b9a\u7248\u672c\uff0c\u5c0f\u7c73\u4e5f\u7ef4\u62a4\u4e86\u5185\u90e8\u7684 Doris \u5206\u652f\u7528\u4e8e\u5185\u90e8\u5c0f\u7248\u672c\u7684\u8fed\u4ee3\u3002\u7531\u4e8e\u548c\u793e\u533a\u7f16\u8bd1 Docker \u7b2c\u4e09\u65b9\u5e93\u7684\u786c\u4ef6\u73af\u5883\u5b58\u5728\u5dee\u5f02\uff0c\u57fa\u4e8e\u793e\u533a Docker \u7f16\u8bd1\u51fa\u7684 Doris \u4e8c\u8fdb\u5236\u5305\u8fd0\u884c\u5728\u5c0f\u7c73\u7684\u7ebf\u4e0a\u73af\u5883\u4f1a\u6709\u95ee\u9898\uff0c\u56e0\u6b64\u5c0f\u7c73\u5185\u90e8\u4e5f\u7ef4\u62a4\u4e86\u81ea\u5df1\u7684 Docker \u955c\u50cf\uff0c\u7528\u4e8e\u5185\u90e8 Doris \u5206\u652f\u7684\u7f16\u8bd1\u53ca\u53d1\u7248\u3002\u5185\u90e8\u53d1\u7248\u65f6\uff0c\u5728 Docker \u5bb9\u5668\u4e2d\u4f1a\u5b8c\u6210\u6e90\u7801\u7684\u7f16\u8bd1\u548c\u6253\u5305\uff0c\u5e76\u901a\u8fc7 Minos \u5c06\u4e8c\u8fdb\u5236\u5305\u4e0a\u4f20\u5230 Tank Server\uff08\u5c0f\u7c73\u5185\u90e8\u7684\u7248\u672c\u4ed3\u5e93\uff09\u3002"),(0,r.kt)("p",null,"Minos \u662f\u5c0f\u7c73\u81ea\u7814\u5e76\u5f00\u6e90\u7684\u4e00\u6b3e\u57fa\u4e8e\u547d\u4ee4\u884c\u7684\u5927\u6570\u636e\u90e8\u7f72\u548c\u8fdb\u7a0b\u7ba1\u7406\u7cfb\u7edf\uff0c\u652f\u6301 Doris\u3001HDFS\u3001HBase\u3001Zookeeper \u7b49\u670d\u52a1\u7684\u90e8\u7f72\u548c\u7ba1\u7406\u3002\u5728\u5c0f\u7c73\u5185\u90e8\uff0c\u5305\u4e0a\u4f20\u3001\u96c6\u7fa4\u90e8\u7f72\u3001\u96c6\u7fa4\u4e0b\u7ebf\u3001\u96c6\u7fa4\u5347\u7ea7\u3001\u8fdb\u7a0b\u91cd\u542f\u3001\u914d\u7f6e\u53d8\u66f4\u7b49\u64cd\u4f5c\u90fd\u53ef\u4ee5\u901a\u8fc7 Minos \u5b8c\u6210\uff0c Minos \u5bf9\u4e8e\u670d\u52a1\u7684\u7ba1\u7406\u4f9d\u8d56\u4e8e\u914d\u7f6e\u6587\u4ef6 deployment-config \uff0c\u5176\u4e2d\u914d\u7f6e\u4e86\u670d\u52a1\u7248\u672c\u4fe1\u606f\u3001\u96c6\u7fa4\u7684\u8282\u70b9\u4fe1\u606f\u3001\u96c6\u7fa4\u7684\u914d\u7f6e\u53c2\u6570\u7b49\u4fe1\u606f\u3002\u90e8\u7f72\u96c6\u7fa4\u65f6\uff0cMinos \u4f1a\u6839\u636e deployment-config \u4e2d\u914d\u7f6e\u7684\u670d\u52a1\u7248\u672c\u4fe1\u606f\u4ece Tank Server \u4e0a\u62c9\u53d6\u5bf9\u5e94\u7684\u4e8c\u8fdb\u5236\u5305\uff0c\u5e76\u6839\u636e deployment-config \u4e2d\u914d\u7f6e\u7684\u8282\u70b9\u4fe1\u606f\u548c\u96c6\u7fa4\u53c2\u6570\u90e8\u7f72\u96c6\u7fa4\u3002\u5728\u96c6\u7fa4\u90e8\u7f72\u4e4b\u540e\uff0c\u5982\u679c\u8fdb\u7a0b\u610f\u5916\u6302\u6389\uff0cMinos \u4f1a\u81ea\u52a8\u62c9\u8d77\u8fdb\u7a0b\uff0c\u6062\u590d\u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u8f7b\u821f\u662f\u5c0f\u7c73\u81ea\u7814\u7684\u5206\u5e03\u5f0f\u670d\u52a1\u751f\u547d\u5468\u671f\u7ba1\u7406\u5e73\u53f0\uff0c\u8d2f\u7a7f\u5206\u5e03\u5f0f\u5927\u6570\u636e\u7cfb\u7edf\u4ece\u9700\u6c42\u8bc4\u4f30\u5f00\u59cb\u5230\u8d44\u6e90\u4e0b\u7ebf\u7ed3\u675f\u7684\u751f\u547d\u5468\u671f\u4e92\u8054\u4e92\u901a\u7ba1\u7406\uff0c\u4e3b\u8981\u7531\u53d1\u5e03\u4e2d\u5fc3\u3001\u5de1\u68c0\u4e2d\u5fc3\u3001\u8fd0\u8425\u6570\u4ed3\u3001\u73af\u5883\u7ba1\u7406\u3001\u6545\u969c\u7ba1\u7406\u3001\u5bb9\u91cf\u7ba1\u7406\u7b49\u7ec4\u6210\uff0c\u5404\u6a21\u5757\u4e4b\u95f4\u903b\u8f91\u4e92\u8054\u3001\u6570\u636e\u4e92\u901a\u3002\u8f7b\u821f\u53d1\u5e03\u4e2d\u5fc3\u63d0\u4f9b\u4e86\u53ef\u7f16\u6392\u3001\u4f4e\u4ee3\u7801\u3001\u53ef\u89c6\u5316\u7684\u670d\u52a1\u53d1\u5e03\u548c\u8fdb\u7a0b\u7ba1\u7406\u80fd\u529b\u3002\u8f7b\u821f\u53d1\u5e03\u4e2d\u5fc3\u5e95\u5c42\u4f9d\u8d56 Minos \uff0c\u56e0\u6b64\uff0c\u53ef\u4ee5\u57fa\u4e8e\u8f7b\u821f\u5bf9 Doris \u670d\u52a1\u5b9e\u73b0\u5e73\u53f0\u5316\u7ba1\u7406\uff0c\u5305\u62ec\u96c6\u7fa4\u90e8\u7f72\u3001\u96c6\u7fa4\u4e0b\u7ebf\u3001\u96c6\u7fa4\u5347\u7ea7\u3001\u8fdb\u7a0b\u91cd\u542f\u3001\u914d\u7f6e\u53d8\u66f4\u7b49\u64cd\u4f5c\uff0c\u5982\u679c Doris \u7684 FE \u6216 BE \u8fdb\u7a0b\u610f\u5916\u6302\u6389\uff0c\u8f7b\u821f\u4f1a\u81ea\u52a8\u62c9\u8d77\u8fdb\u7a0b\uff0c\u6062\u590d\u670d\u52a1\u3002"),(0,r.kt)("h1",{id:"\u4e1a\u52a1\u5b9e\u8df5"},"\u4e1a\u52a1\u5b9e\u8df5"),(0,r.kt)("p",null,"Apache Doris \u5728\u5c0f\u7c73\u7684\u5178\u578b\u4e1a\u52a1\u5b9e\u8df5\u5982\u4e0b\uff1a"),(0,r.kt)("h2",{id:"01--\u7528\u6237\u63a5\u5165"},"01  \u7528\u6237\u63a5\u5165"),(0,r.kt)("p",null,"\u6570\u636e\u5de5\u573a\u662f\u5c0f\u7c73\u81ea\u7814\u7684\u3001\u9762\u5411\u6570\u636e\u5f00\u53d1\u548c\u6570\u636e\u5206\u6790\u4eba\u5458\u7684\u4e00\u7ad9\u5f0f\u6570\u636e\u5f00\u53d1\u5e73\u53f0\uff0c\u5e95\u5c42\u652f\u6301 Doris\u3001Hive\u3001Kudu\u3001Iceberg\u3001ES\u3001Talso\u3001TiDB\u3001MySQL \u7b49\u6570\u636e\u6e90\uff0c\u540c\u65f6\u652f\u6301 Flink\u3001Spark\u3001Presto \u7b49\u8ba1\u7b97\u80fd\u529b \u3002"),(0,r.kt)("p",null,"\u5728\u5c0f\u7c73\u5185\u90e8\uff0c\u7528\u6237\u9700\u8981\u901a\u8fc7\u6570\u636e\u5de5\u573a\u63a5\u5165 Doris \u670d\u52a1\uff0c\u7528\u6237\u9700\u8981\u5728\u6570\u636e\u5de5\u573a\u8fdb\u884c\u6ce8\u518c\uff0c\u5e76\u5b8c\u6210\u5efa\u5e93\u5ba1\u6279\uff0c Doris \u8fd0\u7ef4\u540c\u5b66\u4f1a\u6839\u636e\u6570\u636e\u5de5\u573a\u4e2d\u7528\u6237\u63d0\u4ea4\u7684\u4e1a\u52a1\u573a\u666f\u3001\u6570\u636e\u4f7f\u7528\u9884\u671f\u7b49\u63cf\u8ff0\u8fdb\u884c\u63a5\u5165\u5ba1\u6279\u548c\u6307\u5bfc\uff0c\u7528\u6237\u5b8c\u6210\u63a5\u5165\u5ba1\u6279\u540e\u5373\u53ef\u4f7f\u7528 Doris \u670d\u52a1\uff0c\u5728\u6570\u636e\u5de5\u573a\u4e2d\u8fdb\u884c\u53ef\u89c6\u5316\u5efa\u8868\u548c\u6570\u636e\u5bfc\u5165\u7b49\u64cd\u4f5c\u3002"),(0,r.kt)("h2",{id:"02--\u6570\u636e\u5bfc\u5165"},"02  \u6570\u636e\u5bfc\u5165"),(0,r.kt)("p",null,"\u5728\u5c0f\u7c73\u7684\u4e1a\u52a1\u4e2d\uff0c\u5bfc\u5165\u6570\u636e\u5230 Doris \u6700\u5e38\u7528\u7684\u4e24\u79cd\u65b9\u5f0f\u662f Stream Load \u548c Broker Load \u3002\u7528\u6237\u6570\u636e\u4f1a\u88ab\u5212\u5206\u4e3a\u5b9e\u65f6\u6570\u636e\u548c\u79bb\u7ebf\u6570\u636e\uff0c\u7528\u6237\u7684\u5b9e\u65f6\u548c\u79bb\u7ebf\u6570\u636e\u4e00\u822c\u9996\u5148\u4f1a\u5199\u5165\u5230 Talos \u4e2d\uff08 Talos \u662f\u5c0f\u7c73\u81ea\u7814\u7684\u5206\u5e03\u5f0f\u3001\u9ad8\u541e\u5410\u7684\u6d88\u606f\u961f\u5217\uff09\u3002\u6765\u81ea Talos \u7684\u79bb\u7ebf\u6570\u636e\u4f1a\u88ab Sink \u5230 HDFS \uff0c\u7136\u540e\u901a\u8fc7\u6570\u636e\u5de5\u573a\u5bfc\u5165\u5230 Doris \uff0c\u7528\u6237\u53ef\u4ee5\u5728\u6570\u636e\u5de5\u573a\u76f4\u63a5\u63d0\u4ea4 Broker Load \u4efb\u52a1\u5c06 HDFS \u4e0a\u7684\u5927\u6279\u91cf\u6570\u636e\u5bfc\u5165\u5230 Doris \uff0c\u4e5f\u53ef\u4ee5\u5728\u6570\u636e\u5de5\u573a\u6267\u884c SparkSQL \u4ece Hive \u4e2d\u8fdb\u884c\u6570\u636e\u67e5\u8be2\uff0c\u5e76\u5c06 SparkSQL \u67e5\u5230\u7684\u6570\u636e\u901a\u8fc7 Spark-Doris-Connector \u5bfc\u5165\u5230 Doris\uff0cSpark-Doris-Connector \u5e95\u5c42\u5bf9 Stream Load \u8fdb\u884c\u4e86\u5c01\u88c5\u3002\u6765\u81ea Talos \u7684\u5b9e\u65f6\u6570\u636e\u4e00\u822c\u4f1a\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u5bfc\u5165\u5230 Doris\uff0c\u4e00\u79cd\u662f\u5148\u7ecf\u8fc7 Flink \u5bf9\u6570\u636e\u8fdb\u884c ETL \uff0c\u7136\u540e\u6bcf\u9694\u4e00\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5c06\u5c0f\u6279\u91cf\u7684\u6570\u636e\u901a\u8fc7 Flink-Doris-Connector \u5bfc\u5165\u5230 Doris\uff0cFlink-Doris-Connector \u5e95\u5c42\u5bf9 Stream Load \u8fdb\u884c\u4e86\u5c01\u88c5\uff1b\u5b9e\u65f6\u6570\u636e\u7684\u53e6\u4e00\u79cd\u5bfc\u5165\u65b9\u5f0f\u662f\uff0c\u6bcf\u9694\u4e00\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u901a\u8fc7 Spark Streaming \u5c01\u88c5\u7684 Stream Load \u5c06\u5c0f\u6279\u91cf\u7684\u6570\u636e\u5bfc\u5165\u5230 Doris \u3002"),(0,r.kt)("h2",{id:"03--\u6570\u636e\u67e5\u8be2"},"03  \u6570\u636e\u67e5\u8be2"),(0,r.kt)("p",null,"\u5c0f\u7c73\u7684 Doris \u7528\u6237\u4e00\u822c\u901a\u8fc7\u6570\u9cb8\u5e73\u53f0\u5bf9 Doris \u8fdb\u884c\u5206\u6790\u67e5\u8be2\u548c\u7ed3\u679c\u5c55\u793a\u3002\u6570\u9cb8\u662f\u5c0f\u7c73\u81ea\u7814\u7684\u901a\u7528 BI \u5206\u6790\u5de5\u5177\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u6570\u9cb8\u5e73\u53f0\u5bf9 Doris \u8fdb\u884c\u67e5\u8be2\u53ef\u89c6\u5316\uff0c\u5e76\u5b9e\u73b0\u7528\u6237\u884c\u4e3a\u5206\u6790\uff08\u4e3a\u6ee1\u8db3\u4e1a\u52a1\u7684\u4e8b\u4ef6\u5206\u6790\u3001\u7559\u5b58\u5206\u6790\u3001\u6f0f\u6597\u5206\u6790\u3001\u8def\u5f84\u5206\u6790\u7b49\u884c\u4e3a\u5206\u6790\u9700\u6c42\uff0c\u6211\u4eec\u4e3a Doris \u6dfb\u52a0\u4e86\u76f8\u5e94\u7684 UDF \u548c UDAF \uff09\u548c\u7528\u6237\u753b\u50cf\u5206\u6790\u3002 "),(0,r.kt)("h2",{id:"04--compaction-\u8c03\u4f18"},"04  Compaction \u8c03\u4f18"),(0,r.kt)("p",null,"\u5bf9 Doris \u6765\u8bf4\uff0c\u6bcf\u4e00\u6b21\u6570\u636e\u5bfc\u5165\u90fd\u4f1a\u5728\u5b58\u50a8\u5c42\u7684\u76f8\u5173\u6570\u636e\u5206\u7247\uff08Tablet\uff09\u4e0b\u751f\u6210\u4e00\u4e2a\u6570\u636e\u7248\u672c\uff0cCompaction \u673a\u5236\u4f1a\u5f02\u6b65\u5730\u5bf9\u5bfc\u5165\u751f\u6210\u7684\u8f83\u5c0f\u7684\u6570\u636e\u7248\u672c\u8fdb\u884c\u5408\u5e76\uff08Compaction \u673a\u5236\u7684\u8be6\u7ec6\u539f\u7406\u53ef\u4ee5\u53c2\u8003\u4e4b\u524d\u7684\u6587\u7ae0\u300a Doris Compaction \u673a\u5236\u89e3\u6790 \u300b\uff09\u3002\u5c0f\u7c73\u6709\u8f83\u591a\u9ad8\u9891\u3001\u9ad8\u5e76\u53d1\u3001\u8fd1\u5b9e\u65f6\u5bfc\u5165\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u5728\u8f83\u77ed\u7684\u65f6\u95f4\u5185\u5c31\u4f1a\u751f\u6210\u5927\u91cf\u7684\u5c0f\u7248\u672c\uff0cCompaction \u5bf9\u6570\u636e\u7248\u672c\u5408\u5e76\u4e0d\u53ca\u65f6\u7684\u8bdd\uff0c\u5c31\u4f1a\u9020\u6210\u7248\u672c\u7d2f\u79ef\uff0c\u4e00\u65b9\u9762\u8fc7\u591a\u7684\u5c0f\u7248\u672c\u4f1a\u589e\u52a0\u5143\u6570\u636e\u7684\u538b\u529b\uff0c\u53e6\u4e00\u65b9\u9762\u7248\u672c\u6570\u592a\u591a\u4f1a\u5f71\u54cd\u67e5\u8be2\u6027\u80fd\u3002\u5c0f\u7c73\u7684\u4f7f\u7528\u573a\u666f\u4e2d\uff0c\u6709\u8f83\u591a\u7684\u8868\u91c7\u7528\u4e86 Unique \u548c Aggregate \u6570\u636e\u6a21\u578b\uff0c\u67e5\u8be2\u6027\u80fd\u4e25\u91cd\u4f9d\u8d56\u4e8e Compaction \u5bf9\u6570\u636e\u7248\u672c\u5408\u5e76\u662f\u5426\u53ca\u65f6\uff0c\u5728\u6211\u4eec\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u66fe\u7ecf\u51fa\u73b0\u8fc7\u56e0\u4e3a\u7248\u672c\u5408\u5e76\u4e0d\u53ca\u65f6\u5bfc\u81f4\u67e5\u8be2\u6027\u80fd\u964d\u4f4e\u6570\u5341\u500d\uff0c\u8fdb\u800c\u5f71\u54cd\u7ebf\u4e0a\u670d\u52a1\u7684\u60c5\u51b5\u3002\u4f46\u662f\uff0cCompaction \u4efb\u52a1\u672c\u8eab\u53c8\u6bd4\u8f83\u8017\u8d39\u673a\u5668\u7684 CPU \u3001\u5185\u5b58\u548c\u78c1\u76d8 IO \u8d44\u6e90\uff0cCompaction \u653e\u5f97\u592a\u5f00\u4f1a\u5360\u7528\u8fc7\u591a\u7684\u673a\u5668\u8d44\u6e90\uff0c\u4e5f\u4f1a\u5f71\u54cd\u5230\u67e5\u8be2\u6027\u80fd\uff0c\u8fd8\u53ef\u80fd\u4f1a\u9020\u6210 OOM\u3002"),(0,r.kt)("p",null,"\u9488\u5bf9 Compaction \u5b58\u5728\u7684\u8fd9\u4e00\u95ee\u9898\uff0c\u6211\u4eec\u4e00\u65b9\u9762\u4ece\u4e1a\u52a1\u4fa7\u7740\u624b\uff0c\u901a\u8fc7\u4ee5\u4e0b\u65b9\u9762\u5f15\u5bfc\u7528\u6237\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u8868\u8bbe\u7f6e\u5408\u7406\u7684\u5206\u533a\u548c\u5206\u6876\uff0c\u907f\u514d\u751f\u6210\u8fc7\u591a\u7684\u6570\u636e\u5206\u7247\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89c4\u8303\u7528\u6237\u7684\u6570\u636e\u5bfc\u5165\u64cd\u4f5c\uff0c\u5c3d\u91cf\u964d\u4f4e\u6570\u636e\u5bfc\u5165\u9891\u7387\uff0c\u589e\u5927\u5355\u6b21\u5bfc\u5165\u7684\u6570\u636e\u91cf\uff0c\u964d\u4f4e Compaction \u7684\u538b\u529b\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u907f\u514d\u8fc7\u591a\u5730\u4f7f\u7528 Delete \u64cd\u4f5c\u3002Delete \u64cd\u4f5c\u4f1a\u5728\u5b58\u50a8\u5c42\u7684\u76f8\u5173\u6570\u636e\u5206\u7247\u4e0b\u751f\u6210\u4e00\u4e2a Delete \u7248\u672c\uff0cCumulative Compaction \u4efb\u52a1\u5728\u9047\u5230 Delete \u7248\u672c\u65f6\u4f1a\u88ab\u622a\u65ad\uff0c\u8be5\u6b21\u4efb\u52a1\u53ea\u80fd\u5408\u5e76 Cumulative Point \u4e4b\u540e\u5230 Delete \u7248\u672c\u4e4b\u524d\u7684\u6570\u636e\u7248\u672c\uff0c\u5e76\u5c06 Cumulative Point \u79fb\u52a8\u5230 Delete \u7248\u672c\u4e4b\u540e\uff0c\u628a Delete \u7248\u672c\u4ea4\u7ed9\u540e\u7eed\u7684 Base Compaction \u4efb\u52a1\u6765\u5904\u7406\u3002\u5982\u679c\u8fc7\u591a\u5730\u4f7f\u7528 Delete \u64cd\u4f5c\uff0c\u5728 Tablet \u4e0b\u4f1a\u751f\u6210\u592a\u591a\u7684 Delete \u7248\u672c\uff0c\u8fdb\u800c\u5bfc\u81f4 Cumulative Compaction \u4efb\u52a1\u5bf9\u7248\u672c\u5408\u5e76\u7684\u8fdb\u5ea6\u7f13\u6162\u3002\u4f7f\u7528 Delete \u64cd\u4f5c\u5e76\u6ca1\u6709\u771f\u6b63\u4ece\u78c1\u76d8\u4e0a\u5220\u9664\u6570\u636e\uff0c\u800c\u662f\u5728 Delete \u7248\u672c\u4e2d\u8bb0\u5f55\u4e86\u5220\u9664\u6761\u4ef6\uff0c\u6570\u636e\u67e5\u8be2\u65f6\u4f1a\u901a\u8fc7 Merge-On-Read \u7684\u65b9\u5f0f\u8fc7\u6ee4\u6389\u88ab\u5220\u9664\u7684\u6570\u636e\uff0c\u53ea\u6709 Delete \u7248\u672c\u88ab Base Compaction \u4efb\u52a1\u5408\u5e76\u4e4b\u540e\uff0cDelete \u64cd\u4f5c\u8981\u5220\u9664\u7684\u6570\u636e\u624d\u80fd\u4f5c\u4e3a\u8fc7\u671f\u6570\u636e\u968f\u7740 Stale Rowset \u4ece\u78c1\u76d8\u4e0a\u88ab\u6e05\u9664\u3002\u5982\u679c\u9700\u8981\u5220\u9664\u6574\u4e2a\u5206\u533a\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528 Truncate \u5206\u533a\u64cd\u4f5c\uff0c\u800c\u907f\u514d\u4f7f\u7528 Delete \u64cd\u4f5c\u3002"))),(0,r.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u6211\u4eec\u4ece\u8fd0\u7ef4\u4fa7\u5bf9 Compaction \u8fdb\u884c\u4e86\u8c03\u4f18\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6839\u636e\u4e1a\u52a1\u573a\u666f\u7684\u4e0d\u540c\uff0c\u9488\u5bf9\u4e0d\u540c\u96c6\u7fa4\u914d\u7f6e\u4e86\u4e0d\u540c\u7684 Compaction \u53c2\u6570\uff08 Compaction \u7b56\u7565\u3001\u7ebf\u7a0b\u6570\u7b49\uff09\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9002\u5f53\u5730\u964d\u4f4e\u4e86 Base Compaction \u4efb\u52a1\u7684\u4f18\u5148\u7ea7\uff0c\u589e\u52a0\u4e86Cumulative Compaction \u4efb\u52a1\u7684\u4f18\u5148\u7ea7\uff0c\u56e0\u4e3a Base Compaction \u4efb\u52a1\u6267\u884c\u65f6\u95f4\u957f\uff0c\u6709\u4e25\u91cd\u7684\u5199\u653e\u5927\u95ee\u9898\uff0c\u800c Cumulative Compaction \u4efb\u52a1\u6267\u884c\u6bd4\u8f83\u5feb\uff0c\u5e76\u4e14\u80fd\u5feb\u901f\u5408\u5e76\u5927\u91cf\u7684\u5c0f\u7248\u672c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7248\u672c\u79ef\u538b\u62a5\u8b66\uff0c\u52a8\u6001\u8c03\u6574 Compaction \u53c2\u6570\u3002Compaction Producer \u751f\u4ea7 Compaction \u4efb\u52a1\u65f6\uff0c\u4f1a\u66f4\u65b0\u76f8\u5e94\u7684 Metric \uff0c\u5176\u4e2d\u8bb0\u5f55\u4e86 BE \u8282\u70b9\u4e0a\u6700\u5927\u7684 Compaction Score \u7684\u503c\uff0c\u53ef\u4ee5\u901a\u8fc7 Grafana \u67e5\u770b\u8be5\u6307\u6807\u7684\u8d8b\u52bf\u5224\u65ad\u662f\u5426\u51fa\u73b0\u4e86\u7248\u672c\u79ef\u538b\uff0c\u53e6\u5916\uff0c\u6211\u4eec\u8fd8\u589e\u52a0\u4e86\u7248\u672c\u79ef\u538b\u7684\u62a5\u8b66\u3002\u4e3a\u65b9\u4fbf Compaction \u53c2\u6570\u8c03\u6574\uff0c\u6211\u4eec\u4ece\u4ee3\u7801\u5c42\u9762\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u652f\u6301\u8fd0\u884c\u65f6\u52a8\u6001\u8c03\u6574 Compaction \u7b56\u7565\u548c  Compaction  \u7ebf\u7a0b\u6570\uff0c\u907f\u514d\u8c03\u6574 Compaction \u53c2\u6570\u7684\u65f6\u5019\u9700\u8981\u91cd\u542f\u8fdb\u7a0b\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u652f\u6301\u624b\u52a8\u89e6\u53d1\u6307\u5b9a Table \u3001\u6307\u5b9a Partition \u4e0b\u6570\u636e\u5206\u7247\u7684 Compaction \u4efb\u52a1\uff0c\u63d0\u9ad8\u6307\u5b9a Table\u3001\u6307\u5b9a Partition \u4e0b\u6570\u636e\u5206\u7247\u7684 Compaction \u4f18\u5148\u7ea7\u3002"))),(0,r.kt)("h1",{id:"\u76d1\u63a7\u548c\u62a5\u8b66\u7ba1\u7406"},"\u76d1\u63a7\u548c\u62a5\u8b66\u7ba1\u7406"),(0,r.kt)("h2",{id:"01--\u76d1\u63a7\u7cfb\u7edf"},"01  \u76d1\u63a7\u7cfb\u7edf"),(0,r.kt)("p",null,"Prometheus \u4f1a\u5b9a\u65f6\u4ece Doris \u7684 FE \u548c BE \u4e0a\u62c9\u53d6 Metrics \u6307\u6807\uff0c\u5e76\u5c55\u793a\u5728 Grafana \u76d1\u63a7\u9762\u677f\u4e2d\u3002\u57fa\u4e8e\u8f7b\u821f\u6570\u4ed3\u7684\u670d\u52a1\u5143\u6570\u636e\uff08\u8f7b\u821f\u6570\u4ed3\u662f\u8f7b\u821f\u5e73\u53f0\u57fa\u4e8e\u5c0f\u7c73\u5168\u91cf\u5927\u6570\u636e\u670d\u52a1\u57fa\u7840\u8fd0\u884c\u6570\u636e\u5efa\u8bbe\u7684\u6570\u636e\u4ed3\u5e93\uff0c\u7531 2 \u5f20\u57fa\u8868\u548c 30+ \u5f20\u7ef4\u5ea6\u8868\u7ec4\u6210\uff0c\u8986\u76d6\u4e86\u5927\u6570\u636e\u7ec4\u4ef6\u8fd0\u884c\u65f6\u7684\u8d44\u6e90\u3001\u670d\u52a1\u5668 CMDB\u3001\u6210\u672c\u3001\u8fdb\u7a0b\u72b6\u6001\u7b49\u5168\u6d41\u7a0b\u6570\u636e\uff09\u4f1a\u81ea\u52a8\u6ce8\u518c\u5230 Zookeeper \u4e2d\uff0cPrometheus \u4f1a\u5b9a\u65f6\u4ece Zookeeper \u4e2d\u62c9\u53d6\u6700\u65b0\u7684\u96c6\u7fa4\u5143\u6570\u636e\u4fe1\u606f\uff0c\u5e76\u5728 Grafana \u76d1\u63a7\u9762\u677f\u4e2d\u52a8\u6001\u5c55\u793a\u3002\u53e6\u5916\uff0c\u6211\u4eec\u5728 Grafana \u4e2d\u8fd8\u6dfb\u52a0\u4e86\u9488\u5bf9 Doris \u5927\u67e5\u8be2\u5217\u8868\u3001\u5b9e\u65f6\u5199\u5165\u6570\u636e\u91cf\u3001\u6570\u636e\u5bfc\u5165\u4e8b\u52a1\u6570\u7b49\u5e38\u89c1\u6392\u969c\u6570\u636e\u7684\u7edf\u8ba1\u548c\u5c55\u793a\u770b\u677f\uff0c\u80fd\u591f\u8054\u52a8\u62a5\u8b66\u8ba9 Doris \u8fd0\u7ef4\u540c\u5b66\u5728\u96c6\u7fa4\u5f02\u5e38\u65f6\u4ee5\u6700\u77ed\u7684\u65f6\u95f4\u5b9a\u4f4d\u96c6\u7fa4\u7684\u6545\u969c\u539f\u56e0\u3002"),(0,r.kt)("h2",{id:"02--falcon"},"02  Falcon"),(0,r.kt)("p",null,"Falcon \u662f\u5c0f\u7c73\u5185\u90e8\u5e7f\u6cdb\u4f7f\u7528\u7684\u76d1\u63a7\u548c\u62a5\u8b66\u7cfb\u7edf\uff0c\u56e0\u4e3a Doris \u539f\u751f\u5730\u63d0\u4f9b\u4e86\u8f83\u4e3a\u5b8c\u5584\u7684 Metrics \u63a5\u53e3\uff0c\u53ef\u4ee5\u57fa\u4e8e Prometheus \u548c Grafana \u65b9\u4fbf\u5730\u63d0\u4f9b\u76d1\u63a7\u529f\u80fd\uff0c\u6240\u4ee5\u6211\u4eec\u5728 Doris \u670d\u52a1\u4e2d\u53ea\u4f7f\u7528\u4e86 Falcon \u7684\u62a5\u8b66\u529f\u80fd\u3002 \u9488\u5bf9 Doris \u51fa\u73b0\u7684\u4e0d\u540c\u7ea7\u522b\u6545\u969c\uff0c\u6211\u4eec\u5c06\u62a5\u8b66\u5b9a\u4e49\u4e3a P0\u3001P1 \u548c P2 \u4e09\u4e2a\u7b49\u7ea7\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"P2 \u62a5\u8b66(\u62a5\u8b66\u7b49\u7ea7\u4e3a\u4f4e)\uff1a\u5355\u8282\u70b9\u6545\u969c\u62a5\u8b66\u3002\u5355\u8282\u70b9\u6307\u6807\u6216\u8fdb\u7a0b\u72b6\u6001\u53d1\u751f\u5f02\u5e38\u4e00\u822c\u4f5c\u4e3a P2 \u7b49\u7ea7\u53d1\u51fa\u62a5\u8b66\uff0c\u62a5\u8b66\u4fe1\u606f\u4ee5\u5c0f\u7c73\u529e\u516c\uff08\u5c0f\u7c73\u529e\u516c\u662f\u5b57\u8282\u8df3\u52a8\u98de\u4e66\u5728\u5c0f\u7c73\u7684\u79c1\u6709\u5316\u90e8\u7f72\u4ea7\u54c1\uff0c\u529f\u80fd\u548c\u98de\u4e66\u7c7b\u4f3c\uff09\u6d88\u606f\u7684\u5f62\u5f0f\u53d1\u9001\u5230\u544a\u8b66\u7ec4\u6210\u5458\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"P1 \u62a5\u8b66(\u62a5\u8b66\u7b49\u7ea7\u4e3a\u8f83\u9ad8)\uff1a\u96c6\u7fa4\u77ed\u65f6\u95f4\uff083 \u5206\u949f\u4ee5\u5185\uff09\u5185\u67e5\u8be2\u5ef6\u8fdf\u5347\u9ad8\u6216\u5199\u5165\u5f02\u5e38\u7b49\u77ed\u6682\u5f02\u5e38\u72b6\u51b5\u5c06\u4f5c\u4e3a P1 \u7b49\u7ea7\u53d1\u51fa\u62a5\u8b66\uff0c\u62a5\u8b66\u4fe1\u606f\u4ee5\u5c0f\u7c73\u529e\u516c\u6d88\u606f\u7684\u5f62\u5f0f\u53d1\u9001\u5230\u544a\u8b66\u7ec4\u6210\u5458\uff0cP1\u7b49\u7ea7\u62a5\u8b66\u8981\u6c42 Oncall \u5de5\u7a0b\u5e08\u8fdb\u884c\u54cd\u5e94\u548c\u53cd\u9988\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"P0 \u62a5\u8b66(\u62a5\u8b66\u7b49\u7ea7\u4e3a\u9ad8)\uff1a\u96c6\u7fa4\u957f\u65f6\u95f4\uff083 \u5206\u949f\u4ee5\u4e0a\uff09\u67e5\u8be2\u5ef6\u8fdf\u5347\u9ad8\u6216\u5199\u5165\u5f02\u5e38\u7b49\u60c5\u51b5\u5c06\u4f5c\u4e3a P0 \u7b49\u7ea7\u53d1\u51fa\u62a5\u8b66\uff0c\u62a5\u8b66\u4fe1\u606f\u4ee5\u5c0f\u7c73\u529e\u516c\u6d88\u606f+\u7535\u8bdd\u62a5\u8b66\u7684\u5f62\u5f0f\u53d1\u9001\uff0cP0 \u7ea7\u522b\u62a5\u8b66\u8981\u6c42 Oncall \u5de5\u7a0b\u5e08 1 \u5206\u949f\u5185\u8fdb\u884c\u54cd\u5e94\u5e76\u534f\u8c03\u8d44\u6e90\u8fdb\u884c\u6545\u969c\u6062\u590d\u548c\u590d\u76d8\u51c6\u5907\u3002"))),(0,r.kt)("p",null,"\u4ee5\u4e0a\u5bf9\u62a5\u8b66\u7c7b\u578b\u548c\u6848\u4f8b\u8fdb\u884c\u4e86\u7b80\u5355\u4e3e\u4f8b\uff0c\u5b9e\u9645\u4e0a\u4e3a\u4e86\u7ef4\u62a4 Doris \u7cfb\u7edf\u7a33\u5b9a\uff0c\u6211\u4eec\u8fd8\u4f1a\u6709\u5f62\u5f0f\u591a\u6837\u3001\u7ea7\u522b\u5404\u5f02\u7684\u62a5\u8b66\u548c\u5de1\u68c0\u3002 "),(0,r.kt)("h2",{id:"03--cloud-doris"},"03  Cloud-Doris"),(0,r.kt)("p",null,"Cloud-Doris \u662f\u5c0f\u7c73\u9488\u5bf9\u5185\u90e8 Doris \u670d\u52a1\u5f00\u53d1\u7684\u6570\u636e\u6536\u96c6\u7ec4\u4ef6\uff0c\u5176\u6700\u4e3b\u8981\u7684\u80fd\u529b\u5728\u4e8e\u5bf9 Doris \u670d\u52a1\u7684\u53ef\u7528\u6027\u8fdb\u884c\u63a2\u6d4b\u4ee5\u53ca\u5bf9\u5185\u90e8\u5173\u6ce8\u7684\u96c6\u7fa4\u6307\u6807\u6570\u636e\u8fdb\u884c\u91c7\u96c6\u3002 \u4e3e\u4f8b\u8bf4\u660e\uff1aCloud-Doris \u5b9a\u65f6\u4f1a\u6a21\u62df\u7528\u6237\u5bf9 Doris \u7cfb\u7edf\u8fdb\u884c\u8bfb\u5199\u6765\u63a2\u6d4b\u670d\u52a1\u7684\u53ef\u7528\u6027\uff0c\u5982\u679c\u96c6\u7fa4\u51fa\u73b0\u53ef\u7528\u6027\u5f02\u5e38\uff0c\u5219\u4f1a\u901a\u8fc7 Falcon \u8fdb\u884c\u62a5\u8b66\uff1b\u5bf9\u7528\u6237\u7684\u8bfb\u5199\u6570\u636e\u8fdb\u884c\u6536\u96c6\uff0c\u8fdb\u800c\u751f\u6210\u7528\u6237\u8d26\u5355\uff1b\u5bf9\u8868\u7ea7\u522b\u6570\u636e\u91cf\u3001\u4e0d\u5065\u5eb7\u526f\u672c\u3001\u8fc7\u5927 Tablet \u7b49\u4fe1\u606f\u8fdb\u884c\u6536\u96c6\uff0c\u5c06\u5f02\u5e38\u4fe1\u606f\u901a\u8fc7 Falcon \u8fdb\u884c\u62a5\u8b66\u3002 "),(0,r.kt)("h2",{id:"04--\u8f7b\u821f\u5de1\u68c0"},"04  \u8f7b\u821f\u5de1\u68c0"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5bb9\u91cf\u3001\u7528\u6237\u589e\u957f\u3001\u8d44\u6e90\u914d\u6bd4\u7b49\u6162\u6027\u9690\u60a3\uff0c\u6211\u4eec\u4f7f\u7528\u7edf\u4e00\u7684\u8f7b\u821f\u5927\u6570\u636e\u670d\u52a1\u5de1\u68c0\u5e73\u53f0\u8fdb\u884c\u5de1\u68c0\u548c\u62a5\u544a\u3002\u5de1\u68c0\u4e2d\u4e00\u822c\u5305\u62ec\u4e24\u90e8\u5206\uff1a\u670d\u52a1\u7279\u5f02\u6027\u5de1\u68c0\u548c\u57fa\u7840\u6307\u6807\u5de1\u68c0\uff0c\u5176\u4e2d\u670d\u52a1\u7279\u5f02\u6027\u5de1\u68c0\u6307\u5404\u4e2a\u5927\u6570\u636e\u670d\u52a1\u7279\u6709\u7684\u4e0d\u80fd\u901a\u7528\u7684\u6307\u6807\uff0c\u5bf9 Doris \u6765\u8bf4\uff0c\u4e3b\u8981\u5305\u62ec\uff1aQuota\u3001\u5206\u7247\u526f\u672c\u6570\u3001\u5355\u8868\u5217\u6570\u3001\u8868\u5206\u533a\u6570\u7b49\uff1b\u57fa\u7840\u6307\u6807\u5de1\u68c0\u4e3b\u8981\u6307\u5404\u670d\u52a1\u95f4\u53ef\u4ee5\u901a\u7528\u7684\u5de1\u68c0\u6307\u6807\uff0c\u4e3b\u8981\u5305\u62ec\uff1a\u5b88\u62a4\u8fdb\u7a0b\u72b6\u6001\u3001\u8fdb\u7a0b\u72b6\u6001\u3001CPU/MEM/DISK\u3001\u670d\u52a1\u5668\u6545\u969c\u53ca\u8fc7\u4fdd\u63d0\u793a\u3001\u8d44\u6e90\u5229\u7528\u7387\u7b49\u3002 \u901a\u8fc7\u589e\u52a0\u5de1\u68c0\u7684\u65b9\u5f0f\uff0c\u5f88\u597d\u5730\u8986\u76d6\u4e86\u96be\u4ee5\u63d0\u524d\u8fdb\u884c\u62a5\u8b66\u7684\u6162\u6027\u9690\u60a3\uff0c\u5bf9\u91cd\u5927\u8282\u65e5\u65e0\u6545\u969c\u63d0\u4f9b\u4e86\u652f\u6491\u3002"),(0,r.kt)("h1",{id:"\u6545\u969c\u6062\u590d"},"\u6545\u969c\u6062\u590d"),(0,r.kt)("p",null,"\u5f53\u7ebf\u4e0a\u96c6\u7fa4\u53d1\u751f\u6545\u969c\u65f6\uff0c\u5e94\u5f53\u4ee5\u8fc5\u901f\u6062\u590d\u670d\u52a1\u4e3a\u7b2c\u4e00\u539f\u5219\u3002\u5982\u679c\u6e05\u695a\u6545\u969c\u53d1\u751f\u7684\u539f\u56e0\uff0c\u5219\u6839\u636e\u5177\u4f53\u7684\u539f\u56e0\u8fdb\u884c\u5904\u7406\u5e76\u6062\u590d\u670d\u52a1\uff0c\u5982\u679c\u4e0d\u6e05\u695a\u6545\u969c\u539f\u56e0\uff0c\u5219\u4fdd\u7559\u73b0\u573a\u540e\u7b2c\u4e00\u65f6\u95f4\u5e94\u8be5\u5c1d\u8bd5\u91cd\u542f\u8fdb\u7a0b\uff0c\u4ee5\u6062\u590d\u670d\u52a1\u3002"),(0,r.kt)("h2",{id:"01--\u63a5\u5165\u6545\u969c\u5904\u7406"},"01  \u63a5\u5165\u6545\u969c\u5904\u7406"),(0,r.kt)("p",null,"Doris \u4f7f\u7528\u5c0f\u7c73 LVS \u4f5c\u4e3a\u63a5\u5165\u5c42\uff0c\u4e0e\u5f00\u6e90\u6216\u516c\u6709\u4e91\u7684 LB \u670d\u52a1\u7c7b\u4f3c\uff0c\u63d0\u4f9b 4 \u5c42\u6216 7 \u5c42\u7684\u6d41\u91cf\u8d1f\u8f7d\u8c03\u5ea6\u80fd\u529b\u3002\u7528\u6237\u901a\u8fc7 VIP (\u57df\u540d)\u8fde\u63a5 Doris \u96c6\u7fa4\u3002Doris \u7ed1\u5b9a\u5408\u7406\u7684\u63a2\u6d3b\u7aef\u53e3\u540e\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u5982\u679c FE \u5355\u8282\u70b9\u53d1\u751f\u5f02\u5e38\u4f1a\u81ea\u52a8\u88ab\u8e22\u9664\uff0c\u80fd\u591f\u5728\u7528\u6237\u65e0\u611f\u77e5\u60c5\u51b5\u4e0b\u6062\u590d\u670d\u52a1\uff0c\u540c\u65f6\u4f1a\u9488\u5bf9\u5f02\u5e38\u8282\u70b9\u53d1\u51fa\u62a5\u8b66\u3002\u5f53\u7136\uff0c\u5bf9\u4e8e\u9884\u4f30\u77ed\u65f6\u95f4\u5185\u65e0\u6cd5\u5904\u7406\u5b8c\u6210\u7684 FE \u6545\u969c\uff0c\u6211\u4eec\u4f1a\u5148\u8c03\u6574\u6545\u969c\u8282\u70b9\u7684\u6743\u91cd\u4e3a 0 \u6216\u8005\u5148\u4ece LVS \u5220\u9664\u5f02\u5e38\u8282\u70b9\uff0c\u9632\u6b62\u8fdb\u7a0b\u63a2\u6d3b\u5f02\u5e38\u5f15\u53d1\u4e0d\u53ef\u9884\u4f30\u7684\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"02--\u8282\u70b9\u6545\u969c\u5904\u7406"},"02  \u8282\u70b9\u6545\u969c\u5904\u7406"),(0,r.kt)("p",null,"\u5bf9\u4e8e FE \u8282\u70b9\u6545\u969c\uff0c\u5982\u679c\u65e0\u6cd5\u5feb\u901f\u5b9a\u4f4d\u6545\u969c\u539f\u56e0\uff0c\u4e00\u822c\u9700\u8981\u4fdd\u7559\u7ebf\u7a0b\u5feb\u7167\u548c\u5185\u5b58\u5feb\u7167\u540e\u91cd\u542f\u8fdb\u7a0b\u3002\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u4fdd\u5b58 FE \u7684\u7ebf\u7a0b\u5feb\u7167\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-undefined"},"jstack \u8fdb\u7a0bID >> \u5feb\u7167\u6587\u4ef6\u540d.jstack\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4fdd\u5b58 FE \u7684\u5185\u5b58\u5feb\u7167\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-undefined"},"jmap -dump:live,format=b,file=\u5feb\u7167\u6587\u4ef6\u540d.heap \u8fdb\u7a0bID\n")),(0,r.kt)("p",null,"\u5728\u7248\u672c\u5347\u7ea7\u6216\u4e00\u4e9b\u610f\u5916\u573a\u666f\u4e0b\uff0cFE \u8282\u70b9\u7684 image \u53ef\u80fd\u51fa\u73b0\u5143\u6570\u636e\u5f02\u5e38\uff0c\u5e76\u4e14\u53ef\u80fd\u51fa\u73b0\u5f02\u5e38\u7684\u5143\u6570\u636e\u88ab\u540c\u6b65\u5230\u5176\u5b83 FE \u7684\u60c5\u51b5\uff0c\u5bfc\u81f4\u6240\u6709 FE \u4e0d\u53ef\u5de5\u4f5c\u3002\u4e00\u65e6\u53d1\u73b0 image \u51fa\u73b0\u6545\u969c\uff0c\u6700\u5feb\u7684\u6062\u590d\u65b9\u6848\u662f\u4f7f\u7528 Recovery \u6a21\u5f0f\u505c\u6b62 FE \u9009\u4e3e\uff0c\u5e76\u4f7f\u7528\u5907\u4efd\u7684 image \u66ff\u6362\u6545\u969c\u7684 image\u3002\u5f53\u7136\uff0c\u65f6\u523b\u5907\u4efd image \u5e76\u4e0d\u662f\u5bb9\u6613\u7684\u4e8b\u60c5\uff0c\u9274\u4e8e\u8be5\u6545\u969c\u5e38\u89c1\u4e8e\u96c6\u7fa4\u5347\u7ea7\uff0c\u6211\u4eec\u5efa\u8bae\u5728\u96c6\u7fa4\u5347\u7ea7\u7684\u7a0b\u5e8f\u4e2d\uff0c\u589e\u52a0\u7b80\u5355\u7684\u672c\u5730 image \u5907\u4efd\u903b\u8f91\uff0c\u4fdd\u8bc1\u6bcf\u6b21\u5347\u7ea7\u62c9\u8d77 FE \u8fdb\u7a0b\u524d\u4f1a\u4fdd\u7559\u4e00\u4efd\u5f53\u524d\u6700\u65b0\u7684 image \u6570\u636e\u3002 \u5bf9\u4e8e BE \u8282\u70b9\u6545\u969c\uff0c\u5982\u679c\u662f\u8fdb\u7a0b\u5d29\u6e83\uff0c\u4f1a\u4ea7\u751f Core \u6587\u4ef6\uff0c\u4e14 Minos \u4f1a\u81ea\u52a8\u62c9\u53d6\u8fdb\u7a0b\uff1b\u5982\u679c\u662f\u4efb\u52a1\u5361\u4f4f\uff0c\u5219\u9700\u8981\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4fdd\u7559\u7ebf\u7a0b\u5feb\u7167\u540e\u91cd\u542f\u8fdb\u7a0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-undefined"},"pstack \u8fdb\u7a0bID >> \u5feb\u7167\u6587\u4ef6\u540d.pstack\n")),(0,r.kt)("h1",{id:"\u7ed3\u675f\u8bed"},"\u7ed3\u675f\u8bed"),(0,r.kt)("p",null,"\u81ea\u4ece 2019 \u5e74 9 \u6708\u5c0f\u7c73\u96c6\u56e2\u9996\u6b21\u5f15\u5165 Apache Doris \u4ee5\u6765\uff0c\u5728\u4e24\u5e74\u591a\u7684\u65f6\u95f4\u91cc\uff0c Apache Doris \u5df2\u7ecf\u5728\u5c0f\u7c73\u5185\u90e8\u5f97\u5230\u4e86\u5e7f\u6cdb\u7684 \u4f7f\u7528\uff0c\u76ee\u524d\u5df2\u7ecf\u670d\u52a1\u4e86\u5c0f\u7c73\u6570\u5341\u4e2a\u4e1a\u52a1\u3001\u96c6\u7fa4\u6570\u91cf\u8fbe\u51e0\u5341\u4e2a\u3001\u8282\u70b9\u89c4\u6a21\u8fbe\u5230\u6570\u767e\u4e2a\uff0c\u5e76\u4e14\u5df2\u7ecf\u5728\u5c0f\u7c73\u5185\u90e8\u5f62\u6210\u4e86\u4e00\u5957\u4ee5 Apache Doris \u4e3a\u6838\u5fc3\u7684\u6570\u636e\u751f\u6001\u3002 \u4e3a\u4e86\u63d0\u9ad8\u8fd0\u7ef4\u6548\u7387\uff0c\u5c0f\u7c73\u5185\u90e8\u4e5f\u56f4\u7ed5 Doris \u7814\u53d1\u4e86\u4e00\u6574\u5957\u7684\u81ea\u52a8\u5316\u7ba1\u7406\u548c\u8fd0\u7ef4\u7cfb\u7edf\u3002 \u968f\u7740\u670d\u52a1\u7684\u4e1a\u52a1\u8d8a\u6765\u8d8a\u591a\uff0c\u5f53\u7136 Doris \u4e5f\u66b4\u9732\u51fa\u4e86\u4e00\u4e9b\u95ee\u9898\uff0c\u6bd4\u5982\u5728\u8fc7\u53bb\u7248\u672c\u6ca1\u6709\u6bd4\u8f83\u597d\u7684\u8d44\u6e90\u9694\u79bb\u673a\u5236\u3001\u4e1a\u52a1\u4e4b\u95f4\u4f1a\u76f8\u4e92\u5f71\u54cd\uff0c\u53e6\u5916\u7cfb\u7edf\u76d1\u63a7\u8fd8\u6709\u5f85\u7ee7\u7eed\u5b8c\u5584\u3002 \u968f\u7740\u793e\u533a\u7684\u5feb\u901f\u53d1\u5c55\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u5c0f\u4f19\u4f34\u53c2\u4e0e\u5230\u4e86\u793e\u533a\u5efa\u8bbe\uff0c\u5411\u91cf\u5316\u5f15\u64ce\u5df2\u7ecf\u6539\u9020\u5b8c\u6210\uff0c\u67e5\u8be2\u4f18\u5316\u5668\u7684\u6539\u9020\u5de5\u4f5c\u6b63\u5728\u5982\u706b\u5982\u837c\u5730\u8fdb\u884c\uff0cApache Doris \u6b63\u5728\u9010\u6e10\u8d70\u5411\u6210\u719f\u3002"))}u.isMDXComponent=!0}}]);