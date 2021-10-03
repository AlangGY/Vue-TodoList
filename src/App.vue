<template>
  <div class="app__inner">
    <Title />
    <TodoList />
  </div>
</template>

<script>
import Title from '~/components/Title';
import TodoList from '~/components/todolist';

export default {
  components : {
    Title,
    TodoList
  }
};
</script>