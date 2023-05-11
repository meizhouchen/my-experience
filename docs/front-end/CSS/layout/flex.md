# [flex box](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)
## 教程
[阮一峰教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

### flex-direction属性
```css
.box{
  flex-direction: row;
}
```
<div class="a-flex flex" :style="{'flex-direction': direction}" style="width:200px;">
  <div class="a-icon-50 a-bg-_ec732c" v-for="item in 3" :key="item">
    {{ item }}
  </div>
</div>

<input type="radio" class="ridio-box" value="row" checked  name="monitorType"  v-model="direction" > row：水平。默认值，主轴为水平方向，起点在左端。

<input type="radio" class="ridio-box" value="row-reverse" name="monitorType"  v-model="direction"> row-reverse：水平-倒序。主轴为水平方向，起点在右端。

<input type="radio" class="ridio-box" value="column" name="monitorType"  v-model="direction"> column：竖直。主轴为垂直方向，起点在上沿。

<input type="radio" class="ridio-box" value="column-reverse" name="monitorType"  v-model="direction"> column-reverse：竖直-倒序。主轴为垂直方向，起点在下沿。


### flex-wrap
```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
  flex-wrap: nowrap; // 默认
}
```
<div class="a-flex flex" :style="{'flex-wrap': wrap}" style="width:200px;height: 100px;">
  <div class="a-icon-50 a-bg-_ec732c" v-for="item in 10" :key="item">
    {{ item }}
  </div>
</div>

<input type="radio" class="ridio-box" checked value="nowrap" name="wrap"  v-model="wrap">nowrap：不换行

<input type="radio" class="ridio-box" value="wrap" name="wrap"  v-model="wrap"> wrap：换行

<input type="radio" class="ridio-box" value="wrap-reverse" name="wrap"  v-model="wrap">wrap-reverse：换行-倒序



### justify-content
```css
.box{
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
<div class="a-flex flex" :style="{'justify-content': justifyContent}" style="width:200px; height: 100px;">
  <div class="a-icon-50 a-bg-_ec732c" v-for="item in 3" :key="item">
    {{ item }}
  </div>
</div>

<input type="radio" class="ridio-box" checked value="flex-start" name="justifyContent"  v-model="justifyContent">flex-start：左对齐

<input type="radio" class="ridio-box" value="flex-end" name="justifyContent"  v-model="justifyContent"> flex-end：右对齐

<input type="radio" class="ridio-box" value="center" name="justifyContent"  v-model="justifyContent">center：水平居中

<input type="radio" class="ridio-box" value="space-between" name="justifyContent"  v-model="justifyContent">space-between：两端对齐

<input type="radio" class="ridio-box" value="space-around" name="justifyContent"  v-model="justifyContent">space-around：环绕

<input type="radio" class="ridio-box" value="space-evenly" name="justifyContent"  v-model="justifyContent">space-evenly：均分

### align-content
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
### align-items
align-items: flex-start | flex-end | center | baseline | stretch;
### align-self
 align-self: auto | flex-start | flex-end | center | baseline | stretch;
 
### flex-grow
 
### flex-shrink

### flex-basis
 
### order


<script setup>
import { ref } from 'vue';
let direction =  ref('row')

// const timer = setInterval(() => {
//   if(direction.value === 'row'){
//     direction.value = 'row-reverse'
//   }else if(direction.value === 'row-reverse'){
//     direction.value = 'column'
//   }else if(direction.value === 'column'){
//     direction.value = 'column-reverse'
//   }else if(direction.value === 'column-reverse'){
//     direction.value = 'row'
//   }
//   // clearInterval(timer)
// }, 3000);

let wrap =  ref('nowrap')
let justifyContent =  ref('flex-start')

</script>

## 进阶
### flex-flow 缩写
```css
flex-flow: row wrap;

// 等价
flex-direction: row;
flex-wrap: wrap;
```

### flex：缩写与全写
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
```css
flex: auto;
// 等价 (1 1 auto)
flex-grow: 1;
flex-shrink: 1;
flex-basis: auto;

flex: none;
// 等价 (0 0 auto)
flex-grow: 0;
flex-shrink: 0;
flex-basis: auto;

flex: 1;
// 等价 (1 1 0%)
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;

```


<style>
.flex{
}
.a-flex{
  display: flex;
  border: 1px #ec732c solid;
  height: 150px;
}
.a-icon-50{
  margin: 4px;
  width: 30px;
  height: 30px;
} 
.a-bg-_ec732c{
  background-color: #ec732c;
}
</style>