<template>
  <div class="todo-list__lists">
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="{'completed' : todo.isCompleted}"
        @click="toggleTodo(todo.id)">
        <span
          :alt="todo.text"
          class="todo__text">{{ todo.text }}</span>
        <span
          v-if="todo.isCompleted"
          class="todo__done--text">
          Done!
        </span>
        <button
          class="todo__delete--button"
          @click.stop="deleteTodo(todo.id)">
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

<style lang="scss" scoped>
.todo-list__lists {
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  ul {
    padding: 10px;
    overflow-y: scroll;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    li {
      cursor: pointer;
      border-radius: 5px;
      box-shadow: 0 0 1px 1px rgba(black,.3);
      flex-shrink: 0;
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;
      padding: 10px;
      overflow: hidden;
      &.completed {
        background-color: $color-red;
        .todo__text {
          text-decoration: line-through;
        }
        &:hover {
          background-color: $color-green;
        }
      }
      &:hover {
        background-color: $color-red;
        .todo__delete--button {
          display: inline-block;
        }
      }
      .todo__text {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .todo__done--text {
        position: absolute;
        right: 60px;
        display: inline-block;
        font-weight: bold;
        color: color.adjust($color-font,$lightness: 80%);
        margin-left: 20px;
      }
      .todo__delete--button {
        cursor: pointer;
        position: absolute;
        display: none;
        right: 10px;
        width: 40px;
        height: 40px;
        font-size: 30px;
        background-color: rgba(white,.1);
        border: none;
        border-radius: 5px;
        box-shadow: 0 0 5px 1px rgba(black, .1);
        &:hover {
          background-color: rgba(white,.6);
        }
      }
    }
  }
}
</style>