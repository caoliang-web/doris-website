"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[82966],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(t),k=l,d=f["".concat(s,".").concat(k)]||f[k]||p[k]||a;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},49153:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),l=(t(67294),t(3905));const a={title:"not like",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/like/not_like",id:"sql-manual/sql-functions/string-functions/like/not_like",title:"not like",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/like/not_like.md",sourceDirName:"sql-manual/sql-functions/string-functions/like",slug:"/sql-manual/sql-functions/string-functions/like/not_like",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/like/not_like",draft:!1,tags:[],version:"current",frontMatter:{title:"not like",language:"zh-CN"},sidebar:"docs",previous:{title:"like",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/like/"},next:{title:"regexp",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/regexp/"}},s={},c=[{value:"not like",id:"not-like",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"not-like"},"not like"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BOOLEAN not like(VARCHAR str, VARCHAR pattern)")),(0,l.kt)("p",null,"\u5bf9\u5b57\u7b26\u4e32 str \u8fdb\u884c\u6a21\u7cca\u5339\u914d\uff0c\u5339\u914d\u4e0a\u7684\u5219\u8fd4\u56de false\uff0c\u6ca1\u5339\u914d\u4e0a\u5219\u8fd4\u56de true\u3002"),(0,l.kt)("p",null,"like \u5339\u914d/\u6a21\u7cca\u5339\u914d\uff0c\u4f1a\u4e0e % \u548c _ \u7ed3\u5408\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u767e\u5206\u53f7 '%' \u4ee3\u8868\u96f6\u4e2a\u3001\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("p",null,"\u4e0b\u5212\u7ebf '_' \u4ee3\u8868\u5355\u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"'a'      // \u7cbe\u51c6\u5339\u914d\uff0c\u548c `=` \u6548\u679c\u4e00\u81f4\n'%a'     // \u4ee5a\u7ed3\u5c3e\u7684\u6570\u636e\n'a%'     // \u4ee5a\u5f00\u5934\u7684\u6570\u636e\n'%a%'    // \u542b\u6709a\u7684\u6570\u636e\n'_a_'    // \u4e09\u4f4d\u4e14\u4e2d\u95f4\u5b57\u6bcd\u662f a \u7684\u6570\u636e\n'_a'     // \u4e24\u4f4d\u4e14\u7ed3\u5c3e\u5b57\u6bcd\u662f a \u7684\u6570\u636e\n'a_'     // \u4e24\u4f4d\u4e14\u5f00\u5934\u5b57\u6bcd\u662f a \u7684\u6570\u636e\n'a__b'  // \u56db\u4f4d\u4e14\u4ee5\u5b57\u7b26a\u5f00\u5934\u3001b\u7ed3\u5c3e\u7684\u6570\u636e\n")),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// table test\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n| a     |\n+-------+\n\n// \u8fd4\u56de k1 \u5b57\u7b26\u4e32\u4e2d\u4e0d\u5305\u542b a \u7684\u6570\u636e\nmysql > select k1 from test where k1 not like '%a%';\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n+-------+\n\n// \u8fd4\u56de k1 \u5b57\u7b26\u4e32\u4e2d\u4e0d\u7b49\u4e8e a \u7684\u6570\u636e\nmysql > select k1 from test where k1 not like 'a';\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n+-------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("p",null,"LIKE, NOT, NOT LIKE"))}p.isMDXComponent=!0}}]);