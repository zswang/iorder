## iorder

# [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

用于文章标题排序 For the title sort of the article

## 使用方法 Usage

### 标题排序 Title sort

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

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://npmjs.org/package/iorder
[npm-image]: https://badge.fury.io/js/iorder.svg
[travis-url]: https://travis-ci.org/zswang/iorder
[travis-image]: https://travis-ci.org/zswang/iorder.svg?branch=master
[coverage-url]: https://coveralls.io/github/zswang/iorder?branch=master
[coverage-image]: https://coveralls.io/repos/zswang/iorder/badge.svg?branch=master&service=github
