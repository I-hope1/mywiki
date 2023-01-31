<script>
const list = [
	{ name: "menu", link: "#" },
	{ name: "download", link: "#" },
];
const { content } = globalData;
module.exports = {
	data() {
		return {
			list: list,
			focus: list[0].name,
		};
	},
	computed: {},
	mounted() {
		content.focus = this.focus;
	},
	methods: {
		sw(event) {
			content.focus = this.focus = event.target.innerText;
		},
	},
};
</script>
<template>
	<a
		v-for="item in list"
		:class="{
			TopButton: true,
			active: focus == item.name,
		}"
		@click="sw"
	>
		<font>{{ item.name }}</font>
	</a>
</template>
<style>
.top {
	display: flex;
	position: fixed;
	top: 0%;
	padding-top: 1rem;
	padding-left: 1rem;
	width: 100%;
	/* align-items: flex-start; */
	/* justify-content: flex-start; */
	/* justify-items: flex-start; */
}
.TopButton {
	text-decoration: none;
	color: gray;
	margin: 0em;
	padding: 9px 2px;
	appearance: auto;
	text-rendering: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	height: 2rem;
	margin-left: 2rem;
	border: none;
	/* background-color: rgba(0, 0, 0, 0); */
	/* border-bottom: 2px solid rgb(121, 121, 242); */
	outline: none;
	transition: 0.2s all;
}
.TopButton > font {
	flex: 1;
}
.TopButton::after {
	content: "";
	width: 140%;
	/*position: absolute;*/
	height: 2px;

	transition: 0.2s all;
	background-color: darkgray;
}
.active::after,
.TopButton:hover::after {
	background-color: rgb(0, 255, 255);
}
.active::after {
	box-shadow: rgb(0, 255, 255) 0px 0px 20px 1px, rgb(0, 255, 255) 0px 0px 20px 1px;
}

.TopButton:hover {
	/* background-color: skyblue; */
	color: #fff;
}
.active > font {
	color: #ddd;
	text-shadow: 0px 0px 10px #ccffff;
}
</style>
