"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[25087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},A=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return n?r.createElement(m,o(o({ref:t},A),{},{components:n})):r.createElement(m,o({ref:t},A))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"ALTER DATABASE",language:"en"},o=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Definition/ALTER-DATABASE",id:"version-0.15/sql-reference/sql-statements/Data-Definition/ALTER-DATABASE",title:"ALTER DATABASE",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Definition/ALTER-DATABASE.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/ALTER-DATABASE",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/ALTER-DATABASE",draft:!1,tags:[],version:"0.15",frontMatter:{title:"ALTER DATABASE",language:"en"},sidebar:"docs",previous:{title:"UNINSTALL PLUGIN",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/UNINSTALL-PLUGIN"},next:{title:"ALTER TABLE",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/ALTER-TABLE"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],A={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alter-database"},"ALTER DATABASE"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("p",null,"This statement is used to set the properties of the specified database. (Administrators only)\nGrammar:\n1) Setting database data quota in B/K/KB/M/MB/G/GB/T/TB/P/PB\nOTHER DATABASE dbu name SET DATA QUOTA quota;"),(0,a.kt)("p",null,"2) Rename the database\nALTER DATABASE db_name RENAME new_db_name;"),(0,a.kt)("p",null,"Explain:\nAfter renaming the database, use REVOKE and GRANT commands to modify the corresponding user rights if necessary.\nThe database's default data quota is 1024GB, and the default replica quota is 1073741824."),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setting the specified database data quota\nALTER DATABASE example_db SET DATA QUOTA 10995116277760;\nThe above units are bytes, equivalent to\nALTER DATABASE example_db SET DATA QUOTA 10T;")),(0,a.kt)("p",null,"ALTER DATABASE example_db SET DATA QUOTA 100G;"),(0,a.kt)("p",null,"ALTER DATABASE example_db SET DATA QUOTA 200M;"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Rename the database example_db to example_db2\nALTER DATABASE example_db RENAME example_db2;")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"ALTER,DATABASE,RENAME"))}p.isMDXComponent=!0}}]);