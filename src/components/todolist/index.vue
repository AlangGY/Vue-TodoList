<template>
  <div class="todo-list__inner">
    <TodoForm @add-todo="addTodo" />
    <TodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo" />
    <TodoCount :todos="todos" />
  </div>
</template>

<script>
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoCount from './TodoCount';


export default {
  components : {
    TodoForm,
    TodoList,
    TodoCount
  },
  computed : {
    todos(){
      return this.$store.state.todos.todos;
    }
  },
  watch : {
    todos : {
      handler(newTodos){
        this.$store.commit('todos/setTodos', newTodos);
      },
      deep : true 
    }
  },
  created(){
    this.getTodos();
  },
  methods : {
    getTodos(){
      this.$store.commit('todos/getTodos');
    },
    addTodo(text){
      this.$store.commit('todos/addTodo', text);
    },
    toggleTodo(id){
      this.$store.commit('todos/toggleTodo', id);
    },
    deleteTodo(id){
      console.log('delete!');
      this.$store.commit('todos/deleteTodo', id);
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-list__inner {
  height: 500px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $color-background--bright;
  box-shadow: 0px 0px 2px 1px rgba(black,0.1);
}
</style>