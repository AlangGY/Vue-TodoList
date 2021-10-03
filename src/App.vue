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

<style lang="scss" scoped>
.app__inner {
  height: 100vh;
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 22px;
  white-space: 1.4;
  color: $color-font;
  background-color: $color-background;
  h1 {
    font-size: 40px;
  }
}
</style>