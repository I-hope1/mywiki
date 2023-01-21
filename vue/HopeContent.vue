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
	<div v-if="focus == 'menu'" style="width: 100px; height: 100px; background: blue"></div>
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
