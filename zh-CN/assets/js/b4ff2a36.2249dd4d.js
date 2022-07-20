"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[96971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"HELP",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Utility-Statements/HELP",id:"sql-manual/sql-reference/Utility-Statements/HELP",title:"HELP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Utility-Statements/HELP.md",sourceDirName:"sql-manual/sql-reference/Utility-Statements",slug:"/sql-manual/sql-reference/Utility-Statements/HELP",permalink:"/zh-CN/docs/sql-manual/sql-reference/Utility-Statements/HELP",draft:!1,tags:[],version:"current",frontMatter:{title:"HELP",language:"zh-CN"},sidebar:"docs",previous:{title:"DESCRIBE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Utility-Statements/DESCRIBE"},next:{title:"USE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Utility-Statements/USE"}},o={},c=[{value:"HELP",id:"help",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"help"},"HELP"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"HELP"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u901a\u8fc7\u6539\u547d\u4ee4\u53ef\u4ee5\u67e5\u8be2\u5230\u5e2e\u52a9\u7684\u76ee\u5f55"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"HELP <item>\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7  ",(0,a.kt)("inlineCode",{parentName:"p"},"help"),"  \u5217\u51fa\u6240\u6709\u7684 Doris \u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"List of all MySQL commands:\nNote that all text commands must be first on line and end with ';'\n?         (\\?) Synonym for `help'.\nclear     (\\c) Clear the current input statement.\nconnect   (\\r) Reconnect to the server. Optional arguments are db and host.\ndelimiter (\\d) Set statement delimiter.\nedit      (\\e) Edit command with $EDITOR.\nego       (\\G) Send command to mysql server, display result vertically.\nexit      (\\q) Exit mysql. Same as quit.\ngo        (\\g) Send command to mysql server.\nhelp      (\\h) Display this help.\nnopager   (\\n) Disable pager, print to stdout.\nnotee     (\\t) Don't write into outfile.\npager     (\\P) Set PAGER [to_pager]. Print the query results via PAGER.\nprint     (\\p) Print current command.\nprompt    (\\R) Change your mysql prompt.\nquit      (\\q) Quit mysql.\nrehash    (\\#) Rebuild completion hash.\nsource    (\\.) Execute an SQL script file. Takes a file name as an argument.\nstatus    (\\s) Get status information from the server.\nsystem    (\\!) Execute a system shell command.\ntee       (\\T) Set outfile [to_outfile]. Append everything into given outfile.\nuse       (\\u) Use another database. Takes database name as argument.\ncharset   (\\C) Switch to another charset. Might be needed for processing binlog with multi-byte charsets.\nwarnings  (\\W) Show warnings after every statement.\nnowarning (\\w) Don't show warnings after every statement.\nresetconnection(\\x) Clean session context.\n\nFor server side help, type 'help contents'\n")),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"help contents")," \u83b7\u53d6 Doris SQL \u5e2e\u52a9\u76ee\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"Many help items for your request exist.\nTo make a more specific request, please type 'help <item>',\nwhere <item> is one of the following\ncategories:\n   sql-functions\n   sql-statements\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5217\u51fa Doris \u6240\u6709\u7684 SQL \u5e2e\u52a9\u76ee\u5f55"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"help contents\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5217\u51fa Doris \u96c6\u7fa4\u6240\u6709\u51fd\u6570\u76ee\u5f55\u7684\u547d\u4ee4"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"help sql-functions\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5217\u51fa\u65e5\u671f\u51fd\u6570\u4e0b\u7684\u6240\u6709\u51fd\u6570\u5217\u8868"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"help date-time-functions\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HELP\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);