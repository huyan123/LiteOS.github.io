(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{196:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAbCAIAAADDHevrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFlSURBVGhD7ZlREsIwCER7/2Pqn5fQsXU6kQQCiIiZ7ZdTk0L2LSTTbpfr7Y6rsAIbCBWm80wNhIoDAqHqgEAIhMorUD3BwT607deRePs7YSlHOBK0vXkm1qanT1I/Ul5s1HM0ktYiNPQE5xiHk6KUjXpOPCHOzoL3rbXYLz6KEEm+Lcdh/qddSFkLz9Eobh1jqCHOOFMF+8YlZPk9QlzTnubfZ1u0hnyEyM4xdRBHiNufTDU6XMI6hEjVn1pzVe8zmlBD5K+ofcjd/aZuCxlg6HJtPI064YRIm9LkQDSa1hCnqWCOEAxS2+/fy2lWbh2jX8Zv96H/IKTsZn1JfW604ZlKcAN3BpueRIapCjf73dQRWm/TN20XeLfta6c+vfJnLfJue2FIixDKt3ZaRBBKk9oZCIScwqVNA6E0qZ2BQMgpXNo0EEqT2hkIhJzCpU17fUtNi4dAVgVAyKpY9ngQylbcGu8BzipJkg3YgwQAAAAASUVORK5CYII="},870:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"interrupt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#interrupt","aria-hidden":"true"}},[t._v("#")]),t._v(" Interrupt")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#overview"}},[t._v("Overview")]),n("ul",[n("li",[n("a",{attrs:{href:"#basic-concept"}},[t._v("Basic Concept")])]),n("li",[n("a",{attrs:{href:"#introduce-of-interrupt"}},[t._v("Introduce of Interrupt")])]),n("li",[n("a",{attrs:{href:"#terminology-associated-with-interrupt"}},[t._v("Terminology Associated With Interrupt")])])])]),n("li",[n("a",{attrs:{href:"#development-guidelines"}},[t._v("Development Guidelines")]),n("ul",[n("li",[n("a",{attrs:{href:"#usage-scenarios"}},[t._v("Usage Scenarios")])]),n("li",[n("a",{attrs:{href:"#functions"}},[t._v("Functions")])]),n("li",[n("a",{attrs:{href:"#development-process"}},[t._v("Development Process")])])])]),n("li",[n("a",{attrs:{href:"#precautions"}},[t._v("Precautions")])]),n("li",[n("a",{attrs:{href:"#programming-example"}},[t._v("Programming Example")]),n("ul",[n("li",[n("a",{attrs:{href:"#example-description"}},[t._v("Example Description")])]),n("li",[n("a",{attrs:{href:"#example-code"}},[t._v("Example Code")])]),n("li",[n("a",{attrs:{href:"#verification"}},[t._v("Verification")])])])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("h3",{attrs:{id:"basic-concept"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-concept","aria-hidden":"true"}},[t._v("#")]),t._v(" Basic Concept")]),t._v(" "),n("p",[t._v("When a condition that needs immediate attention occurs, the CPU suspends current activities and switches to deal with the condition.")]),t._v(" "),n("p",[t._v("The CPU runs faster than external peripherals. When external peripherals are able to fulfill an activity alone, the CPU takes care of other activities.")]),t._v(" "),n("p",[t._v("When the CPU must be involved in fulfilling an activity, the interrupt mechanism enables an external peripheral to emit an interrupt signal to alert the CPU of the high-priority condition requiring the interruption of current activities. The CPU does not need to keep waiting for peripheral states, thereby improving CPU efficiency and accelerating system response.")]),t._v(" "),n("p",[t._v("The interrupt mechanism supports:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Initialize")])]),t._v(" "),n("li",[n("p",[t._v("Create")])]),t._v(" "),n("li",[n("p",[t._v("Lock or unlock")])]),t._v(" "),n("li",[n("p",[t._v("Restore")])]),t._v(" "),n("li",[n("p",[t._v("Enable")])]),t._v(" "),n("li",[n("p",[t._v("Disable")])])]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("The interrupt mechanism of Huawei LiteOS is based on interrupt.")])]),t._v(" "),n("h3",{attrs:{id:"introduce-of-interrupt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduce-of-interrupt","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduce of Interrupt")]),t._v(" "),n("p",[t._v("The following three types of hardware are involved in the interrupt mechanism:")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("Device")]),t._v(":  the interrupt source. When a device requests the help of the CPU, it emits an interrupt signal to the interrupt controller.")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Interrupt controller")]),t._v(":  a type of peripheral that sends an interrupt request to the CPU after receiving an interrupt signal from the interrupt pins of other peripherals. On the interrupt controller, you can prioritize, enable, or disable interrupt sources, as well as specify an interrupt trigger mode on each interrupt source. Common interrupt controllers include the Vector Interrupt Controller (VIC) and General Interrupt Controller (GIC, typically used in ARM Cortex-A7).")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("CPU")]),t._v(":  executes an interrupt handler at the request of an interrupt source.")])])]),t._v(" "),n("h3",{attrs:{id:"terminology-associated-with-interrupt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#terminology-associated-with-interrupt","aria-hidden":"true"}},[t._v("#")]),t._v(" Terminology Associated With Interrupt")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("Interrupt ID")]),t._v(": a unique identifier contained in all interrupt requests from a particular interrupt source.")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Interrupt request (IRQ)")]),t._v(": an electrical pulse signal sent to alert the CPU of an urgent condition. The CPU suspends current activities and deals with the condition that needs immediate attention.")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Interrupt priority")]),t._v(": the priority of an interrupt source. Interrupt priority is determined based on importance and urgency. Huawei LiteOS supports the interrupt priority and interrupt nesting of the interrupt controller. Interrupt management does not limit the priority and nesting.")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Interrupt handler")]),t._v(": When an external peripheral generates an interrupt request, the CPU executes an interrupt handler to switch from current activities to the event that needs immediate attention.")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Interrupt trigger")]),t._v(": set to 1 when an interrupt source emits an interrupt signal.")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Interrupt trigger type")]),t._v(": the way in which an interrupt signal is sent to the interrupt controller. Typically, an interrupt signal is either level-triggered or edge-triggered.")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Interrupt vector")]),t._v(": starting address of interrupt service routine.")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Interrupt vector table")]),t._v(": a table where interrupt vectors are stored based on interrupt ID.")])])]),t._v(" "),n("h2",{attrs:{id:"development-guidelines"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#development-guidelines","aria-hidden":"true"}},[t._v("#")]),t._v(" Development Guidelines")]),t._v(" "),n("h3",{attrs:{id:"usage-scenarios"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage-scenarios","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage Scenarios")]),t._v(" "),n("p",[t._v("When an interrupt request is generated, the CPU responds by suspending current activities and calling the user-defined interrupt handler to deal with the condition that needs immediate attention.")]),t._v(" "),n("h3",{attrs:{id:"functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),n("p",[t._v("The interrupt module provides the following functions:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[t._v("API")])]),t._v(" "),n("th",[n("strong",[t._v("Description")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("LOS_HwiCreate")])]),t._v(" "),n("td",[t._v("Creates a hardware interrupt to register the corresponding interrupt handler")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("LOS_IntUnLock")])]),t._v(" "),n("td",[t._v("Unlocks an interrupt")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("LOS_IntRestore")])]),t._v(" "),n("td",[t._v("Restores an interrupt")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("LOS_IntLock")])]),t._v(" "),n("td",[t._v("Locks an interrupt")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("LOS_HwiDelete")])]),t._v(" "),n("td",[t._v("Deletes a hard interrupt")])])])]),t._v(" "),n("h3",{attrs:{id:"development-process"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#development-process","aria-hidden":"true"}},[t._v("#")]),t._v(" Development Process")]),t._v(" "),n("ol",[n("li",[t._v("Configure the following parameters:")])]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("LOSCFG_PLATFORM_HWI")]),t._v(": a switch to enable or disable the hardware interrupt module. Set to YES.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("LOSCFG_PLATFORM_HWI_LIMIT")]),t._v(": the maximum allowed number of hardware interrupts.")])])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[t._v("Call the "),n("code",[t._v("LOS_HwiInit")]),t._v(" API to initialize the interrupt mechanism.")])]),t._v(" "),n("li",[n("p",[t._v("Call the "),n("code",[t._v("LOS_HwiCreate")]),t._v(" API to create an interrupt. Enabel the specified interrupt as required.")])]),t._v(" "),n("li",[n("p",[t._v("Call the "),n("code",[t._v("LOS_HwiDelete")]),t._v(" API to delete an interrupt.")])])]),t._v(" "),n("h2",{attrs:{id:"precautions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#precautions","aria-hidden":"true"}},[t._v("#")]),t._v(" Precautions")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("The register address of the "),n("code",[t._v("LosHwiInit")]),t._v(" operation and the maximum allowed number of interrupts vary depending on hardware specifications.")])]),t._v(" "),n("li",[n("p",[t._v("Avoid long-running interrupt handlers because they have negative impact on CPU's response to interrupts.")])]),t._v(" "),n("li",[n("p",[t._v("The function leading to schedule cannot be performed after breading off.")])]),t._v(" "),n("li",[n("p",[t._v("The input parameter of the "),n("code",[t._v("LOS_IntRestore()")]),t._v(" API must be the PRIMASK that is saved by the "),n("code",[t._v("LOS_IntLock()")]),t._v(" API before locking the interrupt.")])]),t._v(" "),n("li",[n("p",[t._v("In Cortex-A7, interrupts 0–31 are for internal use and it is not advisable to request or create them.")])])]),t._v(" "),n("h2",{attrs:{id:"programming-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#programming-example","aria-hidden":"true"}},[t._v("#")]),t._v(" Programming Example")]),t._v(" "),n("h3",{attrs:{id:"example-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Description")]),t._v(" "),n("p",[t._v("The programming example will cover the following functions:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Initialize an hardware interrupt")])]),t._v(" "),n("li",[n("p",[t._v("Register an interrupt")])]),t._v(" "),n("li",[n("p",[t._v("Trigger an interrupt")])]),t._v(" "),n("li",[n("p",[t._v("View the output")])])]),t._v(" "),n("p",[n("strong",[t._v("Prerequisite:")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("The "),n("code",[t._v("LOSCFG_PLATFORM_HWI")]),t._v(" parameter in the los_config.h file is set to "),n("strong",[t._v("YES")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("The "),n("code",[t._v("OS_HWI_MAX_USED_NUM")]),t._v(" parameter in the los_config.h file is set to the maximum number of hardware interrupts the operating system allows.")])])]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("The current interrupt test code provides a basic framework. The interrupt hardware initialization code can be implemented by calling the "),n("code",[t._v("Example_Exti0_Init()")]),t._v(" function based on the hardware of the development board.")])]),t._v(" "),n("h3",{attrs:{id:"example-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-code","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Code")]),t._v(" "),n("p",[t._v("The code is as follows:")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Example_Exti0_Init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*add your IRQ init code here*/")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("User_IRQHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\r\\n User IRQ test\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nUINT32 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Example_Interrupt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VOID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINTPTR uvIntSave"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uvIntSave "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("LOS_IntLock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Example_Exti0_Init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("LOS_HwiCreate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" User_IRQHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//create interrupt")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("LOS_IntRestore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uvIntSave"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),n("h3",{attrs:{id:"verification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#verification","aria-hidden":"true"}},[t._v("#")]),t._v(" Verification")]),t._v(" "),n("p",[n("img",{attrs:{src:r(196),alt:""}})])])}],a=r(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.options.__file="interrupt.md";e.default=s.exports}}]);