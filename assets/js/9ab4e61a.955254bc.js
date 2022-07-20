"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[79627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"CANCEL LOAD",language:"en"},l=void 0,s={unversionedId:"sql-reference/sql-statements/Data-Manipulation/CANCEL-LOAD",id:"version-1.0/sql-reference/sql-statements/Data-Manipulation/CANCEL-LOAD",title:"CANCEL LOAD",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Data-Manipulation/CANCEL-LOAD.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/CANCEL-LOAD",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/CANCEL-LOAD",draft:!1,tags:[],version:"1.0",frontMatter:{title:"CANCEL LOAD",language:"en"},sidebar:"docs",previous:{title:"Cancel Label",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/CANCEL-LABEL"},next:{title:"CREATE SYNC JOB",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/CREATE-SYNC-JOB"}},i={},c=[{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cancel-load"},"CANCEL LOAD"),(0,a.kt)("p",null,"Description"),(0,a.kt)("p",null,"This statement is used to undo the import job for the batch of the specified load label.\nThis is an asynchronous operation, which returns if the task is submitted successfully. After execution, you can use the SHOW LOAD command to view progress.\nGrammar:\nCANCEL LOAD\n","[FROM both names]",'\nWHERE LABEL = "load_label";'),(0,a.kt)("p",null,"'35;'35; example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Revoke the import job of example_db_test_load_label on the database example_db\nCANCEL LOAD\nFROM example_db\nWHERE LABEL = "example_db_test_load_label";')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"CANCEL,LOAD"))}u.isMDXComponent=!0}}]);