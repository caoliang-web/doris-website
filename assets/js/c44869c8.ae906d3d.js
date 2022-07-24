"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[14003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"Lateral View",language:"en"},o=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/lateral-view",id:"version-1.0/sql-reference/sql-statements/Data-Manipulation/lateral-view",title:"Lateral View",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Data-Manipulation/lateral-view.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/lateral-view",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/lateral-view",draft:!1,tags:[],version:"1.0",frontMatter:{title:"Lateral View",language:"en"},sidebar:"docs",previous:{title:"UPDATE",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/UPDATE"},next:{title:"BIGINT",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Types/BIGINT"}},p={},s=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lateral-view"},"Lateral View"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("p",null,"Lateral view syntax can be used with Table Function to fulfill the requirement of expanding one row of data into multiple rows (column to rows)."),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\nFROM table_name\nlateral_view_ref[ lateral_view_ref ...]\n\nlateral_view_ref:\n\nLATERAL VIEW table_function(...) view_alias as col_name\n")),(0,a.kt)("p",null,"The Lateral view clause must follow the table name or subquery. Can contain multiple Lateral view clauses. ",(0,a.kt)("inlineCode",{parentName:"p"},"view_alias")," is the name of the corresponding Lateral View. ",(0,a.kt)("inlineCode",{parentName:"p"},"col_name")," is the name of the column produced by the table function ",(0,a.kt)("inlineCode",{parentName:"p"},"table_function"),"."),(0,a.kt)("p",null,"Table functions currently supported:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"explode_split")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"explode_bitmap")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"explode_json_array"))),(0,a.kt)("p",null,"For specific function descriptions, please refer to the corresponding syntax help documentation."),(0,a.kt)("p",null,"The data in the table will be Cartesian product with the result set produced by each Lateral View and then return to the upper level."),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("p",null,"Here, only the syntax example of Lateral View is given. For the specific meaning and output result description, please refer to the help document of the corresponding table function."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select k1, e1 from tbl1\nlateral view explode_split(v1,',') tmp1 as e1 where e1 = \"abc\";\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select k1, e1, e2 from tbl2\nlateral view explode_split(v1,',') tmp1 as e1\nlateral view explode_bitmap(bitmap1) tmp2 as e2\nwhere e2> 3;\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'select k1, e1, e2 from tbl3\nlateral view explode_json_array_int("[1,2,3]") tmp1 as e1\nlateral view explode_bitmap(bitmap_from_string("4,5,6")) tmp2 as e2;\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select k1, e1 from (select k1, bitmap_union(members) as x from tbl1 where k1=10000 group by k1)tmp1\nlateral view explode_bitmap(x) tmp2 as e1;\n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"LATERAL, VIEW\n")))}u.isMDXComponent=!0}}]);