<template>
  <div class="todo-list__count">
    <span class="count__done"> 완료 : {{ todoDoneCount }}</span>
    <span class="divider">/</span>
    <span class="count__total">총 : {{ todoTotalCount }}</span>
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

<style lang="scss" scoped>
.todo-list__count {
  padding: 10px;
  font-size: 35px;
  padding-bottom: 30px;
  .divider {
    display: inline-block;
    margin: 0 10px;
  }
}
</style>