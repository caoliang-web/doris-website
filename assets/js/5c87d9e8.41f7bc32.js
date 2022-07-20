"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[3991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},21007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={title:"bitmap_union",language:"en"},a=void 0,l={unversionedId:"sql-reference/sql-functions/bitmap-functions/bitmap_union",id:"version-0.15/sql-reference/sql-functions/bitmap-functions/bitmap_union",title:"bitmap_union",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-functions/bitmap-functions/bitmap_union.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_union",permalink:"/docs/0.15/sql-reference/sql-functions/bitmap-functions/bitmap_union",draft:!1,tags:[],version:"0.15",frontMatter:{title:"bitmap_union",language:"en"},sidebar:"docs",previous:{title:"bitmap_to_string",permalink:"/docs/0.15/sql-reference/sql-functions/bitmap-functions/bitmap_to_string"},next:{title:"bitmap_xor",permalink:"/docs/0.15/sql-reference/sql-functions/bitmap-functions/bitmap_xor"}},c={},p=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bitmap_union-function"},"bitmap_union function"),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("p",null,"Aggregate function, used to calculate the grouped bitmap union. Common usage scenarios such as: calculating PV, UV."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_UNION(BITMAP value)")),(0,i.kt)("p",null,"Enter a set of bitmap values, find the union of this set of bitmap values, and return."),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select page_id, bitmap_union(user_id) from table group by page_id;\n")),(0,i.kt)("p",null,"Combined with the bitmap_count function, the PV data of the web page can be obtained"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select page_id, bitmap_count(bitmap_union(user_id)) from table group by page_id;\n")),(0,i.kt)("p",null,"When the user_id field is int, the above query semantics is equivalent to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select page_id, count(distinct user_id) from table group by page_id;\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BITMAP_UNION, BITMAP\n")))}s.isMDXComponent=!0}}]);