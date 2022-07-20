"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[7472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Cluster upgrade",language:"en"},i=void 0,l={unversionedId:"installing/upgrade",id:"version-0.15/installing/upgrade",title:"Cluster upgrade",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/installing/upgrade.md",sourceDirName:"installing",slug:"/installing/upgrade",permalink:"/docs/0.15/installing/upgrade",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Cluster upgrade",language:"en"},sidebar:"docs",previous:{title:"Installation and deployment",permalink:"/docs/0.15/installing/install-deploy"},next:{title:"Guidelines for Basic Use",permalink:"/docs/0.15/getting-started/basic-usage"}},s={},p=[{value:"Preparen",id:"preparen",level:2},{value:"Test the correctness of BE upgrade",id:"test-the-correctness-of-be-upgrade",level:2},{value:"Testing FE Metadata Compatibility",id:"testing-fe-metadata-compatibility",level:2},{value:"Upgrade preparation",id:"upgrade-preparation",level:2},{value:"rolling upgrade",id:"rolling-upgrade",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cluster-upgrade"},"Cluster upgrade"),(0,a.kt)("p",null,"Doris can upgrade smoothly by rolling upgrades. The following steps are recommended for security upgrade."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note:"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"The following approaches are based on highly available deployments. That is, data 3 replicas, FE high availability."))),(0,a.kt)("h2",{id:"preparen"},"Preparen"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Turn off the replica repair and balance operation."),(0,a.kt)("p",{parentName:"li"}," There will be node restarts during the upgrade process, so unnecessary cluster balancing and replica repair logic may be triggered. You can close it first with the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'# Turn off the replica ealance logic. After it is closed, the balancing operation of the ordinary table replica will no longer be triggered.\n$ mysql-client> admin set frontend config("disable_balance" = "true");\n\n# Turn off the replica balance logic of the colocation table. After it is closed, the replica redistribution operation of the colocation table will no longer be triggered.\n$ mysql-client> admin set frontend config("disable_colocate_balance");\n\n# Turn off the replica scheduling logic. After shutting down, all generated replica repair and balancing tasks will no longer be scheduled.\n$ mysql-client> admin set frontend config("disable_tablet_scheduler" = "true");\n')),(0,a.kt)("p",{parentName:"li"}," After the cluster is upgraded, just use the above command to set the corresponding configuration to the original value."))),(0,a.kt)("h2",{id:"test-the-correctness-of-be-upgrade"},"Test the correctness of BE upgrade"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Arbitrarily select a BE node and deploy the latest palo_be binary file."),(0,a.kt)("li",{parentName:"ol"},"Restart the BE node and check the BE log be.INFO to see if the boot was successful."),(0,a.kt)("li",{parentName:"ol"},"If the startup fails, you can check the reason first. If the error is not recoverable, you can delete the BE directly through DROP BACKEND, clean up the data, and restart the BE using the previous version of palo_be. Then re-ADD BACKEND. (",(0,a.kt)("strong",{parentName:"li"},"This method will result in the loss of a copy of the data, please make sure that three copies are complete, and perform this operation!!!"))),(0,a.kt)("h2",{id:"testing-fe-metadata-compatibility"},"Testing FE Metadata Compatibility"),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Important! Exceptional metadata compatibility is likely to cause data cannot be restored!!")),(0,a.kt)("li",{parentName:"ol"},"Deploy a test FE process (such as your own local developer) using the new version alone."),(0,a.kt)("li",{parentName:"ol"},"Modify the FE configuration file fe.conf for testing and set all ports to ",(0,a.kt)("strong",{parentName:"li"},"different from online"),"."),(0,a.kt)("li",{parentName:"ol"},"Add configuration in fe.conf: cluster_id=123456"),(0,a.kt)("li",{parentName:"ol"},"Add the configuration in fe.conf: metadatafailure_recovery=true"),(0,a.kt)("li",{parentName:"ol"},"Copy the metadata directory palo-meta of the online environment Master FE to the test environment"),(0,a.kt)("li",{parentName:"ol"},"Modify the cluster_id in the palo-meta/image/VERSION file copied into the test environment to 123456 (that is, the same as in Step 3)"),(0,a.kt)("li",{parentName:"ol"},'"27979;" "35797;" "3681616;" sh bin /start fe.sh "21551;" FE'),(0,a.kt)("li",{parentName:"ol"},"Observe whether the start-up is successful through FE log fe.log."),(0,a.kt)("li",{parentName:"ol"},"If the startup is successful, run sh bin/stop_fe.sh to stop the FE process of the test environment."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"The purpose of the above 2-6 steps is to prevent the FE of the test environment from being misconnected to the online environment after it starts."))),(0,a.kt)("h2",{id:"upgrade-preparation"},"Upgrade preparation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"After data validation, the new version of BE and FE binary files are distributed to their respective directories."),(0,a.kt)("li",{parentName:"ol"},"Usually small version upgrade, BE only needs to upgrade palo_be; FE only needs to upgrade palo-fe.jar. If it is a large version upgrade, you may need to upgrade other files (including but not limited to bin / lib / etc.) If you are not sure whether you need to replace other files, it is recommended to replace all of them.")),(0,a.kt)("h2",{id:"rolling-upgrade"},"rolling upgrade"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Confirm that the new version of the file is deployed. Restart FE and BE instances one by one."),(0,a.kt)("li",{parentName:"ol"},"It is suggested that BE be restarted one by one and FE be restarted one by one. Because Doris usually guarantees backward compatibility between FE and BE, that is, the old version of FE can access the new version of BE. However, the old version of BE may not be supported to access the new version of FE."),(0,a.kt)("li",{parentName:"ol"},"It is recommended to restart the next instance after confirming the previous instance started successfully. Refer to the Installation Deployment Document for the identification of successful instance startup.")))}d.isMDXComponent=!0}}]);