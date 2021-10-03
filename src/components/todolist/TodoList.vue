<template>
  <div class="todo-list__lists">
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id">
        <span
          :style="{textDecoration: `${todo.isCompleted ? 'line-through' : ''}`}"
          class="todo__text">{{ todo.text }}</span>
        <button @click="toggleTodo(todo.id)">
          👌
        </button>
        <button @click="deleteTodo(todo.id)">
          x
        </button>
      </li>
    </ul>
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
  emits : ['toggle-todo', 'delete-todo'],
  methods : {
    toggleTodo(id){
      this.$emit('toggle-todo', id);
    },
    deleteTodo(id){
      this.$emit('delete-todo', id);
    }
  }
};
</script>