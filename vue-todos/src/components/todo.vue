<template>
	<div class="page lists-show">
		<nav>
			<!-- 移动端的菜单图标 -->
			<div class='nav-group'>
				<a class="nav-item">
					<span class='icon-list-unordered'></span>
				</a>
			</div>
			<!-- 标题 -->
			<h1 class="title-page">
				<span class='title-wrapper'>{{todo.title}}</span>
				<span class='count-list'>{{todo.count}}</span>
			</h1>
			<!-- 右边的删除、锁定图标 -->
			<div class="nav-group right"><!-- 右边的删除，锁定图标容器-->
		       	 <div class="options-web"> 
		         	<a class=" nav-item"> <!-- 锁定图标-->
			            <span class="icon-lock" v-if="todo.locked"></span>
			            <span class="icon-unlock" v-else></span>
			        </a>
		          	<a class=" nav-item"><!-- 删除图标-->
		            	<span class="icon-trash"></span>
		          	</a>
		        </div>
		    </div>
		    <!-- 单个代办单项输入框 -->
		    <div class=" form todo-new input-symbol">
	        	<input type="text" v-model="text" placeholder='请输入'@keyup.enter="onAdd" :disabled="todo.locked" />
	        	<span class="icon-add"></span>
	     	</div>
		</nav>
		<!-- 容器下半部分 -->
		<div class="content-scrollable list-items">
			<div v-for='item in items'>
				<item :item='item'></item>
			</div>
    	</div>
	</div>
</template>

<script>
	import item from './item';
	export default {
		data () {
			return {
				todo: {
					title: '星期一',
					count: 12,
					locked: false
				},
				text: '',
				items: [
					{ checked: false, text: '新的一天', isDelete: false },
        			{ checked: false, text: '新的一天', isDelete: false },
       				{ checked: false, text: '新的一天', isDelete: false }
				]
			}
		},
		methods: {
			onAdd() {
				this.items.push({checked:false, text: this.text, isDelete:false});
				this.text = '';
			}
		},
		components: {
			item
		}
	}
</script>

<style lang = "less">
	@import '../common/style/nav.less';
	@import '../common/style/form.less';
	@import '../common/style/todo.less';
</style>














