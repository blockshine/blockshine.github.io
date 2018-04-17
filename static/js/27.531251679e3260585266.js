webpackJsonp([27],{516:function(A,t,e){e(676);var l=e(197)(e(557),e(636),"data-v-3263f652",null);A.exports=l.exports},557:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}}}},593:function(A,t,e){t=A.exports=e(196)(!1),t.push([A.i,"",""])},636:function(A,t){A.exports={render:function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)},staticRenderFns:[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("div",{staticClass:"ms-doc"},[e("article",{staticClass:"markdown-section",attrs:{id:"main"}},[e("h3",[A._v("查询指定范围内的区块列表")]),A._v(" "),e("p",[e("strong",[A._v("请求语法")])]),A._v(" "),e("pre",{pre:!0,attrs:{"data-lang":""}},[e("code",{attrs:{class:"lang-"}},[A._v("GET /block/headers")])]),A._v(" "),e("p",[e("strong",[A._v("请求参数")])]),A._v(" "),e("table",[e("thead",[e("tr",[e("th",{attrs:{id:"参数"}},[A._v("参数")]),A._v(" "),e("th",{attrs:{id:"类型"}},[A._v("类型")]),A._v(" "),e("th",{attrs:{id:"传参类型"}},[A._v("传参类型")]),A._v(" "),e("th",{attrs:{id:"必须"}},[A._v("必须")]),A._v(" "),e("th",{attrs:{id:"说明"}},[A._v("说明")])])]),A._v(" "),e("tbody",[e("tr",[e("td",[A._v("token")]),A._v(" "),e("td",[A._v("string")]),A._v(" "),e("td",[A._v("HEAD")]),A._v(" "),e("td",[A._v("true")]),A._v(" "),e("td",[A._v("授权码")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("hash")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",[A._v("body")]),A._v(" "),e("td",[A._v("false")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("指定hash开始")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("qty")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("Long")]),A._v(" "),e("td",[A._v("body")]),A._v(" "),e("td",[A._v("false")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("获取条数")])])])]),A._v(" "),e("p",[e("strong",[A._v("响应参数")])]),A._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[A._v("参数")]),A._v(" "),e("th",{staticStyle:{"text-align":"left"}},[A._v("类型")]),A._v(" "),e("th",{staticStyle:{"text-align":"left"}},[A._v("说明")])])]),A._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("chainData")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("Array")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("链数据结构")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|logsBloom")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("数据，256字节-区块的日志的BLOOM过滤器。挂起的区块值为NULL")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|receiptsRoot")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("数据，32字节，这个区块的回执根树")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|unclesHash")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("叔块hash集合")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|extraData")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("数据-这个区块的“额外数据”字段。")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|txTrieRoot")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("数据，32字节的块的交易事务的根。")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|number")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("区块编号")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|gasLimit")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("交易费的限制")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|genesis")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("是否是创始块")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|gasUsed")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("gas消耗值总和")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|coinbase")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("矿工的账")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|shortDescr")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("描述")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|stateRoot")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("数据，32字节，这个区块的最终状态树的根")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|powBoundary")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("共识")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|mixHash")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("与nonce配合用于挖矿，由上一个区块的一部分生成的hash。")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|parentHash")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("上一个区块的hash值，因为是创世块，所以这个值是0")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|hash")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("区块的hash值")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|timestamp")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("数量——用于核对块时的UNIX时间戳")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|encoded")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("编码")])]),A._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[A._v("|encodedWithoutNonce")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("String")]),A._v(" "),e("td",{staticStyle:{"text-align":"left"}},[A._v("没有Nonce的编码")])])])]),A._v(" "),e("p",[e("strong",[A._v("请求示例")])]),A._v(" "),e("pre",{pre:!0,attrs:{"data-lang":""}},[e("code",{attrs:{class:"lang-"}},[A._v("http://localhost:8090/block/headers")])]),A._v(" "),e("p",[e("strong",[A._v("响应示例")])]),A._v(" "),e("blockquote",[e("p",[A._v("JSON格式")])]),A._v(" "),e("pre",{pre:!0,attrs:{"data-lang":""}},[e("code",{attrs:{class:"lang-"}},[A._v('\n            {\n            \t"msg": "操作成功",\n            \t"code": 0,\n            \t"chainData": [{\n            \t\t"logsBloom": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",\n            \t\t"receiptsRoot": "VugfFxvMVab/g0XmksD4bltI4BuZbK3AAWIvteNjtCE=",\n            \t\t"unclesHash": "HcxN6N7HXXqrhbVntszUGtMSRRuUinQT8KFC/UDUk0c=",\n            \t\t"extraData": null,\n            \t\t"txTrieRoot": "VugfFxvMVab/g0XmksD4bltI4BuZbK3AAWIvteNjtCE=",\n            \t\t"nonce": "AAAAAAAAAIg=",\n            \t\t"difficultyBI": 512,\n            \t\t"difficulty": "AgA=",\n            \t\t"number": 0,\n            \t\t"gasLimit": "E4gAAAAAAA==",\n            \t\t"genesis": true,\n            \t\t"gasUsed": 0,\n            \t\t"coinbase": "AAAAAAAAAAAAAAAAAAAAAAAAAAA=",\n            \t\t"shortDescr": "#0 (737c22 <~ 000000)",\n            \t\t"stateRoot": "rgaPYjPWFyssbaBP9IIZSZbfkQ4mB8LS5G/MJPKBPBw=",\n            \t\t"powBoundary": "AIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",\n            \t\t"mixHash": "AAAAAAAAAAAAAAAAAAAAAAAAAGR1cmFsZXhzZWRsZXg=",\n            \t\t"parentHash": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",\n            \t\t"hash": "c3wiAHrrrcM3g30AolaIgsgyd7wmK0LJUh6lcBFeA4E=",\n            \t\t"timestamp": 0,\n            \t\t"encoded": "+QH2oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoB3MTejex116q4W1Z7bM1BrTEkUblIp0E/ChQv1A1JNHlAAAAAAAAAAAAAAAAAAAAAAAAAAAoK4Gj2Iz1hcrLG2gT/SCGUmW35EOJgfC0uRvzCTygTwcoFboHxcbzFWm/4NF5pLA+G5bSOAbmWytwAFiL7XjY7QhoFboHxcbzFWm/4NF5pLA+G5bSOAbmWytwAFiL7XjY7QhuQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIICAICHE4gAAAAAAICAgKAAAAAAAAAAAAAAAAAAAAAAAAAAZHVyYWxleHNlZGxleIgAAAAAAAAAiA==",\n            \t\t"encodedWithoutNonce": "+QHMoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoB3MTejex116q4W1Z7bM1BrTEkUblIp0E/ChQv1A1JNHlAAAAAAAAAAAAAAAAAAAAAAAAAAAoK4Gj2Iz1hcrLG2gT/SCGUmW35EOJgfC0uRvzCTygTwcoFboHxcbzFWm/4NF5pLA+G5bSOAbmWytwAFiL7XjY7QhoFboHxcbzFWm/4NF5pLA+G5bSOAbmWytwAFiL7XjY7QhuQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIICAICHE4gAAAAAAICAgA=="\n            \t}]\n            }\n            ')])])])])])}]}},676:function(A,t,e){var l=e(593);"string"==typeof l&&(l=[[A.i,l,""]]),l.locals&&(A.exports=l.locals);e(198)("3aa8fe26",l,!0)}});