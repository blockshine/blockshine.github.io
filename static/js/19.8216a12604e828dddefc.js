webpackJsonp([19],{521:function(t,e,l){l(687);var a=l(197)(l(559),l(651),"data-v-d0f16ab2",null);t.exports=a.exports},559:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},612:function(t,e,l){e=t.exports=l(64)(!1),e.push([t.i,"",""])},651:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"ms-doc"},[l("article",{staticClass:"markdown-section",attrs:{id:"main"}},[l("h3",[t._v("合约调用(暂未开放)")]),t._v(" "),l("p",[l("strong",[t._v("请求语法")])]),t._v(" "),l("pre",{pre:!0,attrs:{"data-lang":""}},[l("code",{attrs:{class:"lang-"}},[t._v("GET /contract/invoke")])]),t._v(" "),l("p",[l("strong",[t._v("请求参数")])]),t._v(" "),l("p",[t._v("\n            String bnOrId : 区块编号, "),l("br"),t._v("\n            Boolean fullTransactionObjects : 如果为真，则返回完整的事务对象，如果仅为假，则返回事务的散列值。\n            ")]),t._v(" "),l("p",[l("strong",[t._v("响应参数")])]),t._v(" "),l("p",[l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("BlockResult")])])]),t._v(" "),l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" QUANTITY - the block number. null when its pending block.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("hash")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" DATA, 32 Bytes - hash of the block. null when its pending block.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("parentHash")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" DATA, 32 Bytes - hash of the parent block.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("nonce")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("sha3Uncles")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" DATA, 32 Bytes - SHA3 of the uncles data in the block.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("logsBloom")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("transactionsRoot")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" DATA, 32 Bytes - the root of the transaction trie of the block.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("stateRoot")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" DATA, 32 Bytes - the root of the final state trie of the block.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("receiptRoot")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" DATA, 32 Bytes - the root of the receipts trie of the block.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("miner")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" DATA, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("difficulty")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" QUANTITY - integer of the difficulty for this block.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("totalDifficulty")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" QUANTITY - integer of the total difficulty of the chain until this block.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("extraData")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(' DATA - the "extra data" field of this block')])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" QUANTITY - integer the size of this block in bytes.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("gasLimit")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" QUANTITY - the maximum gas allowed in this block.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("gasUsed")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" QUANTITY - the total used gas by all transactions in this block.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("timestamp")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" QUANTITY - the unix timestamp for when the block was collated.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("transactions")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Object[]")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("uncles")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String[]")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(" Array - Array of uncle hashes.")])])])])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("BlockResult")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("BlockResult")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("返回区块的基本信息")])])])]),t._v(" "),l("p",[l("strong",[t._v("请求示例")])]),t._v(" "),l("pre",{pre:!0,attrs:{"data-lang":""}},[l("code",{attrs:{class:"lang-"}},[t._v("http://localhost:8090/block/info?bnOrId=0x1942&fullTransactionObjects=true")])]),t._v(" "),l("p",[l("strong",[t._v("响应示例")])]),t._v(" "),l("blockquote",[l("p",[t._v("JSON格式")])]),t._v(" "),l("pre",{pre:!0,attrs:{"data-lang":""}},[l("code",{attrs:{class:"lang-"}},[t._v('\n            {\n                "BlockResult": {\n                    "number": "0x1b4", // 436\n                    "hash": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",\n                    "parentHash": "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5",\n                    "nonce": "0xe04d296d2460cfb8472af2c5fd05b5a214109c25688d3704aed5484f9a7792f2",\n                    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",\n                    "logsBloom": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",\n                    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n                    "stateRoot": "0xd5855eb08b3387c0af375e9cdb6acfc05eb8f519e419b874b6ff2ffda7ed1dff",\n                    "miner": "0x4e65fda2159562a496f9f3522f89122a3088497a",\n                    "difficulty": "0x027f07", // 163591\n                    "totalDifficulty":  "0x027f07", // 163591\n                    "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000",\n                    "size":  "0x027f07", // 163591\n                    "gasLimit": "0x9f759", // 653145\n                    "minGasPrice": "0x9f759", // 653145\n                    "gasUsed": "0x9f759", // 653145\n                    "timestamp": "0x54e34e8e" // 1424182926\n                    "transactions": [{...},{ ... }]\n                    "uncles": ["0x1606e5...", "0xd5145a9..."]\n                }\n            }\n            ')])])])])])}]}},687:function(t,e,l){var a=l(612);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);l(198)("03536bce",a,!0)}});