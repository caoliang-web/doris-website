"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[62412],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(h,l(l({ref:e},c),{},{components:r})):n.createElement(h,l({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15717:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u4e3a Doris \u505a\u8d21\u732e",language:"zh-CN"},l=void 0,i={unversionedId:"how-to-contribute/how-to-contribute",id:"how-to-contribute/how-to-contribute",title:"\u4e3a Doris \u505a\u8d21\u732e",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/how-to-contribute/how-to-contribute.md",sourceDirName:"how-to-contribute",slug:"/how-to-contribute/",permalink:"/zh-CN/community/how-to-contribute/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e3a Doris \u505a\u8d21\u732e",language:"zh-CN"},sidebar:"community",previous:{title:"\u95ee\u9898\u53cd\u9988",permalink:"/zh-CN/community/feedback"},next:{title:"Contributor \u6307\u5357",permalink:"/zh-CN/community/how-to-contribute/contributor-guide"}},u={},p=[{value:"\u521d\u6b21\u63a5\u89e6",id:"\u521d\u6b21\u63a5\u89e6",level:2},{value:"Doris \u7684\u4ee3\u7801\u548c\u6587\u6863",id:"doris-\u7684\u4ee3\u7801\u548c\u6587\u6863",level:2},{value:"\u6539\u8fdb\u6587\u6863",id:"\u6539\u8fdb\u6587\u6863",level:2},{value:"\u5982\u679c\u53d1\u73b0\u4e86\u4e00\u4e2a Bug \u6216\u95ee\u9898",id:"\u5982\u679c\u53d1\u73b0\u4e86\u4e00\u4e2a-bug-\u6216\u95ee\u9898",level:2},{value:"\u4fee\u6539\u4ee3\u7801\u548c\u63d0\u4ea4PR\uff08Pull Request\uff09",id:"\u4fee\u6539\u4ee3\u7801\u548c\u63d0\u4ea4prpull-request",level:2}],c={toc:p};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e3a-doris-\u505a\u8d21\u732e"},"\u4e3a Doris \u505a\u8d21\u732e"),(0,a.kt)("p",null,"\u975e\u5e38\u611f\u8c22\u60a8\u5bf9 Doris \u9879\u76ee\u611f\u5174\u8da3\uff0c\u6211\u4eec\u975e\u5e38\u6b22\u8fce\u60a8\u5bf9 Doris \u9879\u76ee\u7684\u5404\u79cd\u5efa\u8bae\u3001\u610f\u89c1\uff08\u5305\u62ec\u6279\u8bc4\uff09\u3001\u8bc4\u8bba\u548c\u8d21\u732e\u3002"),(0,a.kt)("p",null,"\u60a8\u5bf9 Doris \u7684\u5404\u79cd\u5efa\u8bae\u3001\u610f\u89c1\u3001\u8bc4\u8bba\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 GitHub \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/issues/new/choose"},"Issues")," \u63d0\u51fa\u3002"),(0,a.kt)("p",null,"\u53c2\u4e0e Doris \u9879\u76ee\u5e76\u4e3a\u5176\u4f5c\u51fa\u8d21\u732e\u7684\u65b9\u6cd5\u6709\u5f88\u591a\uff1a\u4ee3\u7801\u5b9e\u73b0\u3001\u6d4b\u8bd5\u7f16\u5199\u3001\u6d41\u7a0b\u5de5\u5177\u6539\u8fdb\u3001\u6587\u6863\u5b8c\u5584\u7b49\u7b49\u3002\u4efb\u4f55\u8d21\u732e\u6211\u4eec\u90fd\u4f1a\u975e\u5e38\u6b22\u8fce\uff0c\u5e76\u5c06\u60a8\u52a0\u5165\u8d21\u732e\u8005\u5217\u8868\uff0c\u8fdb\u4e00\u6b65\uff0c\u6709\u4e86\u8db3\u591f\u7684\u8d21\u732e\u540e\uff0c\u60a8\u8fd8\u53ef\u4ee5\u6709\u673a\u4f1a\u6210\u4e3a Apache \u7684 Committer\uff0c\u62e5\u6709 Apache \u90ae\u7bb1\uff0c\u5e76\u88ab\u6536\u5f55\u5230 ",(0,a.kt)("a",{parentName:"p",href:"http://people.apache.org/committer-index.html"},"Apache Committer \u5217\u8868\u4e2d"),"\u3002"),(0,a.kt)("p",null,"\u4efb\u4f55\u95ee\u9898\uff0c\u60a8\u90fd\u53ef\u4ee5\u8054\u7cfb\u6211\u4eec\u5f97\u5230\u53ca\u65f6\u89e3\u7b54\uff0c\u8054\u7cfb\u65b9\u5f0f\u5305\u62ec\u5fae\u4fe1\u3001Gitter\uff08GitHub\u63d0\u4f9b\u7684\u5373\u65f6\u804a\u5929\u5de5\u5177\uff09\u3001\u90ae\u4ef6\u7b49\u7b49\u3002"),(0,a.kt)("h2",{id:"\u521d\u6b21\u63a5\u89e6"},"\u521d\u6b21\u63a5\u89e6"),(0,a.kt)("p",null,"\u521d\u6b21\u6765\u5230 Doris \u793e\u533a\uff0c\u60a8\u53ef\u4ee5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5173\u6ce8 Doris ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/doris"},"Github \u4ee3\u7801\u5e93")),(0,a.kt)("li",{parentName:"ul"},"\u8ba2\u9605\u6211\u4eec\u7684 ",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/community/subscribe-mail-list"},"\u90ae\u4ef6\u5217\u8868"),"\uff1b "),(0,a.kt)("li",{parentName:"ul"},"\u52a0\u5165 Doris \u5fae\u4fe1\u7fa4(\u52a0\u5fae\u4fe1\u53f7\uff1amorningman-cmy, \u5907\u6ce8\uff1a\u52a0\u5165Doris\u7fa4) \u968f\u65f6\u63d0\u95ee\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u52a0\u5165 ",(0,a.kt)("a",{parentName:"li",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-11jb8gesh-7IukzSrdea6mqoG0HB4gZg"},"Slack"),";")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u65b9\u5f0f\u53ca\u65f6\u4e86\u89e3 Doris \u9879\u76ee\u7684\u5f00\u53d1\u52a8\u6001\u5e76\u4e3a\u60a8\u5173\u6ce8\u7684\u8bdd\u9898\u53d1\u8868\u610f\u89c1\u3002"),(0,a.kt)("h2",{id:"doris-\u7684\u4ee3\u7801\u548c\u6587\u6863"},"Doris \u7684\u4ee3\u7801\u548c\u6587\u6863"),(0,a.kt)("p",null,"\u6b63\u5982\u60a8\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/doris"},"GitHub")," \u4e0a\u770b\u5230\u7684\uff0cApache Doris (incubating) \u7684\u4ee3\u7801\u5e93\u4e3b\u8981\u5305\u62ec\u4e09\u90e8\u5206\uff1aFrontend (FE), Backend (BE) \u548c Broker (\u4e3a\u4e86\u652f\u6301 HDFS \u7b49\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\u4e0a\u7684\u6587\u4ef6\u8bfb\u53d6)\u3002\u6587\u6863\u4e3b\u8981\u662f Doris \u7f51\u7ad9\u548c GitHub \u4e0a\u7684 wiki\uff0c\u8fd8\u6709\u8fd0\u884c Doris \u7684\u65f6\u5019\u7684\u5728\u7ebf\u5e2e\u52a9\u624b\u518c\u3002\u8fd9\u4e9b\u7ec4\u4ef6\u7684\u8be6\u7ec6\u60c5\u51b5\u53c2\u89c1\u4e0b\u8868\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u76f8\u5173\u8bed\u8a00"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/apache/doris"},"Frontend daemon (FE)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u7531\u201c\u67e5\u8be2\u534f\u8c03\u5668\u201d\u548c\u201c\u5143\u6570\u636e\u7ba1\u7406\u5668\u201d\u7ec4\u6210"),(0,a.kt)("td",{parentName:"tr",align:null},"Java")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/apache/doris"},"Backend daemon (BE)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8d23\u5b58\u50a8\u6570\u636e\u548c\u6267\u884c\u67e5\u8be2\u7247\u6bb5"),(0,a.kt)("td",{parentName:"tr",align:null},"C++")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/apache/doris"},"Broker")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bfb\u53d6 HDFS \u6570\u636e\u5230 Doris"),(0,a.kt)("td",{parentName:"tr",align:null},"Java")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/apache/doris-website"},"Website")),(0,a.kt)("td",{parentName:"tr",align:null},"Doris \u7f51\u7ad9"),(0,a.kt)("td",{parentName:"tr",align:null},"Markdown")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/apache/doris-manager"},"Manager")),(0,a.kt)("td",{parentName:"tr",align:null},"Doris Manager"),(0,a.kt)("td",{parentName:"tr",align:null},"Java")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/apache/doris-flink-connector"},"Flink-Connector")),(0,a.kt)("td",{parentName:"tr",align:null},"Doris Flink Connector"),(0,a.kt)("td",{parentName:"tr",align:null},"Java")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/apache/doris-spark-connector"},"Spark-Connector")),(0,a.kt)("td",{parentName:"tr",align:null},"Doris Spark Connector"),(0,a.kt)("td",{parentName:"tr",align:null},"Java")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Doris \u8fd0\u884c\u65f6 help \u6587\u6863"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c Doris \u7684\u65f6\u5019\u7684\u5728\u7ebf\u5e2e\u52a9\u624b\u518c"),(0,a.kt)("td",{parentName:"tr",align:null},"Markdown")))),(0,a.kt)("h2",{id:"\u6539\u8fdb\u6587\u6863"},"\u6539\u8fdb\u6587\u6863"),(0,a.kt)("p",null,"\u6587\u6863\u662f\u60a8\u4e86\u89e3 Apache Doris \u7684\u6700\u4e3b\u8981\u7684\u65b9\u5f0f\uff0c\u4e5f\u662f\u6211\u4eec\u6700\u9700\u8981\u5e2e\u52a9\u7684\u5730\u65b9\uff01"),(0,a.kt)("p",null,"\u6d4f\u89c8\u6587\u6863\uff0c\u53ef\u4ee5\u52a0\u6df1\u60a8\u5bf9 Doris \u7684\u4e86\u89e3\uff0c\u4e5f\u53ef\u4ee5\u5e2e\u52a9\u60a8\u7406\u89e3 Doris \u7684\u529f\u80fd\u548c\u6280\u672f\u7ec6\u8282\uff0c\u5982\u679c\u60a8\u53d1\u73b0\u6587\u6863\u6709\u95ee\u9898\uff0c\u8bf7\u53ca\u65f6\u8054\u7cfb\u6211\u4eec\uff1b"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5bf9\u6539\u8fdb\u6587\u6863\u7684\u8d28\u91cf\u611f\u5174\u8da3\uff0c\u4e0d\u8bba\u662f\u4fee\u8ba2\u4e00\u4e2a\u9875\u9762\u7684\u5730\u5740\u3001\u66f4\u6b63\u4e00\u4e2a\u94fe\u63a5\u3001\u4ee5\u53ca\u5199\u4e00\u7bc7\u66f4\u4f18\u79c0\u7684\u5165\u95e8\u6587\u6863\uff0c\u6211\u4eec\u90fd\u975e\u5e38\u6b22\u8fce\uff01"),(0,a.kt)("p",null,"\u6211\u4eec\u7684\u6587\u6863\u5927\u591a\u6570\u662f\u4f7f\u7528 markdown \u683c\u5f0f\u7f16\u5199\u7684\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/doris"},"GitHub")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/")," \u4e2d\u4fee\u6539\u5e76\u63d0\u4ea4\u6587\u6863\u53d8\u66f4\u3002\u5982\u679c\u63d0\u4ea4\u4ee3\u7801\u53d8\u66f4\uff0c\u53ef\u4ee5\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/community/how-to-contribute/pull-request"},"Pull Request"),"\u3002"),(0,a.kt)("h2",{id:"\u5982\u679c\u53d1\u73b0\u4e86\u4e00\u4e2a-bug-\u6216\u95ee\u9898"},"\u5982\u679c\u53d1\u73b0\u4e86\u4e00\u4e2a Bug \u6216\u95ee\u9898"),(0,a.kt)("p",null,"\u5982\u679c\u53d1\u73b0\u4e86\u4e00\u4e2a Bug \u6216\u95ee\u9898\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 GitHub \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/issues/new/choose"},"Issues")," \u63d0\u4e00\u4e2a\u65b0\u7684 Issue\uff0c\u6211\u4eec\u4f1a\u6709\u4eba\u5b9a\u671f\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u9605\u8bfb\u5206\u6790\u4ee3\u7801\u81ea\u5df1\u4fee\u590d\uff08\u5f53\u7136\u5728\u8fd9\u4e4b\u524d\u6700\u597d\u80fd\u548c\u6211\u4eec\u4ea4\u6d41\u4e0b\uff0c\u6216\u8bb8\u5df2\u7ecf\u6709\u4eba\u5728\u4fee\u590d\u540c\u6837\u7684\u95ee\u9898\u4e86\uff09\uff0c\u7136\u540e\u63d0\u4ea4\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/community/how-to-contribute/pull-request"},"Pull Request"),"\u3002"),(0,a.kt)("h2",{id:"\u4fee\u6539\u4ee3\u7801\u548c\u63d0\u4ea4prpull-request"},"\u4fee\u6539\u4ee3\u7801\u548c\u63d0\u4ea4PR\uff08Pull Request\uff09"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4e0b\u8f7d\u4ee3\u7801\uff0c\u7f16\u8bd1\u5b89\u88c5\uff0c\u90e8\u7f72\u8fd0\u884c\u8bd5\u4e00\u8bd5\uff08\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"../../install/source-install/compilation.md"},"\u7f16\u8bd1\u6587\u6863"),"\uff09\uff0c\u770b\u770b\u662f\u5426\u4e0e\u60a8\u9884\u60f3\u7684\u4e00\u6837\u5de5\u4f5c\u3002\u5982\u679c\u6709\u95ee\u9898\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8054\u7cfb\u6211\u4eec\uff0c\u63d0 Issue \u6216\u8005\u901a\u8fc7\u9605\u8bfb\u548c\u5206\u6790\u6e90\u4ee3\u7801\u81ea\u5df1\u4fee\u590d\u3002"),(0,a.kt)("p",null,"\u65e0\u8bba\u662f\u4fee\u590d Bug \u8fd8\u662f\u589e\u52a0 Feature\uff0c\u6211\u4eec\u90fd\u975e\u5e38\u6b22\u8fce\u3002\u5982\u679c\u60a8\u5e0c\u671b\u7ed9 Doris \u63d0\u4ea4\u4ee3\u7801\uff0c\u60a8\u9700\u8981\u4ece GitHub \u4e0a fork \u4ee3\u7801\u5e93\u81f3\u60a8\u7684\u9879\u76ee\u7a7a\u95f4\u4e0b\uff0c\u4e3a\u60a8\u63d0\u4ea4\u7684\u4ee3\u7801\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5206\u652f\uff0c\u6dfb\u52a0\u6e90\u9879\u76ee\u4e3aupstream\uff0c\u5e76\u63d0\u4ea4PR\u3002\n\u63d0\u4ea4PR\u7684\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003\u6587\u6863 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/community/how-to-contribute/pull-request"},"Pull Request"),"\u3002"))}s.isMDXComponent=!0}}]);