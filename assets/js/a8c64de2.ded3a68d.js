"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[98789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"RESUME SYNC JOB",language:"en"},l=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/RESUME-SYNC-JOB",id:"version-1.0/sql-reference/sql-statements/Data-Manipulation/RESUME-SYNC-JOB",title:"RESUME SYNC JOB",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Data-Manipulation/RESUME-SYNC-JOB.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/RESUME-SYNC-JOB",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/RESUME-SYNC-JOB",draft:!1,tags:[],version:"1.0",frontMatter:{title:"RESUME SYNC JOB",language:"en"},sidebar:"docs",previous:{title:"RESUME ROUTINE LOAD",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/RESUME-ROUTINE-LOAD"},next:{title:"ROUTINE LOAD",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/ROUTINE-LOAD"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resume-sync-job"},"RESUME SYNC JOB"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("p",null,"Rusumes a paused SyncJob in the database."),(0,a.kt)("p",null,"The job will continue to synchronize data from the latest location before the last pause."),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RESUME SYNC JOB [db.]job_name\n    \n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Resume the SyncJob named ",(0,a.kt)("inlineCode",{parentName:"p"},"job_name")),(0,a.kt)("p",{parentName:"li"},"RESUME SYNC JOB ",(0,a.kt)("inlineCode",{parentName:"p"},"job_name"),";"))),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RESUME,SYNC,JOB,BINLOG\n")))}u.isMDXComponent=!0}}]);