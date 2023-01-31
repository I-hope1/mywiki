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
	<menu v-if="focus == 'menu'"></menu>
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
