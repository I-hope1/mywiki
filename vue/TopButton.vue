<script>
const list = [
	{ name: "DOWNLOAD", link: "#" },
	{ name: "aaa", link: "#" },
];
module.exports = {
	data() {
		return { list: list };
	},
	computed: {},
};
</script>
<template>
	<div class="top">
		<a v-for="item in list" :href="item.link" class="TopButton">
			{{ item.name }}
		</a>
	</div>
</template>
<style scoped>
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
	background-color: rgba(0, 0, 0, 0);
	border-bottom: 2px solid rgb(59, 59, 219);
	outline: none;
	transition: 0.1s all;
}
.TopButton:hover {
	background-color: skyblue;
	color: #333;
}
</style>
