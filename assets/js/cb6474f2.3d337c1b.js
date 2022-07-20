"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[35756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,N=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(N,o(o({ref:t},p),{},{components:n})):a.createElement(N,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"BEGIN",language:"en"},o=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/BEGIN",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/BEGIN",title:"BEGIN",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/BEGIN.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/BEGIN",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/BEGIN",draft:!1,tags:[],version:"0.15",frontMatter:{title:"BEGIN",language:"en"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Note",id:"note",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"begin-commit-rollback"},"BEGIN, COMMIT, ROLLBACK"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BEGIN;\nINSERT INTO table_name ...\nCOMMIT;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BEGIN [ WITH LABEL label];\nINSERT INTO table_name ...\nROLLBACK;\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"label: the label for this transaction, if you need to set it to a string.")),(0,r.kt)("h3",{id:"note"},"Note"),(0,r.kt)("p",null,"A transaction can only be used on insert, nor update or delete. You can check the state of this transaction by ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW TRANSACTION WHERE LABEL = 'label'")),(0,r.kt)("h2",{id:"example"},"example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Begin a transaction without a label, then commit it")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BEGIN\nINSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\nCOMMIT:\n")),(0,r.kt)("p",null,"All the data in the sql between ",(0,r.kt)("inlineCode",{parentName:"p"},"begin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," will be inserted into the table. "),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Begin a transaction without a label, then abort it")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BEGIN\nINSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\nROLLBACK:\n")),(0,r.kt)("p",null,"All the data in the sql between ",(0,r.kt)("inlineCode",{parentName:"p"},"begin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rollback")," will be aborted, nothing will be inserted into the table. "),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Begin a transaction with a label, then commit it")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BEGIN WITH LABEL test_label1\nINSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\nCOMMIT:\n")),(0,r.kt)("p",null,"All the data in the sql between ",(0,r.kt)("inlineCode",{parentName:"p"},"begin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," will be inserted into the table.\nThe label of ",(0,r.kt)("inlineCode",{parentName:"p"},"test_label1")," will be set to mark this transaction. You can check this transaction by ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW TRANSACTION WHERE LABEL = 'test_label1'"),"."),(0,r.kt)("h2",{id:"keyword"},"keyword"),(0,r.kt)("p",null,"BEGIN, COMMIT, ROLLBACK"))}u.isMDXComponent=!0}}]);