const { createApp } = Vue;

// let components = {}

window.globalData = {
	focus: 'menu'
}

/* let loadedCount = 0, totalCount = 0;
const callback = () => {
	app.mount("div.container")
} */
let current;
async function load(path, name, _app) {
	// 从一个单文件组件中导入根组件
	let last = httpVueLoader(`./vue/${path}.vue`)();
	let v = await last;
	// console.log(v);
	const app = _app || createApp({});
	app.component(name, v);
	return app;
	// console.log(v);
	// app.mount(mount)
	// components[name] = v;
}
(async function () {
	const content = await load("content/Download", "Download");
	await load("HopeContent", "hopecontent", content);
	content.mount(".content")

	const topApp = await load("TopButton", "topbutton");
	topApp.mount(".top")
})()