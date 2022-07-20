"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[48713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=i(n),f=l,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=n(87462),l=(n(67294),n(3905));const a={title:"date_format",language:"zh-CN"},o=void 0,u={unversionedId:"sql-reference/sql-functions/date-time-functions/date_format",id:"version-1.0/sql-reference/sql-functions/date-time-functions/date_format",title:"date_format",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-functions/date-time-functions/date_format.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date_format",permalink:"/zh-CN/docs/1.0/sql-reference/sql-functions/date-time-functions/date_format",draft:!1,tags:[],version:"1.0",frontMatter:{title:"date_format",language:"zh-CN"},sidebar:"docs",previous:{title:"date_add",permalink:"/zh-CN/docs/1.0/sql-reference/sql-functions/date-time-functions/date_add"},next:{title:"date_sub",permalink:"/zh-CN/docs/1.0/sql-reference/sql-functions/date-time-functions/date_sub"}},c={},i=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],s={toc:i};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"date_format"},"date_format"),(0,l.kt)("h2",{id:"description"},"description"),(0,l.kt)("h3",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR DATE_FORMAT(DATETIME date, VARCHAR format)")),(0,l.kt)("p",null,"\u5c06\u65e5\u671f\u7c7b\u578b\u6309\u7167format\u7684\u7c7b\u578b\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\uff0c\n\u5f53\u524d\u652f\u6301\u6700\u5927128\u5b57\u8282\u7684\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u8fd4\u56de\u503c\u957f\u5ea6\u8d85\u8fc7128\uff0c\u5219\u8fd4\u56deNULL"),(0,l.kt)("p",null,"date \u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u3002format \u89c4\u5b9a\u65e5\u671f/\u65f6\u95f4\u7684\u8f93\u51fa\u683c\u5f0f\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u7684\u683c\u5f0f\u6709\uff1a"),(0,l.kt)("p",null,"%a | \u7f29\u5199\u661f\u671f\u540d     "),(0,l.kt)("p",null,"%b | \u7f29\u5199\u6708\u540d   "),(0,l.kt)("p",null,"%c | \u6708\uff0c\u6570\u503c "),(0,l.kt)("p",null,"%D | \u5e26\u6709\u82f1\u6587\u524d\u7f00\u7684\u6708\u4e2d\u7684\u5929       "),(0,l.kt)("p",null,"%d | \u6708\u7684\u5929\uff0c\u6570\u503c(00-31)"),(0,l.kt)("p",null,"%e | \u6708\u7684\u5929\uff0c\u6570\u503c(0-31)"),(0,l.kt)("p",null,"%f | \u5fae\u79d2"),(0,l.kt)("p",null,"%H | \u5c0f\u65f6 (00-23)"),(0,l.kt)("p",null,"%h | \u5c0f\u65f6 (01-12)"),(0,l.kt)("p",null,"%I | \u5c0f\u65f6 (01-12)"),(0,l.kt)("p",null,"%i | \u5206\u949f\uff0c\u6570\u503c(00-59)"),(0,l.kt)("p",null,"%j | \u5e74\u7684\u5929 (001-366)"),(0,l.kt)("p",null,"%k | \u5c0f\u65f6 (0-23)"),(0,l.kt)("p",null,"%l | \u5c0f\u65f6 (1-12)"),(0,l.kt)("p",null,"%M | \u6708\u540d"),(0,l.kt)("p",null,"%m | \u6708\uff0c\u6570\u503c(00-12)"),(0,l.kt)("p",null,"%p | AM \u6216 PM"),(0,l.kt)("p",null,"%r | \u65f6\u95f4\uff0c12-\u5c0f\u65f6\uff08hh:mm:ss AM \u6216 PM\uff09"),(0,l.kt)("p",null,"%S | \u79d2(00-59)"),(0,l.kt)("p",null,"%s | \u79d2(00-59)"),(0,l.kt)("p",null,"%T | \u65f6\u95f4, 24-\u5c0f\u65f6 (hh:mm:ss)"),(0,l.kt)("p",null,"%U | \u5468 (00-53) \u661f\u671f\u65e5\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929"),(0,l.kt)("p",null,"%u | \u5468 (00-53) \u661f\u671f\u4e00\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929"),(0,l.kt)("p",null,"%V | \u5468 (01-53) \u661f\u671f\u65e5\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929\uff0c\u4e0e %X \u4f7f\u7528"),(0,l.kt)("p",null,"%v | \u5468 (01-53) \u661f\u671f\u4e00\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929\uff0c\u4e0e %x \u4f7f\u7528"),(0,l.kt)("p",null,"%W | \u661f\u671f\u540d"),(0,l.kt)("p",null,"%w | \u5468\u7684\u5929 \uff080=\u661f\u671f\u65e5, 6=\u661f\u671f\u516d\uff09"),(0,l.kt)("p",null,"%X | \u5e74\uff0c\u5176\u4e2d\u7684\u661f\u671f\u65e5\u662f\u5468\u7684\u7b2c\u4e00\u5929\uff0c4 \u4f4d\uff0c\u4e0e %V \u4f7f\u7528"),(0,l.kt)("p",null,"%x | \u5e74\uff0c\u5176\u4e2d\u7684\u661f\u671f\u4e00\u662f\u5468\u7684\u7b2c\u4e00\u5929\uff0c4 \u4f4d\uff0c\u4e0e %v \u4f7f\u7528"),(0,l.kt)("p",null,"%Y | \u5e74\uff0c4 \u4f4d          "),(0,l.kt)("p",null,"%y | \u5e74\uff0c2 \u4f4d"),(0,l.kt)("p",null,"%% | \u7528\u4e8e\u8868\u793a %"),(0,l.kt)("h2",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select date_format('2009-10-04 22:23:00', '%W %M %Y');\n+------------------------------------------------+\n| date_format('2009-10-04 22:23:00', '%W %M %Y') |\n+------------------------------------------------+\n| Sunday October 2009                            |\n+------------------------------------------------+\n\nmysql> select date_format('2007-10-04 22:23:00', '%H:%i:%s');\n+------------------------------------------------+\n| date_format('2007-10-04 22:23:00', '%H:%i:%s') |\n+------------------------------------------------+\n| 22:23:00                                       |\n+------------------------------------------------+\n\nmysql> select date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');\n+------------------------------------------------------------+\n| date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j') |\n+------------------------------------------------------------+\n| 4th 00 Thu 04 10 Oct 277                                   |\n+------------------------------------------------------------+\n\nmysql> select date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');\n+------------------------------------------------------------+\n| date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w') |\n+------------------------------------------------------------+\n| 22 22 10 10:23:00 PM 22:23:00 00 6                         |\n+------------------------------------------------------------+\n\nmysql> select date_format('1999-01-01 00:00:00', '%X %V'); \n+---------------------------------------------+\n| date_format('1999-01-01 00:00:00', '%X %V') |\n+---------------------------------------------+\n| 1998 52                                     |\n+---------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%d');\n+------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%d') |\n+------------------------------------------+\n| 01                                       |\n+------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%%%d');\n+--------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%%%d') |\n+--------------------------------------------+\n| %01                                        |\n+--------------------------------------------+\n")),(0,l.kt)("h2",{id:"keyword"},"keyword"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DATE_FORMAT,DATE,FORMAT\n")))}p.isMDXComponent=!0}}]);