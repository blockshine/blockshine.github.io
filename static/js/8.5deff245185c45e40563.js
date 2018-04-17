webpackJsonp([8],{535:function(t,e,a){a(706);var l=a(197)(a(576),a(666),"data-v-fde4eb40",null);t.exports=l.exports},576:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},623:function(t,e,a){e=t.exports=a(196)(!1),e.push([t.i,"",""])},666:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"ms-doc"},[a("article",{staticClass:"markdown-section",attrs:{id:"main"}},[a("h3",[t._v("授权码申请")]),t._v(" "),a("p",[a("strong",[t._v("请求语法")])]),t._v(" "),a("pre",{pre:!0,attrs:{"data-lang":""}},[a("code",{attrs:{class:"lang-"}},[t._v("POST /token/apply")])]),t._v(" "),a("p",[a("strong",[t._v("请求参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{attrs:{id:"参数"}},[t._v("参数")]),t._v(" "),a("th",{attrs:{id:"类型"}},[t._v("类型")]),t._v(" "),a("th",{attrs:{id:"传参类型"}},[t._v("传参类型")]),t._v(" "),a("th",{attrs:{id:"必须"}},[t._v("必须")]),t._v(" "),a("th",{attrs:{id:"说明"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("appKey")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("body")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("授权码申请Key")])]),t._v(" "),a("tr",[a("td",[t._v("appSecret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("body")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("授权码申请密码")])])])]),t._v(" "),a("p",[a("strong",[t._v("响应参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tokenObject")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("token对象实体")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("|scope")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("授权码使用范围")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("|tokenType")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("授权码类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("|expiryTime")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("终止时间(秒数)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("|refreshToken")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("刷新授权码凭证")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("|token")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("接口访问凭证")])])])]),t._v(" "),a("p",[a("strong",[t._v("请求示例")])]),t._v(" "),a("pre",{pre:!0,attrs:{"data-lang":""}},[a("code",{attrs:{class:"lang-"}},[t._v("localhost:8090/token/apply")])]),t._v(" "),a("pre",{pre:!0,attrs:{"data-lang":""}},[a("code",{attrs:{class:"lang-"}},[t._v('\n                {\n                  "appKey":"13",\n                  "appSecret":"ASDF"\n                }')])]),t._v(" "),a("p",[a("strong",[t._v("响应示例")])]),t._v(" "),a("blockquote",[a("p",[t._v("JSON格式")])]),t._v(" "),a("pre",{pre:!0,attrs:{"data-lang":""}},[a("code",{attrs:{class:"lang-"}},[t._v('\n            {\n                "msg": "操作成功",\n                "code": 0,\n                "tokenObject": {\n                    "scope": "all",\n                    "tokenType": "grant",\n                    "expiryTime": 720,\n                    "refreshToken": "OGQwYWJiZDIxZWJlODlmYmY3NmU1M",\n                    "token": "YzhjZGJlYTY3MDg1MDQ2MGQ4OGJjY"\n                }\n            }\n            ')])])])])])}]}},706:function(t,e,a){var l=a(623);"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a(198)("71ef75d3",l,!0)}});