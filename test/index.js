
const iorder = require('../')
      

describe("src/index.ts", function () {
  var assert = require('should');
  var util = require('util');
  var examplejs_printLines;
  function examplejs_print() {
    examplejs_printLines.push(util.format.apply(util, arguments));
  }
  
  

  it("Parser", function () {
    examplejs_printLines = [];
    var parser = new iorder.Parser()
examplejs_print(
  [
    '第八期 设计语言和编程语言介绍（十）',
    '第八期 设计语言和编程语言介绍(十一)',
    '第一章 JavaScript 从入门到精通（下）',
    '第八期 设计语言和编程语言介绍（九）',
    '第一章 JavaScript 从入门到精通（中）',
    '第一章 JavaScript 从入门到精通（上）',
  ]
    .sort((a, b) => {
      return parser.replace(a).localeCompare(parser.replace(b))
    })
    .join('\n')
)
assert.equal(examplejs_printLines.join("\n"), "第一章 JavaScript 从入门到精通（上）\n第一章 JavaScript 从入门到精通（中）\n第一章 JavaScript 从入门到精通（下）\n第八期 设计语言和编程语言介绍（九）\n第八期 设计语言和编程语言介绍（十）\n第八期 设计语言和编程语言介绍(十一)"); examplejs_printLines = [];
  });
          
  it("format()", function () {
    examplejs_printLines = [];
      var parser = new iorder.Parser()
examplejs_print(parser.format(null))
assert.equal(examplejs_printLines.join("\n"), "null"); examplejs_printLines = [];
examplejs_print(parser.format('十五'))
assert.equal(examplejs_printLines.join("\n"), "0015"); examplejs_printLines = [];
examplejs_print(parser.format('二十一'))
assert.equal(examplejs_printLines.join("\n"), "0021"); examplejs_printLines = [];
examplejs_print(parser.format('一千零二'))
assert.equal(examplejs_printLines.join("\n"), "1002"); examplejs_printLines = [];
examplejs_print(parser.format('一千零十一'))
assert.equal(examplejs_printLines.join("\n"), "1011"); examplejs_printLines = [];
examplejs_print(parser.format('一一三'))
assert.equal(examplejs_printLines.join("\n"), "0113"); examplejs_printLines = [];
var parser = new iorder.Parser({ length: 3 })
examplejs_print(parser.format('十五'))
assert.equal(examplejs_printLines.join("\n"), "015"); examplejs_printLines = [];
examplejs_print(parser.format('二十一'))
assert.equal(examplejs_printLines.join("\n"), "021"); examplejs_printLines = [];
  });
          
  it("titleOrder()", function () {
    examplejs_printLines = [];
      var parser = new iorder.Parser()
examplejs_print(parser.replace(null))
assert.equal(examplejs_printLines.join("\n"), "null"); examplejs_printLines = [];
examplejs_print(parser.replace('第一章 JavaScript 从入门到精通（上）'))
assert.equal(examplejs_printLines.join("\n"), "第0001章 JavaScript 从入门到精通0"); examplejs_printLines = [];
examplejs_print(parser.replace('第一章 JavaScript 从入门到精通（中）'))
assert.equal(examplejs_printLines.join("\n"), "第0001章 JavaScript 从入门到精通1"); examplejs_printLines = [];
examplejs_print(parser.replace('第一章 JavaScript 从入门到精通（下）'))
assert.equal(examplejs_printLines.join("\n"), "第0001章 JavaScript 从入门到精通2"); examplejs_printLines = [];
examplejs_print(parser.replace('第八期 设计语言和编程语言介绍（九）'))
assert.equal(examplejs_printLines.join("\n"), "第0008期 设计语言和编程语言介绍0009"); examplejs_printLines = [];
examplejs_print(parser.replace('第八期 设计语言和编程语言介绍（十）'))
assert.equal(examplejs_printLines.join("\n"), "第0008期 设计语言和编程语言介绍0010"); examplejs_printLines = [];
examplejs_print(parser.replace('第八期 设计语言和编程语言介绍(十一)'))
assert.equal(examplejs_printLines.join("\n"), "第0008期 设计语言和编程语言介绍0011"); examplejs_printLines = [];
  });
          
});
         