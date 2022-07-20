"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[57715],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>d});var r=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var c=r.createContext({}),u=function(t){var n=r.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},p=function(t){var n=u(t.components);return r.createElement(c.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=u(e),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return e?r.createElement(f,i(i({ref:n},p),{},{components:e})):r.createElement(f,i({ref:n},p))}));function d(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var o=e.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=e[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},20675:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=e(87462),a=(e(67294),e(3905));const o={title:"bitmap_and_not_count",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count",id:"sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count",title:"bitmap_and_not_count",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count",draft:!1,tags:[],version:"current",frontMatter:{title:"bitmap_and_not_count",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_and_not",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_and_not"},next:{title:"bitmap_subset_in_range",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_subset_in_range"}},c={},u=[{value:"bitmap_and_not_count",id:"bitmap_and_not_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u};function s(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bitmap_and_not_count"},"bitmap_and_not_count"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_AND_NOT_COUNT(BITMAP lhs, BITMAP rhs)")),(0,a.kt)("p",null,"\u5c06\u4e24\u4e2abitmap\u8fdb\u884c\u4e0e\u975e\u64cd\u4f5c\u5e76\u8fd4\u56de\u8ba1\u7b97\u8fd4\u56de\u7684\u5927\u5c0f."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select bitmap_and_not_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5')) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BITMAP_AND_NOT_COUNT,BITMAP\n")))}s.isMDXComponent=!0}}]);