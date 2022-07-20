"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[54639],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>b});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=s(n),b=i,f=m["".concat(l,".").concat(b)]||m[b]||u[b]||o;return n?r.createElement(f,a(a({ref:e},c),{},{components:n})):r.createElement(f,a({ref:e},c))}));function b(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53217:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={title:"bitmap_to_string",language:"zh-CN"},a=void 0,p={unversionedId:"sql-reference/sql-functions/bitmap-functions/bitmap_to_string",id:"version-1.0/sql-reference/sql-functions/bitmap-functions/bitmap_to_string",title:"bitmap_to_string",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-functions/bitmap-functions/bitmap_to_string.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_to_string",permalink:"/zh-CN/docs/1.0/sql-reference/sql-functions/bitmap-functions/bitmap_to_string",draft:!1,tags:[],version:"1.0",frontMatter:{title:"bitmap_to_string",language:"zh-CN"},sidebar:"docs",previous:{title:"sub_bitmap",permalink:"/zh-CN/docs/1.0/sql-reference/sql-functions/bitmap-functions/sub_bitmap"},next:{title:"bitmap_union",permalink:"/zh-CN/docs/1.0/sql-reference/sql-functions/bitmap-functions/bitmap_union"}},l={},s=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:s};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bitmap_to_string"},"bitmap_to_string"),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR BITMAP_TO_STRING(BITMAP input)")),(0,i.kt)("p",null,"\u5c06\u4e00\u4e2abitmap\u8f6c\u5316\u6210\u4e00\u4e2a\u9017\u53f7\u5206\u9694\u7684\u5b57\u7b26\u4e32\uff0c\u5b57\u7b26\u4e32\u4e2d\u5305\u542b\u6240\u6709\u8bbe\u7f6e\u7684BIT\u4f4d\u3002\u8f93\u5165\u662fnull\u7684\u8bdd\u4f1a\u8fd4\u56denull\u3002"),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select bitmap_to_string(null);\n+------------------------+\n| bitmap_to_string(NULL) |\n+------------------------+\n| NULL                   |\n+------------------------+\n\nmysql> select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n\nmysql> select bitmap_to_string(to_bitmap(1));\n+--------------------------------+\n| bitmap_to_string(to_bitmap(1)) |\n+--------------------------------+\n| 1                              |\n+--------------------------------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n| 1,2                                                     |\n+---------------------------------------------------------+\n\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BITMAP_TO_STRING,BITMAP\n")))}u.isMDXComponent=!0}}]);