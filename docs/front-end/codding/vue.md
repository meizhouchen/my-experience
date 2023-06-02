## 监听div的滚动，计算是否触底

```html
<view id="life-choice-page" @scroll="onBoxScroll">
</view>
```
```js
onBoxScroll() {
  const pageBox = document.getElementById('life-choice-page');
  const scrollTop = pageBox.scrollTop; //获取dom滚动距离
  const offsetHeight = pageBox.offsetHeight; //获取可视区高度
  const scrollHeight = pageBox.scrollHeight; //获取滚动条总高度
  
  // 判断是否触底
  const ReachBottomHeight = scrollHeight - offsetHeight - scrollTop;
  if (ReachBottomHeight === 0) {
    // 触底加载
    this.$refs.goodList.nextGoodsPage();
  }
},
```