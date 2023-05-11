# [JSON.parse()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)

JSON 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 null。

## 使用技巧
### 深拷贝
let newObj = JSON.parse(JSON.stringify(obj))
#### 原理
字符串非引用类型
#### 问题
仅支持对象、数组、数值、字符串、布尔值和 null。