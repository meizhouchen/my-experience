import { defineConfig } from 'vitepress'
import allin from 'css-allin-class'
import preset from 'css-allin-class/preset'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	// vite: {
	// 	plugins: [
	// 		allin({ unit:'px', prefix:'a-', presets:[preset()]})
	// 	]
	// },
	base: '/my-experience/',
	title: "my experience",
	description: "我的技术经验",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config

		nav: [
			{ text: '首页', link: '/' },
			{ text: '前端', link: '/front-end/index' },
			{ text: '后端', link: '/front-end/index' },
			{ text: '面试', link: '/interview/front-end/index' }
		],

		sidebar: {
			'/front-end/': [
				{
					text: '前端',
					link: '/front-end/index',
					items: [
						{
							text: 'HTML',
							collapsed: true,
							link: '/front-end/HTML/index',
							items: [
								{
									text: 'Canvas 画布',
									collapsed: true,
									link: '/front-end/HTML/Canvas/Canvas',
									items: [
										{
											text: '形状',
											collapsed: true,
											items: [
												{ text: '矩形', link: '/front-end/HTML/Canvas/shapes' },
												{ text: '路径', link: '/front-end/HTML/Canvas/Path' },
												{ text: '直线', link: '/front-end/HTML/Canvas/lineTo' },
												{ text: '圆弧', link: '/front-end/HTML/Canvas/arc' },
												{ text: '塞尔曲线', link: '/front-end/HTML/Canvas/quadraticCurveTo' },
												{ text: 'Path2D', link: '/front-end/HTML/Canvas/Path2D' },
											]
										},
										{
											text: '颜色',
											items: [
												{ text: '矩形', link: '/front-end/HTML/Canvas/shapes' },
											]
										},
									]
								},
								{
									text: 'SVG 矢量图形',
									items: [
										{ text: 'SVG', link: '/front-end/HTML/SVG/index' },
									]
								},
							]
						},
						{
							text: 'CSS层叠样式表',
							collapsed: false,
							items: [
								{ text: '❗ BFC 和 IFC 机制', link: '/front-end/index' },
								{ text: '简写', link: '/front-end/CSS/shorthand' },
								{
									text: 'layout布局',
									items: [
										{ text: 'flex', link: '/front-end/CSS/layout/flex' },
										{ text: 'grids', link: '/front-end/CSS/shorthand' },
										{ text: '响应式', link: '/front-end/CSS/shorthand' },
										{ text: '媒体查询', link: '/front-end/CSS/shorthand' },
									]
								},
							]
						},
						{
							text: 'JavaScript',
							collapsed: true,
							items: [
								{ text: 'BOM API', link: '/front-end/index' },
								{ text: 'DOM API', link: '/front-end/index' },
								{
									text: 'JSON',
									items: [
										{ text: 'parse', link: '/front-end/js/json/parse' },
										{ text: 'stringify', link: '/front-end/js/json/stringify' },
									]
								},
								{ text: 'Ajax', link: '/front-end/index' },
								{ text: '函数', link: '/front-end/index' },
								{ text: '对象', link: '/front-end/index' },
								{ text: '作用域', link: '/front-end/index' },
								{
									text: 'ES6+',
									items: [
										{
											text: 'ES6',
											items: [
												{ text: 'let const', link: '/front-end/index' },
												{ text: 'Promise ', link: '/front-end/index' },
											]
										},
									]
								},
							]
						},
						{
							text: '网络',
							collapsed: true,
							items: [
								{ text: '互联网', link: '/front-end/index' },
								{ text: '域名', link: '/front-end/index' },
								{ text: 'DNS', link: '/front-end/index' },
								{ text: '服务器', link: '/front-end/index' },
								{
									text: 'HTTP',
									items: [
										{ text: 'HTTP 协议', link: '/front-end/index' },
										{ text: 'HTTP 请求过程', link: '/front-end/index' },
										{ text: 'HTTP 1.0', link: '/front-end/index' },
										{ text: 'HTTP 1.1', link: '/front-end/index' },
										{ text: 'HTTP 2', link: '/front-end/index' },
										{ text: 'HTTP 3', link: '/front-end/index' },
										{ text: 'HTTPS', link: '/front-end/index' },
										{ text: 'HTTP 请求类别', link: '/front-end/index' },
										{ text: '常见状态码', link: '/front-end/network/HTTP/response' },
										{ text: 'Cookie', link: '/front-end/network/HTTP/Cookie' },
										{ text: 'Session', link: '/front-end/index' },
										{ text: 'WebSocket', link: '/front-end/index' },
									]
								},
								{ text: '网络模型', link: '/front-end/index' },
								{ text: 'UDP / TCP 协议', link: '/front-end/index' },
							]
						},
						{
							text: '浏览器',
							collapsed: true,
							items: [
								{
									text: '浏览器',
									collapsed: true,
									items: [
										{ text: '事件循环', link: '/front-end/index' },
										{ text: '同源策略', link: '/markdown-examples' },
										{ text: '跨域', link: '/front-end/index' },
										{ text: '浏览器缓存', link: '/front-end/index' },
										{ text: '控制台调试技巧', link: '/front-end/index' },
										{ text: 'DOM 事件流 / 事件委托', link: '/front-end/index' },
										{ text: '加载顺序', link: '/front-end/index' },
										{ text: '渲染过程', link: '/front-end/index' },
										{
											text: 'Storage本地存储',
											items: [
												{ text: 'localStorage', link: '/front-end/browser/Storage/localStorage' },
												{ text: 'sessionStorage', link: '/front-end/browser/Storage/sessionStorage' },
											]
										},
										{ text: '无障碍', link: '/front-end/index' }
									]
								},
								{ text: 'Chrome', link: '/front-end/browser/Chrome/index' },
								{ text: 'Edge', link: '/front-end/index' },
								{ text: 'Firefox', link: '/front-end/index' },
								{ text: 'Safari', link: '/front-end/index' },
								{ text: 'Opera', link: '/front-end/index' },
								{ text: 'Web Workers', link: '/front-end/index' },
							]
						},
						{
							text: '计算机基础',
							collapsed: true,
							items: [
								{
									text: '数据结构',
									items: [
										{ text: '数组', link: '/front-end/index' },
										{ text: '字符串', link: '/front-end/index' },
										{ text: '队列', link: '/front-end/index' },
										{ text: '栈', link: '/front-end/index' },
										{ text: '链表', link: '/front-end/index' },
										{ text: '集合', link: '/front-end/index' },
										{ text: '哈希表', link: '/front-end/index' },
										{ text: '二叉树', link: '/front-end/index' },
									]
								},
								{
									text: '算法',
									items: [
										{ text: '排序', link: '/front-end/index' },
										{ text: '双指针', link: '/front-end/index' },
										{ text: '查找', link: '/front-end/index' },
										{ text: '分治', link: '/front-end/index' },
										{ text: '浏览器', link: '/front-end/index' },
										{ text: '动态规划', link: '/front-end/index' },
										{ text: '递归', link: '/front-end/index' },
										{ text: '回溯', link: '/front-end/index' },
										{ text: '贪心', link: '/front-end/index' },
										{ text: '位运算', link: '/front-end/index' },
										{ text: 'DFS', link: '/front-end/index' },
										{ text: 'BFS', link: '/front-end/index' },
										{ text: '图', link: '/front-end/index' },
									]
								},
								{
									text: '操作系统',
									items: [
										{ text: '进程、线程', link: '/front-end/index' },
										{ text: '进程 / 线程间通讯方式', link: '/front-end/index' },
										{ text: '进程调度算法', link: '/front-end/index' },
										{ text: '进程 / 线程状态', link: '/front-end/index' },
										{ text: '死锁', link: '/front-end/index' },
										{ text: '内存管理', link: '/front-end/index' },
									]
								},
							]
						},
						{
							text: '软件开发',
							collapsed: true,
							items: [
								{
									text: '设计模式',
									items: [
										{ text: '单例模式', link: '/front-end/index' },
										{ text: '代理模式', link: '/front-end/index' },
										{ text: '工厂模式', link: '/front-end/index' },
										{ text: '装饰者模式', link: '/front-end/index' },
										{ text: '观察者模式', link: '/front-end/index' },
										{ text: '策略模式', link: '/front-end/index' },
										{ text: '门面模式', link: '/front-end/index' },
									]
								},
								{ text: '正则表达式', link: '/front-end/index' },
								{ text: 'Linux 服务器', link: '/front-end/index' },
							]
						},
						{
							text: '工程化',
							collapsed: true,
							items: [
								{
									text: '包管理',
									collapsed: true,
									items: [
										{ text: 'npm', link: '/front-end/engineering/package/npm' },
										{ text: 'yarn', link: '/front-end/engineering/package/yarn' },
										{ text: 'npx', link: '/front-end/engineering/package/npx' },
										{ text: 'nvm', link: '/front-end/engineering/package/nvm' },
										{
											text: 'pnpm',
											link: '/front-end/engineering/package/pnpm/index',
										},
									]
								},
								{ text: 'Git 版本控制', link: '/front-end/engineering/pnpm/index' },
								{ text: 'cli脚手架', link: '/front-end/engineering/pnpm/index' },
								{
									text: 'frame',
									collapsed: true,
									link: '/front-end/engineering/frame/index',
									items: [
										{ text: 'css框架', link: '/front-end/engineering/frame/css' },
										{
											text: 'js框架',
											collapsed: true,
											items: [
												{
													text: 'vue',
													collapsed: true,
													items: [
														{ text: 'vue2', link: '/front-end/index' },
														{ text: 'vue3', link: '/front-end/index' },
													]
												},
											]
										},
									]
								},
								{
									text: '库',
									collapsed: true,
									items: [
										{ text: '代码质量', link: '/front-end/index' },
										{ text: '组件库', link: '/front-end/index' },
										{ text: '工具库', link: '/front-end/index' },
										{ text: '插件库', link: '/front-end/index' },
										{ text: '字体图标库', link: '/front-end/index' },
										{ text: '动效库', link: '/front-end/index' },
										{ text: '字体图标库', link: '/front-end/index' },
									]
								},
								{
									text: '代码质量',
									collapsed: true,
									items: [
										{ text: '开发规范', link: '/front-end/index' },
										{ text: 'TypeScript', link: '/front-end/index' },
										{ text: '代码检查', link: '/front-end/index' },
										{ text: '代码格式化', link: '/front-end/index' },
										{ text: '提交检查', link: '/front-end/index' },
									]
								},
								{ text: '构建工具', link: '/front-end/index' },
								{ text: '测试', link: '/front-end/index' },
								{ text: '持续集成', link: '/front-end/index' },
								{ text: '部署', link: '/front-end/index' },
							]
						},
						{
							text: '框架',
							collapsed: true,
							items: [
								{
									text: 'vue',
									collapsed: true,
									items: [
										{ text: 'vue2', link: '/front-end/index' },
										{ text: 'vue3', link: '/front-end/index' },
									]
								},
								{ text: '域名', link: '/front-end/index' },
							]
						},
						{
							text: '前端优化',
							collapsed: true,
							items: [
								{ text: '性能优化', link: '/front-end/index' },
								{ text: '用户体验', link: '/front-end/index' },
								{ text: '兼容性', link: '/front-end/index' },
								{ text: 'SEO', link: '/front-end/index' },
								{
									text: '安全',
									items: [
										{ text: '⭐️ XSS', link: '/front-end/index' },
										{ text: 'CSRF', link: '/front-end/index' },
										{ text: '反爬虫', link: '/front-end/index' },
										{ text: 'SQL 注入', link: '/front-end/index' },
										{ text: 'DDoS', link: '/front-end/index' },
									]
								},
							]
						},
						{
							text: '微前端',
							collapsed: true,
							items: [
								{ text: 'qiankun https://zhuanlan.zhihu.com/p/96464401', link: '/front-end/index' },
								{ text: 'single-spa', link: '/front-end/index' },
								{ text: 'single-spa', link: '/front-end/index' },
							]
						},

						{
							text: '大前端',
							collapsed: true,
							items: [
								{ text: 'qiankun https://zhuanlan.zhihu.com/p/96464401', link: '/front-end/index' },
								{ text: 'single-spa', link: '/front-end/index' },
								{ text: 'single-spa', link: '/front-end/index' },
							]
						},
						{
							text: '技术博客',
							collapsed: true,
							items: [
								{ text: 'qiankun https://zhuanlan.zhihu.com/p/96464401', link: '/front-end/index' },
								{ text: 'single-spa', link: '/front-end/index' },
								{ text: 'single-spa', link: '/front-end/index' },
							]
						},

						{
							text: '编辑器',
							collapsed: true,
							items: [
								{ text: 'Markdown Examples', link: '/markdown-examples' },
								{ text: 'Runtime API Examples', link: '/front-end/index' }
							]
						},
						{
							text: '文档笔记',
							collapsed: true,
							items: [
								{ text: '✅ Markdown 语法', link: '/markdown-examples' },
								{ text: '✅ Typora', link: '/front-end/index' }
							]
						},
					]
				}
				// , {
				// 	text: '面试',
				// 	items: [
				// 		{ text: 'Markdown Examples', link: '/markdown-examples' },
				// 		{ text: 'Runtime API Examples', link: '/front-end/index' }
				// 	]
				// },
			],
			'/interview/': [
				{
					text: '面试',
					items: [
						{
							text: 'css',
							items: [
								{ text: 'css', link: '/interview/front-end/index' },
								{ text: 'Three', link: '/config/three' },
								{ text: 'Four', link: '/config/four' }
							]
						},
						{
							text: 'js',
							items: [
								{ text: 'css', link: '/interview/front-end/index' },
								{ text: 'Three', link: '/config/three' },
								{ text: 'Four', link: '/config/four' }
							]
						}
					]
				}
			]
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
		]
	}
})
