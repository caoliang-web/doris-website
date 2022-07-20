"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[3815],{3905:(e,n,t)=>{t.d(n,{Zo:()=>a,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),i=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},a=function(e){var n=i(e.components);return o.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),f=i(t),d=r,j=f["".concat(u,".").concat(d)]||f[d]||p[d]||s;return t?o.createElement(j,l(l({ref:n},a),{},{components:t})):o.createElement(j,l({ref:n},a))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<s;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var o=t(87462),r=(t(67294),t(3905));const s={title:"json_quote",language:"en"},l=void 0,c={unversionedId:"sql-reference/sql-functions/json-functions/json_quote",id:"version-1.0/sql-reference/sql-functions/json-functions/json_quote",title:"json_quote",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-functions/json-functions/json_quote.md",sourceDirName:"sql-reference/sql-functions/json-functions",slug:"/sql-reference/sql-functions/json-functions/json_quote",permalink:"/docs/1.0/sql-reference/sql-functions/json-functions/json_quote",draft:!1,tags:[],version:"1.0",frontMatter:{title:"json_quote",language:"en"},sidebar:"docs",previous:{title:"json_object",permalink:"/docs/1.0/sql-reference/sql-functions/json-functions/json_object"},next:{title:"AES",permalink:"/docs/1.0/sql-reference/sql-functions/encrypt-digest-functions/aes"}},u={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],a={toc:i};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},a,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"json_quote"},"json_quote"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VARCHAR json_quote(VARCHAR)")),(0,r.kt)("p",null,'Enclose json_value in double quotes ("), escape special characters contained.'),(0,r.kt)("h2",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'MySQL> SELECT json_quote(\'null\'), json_quote(\'"null"\');\n+--------------------+----------------------+\n| json_quote(\'null\') | json_quote(\'"null"\') |\n+--------------------+----------------------+\n| "null"             | "\\"null\\""           |\n+--------------------+----------------------+\n\n\nMySQL> SELECT json_quote(\'[1, 2, 3]\');\n+-------------------------+\n| json_quote(\'[1, 2, 3]\') |\n+-------------------------+\n| "[1, 2, 3]"             |\n+-------------------------+\n\n\nMySQL> SELECT json_quote(null);\n+------------------+\n| json_quote(null) |\n+------------------+\n| NULL             |\n+------------------+\n\nMySQL> select json_quote("\\n\\b\\r\\t");\n+------------------------+\n| json_quote(\'\\n\\b\\r\\t\') |\n+------------------------+\n| "\\n\\b\\r\\t"             |\n+------------------------+\n')),(0,r.kt)("h2",{id:"keyword"},"keyword"),(0,r.kt)("p",null,"json_quote"))}p.isMDXComponent=!0}}]);