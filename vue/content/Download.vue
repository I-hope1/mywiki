<script>
const list = [
	{ value: "mod-tools", href: "download/mod-tools136-1.4.3.jar" },
	// { value: "mod.make", link: "#" },
	{ value: "betterjs", href: "download/BetterJS-1.2.4.jar" },
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
		<a v-for="item in list" class="link" :href="item.href" :download="item.value">{{
			item.value
		}}</a>
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
	background: rgba(1, 1, 1, 0.1);
	text-decoration: none;
	flex: 100%;
	display: block;
	padding: 1rem 2rem;
	margin: 0.5rem 0;
	border: 4px solid #ccccff66;
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
