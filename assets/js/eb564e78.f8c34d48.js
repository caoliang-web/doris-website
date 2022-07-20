"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[2655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,f=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(f,r(r({ref:t},m),{},{components:n})):a.createElement(f,r({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const l={title:"LOAD",language:"en"},r=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/LOAD",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/LOAD",title:"LOAD",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/LOAD.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/LOAD",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/LOAD",draft:!1,tags:[],version:"0.15",frontMatter:{title:"LOAD",language:"en"},sidebar:"docs",previous:{title:"GROUP BY",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/GROUP-BY"},next:{title:"MINI LOAD",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/MINI-LOAD"}},s={},p=[{value:"Description",id:"description",level:2},{value:"keyword",id:"keyword",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"load"},"LOAD"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Palo currently supports the following four import methods:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Hadoop Load: Importing ETL based on MR."),(0,o.kt)("li",{parentName:"ol"},"Broker Load: Use broker to import data."),(0,o.kt)("li",{parentName:"ol"},"Mini Load: Upload files through HTTP protocol for batch data import."),(0,o.kt)("li",{parentName:"ol"},"Stream Load: Stream data import through HTTP protocol."),(0,o.kt)("li",{parentName:"ol"},"S3 Load: Directly access the storage system supporting the S3 protocol for data import through the S3 protocol. The import syntax is basically the same as that of Broker Load.")),(0,o.kt)("p",null,"This help mainly describes the first import method, namely Hadoop Load related help information. The rest of the import methods can use the following commands to view help:"),(0,o.kt)("p",null,"This import method may not be supported in a subsequent version. It is recommended that other import methods be used for data import. !!!"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"help broker load;"),(0,o.kt)("li",{parentName:"ol"},"help mini load;"),(0,o.kt)("li",{parentName:"ol"},"help stream load;")),(0,o.kt)("p",null,"Hadoop Load is only applicable to Baidu's internal environment. Public, private and open source environments cannot use this import approach.\nThe import method must set up a Hadoop computing queue for ETL, which can be viewed through the help set property command."),(0,o.kt)("p",null,"Grammar:"),(0,o.kt)("p",null,"LOAD LABEL load_label\n(\nDate of date of date of entry\n)\n","[opt_properties]",";"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"load label")),(0,o.kt)("p",null,"The label of the current imported batch. Unique in a database.\nGrammar:\n","[database_name.]","your_label"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"data_desc")),(0,o.kt)("p",null,'Used to describe a batch of imported data.\nGrammar:\nDATA INFILE\n(\n"file_path1"',"[, file_path2, ...]","\n)\n","[NEGATIVE]","\nINTO TABLE ",(0,o.kt)("inlineCode",{parentName:"p"},"table_name"),"\n",'[PARTITION (p1, P2)][COLUMNS TERMINATED BY "column_separator"]',"\n",'[FORMAT AS "file_type"][(column_list)]',"\n","[set (k1 = fun (k2)]","]"),(0,o.kt)("p",null,"Explain:\nfile_path:"),(0,o.kt)("p",null,"File paths can be specified to a file, or * wildcards can be used to specify all files in a directory. Wildcards must match to files, not directories."),(0,o.kt)("p",null,"PARTICIPATION:"),(0,o.kt)("p",null,"If this parameter is specified, only the specified partition will be imported, and data outside the imported partition will be filtered out.\nIf not specified, all partitions of the table are imported by default."),(0,o.kt)("p",null,'NEGATIVE:\nIf this parameter is specified, it is equivalent to importing a batch of "negative" data. Used to offset the same batch of data imported before.\nThis parameter applies only to the case where there are value columns and the aggregation type of value columns is SUM only.'),(0,o.kt)("p",null,"Column U separator:"),(0,o.kt)("p",null,'Used to specify the column separator in the import file. Default tot\nIf the character is invisible, it needs to be prefixed with \\x, using hexadecimal to represent the separator.\nFor example, the separator X01 of the hive file is specified as "\\ x01"'),(0,o.kt)("p",null,"File type:"),(0,o.kt)("p",null,"Used to specify the type of imported file, such as parquet, orc, csv. The default value is determined by the file suffix name."),(0,o.kt)("p",null,"column_list:"),(0,o.kt)("p",null,"Used to specify the correspondence between columns in the import file and columns in the table.\nWhen you need to skip a column in the import file, specify it as a column name that does not exist in the table.\nGrammar:\n(col_name1, col_name2, ...)"),(0,o.kt)("p",null,"SET:"),(0,o.kt)("p",null,"If this parameter is specified, a column of the source file can be transformed according to a function, and then the transformed result can be imported into the table.\nThe functions currently supported are:"),(0,o.kt)("p",null,"Strftime (fmt, column) date conversion function\nFmt: Date format, such as% Y% m% d% H% M% S (year, month, day, hour, second)\nColumn: Column in column_list, which is the column in the input file. Storage content should be a digital timestamp.\nIf there is no column_list, the columns of the input file are entered by default in the column order of the Palo table."),(0,o.kt)("p",null,"time_format(output_fmt, input_fmt, column) \u65e5\u671f\u683c\u5f0f\u8f6c\u5316\nOutput_fmt: Converted date format, such as% Y% m% d% H% M% S (year, month, day, hour, second)\nInput_fmt: The date format of the column before transformation, such as% Y% m% d% H% M% S (days, hours, seconds, months, years)\nColumn: Column in column_list, which is the column in the input file. Storage content should be a date string in input_fmt format.\nIf there is no column_list, the columns of the input file are entered by default in the column order of the Palo table."),(0,o.kt)("p",null,"alignment_timestamp(precision, column) \u5c06\u65f6\u95f4\u6233\u5bf9\u9f50\u5230\u6307\u5b9a\u7cbe\u5ea6\nPrecision: year 124month;124day;124hour;\nColumn: Column in column_list, which is the column in the input file. Storage content should be a digital timestamp.\nIf there is no column_list, the columns of the input file are entered by default in the column order of the Palo table.\nNote: When the alignment accuracy is year and month, only the time stamps in the range of 20050101-20191231 are supported."),(0,o.kt)("p",null,"Default_value (value) sets the default value for a column import\nUse default values of columns when creating tables without specifying"),(0,o.kt)("p",null,"Md5sum (column1, column2,...) evaluates the value of the specified imported column to md5sum, returning a 32-bit hexadecimal string"),(0,o.kt)("p",null,"Replace_value (old_value ","[, new_value]",") replaces old_value specified in the import file with new_value\nNew_value, if not specified, uses the default value of the column when building the table"),(0,o.kt)("p",null,"Hll_hash (column) is used to transform a column in a table or data into a data structure of a HLL column"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"opt_properties")),(0,o.kt)("p",null,"Used to specify some special parameters.\nGrammar:\n",'[PROPERTIES ("key"="value", ...)]'),(0,o.kt)("p",null,"The following parameters can be specified:\nCluster: Import the Hadoop computed queue used.\nTimeout: Specifies the timeout time of the import operation. The default timeout is 3 days. Unit seconds.\nMax_filter_ratio: The ratio of data that is most tolerant of being filterable (for reasons such as data irregularities). Default zero tolerance.\nLoad_delete_flag: Specifies whether the import deletes data by importing the key column, which applies only to UNIQUE KEY.\nValue column is not specified when importing. The default is false."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Import data format sample")),(0,o.kt)("p",null,'Integer classes (TINYINT/SMALLINT/INT/BIGINT/LARGEINT): 1,1000,1234\nFloating Point Class (FLOAT/DOUBLE/DECIMAL): 1.1, 0.23, 356\nDate class (DATE/DATETIME): 2017-10-03, 2017-06-13 12:34:03.\n(Note: If it\'s in other date formats, you can use strftime or time_format functions to convert in the import command)\n\u5b57\u7b26\u4e32\u7c7b\uff08CHAR/VARCHAR\uff09: "I am a student", "a"\nNULL value: N'),(0,o.kt)("p",null,"'35;'35; example"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Import a batch of data, specify timeout time and filtering ratio. Specify the import queue as my_cluster.")),(0,o.kt)("p",null,'LOAD LABEL example db.label1\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\nINTO TABLE ',(0,o.kt)("inlineCode",{parentName:"p"},"my_table"),'\n)\nPROPERTIES\n(\n"cluster" ="my" cluster,\nTimeout ="3600",\n"max_filter_ratio" = "0.1"\n);'),(0,o.kt)("p",null,"Where hdfs_host is the host of the namenode and hdfs_port is the fs.defaultFS port (default 9000)"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Import a batch of data, including multiple files. Import different tables, specify separators, and specify column correspondences")),(0,o.kt)("p",null,'LOAD LABEL example db.label2\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file1")\nINTO TABLE ',(0,o.kt)("inlineCode",{parentName:"p"},"my_table_1"),'\nCOLUMNS TERMINATED BY ","\n(k1, k3, k2, v1, v2),\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file2")\nINTO TABLE ',(0,o.kt)("inlineCode",{parentName:"p"},"my_table_2"),'\nCOLUMNS TERMINATED BY "\\t"\n(k1, k2, k3, v2, v1)\n);'),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Import a batch of data, specify hive's default delimiter x01, and use wildcard * to specify all files in the directory")),(0,o.kt)("p",null,'LOAD LABEL example db.label3\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/*")\nNEGATIVE\nINTO TABLE ',(0,o.kt)("inlineCode",{parentName:"p"},"my_table"),'\nCOLUMNS TERMINATED BY "',"\\",'x01"\n);'),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'Import a batch of "negative" data')),(0,o.kt)("p",null,'LOAD LABEL example db.label4\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/old_file)\nNEGATIVE\nINTO TABLE ',(0,o.kt)("inlineCode",{parentName:"p"},"my_table"),'\nCOLUMNS TERMINATED BY "\\t"\n);'),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Import a batch of data and specify partitions")),(0,o.kt)("p",null,'LOAD LABEL example db.label5\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\nINTO TABLE ',(0,o.kt)("inlineCode",{parentName:"p"},"my_table"),'\nPARTITION (p1, P2)\nCOLUMNS TERMINATED BY ","\n(k1, k3, k2, v1, v2)\n);'),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Import a batch of data, specify partitions, and make some transformations to the columns of the imported files, as follows:\nThe table structure is as follows:\nK1 date\ndate\nk3 bigint\nk4 varchar (20)\nk5 varchar (64)\nk6 int")),(0,o.kt)("p",null,"Assume that the data file has only one row of data, five columns, and comma-separated:"),(0,o.kt)("p",null,"1537002087,2018-08-09 11:12:13,1537002087,-,1"),(0,o.kt)("p",null,"The columns in the data file correspond to the columns specified in the import statement:\ntmp -u k1, tmp -u k2, tmp u k3, k6, v1"),(0,o.kt)("p",null,"The conversion is as follows:"),(0,o.kt)("p",null,"1) k1: Transform tmp_k1 timestamp column into datetime type data\n2) k2: Converting tmp_k2 datetime-type data into date data\n3) k3: Transform tmp_k3 timestamp column into day-level timestamp\n4) k4: Specify import default value of 1\n5) k5: Calculate MD5 values from tmp_k1, tmp_k2, tmp_k3 columns\n6) k6: Replace the - value in the imported file with 10"),(0,o.kt)("p",null,'LOAD LABEL example db.label6\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\nINTO TABLE ',(0,o.kt)("inlineCode",{parentName:"p"},"my_table"),'\nPARTITION (p1, P2)\nCOLUMNS TERMINATED BY ","\n(tmp /u k1, tmp /u k2, tmp /u k3, k6, v1)\nSET (\nK1 = strftime (%Y -%m -%d%H:%M:%S ", TMP u K1),\nK2 = Time = UFormat ("% Y-% M-% D% H:% M:% S", "% Y-% M-% D", "TMP = UK2),\nk3 = alignment_timestamp("day", tmp_k3),\nk4 = default_value("1"),\nK5 = MD5Sum (TMP = UK1, TMP = UK2, TMP = UK3)\nk6 = replace value ("-", "10")\n)\n);'),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Import data into tables containing HLL columns, which can be columns in tables or columns in data")),(0,o.kt)("p",null,'LOAD LABEL example db.label7\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\nINTO TABLE ',(0,o.kt)("inlineCode",{parentName:"p"},"my_table"),'\nPARTITION (p1, P2)\nCOLUMNS TERMINATED BY ","\nSET (\nv1 = hll, u hash (k1),\nv2 = hll, u hash (k2)\n)\n);'),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"LOAD"))}u.isMDXComponent=!0}}]);