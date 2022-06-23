(window.webpackJsonp=window.webpackJsonp||[]).push([[667],{1292:function(e,_,r){"use strict";r.r(_);var o=r(15),v=Object(o.a)({},(function(){var e=this,_=e.$createElement,r=e._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"扩容缩容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#扩容缩容"}},[e._v("#")]),e._v(" 扩容缩容")]),e._v(" "),r("p",[e._v("Doris 可以很方便的扩容和缩容 FE、BE、Broker 实例。")]),e._v(" "),r("h2",{attrs:{id:"fe-扩容和缩容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fe-扩容和缩容"}},[e._v("#")]),e._v(" FE 扩容和缩容")]),e._v(" "),r("p",[e._v("可以通过将 FE 扩容至 3 个以上节点来实现 FE 的高可用。")]),e._v(" "),r("p",[e._v("用户可以通过 mysql 客户端登陆 Master FE。通过:")]),e._v(" "),r("p",[r("code",[e._v("SHOW PROC '/frontends';")])]),e._v(" "),r("p",[e._v("来查看当前 FE 的节点情况。")]),e._v(" "),r("p",[e._v("也可以通过前端页面连接："),r("code",[e._v("http://fe_hostname:fe_http_port/frontend")]),e._v(" 或者 "),r("code",[e._v("http://fe_hostname:fe_http_port/system?path=//frontends")]),e._v(" 来查看 FE 节点的情况。")]),e._v(" "),r("p",[e._v("以上方式，都需要 Doris 的 root 用户权限。")]),e._v(" "),r("p",[e._v("FE 节点的扩容和缩容过程，不影响当前系统运行。")]),e._v(" "),r("h3",{attrs:{id:"增加-fe-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#增加-fe-节点"}},[e._v("#")]),e._v(" 增加 FE 节点")]),e._v(" "),r("p",[e._v("FE 分为 Leader，Follower 和 Observer 三种角色。 默认一个集群，只能有一个 Leader，可以有多个 Follower 和 Observer。其中 Leader 和 Follower 组成一个 Paxos 选择组，如果 Leader 宕机，则剩下的 Follower 会自动选出新的 Leader，保证写入高可用。Observer 同步 Leader 的数据，但是不参加选举。如果只部署一个 FE，则 FE 默认就是 Leader。")]),e._v(" "),r("p",[e._v("第一个启动的 FE 自动成为 Leader。在此基础上，可以添加若干 Follower 和 Observer。")]),e._v(" "),r("p",[e._v("添加 Follower 或 Observer。使用 mysql-client 连接到已启动的 FE，并执行：")]),e._v(" "),r("p",[r("code",[e._v('ALTER SYSTEM ADD FOLLOWER "follower_host:edit_log_port";')])]),e._v(" "),r("p",[e._v("或")]),e._v(" "),r("p",[r("code",[e._v('ALTER SYSTEM ADD OBSERVER "observer_host:edit_log_port";')])]),e._v(" "),r("p",[e._v("其中 follower_host和observer_host 为 Follower 或 Observer 所在节点 ip，edit_log_port 在其配置文件 fe.conf 中。")]),e._v(" "),r("p",[e._v("配置及启动 Follower 或 Observer。Follower 和 Observer 的配置同 Leader 的配置。第一次启动时，需执行以下命令：")]),e._v(" "),r("p",[r("code",[e._v("./bin/start_fe.sh --helper leader_fe_host:edit_log_port --daemon")])]),e._v(" "),r("p",[e._v("其中 leader_fe_host 为 Leader 所在节点 ip, edit_log_port 在 Leader 的配置文件 fe.conf 中。--helper 参数仅在 follower 和 observer 第一次启动时才需要。")]),e._v(" "),r("p",[e._v("查看 Follower 或 Observer 运行状态。使用 mysql-client 连接到任一已启动的 FE，并执行：SHOW PROC '/frontends'; 可以查看当前已加入集群的 FE 及其对应角色。")]),e._v(" "),r("blockquote",[r("p",[e._v("FE 扩容注意事项：")]),e._v(" "),r("ol",[r("li",[e._v("Follower FE（包括 Leader）的数量必须为奇数，建议最多部署 3 个组成高可用（HA）模式即可。")]),e._v(" "),r("li",[e._v("当 FE 处于高可用部署时（1个 Leader，2个 Follower），我们建议通过增加 Observer FE 来扩展 FE 的读服务能力。当然也可以继续增加 Follower FE，但几乎是不必要的。")]),e._v(" "),r("li",[e._v("通常一个 FE 节点可以应对 10-20 台 BE 节点。建议总的 FE 节点数量在 10 个以下。而通常 3 个即可满足绝大部分需求。")]),e._v(" "),r("li",[e._v("helper 不能指向 FE 自身，必须指向一个或多个已存在并且正常运行中的 Master/Follower FE。")])])]),e._v(" "),r("h3",{attrs:{id:"删除-fe-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除-fe-节点"}},[e._v("#")]),e._v(" 删除 FE 节点")]),e._v(" "),r("p",[e._v("使用以下命令删除对应的 FE 节点：")]),e._v(" "),r("p",[r("code",[e._v('ALTER SYSTEM DROP FOLLOWER[OBSERVER] "fe_host:edit_log_port";')])]),e._v(" "),r("blockquote",[r("p",[e._v("FE 缩容注意事项：")]),e._v(" "),r("ol",[r("li",[e._v("删除 Follower FE 时，确保最终剩余的 Follower（包括 Leader）节点为奇数。")])])]),e._v(" "),r("h2",{attrs:{id:"be-扩容和缩容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#be-扩容和缩容"}},[e._v("#")]),e._v(" BE 扩容和缩容")]),e._v(" "),r("p",[e._v("用户可以通过 mysql-client 登陆 Leader FE。通过:")]),e._v(" "),r("p",[r("code",[e._v("SHOW PROC '/backends';")])]),e._v(" "),r("p",[e._v("来查看当前 BE 的节点情况。")]),e._v(" "),r("p",[e._v("也可以通过前端页面连接："),r("code",[e._v("http://fe_hostname:fe_http_port/backend")]),e._v(" 或者 "),r("code",[e._v("http://fe_hostname:fe_http_port/system?path=//backends")]),e._v(" 来查看 BE 节点的情况。")]),e._v(" "),r("p",[e._v("以上方式，都需要 Doris 的 root 用户权限。")]),e._v(" "),r("p",[e._v("BE 节点的扩容和缩容过程，不影响当前系统运行以及正在执行的任务，并且不会影响当前系统的性能。数据均衡会自动进行。根据集群现有数据量的大小，集群会在几个小时到1天不等的时间内，恢复到负载均衡的状态。集群负载情况，可以参见 "),r("RouterLink",{attrs:{to:"/zh-CN/docs/admin-manual/maint-monitor/tablet-repair-and-balance.html#副本均衡"}},[e._v("Tablet 负载均衡文档")]),e._v("。")],1),e._v(" "),r("h3",{attrs:{id:"增加-be-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#增加-be-节点"}},[e._v("#")]),e._v(" 增加 BE 节点")]),e._v(" "),r("p",[e._v("BE 节点的增加方式同 "),r("strong",[e._v("BE 部署")]),e._v(" 一节中的方式，通过 "),r("code",[e._v("ALTER SYSTEM ADD BACKEND")]),e._v(" 命令增加 BE 节点。")]),e._v(" "),r("blockquote",[r("p",[e._v("BE 扩容注意事项：")]),e._v(" "),r("ol",[r("li",[e._v("BE 扩容后，Doris 会自动根据负载情况，进行数据均衡，期间不影响使用。")])])]),e._v(" "),r("h3",{attrs:{id:"删除-be-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除-be-节点"}},[e._v("#")]),e._v(" 删除 BE 节点")]),e._v(" "),r("p",[e._v("删除 BE 节点有两种方式：DROP 和 DECOMMISSION")]),e._v(" "),r("p",[e._v("DROP 语句如下：")]),e._v(" "),r("p",[r("code",[e._v('ALTER SYSTEM DROP BACKEND "be_host:be_heartbeat_service_port";')])]),e._v(" "),r("p",[r("strong",[e._v("注意：DROP BACKEND 会直接删除该 BE，并且其上的数据将不能再恢复！！！所以我们强烈不推荐使用 DROP BACKEND 这种方式删除 BE 节点。当你使用这个语句时，会有对应的防误操作提示。")])]),e._v(" "),r("p",[e._v("DECOMMISSION 语句如下：")]),e._v(" "),r("p",[r("code",[e._v('ALTER SYSTEM DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";')])]),e._v(" "),r("blockquote",[r("p",[e._v("DECOMMISSION 命令说明：")]),e._v(" "),r("ol",[r("li",[e._v("该命令用于安全删除 BE 节点。命令下发后，Doris 会尝试将该 BE 上的数据向其他 BE 节点迁移，当所有数据都迁移完成后，Doris 会自动删除该节点。")]),e._v(" "),r("li",[e._v("该命令是一个异步操作。执行后，可以通过 "),r("code",[e._v("SHOW PROC '/backends';")]),e._v(" 看到该 BE 节点的 isDecommission 状态为 true。表示该节点正在进行下线。")]),e._v(" "),r("li",[e._v("该命令"),r("strong",[e._v("不一定执行成功")]),e._v("。比如剩余 BE 存储空间不足以容纳下线 BE 上的数据，或者剩余机器数量不满足最小副本数时，该命令都无法完成，并且 BE 会一直处于 isDecommission 为 true 的状态。")]),e._v(" "),r("li",[e._v("DECOMMISSION 的进度，可以通过 "),r("code",[e._v("SHOW PROC '/backends';")]),e._v(" 中的 TabletNum 查看，如果正在进行，TabletNum 将不断减少。")]),e._v(" "),r("li",[e._v("该操作可以通过:"),r("br"),e._v(" "),r("code",[e._v('CANCEL DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";')]),r("br"),e._v("\n命令取消。取消后，该 BE 上的数据将维持当前剩余的数据量。后续 Doris 重新进行负载均衡")])])]),e._v(" "),r("p",[r("strong",[e._v("对于多租户部署环境下，BE 节点的扩容和缩容，请参阅 "),r("RouterLink",{attrs:{to:"/zh-CN/docs/admin-manual/multi-tenant.html"}},[e._v("多租户设计文档")]),e._v("。")],1)]),e._v(" "),r("h2",{attrs:{id:"broker-扩容缩容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#broker-扩容缩容"}},[e._v("#")]),e._v(" Broker 扩容缩容")]),e._v(" "),r("p",[e._v("Broker 实例的数量没有硬性要求。通常每台物理机部署一个即可。Broker 的添加和删除可以通过以下命令完成：")]),e._v(" "),r("p",[r("code",[e._v('ALTER SYSTEM ADD BROKER broker_name "broker_host:broker_ipc_port";')]),e._v(" "),r("code",[e._v('ALTER SYSTEM DROP BROKER broker_name "broker_host:broker_ipc_port";')]),e._v(" "),r("code",[e._v("ALTER SYSTEM DROP ALL BROKER broker_name;")])]),e._v(" "),r("p",[e._v("Broker 是无状态的进程，可以随意启停。当然，停止后，正在其上运行的作业会失败，重试即可。")])])}),[],!1,null,null,null);_.default=v.exports}}]);