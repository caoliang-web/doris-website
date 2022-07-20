"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[72193],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(i),d=r,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return i?n.createElement(b,o(o({ref:t},p),{},{components:i})):n.createElement(b,o({ref:t},p))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},94302:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const a={title:"Subscribe Mailing Lists",language:"en"},o=void 0,s={unversionedId:"subscribe-mail-list",id:"subscribe-mail-list",title:"Subscribe Mailing Lists",description:"\x3c!--",source:"@site/community/subscribe-mail-list.md",sourceDirName:".",slug:"/subscribe-mail-list",permalink:"/community/subscribe-mail-list",draft:!1,tags:[],version:"current",frontMatter:{title:"Subscribe Mailing Lists",language:"en"},sidebar:"community",previous:{title:"Gitter Manual",permalink:"/community/gitter"},next:{title:"Feedback",permalink:"/community/feedback"}},l={},c=[{value:"1. Send Subscription Mail",id:"1-send-subscription-mail",level:2},{value:"2. Receive confirmation emails from dev-help@doris.apache.org",id:"2-receive-confirmation-emails-from-dev-helpdorisapacheorg",level:2},{value:"3. Reply to confirmation mail",id:"3-reply-to-confirmation-mail",level:2},{value:"4. Receiving Welcome Emails",id:"4-receiving-welcome-emails",level:2},{value:"5. Initiate e-mail discussion (optional)",id:"5-initiate-e-mail-discussion-optional",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subscribe-mailing-lists"},"Subscribe Mailing Lists"),(0,r.kt)("p",null,"Mail List is the most recognized form of communication in Apache community. Generally speaking, open source community questions and answers, technical discussions, transaction decisions are carried through mailing lists. The asynchronous and broadcasting features of mailing lists are also very suitable for communication in open source communities. So how do you subscribe to Apache Doris (incubating) mailing lists? It mainly includes the following five steps."),(0,r.kt)("h2",{id:"1-send-subscription-mail"},"1. Send Subscription Mail"),(0,r.kt)("p",null,"Open your own email, create a new email, and send an email to ",(0,r.kt)("inlineCode",{parentName:"p"},"dev-subscribe@doris.apache.org")," (subject and content are arbitrary)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"step1",src:i(89546).Z,width:"951",height:"498"})),(0,r.kt)("h2",{id:"2-receive-confirmation-emails-from-dev-helpdorisapacheorg"},"2. Receive confirmation emails from ",(0,r.kt)("a",{parentName:"h2",href:"mailto:dev-help@doris.apache.org"},"dev-help@doris.apache.org")),(0,r.kt)("p",null,"After the first step, you will receive a confirmation email from ",(0,r.kt)("inlineCode",{parentName:"p"},"dev-help@doris.apache.org"),", which is shown below. (",(0,r.kt)("strong",{parentName:"p"},'If you fail to receive it for a long time, please confirm that the mail has been intercepted, or has been automatically grouped into "Subscribed Mail", "Spam Mail", "Promotional Mail" folders'),")"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"step2",src:i(96265).Z,width:"847",height:"653"})),(0,r.kt)("h2",{id:"3-reply-to-confirmation-mail"},"3. Reply to confirmation mail"),(0,r.kt)("p",null,"For the mail received in the previous step,"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"a. Reply to this email directly")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"or"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"B. Create a new ",(0,r.kt)("inlineCode",{parentName:"strong"},"recipient")," e-mail for the ",(0,r.kt)("inlineCode",{parentName:"strong"},"reply address")," in the previous step")),(0,r.kt)("p",null,"Every subject is acceptable."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"step3",src:i(13402).Z,width:"951",height:"498"})),(0,r.kt)("h2",{id:"4-receiving-welcome-emails"},"4. Receiving Welcome Emails"),(0,r.kt)("p",null,"After completing the third step, you will receive a welcome email entitled ",(0,r.kt)("strong",{parentName:"p"},"WELCOME to ",(0,r.kt)("a",{parentName:"strong",href:"mailto:dev@doris.apache.org"},"dev@doris.apache.org")),". So far, the work of subscribing to mailing lists has been completed, and community dynamics will be notified by mail."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"step4",src:i(40889).Z,width:"847",height:"653"})),(0,r.kt)("h2",{id:"5-initiate-e-mail-discussion-optional"},"5. Initiate e-mail discussion (optional)"),(0,r.kt)("p",null,"After successfully subscribing to the mailing list, if you want to initiate a discussion, send an email directly to ",(0,r.kt)("inlineCode",{parentName:"p"},"dev@doris.apache.org"),". Anyone who subscribes to the mailing list receives the mail.\n\u200b\n\u200b"))}m.isMDXComponent=!0},89546:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/subscribe-mail-list-step1-ac0d1f39e02f90210f9270f6257cf2a0.png"},96265:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/subscribe-mail-list-step2-dd47608a97bfa0b521a51cdfb4d7611b.png"},13402:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/subscribe-mail-list-step3-85bc03e5bd1de0f389ddc9e0d9d0b4ca.png"},40889:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/subscribe-mail-list-step4-1309a67f3e44311f8959c3aabf5d8eab.png"}}]);