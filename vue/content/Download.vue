<script>
const list = [
	{ value: "mod-tools", version: '1.4.3.2', href: "download/mod-tools136" },
	// { value: "mod.make", link: "#" },
	{ value: "betterjs", version: '1.2.4', href: "download/BetterJS" },
	{ value: "mod.make", version: "1.4", href: "download/mod.make136" },
];

module.exports = {
	data() {
		return {
			list: list,
		};
	},
};
</script>

<template>
	<div class="list">
		<a
			v-for="item in list"
			class="link"
			:href="`${item.href}-${item.version}.jar`"
			:download="`${item.value}-${item.version}.jar`"
			>{{
			item.value
			}}</a
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
	display: flex;
	justify-content: center;
	width: 100%;
	background: rgba(1, 1, 1, 0.1);
	text-decoration: none;
	flex: 100%;
	padding: 1rem 1rem;
	margin: 0.5rem 0;
	border: 1px solid #ccccff33;
	transition: all 0.2s;
	box-shadow: rgb(84, 84, 255) 5px 5px 2px 2px, rgb(5, 47, 255) 5px 5px 2px 2px,
		rgb(19, 45, 217) 5px 5px 2px 2px, rgb(3, 3, 255) -3px -4px 2px 2px;
	border-radius: 1rem;
}
.link:hover {
	color: #fff;
	border-color: rgb(2, 2, 164);
	box-shadow: inset rgb(2, 2, 164) 5px 5px 10px 2px, rgb(5, 47, 255) 5px 5px 2px 2px,
		rgb(19, 45, 217) 3px 3px 3px 2px, rgb(3, 3, 255) -3px -4px 2px 2px;
}
</style>
