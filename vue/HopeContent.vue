<script>
module.exports = {
	data() {
		return {
			focus: "",
		};
	},
	mounted() {
		globalData.content = this;
	},
};
</script>
<template>
	<Menu v-if="focus == 'menu'"></Menu>
	<Download v-if="focus == 'download'"></Download>
	<!-- </div> -->
</template>
<style>
.content {
	display: inline-block;
}
.hide {
	display: none;
}
</style>
