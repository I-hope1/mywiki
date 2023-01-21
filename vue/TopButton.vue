<script>
const list = [
	{ name: "menu", link: "#" },
	{ name: "download", link: "#" },
];
module.exports = {
	data() {
		return {
			list: list,
			focus: list[0].name,
		};
	},
	computed: {},
	mounted() {
		globalData.content.focus = this.focus;
	},
	methods: {
		sw(event) {
			globalData.content.focus = this.focus = event.target.innerText;
			console.log(this.focus);
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
		{{ item.name }}
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
	padding: 2px 9px;
	appearance: auto;
	text-rendering: auto;
	display: flex;
	align-items: center;
	justify-content: center;

	height: 2rem;
	margin-left: 1rem;
	border: none;
	/* background-color: rgba(0, 0, 0, 0); */
	border-bottom: 2px solid rgb(121, 121, 242);
	outline: none;
	transition: 0.1s all;
}
.TopButton:hover {
	/* background-color: skyblue; */
	color: #fff;
	border-bottom-color: rgb(0, 255, 255);
}
.active {
	color: #ddd;
	text-shadow: 1px 1px 10px #ffffff;
	border-bottom-color: rgb(10, 227, 227);
}
</style>
