<template>
	<div class="a-flex" :style="{'flex-direction': direction}">
		<div class="a-icon-50 a-bg-_ec732c" v-for="item in 3" :key="item">
			{{ item }}
		</div>
	</div>
	<input type="checkbox" name="" id="" v-model="">
	inp
</template>

<script setup>
import { ref } from 'vue';
let direction =	ref('row')
const timer = setTimeout(() => {
	direction.value = 
	clearTimeout(timer)
}, 1000);
const timer = setInterval(() => {
	
	clearInterval(timer)
}, 1000);
</script>

<style>
.a-flex{
	display: flex;
	border: #ec732c solid;
}
.a-icon-50{
	width: 50px;
	height: 50px;
} 
.a-bg-_ec732c{
	background-color: #ec732c;
}
</style>