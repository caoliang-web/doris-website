"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[58008],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,k=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"not like",language:"en"},o=void 0,l={unversionedId:"sql-reference/sql-functions/string-functions/like/not_like",id:"version-1.0/sql-reference/sql-functions/string-functions/like/not_like",title:"not like",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-functions/string-functions/like/not_like.md",sourceDirName:"sql-reference/sql-functions/string-functions/like",slug:"/sql-reference/sql-functions/string-functions/like/not_like",permalink:"/docs/1.0/sql-reference/sql-functions/string-functions/like/not_like",draft:!1,tags:[],version:"1.0",frontMatter:{title:"not like",language:"en"},sidebar:"docs",previous:{title:"like",permalink:"/docs/1.0/sql-reference/sql-functions/string-functions/like/"},next:{title:"regexp",permalink:"/docs/1.0/sql-reference/sql-functions/string-functions/regexp/"}},s={},c=[{value:"description",id:"description",level:2},{value:"syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"not-like"},"not like"),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("h3",{id:"syntax"},"syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BOOLEAN not like(VARCHAR str, VARCHAR pattern)")),(0,i.kt)("p",null,"Perform fuzzy matching on the string str, return false if it matches, and return true if it doesn't match."),(0,i.kt)("p",null,"like match/fuzzy match, will be used in combination with % and _."),(0,i.kt)("p",null,"the percent sign ('%') represents zero, one, or more characters."),(0,i.kt)("p",null,"the underscore ('_') represents a single character."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"'a'   // Precise matching, the same effect as `=`\n'%a'  // data ending with a\n'a%'  // data starting with a\n'%a%' // data containing a\n'_a_' // three digits and the middle letter is a\n'_a'  // two digits and the ending letter is a\n'a_'  // two digits and the initial letter is a\n'a__b'  // four digits, starting letter is a and ending letter is b\n")),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// table test\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n| a     |\n+-------+\n\n// Return data that does not contain a in the k1 string\nmysql> select k1 from test where k1 not like '%a%';\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n+-------+\n\n// Return the data that is not equal to a in the k1 string\nmysql> select k1 from test where k1 not like 'a';\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n+-------+\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("p",null,"LIKE, NOT, NOT LIKE"))}p.isMDXComponent=!0}}]);