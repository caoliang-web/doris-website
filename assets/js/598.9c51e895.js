(window.webpackJsonp=window.webpackJsonp||[]).push([[598],{1223:function(e,t,a){"use strict";a.r(t);var n=a(15),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"doris-base-concept"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-base-concept"}},[e._v("#")]),e._v(" Doris base concept")]),e._v(" "),a("ul",[a("li",[e._v("FE: Frontend, the front-end node of Doris. It is mainly responsible for receiving and returning client requests, metadata, cluster management, and query plan generation.")]),e._v(" "),a("li",[e._v("BE: Backend, the backend node of Doris. Mainly responsible for data storage and management, query plan execution and other work.")]),e._v(" "),a("li",[e._v("Broker: Broker is a stateless process. It is mainly to help Doris access external data sources such as data on HDFS in a Unix-like file system interface. For example, it is used in data import or data export operations.")]),e._v(" "),a("li",[e._v("Tablet: Tablet is the actual physical storage unit of a table. A table is stored in units of Tablet in the distributed storage layer composed of BE after partitioning and bucketing. Each Tablet includes meta information and several consecutive RowSets. .")]),e._v(" "),a("li",[e._v("Rowset: Rowset is a data collection of a data change in the tablet, and the data change includes data import, deletion, and update. Rowset records by version information. A version is generated for each change.")]),e._v(" "),a("li",[e._v("Version: It consists of two attributes, Start and End, and maintains the record information of data changes. Usually used to indicate the version range of Rowset, after a new import, a Rowset with equal Start and End is generated, and a Rowset version with a range is generated after Compaction.")]),e._v(" "),a("li",[e._v("Segment: Indicates the data segment in the Rowset. Multiple Segments form a Rowset.")]),e._v(" "),a("li",[e._v("Compaction: The process of merging consecutive versions of Rowset is called Compaction, and the data will be compressed during the merging process.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);