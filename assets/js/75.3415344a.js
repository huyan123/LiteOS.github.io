(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{608:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"os-config-系统配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os-config-系统配置","aria-hidden":"true"}},[t._v("#")]),t._v(" OS_CONFIG 系统配置")]),t._v(" "),a("h2",{attrs:{id:"与移植相关的配置宏定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与移植相关的配置宏定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 与移植相关的配置宏定义")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v("    OS_SYS_CLOCK     (SystemCoreClock)   ")]),a("span",{attrs:{class:"token comment"}},[t._v("// 配置CPU主频，需要用户更改")]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v("    LOSCFG_PLATFORM_HWI          NO      ")]),a("span",{attrs:{class:"token comment"}},[t._v("// 配置OS是否接管中断")]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v("    LOSCFG_PLATFORM_HWI_LIMIT    32      ")]),a("span",{attrs:{class:"token comment"}},[t._v("// 配置外部中断数目")]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v("    LOSCFG_BASE_CORE_TSK_LIMIT\t   3      ")]),a("span",{attrs:{class:"token comment"}},[t._v("// 配置支持的最大任务数量")]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v("    LOSCFG_BASE_IPC_SEM_LIMIT     2\t    ")]),a("span",{attrs:{class:"token comment"}},[t._v("// 配置支持的最大信号量数量")]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v("    LOSCFG_BASE_IPC_MUX_LIMIT     2      ")]),a("span",{attrs:{class:"token comment"}},[t._v("// 配置支持的最大互斥锁数量")]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v("    LOSCFG_BASE_IPC_QUEUE_LIMIT   2      ")]),a("span",{attrs:{class:"token comment"}},[t._v("// 配置支持的最大队列数量")]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v("    LOSCFG_BASE_CORE_SWTMR_LIMIT  2      ")]),a("span",{attrs:{class:"token comment"}},[t._v("// 配置支持的最大软件定时器数量")]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v("    BOARD_SRAM_START_ADDR     0x20000000 ")]),a("span",{attrs:{class:"token comment"}},[t._v("// 配置目标芯片RAM起始地址")]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v("    BOARD_SRAM_SIZE_KB        8\t        ")]),a("span",{attrs:{class:"token comment"}},[t._v("// 配置目标芯片RAM大小，单位KB")]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v("    CMSIS_OS_VER              2          ")]),a("span",{attrs:{class:"token comment"}},[t._v("// 配置CMSIS OS版本，支持V1和V2")]),t._v("\n")])])]),a("h3",{attrs:{id:"注意："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意：","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意：")]),t._v(" "),a("p",[t._v("用户根据自身硬件情况修改上述配置，特别是CPU主频和RAM尺寸要根据情况修改；")]),t._v(" "),a("p",[t._v("本教程要求OS不接管中断，接管中断的方式需要自行修改sct文件，所以推荐初级用户先不要使能接管中断的方式；")]),t._v(" "),a("p",[t._v("最大任务数、信号量数、互斥锁数、队列数、软件定时器数建议用户根据实际需要配置合理的数量，数量太多会占用额外的RAM资源；")])])}],!1,null,null,null);n.options.__file="os-config.md";s.default=n.exports}}]);