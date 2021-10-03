<template>
  <div class="todo-list__inner">
    <TodoForm />
    <TodoList />
    <TodoCount />
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
  }
};
</script>