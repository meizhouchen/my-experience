import * as backEnd from './config/back-end.js'
import * as frontEnd from './config/front-end'
import { defineConfig } from 'vitepress'
import allin from 'css-allin-class'
import preset from 'css-allin-class/preset'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	vite: {
		plugins: [
			allin({ unit:'px', prefix:'a-', presets:[preset()]})
		]
	},
	base: '/my-experience/',
	title: "经验记录",
	description: "我的技术经验",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '首页', link: '/' },
			{ text: '前端', link: '/front-end/index' },
			{ text: '后端', link: '/back-end/index' },
			{ text: '面试', link: '/interview/front-end/index' }
		],
		sidebar: {
      '/back-end/': backEnd.sidebar,
			'/front-end/': frontEnd.sidebar,
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
