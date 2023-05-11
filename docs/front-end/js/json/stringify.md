# [JSON.stringify()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)

## JSON.stringify()
### 语法
```js
JSON.stringify(value[, replacer [, space]])
```
### 转换规则

- #### toJSON() 方法
转换值如果有 toJSON() 方法，整个对象被转换为函数的返回值。
```js
const obj = {
  foo: 'foo',
  toJSON: function () {
    return 'bar';
  }
};
JSON.stringify(obj);      // '"bar"'
JSON.stringify({x: obj}); // '{"x":"bar"}'
```
- 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
- 布尔值、数字、字符串，会自动转换成对应的原始值。
```js
JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// '[1,"false",false]'
```
- #### undefined、函数以及 symbol  
数组值时,转换成 null
      
```js
JSON.stringify([undefined, function(){}, Symbol("")]); // '[null,null,null]'
```
非数组属性值时,会被忽略
      
```js
JSON.stringify({"foo": function(){}}) // '{}'
JSON.stringify({[Symbol("foo")]: "foo"}); // '{}'
JSON.stringify({"Symbol": Symbol("")}); // '{}'
JSON.stringify({x: undefined}); // '{}'

```


- 单独转换 函数、undefined 被单独转换时，会返回 undefined
```js
JSON.stringify(function(){}); // undefined
JSON.stringify(undefined); // undefined
```
- 包含循环引用,会抛出错误
```js
// 循环引用（对象之间相互引用，形成无限循环）
let obj1 = { name: 'obj1' };
let obj2 = { name: 'obj2', obj1 };
obj1.obj2 = obj2;

JSON.stringify(obj1);
// Uncaught TypeError: Converting circular structure to JSON 
// 未捕获类型错误：将循环结构转换为JSON
JSON.stringify(obj2);
// Uncaught TypeError: Converting circular structure to JSON
```
- 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
```js
// symbol 为属性键
JSON.stringify({[Symbol("foo")]: "foo"}); // '{}'

// symbol 为属性值
JSON.stringify({"Symbol": Symbol("")}); // '{}'

JSON.stringify(
    {
      [Symbol.for("foo")]: "foo" 
    },
    function (k, v) {
        if (typeof k === "symbol"){
            return "a symbol";
        }
    }
);
// undefined

JSON.stringify(
    {
      [Symbol.for("foo")]: "foo",
      "key":"value"
    },
    function (k, v) {
        if (typeof k === "symbol"){
            return "a symbol";
        }else{
            return v
        }
    }
)
//'{"key":"value"}'
```
- Date 日期调用了 toJSON() 将其转换为了 string 字符串（同 Date.toISOString()），因此会被当做字符串处理。
```js
Date();
      // 'Wed May 10 2023 08:36:14 GMT+0800 (中国标准时间)'
JSON.stringify({ x: Date() }); 
// '{"x":"Wed May 10 2023 08:36:24 GMT+0800 (中国标准时间)"}'
```
- NaN 和 Infinity 格式的数值及 null 都会被当做 null。
```js
JSON.stringify({"NaN":  NaN}); // '{"NaN":null}'
JSON.stringify({"null":  null}); // '{"null":null}'
JSON.stringify({"Infinity":  Infinity}); // '{"Infinity":null}'
JSON.stringify([NaN, Infinity, null]); // '[null,null,null]'
```
- 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。
```js
// 不可枚举的属性默认会被忽略：
JSON.stringify(
    Object.create(
        null,
        {
            x: { value: 'x', enumerable: false },
            y: { value: 'y', enumerable: true }
        }
    )
);

// "{"y":"y"}"
```
- BigInt报错
```js
BigInt(1) // 1n

JSON.stringify(BigInt(1));
// Uncaught TypeError: Do not know how to serialize(序列化) a BigInt
// 未捕获类型错误：不知道如何序列化(转换为json)一个 BigInt 值
JSON.stringify({"key":BigInt(1)});
// Uncaught TypeError: Do not know how to serialize a BigInt
```


```js
JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'

JSON.stringify({x: 5, y: 6});
// "{"x":5,"y":6}"

JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// '[1,"false",false]'

JSON.stringify({x: undefined, y: Object, z: Symbol("")});
// '{}'

JSON.stringify([undefined, Object, Symbol("")]);
// '[null,null,null]'

JSON.stringify({[Symbol("foo")]: "foo"});
// '{}'

JSON.stringify({[Symbol.for("foo")]: "foo"}, [Symbol.for("foo")]);
// '{}'

JSON.stringify(
    {[Symbol.for("foo")]: "foo"},
    function (k, v) {
        if (typeof k === "symbol"){
            return "a symbol";
        }
    }
);


// undefined

// 不可枚举的属性默认会被忽略：
JSON.stringify(
    Object.create(
        null,
        {
            x: { value: 'x', enumerable: false },
            y: { value: 'y', enumerable: true }
        }
    )
);

// "{"y":"y"}"

```