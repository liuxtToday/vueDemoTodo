<template>
	<div class='list-item editingClass editing'>
		<!-- 勾选框 -->
		<label class='checkbox'>
			<input v-model='item.checked' type='checkbox'>
			<span class='checkbox-custom'></span>
		</label>
		<!-- 输入区域 -->
		<input type="texst" v-model="item.text" placeholder="写点什么吧">
		<!-- 删除icon -->
		<a class="delete-item">
	    	<span class="icon-trash"></span>
	    </a>
	</div>
</template>

<script>
	export default {
		props: ['item']
	};
</script>

<style lang="less">
	@import '../common/style/list-items.less';
</style>