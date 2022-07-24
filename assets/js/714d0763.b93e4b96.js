"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[85411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"BACKUP",language:"en"},o=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Definition/BACKUP",id:"version-1.0/sql-reference/sql-statements/Data-Definition/BACKUP",title:"BACKUP",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Data-Definition/BACKUP.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/BACKUP",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Definition/BACKUP",draft:!1,tags:[],version:"1.0",frontMatter:{title:"BACKUP",language:"en"},sidebar:"docs",previous:{title:"ALTER VIEW",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Definition/ALTER-VIEW"},next:{title:"CANCEL ALTER",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Definition/CANCEL-ALTER"}},p={},s=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backup"},"BACKUP"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to backup data under the specified database. This command is an asynchronous operation. After successful submission, you need to check progress through the SHOW BACKUP command. Only tables of OLAP type are backed up.\nGrammar:\nBACKUP SNAPSHOT ","[db_name]",".{snapshot_name}\nTO ",(0,r.kt)("inlineCode",{parentName:"p"},"repository_name"),"\n","[ON|EXCLUDE]"," (\n",(0,r.kt)("inlineCode",{parentName:"p"},"Table_name")," ","[partition (`P1',...)]",',\n...\n)\nPROPERTIES ("key"="value", ...);'),(0,r.kt)("p",null,"Explain:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Only one BACKUP or RESTORE task can be performed under the same database."),(0,r.kt)("li",{parentName:"ol"},"The ON clause identifies the tables and partitions that need to be backed up. If no partition is specified, all partitions of the table are backed up by default."),(0,r.kt)("li",{parentName:"ol"},"The EXCLUDE clause identifies the tables and partitions that need not to be backed up. All partitions of all tables in the database except the specified tables or partitions will be backed up."),(0,r.kt)("li",{parentName:"ol"},'PROPERTIES currently supports the following attributes:\n"Type" = "full": means that this is a full update (default).\n"Timeout" = "3600": Task timeout, default to one day. Unit seconds.')),(0,r.kt)("h2",{id:"example"},"example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Back up the table example_tbl under example_db in full to the warehouse example_repo:\nBACKUP SNAPSHOT example_db.snapshot_label1\nTO example repo\nOn (example tbl)\nPROPERTIES ("type" = "full");')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under full backup example_db, the P1 and P2 partitions of table example_tbl, and table example_tbl2 to warehouse example_repo:\nBACKUP SNAPSHOT example_db.snapshot_label2\nTO example repo\nON\n(\nexample_tbl PARTITION (p1,p2),\nExample:\n);")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Back up all tables in example_db except example_tbl to the warehouse example_repo:\nBACKUP SNAPSHOT example_db.snapshot_label3\nTO example_repo\nEXCLUDE (example_tbl);"))),(0,r.kt)("h2",{id:"keyword"},"keyword"),(0,r.kt)("p",null,"BACKUP"))}u.isMDXComponent=!0}}]);