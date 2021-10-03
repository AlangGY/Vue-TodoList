<template>
  <div class="todo-list__count">
    <span class="count__done">{{ todoDoneCount }}</span>
    <span class="divider">/</span>
    <span class="count__total">{{ todoTotalCount }}</span>
  </div>
</template>

<script>
export default {
  props : {
    todos : {
      type : Array,
      default : () => []
    }
  },
  computed : {
    todoDoneCount(){
      return this.todos.filter(todo => todo.isCompleted).length;
    },
    todoTotalCount(){
      return this.todos.length;
    }

  }
};
</script>