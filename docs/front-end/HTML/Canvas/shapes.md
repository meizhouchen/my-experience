# 矩形

绘制一个填充的矩形fillRect(x, y, width, height)
<canvas id="tutorial1" width="150" height="150"></canvas>


strokeRect(x, y, width, height)
绘制一个矩形的边框

<canvas id="tutorial2" width="150" height="150"></canvas>

clearRect(x, y, width, height)
清除指定矩形区域，让清除部分完全透明。

<canvas id="tutorial" width="150" height="150"></canvas>

<script setup>
import { ref, onMounted  } from 'vue'
const count = ref(0)

onMounted(() => {
 var canvas = document.getElementById('tutorial');
 if (canvas.getContext) {
   var ctx = canvas.getContext('2d');
 
   ctx.fillRect(25, 25, 100, 100);
   ctx.clearRect(45, 45, 60, 60);
 }
})
onMounted(() => {
  let canvas = document.getElementById('tutorial1');
  let ctx = canvas.getContext('2d');
	
  // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect (30, 30, 55, 50);
})
onMounted(() => {
  let canvas = document.getElementById('tutorial2');
  let ctx = canvas.getContext('2d');
	
  // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.strokeRect (30, 30, 55, 50);
})
</script>

# 路径
beginPath()
新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。

closePath()
闭合路径之后图形绘制命令又重新指向到上下文中。

stroke()
通过线条来绘制图形轮廓。

fill()
通过填充路径的内容区域生成实心的图形。