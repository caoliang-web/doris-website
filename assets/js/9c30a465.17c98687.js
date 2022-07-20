"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[64884],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(i),f=n,u=p["".concat(s,".").concat(f)]||p[f]||m[f]||l;return i?a.createElement(u,r(r({ref:t},c),{},{components:i})):a.createElement(u,r({ref:t},c))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,r=new Array(l);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var d=2;d<l;d++)r[d]=i[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},13511:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));const l={title:"File Manager",language:"en"},r=void 0,o={unversionedId:"administrator-guide/small-file-mgr",id:"version-1.0/administrator-guide/small-file-mgr",title:"File Manager",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/administrator-guide/small-file-mgr.md",sourceDirName:"administrator-guide",slug:"/administrator-guide/small-file-mgr",permalink:"/docs/1.0/administrator-guide/small-file-mgr",draft:!1,tags:[],version:"1.0",frontMatter:{title:"File Manager",language:"en"},sidebar:"docs",previous:{title:"Runtime Filter",permalink:"/docs/1.0/administrator-guide/runtime-filter"},next:{title:"segment-v2-usage",permalink:"/docs/1.0/administrator-guide/segment-v2-usage"}},s={},d=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Specific operation",id:"specific-operation",level:2},{value:"Implementation details",id:"implementation-details",level:2},{value:"Create and delete files",id:"create-and-delete-files",level:3},{value:"Use of documents",id:"use-of-documents",level:3},{value:"Use restrictions",id:"use-restrictions",level:2},{value:"Relevant configuration",id:"relevant-configuration",level:2}],c={toc:d};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"file-manager"},"File Manager"),(0,n.kt)("p",null,"Some functions in Doris require some user-defined files. For example, public keys, key files, certificate files and so on are used to access external data sources. The File Manager provides a function that allows users to upload these files in advance and save them in Doris system, which can then be referenced or accessed in other commands."),(0,n.kt)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access."),(0,n.kt)("li",{parentName:"ul"},"BE: Backend, Doris's back-end node. Responsible for query execution and data storage."),(0,n.kt)("li",{parentName:"ul"},"BDBJE: Oracle Berkeley DB Java Edition. Distributed embedded database for persistent metadata in FE."),(0,n.kt)("li",{parentName:"ul"},"SmallFileMgr: File Manager. Responsible for creating and maintaining user files.")),(0,n.kt)("h2",{id:"basic-concepts"},"Basic concepts"),(0,n.kt)("p",null,"Files are files created and saved by users in Doris."),(0,n.kt)("p",null,"A file is located by ",(0,n.kt)("inlineCode",{parentName:"p"},"database"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"catalog"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"file_name"),". At the same time, each file also has a globally unique ID (file_id), which serves as the identification in the system."),(0,n.kt)("p",null,"File creation and deletion can only be performed by users with ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," privileges. A file belongs to a database. Users who have access to a database (queries, imports, modifications, etc.) can use the files created under the database."),(0,n.kt)("h2",{id:"specific-operation"},"Specific operation"),(0,n.kt)("p",null,"File management has three main commands: ",(0,n.kt)("inlineCode",{parentName:"p"},"CREATE FILE"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"SHOW FILE")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"DROP FILE"),", creating, viewing and deleting files respectively. The specific syntax of these three commands can be viewed by connecting to Doris and executing ",(0,n.kt)("inlineCode",{parentName:"p"},"HELP cmd;"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"CREATE FILE"),(0,n.kt)("p",{parentName:"li"},"In the command to create a file, the user must provide the following information:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"file_name: File name. User-defined, unique within a catalog.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Catalog: Category of files. User-defined, unique within a database."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Doris also has some special classification names for specific commands.")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"Kafka"))),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},'When the data source is specified as Kafka in the routine Import command and the file needs to be referenced, Doris defaults to looking for the file from the catalog category named "kafka".'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"url: the download address of the file. Currently, only unauthenticated HTTP download addresses are supported. This download address is only used to download files from this address when executing the create file command. When the file is successfully created and saved in Doris, the address will no longer be used.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"md5: optional. The MD5 value of the file. If the user provides this value, the MD5 value will be checked after the file is downloaded. File creation fails if validation fails."))),(0,n.kt)("p",{parentName:"li"},"When the file is created successfully, the file-related information will be persisted in Doris. Users can view successfully created files through the ",(0,n.kt)("inlineCode",{parentName:"p"},"SHOW FILE")," command.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"SHOW FILE"),(0,n.kt)("p",{parentName:"li"},"This command allows you to view files that have been created successfully. Specific operations see: ",(0,n.kt)("inlineCode",{parentName:"p"},"HELP SHOW FILE;"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"DROP FILE"),(0,n.kt)("p",{parentName:"li"},"This command can delete a file that has been created. Specific operations see: ",(0,n.kt)("inlineCode",{parentName:"p"},"HELP DROP FILE;")))),(0,n.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,n.kt)("h3",{id:"create-and-delete-files"},"Create and delete files"),(0,n.kt)("p",null,"When the user executes the ",(0,n.kt)("inlineCode",{parentName:"p"},"CREATE FILE")," command, FE downloads the file from a given URL. The contents of the file are stored in FE memory directly in the form of Base64 encoding. At the same time, the file content and meta-information related to the file will be persisted in BDBJE. All created files, their meta-information and file content reside in FE memory. If the FE goes down and restarts, meta information and file content will also be loaded into memory from the BDBJE. When a file is deleted, the relevant information is deleted directly from FE memory and persistent information is deleted from BDBJE."),(0,n.kt)("h3",{id:"use-of-documents"},"Use of documents"),(0,n.kt)("p",null,"If the FE side needs to use the created file, SmallFileMgr will directly save the data in FE memory as a local file, store it in the specified directory, and return the local file path for use."),(0,n.kt)("p",null,"If the BE side needs to use the created file, BE will download the file content to the specified directory on BE through FE's HTTP interface ",(0,n.kt)("inlineCode",{parentName:"p"},"api/get_small_file")," for use. At the same time, BE also records the information of the files that have been downloaded in memory. When BE requests a file, it first checks whether the local file exists and verifies it. If the validation passes, the local file path is returned directly. If the validation fails, the local file is deleted and downloaded from FE again. When BE restarts, local files are preloaded into memory."),(0,n.kt)("h2",{id:"use-restrictions"},"Use restrictions"),(0,n.kt)("p",null,"Because the file meta-information and content are stored in FE memory. So by default, only files with size less than 1MB can be uploaded. And the total number of files is limited to 100. The configuration items described in the next section can be modified."),(0,n.kt)("h2",{id:"relevant-configuration"},"Relevant configuration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"FE configuration")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Small_file_dir"),": The path used to store uploaded files, defaulting to the ",(0,n.kt)("inlineCode",{parentName:"p"},"small_files/")," directory of the FE runtime directory.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"max_small_file_size_bytes"),": A single file size limit in bytes. The default is 1MB. File creation larger than this configuration will be rejected.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"max_small_file_number"),": The total number of files supported by a Doris cluster. The default is 100. When the number of files created exceeds this value, subsequent creation will be rejected."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"If you need to upload more files or increase the size limit of a single file, you can modify the ",(0,n.kt)("inlineCode",{parentName:"p"},"max_small_file_size_bytes")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"max_small_file_number")," parameters by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"ADMIN SET CONFIG")," command. However, the increase in the number and size of files will lead to an increase in FE memory usage.")))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"BE configuration")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Small_file_dir"),": The path used to store files downloaded from FE by default is in the ",(0,n.kt)("inlineCode",{parentName:"li"},"lib/small_files/")," directory of the BE runtime directory.")))}m.isMDXComponent=!0}}]);