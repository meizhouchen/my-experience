# [JSON.parse()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

## 语法
```js
JSON.parse(text[, reviver])
```
## 参数
### text
要被解析成 JavaScript 值的字符串，关于 JSON 的语法格式，请参考：JSON。

### reviver 可选
转换器，如果传入该参数 (函数)，可以用来修改解析生成的原始值，调用时机在 parse 函数返回之前。

## 不支持
- 不允许用逗号作为结尾
- 不能有注释
## 加注释
[JSON5](https://json5.org/)允许在JSON文件中加入注释：单行注释，多行注释均可。
## 去注释
去注释的库strip-json-comments

