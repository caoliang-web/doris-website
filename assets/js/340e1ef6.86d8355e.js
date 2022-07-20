"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[90287],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),d=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return t?i.createElement(g,o(o({ref:n},s),{},{components:t})):i.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=c;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var d=2;d<l;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},97849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=t(87462),a=(t(67294),t(3905));const l={title:"Plugin Development Manual",language:"en"},o=void 0,r={unversionedId:"extending-doris/plugin-development-manual",id:"version-1.0/extending-doris/plugin-development-manual",title:"Plugin Development Manual",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/extending-doris/plugin-development-manual.md",sourceDirName:"extending-doris",slug:"/extending-doris/plugin-development-manual",permalink:"/docs/1.0/extending-doris/plugin-development-manual",draft:!1,tags:[],version:"1.0",frontMatter:{title:"Plugin Development Manual",language:"en"},sidebar:"docs",previous:{title:"Iceberg of Doris",permalink:"/docs/1.0/extending-doris/iceberg-of-doris"},next:{title:"Spark Doris Connector",permalink:"/docs/1.0/extending-doris/spark-doris-connector"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Plugin",id:"plugin",level:2},{value:"Write A Plugin",id:"write-a-plugin",level:2},{value:"Create module",id:"create-module",level:3},{value:"Add zip.xml",id:"add-zipxml",level:3},{value:"Update pom.xml",id:"update-pomxml",level:3},{value:"Implement plugin",id:"implement-plugin",level:3},{value:"Compile",id:"compile",level:3},{value:"Other way",id:"other-way",level:3},{value:"Deploy",id:"deploy",level:2},{value:"Install and Uninstall",id:"install-and-uninstall",level:2}],s={toc:d};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"doris-plugin-framework"},"Doris Plugin Framework"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Doris plugin framework supports install/uninstall custom plugins at runtime without restart the Doris service. Users can extend Doris's functionality by developing their own plugins."),(0,a.kt)("p",null,"For example, the audit plugin worked after a request execution, it can obtain information related to a request (access user, request IP, SQL, etc...) and write the information into the specified table."),(0,a.kt)("p",null,"Differences from UDF:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UDF is a function used for data calculation when SQL is executed. Plugin is additional function that is used to extend Doris with customized function, such as support different storage engines and different import ways, and plugin doesn't participate in data calculation when executing SQL."),(0,a.kt)("li",{parentName:"ul"},"The execution cycle of UDF is limited to a SQL execution. The execution cycle of plugin may be the same as the Doris process."),(0,a.kt)("li",{parentName:"ul"},"The usage scene is different. If you need to support special data algorithms when executing SQL, then UDF is recommended, if you need to run custom functions on Doris, or start a background thread to do tasks, then the use of plugin is recommended.")),(0,a.kt)("p",null,"Currently the plugin framework only supports audit plugins."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note:\nDoris plugin framework is an experimental feature, currently only supports FE plugin, and is closed by default, can be opened by FE configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin_enable = true"),".")),(0,a.kt)("h2",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,"A FE Plugin can be a ",(0,a.kt)("strong",{parentName:"p"},".zip package")," or a ",(0,a.kt)("strong",{parentName:"p"},"directory"),", which contains at least two parts: the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.properties")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".jar")," files. The ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.properties")," file is used to describe the plugin information."),(0,a.kt)("p",null,"The file structure of a Plugin looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# plugin .zip\nauditodemo.zip:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n\n# plugin local directory\nauditodemo/:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"plugin.properties")," example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'### required:\n#\n# the plugin name\nname = audit_plugin_demo\n#\n# the plugin type\ntype = AUDIT\n#\n# simple summary of the plugin\ndescription = just for test\n#\n# Doris\'s version, like: 0.11.0\nversion = 0.11.0\n\n### FE-Plugin optional:\n#\n# version of java the code is built against\n# use the command "java -version" value, like 1.8.0, 9.0.1, 13.0.4\njava.version = 1.8.31\n#\n# the name of the class to load, fully-qualified.\nclassname = AuditPluginDemo\n\n### BE-Plugin optional:\n# the name of the so to load\nsoName = example.so\n')),(0,a.kt)("h2",{id:"write-a-plugin"},"Write A Plugin"),(0,a.kt)("p",null,"The development environment of the FE plugin depends on the development environment of Doris. So please make sure Doris's compilation and development environment works normally."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fe_plugins")," is the parent module of the fe plugins. It can uniformly manage the third-party library information that the plugin depends on. Adding a plugin can add a submodule implementation under ",(0,a.kt)("inlineCode",{parentName:"p"},"fe_plugins"),"."),(0,a.kt)("h3",{id:"create-module"},"Create module"),(0,a.kt)("p",null,"We can add a submodule in the ",(0,a.kt)("inlineCode",{parentName:"p"},"fe_plugins")," directory to implement Plugin and create a project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn archetype: generate -DarchetypeCatalog = internal -DgroupId = org.apache -DartifactId = doris-fe-test -DinteractiveMode = false\n")),(0,a.kt)("p",null,"The command produces a new mvn project, and a new submodule is automatically added to ",(0,a.kt)("inlineCode",{parentName:"p"},"fe_plugins/pom.xml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\xa0\xa0\xa0\xa0.....\n\xa0\xa0\xa0\xa0<groupId>org.apache</groupId>\n\xa0\xa0\xa0\xa0<artifactId>doris-fe-plugins</artifactId>\n\xa0\xa0\xa0\xa0<packaging>pom</packaging>\n\xa0\xa0\xa0\xa0<version>1.0-SNAPSHOT</version>\n\xa0\xa0\xa0\xa0<modules>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<module>auditdemo</module>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# new plugin module\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<module>doris-fe-test</module>\n\xa0\xa0\xa0\xa0</modules>\n\xa0\xa0\xa0\xa0.....\n")),(0,a.kt)("p",null,"The new plugin project file structure is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-doris-fe-test/\n-pom.xml\n-src/\n    ---- main/java/org/apache/\n    ------- App.java # mvn auto generate, ignore\n    ---- test/java/org/apache\n")),(0,a.kt)("p",null,"We will add an assembly folder under main to store ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.properties")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"zip.xml"),". After completion, the file structure is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-doris-fe-test/\n-pom.xml\n-src/\n---- main/\n------ assembly/\n-------- plugin.properties\n-------- zip.xml\n------ java/org/apache/\n--------App.java # mvn auto generate, ignore\n---- test/java/org/apache\n")),(0,a.kt)("h3",{id:"add-zipxml"},"Add zip.xml"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"zip.xml"),", used to describe the content of the final package of the plugin (.jar file, plugin.properties):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<assembly>\n\xa0\xa0\xa0\xa0<id>plugin</id>\n\xa0\xa0\xa0\xa0<formats>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<format>zip</format>\n\xa0\xa0\xa0\xa0</formats>\n\xa0\xa0\xa0\xa0<!-IMPORTANT: must be false->\n\xa0\xa0\xa0\xa0<includeBaseDirectory>false</includeBaseDirectory>\n\xa0\xa0\xa0\xa0<fileSets>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<fileSet>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<directory>target</directory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<includes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<include>*.jar</include>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</ ncludes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<outputDirectory>/</outputDirectory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</fileSet>\n\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<fileSet>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<directory>src/main/assembly</directory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<includes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<include>plugin.properties</include>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</includes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<outputDirectory>/</outputDirectory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</fileSet>\n\xa0\xa0\xa0\xa0</fileSets>\n</assembly>\n")),(0,a.kt)("h3",{id:"update-pomxml"},"Update pom.xml"),(0,a.kt)("p",null,"Then we need to update ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml"),", add doris-fe dependency, and modify maven packaging way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xmlns="http://maven.apache.org/POM/4.0.0"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <parent>\n        <groupId>org.apache</groupId>\n        <artifactId>doris-fe-plugins</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </parent>\n    <modelVersion>4.0.0</modelVersion>\n\n    <artifactId>auditloader</artifactId>\n    <packaging>jar</packaging>\n\n    <dependencies>\n        \x3c!-- doris-fe dependencies --\x3e\n        <dependency>\n            <groupId>org.apache</groupId>\n            <artifactId>doris-fe</artifactId>\n        </dependency>\n\n        \x3c!-- other dependencies --\x3e\n        <dependency>\n            ...\n        </dependency>\n    </dependencies>\n\n\n    <build>\n        <finalName>auditloader</finalName>\n        <plugins>\n            <plugin>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <version>2.4.1</version>\n                <configuration>\n                    <appendAssemblyId>false</appendAssemblyId>\n                    <descriptors>\n                        <descriptor>src/main/assembly/zip.xml</descriptor>\n                    </descriptors>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n')),(0,a.kt)("h3",{id:"implement-plugin"},"Implement plugin"),(0,a.kt)("p",null,"Then we can implement Plugin according to the needs. Plugins need to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Plugin")," interface. For details, please refer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"auditdemo")," plugin sample code that comes with Doris."),(0,a.kt)("h3",{id:"compile"},"Compile"),(0,a.kt)("p",null,"Before compiling the plugin, you must first execute ",(0,a.kt)("inlineCode",{parentName:"p"},"sh build.sh --fe")," of Doris to complete the compilation of Doris FE."),(0,a.kt)("p",null,"Finally, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"sh build_plugin.sh")," in the ${DORIS_HOME} path and you will find the ",(0,a.kt)("inlineCode",{parentName:"p"},"your_plugin_name.zip")," file in ",(0,a.kt)("inlineCode",{parentName:"p"},"fe_plugins/output")),(0,a.kt)("p",null,"Or you can execute ",(0,a.kt)("inlineCode",{parentName:"p"},"sh build_plugin.sh --plugin your_plugin_name")," to only build your plugin."),(0,a.kt)("h3",{id:"other-way"},"Other way"),(0,a.kt)("p",null,"The easiest way, you can implement your plugin by modifying the example ",(0,a.kt)("inlineCode",{parentName:"p"},"auditdemo")),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"Doris's plugin can be deployed in three ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Http or Https .zip, like ",(0,a.kt)("inlineCode",{parentName:"li"},"http://xxx.xxxxxx.com/data/plugin.zip"),", Doris will download this .zip file. At the same time, the value of md5sum needs to be set in properties, or an md5 file with the same name as the ",(0,a.kt)("inlineCode",{parentName:"li"},".zip")," file needs to be placed, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"http://xxx.xxxxxx.com/data/my_plugin.zip.md5"),". The content is the MD5 value of the .zip file."),(0,a.kt)("li",{parentName:"ul"},"Local .zip, like ",(0,a.kt)("inlineCode",{parentName:"li"},"/home/work/data/plugin.zip"),". If the plug-in is only used for FE, it needs to be deployed in the same directory of all FE nodes. Otherwise, it needs to be deployed on all FE and BE nodes."),(0,a.kt)("li",{parentName:"ul"},"Local directory, like ",(0,a.kt)("inlineCode",{parentName:"li"},"/home/work/data/plugin"),", .zip decompressed folder. If the plug-in is only used for FE, it needs to be deployed in the same directory of all FE nodes. Otherwise, it needs to be deployed on all FE and BE nodes.")),(0,a.kt)("p",null,"Note: Need to ensure that the plugin .zip file is available in the life cycle of doris!"),(0,a.kt)("h2",{id:"install-and-uninstall"},"Install and Uninstall"),(0,a.kt)("p",null,"Install and uninstall the plugin through the install/uninstall statements. More details, see ",(0,a.kt)("inlineCode",{parentName:"p"},"HELP INSTALL PLUGIN;")," ",(0,a.kt)("inlineCode",{parentName:"p"},"HELP IUNNSTALL PLUGIN;")," ",(0,a.kt)("inlineCode",{parentName:"p"},"HELP SHOW PLUGINS;")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mysql> install plugin from "/home/users/doris/auditloader.zip";\nQuery OK, 0 rows affected (0.09 sec)\n\nmysql> show plugins\\G\n*************************** 1. row ***************************\n       Name: auditloader\n       Type: AUDIT\nDescription: load audit log to olap load, and user can view the statistic of queries\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: AuditLoaderPlugin\n     SoName: NULL\n    Sources: /home/users/doris/auditloader.zip\n     Status: INSTALLED\n Properties: {}\n*************************** 2. row ***************************\n       Name: AuditLogBuilder\n       Type: AUDIT\nDescription: builtin audit logger\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: org.apache.doris.qe.AuditLogBuilder\n     SoName: NULL\n    Sources: Builtin\n     Status: INSTALLED\n Properties: {}   \n2 rows in set (0.00 sec)\n\nmysql> uninstall plugin auditloader;\nQuery OK, 0 rows affected (0.05 sec)\n\nmysql> show plugins;\nEmpty set (0.00 sec)\n')))}u.isMDXComponent=!0}}]);