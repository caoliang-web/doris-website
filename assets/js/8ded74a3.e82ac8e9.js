"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[86550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(a,".").concat(d)]||f[d]||u[d]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const l={title:"`ST_Circle`",language:"en"},o=void 0,c={unversionedId:"sql-reference/sql-functions/spatial-functions/st_circle",id:"version-1.0/sql-reference/sql-functions/spatial-functions/st_circle",title:"`ST_Circle`",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-functions/spatial-functions/st_circle.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_circle",permalink:"/docs/1.0/sql-reference/sql-functions/spatial-functions/st_circle",draft:!1,tags:[],version:"1.0",frontMatter:{title:"`ST_Circle`",language:"en"},sidebar:"docs",previous:{title:"`ST_AsText`,`ST_AsWKT`",permalink:"/docs/1.0/sql-reference/sql-functions/spatial-functions/st_astext"},next:{title:"`ST_Contains'",permalink:"/docs/1.0/sql-reference/sql-functions/spatial-functions/st_contains"}},a={},s=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"st_circle"},(0,i.kt)("inlineCode",{parentName:"h1"},"ST_Circle")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GEOMETRY ST_Circle(DOUBLE center_lng, DOUBLE center_lat, DOUBLE radius)")),(0,i.kt)("p",null,"Convert a WKT (Well Known Text) into a circle on the earth's sphere. Where ",(0,i.kt)("inlineCode",{parentName:"p"},"center_lng'denotes the longitude of the center of a circle,\n")," Center_lat",(0,i.kt)("inlineCode",{parentName:"p"}," denotes the latitude of the center of a circle, radius")," denotes the radius of a circle in meters."),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_Circle(111, 64, 10000));\n+--------------------------------------------+\n| st_astext(st_circle(111.0, 64.0, 10000.0)) |\n+--------------------------------------------+\n| CIRCLE ((111 64), 10000)                   |\n+--------------------------------------------+\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("p",null,"ST_CIRCLE,ST,CIRCLE"))}u.isMDXComponent=!0}}]);