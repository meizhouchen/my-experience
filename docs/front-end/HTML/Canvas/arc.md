# 路径
## 新建路径
beginPath()
新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
<canvas id="tutorial1" width="150" height="150"></canvas>
## 闭合路径
closePath()
闭合路径之后图形绘制命令又重新指向到上下文中。
<canvas id="tutorial2" width="150" height="150"></canvas>
## 线条
stroke()
通过线条来绘制图形轮廓。
<canvas id="tutorial3" width="150" height="150"></canvas>
## 填充
fill()
通过填充路径的内容区域生成实心的图形。
<canvas id="tutoria4" width="150" height="150"></canvas>

<script setup>
import { ref, onMounted  } from 'vue'
const count = ref(0)

onMounted(() => {
	
 let canvas = document.getElementById('tutorial1');
 if (canvas.getContext) {
   var ctx = canvas.getContext('2d');
 
   ctx.fillRect(25, 25, 100, 100);
   ctx.clearRect(45, 45, 60, 60);
 }
})
onMounted(() => {
  let canvas = document.getElementById('tutorial2');
  let ctx = canvas.getContext('2d');
	
  ctx.fillRect (30, 30, 55, 50);
})
onMounted(() => {
  let canvas = document.getElementById('tutorial3');
  let ctx = canvas.getContext('2d');
	
  ctx.strokeRect (30, 30, 55, 50);
})
</script>