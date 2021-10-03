<template>
  <div class="todo-list__inner">
    <TodoForm />
    <TodoList
      :todos="todos"
      @toggle-todo="toggleComplete"
      @delete-todo="deleteTodo" />
    <TodoCount />
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
  created(){
    this.getTodos();
  },
  methods : {
    getTodos(){
      const todos = getItem(storageKeys.todos, []);
      this.todos = todos;
    },
    setTodos(text){
      const todos = getItem(storageKeys.todos, []);
      todos.push({ 
        id : Date.now() + Math.random(),
        text,
        isCompleted : false
      });
      setItem(storageKeys.todos, todos );
    },
    toggleComplete(id){
      const idx = this.todos.findIndex(todo => todo.id === id);
      this.todos[idx].isCompleted = !this.todos[idx].isCompleted;
    },
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>