/* istanbul ignore next */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
(function (root, factory) {
    /* istanbul ignore next */
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    } else { factory(null, root["iorder"] = {}); }
})(this, function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 标题解析器
     * @example Parser
        ```js
        var parser = new iorder.Parser()
    console.log(
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
    // > 第一章 JavaScript 从入门到精通（上）
    // > 第一章 JavaScript 从入门到精通（中）
    // > 第一章 JavaScript 从入门到精通（下）
    // > 第八期 设计语言和编程语言介绍（九）
    // > 第八期 设计语言和编程语言介绍（十）
    // > 第八期 设计语言和编程语言介绍(十一)
        ```
      */
    var Parser = /** @class */ (function () {
        function Parser(options) {
            if (options === void 0) { options = {}; }
            this.options = __assign({ length: 4 }, options);
        }
        /**
         * 解析中文数字 Parsing Chinese numerals
         * @param number 数字表达式 Digital expression
         * @param length 返回值内容的长度 The length of the return value content
         * @example format()
            ```js
            var parser = new iorder.Parser()
      console.log(parser.format(null))
      // > null
      console.log(parser.format('十五'))
      // > 0015
      console.log(parser.format('二十一'))
      // > 0021
      console.log(parser.format('一千零二'))
      // > 1002
      console.log(parser.format('一千零十一'))
      // > 1011
      console.log(parser.format('一一三'))
      // > 0113
      var parser = new iorder.Parser({ length: 3 })
      console.log(parser.format('十五'))
      // > 015
      console.log(parser.format('二十一'))
      // > 021
            ```
         */
        Parser.prototype.format = function (number) {
            if (!number) {
                return number;
            }
            number = number.replace(/(^|零)十/g, '一十');
            var result = 0;
            var t = 0;
            number.split('').forEach(function (char) {
                var base = {
                    零: 0,
                    十: 10,
                    百: 100,
                    千: 1000,
                }[char];
                if (base) {
                    result += t * base;
                    t = 0;
                }
                else {
                    t = t * 10 + '零一二三四五六七八九'.indexOf(char);
                }
            });
            return ('000000' + (result + t)).slice(-this.options.length);
        };
        /**
         * 整理标题中包含的序号 Sorting the serial number contained in the title
         * @param title 标题
         * @example replace()
            ```js
            var parser = new iorder.Parser()
      console.log(parser.replace(null))
      // > null
      console.log(parser.replace('第一章 JavaScript 从入门到精通（上）'))
      // > 第0001章 JavaScript 从入门到精通0
      console.log(parser.replace('第一章 JavaScript 从入门到精通（中）'))
      // > 第0001章 JavaScript 从入门到精通1
      console.log(parser.replace('第一章 JavaScript 从入门到精通（下）'))
      // > 第0001章 JavaScript 从入门到精通2
      console.log(parser.replace('第八期 设计语言和编程语言介绍（九）'))
      // > 第0008期 设计语言和编程语言介绍0009
      console.log(parser.replace('第八期 设计语言和编程语言介绍（十）'))
      // > 第0008期 设计语言和编程语言介绍0010
      console.log(parser.replace('第八期 设计语言和编程语言介绍(十一)'))
      // > 第0008期 设计语言和编程语言介绍0011
            ```
         */
        Parser.prototype.replace = function (title) {
            var _this = this;
            if (!title) {
                return title;
            }
            return title
                .replace(/(第?)([零一二三四五六七八九十百千]+)([期次章节段篇课])/g, function (all, prefix, number, unit) {
                return "" + prefix + _this.format(number) + unit;
            })
                .replace(/[（\(]([零一二三四五六七八九十百千]+)[）\)]/g, function (all, number) {
                return _this.format(number);
            })
                .replace(/[（\(]([上中下]+)[）\)]/g, function (all, number) {
                return String('上中下'.indexOf(number));
            });
        };
        return Parser;
    }());
    exports.Parser = Parser;
});
