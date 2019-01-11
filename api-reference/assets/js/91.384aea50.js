(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{855:function(e,_,t){"use strict";t.r(_);var v=t(0),d=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"queue-error-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queue-error-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Queue Error Code")]),e._v(" "),t("p",[e._v("Error codes are returned if errors occur during queue operations, such as queue creation and queue deletion, to facilitate fault locating.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("No.")]),e._v(" "),t("th",[e._v("Definition")]),e._v(" "),t("th",[e._v("Error Code")]),e._v(" "),t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Solution")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("1")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_MAXNUM_ZERO")])]),e._v(" "),t("td",[e._v("0x02000600")]),e._v(" "),t("td",[e._v("The maximum number of queue resources is set to 0.")]),e._v(" "),t("td",[e._v("Set the maximum number of queue resources to be greater than 0. If the queue module is not used, disable the configuration of the maximum number of queue resources.")])]),e._v(" "),t("tr",[t("td",[e._v("2")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_NO_MEMORY")])]),e._v(" "),t("td",[e._v("0x02000601")]),e._v(" "),t("td",[e._v("The memory allocated to queue block fails to be initialized.")]),e._v(" "),t("td",[e._v("Allocate more memory to the queue block. Alternatively, decrease the maximum number of queue resources.")])]),e._v(" "),t("tr",[t("td",[e._v("3")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_CREATE_NO_MEMORY")])]),e._v(" "),t("td",[e._v("0x02000602")]),e._v(" "),t("td",[e._v("Memory fails to be allocated to the queue to be created.")]),e._v(" "),t("td",[e._v("Allocate more memory to the queue. Alternatively, decrease the length of the queue or the number of nodes in the queue to be created.")])]),e._v(" "),t("tr",[t("td",[e._v("4")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_SIZE_TOO_BIG")])]),e._v(" "),t("td",[e._v("0x02000603")]),e._v(" "),t("td",[e._v("The size of the largest message in the queue to be created exceeds the upper limit.")]),e._v(" "),t("td",[e._v("Change the size of the largest message to a size not exceeding the upper limit.")])]),e._v(" "),t("tr",[t("td",[e._v("5")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_CB_UNAVAILABLE")])]),e._v(" "),t("td",[e._v("0x02000604")]),e._v(" "),t("td",[e._v("The number of created queues has exceeded the upper limit.")]),e._v(" "),t("td",[e._v("Increase the number of queue configuration resources.")])]),e._v(" "),t("tr",[t("td",[e._v("6")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_NOT_FOUND")])]),e._v(" "),t("td",[e._v("0x02000605")]),e._v(" "),t("td",[e._v("The queue is invalid.")]),e._v(" "),t("td",[e._v("Ensure the queue ID is valid.")])]),e._v(" "),t("tr",[t("td",[e._v("7")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_PEND_IN_LOCK")])]),e._v(" "),t("td",[e._v("0x02000606")]),e._v(" "),t("td",[e._v("The task must not be blocked on the queue when it is locked.")]),e._v(" "),t("td",[e._v("Unlock the task before the queue is used.")])]),e._v(" "),t("tr",[t("td",[e._v("8")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_TIMEOUT")])]),e._v(" "),t("td",[e._v("0x02000607")]),e._v(" "),t("td",[e._v("The wait time for processing a queue expires.")]),e._v(" "),t("td",[e._v("Set an appropriate expiry time.")])]),e._v(" "),t("tr",[t("td",[e._v("9")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_IN_TSKUSE")])]),e._v(" "),t("td",[e._v("0x02000608")]),e._v(" "),t("td",[e._v("The queue on which a task is blocked must not be deleted.")]),e._v(" "),t("td",[e._v("Enable the task to acquire resources rather than make the task blocked on the queue.")])]),e._v(" "),t("tr",[t("td",[e._v("10")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_WRITE_IN_INTERRUPT")])]),e._v(" "),t("td",[e._v("0x02000609")]),e._v(" "),t("td",[e._v("Writing data into a queue is not allowed when an interrupt is being processed.")]),e._v(" "),t("td",[e._v("Set the mode of writing data into a queue to non-blocking mode.")])]),e._v(" "),t("tr",[t("td",[e._v("11")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_NOT_CREATE")])]),e._v(" "),t("td",[e._v("0x0200060a")]),e._v(" "),t("td",[e._v("The queue is not created.")]),e._v(" "),t("td",[e._v("Pass in a valid handle.")])]),e._v(" "),t("tr",[t("td",[e._v("12")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_IN_TSKWRITE")])]),e._v(" "),t("td",[e._v("0x0200060b")]),e._v(" "),t("td",[e._v("Queue reading and writing are not synchronous.")]),e._v(" "),t("td",[e._v("Synchronize queue reading and writing.")])]),e._v(" "),t("tr",[t("td",[e._v("13")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_CREAT_PTR_NULL")])]),e._v(" "),t("td",[e._v("0x0200060c")]),e._v(" "),t("td",[e._v("A null pointer is passed in during queue creation.")]),e._v(" "),t("td",[e._v("Pass in a non-null pointer.")])]),e._v(" "),t("tr",[t("td",[e._v("14")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_PARA_ISZERO")])]),e._v(" "),t("td",[e._v("0x0200060d")]),e._v(" "),t("td",[e._v("The queue length or message node size passed in during queue creation is 0.")]),e._v(" "),t("td",[e._v("Pass in correct queue length and message node size.")])]),e._v(" "),t("tr",[t("td",[e._v("15")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_INVALID")])]),e._v(" "),t("td",[e._v("0x0200060e")]),e._v(" "),t("td",[e._v("An invalid queue handle is passed in during queue reading or writing.")]),e._v(" "),t("td",[e._v("Pass in a valid handle.")])]),e._v(" "),t("tr",[t("td",[e._v("16")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_READ_PTR_NULL")])]),e._v(" "),t("td",[e._v("0x0200060f")]),e._v(" "),t("td",[e._v("A null pointer is passed in during queue reading.")]),e._v(" "),t("td",[e._v("Pass in a non-null pointer.")])]),e._v(" "),t("tr",[t("td",[e._v("17")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_READSIZE_ISZERO")])]),e._v(" "),t("td",[e._v("0x02000610")]),e._v(" "),t("td",[e._v("The buffer size passed in during queue reading is 0.")]),e._v(" "),t("td",[e._v("Pass in a correct buffer size.")])]),e._v(" "),t("tr",[t("td",[e._v("18")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_WRITE_PTR_NULL")])]),e._v(" "),t("td",[e._v("0x02000612")]),e._v(" "),t("td",[e._v("A null pointer passed in during queue writing.")]),e._v(" "),t("td",[e._v("Pass in a non-null pointer.")])]),e._v(" "),t("tr",[t("td",[e._v("19")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_WRITESIZE_ISZERO")])]),e._v(" "),t("td",[e._v("0x02000613")]),e._v(" "),t("td",[e._v("The buffer size passed in when data is being written into the queue is 0.")]),e._v(" "),t("td",[e._v("Pass in a correct buffer size.")])]),e._v(" "),t("tr",[t("td",[e._v("20")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_WRITE_SIZE_TOO_BIG")])]),e._v(" "),t("td",[e._v("0x02000615")]),e._v(" "),t("td",[e._v("The buffer size passed in during writing data into the queue is bigger than the queue size.")]),e._v(" "),t("td",[e._v("Decrease the buffer size. Alternatively, increase the node size.")])]),e._v(" "),t("tr",[t("td",[e._v("21")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_ISFULL")])]),e._v(" "),t("td",[e._v("0x02000616")]),e._v(" "),t("td",[e._v("Free nodes are unavailable during queue writing.")]),e._v(" "),t("td",[e._v("Ensure free nodes are available before writing data into the queue.")])]),e._v(" "),t("tr",[t("td",[e._v("22")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_PTR_NULL")])]),e._v(" "),t("td",[e._v("0x02000617")]),e._v(" "),t("td",[e._v("A null pointer is passed in when queue information is being acquired.")]),e._v(" "),t("td",[e._v("Pass in a non-null pointer.")])]),e._v(" "),t("tr",[t("td",[e._v("23")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_READ_IN_INTERRUPT")])]),e._v(" "),t("td",[e._v("0x02000618")]),e._v(" "),t("td",[e._v("Reading data from a queue is not allowed when an interrupt is being processed.")]),e._v(" "),t("td",[e._v("Set the mode of reading data from a queue to non-blocking mode.")])]),e._v(" "),t("tr",[t("td",[e._v("24")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_MAIL_HANDLE_INVALID")])]),e._v(" "),t("td",[e._v("0x02000619")]),e._v(" "),t("td",[e._v("An invalid queue handle is passed in during releasing the memory allocated to the queue.")]),e._v(" "),t("td",[e._v("Pass in a valid handle.")])]),e._v(" "),t("tr",[t("td",[e._v("25")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_MAIL_PTR_INVALID")])]),e._v(" "),t("td",[e._v("0x0200061a")]),e._v(" "),t("td",[e._v("The passed-in pointer to the message memory pool is null.")]),e._v(" "),t("td",[e._v("Pass in a non-null pointer.")])]),e._v(" "),t("tr",[t("td",[e._v("26")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_MAIL_FREE_ERROR")])]),e._v(" "),t("td",[e._v("0x0200061b")]),e._v(" "),t("td",[e._v("Membox fails to be released.")]),e._v(" "),t("td",[e._v("Pass in a non-null pointer to membox.")])]),e._v(" "),t("tr",[t("td",[e._v("27")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_ISEMPTY")])]),e._v(" "),t("td",[e._v("0x0200061d")]),e._v(" "),t("td",[e._v("The queue is empty.")]),e._v(" "),t("td",[e._v("Ensure the queue contains messages when it is being read.")])]),e._v(" "),t("tr",[t("td",[e._v("28")]),e._v(" "),t("td",[t("code",[e._v("LOS_ERRNO_QUEUE_READ_SIZE_TOO_SMALL")])]),e._v(" "),t("td",[e._v("0x0200061f")]),e._v(" "),t("td",[e._v("The buffer size passed in during queue reading is much smaller than the queue size.")]),e._v(" "),t("td",[e._v("Increase the buffer size. Alternatively, decrease the node size.")])])])])])}],!1,null,null,null);d.options.__file="errorcode-queue.md";_.default=d.exports}}]);