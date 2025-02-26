---
{
    "title": "DESC TABLE",
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


## 描述

该语句用于展示指定 table 的 schema 信息

语法：

```sql
DESC[RIBE] [db_name.]table_name [ALL];
```

说明：

1. 如果指定 ALL，则显示该 table 的所有 index(rollup) 的 schema

## 示例


1. 显示 Base 表 Schema

    ```sql
    DESC table_name;
    ```

2. 显示表所有 index 的 schema

    ```sql
    DESC db1.table_name ALL;
    ```

## 关键词

    DESCRIBE, DESC

## 最佳实践

