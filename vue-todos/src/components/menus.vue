<template>
	<div class='list-todos'>
		<a class='list-todo activeListClass list' v-for='item in items' @click='goList(item.id)' :class="{'active': item.id === todoId}">
			<span class="icon-lock" v-if='item.locked'></span>
			<span class="count-list" v-if='item.count>0'>{{item.count}}</span>
			{{item.title}}
		</a>
		<a class="link-list-new" @click=addTodoList>
			<span class="icon-plus"></span>
			新增
		</a>
	</div>
</template>

<script>

	import {getTodoList, addTodo} from '../API/api';
	import router from '../router' 

	export default {
		data() {
			return {
				items: [],
				todoId: '',
				router
			}
		},
		created() {
			getTodoList({}).then(res => {
				const TODOS = res.data.todos;
				this.items = TODOS;
				this.todoId = TODOS[0].id;
			})
		},
		watch: {
			'todoId'(id) {
				this.$router.push({ name: 'todo', params: { id: id } });
			}
		},
		methods: {
			goList(id) {
				this.todoId = id;
			},
			addTodoList() {
				addTodo({}).then(data => {
					getTodoList({}).then(res => {
						const TODOS = res.data.todos;
						this.todoId = TODOS[TODOS.length - 1].id;
          				this.items = TODOS;
					})
				})
			}
		}
		
	}
</script>

<style lang='less'>
	@import '../common/style/menu.less';
</style>