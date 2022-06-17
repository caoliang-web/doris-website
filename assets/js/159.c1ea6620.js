(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{784:function(e,t,a){"use strict";a.r(t);var n=a(15),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"orthogonal-bitmap-calculation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-calculation"}},[e._v("#")]),e._v(" Orthogonal BITMAP calculation")]),e._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("The original bitmap aggregate function designed by Doris is more general, but it has poor performance for the intersection and union of bitmap large cardinality above 100 million level. There are two main reasons for checking the bitmap aggregate function logic of the back-end be. First, when the bitmap cardinality is large, if the bitmap data size exceeds 1g, the network / disk IO processing time is relatively long; second, after the scan data, all the back-end be instances are transmitted to the top-level node for intersection and union operation, which brings pressure on the top-level single node and becomes the processing bottleneck.")]),e._v(" "),a("p",[e._v("The solution is to divide the bitmap column values according to the range, and the values of different ranges are stored in different buckets, so as to ensure that the bitmap values of different buckets are orthogonal and the data distribution is more uniform. In the case of query, the orthogonal bitmap in different buckets is firstly aggregated and calculated, and then the top-level node directly combines and summarizes the aggregated calculated values and outputs them. This will greatly improve the computing efficiency and solve the bottleneck problem of the top single node computing.")]),e._v(" "),a("h2",{attrs:{id:"user-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-guide"}},[e._v("#")]),e._v(" User guide")]),e._v(" "),a("ol",[a("li",[e._v("Create a table and add hid column to represent bitmap column value ID range as hash bucket column")]),e._v(" "),a("li",[e._v("Usage scenarios")])]),e._v(" "),a("h3",{attrs:{id:"create-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[e._v("#")]),e._v(" Create table")]),e._v(" "),a("p",[e._v("We need to use the aggregation model when building tables. The data type is bitmap, and the aggregation function is bitmap_ union")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE TABLE `user_tag_bitmap` (\n  `tag` bigint(20) NULL COMMENT "user tag",\n  `hid` smallint(6) NULL COMMENT "Bucket ID",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`tag`, `hid`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`hid`) BUCKETS 3\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("The HID column is added to the table schema to indicate the ID range as a hash bucket column.")]),e._v(" "),a("p",[e._v("Note: the HID number and buckets should be set reasonably, and the HID number should be set at least 5 times of buckets, so as to make the data hash bucket division as balanced as possible")]),e._v(" "),a("h3",{attrs:{id:"data-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-load"}},[e._v("#")]),e._v(" Data Load")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LOAD LABEL user_tag_bitmap_test\n(\nDATA INFILE('hdfs://abc')\nINTO TABLE user_tag_bitmap\nCOLUMNS TERMINATED BY ','\n(tmp_tag, tmp_user_id)\nSET (\ntag = tmp_tag,\nhid = ceil(tmp_user_id/5000000),\nuser_id = to_bitmap(tmp_user_id)\n)\n)\n...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("p",[e._v("Data format:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("11111111,1\n11111112,2\n11111113,3\n11111114,4\n...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Note: the first column represents the user tags, which have been converted from Chinese into numbers")]),e._v(" "),a("p",[e._v("When loading data, vertically cut the bitmap value range of the user. For example, the hid value of the user ID in the range of 1-5000000 is the same, and the row with the same HID value will be allocated into a sub-bucket, so that the bitmap value in each sub-bucket is orthogonal. On the UDAF implementation of bitmap, the orthogonal feature of bitmap value in the bucket can be used to perform intersection union calculation, and the calculation results will be shuffled to the top node for aggregation.")]),e._v(" "),a("h4",{attrs:{id:"orthogonal-bitmap-intersect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-intersect"}},[e._v("#")]),e._v(" orthogonal_bitmap_intersect")]),e._v(" "),a("p",[e._v("The bitmap intersection function")]),e._v(" "),a("p",[e._v("Syntax:")]),e._v(" "),a("p",[e._v("orthogonal_bitmap_intersect(bitmap_column, column_to_filter, filter_values)")]),e._v(" "),a("p",[e._v("Parameters:")]),e._v(" "),a("p",[e._v("the first parameter is the bitmap column, the second parameter is the dimension column for filtering, and the third parameter is the variable length parameter, which means different values of the filter dimension column")]),e._v(" "),a("p",[e._v("Explain:")]),e._v(" "),a("p",[e._v("on the basis of this table schema, this function has two levels of aggregation in query planning. In the first layer, be nodes (update and serialize) first press filter_ Values are used to hash aggregate the keys, and then the bitmaps of all keys are intersected. The results are serialized and sent to the second level be nodes (merge and finalize). In the second level be nodes, all the bitmap values from the first level nodes are combined circularly")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select BITMAP_COUNT(orthogonal_bitmap_intersect(user_id, tag, 13080800, 11110200)) from user_tag_bitmap  where tag in (13080800, 11110200);\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h4",{attrs:{id:"orthogonal-bitmap-intersect-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-intersect-count"}},[e._v("#")]),e._v(" orthogonal_bitmap_intersect_count")]),e._v(" "),a("p",[e._v("To calculate the bitmap intersection count function, the syntax is the same as the original Intersect_Count, but the implementation is different")]),e._v(" "),a("p",[e._v("Syntax:")]),e._v(" "),a("p",[e._v("orthogonal_bitmap_intersect_count(bitmap_column, column_to_filter, filter_values)")]),e._v(" "),a("p",[e._v("Parameters:")]),e._v(" "),a("p",[e._v("The first parameter is the bitmap column, the second parameter is the dimension column for filtering, and the third parameter is the variable length parameter, which means different values of the filter dimension column")]),e._v(" "),a("p",[e._v("Explain:")]),e._v(" "),a("p",[e._v("on the basis of this table schema, the query planning aggregation is divided into two layers. In the first layer, be nodes (update and serialize) first press filter_ Values are used to hash aggregate the keys, and then the intersection of bitmaps of all keys is performed, and then the intersection results are counted. The count values are serialized and sent to the second level be nodes (merge and finalize). In the second level be nodes, the sum of all the count values from the first level nodes is calculated circularly")]),e._v(" "),a("h4",{attrs:{id:"orthogonal-bitmap-union-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-union-count"}},[e._v("#")]),e._v(" orthogonal_bitmap_union_count")]),e._v(" "),a("p",[e._v("Figure out the bitmap union count function, syntax with the original bitmap_union_count, but the implementation is different.")]),e._v(" "),a("p",[e._v("Syntax:")]),e._v(" "),a("p",[e._v("orthogonal_bitmap_union_count(bitmap_column)")]),e._v(" "),a("p",[e._v("Explain:")]),e._v(" "),a("p",[e._v("on the basis of this table schema, this function is divided into two layers. In the first layer, be nodes (update and serialize) merge all the bitmaps, and then count the resulting bitmaps. The count values are serialized and sent to the second level be nodes (merge and finalize). In the second layer, the be nodes are used to calculate the sum of all the count values from the first level nodes")]),e._v(" "),a("h3",{attrs:{id:"suitable-for-the-scene"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suitable-for-the-scene"}},[e._v("#")]),e._v(" Suitable for the scene")]),e._v(" "),a("p",[e._v("It is consistent with the scenario of orthogonal calculation of bitmap, such as calculation retention, funnel, user portrait, etc.")]),e._v(" "),a("p",[e._v("Crowd selection:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select orthogonal_bitmap_intersect_count(user_id, tag, 13080800, 11110200) from user_tag_bitmap where tag in (13080800, 11110200);\n\nNote: 13080800 and 11110200 represent user labels\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Calculate the deduplication value for user_id:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select orthogonal_bitmap_union_count(user_id) from user_tag_bitmap where tag in (13080800, 11110200);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=s.exports}}]);