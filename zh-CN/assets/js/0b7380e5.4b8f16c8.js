"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[10479],{3905:(n,e,t)=>{t.d(e,{Zo:()=>U,kt:()=>G});var l=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,l,r=function(n,e){if(null==n)return{};var t,l,r={},a=Object.keys(n);for(l=0;l<a.length;l++)t=a[l],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(l=0;l<a.length;l++)t=a[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=l.createContext({}),k=function(n){var e=l.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):p(p({},e),n)),t},U=function(n){var e=k(n.components);return l.createElement(o.Provider,{value:e},n.children)},N={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},i=l.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,o=n.parentName,U=u(n,["components","mdxType","originalType","parentName"]),i=k(t),G=r,s=i["".concat(o,".").concat(G)]||i[G]||N[G]||a;return t?l.createElement(s,p(p({ref:e},U),{},{components:t})):l.createElement(s,p({ref:e},U))}));function G(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,p=new Array(a);p[0]=i;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=n,u.mdxType="string"==typeof n?n:r,p[1]=u;for(var k=2;k<a;k++)p[k]=t[k];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}i.displayName="MDXCreateElement"},36396:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>N,frontMatter:()=>a,metadata:()=>u,toc:()=>k});var l=t(87462),r=(t(67294),t(3905));const a={title:"GROUPING SETS \u8bbe\u8ba1\u6587\u6863",language:"zh-CN"},p=void 0,u={unversionedId:"internal/grouping_sets_design",id:"version-1.0/internal/grouping_sets_design",title:"GROUPING SETS \u8bbe\u8ba1\u6587\u6863",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/internal/grouping_sets_design.md",sourceDirName:"internal",slug:"/internal/grouping_sets_design",permalink:"/zh-CN/docs/1.0/internal/grouping_sets_design",draft:!1,tags:[],version:"1.0",frontMatter:{title:"GROUPING SETS \u8bbe\u8ba1\u6587\u6863",language:"zh-CN"}},o={},k=[{value:"1. GROUPING SETS \u76f8\u5173\u80cc\u666f\u77e5\u8bc6",id:"1-grouping-sets-\u76f8\u5173\u80cc\u666f\u77e5\u8bc6",level:2},{value:"1.1 GROUPING SETS \u5b50\u53e5",id:"11-grouping-sets-\u5b50\u53e5",level:3},{value:"1.2 ROLLUP \u5b50\u53e5",id:"12-rollup-\u5b50\u53e5",level:3},{value:"1.3 CUBE \u5b50\u53e5",id:"13-cube-\u5b50\u53e5",level:3},{value:"1.4 GROUPING \u548c GROUPING_ID \u51fd\u6570",id:"14-grouping-\u548c-grouping_id-\u51fd\u6570",level:3},{value:"1.5 GROUPING SETS \u7684\u7ec4\u5408\u4e0e\u5d4c\u5957",id:"15-grouping-sets-\u7684\u7ec4\u5408\u4e0e\u5d4c\u5957",level:3},{value:"2. \u8bbe\u8ba1\u76ee\u6807",id:"2-\u8bbe\u8ba1\u76ee\u6807",level:2},{value:"2.1 GROUPING SETS \u8bed\u6cd5",id:"21-grouping-sets-\u8bed\u6cd5",level:3},{value:"2.2 ROLLUP \u8bed\u6cd5",id:"22-rollup-\u8bed\u6cd5",level:3},{value:"2.3 CUBE \u8bed\u6cd5",id:"23-cube-\u8bed\u6cd5",level:3},{value:"3. \u5b9e\u73b0\u65b9\u6848",id:"3-\u5b9e\u73b0\u65b9\u6848",level:2},{value:"3.1 \u6574\u4f53\u601d\u8def",id:"31-\u6574\u4f53\u601d\u8def",level:3},{value:"3.2 \u5177\u4f53\u4f8b\u5b50\u9a8c\u8bc1\u8bf4\u660e",id:"32-\u5177\u4f53\u4f8b\u5b50\u9a8c\u8bc1\u8bf4\u660e",level:3},{value:"3.3 FE \u89c4\u5212\u9636\u6bb5",id:"33-fe-\u89c4\u5212\u9636\u6bb5",level:3},{value:"3.3.1 \u4e3b\u8981\u4efb\u52a1",id:"331-\u4e3b\u8981\u4efb\u52a1",level:4},{value:"3.3.2 Tuple",id:"332-tuple",level:4},{value:"3.4 BE \u67e5\u8be2\u6267\u884c\u9636\u6bb5",id:"34-be-\u67e5\u8be2\u6267\u884c\u9636\u6bb5",level:3}],U={toc:k};function N(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,l.Z)({},U,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grouping-sets-\u8bbe\u8ba1\u6587\u6863"},"GROUPING SETS \u8bbe\u8ba1\u6587\u6863"),(0,r.kt)("h2",{id:"1-grouping-sets-\u76f8\u5173\u80cc\u666f\u77e5\u8bc6"},"1. GROUPING SETS \u76f8\u5173\u80cc\u666f\u77e5\u8bc6"),(0,r.kt)("h3",{id:"11-grouping-sets-\u5b50\u53e5"},"1.1 GROUPING SETS \u5b50\u53e5"),(0,r.kt)("p",null,"GROUP BY GROUPING SETS \u662f\u5bf9 GROUP BY \u5b50\u53e5\u7684\u6269\u5c55\uff0c\u5b83\u80fd\u591f\u5728\u4e00\u4e2a GROUP BY \u5b50\u53e5\u4e2d\u4e00\u6b21\u5b9e\u73b0\u591a\u4e2a\u96c6\u5408\u7684\u5206\u7ec4\u3002\u5176\u7ed3\u679c\u7b49\u4ef7\u4e8e\u5c06\u591a\u4e2a\u76f8\u5e94 GROUP BY \u5b50\u53e5\u8fdb\u884c UNION \u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u7279\u522b\u5730\uff0c\u4e00\u4e2a\u7a7a\u7684\u5b50\u96c6\u610f\u5473\u7740\u5c06\u6240\u6709\u7684\u884c\u805a\u96c6\u5230\u4e00\u4e2a\u5206\u7ec4\u3002\nGROUP BY \u5b50\u53e5\u662f\u53ea\u542b\u6709\u4e00\u4e2a\u5143\u7d20\u7684 GROUP BY GROUPING SETS \u7684\u7279\u4f8b\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0cGROUPING SETS \u8bed\u53e5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT k1, k2, SUM( k3 ) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k1), (k2), ( ) );\n")),(0,r.kt)("p",null,"\u5176\u67e5\u8be2\u7ed3\u679c\u7b49\u4ef7\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT k1, k2, SUM( k3 ) FROM t GROUP BY k1, k2\nUNION\nSELECT k1, null, SUM( k3 ) FROM t GROUP BY k1\nUNION\nSELECT null, k2, SUM( k3 ) FROM t GROUP BY k2\nUNION\nSELECT null, null, SUM( k3 ) FROM t\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5b9e\u9645\u6570\u636e\u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> SELECT * FROM t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n\nmysql> SELECT k1, k2, SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| a    | B    |         4 |\n| a    | A    |         3 |\n| b    | A    |         5 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n")),(0,r.kt)("h3",{id:"12-rollup-\u5b50\u53e5"},"1.2 ROLLUP \u5b50\u53e5"),(0,r.kt)("p",null,"ROLLUP \u662f\u5bf9 GROUPING SETS \u7684\u6269\u5c55\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT a, b,c, SUM( d ) FROM tab1 GROUP BY ROLLUP(a,b,c)\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a ROLLUP \u7b49\u4ef7\u4e8e\u4e0b\u9762\u7684 GROUPING SETS\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GROUPING SETS (\n(a,b,c),\n( a, b ),\n( a),\n( )\n)\n")),(0,r.kt)("h3",{id:"13-cube-\u5b50\u53e5"},"1.3 CUBE \u5b50\u53e5"),(0,r.kt)("p",null,"CUBE \u4e5f\u662f\u5bf9 GROUPING SETS \u7684\u6269\u5c55\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CUBE ( e1, e2, e3, ... )\n")),(0,r.kt)("p",null,"\u5176\u542b\u4e49\u662f GROUPING SETS \u540e\u9762\u5217\u8868\u4e2d\u7684\u6240\u6709\u5b50\u96c6\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0cCUBE ( a, b, c ) \u7b49\u4ef7\u4e8e\u4e0b\u9762\u7684 GROUPING SETS\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GROUPING SETS (\n( a, b, c ),\n( a, b ),\n( a,    c ),\n( a       ),\n(    b, c ),\n(    b    ),\n(       c ),\n(         )\n)\n")),(0,r.kt)("h3",{id:"14-grouping-\u548c-grouping_id-\u51fd\u6570"},"1.4 GROUPING \u548c GROUPING_ID \u51fd\u6570"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u6ca1\u6709\u7edf\u8ba1\u67d0\u4e00\u5217\u65f6\uff0c\u5b83\u7684\u503c\u663e\u793a\u4e3a NULL\uff0c\u8fd9\u4e5f\u53ef\u80fd\u662f\u5217\u672c\u8eab\u5c31\u6709 NULL \u503c\uff0c\u8fd9\u5c31\u9700\u8981\u4e00\u79cd\u65b9\u6cd5\u533a\u5206\u662f\u6ca1\u6709\u7edf\u8ba1\u8fd8\u662f\u503c\u672c\u6765\u5c31\u662f NULL\u3002\u4e3a\u6b64\u5f15\u5165 GROUPING \u548c GROUPING_ID \u51fd\u6570\u3002\nGROUPING(column:Column) \u51fd\u6570\u7528\u4e8e\u533a\u5206\u5206\u7ec4\u540e\u7684\u5355\u4e2a\u5217\u662f\u666e\u901a\u5217\u548c\u805a\u5408\u5217\u3002\u5982\u679c\u662f\u805a\u5408\u5217\uff0c\u5219\u8fd4\u56de1\uff0c\u53cd\u4e4b\uff0c\u5219\u662f0. GROUPING() \u53ea\u80fd\u6709\u4e00\u4e2a\u53c2\u6570\u5217\u3002"),(0,r.kt)("p",null,"GROUPING_ID(column1, column2) \u5219\u6839\u636e\u6307\u5b9a\u7684column \u987a\u5e8f\uff0c\u5426\u5219\u6839\u636e\u805a\u5408\u7684\u65f6\u5019\u7ed9\u7684\u96c6\u5408\u7684\u5143\u7d20\u987a\u5e8f\uff0c\u8ba1\u7b97\u51fa\u4e00\u4e2a\u5217\u5217\u8868\u7684 bitmap \u503c\uff0c\u4e00\u4e2a\u5217\u5982\u679c\u662f\u805a\u5408\u5217\u4e3a0\uff0c\u5426\u5219\u4e3a1. GROUPING_ID()\u51fd\u6570\u8fd4\u56de\u4f4d\u5411\u91cf\u7684\u5341\u8fdb\u5236\u503c\u3002\n\u6bd4\u5982 ","[0 1 0]"," ->2 \u4ece\u4e0b\u5217\u7b2c\u4e09\u4e2a\u67e5\u8be2\u53ef\u4ee5\u770b\u5230\u8fd9\u79cd\u5bf9\u5e94\u5173\u7cfb"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5bf9\u4e8e\u4e0b\u9762\u7684\u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select * from t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n")),(0,r.kt)("p",null,"grouping sets \u7684\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> SELECT k1, k2, GROUPING(k1), GROUPING(k2), SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+----------------+----------------+-----------+\n| k1   | k2   | grouping(`k1`) | grouping(`k2`) | sum(`k3`) |\n+------+------+----------------+----------------+-----------+\n| a    | A    |              0 |              0 |         3 |\n| a    | B    |              0 |              0 |         4 |\n| a    | NULL |              0 |              1 |         7 |\n| b    | A    |              0 |              0 |         5 |\n| b    | B    |              0 |              0 |         6 |\n| b    | NULL |              0 |              1 |        11 |\n| NULL | A    |              1 |              0 |         8 |\n| NULL | B    |              1 |              0 |        10 |\n| NULL | NULL |              1 |              1 |        18 |\n+------+------+----------------+----------------+-----------+\n9 rows in set (0.02 sec)\n\nmysql> SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-------------------------+-----------+\n| k1   | k2   | grouping_id(`k1`, `k2`) | sum(`k3`) |\n+------+------+-------------------------+-----------+\n| a    | A    |                       0 |         3 |\n| a    | B    |                       0 |         4 |\n| a    | NULL |                       1 |         7 |\n| b    | A    |                       0 |         5 |\n| b    | B    |                       0 |         6 |\n| b    | NULL |                       1 |        11 |\n| NULL | A    |                       2 |         8 |\n| NULL | B    |                       2 |        10 |\n| NULL | NULL |                       3 |        18 |\n+------+------+-------------------------+-----------+\n9 rows in set (0.02 sec)\n\nmysql> SELECT k1, k2, grouping(k1), grouping(k2), GROUPING_ID(k1,k2), SUM(k4) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) ) order by k1, k2;\n+------+------+----------------+----------------+-------------------------+-----------+\n| k1   | k2   | grouping(`k1`) | grouping(`k2`) | grouping_id(`k1`, `k2`) | sum(`k4`) |\n+------+------+----------------+----------------+-------------------------+-----------+\n| a    | A    |              0 |              0 |                       0 |         3 |\n| a    | B    |              0 |              0 |                       0 |         4 |\n| a    | NULL |              0 |              1 |                       1 |         7 |\n| b    | A    |              0 |              0 |                       0 |         5 |\n| b    | B    |              0 |              0 |                       0 |         6 |\n| b    | NULL |              0 |              1 |                       1 |        11 |\n| NULL | A    |              1 |              0 |                       2 |         8 |\n| NULL | B    |              1 |              0 |                       2 |        10 |\n| NULL | NULL |              1 |              1 |                       3 |        18 |\n+------+------+----------------+----------------+-------------------------+-----------+\n9 rows in set (0.02 sec)\n\n")),(0,r.kt)("h3",{id:"15-grouping-sets-\u7684\u7ec4\u5408\u4e0e\u5d4c\u5957"},"1.5 GROUPING SETS \u7684\u7ec4\u5408\u4e0e\u5d4c\u5957"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u4e00\u4e2a GROUP BY \u5b50\u53e5\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a GROUPING SETS \u7684\u7279\u4f8b, \u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   GROUP BY a\n\u7b49\u540c\u4e8e\n   GROUP BY GROUPING SETS((a))\n\u540c\u6837\u5730\uff0c\n   GROUP BY a,b,c\n\u7b49\u540c\u4e8e\n   GROUP BY GROUPING SETS((a,b,c))\n")),(0,r.kt)("p",null,"\u540c\u6837\u7684\uff0cCUBE \u548c ROLLUP \u4e5f\u53ef\u4ee5\u5c55\u5f00\u6210 GROUPING SETS\uff0c\u56e0\u6b64 GROUP BY, CUBE, ROLLUP, GROUPING SETS \u7684\u5404\u79cd\u7ec4\u5408\u548c\u5d4c\u5957\u672c\u8d28\u4e0a\u5c31\u662f GROUPING SETS \u7684\u7ec4\u5408\u4e0e\u5d4c\u5957\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e GROUPING SETS \u7684\u5d4c\u5957\uff0c\u8bed\u4e49\u4e0a\u7b49\u4ef7\u4e8e\u5c06\u5d4c\u5957\u5185\u7684\u8bed\u53e5\u76f4\u63a5\u5199\u5230\u5916\u9762\u3002\uff08\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.brytlyt.com/documentation/data-manipulation-dml/grouping-sets-rollup-cube/"},"https://www.brytlyt.com/documentation/data-manipulation-dml/grouping-sets-rollup-cube/"),"\uff09\uff0c\u5176\u4e2d\u5199\u9053\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The CUBE and ROLLUP constructs can be used either directly in the GROUP BY clause, or nested inside a GROUPING SETS clause. If one GROUPING SETS clause is nested inside another, the effect is the same as if all the elements of the inner clause had been written directly in the outer clause.\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u591a\u4e2a GROUPING SETS \u7684\u7ec4\u5408\u5217\u8868\uff0c\u5f88\u591a\u6570\u636e\u5e93\u8ba4\u4e3a\u662f\u53c9\u4e58\uff08cross product\uff09\u7684\u5173\u7cfb\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GROUP BY a, CUBE (b, c), GROUPING SETS ((d), (e))\n\n\u7b49\u540c\u4e8e\uff1a\n\nGROUP BY GROUPING SETS (\n(a, b, c, d), (a, b, c, e),\n(a, b, d),    (a, b, e),\n(a, c, d),    (a, c, e),\n(a, d),       (a, e)\n)\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e GROUPING SETS \u7684\u7ec4\u5408\u4e0e\u5d4c\u5957\uff0c\u5404\u4e2a\u6570\u636e\u5e93\u652f\u6301\u4e0d\u592a\u4e00\u6837\u3002\u4f8b\u5982 snowflake \u4e0d\u652f\u6301\u4efb\u4f55\u7684\u7ec4\u5408\u548c\u5d4c\u5957\u3002\n\uff08",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.net/manuals/sql-reference/constructs/group-by.html"},"https://docs.snowflake.net/manuals/sql-reference/constructs/group-by.html"),"\uff09"),(0,r.kt)("p",null,"Oracle \u65e2\u652f\u6301\u7ec4\u5408\uff0c\u4e5f\u652f\u6301\u5d4c\u5957\u3002\n\uff08",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/B19306_01/server.102/b14223/aggreg.htm#i1006842"},"https://docs.oracle.com/cd/B19306_01/server.102/b14223/aggreg.htm#i1006842"),"\uff09"),(0,r.kt)("p",null,"Presto \u652f\u6301\u7ec4\u5408\uff0c\u4f46\u4e0d\u652f\u6301\u5d4c\u5957\u3002\n\uff08",(0,r.kt)("a",{parentName:"p",href:"https://prestodb.github.io/docs/current/sql/select.html"},"https://prestodb.github.io/docs/current/sql/select.html"),"\uff09"),(0,r.kt)("h2",{id:"2-\u8bbe\u8ba1\u76ee\u6807"},"2. \u8bbe\u8ba1\u76ee\u6807"),(0,r.kt)("p",null,"\u4ece\u8bed\u6cd5\u4e0a\u652f\u6301 GROUPING SETS\uff0c ROLLUP \u548c CUBE\u3002\u5b9e\u73b0\u4e0a\u8ff0\u6240\u8ff0\u76841.1, 1.2, 1.3 1.4."),(0,r.kt)("p",null,"\u5bf9\u4e8e1.6 GROUPING SETS \u7684\u7ec4\u5408\u4e0e\u5d4c\u5957 \u5148\u4e0d\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u8bed\u6cd5\u5217\u51fa\u5982\u4e0b\uff1a"),(0,r.kt)("h3",{id:"21-grouping-sets-\u8bed\u6cd5"},"2.1 GROUPING SETS \u8bed\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT ...\nFROM ...\n[ ... ]\nGROUP BY GROUPING SETS ( groupSet [ , groupSet [ , ... ] ] )\n[ ... ]\n\ngroupSet ::= { ( expr  [ , expr [ , ... ] ] )}\n\n<expr>\n\u5404\u79cd\u8868\u8fbe\u5f0f\uff0c\u5305\u62ec\u5217\u540d.\n\n")),(0,r.kt)("h3",{id:"22-rollup-\u8bed\u6cd5"},"2.2 ROLLUP \u8bed\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT ...\nFROM ...\n[ ... ]\nGROUP BY ROLLUP ( expr  [ , expr [ , ... ] ] )\n[ ... ]\n\n<expr>\n\u5404\u79cd\u8868\u8fbe\u5f0f\uff0c\u5305\u62ec\u5217\u540d.\n\n")),(0,r.kt)("h3",{id:"23-cube-\u8bed\u6cd5"},"2.3 CUBE \u8bed\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT ...\nFROM ...\n[ ... ]\nGROUP BY CUBE ( expr  [ , expr [ , ... ] ] )\n[ ... ]\n\n<expr>\n\u5404\u79cd\u8868\u8fbe\u5f0f\uff0c\u5305\u62ec\u5217\u540d.\n\n")),(0,r.kt)("h2",{id:"3-\u5b9e\u73b0\u65b9\u6848"},"3. \u5b9e\u73b0\u65b9\u6848"),(0,r.kt)("h3",{id:"31-\u6574\u4f53\u601d\u8def"},"3.1 \u6574\u4f53\u601d\u8def"),(0,r.kt)("p",null,"\u65e2\u7136 GROUPING SET \u5b50\u53e5\u903b\u8f91\u4e0a\u7b49\u4ef7\u4e8e\u591a\u4e2a\u76f8\u5e94 GROUP BY \u5b50\u53e5\u7684 UNION\uff0c\u53ef\u4ee5\u901a\u8fc7\u6269\u5c55\u8f93\u5165\u884c(\u6b64\u8f93\u5165\u884c\u5df2\u7ecf\u662f\u901a\u8fc7\u4e0b\u63a8\u6761\u4ef6\u8fc7\u6ee4\u548c\u6295\u5f71\u540e\u7684), \u5728\u6b64\u57fa\u7840\u4e0a\u8fdb\u884c\u4e00\u4e2a\u5355\u4e00\u7684 GROUP BY \u64cd\u4f5c\u6765\u8fbe\u5230\u76ee\u7684\u3002"),(0,r.kt)("p",null,"\u5173\u952e\u662f\u600e\u6837\u6269\u5c55\u8f93\u5165\u884c\u5462\uff1f\u4e0b\u9762\u4e3e\u4f8b\u8bf4\u660e\uff1a"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5bf9\u5e94\u4e0b\u9762\u7684\u8bed\u53e5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT a, b FROM src GROUP BY a, b GROUPING SETS ((a, b), (a), (b), ());\n\n")),(0,r.kt)("p",null,"\u5047\u5b9a src \u8868\u7684\u6570\u636e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1, 2\n3, 4\n\n")),(0,r.kt)("p",null,"\u6839\u636e GROUPING SETS \u5b50\u53e5\u7ed9\u51fa\u7684\u5217\u8868\uff0c\u53ef\u4ee5\u5c06\u8f93\u5165\u884c\u6269\u5c55\u4e3a\u4e0b\u9762\u7684 8 \u884c \uff08GROUPING SETS\u96c6\u5408\u6570 * \u884c\u6570, \u540c\u65f6\u4e3a\u6bcf\u884c\u751f\u6210\u5bf9\u5e94\u7684 \u5168\u5217\u7684GROUPING_ID: \u548c\u5176\u4ed6grouping \u51fd\u6570\u7684\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1, 2       (GROUPING_ID: a, b -> 00->0)\n1, null    (GUPING_ID: a, null -> 01 -> 1)\nnull, 2    (GROUPING_ID: null, b -> 10 -> 2)\nnull, null (GROUPING_ID: null, null -> 11 -> 3)\n\n3, 4       (GROUPING_ID: a, b -> 00 -> 0)\n3, null    (GROUPING_ID: a, null -> 01 -> 1)\nnull, 4    (GROUPING_ID: null, b -> 10 -> 2)\nnull, null (GROUPING_ID: null, null -> 11 -> 3)\n\n")),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u5c06\u4e0a\u9762\u7684 8 \u884c\u6570\u636e\u4f5c\u4e3a\u8f93\u5165\uff0c\u5bf9 a, b, GROUPING_ID \u8fdb\u884c GROUP BY \u64cd\u4f5c\u5373\u53ef\u3002"),(0,r.kt)("h3",{id:"32-\u5177\u4f53\u4f8b\u5b50\u9a8c\u8bc1\u8bf4\u660e"},"3.2 \u5177\u4f53\u4f8b\u5b50\u9a8c\u8bc1\u8bf4\u660e"),(0,r.kt)("p",null,"\u5047\u8bbe\u6709\u4e00\u4e2a t \u8868\uff0c\u5305\u542b\u5982\u4e0b\u5217\u548c\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select * from t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5982\u4e0b\u7684\u67e5\u8be2\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ((k1, k2), (k1), (k2), ());\n\n")),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5bf9\u8f93\u5165\u884c\u8fdb\u884c\u6269\u5c55\uff0c\u6bcf\u884c\u6570\u636e\u6269\u5c55\u6210 4 \u884c (GROUPING SETS\u5b50\u53e5\u7684\u96c6\u5408\u6570\u76ee)\uff0c\u540c\u65f6\u589e\u52a0 GROUPING_ID() \u5217 \uff1a"),(0,r.kt)("p",null,"\u4f8b\u5982 a, A, 1 \u6269\u5c55\u540e\u53d8\u6210\u4e0b\u9762\u7684 4 \u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------+------+------+-------------------------+\n| k1   | k2   | k3   | GROUPING_ID(`k1`, `k2`) |\n+------+------+------+-------------------------+\n| a    | A    |    1 |                       0 |\n| a    | NULL |    1 |                       1 |\n| NULL | A    |    1 |                       2 |\n| NULL | NULL |    1 |                       3 |\n+------+------+------+-------------------------+\n\n")),(0,r.kt)("p",null,"\u6700\u7ec8\uff0c \u5168\u90e8\u6269\u5c55\u540e\u7684\u8f93\u5165\u884c\u5982\u4e0b\uff08\u603b\u5171 32 \u884c\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------+------+------+-------------------------+\n| k1   | k2   | k3   | GROUPING_ID(`k1`, `k2`) |\n+------+------+------+-------------------------+\n| a    | A    |    1 |                       0 |\n| a    | A    |    2 |                       0 |\n| a    | B    |    1 |                       0 |\n| a    | B    |    3 |                       0 |\n| b    | A    |    1 |                       0 |\n| b    | A    |    4 |                       0 |\n| b    | B    |    1 |                       0 |\n| b    | B    |    5 |                       0 |\n| a    | NULL |    1 |                       1 |\n| a    | NULL |    1 |                       1 |\n| a    | NULL |    2 |                       1 |\n| a    | NULL |    3 |                       1 |\n| b    | NULL |    1 |                       1 |\n| b    | NULL |    1 |                       1 |\n| b    | NULL |    4 |                       1 |\n| b    | NULL |    5 |                       1 |\n| NULL | A    |    1 |                       2 |\n| NULL | A    |    1 |                       2 |\n| NULL | A    |    2 |                       2 |\n| NULL | A    |    4 |                       2 |\n| NULL | B    |    1 |                       2 |\n| NULL | B    |    1 |                       2 |\n| NULL | B    |    3 |                       2 |\n| NULL | B    |    5 |                       2 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    2 |                       3 |\n| NULL | NULL |    3 |                       3 |\n| NULL | NULL |    4 |                       3 |\n| NULL | NULL |    5 |                       3 |\n+------+------+------+-------------------------+\n32 rows in set.\n\n")),(0,r.kt)("p",null,"\u73b0\u5728\u5bf9k1, k2, GROUPING_ID(",(0,r.kt)("inlineCode",{parentName:"p"},"k1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"k2"),") \u8fdb\u884c GROUP BY\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------+------+-------------------------+-----------+\n| k1   | k2   | grouping_id(`k1`, `k2`) | sum(`k3`) |\n+------+------+-------------------------+-----------+\n| a    | A    |                       0 |         3 |\n| a    | B    |                       0 |         4 |\n| a    | NULL |                       1 |         7 |\n| b    | A    |                       0 |         5 |\n| b    | B    |                       0 |         6 |\n| b    | NULL |                       1 |        11 |\n| NULL | A    |                       2 |         8 |\n| NULL | B    |                       2 |        10 |\n| NULL | NULL |                       3 |        18 |\n+------+------+-------------------------+-----------+\n9 rows in set (0.02 sec)\n\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5176\u7ed3\u679c\u4e0e\u5bf9 GROUPING SETS \u5b50\u53e5\u540e\u6bcf\u4e2a\u5b50\u96c6\u8fdb\u884c GROUP BY \u540e\u518d\u8fdb\u884c UNION \u7684\u7ed3\u679c\u4e00\u81f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select k1, k2, sum(k3) from t group by k1, k2\nUNION ALL\nselect NULL, k2, sum(k3) from t group by k2\nUNION ALL\nselect k1, NULL, sum(k3) from t group by k1\nUNION ALL\nselect NULL, NULL, sum(k3) from t;\n\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| b    | A    |         5 |\n| a    | A    |         3 |\n| a    | B    |         4 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n\n")),(0,r.kt)("h3",{id:"33-fe-\u89c4\u5212\u9636\u6bb5"},"3.3 FE \u89c4\u5212\u9636\u6bb5"),(0,r.kt)("h4",{id:"331-\u4e3b\u8981\u4efb\u52a1"},"3.3.1 \u4e3b\u8981\u4efb\u52a1"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f15\u5165 GroupByClause \u7c7b\uff0c\u5c01\u88c5 Group By \u76f8\u5173\u4fe1\u606f\uff0c\u66ff\u6362\u539f\u6709\u7684 groupingExprs."),(0,r.kt)("li",{parentName:"ol"},"\u589e\u52a0 Grouping Sets, Cube \u548c RollUp \u7684\u8bed\u6cd5\u652f\u6301\u548c\u8bed\u6cd5\u68c0\u67e5\u3001\u9519\u8bef\u5904\u7406\u548c\u9519\u8bef\u4fe1\u606f\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5728 SelectStmt \u7c7b\u4e2d\u589e\u52a0 GroupByClause \u6210\u5458\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5f15\u5165 GroupingFunctionCallExpr \u7c7b\uff0c\u5c01\u88c5grouping \u548cgrouping_id \u51fd\u6570\u8c03\u7528"),(0,r.kt)("li",{parentName:"ol"},"\u5f15\u5165 VirtualSlot \u7c7b\uff0c\u5c01\u88c5grouping\uff0cgrouping_id  \u751f\u6210\u7684\u865a\u62df\u5217\u548c\u5b9e\u9645\u5217\u7684\u5bf9\u5e94\u5173\u7cfb"),(0,r.kt)("li",{parentName:"ol"},"\u589e\u52a0\u865a\u62df\u5217 GROUPING_ID \u548c\u5176\u4ed6grouping\uff0cgrouping_id \u51fd\u6570\u5bf9\u5e94\u7684\u865a\u62df\u5217\uff0c\u5e76\u5c06\u6b64\u5217\u52a0\u5165\u5230\u539f\u6709\u7684 groupingExprs \u8868\u8fbe\u5f0f\u5217\u8868\u4e2d\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u589e\u52a0\u4e00\u4e2a PlanNode\uff0c\u8003\u8651\u66f4\u901a\u7528\u7684\u529f\u80fd\uff0c\u547d\u540d\u4e3a RepeatNode\u3002\u5bf9\u4e8e GroupingSets \u7684\u805a\u5408\uff0c\u5728\u6267\u884c\u8ba1\u5212\u4e2d\u63d2\u5165 RepeatNode\u3002")),(0,r.kt)("h4",{id:"332-tuple"},"3.3.2 Tuple"),(0,r.kt)("p",null,"\u5728 GroupByClause \u7c7b\u4e2d\u4e3a\u4e86\u5c06 GROUPING_ID \u52a0\u5230 groupingExprs \u8868\u8fbe\u5f0f\u5217\u8868\u4e2d\uff0c\u9700\u8981\u521b\u5efa virtual SlotRef, \u76f8\u5e94\u7684\uff0c\u9700\u8981\u5bf9\u8fd9\u4e2a slot \u521b\u5efa\u4e00\u4e2a tuple, \u53eb GROUPING_ID Tuple\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e RepeatNode \u8fd9\u4e2a\u6267\u884c\u8ba1\u5212\uff0c\u5176\u8f93\u5165\u662f\u5b50\u8282\u70b9\u7684\u6240\u6709 tuple\uff0c \u8f93\u51fa\u7684 tuple \u9664\u4e86 repeat \u5b50\u8282\u70b9\u7684\u6570\u636e\u5916\uff0c\u8fd8\u9700\u8981\u586b\u5199 GROUPING_ID \u548c\u5176\u4ed6grouping\uff0cgrouping_id \u5bf9\u5e94\u7684\u865a\u62df\u5217\uff0c\u56e0\u6b64\u3002"),(0,r.kt)("h3",{id:"34-be-\u67e5\u8be2\u6267\u884c\u9636\u6bb5"},"3.4 BE \u67e5\u8be2\u6267\u884c\u9636\u6bb5"),(0,r.kt)("p",null,"\u4e3b\u8981\u4efb\u52a1\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 RepeatNode \u7684\u6267\u884c\u7c7b\uff0c\u589e\u52a0\u6269\u5c55\u8f93\u5165\u884c\u7684\u903b\u8f91\uff0c\u5176\u529f\u80fd\u662f\u5728\u805a\u5408\u4e4b\u524d\u5c06\u539f\u6709\u6570\u636e\u8fdb\u884c repeat\uff1a\u5bf9\u6bcf\u884c\u589e\u52a0\u4e00\u5217 GROUPING_ID\uff0c \u7136\u540e\u6309\u7167 GroupingSets \u4e2d\u7684\u96c6\u5408\u6570\u8fdb\u884c repeat\uff0c\u5e76\u5bf9\u5bf9\u5e94\u5217\u7f6e\u4e3a null\u3002\u6839\u636egrouping list\u8bbe\u7f6e\u65b0\u589e\u865a\u62df\u5217\u7684\u503c"),(0,r.kt)("li",{parentName:"ol"},"\u5b9e\u73b0 grouping_id() \u548cgrouping() \u51fd\u6570\u3002")))}N.isMDXComponent=!0}}]);