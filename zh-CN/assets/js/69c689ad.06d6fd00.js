"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[21787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u65f6\u533a",language:"zh-CN"},l=void 0,o={unversionedId:"administrator-guide/time-zone",id:"version-1.0/administrator-guide/time-zone",title:"\u65f6\u533a",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/administrator-guide/time-zone.md",sourceDirName:"administrator-guide",slug:"/administrator-guide/time-zone",permalink:"/zh-CN/docs/1.0/administrator-guide/time-zone",draft:!1,tags:[],version:"1.0",frontMatter:{title:"\u65f6\u533a",language:"zh-CN"},sidebar:"docs",previous:{title:"SQL MODE",permalink:"/zh-CN/docs/1.0/administrator-guide/sql-mode"},next:{title:"\u53d8\u91cf",permalink:"/zh-CN/docs/1.0/administrator-guide/variables"}},p={},u=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5177\u4f53\u64cd\u4f5c",id:"\u5177\u4f53\u64cd\u4f5c",level:2},{value:"\u65f6\u533a\u7684\u5f71\u54cd",id:"\u65f6\u533a\u7684\u5f71\u54cd",level:3},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u65f6\u533a\u683c\u5f0f\u5217\u8868",id:"\u65f6\u533a\u683c\u5f0f\u5217\u8868",level:2}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u65f6\u533a"},"\u65f6\u533a"),(0,a.kt)("p",null,"Doris \u652f\u6301\u591a\u65f6\u533a\u8bbe\u7f6e"),(0,a.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FE\uff1aFrontend\uff0cDoris \u7684\u524d\u7aef\u8282\u70b9\u3002\u8d1f\u8d23\u5143\u6570\u636e\u7ba1\u7406\u548c\u8bf7\u6c42\u63a5\u5165\u3002"),(0,a.kt)("li",{parentName:"ul"},"BE\uff1aBackend\uff0cDoris \u7684\u540e\u7aef\u8282\u70b9\u3002\u8d1f\u8d23\u67e5\u8be2\u6267\u884c\u548c\u6570\u636e\u5b58\u50a8\u3002")),(0,a.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,a.kt)("p",null,"Doris \u5185\u90e8\u5b58\u5728\u591a\u4e2a\u65f6\u533a\u76f8\u5173\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"system_time_zone :\n\u5f53\u670d\u52a1\u5668\u542f\u52a8\u65f6\uff0c\u4f1a\u6839\u636e\u673a\u5668\u8bbe\u7f6e\u65f6\u533a\u81ea\u52a8\u8bbe\u7f6e\uff0c\u8bbe\u7f6e\u540e\u4e0d\u53ef\u4fee\u6539\u3002\n"),(0,a.kt)("li",{parentName:"ul"},"time_zone :\n\u670d\u52a1\u5668\u5f53\u524d\u65f6\u533a\uff0c\u533a\u5206session\u7ea7\u522b\u548cglobal\u7ea7\u522b")),(0,a.kt)("h2",{id:"\u5177\u4f53\u64cd\u4f5c"},"\u5177\u4f53\u64cd\u4f5c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"show variables like '%time_zone%'"),(0,a.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u65f6\u533a\u76f8\u5173\u914d\u7f6e")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"SET time_zone = 'Asia/Shanghai'"),(0,a.kt)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u53ef\u4ee5\u8bbe\u7f6esession\u7ea7\u522b\u7684\u65f6\u533a\uff0c\u8fde\u63a5\u65ad\u5f00\u540e\u5931\u6548")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"SET global time_zone = 'Asia/Shanghai'"),(0,a.kt)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u53ef\u4ee5\u8bbe\u7f6eglobal\u7ea7\u522b\u7684\u65f6\u533a\u53c2\u6570\uff0cfe\u4f1a\u5c06\u53c2\u6570\u6301\u4e45\u5316\uff0c\u8fde\u63a5\u65ad\u5f00\u540e\u4e0d\u5931\u6548"))),(0,a.kt)("h3",{id:"\u65f6\u533a\u7684\u5f71\u54cd"},"\u65f6\u533a\u7684\u5f71\u54cd"),(0,a.kt)("p",null,"\u65f6\u533a\u8bbe\u7f6e\u4f1a\u5f71\u54cd\u5bf9\u65f6\u533a\u654f\u611f\u7684\u65f6\u95f4\u503c\u7684\u663e\u793a\u548c\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u5305\u62ecNOW()\u6216CURTIME()\u7b49\u65f6\u95f4\u51fd\u6570\u663e\u793a\u7684\u503c\uff0c\u4e5f\u5305\u62ecshow load, show backends\u4e2d\u7684\u65f6\u95f4\u503c\u3002"),(0,a.kt)("p",null,"\u4f46\u4e0d\u4f1a\u5f71\u54cd create table \u4e2d\u65f6\u95f4\u7c7b\u578b\u5206\u533a\u5217\u7684 less than \u503c\uff0c\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u5b58\u50a8\u4e3a date/datetime \u7c7b\u578b\u7684\u503c\u7684\u663e\u793a\u3002"),(0,a.kt)("p",null,"\u53d7\u65f6\u533a\u5f71\u54cd\u7684\u51fd\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FROM_UNIXTIME"),"\uff1a\u7ed9\u5b9a\u4e00\u4e2a UTC \u65f6\u95f4\u6233\uff0c\u8fd4\u56de\u6307\u5b9a\u65f6\u533a\u7684\u65e5\u671f\u65f6\u95f4\uff1a\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"FROM_UNIXTIME(0)"),"\uff0c \u8fd4\u56de CST \u65f6\u533a\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"1970-01-01 08:00:00"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UNIX_TIMESTAMP"),"\uff1a\u7ed9\u5b9a\u4e00\u4e2a\u6307\u5b9a\u65f6\u533a\u65e5\u671f\u65f6\u95f4\uff0c\u8fd4\u56de UTC \u65f6\u95f4\u6233\uff1a\u5982 CST \u65f6\u533a ",(0,a.kt)("inlineCode",{parentName:"li"},"UNIX_TIMESTAMP('1970-01-01 08:00:00')"),"\uff0c\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CURTIME"),"\uff1a\u8fd4\u56de\u6307\u5b9a\u65f6\u533a\u65f6\u95f4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOW"),"\uff1a\u8fd4\u6307\u5b9a\u5730\u65f6\u533a\u65e5\u671f\u65f6\u95f4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CONVERT_TZ"),"\uff1a\u5c06\u4e00\u4e2a\u65e5\u671f\u65f6\u95f4\u4ece\u4e00\u4e2a\u6307\u5b9a\u65f6\u533a\u8f6c\u6362\u5230\u53e6\u4e00\u4e2a\u6307\u5b9a\u65f6\u533a\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,a.kt)("p",null,"\u65f6\u533a\u503c\u53ef\u4ee5\u4f7f\u7528\u51e0\u79cd\u683c\u5f0f\u7ed9\u51fa\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8868\u793aUTC\u504f\u79fb\u91cf\u7684\u5b57\u7b26\u4e32\uff0c\u5982'+10:00'\u6216'-6:00'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'\u6807\u51c6\u65f6\u533a\u683c\u5f0f\uff0c\u5982"Asia/Shanghai"\u3001"America/Los_Angeles"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'\u4e0d\u652f\u6301\u7f29\u5199\u65f6\u533a\u683c\u5f0f\uff0c\u5982"MET"\u3001"CTT"\u3002\u56e0\u4e3a\u7f29\u5199\u65f6\u533a\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u5b58\u5728\u6b67\u4e49\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u3002')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'\u4e3a\u4e86\u517c\u5bb9Doris\uff0c\u652f\u6301CST\u7f29\u5199\u65f6\u533a\uff0c\u5185\u90e8\u4f1a\u5c06CST\u8f6c\u79fb\u4e3a"Asia/Shanghai"\u7684\u4e2d\u56fd\u6807\u51c6\u65f6\u533a'))),(0,a.kt)("h2",{id:"\u65f6\u533a\u683c\u5f0f\u5217\u8868"},"\u65f6\u533a\u683c\u5f0f\u5217\u8868"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"List of tz database time zones")))}m.isMDXComponent=!0}}]);