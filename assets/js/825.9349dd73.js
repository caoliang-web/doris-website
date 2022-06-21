(window.webpackJsonp=window.webpackJsonp||[]).push([[825],{1449:function(e,s,t){"use strict";t.r(s);var a=t(15),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"运维常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运维常见问题"}},[e._v("#")]),e._v(" 运维常见问题")]),e._v(" "),t("p",[e._v("本文档主要用于记录 Doris 使用过程中的运维常见问题。会不定期更新。")]),e._v(" "),t("h3",{attrs:{id:"q1-通过-decommission-下线be节点时-为什么总会有部分tablet残留"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q1-通过-decommission-下线be节点时-为什么总会有部分tablet残留"}},[e._v("#")]),e._v(" Q1. 通过 DECOMMISSION 下线BE节点时，为什么总会有部分tablet残留？")]),e._v(" "),t("p",[e._v("在下线过程中，通过 show backends 查看下线节点的 tabletNum ，会观察到 tabletNum 数量在减少，说明数据分片正在从这个节点迁移走。当数量减到0时，系统会自动删除这个节点。但某些情况下，tabletNum 下降到一定数值后就不变化。这通常可能有以下两种原因：")]),e._v(" "),t("ol",[t("li",[e._v("这些 tablet 属于刚被删除的表、分区或物化视图。而刚被删除的对象会保留在回收站中。而下线逻辑不会处理这些分片。可以通过修改 FE 的配置参数 catalog_trash_expire_second 来修改对象在回收站中驻留的时间。当对象从回收站中被删除后，这些 tablet就会被处理了。")]),e._v(" "),t("li",[e._v('这些 tablet 的迁移任务出现了问题。此时需要通过 show proc "/cluster_balance" 来查看具体任务的错误了。')])]),e._v(" "),t("p",[e._v('对于以上情况，可以先通过 show proc "/statistic" 查看集群是否还有 unhealthy 的分片，如果为0，则可以直接通过 drop backend 语句删除这个 BE 。否则，还需要具体查看不健康分片的副本情况。')]),e._v(" "),t("h3",{attrs:{id:"q2-priorty-network-应该如何设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q2-priorty-network-应该如何设置"}},[e._v("#")]),e._v(" Q2. priorty_network 应该如何设置？")]),e._v(" "),t("p",[e._v("priorty_network 是 FE、BE 都有的配置参数。这个参数主要用于帮助系统选择正确的网卡 IP 作为自己的 IP 。建议任何情况下，都显式的设置这个参数，以防止后续机器增加新网卡导致IP选择不正确的问题。")]),e._v(" "),t("p",[e._v("priorty_network 的值是 CIDR 格式表示的。分为两部分，第一部分是点分十进制的 IP 地址，第二部分是一个前缀长度。比如 10.168.1.0/8 会匹配所有 10.xx.xx.xx 的IP地址，而 10.168.1.0/16 会匹配所有 10.168.xx.xx 的 IP 地址。")]),e._v(" "),t("p",[e._v("之所以使用 CIDR 格式而不是直接指定一个具体 IP，是为了保证所有节点都可以使用统一的配置值。比如有两个节点：10.168.10.1 和 10.168.10.2，则我们可以使用 10.168.10.0/24 来作为 priorty_network 的值。")]),e._v(" "),t("h3",{attrs:{id:"q3-fe的master、follower、observer都是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q3-fe的master、follower、observer都是什么"}},[e._v("#")]),e._v(" Q3. FE的Master、Follower、Observer都是什么？")]),e._v(" "),t("p",[e._v("首先明确一点，FE 只有两种角色：Follower 和 Observer。而 Master 只是一组 Follower 节点中选择出来的一个 FE。Master 可以看成是一种特殊的 Follower。所以当我们被问及一个集群有多少 FE，都是什么角色时，正确的回答当时应该是所有 FE 节点的个数，以及 Follower 角色的个数和 Observer 角色的个数。")]),e._v(" "),t("p",[e._v("所有 Follower 角色的 FE 节点会组成一个可选择组，类似 Poxas 一致性协议里的组概念。组内会选举出一个 Follower 作为 Master。当 Master 挂了，会自动选择新的 Follower 作为 Master。而 Observer 不会参与选举，因此 Observer 也不会称为 Master 。")]),e._v(" "),t("p",[e._v("一条元数据日志需要在多数 Follower 节点写入成功，才算成功。比如3个 FE ，2个写入成功才可以。这也是为什么 Follower 角色的个数需要是奇数的原因。")]),e._v(" "),t("p",[e._v("Observer 角色和这个单词的含义一样，仅仅作为观察者来同步已经成功写入的元数据日志，并且提供元数据读服务。他不会参与多数写的逻辑。")]),e._v(" "),t("p",[e._v("通常情况下，可以部署 1 Follower + 2 Observer 或者 3 Follower + N Observer。前者运维简单，几乎不会出现 Follower 之间的一致性协议导致这种复杂错误情况（百度内部集群大多使用这种方式）。后者可以保证元数据写的高可用，如果是高并发查询场景，可以适当增加 Observer。")]),e._v(" "),t("h3",{attrs:{id:"q4-节点新增加了新的磁盘-为什么数据没有均衡到新的磁盘上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q4-节点新增加了新的磁盘-为什么数据没有均衡到新的磁盘上"}},[e._v("#")]),e._v(" Q4. 节点新增加了新的磁盘，为什么数据没有均衡到新的磁盘上？")]),e._v(" "),t("p",[e._v("当前Doris的均衡策略是以节点为单位的。也就是说，是按照节点整体的负载指标（分片数量和总磁盘利用率）来判断集群负载。并且将数据分片从高负载节点迁移到低负载节点。如果每个节点都增加了一块磁盘，则从节点整体角度看，负载并没有改变，所以无法触发均衡逻辑。")]),e._v(" "),t("p",[e._v("此外，Doris目前并不支持单个节点内部，各个磁盘间的均衡操作。所以新增磁盘后，不会将数据均衡到新的磁盘。")]),e._v(" "),t("p",[e._v("但是，数据在节点之间迁移时，Doris会考虑磁盘的因素。比如一个分片从A节点迁移到B节点，会优先选择B节点中，磁盘空间利用率较低的磁盘。")]),e._v(" "),t("p",[e._v("这里我们提供3种方式解决这个问题：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("重建新表")]),e._v(" "),t("p",[e._v("通过create table like 语句建立新表，然后使用 insert into select的方式将数据从老表同步到新表。因为创建新表时，新表的数据分片会分布在新的磁盘中，从而数据也会写入新的磁盘。这种方式适用于数据量较小的情况（几十GB以内）。")])]),e._v(" "),t("li",[t("p",[e._v("通过Decommission命令")]),e._v(" "),t("p",[e._v("decommission命令用于安全下线一个BE节点。该命令会先将该节点上的数据分片迁移到其他节点，然后在删除该节点。前面说过，在数据迁移时，会优先考虑磁盘利用率低的磁盘，因此该方式可以“强制”让数据迁移到其他节点的磁盘上。当数据迁移完成后，我们在cancel掉这个decommission操作，这样，数据又会重新均衡回这个节点。当我们对所有BE节点都执行一遍上述步骤后，数据将会均匀的分布在所有节点的所有磁盘上。")]),e._v(" "),t("p",[e._v("注意，在执行decommission命令前，先执行以下命令，以避免节点下线完成后被删除。")]),e._v(" "),t("p",[t("code",[e._v('admin set frontend config("drop_backend_after_decommission" = "false");')])])]),e._v(" "),t("li",[t("p",[e._v("使用API手动迁移数据")]),e._v(" "),t("p",[e._v("Doris提供了"),t("RouterLink",{attrs:{to:"/zh-CN/docs/admin-manual/http-actions/tablet-migration-action.html"}},[e._v("HTTP API")]),e._v("，可以手动指定一个磁盘上的数据分片迁移到另一个磁盘上。")],1)])]),e._v(" "),t("h3",{attrs:{id:"q5-如何正确阅读-fe-be-日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q5-如何正确阅读-fe-be-日志"}},[e._v("#")]),e._v(" Q5. 如何正确阅读 FE/BE 日志?")]),e._v(" "),t("p",[e._v("很多情况下我们需要通过日志来排查问题。这里说明一下FE/BE日志的格式和查看方式。")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("FE")]),e._v(" "),t("p",[e._v("FE日志主要有：")]),e._v(" "),t("ul",[t("li",[e._v("fe.log：主日志。包括除fe.out外的所有内容。")]),e._v(" "),t("li",[e._v("fe.warn.log：主日志的子集，仅记录 WARN 和 ERROR 级别的日志。")]),e._v(" "),t("li",[e._v("fe.out：标准/错误输出的日志（stdout和stderr）。")]),e._v(" "),t("li",[e._v("fe.audit.log：审计日志，记录这个FE接收的所有SQL请求。")])]),e._v(" "),t("p",[e._v("一条典型的FE日志如下：")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("2021-09-16 23:13:22,502 INFO (tablet scheduler|43) [BeLoadRebalancer.selectAlternativeTabletsForCluster():85] cluster is balance: default_cluster with medium: HDD. skip\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[t("code",[e._v("2021-09-16 23:13:22,502")]),e._v("：日志时间。")]),e._v(" "),t("li",[t("code",[e._v("INFO：日志级别，默认是INFO")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("(tablet scheduler|43)")]),e._v("：线程名称和线程id。通过线程id，就可以查看这个线程上下文信息，方面排查这个线程发生的事情。")]),e._v(" "),t("li",[t("code",[e._v("BeLoadRebalancer.selectAlternativeTabletsForCluster():85")]),e._v("：类名、方法名和代码行号。")]),e._v(" "),t("li",[t("code",[e._v("cluster is balance xxx")]),e._v("：日志内容。")])]),e._v(" "),t("p",[e._v("通常情况下我们主要查看fe.log日志。特殊情况下，有些日志可能输出到了fe.out中。")])]),e._v(" "),t("li",[t("p",[e._v("BE")]),e._v(" "),t("p",[e._v("BE日志主要有：")]),e._v(" "),t("ul",[t("li",[e._v("be.INFO：主日志。这其实是个软连，连接到最新的一个 be.INFO.xxxx上。")]),e._v(" "),t("li",[e._v("be.WARNING：主日志的子集，仅记录 WARN 和 FATAL 级别的日志。这其实是个软连，连接到最新的一个 be.WARN.xxxx上。")]),e._v(" "),t("li",[e._v("be.out：标准/错误输出的日志（stdout和stderr）。")])]),e._v(" "),t("p",[e._v("一条典型的BE日志如下：")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("I0916 23:21:22.038795 28087 task_worker_pool.cpp:1594] finish report TASK. master host: 10.10.10.10, port: 9222\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[t("code",[e._v("I0916 23:21:22.038795")]),e._v("：日志等级和日期时间。大写字母I表示INFO，W表示WARN，F表示FATAL。")]),e._v(" "),t("li",[t("code",[e._v("28087")]),e._v("：线程id。通过线程id，就可以查看这个线程上下文信息，方面排查这个线程发生的事情。")]),e._v(" "),t("li",[t("code",[e._v("task_worker_pool.cpp:1594")]),e._v("：代码文件和行号。")]),e._v(" "),t("li",[t("code",[e._v("finish report TASK xxx")]),e._v("：日志内容。")])]),e._v(" "),t("p",[e._v("通常情况下我们主要查看be.INFO日志。特殊情况下，如BE宕机，则需要查看be.out。")])])]),e._v(" "),t("h3",{attrs:{id:"q6-fe-be-节点挂了应该如何排查原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q6-fe-be-节点挂了应该如何排查原因"}},[e._v("#")]),e._v(" Q6. FE/BE 节点挂了应该如何排查原因?")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("BE")]),e._v(" "),t("p",[e._v("BE进程是 C/C++ 进程，可能会因为一些程序Bug（内存越界，非法地址访问等）或 Out Of Memory（OOM）导致进程挂掉。此时我们可以通过以下几个步骤查看错误原因：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("查看be.out")]),e._v(" "),t("p",[e._v("BE进程实现了在程序因异常情况退出时，会打印当前的错误堆栈到be.out里（注意是be.out，不是be.INFO或be.WARNING）。通过错误堆栈，通常能够大致获悉程序出错的位置。")]),e._v(" "),t("p",[e._v("注意，如果be.out中出现错误堆栈，通常情况下是因为程序bug，普通用户可能无法自行解决，欢迎前往微信群、github discussion 或dev邮件组寻求帮助，并贴出对应的错误堆栈，以便快速排查问题。")])]),e._v(" "),t("li",[t("p",[e._v("dmesg")]),e._v(" "),t("p",[e._v("如果be.out没有堆栈信息，则大概率是因为OOM被系统强制kill掉了。此时可以通过dmesg -T 这个命令查看linux系统日志，如果最后出现 Memory cgroup out of memory: Kill process 7187 (palo_be) score 1007 or sacrifice child 类似的日志，则说明是OOM导致的。")]),e._v(" "),t("p",[e._v("内存问题可能有多方面原因，如大查询、导入、compaction等。Doris也在不断优化内存使用。欢迎前往微信群、github discussion 或dev邮件组寻求帮助。")])]),e._v(" "),t("li",[t("p",[e._v("查看be.INFO中是否有F开头的日志。")]),e._v(" "),t("p",[e._v("F开头的日志是 Fatal 日志。如 F0916 ，表示9月16号的Fatal日志。Fatal日志通常表示程序断言错误，断言错误会直接导致进程退出（说明程序出现了Bug）。欢迎前往微信群、github discussion 或dev邮件组寻求帮助。")])]),e._v(" "),t("li",[t("p",[e._v("Minidump(removed)")]),e._v(" "),t("p",[e._v("Mindump 是 Doris 0.15 版本之后加入的功能，具体可参阅"),t("a",{attrs:{href:"https://doris.apache.org/zh-CN/developer-guide/minidump.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),t("OutboundLink")],1),e._v("。")])])])]),e._v(" "),t("li",[t("p",[e._v("FE")]),e._v(" "),t("p",[e._v("FE 是 java 进程，健壮程度要由于 C/C++ 程序。通常FE 挂掉的原因可能是 OOM（Out-of-Memory）或者是元数据写入失败。这些错误通常在 fe.log 或者 fe.out 中有错误堆栈。需要根据错误堆栈信息进一步排查。")])])]),e._v(" "),t("h3",{attrs:{id:"q7-关于数据目录ssd和hdd的配置-建表有时候会遇到报错failed-to-find-enough-host-with-storage-medium-and-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q7-关于数据目录ssd和hdd的配置-建表有时候会遇到报错failed-to-find-enough-host-with-storage-medium-and-tag"}},[e._v("#")]),e._v(" Q7. 关于数据目录SSD和HDD的配置, 建表有时候会遇到报错"),t("code",[e._v("Failed to find enough host with storage medium and tag")])]),e._v(" "),t("p",[e._v("Doris支持一个BE节点配置多个存储路径。通常情况下，每块盘配置一个存储路径即可。同时，Doris支持指定路径的存储介质属性，如SSD或HDD。SSD代表高速存储设备，HDD代表低速存储设备。")]),e._v(" "),t("p",[e._v("如果集群只有一种介质比如都是HDD或者都是SSD，最佳实践是不用在be.conf中显式指定介质属性。如果遇到上述报错"),t("code",[e._v("Failed to find enough host with storage medium and tag")]),e._v("，一般是因为be.conf中只配置了SSD的介质，而fe中参数default_storage_medium默认为HDD，因此建表时会发现没有HDD介质的存储而报错。解决方案可以修改此FE配置并重启FE生效；或者将be.conf中SSD的显式配置去掉；或者建表时增加properties参数 "),t("code",[e._v('properties {"storage_medium" = "ssd"}')]),e._v("均可")]),e._v(" "),t("p",[e._v("通过指定路径的存储介质属性，我们可以利用Doris的冷热数据分区存储功能，在分区级别将热数据存储在SSD中，而冷数据会自动转移到HDD中。")]),e._v(" "),t("p",[e._v('需要注意的是，Doris并不会自动感知存储路径所在磁盘的实际存储介质类型。这个类型需要用户在路径配置中显式的表示。比如路径 "/path/to/data1.SSD" 即表示这个路径是SSD存储介质。而 "data1.SSD" 就是实际的目录名称。Doris是根据目录名称后面的 ".SSD" 后缀来确定存储介质类型的，而不是实际的存储介质类型。也就是说，用户可以指定任意路径为SSD存储介质，而Doris仅识别目录后缀，不会去判断存储介质是否匹配。如果不写后缀，则默认为HDD。')]),e._v(" "),t("p",[e._v('换句话说，".HDD" 和 ".SSD" 只是用于标识存储目录“相对”的“低速”和“高速”之分，而并不是标识实际的存储介质类型。所以如果BE节点上的存储路径没有介质区别，则无需填写后缀。')]),e._v(" "),t("h3",{attrs:{id:"q8-多个fe-在使用nginx实现web-ui负载均衡时-无法登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q8-多个fe-在使用nginx实现web-ui负载均衡时-无法登录"}},[e._v("#")]),e._v(" Q8. 多个FE，在使用Nginx实现web UI负载均衡时，无法登录")]),e._v(" "),t("p",[e._v("Doris 可以部署多个FE，在访问Web UI的时候，如果使用Nginx进行负载均衡，因为Session问题会出现不停的提示要重新登录，这个问题其实是Session共享的问题，Nginx提供了集中Session共享的解决方案，这里我们使用的是nginx中的ip_hash技术，ip_hash能够将某个ip的请求定向到同一台后端，这样一来这个ip下的某个客户端和某个后端就能建立起稳固的session，ip_hash是在upstream配置中定义的：")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("upstream  doris.com {\n   server    172.22.197.238:8030 weight=3;\n   server    172.22.197.239:8030 weight=4;\n   server    172.22.197.240:8030 weight=4;\n   ip_hash;\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("完整的Nginx示例配置如下:")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('user nginx;\nworker_processes auto;\nerror_log /var/log/nginx/error.log;\npid /run/nginx.pid;\n\n# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.\ninclude /usr/share/nginx/modules/*.conf;\n\nevents {\n    worker_connections 1024;\n}\n\nhttp {\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile            on;\n    tcp_nopush          on;\n    tcp_nodelay         on;\n    keepalive_timeout   65;\n    types_hash_max_size 2048;\n\n    include             /etc/nginx/mime.types;\n    default_type        application/octet-stream;\n\n    # Load modular configuration files from the /etc/nginx/conf.d directory.\n    # See http://nginx.org/en/docs/ngx_core_module.html#include\n    # for more information.\n    include /etc/nginx/conf.d/*.conf;\n    #include /etc/nginx/custom/*.conf;\n    upstream  doris.com {\n      server    172.22.197.238:8030 weight=3;\n      server    172.22.197.239:8030 weight=4;\n      server    172.22.197.240:8030 weight=4;\n      ip_hash;\n    }\n\n    server {\n        listen       80;\n        server_name  gaia-pro-bigdata-fe02;\n        if ($request_uri ~ _load) {\n           return 307 http://$host$request_uri ;\n        }\n\n        location / {\n            proxy_pass http://doris.com;\n            proxy_redirect default;\n        }\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n    }\n }\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br"),t("span",{staticClass:"line-number"},[e._v("44")]),t("br"),t("span",{staticClass:"line-number"},[e._v("45")]),t("br"),t("span",{staticClass:"line-number"},[e._v("46")]),t("br"),t("span",{staticClass:"line-number"},[e._v("47")]),t("br"),t("span",{staticClass:"line-number"},[e._v("48")]),t("br"),t("span",{staticClass:"line-number"},[e._v("49")]),t("br"),t("span",{staticClass:"line-number"},[e._v("50")]),t("br"),t("span",{staticClass:"line-number"},[e._v("51")]),t("br"),t("span",{staticClass:"line-number"},[e._v("52")]),t("br"),t("span",{staticClass:"line-number"},[e._v("53")]),t("br"),t("span",{staticClass:"line-number"},[e._v("54")]),t("br"),t("span",{staticClass:"line-number"},[e._v("55")]),t("br"),t("span",{staticClass:"line-number"},[e._v("56")]),t("br"),t("span",{staticClass:"line-number"},[e._v("57")]),t("br")])]),t("h3",{attrs:{id:"q9-fe启动失败-fe-log中一直滚动-wait-catalog-to-be-ready-fe-type-unknown"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q9-fe启动失败-fe-log中一直滚动-wait-catalog-to-be-ready-fe-type-unknown"}},[e._v("#")]),e._v(' Q9. FE启动失败，fe.log中一直滚动 "wait catalog to be ready. FE type UNKNOWN"')]),e._v(" "),t("p",[e._v("这种问题通常有两个原因：")]),e._v(" "),t("ol",[t("li",[e._v("本次FE启动时获取到的本机IP和上次启动不一致，通常是因为没有正确设置 "),t("code",[e._v("priority_network")]),e._v(" 而导致 FE 启动时匹配到了错误的 IP 地址。需修改 "),t("code",[e._v("priority_network")]),e._v(" 后重启 FE。")]),e._v(" "),t("li",[e._v("集群内多数 Follower FE 节点未启动。比如有 3 个 Follower，只启动了一个。此时需要将另外至少一个 FE 也启动，FE 可选举组方能选举出 Master 已提供服务。")])]),e._v(" "),t("p",[e._v("如果以上情况都不能解决，可以按照 Doris 官网文档中的"),t("RouterLink",{attrs:{to:"/zh-CN/docs/admin-manual/maint-monitor/metadata-operation.html"}},[e._v("元数据运维文档")]),e._v("进行恢复。")],1),e._v(" "),t("h3",{attrs:{id:"q10-lost-connection-to-mysql-server-at-reading-initial-communication-packet-system-error-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q10-lost-connection-to-mysql-server-at-reading-initial-communication-packet-system-error-0"}},[e._v("#")]),e._v(" Q10. Lost connection to MySQL server at 'reading initial communication packet', system error: 0")]),e._v(" "),t("p",[e._v("如果使用 MySQL 客户端连接 Doris 时出现如下问题，这通常是因为编译 FE 时使用的 jdk 版本和运行 FE 时使用的 jdk 版本不同导致的。 注意使用 docker 编译镜像编译时，默认的 JDK 版本是 openjdk 11，可以通过命令切换到 openjdk 8（详见编译文档）。")]),e._v(" "),t("h3",{attrs:{id:"q11-recoverytracker-should-overlap-or-follow-on-disk-last-vlsn-of-4-422-880-recoveryfirst-4-422-882-unexpected-state-fatal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q11-recoverytracker-should-overlap-or-follow-on-disk-last-vlsn-of-4-422-880-recoveryfirst-4-422-882-unexpected-state-fatal"}},[e._v("#")]),e._v(" Q11. recoveryTracker should overlap or follow on disk last VLSN of 4,422,880 recoveryFirst= 4,422,882 UNEXPECTED_STATE_FATAL")]),e._v(" "),t("p",[e._v("有时重启 FE，会出现如上错误（通常只会出现在多 Follower 的情况下）。并且错误中的两个数值相差2。导致 FE 启动失败。")]),e._v(" "),t("p",[e._v("这是 bdbje 的一个 bug，尚未解决。遇到这种情况，只能通过"),t("RouterLink",{attrs:{to:"/zh-CN/docs/admin-manual/maint-monitor/metadata-operation.html"}},[e._v("元数据运维文档")]),e._v(" 中的 故障恢复 进行操作来恢复元数据了。")],1),e._v(" "),t("h3",{attrs:{id:"q12-doris编译安装jdk版本不兼容问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q12-doris编译安装jdk版本不兼容问题"}},[e._v("#")]),e._v(" Q12. Doris编译安装JDK版本不兼容问题")]),e._v(" "),t("p",[e._v("在自己使用 Docker 编译 Doris 的时候，编译完成安装以后启动FE，出现 "),t("code",[e._v("java.lang.Suchmethoderror: java.nio. ByteBuffer. limit (I)Ljava/nio/ByteBuffer;")]),e._v(" 异常信息，这是因为Docker里默认是JDK 11，如果你的安装环境是使用JDK8 ，需要在 Docker 里 JDK 环境切换成 JDK8，具体切换方法参照"),t("RouterLink",{attrs:{to:"/zh-CN/docs/install/source-install/compilation.html"}},[e._v("编译文档")])],1),e._v(" "),t("h3",{attrs:{id:"q13-本地启动-fe-或者启动单元测试报错-cannot-find-external-parser-table-action-table-dat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q13-本地启动-fe-或者启动单元测试报错-cannot-find-external-parser-table-action-table-dat"}},[e._v("#")]),e._v(" Q13. 本地启动 FE 或者启动单元测试报错 Cannot find external parser table action_table.dat")]),e._v(" "),t("p",[e._v("执行如下命令")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd fe && mvn clean install -DskipTests\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("如果还报同样的错误，手动执行如下命令")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cp fe-core/target/generated-sources/cup/org/apache/doris/analysis/action_table.dat fe-core/target/classes/org/apache/doris/analysis\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"q14-doris-升级到1-0-以后版本通过odbc访问mysql外表报错-failed-to-set-ciphers-to-use-2026"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q14-doris-升级到1-0-以后版本通过odbc访问mysql外表报错-failed-to-set-ciphers-to-use-2026"}},[e._v("#")]),e._v(" Q14. Doris 升级到1.0 以后版本通过ODBC访问MySQL外表报错 "),t("code",[e._v("Failed to set ciphers to use (2026)")])]),e._v(" "),t("p",[e._v("这个问题出现在doris 升级到1.0 版本以后，且使用 Connector/ODBC 8.0.x 以上版本，Connector/ODBC 8.0.x 有多种获取方式，比如通过yum安装的方式获取的 "),t("code",[e._v("/usr/lib64/libmyodbc8w.so")]),e._v(" 依赖的是 "),t("code",[e._v("libssl.so.10")]),e._v(" 和 "),t("code",[e._v("libcrypto.so.10")]),e._v("\n而doris 1.0 以后版本中openssl 已经升级到1.1 且内置在doris 二进制包中，因此会导致 openssl 的冲突进而出现 类似 如下的错误")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ERROR 1105 (HY000): errCode = 2, detailMessage = driver connect Error: HY000 [MySQL][ODBC 8.0(w) Driver]SSL connection error: Failed to set ciphers to use (2026)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("解决方式是使用"),t("code",[e._v("Connector/ODBC 8.0.28")]),e._v(" 版本的 ODBC Connector， 并且选择 在操作系统处选择 "),t("code",[e._v("Linux - Generic")]),e._v(", 这个版本的ODBC Driver 使用 openssl 1.1 版本。具体使用方式见 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/ecosystem/external-table/odbc-of-doris.html"}},[e._v("ODBC外表使用文档")]),e._v("\n可以通过如下方式验证 MySQL ODBC Driver 使用的openssl 版本")],1),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ldd /path/to/libmyodbc8w.so |grep libssl.so\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("如果输出包含 "),t("code",[e._v("libssl.so.10")]),e._v(" 则使用过程中可能出现问题， 如果包含"),t("code",[e._v("libssl.so.1.1")]),e._v(" 则与doris 1.0 兼容")])])}),[],!1,null,null,null);s.default=r.exports}}]);