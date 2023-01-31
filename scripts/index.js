
import * as Vue from 'https://unpkg.com/vue@3.2.45/dist/vue.esm-browser.prod.js'
/*import Download from '../vue/content/Download.vue';
import HopeContent from '../vue/HopeContent.vue';
import TopButton from '../vue/TopButton.vue';*/
//*const Download = async httpVueLoader('../vue/content/Download')

const { createApp } = Vue;
window.globalData = {}
/*0
const contentApp = createApp({
	comments: {
		Download, HopeContent
	}
});
contentApp.mount(".content");
const topApp = createApp({
	comments: {
		TopButton
	}
});
topApp.mount(".top");*/


async function load(path, name, _app) {
	// 从一个单文件组件中导入根组件
	let v = await httpVueLoader(`./vue/${path}.vue`)();
	// console.log(v);
	const app = _app || createApp({});
	app.component(name, v);
	return app;
};
(async function () {
	const content = await load("content/Download", "Download");
	await load("content/Menu", "Menu", content);
	await load("HopeContent", "hopecontent", content);
	content.mount(".content")

	const topApp = await load("TopButton", "topbutton");
	topApp.mount(".top")
})();