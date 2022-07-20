"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[18879],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>s});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=l.createContext({}),m=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=m(e.components);return l.createElement(o.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),u=m(a),s=r,d=u["".concat(o,".").concat(s)]||u[s]||N[s]||n;return a?l.createElement(d,i(i({ref:t},k),{},{components:a})):l.createElement(d,i({ref:t},k))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<n;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>N,frontMatter:()=>n,metadata:()=>p,toc:()=>m});var l=a(87462),r=(a(67294),a(3905));const n={title:"\u5907\u4efd\u4e0e\u6062\u590d",language:"zh-CN"},i=void 0,p={unversionedId:"administrator-guide/backup-restore",id:"version-1.0/administrator-guide/backup-restore",title:"\u5907\u4efd\u4e0e\u6062\u590d",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/administrator-guide/backup-restore.md",sourceDirName:"administrator-guide",slug:"/administrator-guide/backup-restore",permalink:"/zh-CN/docs/1.0/administrator-guide/backup-restore",draft:!1,tags:[],version:"1.0",frontMatter:{title:"\u5907\u4efd\u4e0e\u6062\u590d",language:"zh-CN"},sidebar:"docs",previous:{title:"SQL\u9ed1\u540d\u5355",permalink:"/zh-CN/docs/1.0/administrator-guide/block-rule/sql-block"},next:{title:"BloomFilter\u7d22\u5f15",permalink:"/zh-CN/docs/1.0/administrator-guide/bloomfilter"}},o={},m=[{value:"\u7b80\u8981\u539f\u7406\u8bf4\u660e",id:"\u7b80\u8981\u539f\u7406\u8bf4\u660e",level:2},{value:"\u5907\u4efd\uff08Backup\uff09",id:"\u5907\u4efdbackup",level:3},{value:"\u6062\u590d\uff08Restore\uff09",id:"\u6062\u590drestore",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u5907\u4efd",id:"\u5907\u4efd",level:3},{value:"\u6570\u636e\u8fc1\u79fb",id:"\u6570\u636e\u8fc1\u79fb",level:3},{value:"\u91cd\u70b9\u8bf4\u660e",id:"\u91cd\u70b9\u8bf4\u660e",level:2},{value:"\u76f8\u5173\u547d\u4ee4",id:"\u76f8\u5173\u547d\u4ee4",level:2}],k={toc:m};function N(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5907\u4efd\u4e0e\u6062\u590d"},"\u5907\u4efd\u4e0e\u6062\u590d"),(0,r.kt)("p",null,"Doris \u652f\u6301\u5c06\u5f53\u524d\u6570\u636e\u4ee5\u6587\u4ef6\u7684\u5f62\u5f0f\uff0c\u901a\u8fc7 broker \u5907\u4efd\u5230\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\u3002\u4e4b\u540e\u53ef\u4ee5\u901a\u8fc7 \u6062\u590d \u547d\u4ee4\uff0c\u4ece\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\u5c06\u6570\u636e\u6062\u590d\u5230\u4efb\u610f Doris \u96c6\u7fa4\u3002\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\uff0cDoris \u53ef\u4ee5\u652f\u6301\u5c06\u6570\u636e\u5b9a\u671f\u7684\u8fdb\u884c\u5feb\u7167\u5907\u4efd\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\uff0c\u5728\u4e0d\u540c\u96c6\u7fa4\u95f4\u8fdb\u884c\u6570\u636e\u8fc1\u79fb\u3002"),(0,r.kt)("p",null,"\u8be5\u529f\u80fd\u9700\u8981 Doris \u7248\u672c 0.8.2+"),(0,r.kt)("p",null,"\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u9700\u8981\u90e8\u7f72\u5bf9\u5e94\u8fdc\u7aef\u5b58\u50a8\u7684 broker\u3002\u5982 BOS\u3001HDFS \u7b49\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW BROKER;")," \u67e5\u770b\u5f53\u524d\u90e8\u7f72\u7684 broker\u3002"),(0,r.kt)("h2",{id:"\u7b80\u8981\u539f\u7406\u8bf4\u660e"},"\u7b80\u8981\u539f\u7406\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u5907\u4efdbackup"},"\u5907\u4efd\uff08Backup\uff09"),(0,r.kt)("p",null,"\u5907\u4efd\u64cd\u4f5c\u662f\u5c06\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u6570\u636e\uff0c\u76f4\u63a5\u4ee5 Doris \u5b58\u50a8\u7684\u6587\u4ef6\u7684\u5f62\u5f0f\uff0c\u4e0a\u4f20\u5230\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u8fdb\u884c\u5b58\u50a8\u3002\u5f53\u7528\u6237\u63d0\u4ea4 Backup \u8bf7\u6c42\u540e\uff0c\u7cfb\u7edf\u5185\u90e8\u4f1a\u505a\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5feb\u7167\u53ca\u5feb\u7167\u4e0a\u4f20"),(0,r.kt)("p",{parentName:"li"},"\u5feb\u7167\u9636\u6bb5\u4f1a\u5bf9\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a\u6570\u636e\u6587\u4ef6\u8fdb\u884c\u5feb\u7167\u3002\u4e4b\u540e\uff0c\u5907\u4efd\u90fd\u662f\u5bf9\u5feb\u7167\u8fdb\u884c\u64cd\u4f5c\u3002\u5728\u5feb\u7167\u4e4b\u540e\uff0c\u5bf9\u8868\u8fdb\u884c\u7684\u66f4\u6539\u3001\u5bfc\u5165\u7b49\u64cd\u4f5c\u90fd\u4e0d\u518d\u5f71\u54cd\u5907\u4efd\u7684\u7ed3\u679c\u3002\u5feb\u7167\u53ea\u662f\u5bf9\u5f53\u524d\u6570\u636e\u6587\u4ef6\u4ea7\u751f\u4e00\u4e2a\u786c\u94fe\uff0c\u8017\u65f6\u5f88\u5c11\u3002\u5feb\u7167\u5b8c\u6210\u540e\uff0c\u4f1a\u5f00\u59cb\u5bf9\u8fd9\u4e9b\u5feb\u7167\u6587\u4ef6\u8fdb\u884c\u9010\u4e00\u4e0a\u4f20\u3002\u5feb\u7167\u4e0a\u4f20\u7531\u5404\u4e2a Backend \u5e76\u53d1\u5b8c\u6210\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5143\u6570\u636e\u51c6\u5907\u53ca\u4e0a\u4f20"),(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u6587\u4ef6\u5feb\u7167\u4e0a\u4f20\u5b8c\u6210\u540e\uff0cFrontend \u4f1a\u9996\u5148\u5c06\u5bf9\u5e94\u5143\u6570\u636e\u5199\u6210\u672c\u5730\u6587\u4ef6\uff0c\u7136\u540e\u901a\u8fc7 broker \u5c06\u672c\u5730\u5143\u6570\u636e\u6587\u4ef6\u4e0a\u4f20\u5230\u8fdc\u7aef\u4ed3\u5e93\u3002\u5b8c\u6210\u6700\u7ec8\u5907\u4efd\u4f5c\u4e1a\u3002"))),(0,r.kt)("h3",{id:"\u6062\u590drestore"},"\u6062\u590d\uff08Restore\uff09"),(0,r.kt)("p",null,"\u6062\u590d\u64cd\u4f5c\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u5df2\u5b58\u5728\u7684\u5907\u4efd\uff0c\u7136\u540e\u5c06\u8fd9\u4e2a\u5907\u4efd\u7684\u5185\u5bb9\u6062\u590d\u5230\u672c\u5730\u96c6\u7fa4\u4e2d\u3002\u5f53\u7528\u6237\u63d0\u4ea4 Restore \u8bf7\u6c42\u540e\uff0c\u7cfb\u7edf\u5185\u90e8\u4f1a\u505a\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u672c\u5730\u521b\u5efa\u5bf9\u5e94\u7684\u5143\u6570\u636e"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e00\u6b65\u9996\u5148\u4f1a\u5728\u672c\u5730\u96c6\u7fa4\u4e2d\uff0c\u521b\u5efa\u6062\u590d\u5bf9\u5e94\u7684\u8868\u5206\u533a\u7b49\u7ed3\u6784\u3002\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u8be5\u8868\u53ef\u89c1\uff0c\u4f46\u662f\u4e0d\u53ef\u8bbf\u95ee\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u672c\u5730snapshot"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e00\u6b65\u662f\u5c06\u4e0a\u4e00\u6b65\u521b\u5efa\u7684\u8868\u505a\u4e00\u4e2a\u5feb\u7167\u3002\u8fd9\u5176\u5b9e\u662f\u4e00\u4e2a\u7a7a\u5feb\u7167\uff08\u56e0\u4e3a\u521a\u521b\u5efa\u7684\u8868\u662f\u6ca1\u6709\u6570\u636e\u7684\uff09\uff0c\u5176\u76ee\u7684\u4e3b\u8981\u662f\u5728 Backend \u4e0a\u4ea7\u751f\u5bf9\u5e94\u7684\u5feb\u7167\u76ee\u5f55\uff0c\u7528\u4e8e\u4e4b\u540e\u63a5\u6536\u4ece\u8fdc\u7aef\u4ed3\u5e93\u4e0b\u8f7d\u7684\u5feb\u7167\u6587\u4ef6\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5feb\u7167"),(0,r.kt)("p",{parentName:"li"},"\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u7684\u5feb\u7167\u6587\u4ef6\uff0c\u4f1a\u88ab\u4e0b\u8f7d\u5230\u5bf9\u5e94\u7684\u4e0a\u4e00\u6b65\u751f\u6210\u7684\u5feb\u7167\u76ee\u5f55\u4e2d\u3002\u8fd9\u4e00\u6b65\u7531\u5404\u4e2a Backend \u5e76\u53d1\u5b8c\u6210\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u751f\u6548\u5feb\u7167"),(0,r.kt)("p",{parentName:"li"},"\u5feb\u7167\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u8981\u5c06\u5404\u4e2a\u5feb\u7167\u6620\u5c04\u4e3a\u5f53\u524d\u672c\u5730\u8868\u7684\u5143\u6570\u636e\u3002\u7136\u540e\u91cd\u65b0\u52a0\u8f7d\u8fd9\u4e9b\u5feb\u7167\uff0c\u4f7f\u4e4b\u751f\u6548\uff0c\u5b8c\u6210\u6700\u7ec8\u7684\u6062\u590d\u4f5c\u4e1a\u3002"))),(0,r.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("h3",{id:"\u5907\u4efd"},"\u5907\u4efd"),(0,r.kt)("p",null,"\u5f53\u524d\u6211\u4eec\u652f\u6301\u6700\u5c0f\u5206\u533a\uff08Partition\uff09\u7c92\u5ea6\u7684\u5168\u91cf\u5907\u4efd\uff08\u589e\u91cf\u5907\u4efd\u6709\u53ef\u80fd\u5728\u672a\u6765\u7248\u672c\u652f\u6301\uff09\u3002\u5982\u679c\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u5b9a\u671f\u5907\u4efd\uff0c\u9996\u5148\u9700\u8981\u5728\u5efa\u8868\u65f6\uff0c\u5408\u7406\u7684\u89c4\u5212\u8868\u7684\u5206\u533a\u53ca\u5206\u6876\uff0c\u6bd4\u5982\u6309\u65f6\u95f4\u8fdb\u884c\u5206\u533a\u3002\u7136\u540e\u5728\u4e4b\u540e\u7684\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u6309\u7167\u5206\u533a\u7c92\u5ea6\u8fdb\u884c\u5b9a\u671f\u7684\u6570\u636e\u5907\u4efd\u3002"),(0,r.kt)("h3",{id:"\u6570\u636e\u8fc1\u79fb"},"\u6570\u636e\u8fc1\u79fb"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5148\u5c06\u6570\u636e\u5907\u4efd\u5230\u8fdc\u7aef\u4ed3\u5e93\uff0c\u518d\u901a\u8fc7\u8fdc\u7aef\u4ed3\u5e93\u5c06\u6570\u636e\u6062\u590d\u5230\u53e6\u4e00\u4e2a\u96c6\u7fa4\uff0c\u5b8c\u6210\u6570\u636e\u8fc1\u79fb\u3002\u56e0\u4e3a\u6570\u636e\u5907\u4efd\u662f\u901a\u8fc7\u5feb\u7167\u7684\u5f62\u5f0f\u5b8c\u6210\u7684\uff0c\u6240\u4ee5\uff0c\u5728\u5907\u4efd\u4f5c\u4e1a\u7684\u5feb\u7167\u9636\u6bb5\u4e4b\u540e\u7684\u65b0\u7684\u5bfc\u5165\u6570\u636e\uff0c\u662f\u4e0d\u4f1a\u5907\u4efd\u7684\u3002\u56e0\u6b64\uff0c\u5728\u5feb\u7167\u5b8c\u6210\u540e\uff0c\u5230\u6062\u590d\u4f5c\u4e1a\u5b8c\u6210\u8fd9\u671f\u95f4\uff0c\u5728\u539f\u96c6\u7fa4\u4e0a\u5bfc\u5165\u7684\u6570\u636e\uff0c\u90fd\u9700\u8981\u5728\u65b0\u96c6\u7fa4\u4e0a\u540c\u6837\u5bfc\u5165\u4e00\u904d\u3002"),(0,r.kt)("p",null,"\u5efa\u8bae\u5728\u8fc1\u79fb\u5b8c\u6210\u540e\uff0c\u5bf9\u65b0\u65e7\u4e24\u4e2a\u96c6\u7fa4\u5e76\u884c\u5bfc\u5165\u4e00\u6bb5\u65f6\u95f4\u3002\u5b8c\u6210\u6570\u636e\u548c\u4e1a\u52a1\u6b63\u786e\u6027\u6821\u9a8c\u540e\uff0c\u518d\u5c06\u4e1a\u52a1\u8fc1\u79fb\u5230\u65b0\u7684\u96c6\u7fa4\u3002"),(0,r.kt)("h2",{id:"\u91cd\u70b9\u8bf4\u660e"},"\u91cd\u70b9\u8bf4\u660e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5907\u4efd\u6062\u590d\u76f8\u5173\u7684\u64cd\u4f5c\u76ee\u524d\u53ea\u5141\u8bb8\u62e5\u6709 ADMIN \u6743\u9650\u7684\u7528\u6237\u6267\u884c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e00\u4e2a Database \u5185\uff0c\u53ea\u5141\u8bb8\u6709\u4e00\u4e2a\u6b63\u5728\u6267\u884c\u7684\u5907\u4efd\u6216\u6062\u590d\u4f5c\u4e1a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5907\u4efd\u548c\u6062\u590d\u90fd\u652f\u6301\u6700\u5c0f\u5206\u533a\uff08Partition\uff09\u7ea7\u522b\u7684\u64cd\u4f5c\uff0c\u5f53\u8868\u7684\u6570\u636e\u91cf\u5f88\u5927\u65f6\uff0c\u5efa\u8bae\u6309\u5206\u533a\u5206\u522b\u6267\u884c\uff0c\u4ee5\u964d\u4f4e\u5931\u8d25\u91cd\u8bd5\u7684\u4ee3\u4ef7\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u56e0\u4e3a\u5907\u4efd\u6062\u590d\u64cd\u4f5c\uff0c\u64cd\u4f5c\u7684\u90fd\u662f\u5b9e\u9645\u7684\u6570\u636e\u6587\u4ef6\u3002\u6240\u4ee5\u5f53\u4e00\u4e2a\u8868\u7684\u5206\u7247\u8fc7\u591a\uff0c\u6216\u8005\u4e00\u4e2a\u5206\u7247\u6709\u8fc7\u591a\u7684\u5c0f\u7248\u672c\u65f6\uff0c\u53ef\u80fd\u5373\u4f7f\u603b\u6570\u636e\u91cf\u5f88\u5c0f\uff0c\u4f9d\u7136\u9700\u8981\u5907\u4efd\u6216\u6062\u590d\u5f88\u957f\u65f6\u95f4\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"SHOW PARTITIONS FROM table_name;")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"SHOW TABLET FROM table_name;")," \u6765\u67e5\u770b\u5404\u4e2a\u5206\u533a\u7684\u5206\u7247\u6570\u91cf\uff0c\u4ee5\u53ca\u5404\u4e2a\u5206\u7247\u7684\u6587\u4ef6\u7248\u672c\u6570\u91cf\uff0c\u6765\u9884\u4f30\u4f5c\u4e1a\u6267\u884c\u65f6\u95f4\u3002\u6587\u4ef6\u6570\u91cf\u5bf9\u4f5c\u4e1a\u6267\u884c\u7684\u65f6\u95f4\u5f71\u54cd\u975e\u5e38\u5927\uff0c\u6240\u4ee5\u5efa\u8bae\u5728\u5efa\u8868\u65f6\uff0c\u5408\u7406\u89c4\u5212\u5206\u533a\u5206\u6876\uff0c\u4ee5\u907f\u514d\u8fc7\u591a\u7684\u5206\u7247\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"SHOW BACKUP")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"li"},"SHOW RESTORE")," \u547d\u4ee4\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001\u65f6\u3002\u6709\u53ef\u80fd\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"TaskErrMsg")," \u4e00\u5217\u4e2d\u770b\u5230\u9519\u8bef\u4fe1\u606f\u3002\u4f46\u53ea\u8981 ",(0,r.kt)("inlineCode",{parentName:"li"},"State")," \u5217\u4e0d\u4e3a\n",(0,r.kt)("inlineCode",{parentName:"li"},"CANCELLED"),"\uff0c\u5219\u8bf4\u660e\u4f5c\u4e1a\u4f9d\u7136\u5728\u7ee7\u7eed\u3002\u8fd9\u4e9b Task \u6709\u53ef\u80fd\u4f1a\u91cd\u8bd5\u6210\u529f\u3002\u5f53\u7136\uff0c\u6709\u4e9b Task \u9519\u8bef\uff0c\u4e5f\u4f1a\u76f4\u63a5\u5bfc\u81f4\u4f5c\u4e1a\u5931\u8d25\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6062\u590d\u4f5c\u4e1a\u662f\u4e00\u6b21\u8986\u76d6\u64cd\u4f5c\uff08\u6307\u5b9a\u6062\u590d\u6570\u636e\u5230\u5df2\u7ecf\u5b58\u5728\u7684\u8868\u6216\u5206\u533a\u4e2d\uff09\uff0c\u90a3\u4e48\u4ece\u6062\u590d\u4f5c\u4e1a\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"COMMIT")," \u9636\u6bb5\u5f00\u59cb\uff0c\u5f53\u524d\u96c6\u7fa4\u4e0a\u88ab\u8986\u76d6\u7684\u6570\u636e\u6709\u53ef\u80fd\u4e0d\u80fd\u518d\u88ab\u8fd8\u539f\u3002\u6b64\u65f6\u5982\u679c\u6062\u590d\u4f5c\u4e1a\u5931\u8d25\u6216\u88ab\u53d6\u6d88\uff0c\u6709\u53ef\u80fd\u9020\u6210\u4e4b\u524d\u7684\u6570\u636e\u5df2\u635f\u574f\u4e14\u65e0\u6cd5\u8bbf\u95ee\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ea\u80fd\u901a\u8fc7\u518d\u6b21\u6267\u884c\u6062\u590d\u64cd\u4f5c\uff0c\u5e76\u7b49\u5f85\u4f5c\u4e1a\u5b8c\u6210\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\uff0c\u5982\u65e0\u5fc5\u8981\uff0c\u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528\u8986\u76d6\u7684\u65b9\u5f0f\u6062\u590d\u6570\u636e\uff0c\u9664\u975e\u786e\u8ba4\u5f53\u524d\u6570\u636e\u5df2\u4e0d\u518d\u4f7f\u7528\u3002")),(0,r.kt)("h2",{id:"\u76f8\u5173\u547d\u4ee4"},"\u76f8\u5173\u547d\u4ee4"),(0,r.kt)("p",null,"\u548c\u5907\u4efd\u6062\u590d\u529f\u80fd\u76f8\u5173\u7684\u547d\u4ee4\u5982\u4e0b\u3002\u4ee5\u4e0b\u547d\u4ee4\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7 mysql-client \u8fde\u63a5 Doris \u540e\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"help cmd;")," \u7684\u65b9\u5f0f\u67e5\u770b\u8be6\u7ec6\u5e2e\u52a9\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"CREATE REPOSITORY"),(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u8fdc\u7aef\u4ed3\u5e93\u8def\u5f84\uff0c\u7528\u4e8e\u5907\u4efd\u6216\u6062\u590d\u3002\u8be5\u547d\u4ee4\u9700\u8981\u501f\u52a9 Broker \u8fdb\u7a0b\u8bbf\u95ee\u8fdc\u7aef\u5b58\u50a8\uff0c\u4e0d\u540c\u7684 Broker \u9700\u8981\u63d0\u4f9b\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u5177\u4f53\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.0/administrator-guide/broker"},"Broker\u6587\u6863"),"\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7S3 \u534f\u8bae\u5907\u4efd\u5230\u652f\u6301AWS S3\u534f\u8bae\u7684\u8fdc\u7a0b\u5b58\u50a8\u4e0a\u53bb\uff0c\u5177\u4f53\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"../sql-reference/sql-statements/Data%20Definition/CREATE%20REPOSITORY.md"},"\u521b\u5efa\u8fdc\u7a0b\u4ed3\u5e93\u6587\u6863"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"BACKUP"),(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u4e00\u6b21\u5907\u4efd\u64cd\u4f5c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SHOW BACKUP"),(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u6700\u8fd1\u4e00\u6b21 backup \u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\uff0c\u5305\u62ec\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JobId\uff1a\u672c\u6b21\u5907\u4efd\u4f5c\u4e1a\u7684 id\u3002"),(0,r.kt)("li",{parentName:"ul"},"SnapshotName\uff1a\u7528\u6237\u6307\u5b9a\u7684\u672c\u6b21\u5907\u4efd\u4f5c\u4e1a\u7684\u540d\u79f0\uff08Label\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"DbName\uff1a\u5907\u4efd\u4f5c\u4e1a\u5bf9\u5e94\u7684 Database\u3002"),(0,r.kt)("li",{parentName:"ul"},"State\uff1a\u5907\u4efd\u4f5c\u4e1a\u5f53\u524d\u6240\u5728\u9636\u6bb5\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PENDING\uff1a\u4f5c\u4e1a\u521d\u59cb\u72b6\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},"SNAPSHOTING\uff1a\u6b63\u5728\u8fdb\u884c\u5feb\u7167\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},"UPLOAD_SNAPSHOT\uff1a\u5feb\u7167\u7ed3\u675f\uff0c\u51c6\u5907\u4e0a\u4f20\u3002"),(0,r.kt)("li",{parentName:"ul"},"UPLOADING\uff1a\u6b63\u5728\u4e0a\u4f20\u5feb\u7167\u3002"),(0,r.kt)("li",{parentName:"ul"},"SAVE_META\uff1a\u6b63\u5728\u672c\u5730\u751f\u6210\u5143\u6570\u636e\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"UPLOAD_INFO\uff1a\u4e0a\u4f20\u5143\u6570\u636e\u6587\u4ef6\u548c\u672c\u6b21\u5907\u4efd\u4f5c\u4e1a\u7684\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"FINISHED\uff1a\u5907\u4efd\u5b8c\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},"CANCELLED\uff1a\u5907\u4efd\u5931\u8d25\u6216\u88ab\u53d6\u6d88\u3002"))),(0,r.kt)("li",{parentName:"ul"},"BackupObjs\uff1a\u672c\u6b21\u5907\u4efd\u6d89\u53ca\u7684\u8868\u548c\u5206\u533a\u7684\u6e05\u5355\u3002"),(0,r.kt)("li",{parentName:"ul"},"CreateTime\uff1a\u4f5c\u4e1a\u521b\u5efa\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"SnapshotFinishedTime\uff1a\u5feb\u7167\u5b8c\u6210\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"UploadFinishedTime\uff1a\u5feb\u7167\u4e0a\u4f20\u5b8c\u6210\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"FinishedTime\uff1a\u672c\u6b21\u4f5c\u4e1a\u5b8c\u6210\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"UnfinishedTasks\uff1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"SNAPSHOTTING"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"UPLOADING")," \u7b49\u9636\u6bb5\uff0c\u4f1a\u6709\u591a\u4e2a\u5b50\u4efb\u52a1\u5728\u540c\u65f6\u8fdb\u884c\uff0c\u8fd9\u91cc\u5c55\u793a\u7684\u5f53\u524d\u9636\u6bb5\uff0c\u672a\u5b8c\u6210\u7684\u5b50\u4efb\u52a1\u7684 task id\u3002"),(0,r.kt)("li",{parentName:"ul"},"TaskErrMsg\uff1a\u5982\u679c\u6709\u5b50\u4efb\u52a1\u6267\u884c\u51fa\u9519\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u5bf9\u5e94\u5b50\u4efb\u52a1\u7684\u9519\u8bef\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"Status\uff1a\u7528\u4e8e\u8bb0\u5f55\u5728\u6574\u4e2a\u4f5c\u4e1a\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u51fa\u73b0\u7684\u4e00\u4e9b\u72b6\u6001\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"Timeout\uff1a\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SHOW SNAPSHOT"),(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u5df2\u5b58\u5728\u7684\u5907\u4efd\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Snapshot\uff1a\u5907\u4efd\u65f6\u6307\u5b9a\u7684\u8be5\u5907\u4efd\u7684\u540d\u79f0\uff08Label\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"Timestamp\uff1a\u5907\u4efd\u7684\u65f6\u95f4\u6233\u3002"),(0,r.kt)("li",{parentName:"ul"},"Status\uff1a\u8be5\u5907\u4efd\u662f\u5426\u6b63\u5e38\u3002")),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW SNAPSHOT")," \u540e\u6307\u5b9a\u4e86 where \u5b50\u53e5\uff0c\u5219\u53ef\u4ee5\u663e\u793a\u66f4\u8be6\u7ec6\u7684\u5907\u4efd\u4fe1\u606f\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Database\uff1a\u5907\u4efd\u65f6\u5bf9\u5e94\u7684 Database\u3002"),(0,r.kt)("li",{parentName:"ul"},"Details\uff1a\u5c55\u793a\u4e86\u8be5\u5907\u4efd\u5b8c\u6574\u7684\u6570\u636e\u76ee\u5f55\u7ed3\u6784\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"RESTORE"),(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u4e00\u6b21\u6062\u590d\u64cd\u4f5c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SHOW RESTORE"),(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u6700\u8fd1\u4e00\u6b21 restore \u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\uff0c\u5305\u62ec\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JobId\uff1a\u672c\u6b21\u6062\u590d\u4f5c\u4e1a\u7684 id\u3002"),(0,r.kt)("li",{parentName:"ul"},"Label\uff1a\u7528\u6237\u6307\u5b9a\u7684\u4ed3\u5e93\u4e2d\u5907\u4efd\u7684\u540d\u79f0\uff08Label\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"Timestamp\uff1a\u7528\u6237\u6307\u5b9a\u7684\u4ed3\u5e93\u4e2d\u5907\u4efd\u7684\u65f6\u95f4\u6233\u3002"),(0,r.kt)("li",{parentName:"ul"},"DbName\uff1a\u6062\u590d\u4f5c\u4e1a\u5bf9\u5e94\u7684 Database\u3002"),(0,r.kt)("li",{parentName:"ul"},"State\uff1a\u6062\u590d\u4f5c\u4e1a\u5f53\u524d\u6240\u5728\u9636\u6bb5\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PENDING\uff1a\u4f5c\u4e1a\u521d\u59cb\u72b6\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},"SNAPSHOTING\uff1a\u6b63\u5728\u8fdb\u884c\u672c\u5730\u65b0\u5efa\u8868\u7684\u5feb\u7167\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},"DOWNLOAD\uff1a\u6b63\u5728\u53d1\u9001\u4e0b\u8f7d\u5feb\u7167\u4efb\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},"DOWNLOADING\uff1a\u5feb\u7167\u6b63\u5728\u4e0b\u8f7d\u3002"),(0,r.kt)("li",{parentName:"ul"},"COMMIT\uff1a\u51c6\u5907\u751f\u6548\u5df2\u4e0b\u8f7d\u7684\u5feb\u7167\u3002"),(0,r.kt)("li",{parentName:"ul"},"COMMITTING\uff1a\u6b63\u5728\u751f\u6548\u5df2\u4e0b\u8f7d\u7684\u5feb\u7167\u3002"),(0,r.kt)("li",{parentName:"ul"},"FINISHED\uff1a\u6062\u590d\u5b8c\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},"CANCELLED\uff1a\u6062\u590d\u5931\u8d25\u6216\u88ab\u53d6\u6d88\u3002"))),(0,r.kt)("li",{parentName:"ul"},"AllowLoad\uff1a\u6062\u590d\u671f\u95f4\u662f\u5426\u5141\u8bb8\u5bfc\u5165\u3002"),(0,r.kt)("li",{parentName:"ul"},"ReplicationNum\uff1a\u6062\u590d\u6307\u5b9a\u7684\u526f\u672c\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"RestoreObjs\uff1a\u672c\u6b21\u6062\u590d\u6d89\u53ca\u7684\u8868\u548c\u5206\u533a\u7684\u6e05\u5355\u3002"),(0,r.kt)("li",{parentName:"ul"},"CreateTime\uff1a\u4f5c\u4e1a\u521b\u5efa\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"MetaPreparedTime\uff1a\u672c\u5730\u5143\u6570\u636e\u751f\u6210\u5b8c\u6210\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"SnapshotFinishedTime\uff1a\u672c\u5730\u5feb\u7167\u5b8c\u6210\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"DownloadFinishedTime\uff1a\u8fdc\u7aef\u5feb\u7167\u4e0b\u8f7d\u5b8c\u6210\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"FinishedTime\uff1a\u672c\u6b21\u4f5c\u4e1a\u5b8c\u6210\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"UnfinishedTasks\uff1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"SNAPSHOTTING"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"DOWNLOADING"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"COMMITTING")," \u7b49\u9636\u6bb5\uff0c\u4f1a\u6709\u591a\u4e2a\u5b50\u4efb\u52a1\u5728\u540c\u65f6\u8fdb\u884c\uff0c\u8fd9\u91cc\u5c55\u793a\u7684\u5f53\u524d\u9636\u6bb5\uff0c\u672a\u5b8c\u6210\u7684\u5b50\u4efb\u52a1\u7684 task id\u3002"),(0,r.kt)("li",{parentName:"ul"},"TaskErrMsg\uff1a\u5982\u679c\u6709\u5b50\u4efb\u52a1\u6267\u884c\u51fa\u9519\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u5bf9\u5e94\u5b50\u4efb\u52a1\u7684\u9519\u8bef\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"Status\uff1a\u7528\u4e8e\u8bb0\u5f55\u5728\u6574\u4e2a\u4f5c\u4e1a\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u51fa\u73b0\u7684\u4e00\u4e9b\u72b6\u6001\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"Timeout\uff1a\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"CANCEL BACKUP"),(0,r.kt)("p",{parentName:"li"},"\u53d6\u6d88\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u5907\u4efd\u4f5c\u4e1a\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"CANCEL RESTORE"),(0,r.kt)("p",{parentName:"li"},"\u53d6\u6d88\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u6062\u590d\u4f5c\u4e1a\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"DROP REPOSITORY"),(0,r.kt)("p",{parentName:"li"},"\u5220\u9664\u5df2\u521b\u5efa\u7684\u8fdc\u7aef\u4ed3\u5e93\u3002\u5220\u9664\u4ed3\u5e93\uff0c\u4ec5\u4ec5\u662f\u5220\u9664\u8be5\u4ed3\u5e93\u5728 Doris \u4e2d\u7684\u6620\u5c04\uff0c\u4e0d\u4f1a\u5220\u9664\u5b9e\u9645\u7684\u4ed3\u5e93\u6570\u636e\u3002"))))}N.isMDXComponent=!0}}]);