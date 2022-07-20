"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[10732],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),k=n,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||l;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},95483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u5e38\u89c1\u62a5\u9519",language:"zh-CN"},o=void 0,i={unversionedId:"faq/error",id:"version-1.0/faq/error",title:"\u5e38\u89c1\u62a5\u9519",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/faq/error.md",sourceDirName:"faq",slug:"/faq/error",permalink:"/zh-CN/docs/1.0/faq/error",draft:!1,tags:[],version:"1.0",frontMatter:{title:"\u5e38\u89c1\u62a5\u9519",language:"zh-CN"},sidebar:"docs",previous:{title:"FAQ",permalink:"/zh-CN/docs/1.0/faq/"}},p={},s=[{value:"E1. \u67e5\u8be2\u62a5\u9519\uff1aFailed to get scan range, no queryable replica found in tablet: xxxx",id:"e1-\u67e5\u8be2\u62a5\u9519failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx",level:3},{value:"E2. FE\u542f\u52a8\u5931\u8d25\uff0cfe.log\u4e2d\u4e00\u76f4\u6eda\u52a8 &quot;wait catalog to be ready. FE type UNKNOWN&quot;",id:"e2-fe\u542f\u52a8\u5931\u8d25felog\u4e2d\u4e00\u76f4\u6eda\u52a8-wait-catalog-to-be-ready-fe-type-unknown",level:3},{value:"E3. tablet writer write failed, tablet_id=27306172, txn_id=28573520, err=-235 or -215 or -238",id:"e3-tablet-writer-write-failed-tablet_id27306172-txn_id28573520-err-235-or--215-or--238",level:3},{value:"E4. tablet 110309738 has few replicas: 1, alive backends: 10003",id:"e4-tablet-110309738-has-few-replicas-1-alive-backends-10003",level:3},{value:"E5. disk xxxxx on backend xxx exceed limit usage",id:"e5-disk-xxxxx-on-backend-xxx-exceed-limit-usage",level:3},{value:"E6. invalid cluster id: xxxx",id:"e6-invalid-cluster-id-xxxx",level:3},{value:"E7. \u901a\u8fc7 Java \u7a0b\u5e8f\u8c03\u7528 stream load \u5bfc\u5165\u6570\u636e\uff0c\u5728\u4e00\u6279\u6b21\u6570\u636e\u91cf\u8f83\u5927\u65f6\uff0c\u53ef\u80fd\u4f1a\u62a5\u9519 Broken Pipe",id:"e7-\u901a\u8fc7-java-\u7a0b\u5e8f\u8c03\u7528-stream-load-\u5bfc\u5165\u6570\u636e\u5728\u4e00\u6279\u6b21\u6570\u636e\u91cf\u8f83\u5927\u65f6\u53ef\u80fd\u4f1a\u62a5\u9519-broken-pipe",level:3},{value:"E8. <code>Lost connection to MySQL server at &#39;reading initial communication packet&#39;, system error: 0</code>",id:"e8-lost-connection-to-mysql-server-at-reading-initial-communication-packet-system-error-0",level:3},{value:"E9. -214 \u9519\u8bef",id:"e9--214-\u9519\u8bef",level:3},{value:"E10. Not connected to 192.168.100.1:8060 yet, server_id=384",id:"e10-not-connected-to-19216810018060-yet-server_id384",level:3},{value:"E11. <code>recoveryTracker should overlap or follow on disk last VLSN of 4,422,880 recoveryFirst= 4,422,882 UNEXPECTED_STATE_FATAL</code>",id:"e11-recoverytracker-should-overlap-or-follow-on-disk-last-vlsn-of-4422880-recoveryfirst-4422882-unexpected_state_fatal",level:3},{value:"E12.Doris\u7f16\u8bd1\u5b89\u88c5JDK\u7248\u672c\u4e0d\u517c\u5bb9\u95ee\u9898",id:"e12doris\u7f16\u8bd1\u5b89\u88c5jdk\u7248\u672c\u4e0d\u517c\u5bb9\u95ee\u9898",level:3}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5e38\u89c1\u62a5\u9519"},"\u5e38\u89c1\u62a5\u9519"),(0,n.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u7528\u4e8e\u8bb0\u5f55 Doris \u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u62a5\u9519\uff0c\u5982\u679c\u60a8\u6709\u9047\u89c1\u4e00\u4e9b\u62a5\u9519\uff0c\u6b22\u8fce\u8d21\u732e\u7ed9\u6211\u4eec\u66f4\u65b0\u3002"),(0,n.kt)("h3",{id:"e1-\u67e5\u8be2\u62a5\u9519failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx"},"E1. \u67e5\u8be2\u62a5\u9519\uff1aFailed to get scan range, no queryable replica found in tablet: xxxx"),(0,n.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u662f\u56e0\u4e3a\u5bf9\u5e94\u7684 tablet \u6ca1\u6709\u627e\u5230\u53ef\u4ee5\u67e5\u8be2\u7684\u526f\u672c\uff0c\u901a\u5e38\u539f\u56e0\u53ef\u80fd\u662f BE \u5b95\u673a\u3001\u526f\u672c\u7f3a\u5931\u7b49\u3002\u53ef\u4ee5\u5148\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"show tablet tablet_id")," \u8bed\u53e5\uff0c\u7136\u540e\u6267\u884c\u540e\u9762\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"show proc")," \u8bed\u53e5\uff0c\u67e5\u770b\u8fd9\u4e2a tablet \u5bf9\u5e94\u7684\u526f\u672c\u4fe1\u606f\uff0c\u68c0\u67e5\u526f\u672c\u662f\u5426\u5b8c\u6574\u3002\u540c\u65f6\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},'show proc "/cluster_balance"')," \u4fe1\u606f\u6765\u67e5\u8be2\u96c6\u7fa4\u5185\u526f\u672c\u8c03\u5ea6\u548c\u4fee\u590d\u7684\u8fdb\u5ea6\u3002"),(0,n.kt)("p",null,"\u5173\u4e8e\u6570\u636e\u526f\u672c\u7ba1\u7406\u76f8\u5173\u7684\u547d\u4ee4\uff0c\u53ef\u4ee5\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.0/administrator-guide/operation/tablet-repair-and-balance"},"\u6570\u636e\u526f\u672c\u7ba1\u7406"),"\u3002"),(0,n.kt)("h3",{id:"e2-fe\u542f\u52a8\u5931\u8d25felog\u4e2d\u4e00\u76f4\u6eda\u52a8-wait-catalog-to-be-ready-fe-type-unknown"},'E2. FE\u542f\u52a8\u5931\u8d25\uff0cfe.log\u4e2d\u4e00\u76f4\u6eda\u52a8 "wait catalog to be ready. FE type UNKNOWN"'),(0,n.kt)("p",null,"\u8fd9\u79cd\u95ee\u9898\u901a\u5e38\u6709\u4e24\u4e2a\u539f\u56e0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u672c\u6b21FE\u542f\u52a8\u65f6\u83b7\u53d6\u5230\u7684\u672c\u673aIP\u548c\u4e0a\u6b21\u542f\u52a8\u4e0d\u4e00\u81f4\uff0c\u901a\u5e38\u662f\u56e0\u4e3a\u6ca1\u6709\u6b63\u786e\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"priority_network")," \u800c\u5bfc\u81f4 FE \u542f\u52a8\u65f6\u5339\u914d\u5230\u4e86\u9519\u8bef\u7684 IP \u5730\u5740\u3002\u9700\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"priority_network")," \u540e\u91cd\u542f FE\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u96c6\u7fa4\u5185\u591a\u6570 Follower FE \u8282\u70b9\u672a\u542f\u52a8\u3002\u6bd4\u5982\u6709 3 \u4e2a Follower\uff0c\u53ea\u542f\u52a8\u4e86\u4e00\u4e2a\u3002\u6b64\u65f6\u9700\u8981\u5c06\u53e6\u5916\u81f3\u5c11\u4e00\u4e2a FE \u4e5f\u542f\u52a8\uff0cFE \u53ef\u9009\u4e3e\u7ec4\u65b9\u80fd\u9009\u4e3e\u51fa Master \u5df2\u63d0\u4f9b\u670d\u52a1\u3002"))),(0,n.kt)("p",null,"\u5982\u679c\u4ee5\u4e0a\u60c5\u51b5\u90fd\u4e0d\u80fd\u89e3\u51b3\uff0c\u53ef\u4ee5\u6309\u7167 Doris \u5b98\u7f51\u6587\u6863\u4e2d\u7684",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.0/administrator-guide/operation/metadata-operation"},"\u5143\u6570\u636e\u8fd0\u7ef4\u6587\u6863"),"\u8fdb\u884c\u6062\u590d\uff1a"),(0,n.kt)("h3",{id:"e3-tablet-writer-write-failed-tablet_id27306172-txn_id28573520-err-235-or--215-or--238"},"E3. tablet writer write failed, tablet_id=27306172, txn_id=28573520, err=-235 or -215 or -238"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u901a\u5e38\u53d1\u751f\u5728\u6570\u636e\u5bfc\u5165\u64cd\u4f5c\u4e2d\u3002\u65b0\u7248\u9519\u8bef\u7801\u4e3a -235\uff0c\u8001\u7248\u672c\u9519\u8bef\u7801\u53ef\u80fd\u662f -215\u3002\u8fd9\u4e2a\u9519\u8bef\u7684\u542b\u4e49\u662f\uff0c\u5bf9\u5e94tablet\u7684\u6570\u636e\u7248\u672c\u8d85\u8fc7\u4e86\u6700\u5927\u9650\u5236\uff08\u9ed8\u8ba4500\uff0c\u7531 BE \u53c2\u6570 ",(0,n.kt)("inlineCode",{parentName:"p"},"max_tablet_version_num")," \u63a7\u5236\uff09\uff0c\u540e\u7eed\u5199\u5165\u5c06\u88ab\u62d2\u7edd\u3002\u6bd4\u5982\u95ee\u9898\u4e2d\u8fd9\u4e2a\u9519\u8bef\uff0c\u5373\u8868\u793a 27306172 \u8fd9\u4e2atablet\u7684\u6570\u636e\u7248\u672c\u8d85\u8fc7\u4e86\u9650\u5236\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u901a\u5e38\u662f\u56e0\u4e3a\u5bfc\u5165\u7684\u9891\u7387\u8fc7\u9ad8\uff0c\u5927\u4e8e\u540e\u53f0\u6570\u636e\u7684compaction\u901f\u5ea6\uff0c\u5bfc\u81f4\u7248\u672c\u5806\u79ef\u5e76\u6700\u7ec8\u8d85\u8fc7\u4e86\u9650\u5236\u3002\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5148\u901a\u8fc7show tablet 27306172 \u8bed\u53e5\uff0c\u7136\u540e\u6267\u884c\u7ed3\u679c\u4e2d\u7684 show proc \u8bed\u53e5\uff0c\u67e5\u770btablet\u5404\u4e2a\u526f\u672c\u7684\u60c5\u51b5\u3002\u7ed3\u679c\u4e2d\u7684 versionCount\u5373\u8868\u793a\u7248\u672c\u6570\u91cf\u3002\u5982\u679c\u53d1\u73b0\u67d0\u4e2a\u526f\u672c\u7684\u7248\u672c\u6570\u91cf\u8fc7\u591a\uff0c\u5219\u9700\u8981\u964d\u4f4e\u5bfc\u5165\u9891\u7387\u6216\u505c\u6b62\u5bfc\u5165\uff0c\u5e76\u89c2\u5bdf\u7248\u672c\u6570\u662f\u5426\u6709\u4e0b\u964d\u3002\u5982\u679c\u505c\u6b62\u5bfc\u5165\u540e\uff0c\u7248\u672c\u6570\u4f9d\u7136\u6ca1\u6709\u4e0b\u964d\uff0c\u5219\u9700\u8981\u53bb\u5bf9\u5e94\u7684BE\u8282\u70b9\u67e5\u770bbe.INFO\u65e5\u5fd7\uff0c\u641c\u7d22tablet id\u4ee5\u53ca compaction\u5173\u952e\u8bcd\uff0c\u68c0\u67e5compaction\u662f\u5426\u6b63\u5e38\u8fd0\u884c\u3002\u5173\u4e8ecompaction\u8c03\u4f18\u76f8\u5173\uff0c\u53ef\u4ee5\u53c2\u9605 ApacheDoris \u516c\u4f17\u53f7\u6587\u7ae0\uff1aDoris \u6700\u4f73\u5b9e\u8df5-Compaction\u8c03\u4f18(3)"),(0,n.kt)("p",null,"-238 \u9519\u8bef\u901a\u5e38\u51fa\u73b0\u5728\u540c\u4e00\u6279\u5bfc\u5165\u6570\u636e\u91cf\u8fc7\u5927\u7684\u60c5\u51b5\uff0c\u4ece\u800c\u5bfc\u81f4\u67d0\u4e00\u4e2a tablet \u7684 Segment \u6587\u4ef6\u8fc7\u591a\uff08\u9ed8\u8ba4\u662f 200\uff0c\u7531 BE \u53c2\u6570 ",(0,n.kt)("inlineCode",{parentName:"p"},"max_segment_num_per_rowset")," \u63a7\u5236\uff09\u3002\u6b64\u65f6\u5efa\u8bae\u51cf\u5c11\u4e00\u6279\u6b21\u5bfc\u5165\u7684\u6570\u636e\u91cf\uff0c\u6216\u8005\u9002\u5f53\u63d0\u9ad8 BE \u914d\u7f6e\u53c2\u6570\u503c\u6765\u89e3\u51b3\u3002"),(0,n.kt)("h3",{id:"e4-tablet-110309738-has-few-replicas-1-alive-backends-10003"},"E4. tablet 110309738 has few replicas: 1, alive backends: ","[10003]"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u53ef\u80fd\u53d1\u751f\u5728\u67e5\u8be2\u6216\u8005\u5bfc\u5165\u64cd\u4f5c\u4e2d\u3002\u901a\u5e38\u610f\u5473\u7740\u5bf9\u5e94tablet\u7684\u526f\u672c\u51fa\u73b0\u4e86\u5f02\u5e38\u3002"),(0,n.kt)("p",null,"\u6b64\u65f6\uff0c\u53ef\u4ee5\u5148\u901a\u8fc7 show backends \u547d\u4ee4\u68c0\u67e5BE\u8282\u70b9\u662f\u5426\u6709\u5b95\u673a\uff0c\u5982 isAlive \u5b57\u6bb5\u4e3afalse\uff0c\u6216\u8005 LastStartTime \u662f\u6700\u8fd1\u7684\u67d0\u4e2a\u65f6\u95f4\uff08\u8868\u793a\u6700\u8fd1\u91cd\u542f\u8fc7\uff09\u3002\u5982\u679cBE\u6709\u5b95\u673a\uff0c\u5219\u9700\u8981\u53bbBE\u5bf9\u5e94\u7684\u8282\u70b9\uff0c\u67e5\u770bbe.out\u65e5\u5fd7\u3002\u5982\u679cBE\u662f\u56e0\u4e3a\u5f02\u5e38\u539f\u56e0\u5b95\u673a\uff0c\u901a\u5e38be.out\u4e2d\u4f1a\u6253\u5370\u5f02\u5e38\u5806\u6808\uff0c\u5e2e\u52a9\u6392\u67e5\u95ee\u9898\u3002\u5982\u679cbe.out\u4e2d\u6ca1\u6709\u9519\u8bef\u5806\u6808\u3002\u5219\u53ef\u4ee5\u901a\u8fc7linux\u547d\u4ee4dmesg -T \u68c0\u67e5\u662f\u5426\u662f\u56e0\u4e3aOOM\u5bfc\u81f4\u8fdb\u7a0b\u88ab\u7cfb\u7edfkill\u6389\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u6ca1\u6709BE\u8282\u70b9\u5b95\u673a\uff0c\u5219\u9700\u8981\u901a\u8fc7show tablet 110309738 \u8bed\u53e5\uff0c\u7136\u540e\u6267\u884c\u7ed3\u679c\u4e2d\u7684 show proc \u8bed\u53e5\uff0c\u67e5\u770btablet\u5404\u4e2a\u526f\u672c\u7684\u60c5\u51b5\uff0c\u8fdb\u4e00\u6b65\u6392\u67e5\u3002"),(0,n.kt)("h3",{id:"e5-disk-xxxxx-on-backend-xxx-exceed-limit-usage"},"E5. disk xxxxx on backend xxx exceed limit usage"),(0,n.kt)("p",null,"\u901a\u5e38\u51fa\u73b0\u5728\u5bfc\u5165\u3001Alter\u7b49\u64cd\u4f5c\u4e2d\u3002\u8fd9\u4e2a\u9519\u8bef\u610f\u5473\u7740\u5bf9\u5e94BE\u7684\u5bf9\u5e94\u78c1\u76d8\u7684\u4f7f\u7528\u91cf\u8d85\u8fc7\u4e86\u9608\u503c\uff08\u9ed8\u8ba495%\uff09\u6b64\u65f6\u53ef\u4ee5\u5148\u901a\u8fc7 show backends \u547d\u4ee4\uff0c\u5176\u4e2dMaxDiskUsedPct\u5c55\u793a\u7684\u662f\u5bf9\u5e94BE\u4e0a\uff0c\u4f7f\u7528\u7387\u6700\u9ad8\u7684\u90a3\u5757\u78c1\u76d8\u7684\u4f7f\u7528\u7387\uff0c\u5982\u679c\u8d85\u8fc795%\uff0c\u5219\u4f1a\u62a5\u8fd9\u4e2a\u9519\u8bef\u3002"),(0,n.kt)("p",null,"\u6b64\u65f6\u9700\u8981\u524d\u5f80\u5bf9\u5e94BE\u8282\u70b9\uff0c\u67e5\u770b\u6570\u636e\u76ee\u5f55\u4e0b\u7684\u4f7f\u7528\u91cf\u60c5\u51b5\u3002\u5176\u4e2dtrash\u76ee\u5f55\u548csnapshot\u76ee\u5f55\u53ef\u4ee5\u624b\u52a8\u6e05\u7406\u4ee5\u91ca\u653e\u7a7a\u95f4\u3002\u5982\u679c\u662fdata\u76ee\u5f55\u5360\u7528\u8f83\u5927\uff0c\u5219\u9700\u8981\u8003\u8651\u5220\u9664\u90e8\u5206\u6570\u636e\u4ee5\u91ca\u653e\u7a7a\u95f4\u4e86\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.0/administrator-guide/operation/disk-capacity"},"\u78c1\u76d8\u7a7a\u95f4\u7ba1\u7406"),"\u3002"),(0,n.kt)("h3",{id:"e6-invalid-cluster-id-xxxx"},"E6. invalid cluster id: xxxx"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u53ef\u80fd\u4f1a\u5728show backends \u6216 show frontends \u547d\u4ee4\u7684\u7ed3\u679c\u4e2d\u51fa\u73b0\u3002\u901a\u5e38\u51fa\u73b0\u5728\u67d0\u4e2aFE\u6216BE\u8282\u70b9\u7684\u9519\u8bef\u4fe1\u606f\u5217\u4e2d\u3002\u8fd9\u4e2a\u9519\u8bef\u7684\u542b\u4e49\u662f\uff0cMaster FE\u5411\u8fd9\u4e2a\u8282\u70b9\u53d1\u9001\u5fc3\u8df3\u4fe1\u606f\u540e\uff0c\u8be5\u8282\u70b9\u53d1\u73b0\u5fc3\u8df3\u4fe1\u606f\u4e2d\u643a\u5e26\u7684 cluster id\u548c\u672c\u5730\u5b58\u50a8\u7684 cluster id\u4e0d\u540c\uff0c\u6240\u4ee5\u62d2\u7edd\u56de\u5e94\u5fc3\u8df3\u3002"),(0,n.kt)("p",null,"Doris\u7684 Master FE \u8282\u70b9\u4f1a\u4e3b\u52a8\u53d1\u9001\u5fc3\u8df3\u7ed9\u5404\u4e2aFE\u6216BE\u8282\u70b9\uff0c\u5e76\u4e14\u5728\u5fc3\u8df3\u4fe1\u606f\u4e2d\u4f1a\u643a\u5e26\u4e00\u4e2acluster_id\u3002cluster_id\u662f\u5728\u4e00\u4e2a\u96c6\u7fa4\u521d\u59cb\u5316\u65f6\uff0c\u7531Master FE\u751f\u6210\u7684\u552f\u4e00\u96c6\u7fa4\u6807\u8bc6\u3002\u5f53FE\u6216BE\u7b2c\u4e00\u6b21\u6536\u5230\u5fc3\u8df3\u4fe1\u606f\u540e\uff0c\u5219\u4f1a\u5c06cluster_id\u4ee5\u6587\u4ef6\u7684\u5f62\u5f0f\u4fdd\u5b58\u5728\u672c\u5730\u3002FE\u7684\u8be5\u6587\u4ef6\u5728\u5143\u6570\u636e\u76ee\u5f55\u7684image/\u76ee\u5f55\u4e0b\uff0cBE\u5219\u5728\u6240\u6709\u6570\u636e\u76ee\u5f55\u4e0b\u90fd\u6709\u4e00\u4e2acluster_id\u6587\u4ef6\u3002\u4e4b\u540e\uff0c\u6bcf\u6b21\u8282\u70b9\u6536\u5230\u5fc3\u8df3\u540e\uff0c\u90fd\u4f1a\u7528\u672c\u5730cluster_id\u7684\u5185\u5bb9\u548c\u5fc3\u8df3\u4e2d\u7684\u5185\u5bb9\u4f5c\u6bd4\u5bf9\uff0c\u5982\u679c\u4e0d\u4e00\u81f4\uff0c\u5219\u62d2\u7edd\u54cd\u5e94\u5fc3\u8df3\u3002"),(0,n.kt)("p",null,"\u8be5\u673a\u5236\u662f\u4e00\u4e2a\u8282\u70b9\u8ba4\u8bc1\u673a\u5236\uff0c\u4ee5\u9632\u6b62\u63a5\u6536\u5230\u96c6\u7fa4\u5916\u7684\u8282\u70b9\u53d1\u9001\u6765\u7684\u9519\u8bef\u7684\u5fc3\u8df3\u4fe1\u606f\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u9700\u8981\u6062\u590d\u8fd9\u4e2a\u9519\u8bef\u3002\u9996\u5148\u8981\u5148\u786e\u8ba4\u6240\u6709\u8282\u70b9\u662f\u5426\u90fd\u662f\u6b63\u786e\u7684\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u3002\u4e4b\u540e\uff0c\u5bf9\u4e8eFE\u8282\u70b9\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4fee\u6539\u5143\u6570\u636e\u76ee\u5f55\u4e0b\u7684 image/VERSION \u6587\u4ef6\u4e2d\u7684 cluster_id \u503c\u540e\u91cd\u542fFE\u3002\u5bf9\u4e8eBE\u8282\u70b9\uff0c\u5219\u53ef\u4ee5\u5220\u9664\u6240\u6709\u6570\u636e\u76ee\u5f55\u4e0b\u7684 cluster_id \u6587\u4ef6\u540e\u91cd\u542f BE\u3002"),(0,n.kt)("h3",{id:"e7-\u901a\u8fc7-java-\u7a0b\u5e8f\u8c03\u7528-stream-load-\u5bfc\u5165\u6570\u636e\u5728\u4e00\u6279\u6b21\u6570\u636e\u91cf\u8f83\u5927\u65f6\u53ef\u80fd\u4f1a\u62a5\u9519-broken-pipe"},"E7. \u901a\u8fc7 Java \u7a0b\u5e8f\u8c03\u7528 stream load \u5bfc\u5165\u6570\u636e\uff0c\u5728\u4e00\u6279\u6b21\u6570\u636e\u91cf\u8f83\u5927\u65f6\uff0c\u53ef\u80fd\u4f1a\u62a5\u9519 Broken Pipe"),(0,n.kt)("p",null,"\u9664\u4e86 Broken Pipe \u5916\uff0c\u8fd8\u53ef\u80fd\u51fa\u73b0\u4e00\u4e9b\u5176\u4ed6\u7684\u5947\u602a\u7684\u9519\u8bef\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u60c5\u51b5\u901a\u5e38\u51fa\u73b0\u5728\u5f00\u542fhttpv2\u540e\u3002\u56e0\u4e3ahttpv2\u662f\u4f7f\u7528spring boot\u5b9e\u73b0\u7684http \u670d\u52a1\uff0c\u5e76\u4e14\u4f7f\u7528tomcat\u4f5c\u4e3a\u9ed8\u8ba4\u5185\u7f6e\u5bb9\u5668\u3002\u4f46\u662ftomcat\u5bf9307\u8f6c\u53d1\u7684\u5904\u7406\u4f3c\u4e4e\u6709\u4e9b\u95ee\u9898\uff0c\u6240\u4ee5\u540e\u9762\u5c06\u5185\u7f6e\u5bb9\u5668\u4fee\u6539\u4e3a\u4e86jetty\u3002\u6b64\u5916\uff0c\u5728java\u7a0b\u5e8f\u4e2d\u7684 apache http client\u7684\u7248\u672c\u9700\u8981\u4f7f\u75284.5.13\u4ee5\u540e\u7684\u7248\u672c\u3002\u4e4b\u524d\u7684\u7248\u672c\uff0c\u5bf9\u8f6c\u53d1\u7684\u5904\u7406\u4e5f\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\u3002"),(0,n.kt)("p",null,"\u6240\u4ee5\u8fd9\u4e2a\u95ee\u9898\u53ef\u4ee5\u6709\u4e24\u79cd\u89e3\u51b3\u65b9\u5f0f\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5173\u95edhttpv2"),(0,n.kt)("p",{parentName:"li"},"\u5728fe.conf\u4e2d\u6dfb\u52a0 enable_http_server_v2=false\u540e\u91cd\u542fFE\u3002\u4f46\u662f\u8fd9\u6837\u65e0\u6cd5\u518d\u4f7f\u7528\u65b0\u7248UI\u754c\u9762\uff0c\u5e76\u4e14\u4e4b\u540e\u7684\u4e00\u4e9b\u57fa\u4e8ehttpv2\u7684\u65b0\u63a5\u53e3\u4e5f\u65e0\u6cd5\u4f7f\u7528\u3002\uff08\u6b63\u5e38\u7684\u5bfc\u5165\u67e5\u8be2\u4e0d\u53d7\u5f71\u54cd\uff09\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5347\u7ea7"),(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5347\u7ea7\u5230 Doris 0.15 \u53ca\u4e4b\u540e\u7684\u7248\u672c\uff0c\u5df2\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898\u3002"))),(0,n.kt)("h3",{id:"e8-lost-connection-to-mysql-server-at-reading-initial-communication-packet-system-error-0"},"E8. ",(0,n.kt)("inlineCode",{parentName:"h3"},"Lost connection to MySQL server at 'reading initial communication packet', system error: 0")),(0,n.kt)("p",null,"\u5982\u679c\u4f7f\u7528 MySQL \u5ba2\u6237\u7aef\u8fde\u63a5 Doris \u65f6\u51fa\u73b0\u5982\u4e0b\u95ee\u9898\uff0c\u8fd9\u901a\u5e38\u662f\u56e0\u4e3a\u7f16\u8bd1 FE \u65f6\u4f7f\u7528\u7684 jdk \u7248\u672c\u548c\u8fd0\u884c FE \u65f6\u4f7f\u7528\u7684 jdk \u7248\u672c\u4e0d\u540c\u5bfc\u81f4\u7684\u3002\n\u6ce8\u610f\u4f7f\u7528 docker \u7f16\u8bd1\u955c\u50cf\u7f16\u8bd1\u65f6\uff0c\u9ed8\u8ba4\u7684 JDK \u7248\u672c\u662f openjdk 11\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u5207\u6362\u5230 openjdk 8\uff08\u8be6\u89c1\u7f16\u8bd1\u6587\u6863\uff09\u3002"),(0,n.kt)("h3",{id:"e9--214-\u9519\u8bef"},"E9. -214 \u9519\u8bef"),(0,n.kt)("p",null,"\u5728\u6267\u884c\u5bfc\u5165\u3001\u67e5\u8be2\u7b49\u64cd\u4f5c\u65f6\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u5982\u4e0b\u9519\u8bef\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"failed to initialize storage reader. tablet=63416.1050661139.aa4d304e7a7aff9c-f0fa7579928c85a0, res=-214, backend=192.168.100.10\n")),(0,n.kt)("p",null,"-214 \u9519\u8bef\u610f\u5473\u7740\u5bf9\u5e94 tablet \u7684\u6570\u636e\u7248\u672c\u7f3a\u5931\u3002\u6bd4\u5982\u5982\u4e0a\u9519\u8bef\uff0c\u8868\u793a tablet 63416 \u5728 192.168.100.10 \u8fd9\u4e2a BE \u4e0a\u7684\u526f\u672c\u7684\u6570\u636e\u7248\u672c\u6709\u7f3a\u5931\u3002\uff08\u53ef\u80fd\u8fd8\u6709\u5176\u4ed6\u7c7b\u4f3c\u9519\u8bef\u7801\uff0c\u90fd\u53ef\u4ee5\u7528\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u6392\u67e5\u548c\u4fee\u590d\uff09\u3002"),(0,n.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u4f60\u7684\u6570\u636e\u662f\u591a\u526f\u672c\u7684\uff0c\u90a3\u4e48\u7cfb\u7edf\u4f1a\u81ea\u52a8\u4fee\u590d\u8fd9\u4e9b\u6709\u95ee\u9898\u7684\u526f\u672c\u3002\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u6392\u67e5\uff1a"),(0,n.kt)("p",null,"\u9996\u5148\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"show tablet 63416")," \u8bed\u53e5\u5e76\u6267\u884c\u7ed3\u679c\u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"show proc xxx")," \u8bed\u53e5\u6765\u67e5\u770b\u5bf9\u5e94 tablet \u7684\u5404\u4e2a\u526f\u672c\u60c5\u51b5\u3002\u901a\u5e38\u6211\u4eec\u9700\u8981\u5173\u5fc3 ",(0,n.kt)("inlineCode",{parentName:"p"},"Version")," \u8fd9\u4e00\u5217\u7684\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a tablet \u7684\u591a\u4e2a\u526f\u672c\u7684 Version \u5e94\u8be5\u662f\u76f8\u540c\u7684\u3002\u5e76\u4e14\u548c\u5bf9\u5e94\u5206\u533a\u7684 VisibleVersion \u7248\u672c\u76f8\u540c\u3002"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"show partitions from tblx")," \u6765\u67e5\u770b\u5bf9\u5e94\u7684\u5206\u533a\u7248\u672c\uff08tablet \u5bf9\u5e94\u7684\u5206\u533a\u53ef\u4ee5\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"show tablet")," \u8bed\u53e5\u4e2d\u83b7\u53d6\u3002\uff09"),(0,n.kt)("p",null,"\u540c\u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8bbf\u95ee ",(0,n.kt)("inlineCode",{parentName:"p"},"show proc")," \u8bed\u53e5\u4e2d\u7684 CompactionStatus \u5217\u4e2d\u7684 URL\uff08\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u5373\u53ef\uff09\u6765\u67e5\u770b\u66f4\u5177\u4f53\u7684\u7248\u672c\u4fe1\u606f\uff0c\u6765\u68c0\u67e5\u5177\u4f53\u4e22\u5931\u7684\u662f\u54ea\u4e9b\u7248\u672c\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u957f\u65f6\u95f4\u6ca1\u6709\u81ea\u52a8\u4fee\u590d\uff0c\u5219\u9700\u8981\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},'show proc "/cluster_balance"')," \u8bed\u53e5\uff0c\u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u6b63\u5728\u6267\u884c\u7684 tablet \u4fee\u590d\u548c\u8c03\u5ea6\u4efb\u52a1\u3002\u53ef\u80fd\u662f\u56e0\u4e3a\u6709\u5927\u91cf\u7684 tablet \u5728\u7b49\u5f85\u88ab\u8c03\u5ea6\uff0c\u5bfc\u81f4\u4fee\u590d\u65f6\u95f4\u8f83\u957f\u3002\u53ef\u4ee5\u5173\u6ce8 ",(0,n.kt)("inlineCode",{parentName:"p"},"pending_tablets")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"running_tablets")," \u4e2d\u7684\u8bb0\u5f55\u3002"),(0,n.kt)("p",null,"\u66f4\u8fdb\u4e00\u6b65\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"admin repair")," \u8bed\u53e5\u6765\u6307\u5b9a\u4f18\u5148\u4fee\u590d\u67d0\u4e2a\u8868\u6216\u5206\u533a\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u9605 ",(0,n.kt)("inlineCode",{parentName:"p"},"help admin repair"),";"),(0,n.kt)("p",null,"\u5982\u679c\u4f9d\u7136\u65e0\u6cd5\u4fee\u590d\uff0c\u90a3\u4e48\u5728\u591a\u526f\u672c\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"admin set replica status")," \u547d\u4ee4\u5f3a\u5236\u5c06\u6709\u95ee\u9898\u7684\u526f\u672c\u4e0b\u7ebf\u3002\u5177\u4f53\u53ef\u53c2\u9605 ",(0,n.kt)("inlineCode",{parentName:"p"},"help admin set replica status")," \u4e2d\u5c06\u526f\u672c\u72b6\u6001\u7f6e\u4e3a bad \u7684\u793a\u4f8b\u3002\uff08\u7f6e\u4e3a bad \u540e\uff0c\u526f\u672c\u5c06\u4e0d\u4f1a\u518d\u88ab\u8bbf\u95ee\u3002\u5e76\u4e14\u4f1a\u540e\u7eed\u81ea\u52a8\u4fee\u590d\u3002\u4f46\u5728\u64cd\u4f5c\u524d\uff0c\u5e94\u5148\u786e\u4fdd\u5176\u4ed6\u526f\u672c\u662f\u6b63\u5e38\u7684\uff09"),(0,n.kt)("h3",{id:"e10-not-connected-to-19216810018060-yet-server_id384"},"E10. Not connected to 192.168.100.1:8060 yet, server_id=384"),(0,n.kt)("p",null,"\u5728\u5bfc\u5165\u6216\u8005\u67e5\u8be2\u65f6\uff0c\u6211\u4eec\u53ef\u80fd\u9047\u5230\u8fd9\u4e2a\u9519\u8bef\u3002\u5982\u679c\u4f60\u53bb\u5bf9\u5e94\u7684 BE \u65e5\u5fd7\u4e2d\u67e5\u770b\uff0c\u4e5f\u53ef\u80fd\u4f1a\u627e\u5230\u7c7b\u4f3c\u9519\u8bef\u3002"),(0,n.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a RPC \u9519\u8bef\uff0c\u901a\u5e38\u6709\u4e24\u79cd\u53ef\u80fd\uff1a1. \u5bf9\u5e94\u7684 BE \u8282\u70b9\u5b95\u673a\u30022. rpc \u62e5\u585e\u6216\u5176\u4ed6\u9519\u8bef\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u662f BE \u8282\u70b9\u5b95\u673a\uff0c\u5219\u9700\u8981\u67e5\u770b\u5177\u4f53\u7684\u5b95\u673a\u539f\u56e0\u3002\u8fd9\u91cc\u53ea\u8ba8\u8bba rpc \u62e5\u585e\u7684\u95ee\u9898\u3002"),(0,n.kt)("p",null,"\u4e00\u79cd\u60c5\u51b5\u662f OVERCROWDED\uff0c\u5373\u8868\u793a rpc \u6e90\u7aef\u6709\u5927\u91cf\u672a\u53d1\u9001\u7684\u6570\u636e\u8d85\u8fc7\u4e86\u9608\u503c\u3002BE \u6709\u4e24\u4e2a\u53c2\u6570\u4e0e\u4e4b\u76f8\u5173\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"brpc_socket_max_unwritten_bytes"),"\uff1a\u9ed8\u8ba4 1GB\uff0c\u5982\u679c\u672a\u53d1\u9001\u6570\u636e\u8d85\u8fc7\u8fd9\u4e2a\u503c\uff0c\u5219\u4f1a\u62a5\u9519\u3002\u53ef\u4ee5\u9002\u5f53\u4fee\u6539\u8fd9\u4e2a\u503c\u4ee5\u907f\u514d OVERCROWDED \u9519\u8bef\u3002\uff08\u4f46\u8fd9\u4e2a\u6cbb\u6807\u4e0d\u6cbb\u672c\uff0c\u672c\u8d28\u4e0a\u8fd8\u662f\u6709\u62e5\u585e\u53d1\u751f\uff09\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"tablet_writer_ignore_eovercrowded"),"\uff1a\u9ed8\u8ba4\u4e3a false\u3002\u5982\u679c\u8bbe\u4e3atrue\uff0c\u5219 Doris \u4f1a\u5ffd\u7565\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u7684 OVERCROWDED \u9519\u8bef\u3002\u8fd9\u4e2a\u53c2\u6570\u4e3b\u8981\u4e3a\u4e86\u907f\u514d\u5bfc\u5165\u5931\u8d25\uff0c\u4ee5\u63d0\u9ad8\u5bfc\u5165\u7684\u7a33\u5b9a\u6027\u3002")),(0,n.kt)("p",null,"\u7b2c\u4e8c\u79cd\u662f rpc \u7684\u5305\u5927\u5c0f\u8d85\u8fc7 max_body_size\u3002\u5982\u679c\u67e5\u8be2\u4e2d\u5e26\u6709\u8d85\u5927 String \u7c7b\u578b\uff0c\u6216\u8005 bitmap \u7c7b\u578b\u65f6\uff0c\u53ef\u80fd\u51fa\u73b0\u8fd9\u4e2a\u95ee\u9898\u3002\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u4ee5\u4e0b BE \u53c2\u6570\u89c4\u907f\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"brpc_max_body_size"),"\uff1a\u9ed8\u8ba4 3GB.")),(0,n.kt)("h3",{id:"e11-recoverytracker-should-overlap-or-follow-on-disk-last-vlsn-of-4422880-recoveryfirst-4422882-unexpected_state_fatal"},"E11. ",(0,n.kt)("inlineCode",{parentName:"h3"},"recoveryTracker should overlap or follow on disk last VLSN of 4,422,880 recoveryFirst= 4,422,882 UNEXPECTED_STATE_FATAL")),(0,n.kt)("p",null,"\u6709\u65f6\u91cd\u542f FE\uff0c\u4f1a\u51fa\u73b0\u5982\u4e0a\u9519\u8bef\uff08\u901a\u5e38\u53ea\u4f1a\u51fa\u73b0\u5728\u591a Follower \u7684\u60c5\u51b5\u4e0b\uff09\u3002\u5e76\u4e14\u9519\u8bef\u4e2d\u7684\u4e24\u4e2a\u6570\u503c\u76f8\u5dee2\u3002\u5bfc\u81f4 FE \u542f\u52a8\u5931\u8d25\u3002"),(0,n.kt)("p",null,"\u8fd9\u662f bdbje \u7684\u4e00\u4e2a bug\uff0c\u5c1a\u672a\u89e3\u51b3\u3002\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\uff0c\u53ea\u80fd\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.0/administrator-guide/operation/metadata-operation"},"\u5143\u6570\u636e\u8fd0\u7ef4\u624b\u518c")," \u4e2d\u7684 \u6545\u969c\u6062\u590d \u8fdb\u884c\u64cd\u4f5c\u6765\u6062\u590d\u5143\u6570\u636e\u4e86\u3002"),(0,n.kt)("h3",{id:"e12doris\u7f16\u8bd1\u5b89\u88c5jdk\u7248\u672c\u4e0d\u517c\u5bb9\u95ee\u9898"},"E12.Doris\u7f16\u8bd1\u5b89\u88c5JDK\u7248\u672c\u4e0d\u517c\u5bb9\u95ee\u9898"),(0,n.kt)("p",null,"\u5728\u81ea\u5df1\u4f7f\u7528 Docker \u7f16\u8bd1 Doris \u7684\u65f6\u5019\uff0c\u7f16\u8bd1\u5b8c\u6210\u5b89\u88c5\u4ee5\u540e\u542f\u52a8FE\uff0c\u51fa\u73b0 ",(0,n.kt)("inlineCode",{parentName:"p"},"java.lang.Suchmethoderror: java.nio. ByteBuffer. limit (I)Ljava/nio/ByteBuffer;")," \u5f02\u5e38\u4fe1\u606f\uff0c\u8fd9\u662f\u56e0\u4e3aDocker\u91cc\u9ed8\u8ba4\u662fJDK 11\uff0c\u5982\u679c\u4f60\u7684\u5b89\u88c5\u73af\u5883\u662f\u4f7f\u7528JDK8 \uff0c\u9700\u8981\u5728 Docker \u91cc JDK \u73af\u5883\u5207\u6362\u6210 JDK8\uff0c\u5177\u4f53\u5207\u6362\u65b9\u6cd5\u53c2\u7167",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/installing/compilation.html"},"\u7f16\u8bd1")))}c.isMDXComponent=!0}}]);