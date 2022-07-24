"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[76149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Broker",language:"en"},i=void 0,s={unversionedId:"advanced/broker",id:"advanced/broker",title:"Broker",description:"\x3c!--",source:"@site/docs/advanced/broker.md",sourceDirName:"advanced",slug:"/advanced/broker",permalink:"/docs/advanced/broker",draft:!1,tags:[],version:"current",frontMatter:{title:"Broker",language:"en"},sidebar:"docs",previous:{title:"Vectorized Execution Engine",permalink:"/docs/advanced/vectorized-execution-engine"},next:{title:"Resource management",permalink:"/docs/advanced/resource"}},p={},l=[{value:"Supported Storage System",id:"supported-storage-system",level:2},{value:"Function provided by Broker",id:"function-provided-by-broker",level:2},{value:"Broker Information",id:"broker-information",level:2},{value:"Broker Name",id:"broker-name",level:3},{value:"Certification Information",id:"certification-information",level:3},{value:"Community HDFS",id:"community-hdfs",level:4}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"broker"},"Broker"),(0,a.kt)("p",null,"Broker is an optional process in the Doris cluster. It is mainly used to support Doris to read and write files or directories on remote storage, such as HDFS, BOS, and AFS."),(0,a.kt)("p",null,"Broker provides services through an RPC service port. It is a stateless JVM process that is responsible for encapsulating some POSIX-like file operations for read and write operations on remote storage, such as open, pred, pwrite, and so on.\nIn addition, the Broker does not record any other information, so the connection information, file information, permission information, and so on stored remotely need to be passed to the Broker process in the RPC call through parameters in order for the Broker to read and write files correctly ."),(0,a.kt)("p",null,"Broker only acts as a data channel and does not participate in any calculations, so it takes up less memory. Usually one or more Broker processes are deployed in a Doris system. And the same type of Broker will form a group and set a ",(0,a.kt)("strong",{parentName:"p"}," Broker name "),"."),(0,a.kt)("p",null,"Broker's position in the Doris system architecture is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+----+   +----+\n| FE |   | BE |\n+-^--+   +--^-+\n  |         |\n  |         |\n+-v---------v-+\n|   Broker    |\n+------^------+\n       |\n       |\n+------v------+\n|HDFS/BOS/AFS |\n+-------------+\n")),(0,a.kt)("p",null,"This document mainly introduces the parameters that Broker needs when accessing different remote storages, such as connection information,\nauthorization information, and so on."),(0,a.kt)("h2",{id:"supported-storage-system"},"Supported Storage System"),(0,a.kt)("p",null,"Different types of brokers support different storage systems."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Community HDFS"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Support simple authentication access"),(0,a.kt)("li",{parentName:"ul"},"Support kerberos authentication access"),(0,a.kt)("li",{parentName:"ul"},"Support HDFS HA mode access"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Baidu HDFS / AFS (not supported by open source version)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Support UGI simple authentication access"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Baidu Object Storage BOS (not supported by open source version)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Support AK / SK authentication access")))),(0,a.kt)("h2",{id:"function-provided-by-broker"},"Function provided by Broker"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/data-operate/import/import-way/broker-load-manual"},"Broker Load")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/data-operate/export/export-manual"},"Export")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/admin-manual/data-admin/backup"},"Backup"))),(0,a.kt)("h2",{id:"broker-information"},"Broker Information"),(0,a.kt)("p",null,"Broker information includes two parts: ",(0,a.kt)("strong",{parentName:"p"}," Broker name ")," and ",(0,a.kt)("strong",{parentName:"p"}," Certification information "),". The general syntax is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'WITH BROKER "broker_name" \n(\n    "username" = "xxx",\n    "password" = "yyy",\n    "other_prop" = "prop_value",\n    ...\n);\n')),(0,a.kt)("h3",{id:"broker-name"},"Broker Name"),(0,a.kt)("p",null,"Usually the user needs to specify an existing Broker Name through the ",(0,a.kt)("inlineCode",{parentName:"p"},'WITH BROKER" broker_name "')," clause in the operation command.\nBroker Name is a name that the user specifies when adding a Broker process through the ALTER SYSTEM ADD BROKER command.\nA name usually corresponds to one or more broker processes. Doris selects available broker processes based on the name.\nYou can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW BROKER")," command to view the Brokers that currently exist in the cluster."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Broker Name is just a user-defined name and does not represent the type of Broker.")),(0,a.kt)("h3",{id:"certification-information"},"Certification Information"),(0,a.kt)("p",null,"Different broker types and different access methods need to provide different authentication information.\nAuthentication information is usually provided as a Key-Value in the Property Map after ",(0,a.kt)("inlineCode",{parentName:"p"},'WITH BROKER" broker_name "'),"."),(0,a.kt)("h4",{id:"community-hdfs"},"Community HDFS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Simple Authentication"),(0,a.kt)("p",{parentName:"li"},"Simple authentication means that Hadoop configures ",(0,a.kt)("inlineCode",{parentName:"p"},"hadoop.security.authentication")," to",(0,a.kt)("inlineCode",{parentName:"p"}," simple"),"."),(0,a.kt)("p",{parentName:"li"},"Use system users to access HDFS. Or add in the environment variable started by Broker: ",(0,a.kt)("inlineCode",{parentName:"p"},"HADOOP_USER_NAME"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'(\n    "username" = "user",\n    "password" = ""\n);\n')),(0,a.kt)("p",{parentName:"li"},"Just leave the password blank.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kerberos Authentication"),(0,a.kt)("p",{parentName:"li"},"The authentication method needs to provide the following information::"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hadoop.security.authentication"),": Specify the authentication method as kerberos."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kerberos_principal"),": Specify the principal of kerberos."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kerberos_keytab"),": Specify the path to the keytab file for kerberos. The file must be an absolute path to a file on the server where the broker process is located. And can be accessed by the Broker process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kerberos_keytab_content"),": Specify the content of the keytab file in kerberos after base64 encoding. You can choose one of these with ",(0,a.kt)("inlineCode",{parentName:"li"},"kerberos_keytab")," configuration.")),(0,a.kt)("p",{parentName:"li"},"Examples are as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'(\n    "hadoop.security.authentication" = "kerberos",\n    "kerberos_principal" = "doris@YOUR.COM",\n    "kerberos_keytab" = "/home/doris/my.keytab"\n)\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'(\n    "hadoop.security.authentication" = "kerberos",\n    "kerberos_principal" = "doris@YOUR.COM",\n    "kerberos_keytab_content" = "ASDOWHDLAWIDJHWLDKSALDJSDIWALD"\n)\n')),(0,a.kt)("p",{parentName:"li"},"If Kerberos authentication is used, the ",(0,a.kt)("a",{parentName:"p",href:"https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html"},"krb5.conf")," file is required when deploying the Broker process.\nThe krb5.conf file contains Kerberos configuration information, Normally, you should install your krb5.conf file in the directory /etc. You can override the default location by setting the environment variable KRB5_CONFIG.\nAn example of the contents of the krb5.conf file is as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"[libdefaults]\n    default_realm = DORIS.HADOOP\n    default_tkt_enctypes = des3-hmac-sha1 des-cbc-crc\n    default_tgs_enctypes = des3-hmac-sha1 des-cbc-crc\n    dns_lookup_kdc = true\n    dns_lookup_realm = false\n\n[realms]\n    DORIS.HADOOP = {\n        kdc = kerberos-doris.hadoop.service:7005\n    }\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"HDFS HA Mode"),(0,a.kt)("p",{parentName:"li"}," This configuration is used to access HDFS clusters deployed in HA mode."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dfs.nameservices"),': Specify the name of the hdfs service, custom, such as "dfs.nameservices" = "my_ha".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dfs.ha.namenodes.xxx"),":  Custom namenode names. Multiple names are separated by commas, where xxx is the custom name in ",(0,a.kt)("inlineCode",{parentName:"p"},"dfs.nameservices"),', such as" dfs.ha.namenodes.my_ha "=" my_nn ".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dfs.namenode.rpc-address.xxx.nn"),": Specify the rpc address information of namenode, Where nn represents the name of the namenode configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"dfs.ha.namenodes.xxx"),', such as: "dfs.namenode.rpc-address.my_ha.my_nn" = "host:port".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dfs.client.failover.proxy.provider"),": Specify the provider for the client to connect to the namenode. The default is: org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider."),(0,a.kt)("p",{parentName:"li"}," Examples are as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'(\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n')),(0,a.kt)("p",{parentName:"li"}," The HA mode can be combined with the previous two authentication methods for cluster access. If you access HA HDFS with simple authentication:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'(\n    "username"="user",\n    "password"="passwd",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n')),(0,a.kt)("p",{parentName:"li"},"The configuration for accessing the HDFS cluster can be written to the hdfs-site.xml file. When users use the Broker process to read data from the HDFS cluster, they only need to fill in the cluster file path and authentication information."))))))}c.isMDXComponent=!0}}]);