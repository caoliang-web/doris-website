"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[20646],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},E={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},O=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=l(t),d=o,u=O["".concat(c,".").concat(d)]||O[d]||E[d]||a;return t?n.createElement(u,s(s({ref:r},p),{},{components:t})):n.createElement(u,s({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=O;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}O.displayName="MDXCreateElement"},22472:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>E,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={title:"CREATE REPOSITORY",language:"en"},s=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Definition/CREATE-REPOSITORY",id:"version-0.15/sql-reference/sql-statements/Data-Definition/CREATE-REPOSITORY",title:"CREATE REPOSITORY",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Definition/CREATE-REPOSITORY.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/CREATE-REPOSITORY",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/CREATE-REPOSITORY",draft:!1,tags:[],version:"0.15",frontMatter:{title:"CREATE REPOSITORY",language:"en"},sidebar:"docs",previous:{title:"CREATE MATERIALIZED VIEW",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/CREATE-MATERIALIZED-VIEW"},next:{title:"CREATE TABLE LIKE",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/CREATE-TABLE-LIKE"}},c={},l=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:l};function E(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-repository"},"CREATE REPOSITORY"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'This statement is used to create the warehouse. The warehouse is used for backup or recovery. Only root or superuser users can create warehouses.\nGrammar:\n    CREATE [READ ONLY] REPOSITORY `repo_name`\n    WITH [BROKER `broker_name`|S3]\n    ON LOCATION `repo_location`\n    PROPERTIES ("key"="value", ...);\n\nExplain:\n    1. The creation of warehouses depends on existing brokers, or use aws s3 protocl to connet cloud storage directly.\n    2. If it is a read-only warehouse, it can only be restored on the warehouse. If not, you can backup and restore operations.\n    3. According to the different types of broker or S3, PROPERTIES is different, see the example.\n')),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'1. Create a warehouse named bos_repo, which relies on BOS broker "bos_broker", and the data root directory is: bos://palo_backup.\n    CREATE REPOSITORY `bos_repo`\n    WITH BROKER `bos_broker`\n    ON LOCATION "bos://palo_backup"\n    PROPERTIES\n    (\n    "bos_endpoint" ="http://gz.bcebos.com",\n    "bos_accesskey" = "bos_accesskey",\n    "bos_secret_accesskey"="bos_accesskey"\n    );\n\n2. Create the same warehouse as in Example 1, but with read-only attributes:\n    CREATE READ ONLY REPOSITORY `bos_repo`\n    WITH BROKER `bos_broker`\n    ON LOCATION "bos://palo_backup"\n    PROPERTIES\n    (\n    "bos_endpoint" ="http://gz.bcebos.com",\n    "bos_accesskey" = "bos_accesskey",\n    "bos_secret_accesskey"="bos_secret_accesskey"\n    );\n\n3. Create a warehouse named hdfs_repo, which relies on Baidu HDFS broker "hdfs_broker", and the data root directory is: hdfs://hadoop-name-node:54310/path/to/repo./\n    CREATE REPOSITORY `hdfs_repo`\n    WITH BROKER `hdfs_broker`\n    ON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\n    PROPERTIES\n    (\n    "Username" = "User"\n    "password" = "password"\n    );\n\n4. \u521b\u5efa\u540d\u4e3a s3_repo \u7684\u4ed3\u5e93, \u76f4\u63a5\u94fe\u63a5\u4e91\u5b58\u50a8, \u800c\u4e0d\u901a\u8fc7broker.\n    CREATE REPOSITORY `s3_repo`\n    WITH S3\n    ON LOCATION "s3://s3-repo"\n    PROPERTIES\n    (\n    "AWS_ENDPOINT" = "http://s3-REGION.amazonaws.com",\n    "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n    "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n    "AWS_REGION" = "REGION"\n    );\n')),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"CREATE REPOSITORY"))}E.isMDXComponent=!0}}]);