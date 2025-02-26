---
{
    "title": "REGEXP",
    "language": "zh-CN"
}
---

<!-- 
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

## regexp
## 描述
## 语法

`BOOLEAN regexp(VARCHAR str, VARCHAR pattern)`

对字符串 str 进行正则匹配，匹配上的则返回 true，没匹配上则返回 false。pattern 为正则表达式。

字符集匹配需要使用 Unicode 标准字符类型。例如，匹配中文请使用 `\p{Han}`。

## 举例

```sql
--- 查找 k1 字段中以 'billie' 为开头的所有数据
mysql > select k1 from test where k1 regexp '^billie';
+--------------------+
| k1                 |
+--------------------+
| billie eillish     |
+--------------------+

--- 查找 k1 字段中以 'ok' 为结尾的所有数据：
mysql > select k1 from test where k1 regexp 'ok$';
+----------+
| k1       |
+----------+
| It's ok  |
+----------+

mysql> select regexp('这是一段中文This is a passage in English 1234567', '\\p{Han}');
+-----------------------------------------------------------------------------+
| ('这是一段中文This is a passage in English 1234567' regexp '\p{Han}')       |
+-----------------------------------------------------------------------------+
|                                                                           1 |
+-----------------------------------------------------------------------------+
```

### keywords
    REGEXP
