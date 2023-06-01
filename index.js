const fs = require('fs');
const { glob } = require('glob');
// console.log('==== glob :', glob);

// 标题,路径
async function fun() {
	const res = {}
	const files = await glob('./docs/**/*.md', { ignore: 'node_modules/**' })
	console.log('==== file :', files);
	files.forEach((link) => {
		link = link.slice(5).replaceAll('\\','/')
		const filePathArr = link.split('\\')
		
		filePathArr.forEach((path, index) => {
			let node = {
				text: '',
				collapsed: false,
				link
			}
			if (path.endsWith('.md')) {
				// 文件
				const text = path.substring(0,-3)
				 node.text = text
				res[path] = node
			}else{
				// 文件夹
				if(res[path]) {
					node.item = []
					res[path] = node
				}else{
					res[path] = node
				}
			}
		});

	});
	console.log('==== res :', res);
}
fun()


function makeNode() {
	
}
				// {
				// 	text: '前端',
				// 	link: '/front-end/index',
				// 	items: [
				// 		{
				// 			text: 'HTML',
				// 			collapsed: true,
				// 			link: '/front-end/HTML/index',
				// 			items: [
				// 				{
				// 					text: 'Canvas 画布',
				// 					collapsed: true,
				// 					link: '/front-end/HTML/Canvas/Canvas',
				// 					items: [
				// 						{
				// 							text: '形状',
				// 							collapsed: true,
				// 							items: [
				// 								{ text: '矩形', link: '/front-end/HTML/Canvas/shapes' },
				// 								{ text: '路径', link: '/front-end/HTML/Canvas/Path' },
				// 								{ text: '直线', link: '/front-end/HTML/Canvas/lineTo' },
				// 								{ text: '圆弧', link: '/front-end/HTML/Canvas/arc' },
				// 								{ text: '塞尔曲线', link: '/front-end/HTML/Canvas/quadraticCurveTo' },
				// 								{ text: 'Path2D', link: '/front-end/HTML/Canvas/Path2D' },
				// 							]
				// 						},