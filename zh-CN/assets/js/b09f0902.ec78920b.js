"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[6515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),O=a,f=m["".concat(p,".").concat(O)]||m[O]||u[O]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"RESTORE",language:"zh-CN"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Definition/RESTORE",id:"version-0.15/sql-reference/sql-statements/Data-Definition/RESTORE",title:"RESTORE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Definition/RESTORE.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/RESTORE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/RESTORE",draft:!1,tags:[],version:"0.15",frontMatter:{title:"RESTORE",language:"zh-CN"},sidebar:"docs",previous:{title:"RECOVER",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/RECOVER"},next:{title:"SHOW ENCRYPTKEYS",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/SHOW-ENCRYPTKEYS"}},p={},s=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"restore"},"RESTORE"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1. RESTORE\n\u8be5\u8bed\u53e5\u7528\u4e8e\u5c06\u4e4b\u524d\u901a\u8fc7 BACKUP \u547d\u4ee4\u5907\u4efd\u7684\u6570\u636e\uff0c\u6062\u590d\u5230\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u3002\u8be5\u547d\u4ee4\u4e3a\u5f02\u6b65\u64cd\u4f5c\u3002\u63d0\u4ea4\u6210\u529f\u540e\uff0c\u9700\u901a\u8fc7 SHOW RESTORE \u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\u3002\u4ec5\u652f\u6301\u6062\u590d OLAP \u7c7b\u578b\u7684\u8868\u3002\n\u8bed\u6cd5\uff1a\n    RESTORE SNAPSHOT [db_name].{snapshot_name}\n    FROM `repository_name`\n    ON (\n        `table_name` [PARTITION (`p1`, ...)] [AS `tbl_alias`],\n        ...\n    )\n    PROPERTIES ("key"="value", ...);\n        \n\u8bf4\u660e\uff1a\n    1. \u540c\u4e00\u6570\u636e\u5e93\u4e0b\u53ea\u80fd\u6709\u4e00\u4e2a\u6b63\u5728\u6267\u884c\u7684 BACKUP \u6216 RESTORE \u4efb\u52a1\u3002\n    2. ON \u5b50\u53e5\u4e2d\u6807\u8bc6\u9700\u8981\u6062\u590d\u7684\u8868\u548c\u5206\u533a\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u5206\u533a\uff0c\u5219\u9ed8\u8ba4\u6062\u590d\u8be5\u8868\u7684\u6240\u6709\u5206\u533a\u3002\u6240\u6307\u5b9a\u7684\u8868\u548c\u5206\u533a\u5fc5\u987b\u5df2\u5b58\u5728\u4e8e\u4ed3\u5e93\u5907\u4efd\u4e2d\u3002\n    3. \u53ef\u4ee5\u901a\u8fc7 AS \u8bed\u53e5\u5c06\u4ed3\u5e93\u4e2d\u5907\u4efd\u7684\u8868\u540d\u6062\u590d\u4e3a\u65b0\u7684\u8868\u3002\u4f46\u65b0\u8868\u540d\u4e0d\u80fd\u5df2\u5b58\u5728\u4e8e\u6570\u636e\u5e93\u4e2d\u3002\u5206\u533a\u540d\u79f0\u4e0d\u80fd\u4fee\u6539\u3002\n    4. \u53ef\u4ee5\u5c06\u4ed3\u5e93\u4e2d\u5907\u4efd\u7684\u8868\u6062\u590d\u66ff\u6362\u6570\u636e\u5e93\u4e2d\u5df2\u6709\u7684\u540c\u540d\u8868\uff0c\u4f46\u987b\u4fdd\u8bc1\u4e24\u5f20\u8868\u7684\u8868\u7ed3\u6784\u5b8c\u5168\u4e00\u81f4\u3002\u8868\u7ed3\u6784\u5305\u62ec\uff1a\u8868\u540d\u3001\u5217\u3001\u5206\u533a\u3001Rollup\u7b49\u7b49\u3002\n    5. \u53ef\u4ee5\u6307\u5b9a\u6062\u590d\u8868\u7684\u90e8\u5206\u5206\u533a\uff0c\u7cfb\u7edf\u4f1a\u68c0\u67e5\u5206\u533a Range \u6216\u8005 List \u662f\u5426\u80fd\u591f\u5339\u914d\u3002\n    6. PROPERTIES \u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a\n            "backup_timestamp" = "2018-05-04-16-45-08"\uff1a\u6307\u5b9a\u4e86\u6062\u590d\u5bf9\u5e94\u5907\u4efd\u7684\u54ea\u4e2a\u65f6\u95f4\u7248\u672c\uff0c\u5fc5\u586b\u3002\u8be5\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7 `SHOW SNAPSHOT ON repo;` \u8bed\u53e5\u83b7\u5f97\u3002\n            "replication_num" = "3"\uff1a\u6307\u5b9a\u6062\u590d\u7684\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u6570\u3002\u9ed8\u8ba4\u4e3a3\u3002\u82e5\u6062\u590d\u5df2\u5b58\u5728\u7684\u8868\u6216\u5206\u533a\uff0c\u5219\u526f\u672c\u6570\u5fc5\u987b\u548c\u5df2\u5b58\u5728\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u6570\u76f8\u540c\u3002\u540c\u65f6\uff0c\u5fc5\u987b\u6709\u8db3\u591f\u7684 host \u5bb9\u7eb3\u591a\u4e2a\u526f\u672c\u3002\n            "timeout" = "3600"\uff1a\u4efb\u52a1\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a\u4e00\u5929\u3002\u5355\u4f4d\u79d2\u3002\n            "meta_version" = 40\uff1a\u4f7f\u7528\u6307\u5b9a\u7684 meta_version \u6765\u8bfb\u53d6\u4e4b\u524d\u5907\u4efd\u7684\u5143\u6570\u636e\u3002\u6ce8\u610f\uff0c\u8be5\u53c2\u6570\u4f5c\u4e3a\u4e34\u65f6\u65b9\u6848\uff0c\u4ec5\u7528\u4e8e\u6062\u590d\u8001\u7248\u672c Doris \u5907\u4efd\u7684\u6570\u636e\u3002\u6700\u65b0\u7248\u672c\u7684\u5907\u4efd\u6570\u636e\u4e2d\u5df2\u7ecf\u5305\u542b meta version\uff0c\u65e0\u9700\u518d\u6307\u5b9a\u3002\n')),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1. \u4ece example_repo \u4e2d\u6062\u590d\u5907\u4efd snapshot_1 \u4e2d\u7684\u8868 backup_tbl \u5230\u6570\u636e\u5e93 example_db1\uff0c\u65f6\u95f4\u7248\u672c\u4e3a "2018-05-04-16-45-08"\u3002\u6062\u590d\u4e3a 1 \u4e2a\u526f\u672c\uff1a\n    RESTORE SNAPSHOT example_db1.`snapshot_1`\n    FROM `example_repo`\n    ON ( `backup_tbl` )\n    PROPERTIES\n    (\n        "backup_timestamp"="2018-05-04-16-45-08",\n        "replication_num" = "1"\n    );\n    \n2. \u4ece example_repo \u4e2d\u6062\u590d\u5907\u4efd snapshot_2 \u4e2d\u7684\u8868 backup_tbl \u7684\u5206\u533a p1,p2\uff0c\u4ee5\u53ca\u8868 backup_tbl2 \u5230\u6570\u636e\u5e93 example_db1\uff0c\u5e76\u91cd\u547d\u540d\u4e3a new_tbl\uff0c\u65f6\u95f4\u7248\u672c\u4e3a "2018-05-04-17-11-01"\u3002\u9ed8\u8ba4\u6062\u590d\u4e3a 3 \u4e2a\u526f\u672c\uff1a\n    RESTORE SNAPSHOT example_db1.`snapshot_2`\n    FROM `example_repo`\n    ON\n    (\n        `backup_tbl` PARTITION (`p1`, `p2`),\n        `backup_tbl2` AS `new_tbl`\n    )\n    PROPERTIES\n    (\n        "backup_timestamp"="2018-05-04-17-11-01"\n    );\n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RESTORE\n")))}u.isMDXComponent=!0}}]);