# 路径

```js
new Path2D();     // 空的 Path 对象
new Path2D(path); // 克隆 Path 对象
new Path2D(d);    // 从 SVG 建立 Path 对象

```
## 使用 SVG paths
```js
let p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```
<canvas id="tutoria4" width="150" height="150"></canvas>

<script setup>
import { ref, onMounted  } from 'vue'
const count = ref(0)

onMounted(() => {
	
 // let canvas = document.getElementById('tutorial1');
 // if (canvas.getContext) {
 //   var ctx = canvas.getContext('2d');
 
 //   ctx.fillRect(25, 25, 100, 100);
 //   ctx.clearRect(45, 45, 60, 60);
 // }
})

</script>