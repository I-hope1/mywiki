const { createApp } = Vue

// let components = {}
const app = createApp({
	data() {
		return {}
	},
})
const load = (path, name, callback) => {
	// 从一个单文件组件中导入根组件
	httpVueLoader(`./vue/${path}.vue`)().then(v => {
		// const app = createApp({})
		app.component(name, v)
		// app.mount(mount)
		// components[name] = v;
		if (callback != null) callback()
	});
}

load("HopeContent", "hopecontent")
load("TopButton", "topbutton", () => {
	app.mount("div.container")
});