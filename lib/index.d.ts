export interface IParserOptions {
    length?: number;
}
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
export declare class Parser {
    options: IParserOptions;
    constructor(options?: IParserOptions);
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
  console.log(parser.format('137'))
  // > 0137
  var parser = new iorder.Parser({ length: 3 })
  console.log(parser.format('十五'))
  // > 015
  console.log(parser.format('二十一'))
  // > 021
  console.log(parser.format('137'))
  // > 137
        ```
     */
    format(number: string): string;
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
  console.log(parser.replace('第1季 名侦探柯南(9)'))
  // > 第0001季 名侦探柯南0009
  console.log(parser.replace('第1季 名侦探柯南(10)'))
  // > 第0001季 名侦探柯南0010
  console.log(parser.replace('第1季 名侦探柯南 368'))
  // > 第0001季 名侦探柯南 0368
  console.log(parser.replace('课时 1 双曲率球面方程式'))
  // > 课时0001双曲率球面方程式
  console.log(parser.replace('第9期 设计语言和编程语言介绍(18)'))
  // > 第0009期 设计语言和编程语言介绍0018
  console.log(parser.replace('一、Andorid 数据接入'))
  // > 0001、Andorid 数据接入
  console.log(parser.replace('二： Andorid 数据接入'))
  // > 0002：Andorid 数据接入
        ```
     */
    replace(title: string): string;
}
