<script>
const list = [
	{ value: "mod-tools", link: "download/mod-tools136-1.4.3.jar" },
	{ value: "mod.make", link: "_" },
	{ value: "betterjs", link: "download/BetterJS-1.2.3.jar" },
];

module.exports = {
	data() {
		return {
			list: list,
		};
	},
	/* updated() {
		this.$ref.div.classList[globalData.focus == "download" ? "remove" : "add"]("hide");
	}, */
};
</script>

<template>
	<div class="list">
		<a
			v-for="item in list"
			class="link"
			:href="item.link"
			:download="link == null ? false : true"
			>{{ item.value }}</a
		>
	</div>
</template>

<style scoped>
.list {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.link {
	color: #ccc;
	text-decoration: none;
	display: block;
	padding: 1rem 2rem;
	margin: 0.5rem 0;
	box-shadow: 6px 6px 4px 2px #ccf, -6px -6px 4px 2px #8e8ec655;
	border-radius: 1rem;
}
.link:hover {
	color: #fff;
}
</style>
