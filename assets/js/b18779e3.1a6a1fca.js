"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[84577],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>j});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),j=o,d=f["".concat(a,".").concat(j)]||f[j]||p[j]||c;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function j(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=f;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<c;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},45250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const c={title:"json_object",language:"en"},i=void 0,s={unversionedId:"sql-reference/sql-functions/string-functions/json_object",id:"version-0.15/sql-reference/sql-functions/string-functions/json_object",title:"json_object",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-functions/string-functions/json_object.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/json_object",permalink:"/docs/0.15/sql-reference/sql-functions/string-functions/json_object",draft:!1,tags:[],version:"0.15",frontMatter:{title:"json_object",language:"en"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"json_object"},"json_object"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR json_object(VARCHAR,...)")),(0,o.kt)("p",null,"Generate a json object containing the specified Key-Value,\nan exception error is returned when Key is NULL or the number of parameters are odd."),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL> select json_object();\n+---------------+\n| json_object() |\n+---------------+\n| {}            |\n+---------------+\n\nMySQL> select json_object('time',curtime());\n+--------------------------------+\n| json_object('time', curtime()) |\n+--------------------------------+\n| {\"time\": \"10:49:18\"}           |\n+--------------------------------+\n\n\nMySQL> SELECT json_object('id', 87, 'name', 'carrot');\n+-----------------------------------------+\n| json_object('id', 87, 'name', 'carrot') |\n+-----------------------------------------+\n| {\"id\": 87, \"name\": \"carrot\"}            |\n+-----------------------------------------+\n\n\nMySQL> select json_object('username',null);\n+---------------------------------+\n| json_object('username', 'NULL') |\n+---------------------------------+\n| {\"username\": NULL}              |\n+---------------------------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"json_object"))}p.isMDXComponent=!0}}]);