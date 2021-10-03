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
import { storageKeys, getItem, setItem } from '~/util/storage.js';


export default {
  components : {
    TodoForm,
    TodoList,
    TodoCount
  },
  data(){
    return {
      todos : []
    };
  },
  watch : {
    todos : {
      handler(newTodos){
        setItem(storageKeys.todos, newTodos);
      },
      deep : true 
    }
  },
  created(){
    this.getTodos();
  },
  methods : {
    getTodos(){
      const todos = getItem(storageKeys.todos, []);
      this.todos = todos;
    },
    addTodo(text){
      this.todos.push({ 
        id : Date.now() + Math.random(),
        text,
        isCompleted : false
      });
    },
    toggleTodo(id){
      const idx = this.todos.findIndex(todo => todo.id === id);
      this.todos[idx].isCompleted = !this.todos[idx].isCompleted;
    },
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
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