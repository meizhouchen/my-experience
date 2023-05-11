
# [sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)
与 localStorage 相似


## 不同
- localStorage 数据没有过期时间
- sessionStorage 页面会话结束时,会清除数据

## 属性
### Storage.length 只读
返回一个整数，表示存储在 Storage 对象中的数据项数量。
```js
sessionStorage.length
```
## 方法
### Storage.key()
该方法接受一个数值 n 作为参数，并返回存储中的第 n 个键名。
```js
sessionStorage.key(1)
```
### Storage.getItem()
该方法接受一个键名作为参数，返回键名对应的值。
```js
sessionStorage.getItem('key')
```
### Storage.setItem()
该方法接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。
```js
sessionStorage.setItem('key', value)
```
### Storage.removeItem()
该方法接受一个键名作为参数，并把该键名从存储中删除。
```js
sessionStorage.removeItem('key')
```
### Storage.clear()
调用该方法会清空存储中的所有键名。
```js
sessionStorage.clear()
```