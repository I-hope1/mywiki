<script>
const list = [
	{ value: "mod-tools", link: "download/mod-tools136-1.4.3.jar" },
	{ value: "mod.make", link: "" },
	{ value: "betterjs", link: "" },
];
module.exports = {
	data() {
		return {
			list: list,
		};
	},
	computed: {},
};
</script>
<template>
	<div class="content">
		<!-- <div class="wrapper" v-for="item in list"> -->
		<a v-for="item in list" class="link" :href="item.link" download>{{ item.value }}</a>
	</div>
	<!-- </div> -->
</template>
<style scoped>
.content {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.link {
	display: block;
	padding: 1rem 2rem;
	box-shadow: 6px 6px 4px 2px #ccf, -6px -6px 4px 2px #ccccff55;
}
</style>
